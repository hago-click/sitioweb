import urllib.request, urllib.error, json, re, hashlib, sys
from html.parser import HTMLParser
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
class Page(HTMLParser):
 def __init__(self, text):
  super().__init__(); self.tags=[]; self.feed(text)
 def handle_starttag(self,t,a): self.tags.append((t,dict(a)))
def get(url):
 try:
  r=urllib.request.urlopen(url,timeout=30); return r.status,dict(r.headers),r.read().decode('utf-8')
 except urllib.error.HTTPError as e:return e.code,dict(e.headers),e.read().decode('utf-8')
def check(url):
 status,headers,text=get(url); p=Page(text)
 def tags(t):return [a for tag,a in p.tags if tag==t]
 title=re.search(r'<title>(.*?)</title>',text)
 metas={a.get('name',a.get('property')):a.get('content') for a in tags('meta')}
 schema=[json.loads(x) for x in re.findall(r'<script type="application/ld\+json">(.*?)</script>',text)]
 faq=next((x['mainEntity'] for x in schema if x.get('@type')=='FAQPage'),[])
 return dict(url=url,status=status,sha256=hashlib.sha256(text.encode()).hexdigest(),title=title.group(1) if title else None,description=metas.get('description'),canonical=[a.get('href') for a in tags('link') if a.get('rel')=='canonical'],h1=len(tags('h1')),lang=tags('html')[0].get('lang') if tags('html') else None,viewport=metas.get('viewport'),robots=metas.get('robots'),og={k:v for k,v in metas.items() if k and k.startswith('og:')},images=len(tags('img')),missing_alt=sum('alt' not in a for a in tags('img')),faq_count=len(faq),faq_in_html=all(q['name'] in text and q['acceptedAnswer']['text'] in text for q in faq),schema_types=[x.get('@type') for x in schema])
base=sys.argv[1].rstrip('/'); label=sys.argv[2]
folder=Path('evidence')/label;folder.mkdir(exist_ok=True)
sm=get(base+'/sitemap.xml');paths=re.findall(r'<loc>https?://[^/]+([^<]*)</loc>',sm[2]);urls=[base+p for p in paths]
results=list(ThreadPoolExecutor(max_workers=5).map(check,urls))
resources={}
for path in ['/','/sitemap.xml','/robots.txt','/llms.txt','/auditoria-404-hago-20261115']:
 status,headers,text=get(base+path);name='index.html' if path=='/' else path.strip('/');(folder/name).write_text(text)
 resources[path]={'status':status,'content_type':next((v for k,v in headers.items() if k.lower()=='content-type'),None),'bytes':len(text.encode())}
report={'base':base,'pages':results,'resources':resources}
(folder/'audit.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps(report,ensure_ascii=False,indent=2))
