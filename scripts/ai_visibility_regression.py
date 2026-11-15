#!/usr/bin/env python3
"""Read-only smoke test for AI Visibility changes on hago.click.

Run: python -X utf8 scripts/ai_visibility_regression.py https://hago.click
No credentials and no form submissions. JSON report to stdout.
"""
import html, json, re, sys, urllib.error, urllib.request
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse

BASE = (sys.argv[1] if len(sys.argv)>1 else "https://hago.click").rstrip("/")
NEW = ["/acerca-de", "/contacto", "/acuerdos", "/privacidad", "/terminos"]\nALIASES = ["/about", "/terms", "/precios"]
EXISTING = ["/", "/piloto", "/quiero-aportar", "/tengo-una-idea",
 "/tema/tecnologia-y-software", "/tema/diseno-y-productos",
 "/tema/fabricacion-y-prototipos", "/tema/emprendimientos-y-negocios",
 "/tema/proyectos-sociales", "/tema/agricultura-y-sostenibilidad"]
checks = []
def check(name, condition, note=""):
    checks.append({"name":name, "ok":bool(condition), "detail":note})
def get(path, accept=None):
    req=urllib.request.Request(urljoin(BASE+"/",path.lstrip("/")),
        headers={"User-Agent":"HagoClick-QA/1.0", **({"Accept":accept} if accept else {})})
    try:
        with urllib.request.urlopen(req,timeout=25) as r:
            return r.status, dict(r.headers), r.read().decode("utf-8",errors="replace")
    except urllib.error.HTTPError as e:
        return e.code, dict(e.headers), e.read().decode("utf-8",errors="replace")

class Tags(HTMLParser):
    def __init__(self, source):
        super().__init__(); self.tags=[]; self.feed(source)
    def handle_starttag(self,tag,attrs):self.tags.append((tag,dict(attrs)))
    def collect(self,tag):return [a for t,a in self.tags if t==tag]

pages={}
for route in EXISTING+NEW:
    status,headers,body=get(route)
    pages[route]={"status":status, "body":body, "headers":headers}
    check("route "+route+" HTTP 200",status==200,status)
    if status!=200:continue
    tags=Tags(body)
    check("one H1 "+route,len(tags.collect("h1"))==1,len(tags.collect("h1")))
    canonical=[a.get("href") for a in tags.collect("link") if a.get("rel")=="canonical"]
    check("canonical "+route,canonical==[BASE+route if route!="/" else BASE+"/"],canonical)
    check("title "+route,bool(re.search(r"<title>[^<]+</title>",body)))
    descriptions=[a.get("content") for a in tags.collect("meta") if a.get("name")=="description"]
    check("meta description "+route,len(descriptions)==1 and len(descriptions[0] or "")>=70)
    if route in NEW:
        # Aliases are optional SEO-compatible routes, not separately indexable copies.
for route in ALIASES:
    status, headers, body = get(route)
    check("alias "+route+" returns canonical content", status==200, status)
    if status==200:
        tags = Tags(body)
        can=[a.get("href") for a in tags.collect("link") if a.get("rel")=="canonical"]
        check("alias canonical "+route, bool(can and can[0] in (BASE+"/acerca-de",BASE+"/terminos",BASE+"/acuerdos",BASE+route)), can)
home=pages.get("/",{}).get("body","")
        check("footer/nav links to "+route,'href="'+route+'"' in home or 'href="'+BASE+route+'"' in home)

home=pages.get("/",{}).get("body","")
scripts=re.findall(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',home,re.S|re.I)
schema=[]
for chunk in scripts:
    try:schema.append(json.loads(html.unescape(chunk)))
    except ValueError:pass
def flattened(items):
    for o in items:
        if isinstance(o,dict):
            yield o
            if "@graph" in o:yield from flattened(o["@graph"])
entities=list(flattened(schema))
org=[o for o in entities if o.get("@type") in ("Organization","NGO")]
check("Organization JSON-LD",bool(org))
if org:
    one=org[0]
    check("Organization URL",one.get("url") in (BASE,BASE+"/"),one.get("url"))
    check("Organization email",one.get("email")=="contacto@hago.click",one.get("email"))
    check("Organization sameAs verified link",any(x=="https://github.com/hago-click/sitioweb" for x in one.get("sameAs",[])),one.get("sameAs",[]))
faq=[o for o in entities if o.get("@type")=="FAQPage"]
check("FAQ JSON-LD exists",bool(faq))
if faq:
    ans=faq[0].get("mainEntity",[])
    check("FAQ answers in HTML",all(q.get("name","") in home and q.get("acceptedAnswer",{}).get("text","") in home for q in ans),len(ans))
for resource in ("/robots.txt","/sitemap.xml","/llms.txt"):
    status,headers,body=get(resource)
    check(resource+" HTTP 200",status==200,status)
    if resource=="/sitemap.xml":
        for route in NEW:
            check("sitemap contains "+route,BASE+route in body)
    if resource=="/llms.txt":
        check("llms links Markdown", bool(re.search(r"https?://[^\s)]+\.md\b",body)))
status,negotiated_headers,negotiated_body=get("/",accept="text/markdown")
check("Markdown negotiation on homepage",status==200 and "text/markdown" in negotiated_headers.get("Content-Type","").lower() and not negotiated_body.lower().lstrip().startswith("<!doctype"),(status,negotiated_headers.get("Content-Type")))
status,headers,body=get("/index.md",accept="text/markdown")
md_good=status==200 and "html" not in headers.get("Content-Type","").lower() and "<!doctype html" not in body.lower()
check("real Markdown response /index.md",md_good,(status,headers.get("Content-Type")))
check("public $0 access statement",bool(re.search(r"(sin costo|\$0)",pages.get("/precios",{}).get("body",""),re.I)))
check("public variable service price",bool(re.search(r"(variable|acordad[oa]|pactad[oa])",pages.get("/precios",{}).get("body",""),re.I)))
status,card_headers,card_body=get("/.well-known/mcp/server-card.json")
card_valid=False
if status==200 and "json" in card_headers.get("Content-Type","").lower():
    try:
        card=json.loads(card_body)
        card_valid=bool(card.get("serverInfo",{}).get("name") and card.get("transport",{}).get("endpoint"))
    except ValueError:pass
check("MCP card valid JSON at exact path",card_valid,status)
status,headers,body=get("/verificacion-404-hago-20261115")
check("unknown page is 404",status==404,status)
failed=[c for c in checks if not c["ok"]]
print(json.dumps({"base":BASE,"checked":len(checks),"passed":len(checks)-len(failed),
 "failed":failed,"checks":checks},ensure_ascii=False,indent=2))
sys.exit(1 if failed else 0)
