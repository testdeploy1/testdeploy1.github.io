(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(161),l=function(e){return r.a.createElement("div",{className:"album19"})};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l,null))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(155);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},155:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},156:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(168),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,c=n.data.site,o=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:l},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:o}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(154),s=(a(164),function(e){e.siteTitle;return i.a.createElement("aside",null,i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.a,{to:"/",activeClassName:"active"},"Home")),i.a.createElement("li",null,i.a.createElement(o.a,{activeClassName:"active",to:"/works/"},"Art Works")),i.a.createElement("li",null,i.a.createElement(o.a,{activeClassName:"active",to:"/portfolio/"},"Comercial Portfolios")),i.a.createElement("li",null,i.a.createElement(o.a,{activeClassName:"active",to:"/studio/"},"studio")))),i.a.createElement("div",{className:"social-icons"},i.a.createElement("i",{className:"icon-facebook-logo"}),i.a.createElement("i",{className:"icon-instagram-logo"}),i.a.createElement("i",{className:"icon-black-back-closed-envelope-shape"})))}),u=(a(165),a(166),a(167),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement("footer",null))},data:n})});u.propTypes={children:c.a.node.isRequired};t.a=u},158:function(e){e.exports={data:{site:{siteMetadata:{title:"NAVASARDI ART STUDIO"}}}}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},160:function(e){e.exports={data:{site:{siteMetadata:{title:"NAVASARDI ART STUDIO",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"Arsen Alkamyan"}}}}},161:function(e,t,a){"use strict";a(74);var n=a(0),r=a.n(n),i=a(170),l=(a(171),a(169),a(157)),c=a(156),o=a(154),s=a(162),u=a(163);t.a=function(e){var t=e.children,a=r.a.useState(null),n=a[0],m=a[1];return r.a.useEffect(function(){var e;e=window.location.pathname,m("/studio/"===e?null:e.split("-")[1].slice(0,4))},[]),r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Studio"}),r.a.createElement("div",{className:"studio-card-content"},!n&&r.a.createElement(i.DefaultPlayer,{autoPlay:!0,loop:!0,controls:["PlayPause","Seek","Time","Volume","Fullscreen"],poster:"http://sourceposter.jpg",onCanPlayThrough:function(){}},r.a.createElement("source",{src:s,type:"video/mp4"}),r.a.createElement("track",{label:"English",kind:"subtitles",srcLang:"en",src:"http://source.vtt",default:!0})),r.a.createElement("div",{style:n?{}:{marginTop:"65px"},className:"flex-between studio-head container"},r.a.createElement("h1",null,"Navasardi studio"),r.a.createElement("div",{className:"butterfly"}),r.a.createElement("div",{className:"studio-head-link"},r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),!!n&&r.a.createElement("div",{className:"backLink"},r.a.createElement("div",null,r.a.createElement(o.a,{to:"/studio/"},r.a.createElement("img",{src:u,alt:""})," Back")," "),r.a.createElement("span",null,n)))),t))}},162:function(e,t,a){e.exports=a.p+"static/final-82098acfe61e61f4f5a39f3c1794bd24.mp4"},163:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAKAQMAAADb+g/7AAAABlBMVEVHcEz62EVoLohfAAAAAXRSTlMAQObYZgAAACBJREFUCNdj4GCAAAkobQGlK6D0fwiA0xVo6mD6oOYAAHQeD5NPkjdpAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-studio-year-2019-js-625bc2b1a6064be91322.js.map