(window.webpackJsonp=window.webpackJsonp||[]).push([["split-panel~36923b8c"],{"33c8":function(e,t,n){},7370:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=Object(c.withScopeId)("data-v-c0dec78c");Object(c.pushScopeId)("data-v-c0dec78c");var a={class:"split-wrapper"},r={ref:"scalable",class:"scalable"},l={class:"left-content"},u=Object(c.createTextVNode)(" 右边内容区 "),d=Object(c.createVNode)("i",null,null,-1),s=Object(c.createVNode)("i",null,null,-1),i={class:"right-content"},p=Object(c.createTextVNode)(" 右边内容区 ");Object(c.popScopeId)();var m=o((function(e,t,n,o,m,v){return Object(c.openBlock)(),Object(c.createBlock)("div",a,[Object(c.createVNode)("div",r,[Object(c.createVNode)("div",l,[Object(c.renderSlot)(e.$slots,"left-content",{},(function(){return[u]}))]),Object(c.createVNode)("div",{ref:"separator",onMousedown:t[1]||(t[1]=function(){return e.startDrag&&e.startDrag.apply(e,arguments)}),class:"separator"},[d,s],544)],512),Object(c.createVNode)("div",i,[Object(c.renderSlot)(e.$slots,"right-content",{},(function(){return[p]}))])])})),v=n("0f32"),b=n.n(v),f=Object(c.defineComponent)({name:"split-panel",setup:function(){var e,t,n=Object(c.ref)(null),o=b()((function(c){n.value&&(n.value.style.width=t+c.clientX-e+"px")}),20),a=function e(){document.documentElement.style.userSelect="unset",document.documentElement.removeEventListener("mousemove",o),document.documentElement.removeEventListener("mouseup",e)};return{startDrag:function(c){e=c.clientX,n.value&&(t=parseInt(window.getComputedStyle(n.value).width,10)),document.documentElement.style.userSelect="none",document.documentElement.addEventListener("mousemove",o),document.documentElement.addEventListener("mouseup",a)},scalable:n}}});n("ad2e"),f.render=m,f.__scopeId="data-v-c0dec78c",t.default=f},ad2e:function(e,t,n){"use strict";n("33c8")}}]);