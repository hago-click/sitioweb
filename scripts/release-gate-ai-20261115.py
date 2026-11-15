#!/usr/bin/env python3
"""Read-only, public HTTP release gate for hago.click's AI Visibility changes.
No personal data, credentials, submissions or state-changing operations. MCP POSTs
contain only public JSON-RPC queries (initialize, tools/list, optionally tools/call).
"""
import urllib.request, urllib.error, json, re, sys, html
from html.parser import HTMLParser
from urllib.parse import urljoin

BASE=(sys.argv[1] if len(sys.argv)>1 else "https://hago.click").rstrip("/")
RESULTS=[]
class Parser(HTMLParser):
 def __init__(self,source):
  super().__init__();self.tags=[];self.feed(source)
 def handle_starttag(self,tag,attrs):self.tags.append((tag,dict(attrs)))
 def find(self,tag):return [a for t,a in self.tags if t==tag]
def add(name,ok,detail=None,group="main"):
 RESULTS.append({"check":name,"pass":bool(ok),"detail":detail,"group":group})
def get(path,headers=None,method="GET",data=None):
 url=urljoin(BASE+"/",path.lstrip("/"))
 req=urllib.request.Request(url,headers={"User-Agent":"HagoClick-ReadOnly-QA/1.0",**(headers or {})},data=data,method=method)
 try:
  with urllib.request.urlopen(req,timeout=25) as res:
   return res.status,dict(res.headers),res.read().decode("utf-8","replace"),res.url
 except urllib.error.HTTPError as e:
  return e.code,dict(e.headers),e.read().decode("utf-8","replace"),url

routes=["/","/piloto","/quiero-aportar","/tengo-una-idea"]+[
 "/tema/"+x for x in ["tecnologia-y-software","diseno-y-productos","fabricacion-y-prototipos","emprendimientos-y-negocios","proyectos-sociales","agricultura-y-sostenibilidad"]]
pages={}
for p in routes:
 status,headers,body,url=get(p)
 pages[p]=body
 add(f"old route HTTP 200: {p}",status==200,status,"regression")
 if status!=200:continue
 tags=Parser(body)
 add(f"old route unique H1: {p}",len(tags.find("h1"))==1,len(tags.find("h1")),"regression")
 add(f"old route canonical: {p}",any(a.get("href")==BASE+(p if p!="/" else "/") for a in tags.find("link") if a.get("rel")=="canonical"),None,"regression")

home=pages.get("/","")
for path in ["/acerca-de","/contacto","/privacidad","/terminos","/acuerdos"]:
 status,head,body,url=get(path)
 add(f"trust route: {path}",status==200,{"status":status,"url":url},"trust")
 if status==200 and path=="/acuerdos":
  flat=re.sub(r"<script[^>]*>.*?</script>|<style[^>]*>.*?</style>","",body,flags=re.S|re.I)
  visible=html.unescape(re.sub("<[^>]*>"," ",flat))
  add("policy explicitly delegates terms",bool(re.search(r"acuerd|directamente|voluntari|intercambio",visible,re.I)),visible[:300],"policy")
  add("no visible numerical prices",not bool(re.search(r"(?:\$|MXN|USD|EUR|€)\s*\d+(?:[,.]\d+)*",visible,re.I)),None,"policy")
for path in ["/about","/terms"]:
 status,headers,body,url=get(path)
 add(f"trust alias: {path}",status==200,{"status":status,"finalUrl":url},"trust")
 hrefs=[x.get("href") for x in Parser(home).find("a")]
 add(f"direct homepage link: {path}",path in hrefs,hrefs.count(path),"trust")
status,headers,body,url=get("/precios")
add("legacy pricing route not broken",status==200,{"status":status,"finalUrl":url},"policy")
if status==200:
 flat=re.sub(r"<script[^>]*>.*?</script>|<style[^>]*>.*?</style>","",body,flags=re.S|re.I)
 visible=html.unescape(re.sub("<[^>]*>"," ",flat))
 add("no monetary pricing table in old URL",not bool(re.search(r"(?:\$|MXN|USD|EUR|€)\s*\d+(?:[,.]\d+)*",visible,re.I)),None,"policy")
status,headers,body,url=get("/",{"Accept":"text/markdown"})
add("homepage Content Negotiation",status==200 and "text/markdown" in headers.get("Content-Type","").lower() and body.lstrip().startswith("#"),{"status":status,"mime":headers.get("Content-Type")},"agents")
status,headers,body,url=get("/index.md")
add("published Markdown resource",status==200 and "text/markdown" in headers.get("Content-Type","").lower(),{"status":status,"mime":headers.get("Content-Type")},"agents")
for p in ["/robots.txt","/sitemap.xml","/llms.txt"]:
 status,headers,body,url=get(p)
 add("foundational "+p,status==200,status,"regression")
status,headers,body,url=get("/unlikely-path-404-check-20261115")
add("real HTTP 404",status==404,status,"regression")

scripts=re.findall(r'<script\s+[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',home,re.S|re.I)
schemas=[]
for s in scripts:
 try:schemas.append(json.loads(html.unescape(s)))
 except ValueError:pass
add("Organization schema exists",any(x.get("@type")=="Organization" for x in schemas),[x.get("@type") for x in schemas],"regression")
add("no fictitious Offer schema",not any(x.get("@type")=="Offer" for x in schemas),None,"policy")
add("five FAQ are present",any(x.get("@type")=="FAQPage" and len(x.get("mainEntity",[]))==5 for x in schemas),None,"regression")

status,headers,cardraw,url=get("/.well-known/mcp/server-card.json")
card=None
if status==200 and "json" in headers.get("Content-Type","").lower():
 try:card=json.loads(cardraw)
 except ValueError:pass
add("MCP card served as JSON",bool(card),{"status":status,"mime":headers.get("Content-Type")},"mcp")
if card:
 transport=card.get("transport",{}) if isinstance(card.get("transport",{}),dict) else {}
 endpoint=transport.get("endpoint") or card.get("endpoint")
 add("MCP card has real endpoint",bool(endpoint),endpoint,"mcp")
 if endpoint:
  url=urljoin(BASE+"/",str(endpoint).lstrip("/"))
  rpc={"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":card.get("protocolVersion","2025-06-18"),"capabilities":{},"clientInfo":{"name":"hago-click-qa","version":"1.0.0"}}}
  try:
   req=urllib.request.Request(url,data=json.dumps(rpc).encode(),headers={"Content-Type":"application/json","Accept":"application/json, text/event-stream","MCP-Protocol-Version":rpc["params"]["protocolVersion"]},method="POST")
   with urllib.request.urlopen(req,timeout=20) as r:
    init=r.read(50000).decode("utf-8","replace")
    session=r.headers.get("Mcp-Session-Id")
    add("MCP initialize responds",r.status==200 and ("result" in init or "event:" in init),{"status":r.status,"response":init[:500]},"mcp")
   toolreq={"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}
   hdr={"Content-Type":"application/json","Accept":"application/json, text/event-stream","MCP-Protocol-Version":rpc["params"]["protocolVersion"]}
   if session:hdr["Mcp-Session-Id"]=session
   req2=urllib.request.Request(url,data=json.dumps(toolreq).encode(),headers=hdr,method="POST")
   with urllib.request.urlopen(req2,timeout=20) as r:
    toolsbody=r.read(50000).decode("utf-8","replace")
    add("MCP tools/list responds",r.status==200 and "tools" in toolsbody,{"status":r.status,"response":toolsbody[:500]},"mcp")
  except Exception as e:add("MCP endpoint operates",False,str(e)[:300],"mcp")
res={"base":BASE,"checked":len(RESULTS),"passed":sum(r["pass"] for r in RESULTS),"failed":[r for r in RESULTS if not r["pass"]],"checks":RESULTS}
print(json.dumps(res,ensure_ascii=False,indent=2))
sys.exit(0 if not res["failed"] else 1)
