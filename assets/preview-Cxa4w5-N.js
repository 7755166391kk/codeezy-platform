function e(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function t(t,n=`index.html`,r={}){let i=t[n]??t[`index.html`];if(!i)return``;for(let[n,r]of Object.entries(t)){let t=e(n);n.endsWith(`.css`)?i=i.replace(RegExp(`<link[^>]+href=["']\\.?/?${t}["'][^>]*>`,`g`),()=>`<style data-file="${n}">\n${r}\n</style>`):n.endsWith(`.js`)&&(i=i.replace(RegExp(`<script([^>]*)src=["']\\.?/?${t}["']([^>]*)>\\s*<\/script>`,`g`),(e,t,i)=>`<script${(t+i).replace(/\s+defer/,``)} data-file="${n}">\n${r.replace(/<\/script>/g,`<\\/script>`)}\n<\/script>`))}let a=r.picker===!1?r.nav?`<script>(function(){document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href');if(h&&/^[\\w\\-/]+\\.html(#.*)?$/.test(h)){e.preventDefault();parent.postMessage({__codeezy:'nav',page:h.split('#')[0].replace(/^\\.?\\//,'')},'*');}},true);})();<\/script>`:``:`<script>(function(){
var on=false,last=null,picked=null;
function sel(el){if(!el||el===document.body)return 'body';var p=[];while(el&&el.nodeType===1&&el!==document.body){var s=el.tagName.toLowerCase();if(el.id){s+='#'+el.id;p.unshift(s);break;}if(el.className&&typeof el.className==='string'){var c=el.className.trim().split(/\\s+/).slice(0,2).join('.');if(c)s+='.'+c;}var i=1,sb=el;while((sb=sb.previousElementSibling))if(sb.tagName===el.tagName)i++;if(i>1)s+=':nth-of-type('+i+')';p.unshift(s);el=el.parentElement;}return p.join(' > ');}
function post(m){m.__codeezy=m.__codeezy||'x';parent.postMessage(m,'*');}
function clear(){if(last){last.style.outline='';last=null;}}
window.addEventListener('message',function(e){var d=e.data;if(!d)return;
 if(d.__codeezy==='pick'){on=d.on;if(!on)clear();document.body.style.cursor=on?'crosshair':'';}
 if(d.__codeezy==='unpick'&&picked){picked.style.outline='';picked=null;}
});
document.addEventListener('mouseover',function(e){if(!on)return;clear();last=e.target;last.style.outline='2px dashed #ffffff';last.style.outlineOffset='2px';},true);
document.addEventListener('click',function(e){
 if(on){e.preventDefault();e.stopPropagation();var t=e.target;clear();on=false;document.body.style.cursor='';
  if(picked)picked.style.outline='';picked=t;t.style.outline='2px solid #ffffff';t.style.outlineOffset='2px';
  var r=t.getBoundingClientRect();
  post({__codeezy:'picked',selector:sel(t),tag:t.tagName.toLowerCase(),src:t.getAttribute('src')||'',html:t.outerHTML.slice(0,1200),text:(t.innerText||'').slice(0,200),rect:{x:r.left,y:r.top,w:r.width,h:r.height}});return;}
 var a=e.target.closest&&e.target.closest('a[href]');
 if(a){var h=a.getAttribute('href');if(h&&/^[\\w\\-/]+\\.html(#.*)?$/.test(h)){e.preventDefault();post({__codeezy:'nav',page:h.split('#')[0].replace(/^\\.?\\//,'')});}}
},true);
window.addEventListener('error',function(e){var t=e.target;if(t&&t!==window&&t.tagName==='IMG'){post({__codeezy:'error',message:'Broken image: '+(t.getAttribute('src')||'')});return;}post({__codeezy:'error',message:String(e.message)+(e.lineno?' (line '+e.lineno+')':'')});},true);
window.addEventListener('unhandledrejection',function(e){post({__codeezy:'error',message:'Unhandled promise: '+String(e.reason&&e.reason.message||e.reason)});});
var ce=console.error;console.error=function(){try{post({__codeezy:'error',message:Array.prototype.map.call(arguments,String).join(' ').slice(0,500)});}catch(_){}ce.apply(console,arguments);};
})();<\/script>`;return a&&(i=/<head[^>]*>/i.test(i)?i.replace(/<head[^>]*>/i,e=>`${e}${a}`):a+i),i}function n(e){return Object.keys(e).filter(e=>e.endsWith(`.html`)).sort((e,t)=>e===`index.html`?-1:t===`index.html`?1:e.localeCompare(t))}function r(e){let t={},n=[],r=[],a=/<file\s+path=["']([^"']+)["']\s*>\n?([\s\S]*?)(<\/file>|$)/g,o=``,s=0,c;for(;c=a.exec(e);){o+=e.slice(s,c.index);let n=i(c[1]??``);c[3]===`</file>`?(n&&(t[n]=(c[2]??``).replace(/\n?```\s*$/,``).replace(/^```\w*\n/,``)),o+=`\n[[file:${n}]]\n`):(n&&r.push(n),o+=`\n[[writing:${n}]]\n`),s=c.index+c[0].length}return o+=e.slice(s),o=o.replace(/<delete\s+path=["']([^"']+)["']\s*\/?>/g,(e,t)=>{let r=i(t);return r&&n.push(r),`\n[[deleted:${r}]]\n`}),o=o.replace(/<f(i(l(e(\s[^>]*)?)?)?)?$/,``),{text:o.replace(/\n{3,}/g,`

`).trim(),files:t,deleted:n,pending:r}}function i(e){let t=e.trim().replace(/^\.\/+/,``).replace(/\\/g,`/`);return!t||t.startsWith(`/`)||t.split(`/`).some(e=>e===`..`||e===``)||t.length>200?``:t}export{i,n,r,t};