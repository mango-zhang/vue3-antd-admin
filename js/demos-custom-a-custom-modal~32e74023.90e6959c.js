(window.webpackJsonp=window.webpackJsonp||[]).push([["demos-custom-a-custom-modal~32e74023"],{"2f30":function(e,t,o){"use strict";o.r(t);var c=o("7a23"),a=Object(c.withScopeId)("data-v-35b707fd");Object(c.pushScopeId)("data-v-35b707fd");var n=Object(c.createTextVNode)("弹出弹窗");Object(c.popScopeId)();var b,r=a((function(e,t,o,b,r,d){var i=Object(c.resolveComponent)("a-alert"),s=Object(c.resolveComponent)("a-button"),l=Object(c.resolveComponent)("a-card"),u=Object(c.resolveComponent)("a-custom-modal");return Object(c.openBlock)(),Object(c.createBlock)("div",null,[Object(c.createVNode)(i,{message:"自定义模态框",description:"沿用ant-design-vue的modal样式，自定义一个可拖拽、可调整大小的模态框",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),Object(c.createVNode)(l,null,{default:a((function(){return[Object(c.createVNode)(s,{onClick:t[1]||(t[1]=function(t){return e.visible=!0}),type:"primary"},{default:a((function(){return[n]})),_:1})]})),_:1}),Object(c.createVNode)(u,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=function(t){return e.visible=t})},null,8,["visible"])])})),d=o("5530"),i=o("ade3"),s=(o("288f"),o("cdeb")),l=(o("ab9e"),o("2c92")),u=(o("b0c0"),o("c1b0")),p=Object(c.defineComponent)({name:"custom-modal",components:(b={},Object(i.a)(b,l.a.name,l.a),Object(i.a)(b,s.a.name,s.a),Object(i.a)(b,"ACustomModal",u.ACustomModal),b),setup:function(){var e=Object(c.reactive)({visible:!1});return Object(d.a)({},Object(c.toRefs)(e))}});p.render=r,p.__scopeId="data-v-35b707fd",t.default=p}}]);