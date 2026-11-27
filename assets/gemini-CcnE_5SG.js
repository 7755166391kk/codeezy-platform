import{r as e}from"./dist-BCUj1tzz.js";var t=`You are Codeezy (كوديز), a senior full-stack engineer and product designer that builds real, working websites and web apps from conversation.`,n=`LANGUAGE & TECHNOLOGY AWARENESS:
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
{"clear":boolean,"summary":string,"questions":[{"id":string,"question":string,"options":string[]}]}`;function s(e,t){let n=new TextEncoder,r=e[Symbol.asyncIterator](),i=!1;return new ReadableStream({async pull(e){try{for(;;){let t=await r.next();if(t.done){e.enqueue(n.encode(JSON.stringify(i?{type:`done`}:{type:`error`,code:`incomplete_generation`})+`
`)),e.close();return}let a=``;for(let e of t.value.choices){if(e.delta.refusal)throw Error(`provider_refusal`);if(e.finish_reason===`stop`&&(i=!0),e.finish_reason&&e.finish_reason!==`stop`)throw Error(`incomplete_generation`);a+=e.delta.content??``}if(a){e.enqueue(n.encode(JSON.stringify({type:`delta`,text:a})+`
`));return}}}catch(i){e.enqueue(n.encode(JSON.stringify({type:`error`,code:t(i)})+`
`)),e.close(),await r.return?.()}},async cancel(){await r.return?.()}})}var c=`gemini-3-flash-preview`,l=`https://generativelanguage.googleapis.com/v1beta`,u=`codeezy_gemini_key`;function d(){try{return localStorage.getItem(u)??``}catch{return``}}function f(e){try{e.trim()?localStorage.setItem(u,e.trim()):localStorage.removeItem(u)}catch{}}var p=`https://codeezy-ai.netlify.app/api/gemini`;async function m(){let{data:t}=await e.auth.getSession();return t.session?.access_token??``}var h={build:r,plan:i,chat:a};async function*g(e){if(!e.body)throw Error(`empty_provider_response`);let t=e.body.getReader(),n=new TextDecoder,r=``,i=[],a=e=>{if(e===`[DONE]`)return null;let t=JSON.parse(e);if(t.promptFeedback?.blockReason)throw Error(`provider_refusal`);return{choices:(t.candidates??[]).map(e=>({delta:{content:(e.content?.parts??[]).filter(e=>!e.thought).map(e=>e.text??``).join(``)},finish_reason:e.finishReason?e.finishReason===`STOP`?`stop`:e.finishReason===`MAX_TOKENS`?`length`:`content_filter`:null}))}};try{for(;;){let e=await t.read();r+=e.done?n.decode():n.decode(e.value,{stream:!0});let o;for(;(o=r.indexOf(`
`))>=0;){let e=r.slice(0,o).replace(/\r$/,``);if(r=r.slice(o+1),e.startsWith(`data:`)&&i.push(e.slice(5).trimStart()),!e&&i.length){let e=a(i.join(`
`));i.length=0,e&&(yield e)}}if(e.done)break}if(r.startsWith(`data:`)&&i.push(r.slice(5).trim()),i.length){let e=a(i.join(`
`));e&&(yield e)}}finally{await t.cancel().catch(()=>void 0),t.releaseLock()}}function _(e){return{systems:e.filter(e=>e.role===`system`).map(e=>typeof e.content==`string`?e.content:``).join(`
`),contents:e.filter(e=>e.role===`user`||e.role===`assistant`).map(e=>({role:e.role===`assistant`?`model`:`user`,parts:typeof e.content==`string`?[{text:e.content}]:e.content.flatMap(e=>{if(e.type===`text`)return[{text:e.text}];if(e.type===`image_url`){let t=/^data:([^;]+);base64,(.+)$/.exec(e.image_url.url);if(t?.[1]&&t[2])return[{inlineData:{mimeType:t[1],data:t[2]}}]}return[]})}))}}async function v(e,t){let{systems:n,contents:r}=_(e),i=d(),a=i?`${l}/models/${c}:streamGenerateContent?alt=sse&key=${i}`:p,o={"Content-Type":`application/json`};i||(o.Authorization=`Bearer ${await m()}`);let s=await fetch(a,{method:`POST`,signal:AbortSignal.any([t,AbortSignal.timeout(17e4)]),headers:o,body:JSON.stringify({systemInstruction:{parts:[{text:n}]},contents:r,generationConfig:{temperature:.7,maxOutputTokens:65536}})});if(!s.ok)throw await s.body?.cancel().catch(()=>void 0),s.status===429?Error(`ai_rate_limited`):s.status===401||s.status===403?Error(`ai_setup_required`):Error(`ai_error`);return g(s)}function y(e){let t=e instanceof Error?e.message:``;return[`ai_rate_limited`,`ai_setup_required`,`provider_refusal`,`incomplete_generation`,`empty_provider_response`].includes(t)?t:`ai_error`}async function b(e,t){let n=h[e.mode];e.instructions?.trim()&&(n+=`\n\nPROJECT INSTRUCTIONS FROM THE OWNER (always follow):\n${e.instructions}`),e.requirements?.trim()&&(n+=`\n\nCLARIFIED REQUIREMENTS (gathered before the first build — keep honoring them):\n${e.requirements}`);let r=Object.entries(e.files);r.length?n+=`\n\nCURRENT PROJECT FILES (${r.length}):\n`+r.map(([e,t])=>`<file path="${e}">\n${t}\n</file>`).join(`
`):e.mode===`build`&&(n+=`

The project is empty. Create it from scratch.`);let i=e.prompt;return e.selected&&(i+=`\n\n[VISUAL EDIT — the user selected this element in the preview. Change ONLY this element unless the request says otherwise]\nPage: ${e.selected.page??`index.html`}\nTag: ${e.selected.tag??``}\nSelector: ${e.selected.selector}\nHTML: ${e.selected.html}`),e.assets.length&&(i+=`

ATTACHED ASSETS (uploaded by the user, use these exact URLs when placing them in the site):
`+e.assets.map(e=>`- ${e.name}: ${e.url}`).join(`
`)),e.attachments.length&&(i+=`

ATTACHED FILES (full content):
`+e.attachments.map(e=>`<attachment name="${e.name}">\n${e.content}\n</attachment>`).join(`
`)),e.errors.length&&(i+=`

ERRORS DETECTED IN THE LIVE PREVIEW (fix their root cause):
`+e.errors.map(e=>`- ${e}`).join(`
`)),s(await v([{role:`system`,content:n},...e.history.map(e=>({role:e.role,content:e.role===`assistant`?e.content.replace(/<file\s+path=["']([^"']+)["'][\s\S]*?<\/file>/g,`[updated $1]`):e.content})),{role:`user`,content:[{type:`text`,text:i},...e.images.map(e=>({type:`image_url`,image_url:{url:e}}))]}],t),y)}async function x(e){let t=d(),n={"Content-Type":`application/json`};t||(n.Authorization=`Bearer ${await m()}`);let r=await fetch(t?`${l}/models/${c}:generateContent?key=${t}`:`${p}?mode=generate`,{method:`POST`,headers:n,body:JSON.stringify({systemInstruction:{parts:[{text:o}]},contents:[{role:`user`,parts:[{text:e}]}],generationConfig:{temperature:.2,maxOutputTokens:2048}})});if(!r.ok)throw r.status===429?Error(`ai_rate_limited`):r.status===401||r.status===403?Error(`ai_setup_required`):Error(`ai_error`);let i=((await r.json()).candidates?.[0]?.content?.parts??[]).map(e=>e.text??``).join(``).replace(/^```(?:json)?\s*|\s*```$/g,``).trim();try{let e=JSON.parse(i);return{clear:!!e.clear,summary:String(e.summary??``),questions:Array.isArray(e.questions)?e.questions.slice(0,3).map((e,t)=>({id:String(e.id??`q${t+1}`),question:String(e.question??``),options:(e.options??[]).slice(0,5)})):[]}}catch{return{clear:!0,summary:``,questions:[]}}}export{f as i,b as n,d as r,x as t};