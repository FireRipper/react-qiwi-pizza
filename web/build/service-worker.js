if(!self.define){const i=i=>{"require"!==i&&(i+=".js");let e=Promise.resolve();return s[i]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=i,document.head.appendChild(s),s.onload=e}else importScripts(i),e()})),e.then(()=>{if(!s[i])throw new Error(`Module ${i} didn’t register its module`);return s[i]})},e=(e,s)=>{Promise.all(e.map(i)).then(i=>s(1===i.length?i[0]:i))},s={require:Promise.resolve(e)};self.define=(e,c,r)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const t={uri:location.origin+e.slice(1)};return Promise.all(c.map(e=>{switch(e){case"exports":return s;case"module":return t;default:return i(e)}})).then(i=>{const e=r(...i);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-dce9cbc5"],(function(i){"use strict";self.addEventListener("message",i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()}),i.clientsClaim(),i.precacheAndRoute([{url:"/Qiwi-Pizza/index.html",revision:"303624c00b2196722cd9c3b32f1b2a49"},{url:"/Qiwi-Pizza/static/css/2.4c4477be.chunk.css",revision:"460cce6476bdced68a75fcc73aa068af"},{url:"/Qiwi-Pizza/static/css/main.55d22246.chunk.css",revision:"7fe192ebe49ff52be7c6f94448248b74"},{url:"/Qiwi-Pizza/static/js/2.9d509486.chunk.js",revision:"109611224ce58637f973250d521e8a9e"},{url:"/Qiwi-Pizza/static/js/2.9d509486.chunk.js.LICENSE.txt",revision:"3453b8997016469371284a28c0e873e2"},{url:"/Qiwi-Pizza/static/js/main.e524f16a.chunk.js",revision:"895dff94ff98b325a8340c290e6eb764"},{url:"/Qiwi-Pizza/static/js/runtime-main.04fb30d9.js",revision:"20d5b4681d490c8d9594202e3a96d555"},{url:"/Qiwi-Pizza/static/media/contact.147ff7ef.jpg",revision:"97e8958eed9cafca1d85d16d0a781cde"},{url:"/Qiwi-Pizza/static/media/logo.1c310dae.svg",revision:"2e8697e975bad08f890f1dcd26cc20d5"},{url:"/Qiwi-Pizza/static/media/no-photo-var2-570px.a2f7b49e.png",revision:"bdb072c456f3fb762172b98d07dc4bc5"}],{}),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("/Qiwi-Pizza/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map