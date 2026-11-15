const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs');
const output=process.env.HAGO_REPORT||'webmcp-native.json';
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox','--enable-features=WebMCP','--enable-webmcp-testing']});
 const p=await browser.newPage({viewport:{width:1440,height:900}});
 const errors=[];p.on('pageerror',e=>errors.push(e.message));
 const response=await p.goto(process.env.HAGO_BASE||'https://hago.click/',{waitUntil:'domcontentloaded',timeout:40000});
 await p.waitForTimeout(750);
 const result=await p.evaluate(async()=>{
  const m=document.modelContext;
  if(!m)return {nativeAvailable:false,tools:[]};
  const ts=await m.getTools();
  const ret=[];
  for(const t of ts){
   const row={name:t.name,description:t.description,readOnly:t.annotations?.readOnlyHint,inputSchema:t.inputSchema,call:{ok:false}};
   if(/^get_(topics|participation_options|collaboration_policy|pilot_status|faq)$/.test(t.name)){
    try {
     const major=Number(navigator.userAgent.match(/Chrome\\/(\\d+)/)?.[1]||0);
     const args=major && major<155 ? JSON.stringify({}) : {};
     const result=await m.executeTool(t, args, {signal:new AbortController().signal});
     row.call={ok:true,result:typeof result==='string'?result.slice(0,1600):JSON.stringify(result).slice(0,1600)};
    }catch(e){row.call={ok:false,error:String(e)}}
   }
   ret.push(row);
  }
  return {nativeAvailable:true,tools:ret}
 });
 const out={timestamp:new Date().toISOString(),browser:await browser.version(),httpStatus:response.status(),errors,...result};
 fs.writeFileSync(output,JSON.stringify(out,null,2));
 console.log(JSON.stringify({nativeAvailable:out.nativeAvailable,browser:out.browser,tools:out.tools.map(t=>({name:t.name,readOnly:t.readOnly,callOk:t.call.ok})),errors:out.errors}));
 await browser.close();
})().catch(e=>{console.error('ERROR',e.stack);process.exitCode=1});
