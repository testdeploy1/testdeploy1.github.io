(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{149:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(157),c=n(156),l=n(175),u=[{width:710,image:"p1",text:"some Text",title:"title",date:"01.02.2019",heading:"My Art Works",headText:"lorem Ipsum"},{width:270,image:"pimg2",text:"some Text",title:"title",date:"01.02.2019"},{width:600,image:"pimg3",text:"some Text",title:"title",date:"01.02.2019"},{width:446,image:"aw1",text:"some Text",title:"title",date:"01.02.2019"},{width:342,image:"aw2",text:"some Text",title:"title",date:"01.02.2019"}],s=function(){return a.a.createElement("div",{className:"portfolio-body"},a.a.createElement(l.a,{cards:u}))};n(189),t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(c.a,{title:"Art Works"}),a.a.createElement(s,null))}},173:function(e,t,n){var r=n(11);r(r.S,"Math",{sign:n(174)})},174:function(e,t){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},175:function(e,t,n){"use strict";n(173);var r=n(0),a=n.n(r),i=n(172),c=function(e){var t=e.data,n=t.image,r=t.title,c=t.text,l=t.date,u=t.width,s=t.heading,o=t.headText;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:s?"card-main flexed":"card-main"},s&&a.a.createElement("div",null,a.a.createElement("h1",null,s),a.a.createElement("span",null,o)),a.a.createElement("div",null,a.a.createElement("div",{style:{width:u+"px"}},a.a.createElement(i.a,{image:n})),a.a.createElement("div",{className:"card-text"},a.a.createElement("h3",null,r),a.a.createElement("span",{className:"text-span"},c),a.a.createElement("span",null,l)))))},l=function(e){var t=[e.data[0]];if(r.useEffect(function(){},[]),e.data){for(var n=Math.floor(e.data.length/2),a=0;a<n;a++)t.push(e.data[a+2]);console.log(t)}return r.createElement("div",null,t.map(function(e,t){return r.createElement("span",{className:"miniView",key:t})}))};n(177),t.a=function(e){var t,n,a=r.useRef(),i=!1,u=function(e){i=!1},s=function(e){i=!0,t=e.pageX-+a.current.style.marginLeft.slice(0,-2),n=+a.current.style.marginLeft.slice(0,-2)},o=function(e){i=!1,document.body.style.overflow="auto"},m=function(e){document.body.style.overflow="hidden",i&&(e.preventDefault(),f(e))},d=function(e){i=!0,t=e.targetTouches[0].pageX-+a.current.style.marginLeft.slice(0,-2),n=+a.current.style.marginLeft.slice(0,-2)},v=function(e){i&&(e.preventDefault(),f(e,"touch"))},f=function(e,r){var i=a.current.parentNode.getBoundingClientRect().width,c=a.current.getBoundingClientRect().width,l=Math.ceil(c-i),u=("touch"===r?e.targetTouches[0].pageX:e.pageX)-+a.current.style.marginLeft.slice(0,-2)-t,s=a.current.style.marginLeft.slice(0,-2);if("wheel"===r){var o=Math.sign(e.deltaY);n=l/5*-o+ +a.current.style.marginLeft.slice(0,-2)}else n=+s+2*u;i>c?requestAnimationFrame(function(){a.current.style.marginLeft="0px"}):n<-l?requestAnimationFrame(function(){a.current.style.marginLeft=-l+"px"}):n>0?requestAnimationFrame(function(){a.current.style.marginLeft="0px"}):requestAnimationFrame(function(){a.current.style.marginLeft=n+"px"})},E=function(e){f(e,"wheel")};return r.useEffect(function(){return a.current.addEventListener("touchstart",d),a.current.addEventListener("touchmove",v),a.current.addEventListener("touchleave",o),a.current.addEventListener("touchend",u),a.current.addEventListener("wheel",E),a.current.addEventListener("mouseup",u),a.current.addEventListener("mousedown",s),a.current.addEventListener("mouseleave",o),a.current.addEventListener("mousemove",m),function(){a.current.removeEventListener("touchstart",d),a.current.removeEventListener("touchmove",v),a.current.removeEventListener("touchleave",o),a.current.removeEventListener("touchend",u),a.current.removeEventListener("wheel",E),a.current.removeEventListener("mouseup",u),a.current.removeEventListener("mousedown",s),a.current.removeEventListener("mouseleave",o),a.current.removeEventListener("mousemove",m)}},[]),r.createElement("div",{className:"slider"},r.createElement("div",{className:"slider-main"},r.createElement("div",{className:"slider-body",ref:a,style:{transition:"margin 0.9s ease-out",marginLeft:"0"}},e.cards.map(function(e,t){return r.createElement(c,{key:t,data:e})}))),r.createElement("div",{className:"flex-between slider-pages"},r.createElement(l,{data:e.cards}),r.createElement("div",null,"scroll")))}}}]);
//# sourceMappingURL=component---src-pages-works-js-9e226059a328995dc15d.js.map