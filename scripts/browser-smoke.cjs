/**
 * hago.click browser smoke: run against the published website with Playwright.
 * No form submission, no credentials, no server-side mutation.
 * Usage: PLAYWRIGHT_MODULE=/path/to/playwright node scripts/browser-smoke.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const base = process.env.HAGO_BASE || 'https://hago.click';
const out = process.env.HAGO_REPORT || path.resolve('browser-smoke.json');
const routes = [
  '/', '/tengo-una-idea', '/quiero-aportar', '/piloto',
  '/tema/tecnologia-y-software', '/tema/diseno-y-productos',
  '/tema/fabricacion-y-prototipos', '/tema/emprendimientos-y-negocios',
  '/tema/proyectos-sociales', '/tema/agricultura-y-sostenibilidad'
];
const checks = [];
function check(label, condition, details) {
  checks.push({ label, pass: Boolean(condition), details });
}
async function main() {
  const browser = await chromium.launch({headless:true,args:['--no-sandbox']});
  const consoleErrors = [];
  try {
    for (const width of [390, 768, 1440]) {
      const page = await browser.newPage({viewport:{width,height:844}});
      page.on('pageerror', e => consoleErrors.push({width,error:String(e)}));
      const res = await page.goto(base+'/',{waitUntil:'domcontentloaded',timeout:30000});
      await page.waitForTimeout(300);
      const state=await page.evaluate(() => ({
        innerWidth:window.innerWidth,scrollWidth:document.documentElement.scrollWidth,
        h1:document.querySelectorAll('h1').length,
        title:document.title,
        hasMain:Boolean(document.querySelector('main')),
        imagesMissingAlt:[...document.querySelectorAll('img')].filter(img=>!img.hasAttribute('alt')).length,
        video:[...document.querySelectorAll('video')].map(v=>({muted:v.muted,loop:v.loop,playsInline:v.playsInline})),
        details:document.querySelectorAll('details').length
      }));
      check('home HTTP 200 '+width, res && res.status()===200, res?.status());
      check('one H1 '+width, state.h1===1,state.h1);
      check('no horizontal overflow '+width, state.scrollWidth<=state.innerWidth+1, state);
      check('images have alt '+width, state.imagesMissingAlt===0, state.imagesMissingAlt);
      check('video muted loop '+width, state.video.length===0||state.video.every(v=>v.muted&&v.loop),state.video);
      if(width===390){
        const menu=page.getByRole('button',{name:/abrir menú/i});
        if(await menu.count()){
          await menu.first().click();
          check('mobile menu expands', (await menu.first().getAttribute('aria-expanded'))==='true');
        } else check('mobile menu exists', false, 'not found');
      }
      if(width===1440){
        const details=page.locator('details').first();
        if(await details.count()){
          const summary=details.locator('summary');
          await summary.focus();
          await page.keyboard.press('Enter');
          check('FAQ/details keyboard opens', await details.evaluate(d=>d.open));
          await page.keyboard.press('Enter');
          check('FAQ/details keyboard closes', !(await details.evaluate(d=>d.open)));
        } else check('FAQ/details exist',false,'not found');
      }
      await page.close();
    }
    const page=await browser.newPage({viewport:{width:390,height:844}});
    page.on('pageerror',e=>consoleErrors.push({route:page.url(),error:String(e)}));
    for(const route of routes){
      const res=await page.goto(base+route,{waitUntil:'domcontentloaded',timeout:30000});
      check('route HTTP 200 '+route, res?.status()===200, res?.status());
      check('route unique H1 '+route, (await page.locator('h1').count())===1);
      const hasCanonical=await page.locator('link[rel=canonical]').count();
      check('canonical '+route,hasCanonical===1,hasCanonical);
    }
    await page.goto(base+'/piloto',{waitUntil:'domcontentloaded'});
    const form=await page.evaluate(()=>({
      forms:document.querySelectorAll('form').length,
      inputs:document.querySelectorAll('form input,form textarea,form select').length,
      required:document.querySelectorAll('form [required]').length,
      actions:[...document.querySelectorAll('form')].map(f=>f.getAttribute('action')||'')
    }));
    check('pilot form exists',form.forms>=1,form);
    check('pilot has required fields',form.required>=3,form);
    const rm=await browser.newContext({reducedMotion:'reduce',viewport:{width:390,height:844}});
    const reduced=await rm.newPage();
    await reduced.goto(base+'/',{waitUntil:'domcontentloaded'});
    check('reduced motion environment accepted',await reduced.evaluate(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches));
    await rm.close();
    await page.close();
    check('no JS page errors', consoleErrors.length===0, consoleErrors.slice(0,10));
  } finally {await browser.close();}
  const report={base,time:new Date().toISOString(),checks,total:checks.length,passed:checks.filter(x=>x.pass).length,failed:checks.filter(x=>!x.pass)};
  fs.mkdirSync(path.dirname(out),{recursive:true});
  fs.writeFileSync(out,JSON.stringify(report,null,2)+'\n','utf8');
  console.log(JSON.stringify({total:report.total,passed:report.passed,failed:report.failed},null,2));
  if(report.failed.length)process.exitCode=1;
}
main().catch(e=>{console.error('SMOKE_FATAL',e);process.exitCode=2;});
