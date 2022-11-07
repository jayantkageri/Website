(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var a,r;e.exports=(null==(a=n.g.process)?void 0:a.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8713)}])},4014:function(e,t){"use strict";t.Z={src:"/_next/static/media/jayantkageri.e6b8fc52.png",height:900,width:900,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEUAAAH+/fzIrK07NI1GFYpFRkV3UoMPCAsHAB+BOa2Tk5WDYVVwEX9cMMWdSPMeAW4WGUTd2/Pw8fSen7F8GyZzWcfAvcFfXmKwsbJaL0uCf5RfwgvRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVQImWNgQABxLlZWdgYGBjYxLiFGbhBDQoqRSYSdgYFFkkmQk4edgYGfWViUjwWkWICZl5MDog9EAQA5IAGeDwEwEQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,a){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2648).Z,r=n(7273).Z,o=a(n(7294)),i=n(1003),s=n(7795),l=n(4465),c=n(2692),u=n(8245),d=n(9246),p=n(227),f=n(3468);let m=new Set;function g(e,t,n,a){if(i.isLocalURL(t)){if(!a.bypassPrefetchedCheck){let r=void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+r;if(m.has(o))return;m.add(o)}Promise.resolve(e.prefetch(t,n,a)).catch(e=>{})}}function h(e){return"string"==typeof e?e:s.formatUrl(e)}let x=o.default.forwardRef(function(e,t){let n,a;let{href:s,as:m,children:x,prefetch:y,passHref:v,replace:b,shallow:j,scroll:w,locale:k,onClick:_,onMouseEnter:A,onTouchStart:E,legacyBehavior:N=!0!==Boolean(!0)}=e,C=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,N&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let M=!1!==y,T=o.default.useContext(c.RouterContext),L=o.default.useContext(u.AppRouterContext),z=null!=T?T:L,I=!T,{href:O,as:H}=o.default.useMemo(()=>{if(!T){let e=h(s);return{href:e,as:m?h(m):e}}let[t,n]=i.resolveHref(T,s,!0);return{href:t,as:m?i.resolveHref(T,m):n||t}},[T,s,m]),P=o.default.useRef(O),D=o.default.useRef(H);N&&(a=o.default.Children.only(n));let S=N?a&&"object"==typeof a&&a.ref:t,[F,R,B]=d.useIntersection({rootMargin:"200px"}),G=o.default.useCallback(e=>{(D.current!==H||P.current!==O)&&(B(),D.current=H,P.current=O),F(e),S&&("function"==typeof S?S(e):"object"==typeof S&&(S.current=e))},[H,S,O,B,F]);o.default.useEffect(()=>{z&&R&&M&&g(z,O,H,{locale:k})},[H,O,R,k,M,null==T?void 0:T.locale,z]);let U={ref:G,onClick(e){N||"function"!=typeof _||_(e),N&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,n,a,r,s,l,c,u,d){let{nodeName:p}=e.currentTarget,f="A"===p.toUpperCase();if(f&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[r?"replace":"push"](n,a,{shallow:s,locale:c,scroll:l}):t[r?"replace":"push"](a||n,{forceOptimisticNavigation:!d})};u?o.default.startTransition(m):m()}(e,z,O,H,b,j,w,k,I,M)},onMouseEnter(e){N||"function"!=typeof A||A(e),N&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),z&&(M||!I)&&g(z,O,H,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof E||E(e),N&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),z&&(M||!I)&&g(z,O,H,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||v||"a"===a.type&&!("href"in a.props)){let V=void 0!==k?k:null==T?void 0:T.locale,Z=(null==T?void 0:T.isLocaleDomain)&&p.getDomainLocale(H,V,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);U.href=Z||f.addBasePath(l.addLocale(H,V,null==T?void 0:T.defaultLocale))}return N?o.default.cloneElement(a,U):o.default.createElement("a",Object.assign({},C,U),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:l}=e,c=l||!o,[u,d]=a.useState(!1),[p,f]=a.useState(null);a.useEffect(()=>{if(o){if(!c&&!u&&p&&p.tagName){let e=function(e,t,n){let{id:a,observer:r,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},a=s.find(e=>e.root===n.root&&e.margin===n.margin);if(a&&(t=i.get(a)))return t;let r=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:r},s.push(n),i.set(n,t),t}(n);return o.set(e,t),r.observe(e),function(){if(o.delete(e),r.unobserve(e),0===o.size){r.disconnect(),i.delete(a);let t=s.findIndex(e=>e.root===a.root&&e.margin===a.margin);t>-1&&s.splice(t,1)}}}(p,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let a=r.requestIdleCallback(()=>d(!0));return()=>r.cancelIdleCallback(a)}},[p,c,n,t,u]);let m=a.useCallback(()=>{d(!1)},[]);return[f,u,m]};var a=n(7294),r=n(4686);let o="function"==typeof IntersectionObserver,i=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8713:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var a=n(5893),r=n(7294),o=n(1163),i=n(6501),s=n(9008),l=n.n(s),c=n(4298),u=n.n(c),d=n(3454);function p(e){let t=e.page?"".concat(e.page," - Jayant Hegde Kageri"):"Jayant Hegde Kageri - Developer",n="Nothing is Easy in life when you aren't interested. | Developer from India",r="jayant, hegde, kageri, jayantkageri, @jayantkageri, developer, kageri250, jayant hegde kageri, jayant kageri, jayant hegde, nothing is easy in life when you aren't interested, nothing is easy in life when you are not interested.";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{content:"",name:n}),(0,a.jsx)("meta",{content:"",name:r}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,a.jsx)("meta",{name:"author",content:"Jayant Hegde Kageri"}),(0,a.jsx)("meta",{name:"keywords",content:r}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"https://jayantkageri.in"}),(0,a.jsx)("meta",{property:"og:description",content:n}),(0,a.jsx)("meta",{property:"og:locale",content:"en_IN"}),(0,a.jsx)("meta",{property:"og:site_name",content:"Jayant Hegde Kageri"}),(0,a.jsx)("meta",{property:"article:author",content:"https://github.com/jayantkageri"}),(0,a.jsx)("meta",{property:"article:publisher",content:"https://jayantkageri.in"}),(0,a.jsx)("meta",{property:"og:image",content:"https://jayantkageri.in/assets/img/favicons/android-icon-192x192.png"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@jayantkageri"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@jayantkageri"}),(0,a.jsx)("meta",{name:"twitter:title",content:t}),(0,a.jsx)("meta",{name:"twitter:description",content:n}),(0,a.jsx)("meta",{property:"twitter:url",content:"https://jayantkageri.in"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://jayantkageri.in/assets/img/favicons/android-icon-192x192.png"}),(0,a.jsx)("link",{rel:"icon",href:"/assets/img/favicons/android-icon-192x192.png",type:"image/x-icon"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/assets/img/favicons/apple-icon-57x57.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/assets/img/favicons/apple-icon-60x60.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/assets/img/favicons/apple-icon-72x72.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/assets/img/favicons/apple-icon-76x76.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/assets/img/favicons/apple-icon-114x114.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/assets/img/favicons/apple-icon-120x120.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/assets/img/favicons/apple-icon-144x144.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/assets/img/favicons/apple-icon-152x152.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/img/favicons/apple-icon-180x180.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/assets/img/favicons/android-icon-192x192.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/img/favicons/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/assets/img/favicons/favicon-96x96.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/img/favicons/favicon-16x16.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/assets/img/favicons/manifest.json"}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#111827"}),(0,a.jsx)("meta",{name:"msapplication-TileImage",content:"/assets/img/favicons/ms-icon-144x144.png"}),(0,a.jsx)("meta",{name:"theme-color",content:"#111827"})]}),(0,a.jsx)(u(),{id:"gtag-script",dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n              })(window,document,'script','dataLayer','".concat(d.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,"');")}}),(0,a.jsx)("noscript",{dangerouslySetInnerHTML:{__html:'<iframe id="gtag" src="https://www.googletagmanager.com/ns.html?id='.concat(d.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,'" height="0" width="0" style="display:none;visibility:hidden"></iframe>')}})]})}var f=n(5714),m=n.n(f),g=n(1664),h=n.n(g),x=n(4014);function y(){let e=(0,o.useRouter)(),[t,n]=r.useState({menu_open:!1}),i=[{name:"Home",href:"/",active:"/"===e.pathname},{name:"Social",href:"/social",active:"/social"===e.pathname},{name:"Contact",href:"/contact",active:"/contact"===e.pathname},{name:"Video",href:"/intro",active:"/intro"===e.pathname},{name:"Legal",href:"/legal",active:"/legal"===e.pathname}],s=e=>{e.preventDefault(),n({...t,menu_open:!t.menu_open})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("nav",{className:"shadow bg-gray-900 select-none border-b border-b-indigo-600",children:(0,a.jsxs)("div",{className:"container px-6 py-2 mx-auto md:flex md:justify-between md:items-center",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("div",{children:(0,a.jsx)(h(),{href:"/",className:"text-2xl font-bold transition-colors duration-200 transform text-white lg:text-3xl hover: dark:hover:text-gray-300",tabIndex:-1,children:(0,a.jsx)("div",{className:"w-14 rounded-full",children:(0,a.jsx)("img",{src:x.Z.src,alt:"Jayant Hegde Kageri",className:"w-14 rounded-full"})})})}),(0,a.jsx)("div",{className:"flex md:hidden",children:(0,a.jsx)("button",{type:"button",className:"text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition-all","aria-label":"toggle menu",onClick:s,children:t.menu_open?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16",children:(0,a.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})}):(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),(0,a.jsx)("div",{className:"items-center md:flex transition-transform transform md:flex-center p-4 md:border-0 md:mt-0 border-t mt-3",hidden:!t.menu_open,onClick(){n({...t,menu_open:!t.menu_open})},children:(0,a.jsx)("div",{className:"flex flex-col md:flex-row md:mx-6 transition-transform",children:i.map(e=>(0,a.jsx)(h(),{href:e.href,className:"".concat(m().className," my-1 text-2xs font-medium transition-colors duration-200 transform ").concat(e.active?"text-indigo-600":"text-gray-200"," hover:text-blue-500 md:mx-4 md:my-0 self-center"),children:e.name},e.name))})})]})})})}var v=n(2960),b=n.n(v),j=n(924),w=n.n(j);function k(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("footer",{className:"flex flex-col items-center justify-between px-6 py-4 border-t bg-gray-900 border-gray-700 sm:flex-row select-none",children:[(0,a.jsx)(h(),{href:"/",className:"".concat(b().className," text-xl font-bold text-white hover:text-indigo-600 transition-all"),tabIndex:-1,children:"Jayant Hegde Kageri"}),(0,a.jsxs)("p",{className:"".concat(w().className," text-sm py-2 text-white sm:py-0"),children:["\xa9️"," ",2021===new Date().getFullYear()?2021:"2021 - ".concat(new Date().getFullYear())," ","All Rights Reserved"]}),(0,a.jsxs)("div",{className:"flex -mx-2",children:[(0,a.jsx)(_,{title:"Source Code",link:"https://links.jayantkageri.in/source-code",svg:"M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.172 14.841a1.13 1.13 0 0 0 .401.823c.129.108.288.192.478.252.189.061.41.091.665.091.338 0 .624-.053.858-.158.236-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.62-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.513-.152.142 0 .265.023.369.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.292 0-.551.05-.776.15-.224.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.083.149.2.27.352.367.152.095.332.167.54.213l.617.144c.207.049.362.113.463.193a.387.387 0 0 1 .152.326.511.511 0 0 1-.084.29.559.559 0 0 1-.255.193 1.07 1.07 0 0 1-.413.07c-.118 0-.224-.013-.32-.04a.837.837 0 0 1-.249-.115.578.578 0 0 1-.255-.384h-.764Zm-1.244 1.09v-3.337h1.136v-.662H0v.662h1.134v3.337h.794Zm7.076-3.999h.893l-1.274 2.007 1.254 1.992h-.909l-.85-1.415h-.034l-.853 1.415H6.37l1.239-2.016-1.228-1.983h.932l.832 1.438h.035l.824-1.438Z"}),(0,a.jsx)(_,{title:"GitHub",link:"https://links.jayantkageri.in/github",svg:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}),(0,a.jsx)(_,{title:"Telegram",link:"https://links.jayantkageri.in/telegram",svg:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"}),(0,a.jsx)(_,{title:"Instagram",link:"https://links.jayantkageri.in/instagram",svg:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}),(0,a.jsx)(_,{title:"Facebook",link:"https://links.jayantkageri.in/facebook",svg:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}),(0,a.jsx)(_,{title:"Twitter",link:"https://links.jayantkageri.in/twitter",svg:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}),(0,a.jsx)(_,{title:"Mail",link:"mailto:jayantkageri@gmail.com",svg:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"})]})]})})}function _(e){return(0,a.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"mx-2 text-gray-300 hover:text-indigo-600 transition-colors","aria-label":e.title,children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 fill-current",viewBox:"0 0 16 16",children:[(0,a.jsx)("title",{children:e.title}),"string"==typeof e.svg?(0,a.jsx)("path",{d:e.svg}):e.svg.map((e,t)=>(0,a.jsx)("path",{d:e},t))]})})}n(864);var A=function(e){let{Component:t,pageProps:n}=e,[s,l]=r.useState({notice:!1,page:null});return(0,o.useRouter)(),(null==s?void 0:s.notice)||(console.info("Website of jayantkageri, NextJS Site for jayantkageri.in"),console.info("Copyright (C) ".concat(2021===new Date().getFullYear()?2021:"2021 - ".concat(new Date().getFullYear())," Jayant Hegde Kageri <https://github.com/jayantkageri>")),console.info("This website is licensed under GNU Affero General Public License v3.0 or later (AGPL-3.0-or-later)."),console.info("You can find the source code at https://links.jayantkageri.in/source-code"),l({...s,notice:!0})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{page:t.title}),(0,a.jsx)(y,{}),(0,a.jsx)(i.x7,{position:"top-right"}),(0,a.jsx)("main",{className:"bg-gray-900 min-h-screen",children:(0,a.jsx)(t,{...n})}),(0,a.jsx)(k,{})]})}},864:function(){},924:function(e){e.exports={style:{fontFamily:"'__Inter_1e53bc', '__Inter_Fallback_1e53bc'",fontWeight:400,fontStyle:"normal"},className:"__className_1e53bc"}},2960:function(e){e.exports={style:{fontFamily:"'__Montserrat_d1729e', '__Montserrat_Fallback_d1729e'",fontWeight:600,fontStyle:"normal"},className:"__className_d1729e"}},5714:function(e){e.exports={style:{fontFamily:"'__Inter_1c5856', '__Inter_Fallback_1c5856'",fontWeight:500,fontStyle:"normal"},className:"__className_1c5856"}},7663:function(e){!function(){var t={229:function(e){var t,n,a,r=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(a){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(a){n=i}}();var l=[],c=!1,u=-1;function d(){c&&a&&(c=!1,a.length?l=a.concat(l):u=-1,l.length&&p())}function p(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(a=l,l=[];++u<t;)a&&a[u].run();u=-1,t=l.length}a=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(a){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||c||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,a),i=!1}finally{i&&delete n[e]}return o.exports}a.ab="//";var r=a(229);e.exports=r}()},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},4298:function(e,t,n){e.exports=n(3573)},6501:function(e,t,n){"use strict";let a,r;n.d(t,{x7:function(){return er},ZP:function(){return eo}});var o,i=n(7294);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,p=(e,t)=>{let n="",a="",r="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?n=o+" "+i+";":a+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=p.p?p.p(o,i):o+":"+i+";")}return n+(t&&r?t+"{"+r+"}":r)+a},f={},m=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+m(e[n]);return t}return e},g=(e,t,n,a,r)=>{var o,i;let s=m(e),l=f[s]||(f[s]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(s));if(!f[l]){let g=s!==e?e:(e=>{let t,n,a=[{}];for(;t=c.exec(e.replace(u,""));)t[4]?a.shift():t[3]?(n=t[3].replace(d," ").trim(),a.unshift(a[0][n]=a[0][n]||{})):a[0][t[1]]=t[2].replace(d," ").trim();return a[0]})(e);f[l]=p(r?{["@keyframes "+l]:g}:g,n?"":"."+l)}let h=n&&f.g?f.g:null;return n&&(f.g=f[l]),o=f[l],i=t,h?i.data=i.data.replace(h,o):-1===i.data.indexOf(o)&&(i.data=a?o+i.data:i.data+o),l},h=(e,t,n)=>e.reduce((e,a,r)=>{let o=t[r];if(o&&o.call){let i=o(n),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=s?"."+s:i&&"object"==typeof i?i.props?"":p(i,""):!1===i?"":i}return e+a+(null==o?"":o)},"");function x(e){let t=this||{},n=e.call?e(t.p):e;return g(n.unshift?n.raw?h(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let y,v,b,j=x.bind({k:1});function w(e,t){let n=this||{};return function(){let a=arguments;function r(o,i){let s=Object.assign({},o),l=s.className||r.className;n.p=Object.assign({theme:v&&v()},s),n.o=/ *go\d+/.test(l),s.className=x.apply(n,a)+(l?" "+l:""),t&&(s.ref=i);let c=e;return e[0]&&(c=s.as||e,delete s.as),b&&c[0]&&b(s),y(c,s)}return t?t(r):r}}var k=e=>"function"==typeof e,_=(e,t)=>k(e)?e(t):e,A=(a=0,()=>(++a).toString()),E=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},N=new Map,C=e=>{if(N.has(e))return;let t=setTimeout(()=>{N.delete(e),I({type:4,toastId:e})},1e3);N.set(e,t)},M=e=>{let t=N.get(e);t&&clearTimeout(t)},T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&M(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return e.toasts.find(e=>e.id===n.id)?T(e,{type:1,toast:n}):T(e,{type:0,toast:n});case 3:let{toastId:a}=t;return a?C(a):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},L=[],z={toasts:[],pausedAt:void 0},I=e=>{z=T(z,e),L.forEach(e=>{e(z)})},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},H=(e={})=>{let[t,n]=(0,i.useState)(z);(0,i.useEffect)(()=>(L.push(n),()=>{let e=L.indexOf(n);e>-1&&L.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var n,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||O[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},P=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||A()}),D=e=>(t,n)=>{let a=P(t,e,n);return I({type:2,toast:a}),a.id},S=(e,t)=>D("blank")(e,t);S.error=D("error"),S.success=D("success"),S.loading=D("loading"),S.custom=D("custom"),S.dismiss=e=>{I({type:3,toastId:e})},S.remove=e=>I({type:4,toastId:e}),S.promise=(e,t,n)=>{let a=S.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(S.success(_(t.success,e),{id:a,...n,...null==n?void 0:n.success}),e)).catch(e=>{S.error(_(t.error,e),{id:a,...n,...null==n?void 0:n.error})}),e};var F=(e,t)=>{I({type:1,toast:{id:e,height:t}})},R=()=>{I({type:5,time:Date.now()})},B=e=>{let{toasts:t,pausedAt:n}=H(e);(0,i.useEffect)(()=>{if(n)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(n<0){t.visible&&S.dismiss(t.id);return}return setTimeout(()=>S.dismiss(t.id),n)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,n]);let a=(0,i.useCallback)(()=>{n&&I({type:6,time:Date.now()})},[n]),r=(0,i.useCallback)((e,n)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:o}=n||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<s&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:F,startPause:R,endPause:a,calculateOffset:r}}},G=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,V=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=w("div")`
  position: absolute;
`,$=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,W=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:n,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(W,null,t):t:"blank"===n?null:i.createElement($,null,i.createElement(U,{...a}),"loading"!==n&&i.createElement(Z,null,"error"===n?i.createElement(G,{...a}):i.createElement(V,{...a})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,q=(e,t)=>{let n=e.includes("top")?1:-1,[a,r]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(n),J(n)];return{animation:t?`${j(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:n,children:a})=>{let r=e.height?q(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(K,{toast:e}),s=i.createElement(Q,{...e.ariaProps},_(e.message,e));return i.createElement(X,{className:e.className,style:{...r,...n,...e.style}},"function"==typeof a?a({icon:o,message:s}):i.createElement(i.Fragment,null,o,s))});o=i.createElement,p.p=void 0,y=o,v=void 0,b=void 0;var et=({id:e,className:t,style:n,onHeightUpdate:a,children:r})=>{let o=i.useCallback(t=>{if(t){let n=()=>{a(e,t.getBoundingClientRect().height)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:o,className:t,style:n},r)},en=(e,t)=>{let n=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...a}},ea=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,er=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:a,children:r,containerStyle:o,containerClassName:s})=>{let{toasts:l,handlers:c}=B(n);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(n=>{let o=n.position||t,s=en(o,c.calculateOffset(n,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(et,{id:n.id,key:n.id,onHeightUpdate:c.updateHeight,className:n.visible?ea:"",style:s},"custom"===n.type?_(n.message,n):r?r(n):i.createElement(ee,{toast:n,position:o}))}))},eo=S}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);