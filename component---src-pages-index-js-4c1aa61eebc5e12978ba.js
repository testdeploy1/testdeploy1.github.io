(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(164),o=a(163),c=function(){var e=n.useState(null),t=e[0],a=e[1],r=n.useState(!1),i=r[0],o=r[1];n.useEffect(function(){return window.innerWidth<=930&&a(!0),window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}},[]);var c=function(){var e=window.innerWidth<=930;t!==e&&a(e)};return n.createElement("div",{className:"home-main"},n.createElement("div",{className:"home-background"}),!t&&n.createElement("div",{style:i?{opacity:1}:{},className:"home-background2"}),n.createElement("h1",null,"Arsen Navasardi"),!t&&n.createElement("div",{onMouseOver:function(e){return o(!0)},onMouseLeave:function(e){return o(!1)},className:"moving-background"}))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement(c,null))}},157:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(161);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},163:function(e,t,a){"use strict";var n=a(169),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(180),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},164:function(e,t,a){"use strict";var n=a(167),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(157),l=(a(35),function(e){var t=r.useState(e.from),a=t[0],n=t[1];return r.useEffect(function(){e.reset&&n(e.from);var t=setTimeout(function(){requestAnimationFrame(function(){return n(Object.assign({},e.inverse?e.from:e.to,{transition:(e.transitionProperty||"all")+" ."+(e.duration||7)+"s  cubic-bezier(.19,1,.21,1) "}))})},e.delay||0);return function(){return clearTimeout(t)}},[e.reset,e.inverse]),e.children(a)}),u=(a(176),function(){var e=i.a.useState(!1),t=e[0],a=e[1],n=i.a.useState(!1),r=n[0],o=n[1],c=i.a.useState(!1),u=c[0],m=c[1],d=i.a.useState(null),f=d[0],v=d[1];i.a.useEffect(function(){var e=window.innerWidth<=650;a(e),o(!e),window.addEventListener("resize",p)},[]),i.a.useEffect(function(){var e;return e&&clearTimeout(e),u&&(e=setTimeout(function(){o(!1),m(!1)},700)),function(){clearTimeout(e)}},[u]);var p=function(){var e=window.innerWidth<=650;t||(a(e),o(!e),v(!1))},E=function(e){b(),r?m(!u):o(!0)},b=function(){v(!f)};return i.a.createElement("aside",{onBlur:function(e){e.relatedTarget&&e.target&&e.relatedTarget.tabIndex!==e.target.tabIndex&&f&&E()},tabIndex:1,className:t?"hamburger":""},t&&i.a.createElement("button",{tabIndex:1,className:f?"btnClicked":"btnUnClicked",onClick:E},i.a.createElement("i",{className:f?"icon-close":"icon-menu"})),r&&i.a.createElement(l,{from:t?{transform:"translateX(-100%)"}:{},to:t?{transform:"translateX(0%)"}:{},inverse:u},function(e){return i.a.createElement("nav",{style:t?e:{}},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.a,{tabIndex:1,to:"/",activeClassName:"active"},"Home")),i.a.createElement("li",null,i.a.createElement(s.a,{tabIndex:1,activeClassName:"active",to:"/works/"},"Art Works")),i.a.createElement("li",null,i.a.createElement(s.a,{tabIndex:1,activeClassName:"active",to:"/portfolio/"},"Comercial Portfolios")),i.a.createElement("li",null,i.a.createElement(s.a,{tabIndex:1,activeClassName:"active",to:"/studio/"},"Studio")),i.a.createElement("li",{className:"social"},i.a.createElement("div",{className:"social-icons"},i.a.createElement("a",{tabIndex:1,target:"_blank",href:"https://www.facebook.com/pages/category/Community-College/Navasardi-Studio-657852430988885"},i.a.createElement("i",{className:"icon-facebook-logo"})),i.a.createElement("a",{tabIndex:1,target:"_blank",href:"https://www.instagram.com/navasardi"},i.a.createElement("i",{className:"icon-instagram-logo"})),i.a.createElement("a",{tabIndex:1,href:"mailto:navasardi.arsen@gmail.com"},i.a.createElement("i",{className:"icon-black-back-closed-envelope-shape"}))))))}))}),m=(a(177),a(178),a(179),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t))},data:n})});m.propTypes={children:c.a.node.isRequired};t.a=m},167:function(e){e.exports={data:{site:{siteMetadata:{title:"NAVASARDI ART STUDIO"}}}}},168:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},169:function(e){e.exports={data:{site:{siteMetadata:{title:"NAVASARDI ART STUDIO",description:"Website for Arsen Navasardi",author:"Arsen Alkamyan"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-4c1aa61eebc5e12978ba.js.map