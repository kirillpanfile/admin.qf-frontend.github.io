(()=>{var e={778:(e,t,n)=>{"use strict";n.d(t,{B:()=>s});const a=(e,t)=>{let n=`${e}=${t};path=/;expires=Tue,19 Jan 2038 04:14:46 GMT`;document.cookie=n},i=e=>document.cookie.split(";").find((t=>t.includes(`${e}=`)))?.split("=")[1],o=(e,t)=>{a(e,t)};function s(){return{setCookie:a,updateCookie:o,getCookie:i}}},523:(e,t,n)=>{"use strict";n.d(t,{Po:()=>l,Xb:()=>r,us:()=>h});var a=n(278),i=n(395);const o=e=>({method:e,credentials:"include",headers:{"Content-Type":"application/json"}}),s=async({url:e,body:t,options:n})=>{try{let a=null;return a="GET"!==n.method||"HEAD"!==n.method?await fetch(e,{...n,body:JSON.stringify(t)}):await fetch(e,n),200===a.status?await a.json():Promise.reject(a)}catch(a){return a}},r={get:async e=>{const t={url:e,options:o("GET")},n=await s(t);return n},post:async(e,t)=>{const n={url:e,body:t,options:o("POST")},a=await s(n);return a},put:async(e,t)=>{const n={url:e,body:t,options:o("PUT")},a=await s(n);return a},delete:async e=>{const t={url:e,options:o("DELETE")},{data:n}=await s(t);return n}},c=e=>!["success","error","warning","info"].includes(e),d=async(e,t)=>{const{message:n}=await e;try{if(!c)throw new Error("Notify type is not valid");(0,a.h)({text:n,type:t})}catch(i){console.error("Error",i)}},u=e=>new Promise(((t,n)=>e&&t({message:e}))),l=async(e,t)=>{try{await e(),d(u(t),"success")}catch(n){const{message:e}=await n;d(u(e),"error")}},f=(e,t)=>{const n=[];for(let a=0;a<t;a++)"object"!==typeof e||null===e||Array.isArray(e)?n.push((0,i.iH)(e)):(console.log("object"),n.push((0,i.qj)(e)));return n};function h(e,t){const n=[],a=Array.isArray(e);switch(!0){case a:e.length?e.forEach((e=>{"object"===typeof e&&null!==e?n.push((0,i.qj)(e)):n.push((0,i.iH)(e))})):n.push(...f(e,t));break;default:n.push(...f(e,t))}return n}},614:(e,t,n)=>{"use strict";var a=n(231),i=n(0),o=n(307),s=n(778);const r={class:"dark-scroll"},c={__name:"App",setup(e){const{getCookie:t,setCookie:n}=(0,s.B)();return(0,i.bv)((()=>{t("darkMode")||n("darkMode","false"),window.addEventListener("beforeunload",(e=>{localStorage.setItem("lastPath",o.Z.currentRoute.value.path)}))})),(e,t)=>{const n=(0,i.up)("router-view"),a=(0,i.up)("notifications");return(0,i.wg)(),(0,i.iD)("main",r,[(0,i.Wm)(n),(0,i.Wm)(a)])}}},d=c,u=d;var l=n(278),f=n(74),h=(n(114),n(110)),m=n(635);const p=e=>{e.directive("outside",{beforeMount(e,t){e.clickOutsideEvent=function(n){e===n.target||e.contains(n.target)||t.value()},document.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.removeEventListener("click",e.clickOutsideEvent)}})},b=(0,a.ri)(u);p(b),b.use(o.Z).use((0,f.WB)()).use(h.Z).use(l.Z).use(m.Z).mount("#app")},307:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d,_:()=>r});var a=n(344),i=n(206);const o=async(e,t,n)=>{const a=(0,i.dD)();if("/admin"==e.fullPath)return n("/admin/dashboard");const{user:o,isAuth:s}=(0,i.xL)(a);console.log(s),o.value?n():n("/admin-login")},s=[{path:"/admin",name:"admin",component:()=>Promise.all([n.e(967),n.e(672)]).then(n.bind(n,327)),redirect:"/admin/dashboard",beforeEnter:o,children:[{path:"/admin/dashboard",name:"admin-dashboard",icon:"fa-solid fa-chart-pie",text:"Dashboard",component:()=>Promise.all([n.e(967),n.e(450)]).then(n.bind(n,986))},{path:"/admin/board",name:"admin-board",icon:"fa-solid fa-list-check",text:"Board",component:()=>Promise.all([n.e(967),n.e(147)]).then(n.bind(n,920))},{path:"/admin/users",name:"admin-users",icon:"fa-solid fa-users",text:"Users",component:()=>Promise.all([n.e(967),n.e(161)]).then(n.bind(n,359))},{path:"/admin/recipes",name:"admin-recipes",icon:"fa-solid fa-paste",text:"Recipes",component:()=>n.e(411).then(n.bind(n,663)),children:[{icon:"fa-solid fa-plus",text:"Create",path:"/admin/recipes/create",name:"admin-recipes-create",component:()=>Promise.all([n.e(967),n.e(213)]).then(n.bind(n,159))},{path:"/admin/recipes/:id",name:"admin-recipes-item",exclude:!0,component:()=>Promise.all([n.e(967),n.e(369)]).then(n.bind(n,859))},{icon:"fa-solid fa-list",text:"View All",path:"/admin/recipes/all",name:"admin-recipes-all",component:()=>Promise.all([n.e(967),n.e(970)]).then(n.bind(n,61))}]},{path:"/admin/settings",name:"admin-settings",text:"Settings",icon:"fa-solid fa-cog",component:()=>n.e(603).then(n.bind(n,838))},{path:"/admin/notifications",name:"admin-notifications",text:"Notifications",icon:"fa-solid fa-bell",component:()=>n.e(722).then(n.bind(n,722))},{path:"/admin/:catchAll(.*)",redirect:"/admin/dashboard",exclude:!0}]},{path:"/admin-login",name:"admin-login",children:[{path:"/admin-login/:catchAll(.*)",redirect:"/admin-login"}],component:()=>Promise.all([n.e(967),n.e(593)]).then(n.bind(n,543))}],r=[{path:"/",name:"home",component:()=>n.e(319).then(n.bind(n,319))},{path:"/admin/:catchAll(.*)",redirect:"/admin/dashboard"},...s],c=(0,a.p7)({history:(0,a.r5)(),routes:r}),d=c},114:(e,t,n)=>{var a,i;window.FontAwesomeKitConfig={asyncLoading:{enabled:!0},autoA11y:{enabled:!0},baseUrl:"https://ka-f.fontawesome.com",baseUrlKit:"https://kit.fontawesome.com",detectConflictsUntil:null,iconUploads:{},id:90985587,license:"pro",method:"css",minify:{enabled:!0},token:"dd277d2f3d",v4FontFaceShim:{enabled:!0},v4shim:{enabled:!0},v5FontFaceShim:{enabled:!0},version:"6.1.1"},function(o){a=o,i="function"===typeof a?a.call(t,n,t,e):a,void 0===i||(e.exports=i)}((function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,o=void 0;try{for(var s,r=e[Symbol.iterator]();!(a=(s=r.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){var n=t&&t.addOn||"",a=t&&t.baseFilename||e.license+n,i=t&&t.minify?".min":"",o=t&&t.fileSuffix||e.method,s=t&&t.subdir||e.method;return e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/"+s+"/"+a+i+"."+o}function c(e){return e.baseUrlKit+"/"+e.token+"/"+e.id+"/kit-upload.css"}function d(e,t){var n=t||["fa"],a="."+Array.prototype.join.call(n,",."),i=e.querySelectorAll(a);Array.prototype.forEach.call(i,(function(t){var n=t.getAttribute("title");t.setAttribute("aria-hidden","true");var a=!t.nextElementSibling||!t.nextElementSibling.classList.contains("sr-only");if(n&&a){var i=e.createElement("span");i.innerHTML=n,i.classList.add("sr-only"),t.parentNode.insertBefore(i,t.nextSibling)}}))}var u,l=function(){},f="undefined"!=typeof n.g&&void 0!==n.g.process&&"function"==typeof n.g.process.emit,h="undefined"==typeof setImmediate?setTimeout:setImmediate,m=[];function p(){for(var e=0;e<m.length;e++)m[e][0](m[e][1]);m=[],u=!1}function b(e,t){m.push([e,t]),u||(u=!0,h(p,0))}function y(e){var t=e.owner,n=t._state,a=t._data,i=e[n],o=e.then;if("function"==typeof i){n="fulfilled";try{a=i(a)}catch(e){A(o,e)}}g(o,a)||("fulfilled"===n&&v(o,a),"rejected"===n&&A(o,a))}function g(t,n){var a;try{if(t===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===e(n))){var i=n.then;if("function"==typeof i)return i.call(n,(function(e){a||(a=!0,n===e?w(t,e):v(t,e))}),(function(e){a||(a=!0,A(t,e))})),!0}}catch(e){return a||A(t,e),!0}return!1}function v(e,t){e!==t&&g(e,t)||w(e,t)}function w(e,t){"pending"===e._state&&(e._state="settled",e._data=t,b(k,e))}function A(e,t){"pending"===e._state&&(e._state="settled",e._data=t,b(S,e))}function P(e){e._then=e._then.forEach(y)}function k(e){e._state="fulfilled",P(e)}function S(e){e._state="rejected",P(e),!e._handled&&f&&n.g.process.emit("unhandledRejection",e._data,e)}function O(e){n.g.process.emit("rejectionHandled",e)}function _(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof _==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,t){function n(e){A(t,e)}try{e((function(e){v(t,e)}),n)}catch(e){n(e)}}(e,this)}_.prototype={constructor:_,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(l),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,"rejected"===this._state&&f&&b(O,this)),"fulfilled"===this._state||"rejected"===this._state?b(y,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}},_.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new _((function(t,n){var a=[],i=0;function o(e){return i++,function(n){a[e]=n,--i||t(a)}}for(var s,r=0;r<e.length;r++)(s=e[r])&&"function"==typeof s.then?s.then(o(r),n):a[r]=s;i||t(a)}))},_.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new _((function(t,n){for(var a,i=0;i<e.length;i++)(a=e[i])&&"function"==typeof a.then?a.then(t,n):t(a)}))},_.resolve=function(t){return t&&"object"===e(t)&&t.constructor===_?t:new _((function(e){e(t)}))},_.reject=function(e){return new _((function(t,n){n(e)}))};var E="function"==typeof Promise?Promise:_;function j(e,t){var n=t.fetch,a=t.XMLHttpRequest,i=t.token,o=e;return"URLSearchParams"in window?(o=new URL(e)).searchParams.set("token",i):o=o+"?token="+encodeURIComponent(i),o=o.toString(),new E((function(e,t){if("function"==typeof n)n(o,{mode:"cors",cache:"default"}).then((function(e){if(e.ok)return e.text();throw new Error("")})).then((function(t){e(t)})).catch(t);else if("function"==typeof a){var i=new a;i.addEventListener("loadend",(function(){this.responseText?e(this.responseText):t(new Error(""))})),["abort","error","timeout"].map((function(e){i.addEventListener(e,(function(){t(new Error(""))}))})),i.open("GET",o),i.send()}else t(new Error(""))}))}function U(e,t,n){var a=e;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(e,n){return"".concat(n).concat(t)}],[/(url\("?)\.\.\/webfonts/g,function(e,a){return"".concat(a).concat(t,"/releases/v").concat(n,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(e,n){return"".concat(n).concat(t)}]].forEach((function(e){var t=o(e,2),n=t[0],i=t[1];a=a.replace(n,i)})),a}function T(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},a=t.document||a,o=d.bind(d,a,["fa","fab","fas","far","fal","fad","fak"]),s=Object.keys(e.iconUploads||{}).length>0;e.autoA11y.enabled&&n(o);var u=[{id:"fa-main",addOn:void 0}];e.v4shim&&e.v4shim.enabled&&u.push({id:"fa-v4-shims",addOn:"-v4-shims"}),e.v5FontFaceShim&&e.v5FontFaceShim.enabled&&u.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),e.v4FontFaceShim&&e.v4FontFaceShim.enabled&&u.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),s&&u.push({id:"fa-kit-upload",customCss:!0});var l=u.map((function(n){return new E((function(a,o){j(n.customCss?c(e):r(e,{addOn:n.addOn,minify:e.minify.enabled}),t).then((function(o){a(C(o,i(i({},t),{},{baseUrl:e.baseUrl,version:e.version,id:n.id,contentFilter:function(e,t){return U(e,t.baseUrl,t.version)}})))})).catch(o)}))}));return E.all(l)}function C(e,t){var n=t.contentFilter||function(e,t){return e},a=document.createElement("style"),i=document.createTextNode(n(e,t));return a.appendChild(i),a.media="all",t.id&&a.setAttribute("id",t.id),t&&t.detectingConflicts&&t.detectionIgnoreAttr&&a.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),a}function x(e,t){t.autoA11y=e.autoA11y.enabled,"pro"===e.license&&(t.autoFetchSvg=!0,t.fetchSvgFrom=e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/svgs",t.fetchUploadedSvgFrom=e.uploadsUrl);var n=[];return e.v4shim.enabled&&n.push(new E((function(n,a){j(r(e,{addOn:"-v4-shims",minify:e.minify.enabled}),t).then((function(e){n(F(e,i(i({},t),{},{id:"fa-v4-shims"})))})).catch(a)}))),n.push(new E((function(n,a){j(r(e,{minify:e.minify.enabled}),t).then((function(e){var a=F(e,i(i({},t),{},{id:"fa-main"}));n(function(e,t){var n=t&&void 0!==t.autoFetchSvg?t.autoFetchSvg:void 0,a=t&&void 0!==t.autoA11y?t.autoA11y:void 0;return void 0!==a&&e.setAttribute("data-auto-a11y",a?"true":"false"),n&&(e.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),e.setAttribute("data-fetch-svg-from",t.fetchSvgFrom),e.setAttribute("data-fetch-uploaded-svg-from",t.fetchUploadedSvgFrom)),e}(a,t))})).catch(a)}))),E.all(n)}function F(e,t){var n=document.createElement("SCRIPT"),a=document.createTextNode(e);return n.appendChild(a),n.referrerPolicy="strict-origin",t.id&&n.setAttribute("id",t.id),t&&t.detectingConflicts&&t.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),n}function L(e){var t,n=[],a=document,i=a.documentElement.doScroll,o=(i?/^loaded|^c/:/^loaded|^i|^c/).test(a.readyState);o||a.addEventListener("DOMContentLoaded",t=function(){for(a.removeEventListener("DOMContentLoaded",t),o=1;t=n.shift();)t()}),o?setTimeout(e,0):n.push(e)}function I(e){"undefined"!=typeof MutationObserver&&new MutationObserver(e).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var D=window.FontAwesomeKitConfig,N={detectingConflicts:D.detectConflictsUntil&&new Date<=new Date(D.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:D.token,XMLHttpRequest:window.XMLHttpRequest,document},X=document.currentScript,R=X?X.parentElement:document.head;(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"js"===e.method?x(e,t):"css"===e.method?T(e,t,(function(e){L(e),I(e)})):void 0})(D,N).then((function(e){e.map((function(e){try{R.insertBefore(e,X?X.nextSibling:null)}catch(t){R.appendChild(e)}})),N.detectingConflicts&&X&&L((function(){X.setAttributeNode(document.createAttribute(N.detectionIgnoreAttr));var e=function(e,t){var n=document.createElement("script");return t&&t.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),n.src=r(e,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:e.minify.enabled}),n}(D,N);document.body.appendChild(e)}))})).catch((function(e){console.error("".concat("Font Awesome Kit:"," ").concat(e))}))}}catch(e){console.error("".concat("Font Awesome Kit:"," ").concat(e))}}))},206:(e,t,n)=>{"use strict";n.d(t,{xL:()=>u,dD:()=>r,MH:()=>d,DD:()=>o});var a=n(74),i=n(523);const o=(0,a.Q_)("taskStore",{state:()=>({tasks:[],priority:[],flags:[{name:"Urgent",_id:"Urgent"},{name:"High",_id:"High"},{name:"Normal",_id:"Normal"},{name:"Low",_id:"Low"}],lists:[{name:"To Do",_id:"To Do"},{name:"In Progress",_id:"In Progress"},{name:"In Review",_id:"In Review"},{name:"Done",_id:"Done"}]}),getters:{taskToDo(e){return e.tasks.filter((e=>"To Do"==e.status||"In Progress"==e.status)).sort((e=>"To Do"==e.status?-1:1))},tasksByFlag(e){const t=e.flags.map((e=>e.name));return e.tasks.sort(((e,n)=>t.indexOf(e.flag)-t.indexOf(n.flag)))}},actions:{async createTask(e){await(0,i.Po)(async function(){const t=await i.Xb.post("http://localhost:3000/api/tasks/create",e);this.tasks=[...this.tasks,t]}.bind(this),"Task created successfully")},async getTasks(){(0,i.Po)(async function(){this.tasks=await i.Xb.get("http://localhost:3000/api/tasks/all")}.bind(this),"Tasks loaded successfully")},async updateTask(e,t){await(0,i.Po)(async function(){const n=this.tasks.find((t=>t._id==e));JSON.stringify(n)!=JSON.stringify(t)&&await i.Xb.put("http://localhost:3000/api/tasks/"+e,t)}.bind(this),"Task updated successfully")},async setTaskStatus(e,t){await(0,i.Po)(async function(){this.tasks.find((n=>{n._id===e&&(i.Xb.put("http://localhost:3000/api/tasks/"+n._id,{status:t}),n.status=t)}))}.bind(this))},async deleteTask(e){await(0,i.Po)(async function(){i.Xb["delete"]("http://localhost:3000/api/tasks/"+e),this.tasks=this.tasks.filter((t=>t._id!==e))}.bind(this),"Task Deleted")}}});var s=n(307);const r=(0,a.Q_)("adminStore",{state:()=>({user:null,users:[],newUsers:[],pages:null,currentPage:1,roles:[],admins:null}),getters:{selectedUsers:e=>e.users.filter((e=>!0===e.selected))},actions:{async authAdmin(e){await(0,i.Po)(async function(){this.user=await i.Xb.post("http://localhost:3000/api/auth/signin/admin",e)}.bind(this),"You are successfully logged in")},async authRemeber(){await(0,i.Po)(async function(){this.user=await i.Xb.get("http://localhost:3000/api/auth/remember/admin");const e=localStorage.getItem("lastPath");e?"/admin-login"==e?s.Z.push("/admin/dashboard"):(s.Z.push(e),localStorage.removeItem("lastPath")):s.Z.push("/admin/dashboard")}.bind(this))},async loadUsers(){await(0,i.Po)(async function(){this.users=await i.Xb.get("http://localhost:3000/api/users/all/user?populate=roles&page="+this.currentPage)}.bind(this),"Users successfully loaded"),await(0,i.Po)(async function(){this.pages=await i.Xb.get("http://localhost:3000/api/users/pages")}.bind(this),"Pages came from server")},async loadNewUsers(){await(0,i.Po)(async function(){this.newUsers=await i.Xb.get("http://localhost:3000/api/users/all/user?&filters=new&limit=10&populate=roles")}.bind(this),"New users successfully loaded")},selectUser(e){this.users.forEach((t=>{t._id==e&&(t.selected=!t.selected)}))},async searchUser(e){await(0,i.Po)(async function(){if(e){sessionStorage.setItem("Users",JSON.stringify(this.users));const t=await i.Xb.get("http://localhost:3000/api/users/search/"+e);this.users=t}else this.users=JSON.parse(sessionStorage.getItem("Users"))}.bind(this))},async deleteUser(e){await(0,i.Po)(async function(){await i.Xb["delete"]("http://localhost:3000/api/users/delete/"+e)(this.users=this.users.filter((t=>t._id!==e)))}.bind(this),"User deleted")},async deleteMultiple(){await(0,i.Po)(async function(){const e=this.selectedUsers.map((e=>e._id));await i.Xb["delete"]("http://localhost:3000/api/users/multiple",{ids:e}),this.users=this.users.filter((t=>!e.includes(t._id)))}.bind(this),`${this.selectedUsers.length} Users deleted`)},async getRoles(){await(0,i.Po)(async function(){this.roles=await i.Xb.get("http://localhost:3000/api/users/roles/all")}.bind(this))},async editUser({username:e,email:t,roles:n,_id:a}){await(0,i.Po)(async function(){const o=await i.Xb.put("http://localhost:3000/api/users/update/"+a,{username:e,email:t,roles:n}),s=this.newUsers.findIndex((e=>e._id===a));s>=0&&(this.newUsers[s]=o);const r=this.users.findIndex((e=>e._id===a));r>=0&&(this.users[r]=o)}.bind(this),"User successfully updated")},async getAdmins(){await(0,i.Po)(async function(){this.admins=await i.Xb.get("http://localhost:3000/api/users/all/superadmin")}.bind(this),"Admins successfully loaded")},async logOut(){await(0,i.Po)(async function(){await i.Xb["delete"]("http://localhost:3000/api/auth/logout"),this.$reset(),s.Z.push("/admin-login")}.bind(this))},async createUser(e){await(0,i.Po)(async function(){const t=await i.Xb.post("http://localhost:3000/api/auth/signup",e);this.users.push(t)}.bind(this))},nextPage(){this.currentPage<this.pages&&this.currentPage++,this.loadUsers()},prevPage(){this.currentPage>1&&this.currentPage--,this.loadUsers()},setPage(e){this.currentPage=e,this.loadUsers()}}}),c=[{username:"andrii123",message:"submited a new recipe",date:"2020-01-01",id:1},{username:"hesoyam",message:"submited a new recipe",date:"2020-01-01",id:2},{username:"baguvix",message:"submited a new recipe",date:"2020-01-01"},{username:"TonyStark",message:"submited a new recipe",date:"2020-01-01"},{username:"John Wick",message:"submited a new recipe",date:"2020-01-01"}],d=(0,a.Q_)("recipeStore",{state:()=>({recipes:[],currentRecipe:{},tags:[],categories:[],notifications:c}),getters:{},actions:{async createRecipe(e){await(0,i.Po)((async()=>{const{data:t}=await i.Xb.post("/recipes",e);this.recipes.push(t)}))},async getTags(){await(0,i.Po)((async()=>{const e=await i.Xb.get("http://localhost:3000/api/recipes/tags/en");this.tags=e}))}}}),u=((0,a.Q_)("cardStore",{state:()=>({cells:["Tomato","Apple","Olive Oil","Raddish"],ingredients:["butter mealted (460g)","brown sugar (440g)","granulated sugar (400g)","eggs (4)","vanilla extract","baking powder","chocolate chips (700g)"]})}),e=>(0,a.Jk)(e))}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,a,i,o)=>{if(!a){var s=1/0;for(u=0;u<e.length;u++){for(var[a,i,o]=e[u],r=!0,c=0;c<a.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(r=!1,o<s&&(s=o));if(r){e.splice(u--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,i,o]}})(),(()=>{n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+({147:"AdminBoard",161:"AdminUsers",213:"AdminPostsCreate",369:"AdminRecipesItem",411:"AdminPosts",450:"AdminDashboard",593:"AdminLogin",603:"AdminSettings",672:"Admin",970:"AdminPostsAll"}[e]||e)+"."+{62:"23d9dfe3",147:"e7d7ba02",161:"b8b32a52",213:"edd66dac",319:"34216831",369:"995ed9b3",411:"966d71f8",450:"d87c9bda",593:"e5e38550",603:"9dc7de0b",672:"88aacd53",685:"98d9d641",722:"e0dbd4b9",967:"f2c4a2ad",970:"127712de"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+{147:"AdminBoard",161:"AdminUsers",213:"AdminPostsCreate",369:"AdminRecipesItem",450:"AdminDashboard",593:"AdminLogin",672:"Admin",970:"AdminPostsAll"}[e]+"."+{147:"7e90c340",161:"2dc19b5d",213:"7e90c340",369:"7e90c340",450:"7e90c340",593:"7e90c340",672:"7e90c340",970:"7e90c340"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="qf-frontend:";n.l=(a,i,o,s)=>{if(e[a])e[a].push(i);else{var r,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==a||l.getAttribute("data-webpack")==t+o){r=l;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+o),r.src=a),e[a]=[i];var f=(t,n)=>{r.onerror=r.onload=null,clearTimeout(h);var i=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((e=>e(n))),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=f.bind(null,r.onerror),r.onload=f.bind(null,r.onload),c&&document.head.appendChild(r)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/"})(),(()=>{var e=(e,t,n,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=o=>{if(i.onerror=i.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=r,i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=o,i.href=t,document.head.appendChild(i),i},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){i=s[a],o=i.getAttribute("data-href");if(o===e||o===t)return i}},a=a=>new Promise(((i,o)=>{var s=n.miniCssF(a),r=n.p+s;if(t(s,r))return i();e(a,r,i,o)})),i={143:0};n.f.miniCss=(e,t)=>{var n={147:1,161:1,213:1,369:1,450:1,593:1,672:1,970:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=a(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,a)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var o=new Promise(((n,a)=>i=e[t]=[n,a]));a.push(i[2]=o);var s=n.p+n.u(t),r=new Error,c=a=>{if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",r.name="ChunkLoadError",r.type=o,r.request=s,i[1](r)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,a)=>{var i,o,[s,r,c]=a,d=0;if(s.some((t=>0!==e[t]))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var u=c(n)}for(t&&t(a);d<s.length;d++)o=s[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkqf_frontend"]=self["webpackChunkqf_frontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=n.O(void 0,[998],(()=>n(614)));a=n.O(a)})();
//# sourceMappingURL=app.c9dbd073.js.map