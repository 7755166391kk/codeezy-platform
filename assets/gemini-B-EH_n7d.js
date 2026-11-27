import{r as e}from"./dist-mbV9fpyx.js";var t=`You are Codeezy (كوديز), a senior full-stack engineer and product designer that builds real, working websites and web apps from conversation.`,n=`LANGUAGE & TECHNOLOGY AWARENESS:
- You understand all mainstream and niche programming languages (Python, JavaScript, TypeScript, Java, C/C++, C#, Go, Rust, PHP, Ruby, Kotlin, Swift, Dart, R, Julia, Scala, SQL dialects, Bash, PowerShell, Solidity, Haskell, Elixir, Assembly, CUDA, and more). Explain, review and write code in any of them when asked.
- Be honest about the runtime: the live preview runs ONLY browser technology (HTML, CSS, JavaScript, WebAssembly, CDN libraries). Never claim to have executed Python, Java, a server, or a database inside the preview. When a request needs a backend language, deliver the code as separate files clearly labelled as "not runnable in the preview" and build the runnable browser part around it.
- Choose the right technology for the project; never mix languages for show.`,r=`${t}

YOUR PROCESS (do it silently, show only the result):
1. Read the WHOLE request, however long. Extract every requirement into an internal checklist (pages, sections, components, features, data, forms, auth, integrations, design, language). Never silently drop a requirement. If something truly cannot be done in the browser preview, say exactly which item and why in your summary.
2. Plan the file structure.
3. Write complete, working code. Wire every button, link, form, filter, search and navigation to real behavior.
4. Re-check your output against the checklist and fix gaps before finishing.

OUTPUT FORMAT (strict):
1. A short explanation (1-3 sentences) in the SAME language the user writes in.
2. Every file you create or change, each COMPLETE (never partial, never "rest unchanged"), exactly:
<file path="index.html">
...full content...
</file>
   To delete a file output: <delete path="old.html" />
3. A short summary: what was built (bullet list mapped to the user's requirements) and anything not possible with the reason.

ENGINEERING RULES:
- Static web stack: index.html (required) plus other *.html pages, .css and .js files. Link with relative paths: <link rel="stylesheet" href="styles.css">, <script src="app.js"><\/script>, href="about.html".
- CDN libraries allowed (Tailwind Play CDN https://cdn.tailwindcss.com, Alpine.js, Chart.js, lucide https://unpkg.com/lucide@latest, Google Fonts).
- Split logic into sensible files (e.g. styles.css, app.js, data.js). Keep code clean, commented where non-obvious, and free of console errors.
- NO fake behavior: no dead links (href="#" with nothing), no buttons without handlers, no "success" messages that do nothing.
- Data: persist with localStorage through a small data layer (create/read/update/delete) with validation. Start with empty states that explain what to do; only include sample entries when the user asks for them, and label them clearly as examples.
- Accounts/login requested: NEVER store passwords or session secrets in localStorage. Production auth and shared databases require a verified connected backend. If none exists, show an explicit setup-needed state; a local account mock is allowed ONLY when the user requests a clearly labelled demo.
- Forms: client-side validation and server validation when connected, clear error and success states. Never claim delivery or saving unless the operation succeeded. Contact forms require a real configured endpoint, otherwise show a disabled submission/setup state.
- Never add unsolicited platform branding, Base44 attribution, external generator badges or tracking scripts. Preserve legally required library attribution and existing user-requested branding.
- Do not claim code was tested or a backend provisioned by writing a prompt alone. Report missing integrations and runtime requirements honestly.
- Responsive for phones, tablets and desktops. Accessible: semantic HTML, labels, alt text, focus states, sufficient contrast.
- Design must be polished and distinctive: strong typography, consistent spacing scale, cohesive palette, subtle motion. Avoid generic purple gradients and repetitive templates.
- ABSOLUTELY NO EMOJIS anywhere in the UI: not in headings, buttons, lists, nav, badges, or decorations. Every icon must be drawn in code: inline SVG, CSS shapes/pseudo-elements, or the lucide CDN (https://unpkg.com/lucide@latest). This is a hard requirement — the site must look like a professionally designed product.
- If the user writes Arabic, build in Arabic with dir="rtl" and an Arabic font (Tajawal, Cairo, Readex Pro, IBM Plex Sans Arabic) unless told otherwise.
- Images: when the user provides image URLs (listed under ATTACHED ASSETS) use those exact URLs where requested (logo, background, section image, favicon via <link rel="icon">). Otherwise use https://images.unsplash.com/photo-...?w=1200&q=80 or https://picsum.photos/seed/<word>/1200/800. Never reference local image files that do not exist.
- When editing an existing project, change only what is needed and keep everything else intact.

${n}`,i=`${t}
You are in PLAN mode. Do NOT write code and do NOT output <file> blocks.
Analyse the request completely and produce a structured implementation plan in markdown, in the user's language:
- Goal & target users
- Pages and their sections
- Components
- Features and exact behaviors (forms, search, filters, auth, data operations)
- Data model (entities, fields, relations) and where it is stored
- Integrations and what each needs (accounts, keys) — be explicit about anything requiring external setup
- Design direction (palette, typography, mood)
- Implementation phases and how each will be tested
List any requirement that cannot run in the browser preview and why.
End with one line telling the user they can approve with the "Implement the plan" button.

${n}`,a=`${t}
You are in CHAT mode. Answer questions, discuss ideas, explain code and features, review the current project files when relevant.
Do NOT write <file> blocks and do NOT start building. Reply naturally and concisely in the user's language.
Greetings and small talk get a short natural reply. Never append generic questions such as "Do you want me to build it?" — only suggest switching to Build mode when the user clearly asks for a change to be made.

${n}`,o=`You analyse a website/app request before it is built.
Decide if the description already contains enough to build a good first version (goal, type of site, main sections or features).
If it does, return {"clear":true,"summary":"...","questions":[]}.
If key information is missing, return {"clear":false,"summary":"...","questions":[...]} with 2 or 3 short, specific questions (never more), each with 3-4 quick answer options.
Questions may cover: target users, main sections/pages, color style, login needs, special features. Do not ask about things already stated.
Write in the same language as the request. "summary" is one sentence restating the goal.
Respond with JSON only, no markdown, matching:
{"clear":boolean,"summary":string,"questions":[{"id":string,"question":string,"options":string[]}]}`,s=[{id:`restaurant`,words:/مطعم|مقهى|كافيه|قهوة|حلويات|مخبز|cafe|coffee|restaurant|bakery|food/i,ar:`مطعم`,accent:`#c8892b`,hero:`طعم يستحق أن يُروى`,sub:`أطباق طازجة ومكوّنات مختارة بعناية`,items:[[`القائمة`,`أطباق رئيسية ومشروبات وحلويات`],[`الجودة`,`مكوّنات طازجة كل يوم`],[`الأجواء`,`مكان هادئ للعائلة والأصدقاء`]],cta:`احجز طاولة`},{id:`portfolio`,words:/معرض|أعمال|بورتفوليو|مصمم|مصور|portfolio|designer|photograph/i,ar:`معرض أعمال`,accent:`#7c5cff`,hero:`أعمال تتحدث عن صاحبها`,sub:`مشاريع مختارة وخبرة عملية`,items:[[`التصميم`,`هويات وواجهات واضحة`],[`التطوير`,`حلول تعمل على كل الأجهزة`],[`التعاون`,`نعمل معك خطوة بخطوة`]],cta:`تواصل معي`},{id:`store`,words:/متجر|محل|بيع|ملابس|منتجات|shop|store|ecommerce/i,ar:`متجر`,accent:`#e0543c`,hero:`منتجات مختارة بجودة عالية`,sub:`اطلب بسهولة واستلم بسرعة`,items:[[`منتجات متنوعة`,`تشكيلة تناسب الجميع`],[`أسعار واضحة`,`بدون رسوم مخفية`],[`توصيل`,`إلى باب بيتك`]],cta:`اطلب الآن`},{id:`clinic`,words:/عيادة|طبيب|أسنان|مستشفى|صحة|clinic|doctor|dental|health/i,ar:`عيادة`,accent:`#2563eb`,hero:`رعاية تثق بها`,sub:`فريق متخصص ومواعيد مرنة`,items:[[`استشارة`,`تقييم أولي واضح`],[`علاج`,`أحدث الأساليب`],[`متابعة`,`رعاية بعد الزيارة`]],cta:`احجز موعداً`}],c={id:`company`,words:/./,ar:`شركة`,accent:`#0f9d8a`,hero:`نبني ما تحتاجه شركتك`,sub:`خدمات احترافية وفريق يلتزم بالمواعيد`,items:[[`الخدمات`,`حلول مصممة لاحتياجك`],[`الخبرة`,`سنوات من العمل الجاد`],[`الدعم`,`نرد عليك بسرعة`]],cta:`تواصل معنا`};function l(e){return s.find(t=>t.words.test(e))??c}function u(e,t){return(/(?:اسمه|اسمها|باسم|اسم)\s+["«]?([^"»،,.\n]{2,24})/.exec(e)?.[1]??t.ar).trim()}function d(e){let t=l(e),n=u(e,t).replace(/[<>&"]/g,``),r=t.items.map(([e,t])=>`<article class="card"><h3>${e}</h3><p>${t}</p></article>`).join(``);return{files:{"index.html":`<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${n}</title><meta name="description" content="${t.sub}"><link rel="stylesheet" href="styles.css"></head>
<body>
<header class="bar"><strong class="logo">${n}</strong>
<button class="menu" id="menu" aria-label="القائمة">القائمة</button>
<nav id="nav"><a href="#top">الرئيسية</a><a href="#features">المزايا</a><a href="#contact">تواصل</a></nav></header>
<main id="top">
<section class="hero"><h1>${t.hero}</h1><p>${t.sub}</p><a class="btn" href="#contact">${t.cta}</a></section>
<section id="features" class="grid">${r}</section>
<section id="contact" class="contact"><h2>${t.cta}</h2>
<form id="form" novalidate><label>الاسم<input name="name" required></label>
<label>البريد أو الهاتف<input name="contact" required></label>
<label>رسالتك<textarea name="msg" rows="4" required></textarea></label>
<button class="btn" type="submit">إرسال</button><p id="status" role="status"></p></form></section>
</main><footer>${n} - جميع الحقوق محفوظة</footer><script src="app.js"><\/script></body></html>`,"styles.css":`:root{--a:${t.accent}}*{box-sizing:border-box}body{margin:0;font-family:system-ui,Tahoma,sans-serif;background:#0f0f12;color:#f3f3f5;line-height:1.7}
.bar{display:flex;align-items:center;justify-content:space-between;padding:14px 5vw;position:sticky;top:0;background:#0f0f12ee;backdrop-filter:blur(8px)}
nav a{color:#f3f3f5;text-decoration:none;margin-inline-start:20px}.menu{display:none;background:none;color:#fff;border:1px solid #444;border-radius:8px;padding:6px 12px}
.hero{padding:12vh 5vw;text-align:center;background:radial-gradient(circle at 50% 0,color-mix(in srgb,var(--a) 30%,transparent),transparent 60%)}
.hero h1{font-size:clamp(2rem,6vw,3.6rem);margin:0 0 12px}.btn{display:inline-block;background:var(--a);color:#fff;border:0;border-radius:12px;padding:12px 26px;font-size:1rem;cursor:pointer;text-decoration:none}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;padding:6vh 5vw}.card{background:#18181d;border:1px solid #2a2a31;border-radius:16px;padding:24px}
.contact{max-width:560px;margin:0 auto;padding:6vh 5vw}form{display:grid;gap:14px}label{display:grid;gap:6px}input,textarea{background:#18181d;border:1px solid #333;color:#fff;border-radius:10px;padding:12px;font:inherit}
#status{min-height:1.4em}footer{text-align:center;padding:30px;color:#999}
@media(max-width:700px){.menu{display:block}nav{display:none;position:absolute;top:56px;inset-inline:0;background:#0f0f12;padding:14px 5vw}nav.open{display:block}nav a{display:block;margin:0 0 12px}}`,"app.js":`const $=(s)=>document.querySelector(s);
$('#menu').addEventListener('click',()=>$('#nav').classList.toggle('open'));
$('#nav').addEventListener('click',()=>$('#nav').classList.remove('open'));
$('#form').addEventListener('submit',(e)=>{e.preventDefault();const f=new FormData(e.target);const st=$('#status');
 if(!f.get('name').trim()||!f.get('contact').trim()||!f.get('msg').trim()){st.textContent='يرجى تعبئة كل الحقول.';st.style.color='#ff8a8a';return;}
 const list=JSON.parse(localStorage.getItem('requests')||'[]');list.push({name:f.get('name'),contact:f.get('contact'),msg:f.get('msg'),at:Date.now()});
 localStorage.setItem('requests',JSON.stringify(list));e.target.reset();st.textContent='تم حفظ طلبك في هذا المتصفح. للإرسال الفعلي يلزم ربط خدمة بريد.';st.style.color='#8be28b';});`},summary:`تم بناء موقع أساسي جاهز من قالب (${t.ar}) لأن محرك الذكاء الاصطناعي لم يرد الآن. يمكنك طلب تعديلات وسيُعاد البناء بالذكاء الاصطناعي عند عودته.`}}function f(e){let{files:t,summary:n}=d(e),r=n+`

`+Object.entries(t).map(([e,t])=>`<file path="${e}">\n${t}\n</file>`).join(`
`)+`
`,i=new TextEncoder;return new ReadableStream({start(e){e.enqueue(i.encode(JSON.stringify({type:`delta`,text:r})+`
`)),e.enqueue(i.encode(JSON.stringify({type:`done`})+`
`)),e.close()}})}function p(e,t){let n=new TextEncoder,r=e[Symbol.asyncIterator](),i=!1;return new ReadableStream({async pull(e){try{for(;;){let t=await r.next();if(t.done){e.enqueue(n.encode(JSON.stringify(i?{type:`done`}:{type:`error`,code:`incomplete_generation`})+`
`)),e.close();return}let a=``;for(let e of t.value.choices){if(e.delta.refusal)throw Error(`provider_refusal`);if(e.finish_reason===`stop`&&(i=!0),e.finish_reason&&e.finish_reason!==`stop`)throw Error(`incomplete_generation`);a+=e.delta.content??``}if(a){e.enqueue(n.encode(JSON.stringify({type:`delta`,text:a})+`
`));return}}}catch(i){e.enqueue(n.encode(JSON.stringify({type:`error`,code:t(i)})+`
`)),e.close(),await r.return?.()}},async cancel(){await r.return?.()}})}var m=`gemini-3-flash-preview`,h=`https://generativelanguage.googleapis.com/v1beta`,g=`codeezy_gemini_key`;function _(){try{return localStorage.getItem(g)??``}catch{return``}}function v(e){try{e.trim()?localStorage.setItem(g,e.trim()):localStorage.removeItem(g)}catch{}}var y=`https://codeezy-ai.netlify.app/api/gemini`;async function b(){let{data:t}=await e.auth.getSession();return t.session?.access_token??``}var x={build:r,plan:i,chat:a};async function*S(e){if(!e.body)throw Error(`empty_provider_response`);let t=e.body.getReader(),n=new TextDecoder,r=``,i=[],a=e=>{if(e===`[DONE]`)return null;let t=JSON.parse(e);if(t.promptFeedback?.blockReason)throw Error(`provider_refusal`);return{choices:(t.candidates??[]).map(e=>({delta:{content:(e.content?.parts??[]).filter(e=>!e.thought).map(e=>e.text??``).join(``)},finish_reason:e.finishReason?e.finishReason===`STOP`?`stop`:e.finishReason===`MAX_TOKENS`?`length`:`content_filter`:null}))}};try{for(;;){let e=await t.read();r+=e.done?n.decode():n.decode(e.value,{stream:!0});let o;for(;(o=r.indexOf(`
`))>=0;){let e=r.slice(0,o).replace(/\r$/,``);if(r=r.slice(o+1),e.startsWith(`data:`)&&i.push(e.slice(5).trimStart()),!e&&i.length){let e=a(i.join(`
`));i.length=0,e&&(yield e)}}if(e.done)break}if(r.startsWith(`data:`)&&i.push(r.slice(5).trim()),i.length){let e=a(i.join(`
`));e&&(yield e)}}finally{await t.cancel().catch(()=>void 0),t.releaseLock()}}function C(e){return{systems:e.filter(e=>e.role===`system`).map(e=>typeof e.content==`string`?e.content:``).join(`
`),contents:e.filter(e=>e.role===`user`||e.role===`assistant`).map(e=>({role:e.role===`assistant`?`model`:`user`,parts:typeof e.content==`string`?[{text:e.content}]:e.content.flatMap(e=>{if(e.type===`text`)return[{text:e.text}];if(e.type===`image_url`){let t=/^data:([^;]+);base64,(.+)$/.exec(e.image_url.url);if(t?.[1]&&t[2])return[{inlineData:{mimeType:t[1],data:t[2]}}]}return[]})}))}}async function w(e,t){let{systems:n,contents:r}=C(e),i=_(),a=i?`${h}/models/${m}:streamGenerateContent?alt=sse&key=${i}`:y,o={"Content-Type":`application/json`};i||(o.Authorization=`Bearer ${await b()}`);let s=await fetch(a,{method:`POST`,signal:AbortSignal.any([t,AbortSignal.timeout(17e4)]),headers:o,body:JSON.stringify({systemInstruction:{parts:[{text:n}]},contents:r,generationConfig:{temperature:.7,maxOutputTokens:65536}})});if(!s.ok)throw await s.body?.cancel().catch(()=>void 0),s.status===429?Error(`ai_rate_limited`):s.status===401||s.status===403?Error(`ai_setup_required`):Error(`ai_error`);return S(s)}function T(e){let t=e instanceof Error?e.message:``;return[`ai_rate_limited`,`ai_setup_required`,`provider_refusal`,`incomplete_generation`,`empty_provider_response`].includes(t)?t:`ai_error`}async function E(e,t){let n=x[e.mode];e.instructions?.trim()&&(n+=`\n\nPROJECT INSTRUCTIONS FROM THE OWNER (always follow):\n${e.instructions}`),e.requirements?.trim()&&(n+=`\n\nCLARIFIED REQUIREMENTS (gathered before the first build — keep honoring them):\n${e.requirements}`);let r=Object.entries(e.files);r.length?n+=`\n\nCURRENT PROJECT FILES (${r.length}):\n`+r.map(([e,t])=>`<file path="${e}">\n${t}\n</file>`).join(`
`):e.mode===`build`&&(n+=`

The project is empty. Create it from scratch.`);let i=e.prompt;e.selected&&(i+=`\n\n[VISUAL EDIT — the user selected this element in the preview. Change ONLY this element unless the request says otherwise]\nPage: ${e.selected.page??`index.html`}\nTag: ${e.selected.tag??``}\nSelector: ${e.selected.selector}\nHTML: ${e.selected.html}`),e.assets.length&&(i+=`

ATTACHED ASSETS (uploaded by the user, use these exact URLs when placing them in the site):
`+e.assets.map(e=>`- ${e.name}: ${e.url}`).join(`
`)),e.attachments.length&&(i+=`

ATTACHED FILES (full content):
`+e.attachments.map(e=>`<attachment name="${e.name}">\n${e.content}\n</attachment>`).join(`
`)),e.errors.length&&(i+=`

ERRORS DETECTED IN THE LIVE PREVIEW (fix their root cause):
`+e.errors.map(e=>`- ${e}`).join(`
`));let a=[{role:`system`,content:n},...e.history.map(e=>({role:e.role,content:e.role===`assistant`?e.content.replace(/<file\s+path=["']([^"']+)["'][\s\S]*?<\/file>/g,`[updated $1]`):e.content})),{role:`user`,content:[{type:`text`,text:i},...e.images.map(e=>({type:`image_url`,image_url:{url:e}}))]}];try{return p(await w(a,t),T)}catch(t){if(e.mode===`build`&&r.length===0&&!(t instanceof Error&&t.name===`AbortError`))return f(e.prompt);throw t}}async function D(e){let t=_(),n={"Content-Type":`application/json`};t||(n.Authorization=`Bearer ${await b()}`);let r=await fetch(t?`${h}/models/${m}:generateContent?key=${t}`:`${y}?mode=generate`,{method:`POST`,headers:n,body:JSON.stringify({systemInstruction:{parts:[{text:o}]},contents:[{role:`user`,parts:[{text:e}]}],generationConfig:{temperature:.2,maxOutputTokens:2048}})});if(!r.ok)throw r.status===429?Error(`ai_rate_limited`):r.status===401||r.status===403?Error(`ai_setup_required`):Error(`ai_error`);let i=((await r.json()).candidates?.[0]?.content?.parts??[]).map(e=>e.text??``).join(``).replace(/^```(?:json)?\s*|\s*```$/g,``).trim();try{let e=JSON.parse(i);return{clear:!!e.clear,summary:String(e.summary??``),questions:Array.isArray(e.questions)?e.questions.slice(0,3).map((e,t)=>({id:String(e.id??`q${t+1}`),question:String(e.question??``),options:(e.options??[]).slice(0,5)})):[]}}catch{return{clear:!0,summary:``,questions:[]}}}export{v as i,E as n,_ as r,D as t};