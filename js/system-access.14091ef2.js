(window.webpackJsonp=window.webpackJsonp||[]).push([["system-access","iconfont","iconfont-icon-font"],{"30b1":function(e,t,n){"use strict";n("45e6")},"45e6":function(e,t,n){},"5e89":function(e,t,n){var r=n("861d"),o=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&o(e)===e}},"5f9a":function(e,t,n){"use strict";n.r(t);var r,o=n("7a23"),c=Object(o.createTextVNode)(" 添加 "),a=Object(o.createTextVNode)(" 删除 "),l=n("5530"),i=n("1da1"),u=(n("cd17"),n("ed3b")),d=(n("96cf"),n("d3b7"),n("25f0"),n("3c7f")),s=n("1016"),f=(n("a15b"),n("a526")),b=n("3bb8");function m(e){return f.a.request({url:r.adminAccess,method:b.b.GET,params:e})}function p(e){return f.a.request({url:[r.adminAccess,e].join("/"),method:b.b.DELETE},{isShowErrorMessage:!0,successMessageText:"删除成功"})}function O(e,t){return f.a.request({url:[r.adminAccess,e].join("/"),method:b.b.PATCH,params:t},{isShowErrorMessage:!0,successMessageText:"修改成功"})}function j(e){return f.a.request({url:r.adminAccess,method:b.b.POST,params:e},{isShowErrorMessage:!0,successMessageText:"创建成功"})}!function(e){e.adminAccess="/admin/access",e.adminAccessModule="/admin/access/module"}(r||(r={})),n("8ba4"),n("a9e3");var v,y=Object(o.createTextVNode)(" 模块 "),g=Object(o.createTextVNode)(" 菜单 "),h=Object(o.createTextVNode)(" 否 "),w=Object(o.createTextVNode)(" 是 "),x=n("ade3"),N=(n("2ef0"),n("9839")),k=(n("5704"),n("b558")),C=(n("922d"),n("09d9")),R=(n("f2ef"),n("3af3")),V=(n("b0c0"),n("159b"),n("b64b"),n("ac16"),Object(o.defineComponent)({name:"AddModal",components:(v={},Object(x.a)(v,u.a.name,u.a),Object(x.a)(v,R.a.name,R.a),Object(x.a)(v,R.a.Item.name,R.a.Item),Object(x.a)(v,C.a.name,C.a),Object(x.a)(v,k.a.name,k.a),Object(x.a)(v,N.b.name,N.b),Object(x.a)(v,"ASelectOption",N.b.Option),v),props:{remove:{type:Function},fields:{type:Object,default:function(){return{}}},callback:{type:Function}},setup:function(e){var t=Object(o.ref)(null),n=Object(o.reactive)({visible:!0,confirmLoading:!1,moduleList:[]}),c=Object(o.reactive)({moduleName:"",moduleId:void 0,actionName:"",type:void 0,url:"",icon:"",sort:1,keepAlive:1});return e.fields.moduleId&&(Object.keys(c).forEach((function(t){return c[t]=e.fields[t]})),c.type=-1==e.fields.moduleId?1:2),Object(o.onMounted)(Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,void 0,f.a.request({url:r.adminAccessModule,method:b.b.GET,params:void 0});case 2:n.moduleList=e.sent;case 3:case"end":return e.stop()}}),e)})))),Object(l.a)(Object(l.a)({},Object(o.toRefs)(n)),{},{formRef:t,rules:{moduleName:[{required:!0,message:"模块名称不能为空"}],moduleId:[{required:!0,message:"模块名称不能为空"}],actionName:[{required:!0,message:"请输入菜单名称"}],type:[{required:!0,message:"请选择类型"}],url:[{required:!0,message:"请输入url地址"}]},prefix:"/vue3-antd-admin/",labelCol:{span:6},wrapperCol:{span:18},modelRef:c,handleOk:function(r){r.preventDefault(),n.confirmLoading=!0,t.value.validate().then(Object(i.a)(regeneratorRuntime.mark((function t(){var r,a,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.fields.id,l=Object(o.toRaw)(c),a&&Reflect.deleteProperty(l,"type"),t.next=5,(a?O(a,l):j(l)).finally((function(){return n.confirmLoading=!1}));case 5:n.visible=!1,null==e||null===(r=e.callback)||void 0===r||r.call(e);case 7:case"end":return t.stop()}}),t)})))).catch((function(e){n.confirmLoading=!1}))}})}}));V.render=function(e,t,n,r,c,a){var l=Object(o.resolveComponent)("a-select-option"),i=Object(o.resolveComponent)("a-select"),u=Object(o.resolveComponent)("a-form-item"),d=Object(o.resolveComponent)("a-input"),s=Object(o.resolveComponent)("a-input-number"),f=Object(o.resolveComponent)("a-form"),b=Object(o.resolveComponent)("a-modal");return Object(o.openBlock)(),Object(o.createBlock)(b,{visible:e.visible,"onUpdate:visible":t[9]||(t[9]=function(t){return e.visible=t}),title:Number.isInteger(e.fields.id)?"编辑资源":"新增资源","confirm-loading":e.confirmLoading,afterClose:e.remove,onOk:e.handleOk},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(f,{ref:"formRef",model:e.modelRef,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(u,{label:"类别",rules:e.rules.type,name:"type"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{value:e.modelRef.type,"onUpdate:value":t[1]||(t[1]=function(t){return e.modelRef.type=t}),disabled:Number.isInteger(e.fields.id),placeholder:"请选择类型"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(l,{value:1},{default:Object(o.withCtx)((function(){return[y]})),_:1}),Object(o.createVNode)(l,{value:2},{default:Object(o.withCtx)((function(){return[g]})),_:1})]})),_:1},8,["value","disabled"])]})),_:1},8,["rules"]),1==e.modelRef.type?(Object(o.openBlock)(),Object(o.createBlock)(u,{key:0,label:"模块名称",rules:e.rules.moduleName,name:"moduleName"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{value:e.modelRef.moduleName,"onUpdate:value":t[2]||(t[2]=function(t){return e.modelRef.moduleName=t}),disabled:Number.isInteger(e.fields.id),placeholder:"请输入模块名称"},null,8,["value","disabled"])]})),_:1},8,["rules"])):Object(o.createCommentVNode)("",!0),2==e.modelRef.type?(Object(o.openBlock)(),Object(o.createBlock)(u,{key:1,label:"模块名称",rules:e.rules.moduleId,name:"moduleId"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{value:e.modelRef.moduleId,"onUpdate:value":t[3]||(t[3]=function(t){return e.modelRef.moduleId=t}),disabled:Number.isInteger(e.fields.id),placeholder:"请选择模块"},{default:Object(o.withCtx)((function(){return[(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(e.moduleList,(function(e){return Object(o.openBlock)(),Object(o.createBlock)(l,{key:e.id,value:e.id},{default:Object(o.withCtx)((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.moduleName),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["value","disabled"])]})),_:1},8,["rules"])):Object(o.createCommentVNode)("",!0),2==e.modelRef.type?(Object(o.openBlock)(),Object(o.createBlock)(u,{key:2,label:"菜单名称",rules:e.rules.actionName,name:"actionName"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{value:e.modelRef.actionName,"onUpdate:value":t[4]||(t[4]=function(t){return e.modelRef.actionName=t}),placeholder:"请输入菜单名称"},null,8,["value"])]})),_:1},8,["rules"])):Object(o.createCommentVNode)("",!0),Object(o.createVNode)(u,{label:"路径",rules:e.rules.url,name:"url"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{value:e.modelRef.url,"onUpdate:value":t[5]||(t[5]=function(t){return e.modelRef.url=t}),placeholder:"请输入路径"},null,8,["value"])]})),_:1},8,["rules"]),Object(o.createVNode)(u,{label:"小图标"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{value:e.modelRef.icon,"onUpdate:value":t[6]||(t[6]=function(t){return e.modelRef.icon=t}),placeholder:"小图标"},null,8,["value"]),Object(o.createVNode)("a",{href:"".concat(e.prefix,"#/icons"),target:"_blank"},"可选图标",8,["href"])]})),_:1}),Object(o.createVNode)(u,{label:"排序"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{value:e.modelRef.sort,"onUpdate:value":t[7]||(t[7]=function(t){return e.modelRef.sort=t}),min:1,placeholder:"排序"},null,8,["value"])]})),_:1}),Object(o.createVNode)(u,{label:"keepAlive",name:"keepAlive"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{value:e.modelRef.keepAlive,"onUpdate:value":t[8]||(t[8]=function(t){return e.modelRef.keepAlive=t}),placeholder:"是否缓存页面"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(l,{value:0},{default:Object(o.withCtx)((function(){return[h]})),_:1}),Object(o.createVNode)(l,{value:1},{default:Object(o.withCtx)((function(){return[w]})),_:1})]})),_:1},8,["value"])]})),_:1})]})),_:1},8,["model","label-col","wrapper-col"])]})),_:1},8,["visible","title","confirm-loading","afterClose","onOk"])};var I=V,S=(n("3b18"),n("f64c"));n("b356"),n("76b3");var A,B=function(e,t,n){var r,c=document.createElement("div"),a=function(){r=null,Object(o.render)(null,c),c.remove()};return(r=Object(o.createVNode)(e)).props=Object(o.mergeProps)(r.props,Object(l.a)({remove:a},t)),Object(o.render)(r,c),r.component.ctx.remove=a,r.component.ctx.$updateProps=function(e){e&&Object.keys(e).forEach((function(t){r.component.props[t]=e[t]}))},r.component.ctx},T=n("48b8"),P=n("7d88"),_=[{title:"名称",dataIndex:"moduleName",slots:{customRender:"moduleName"}},{title:"url地址",dataIndex:"url"},{title:"icon图标",dataIndex:"icon",slots:{customRender:"icon"},slotsType:"component",slotsFunc:function(e){return Object(o.createVNode)(P.IconFont,{type:e.icon})}},{title:"排序",dataIndex:"sort"},{title:"创建时间",dataIndex:"createdAt",slots:{customRender:"createdAt"},slotsType:"format",slotsFunc:function(e){return Object(T.b)(e)}},{title:"最后更新时间",dataIndex:"updatedAt",slots:{customRender:"updatedAt"},slotsType:"format",slotsFunc:function(e){return Object(T.b)(e)}},{title:"操作",dataIndex:"action",width:200,slots:{customRender:"action"},actions:[{type:"popconfirm",text:"删除",permission:{action:"delete",effect:"disabled"},props:{type:"danger"},func:(A=Object(i.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=t.record).id<6)){e.next=3;break}return e.abrupt("return",S.a.warn("系统预置菜单，不能删除！"));case 3:return e.next=5,p(r.id).then((function(){return n()}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),function(e,t){return A.apply(this,arguments)})},{type:"button",text:"编辑",permission:{action:"update",effect:"disabled"},props:{type:"warning"},func:function(e,t){var n=e.record;return B(I,{fields:n,callback:t})}}]}],E=n("9720"),D=Object(o.defineComponent)({name:"SystemAccess",components:{DynamicTable:s.DynamicTable},setup:function(){var e=Object(o.ref)(null),t=Object(o.ref)({}),n=Object(o.reactive)({expandedRowKeys:[],tableLoading:!1,rowSelection:{onChange:function(e,t){n.rowSelection.selectedRowKeys=e},selectedRowKeys:[]}}),r=Object(o.computed)((function(){return 0==n.rowSelection.selectedRowKeys.length})),c=function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(n,r){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.value[r.id],e.next=3,Object(E.useExpandLoading)({expanded:n,record:r,expandItemEl:o,asyncFunc:m,params:{id:r.id,limit:100}});case 3:null!=(c=e.sent)&&c.data&&(r.children=c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(l.a)(Object(l.a)({},Object(o.toRefs)(n)),{},{columns:_,itemRefs:t,tableRef:e,isDisabled:r,expand:c,getAdminAccess:m,addItem:function(){B(I,{callback:function(){e.value.refreshTableData()}})},deleteItems:function(){var t;u.a.confirm({title:"提示",icon:Object(o.createVNode)(d.a),content:"您确定要删除所有选中吗？",onOk:(t=Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(n.rowSelection.selectedRowKeys.toString());case 2:return t.next=4,e.value.refreshTableData();case 4:n.rowSelection.selectedRowKeys=[];case 5:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})}})}});n("30b1"),D.render=function(e,t,n,r,l,i){var u=Object(o.resolveComponent)("a-button"),d=Object(o.resolveComponent)("dynamic-table"),s=Object(o.resolveDirective)("permission");return Object(o.openBlock)(),Object(o.createBlock)(d,{ref:"tableRef",columns:e.columns,"get-list-func":e.getAdminAccess,rowKey:"id","row-selection":e.rowSelection,onExpand:e.expand},{title:Object(o.withCtx)((function(){return[Object(o.withDirectives)(Object(o.createVNode)(u,{type:"primary",onClick:e.addItem},{default:Object(o.withCtx)((function(){return[c]})),_:1},8,["onClick"]),[[s,{action:"create",effect:"disabled"}]]),Object(o.withDirectives)(Object(o.createVNode)(u,{disabled:e.isDisabled,type:"primary",onClick:e.deleteItems},{default:Object(o.withCtx)((function(){return[a]})),_:1},8,["disabled","onClick"]),[[s,{action:"delete"}]])]})),moduleName:Object(o.withCtx)((function(t){var n=t.record;return[Object(o.createVNode)("span",{ref:function(t){t&&(e.itemRefs[n.id]=t)}},Object(o.toDisplayString)(n.moduleName||n.actionName),513)]})),_:1},8,["columns","get-list-func","row-selection","onExpand"])},t.default=D},"7d88":function(e,t,n){"use strict";n.r(t);var r=n("f9cc");n.d(t,"IconFont",(function(){return r.default}))},"8ba4":function(e,t,n){n("23e7")({target:"Number",stat:!0},{isInteger:n("5e89")})},ac16:function(e,t,n){var r=n("23e7"),o=n("825a"),c=n("06cf").f;r({target:"Reflect",stat:!0},{deleteProperty:function(e,t){var n=c(o(e),t);return!(n&&!n.configurable)&&delete e[t]}})},f9cc:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=(n("a9e3"),n("2adb"));function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e,t){var n=t.attrs,l=t.slots,i=c({},e,n),u=i.class,d=i.component,s=i.viewBox,f=i.spin,b=i.rotate,m=i.tabindex,p=i.onClick,O=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(i,["class","component","viewBox","spin","rotate","tabindex","onClick"]),j=l.default&&l.default(),v=j&&j.length,y=l.component;Object(o.g)(Boolean(d||v||y),"Should have `component` prop/slot or `children`."),Object(o.f)();var g=a({anticon:!0},u,u),h={"anticon-spin":""===f||!!f},w=b?{msTransform:"rotate(".concat(b,"deg)"),transform:"rotate(".concat(b,"deg)")}:void 0,x=c({},o.e,{viewBox:s,class:h,style:w});s||delete x.viewBox;var N=m;return void 0===N&&p&&(N=-1,O.tabindex=N),r.createVNode("span",r.mergeProps(O,{role:"img",onClick:p,class:g}),[d?r.createVNode(d,x,{default:function(){return[j]}}):y?y(x):v?(Object(o.g)(Boolean(s)||1===j.length&&j[0]&&"use"===j[0].type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),r.createVNode("svg",r.mergeProps(x,{viewBox:s}),[j])):null])};l.props={spin:Boolean,rotate:Number,viewBox:String,ariaLabel:String},l.inheritAttrs=!1,l.displayName="Icon";var i=l;function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=new Set;function b(e){return"string"==typeof e&&e.length&&!f.has(e)}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e[t];if(b(n)){var r=document.createElement("script");r.setAttribute("src",n),r.setAttribute("data-namespace",n),e.length>t+1&&(r.onload=function(){m(e,t+1)},r.onerror=function(){m(e,t+1)}),f.add(n),document.body.appendChild(r)}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scriptUrl,n=e.extraCommonProps,o=void 0===n?{}:n;"undefined"!=typeof document&&"undefined"!=typeof window&&"function"==typeof document.createElement&&(Array.isArray(t)?m(t.reverse()):m([t]));var c=function(e,t){var n=t.attrs,c=t.slots,a=u({},e,n),l=a.type,d=s(a,["type"]),f=c.default&&c.default(),b=null;l&&(b=r.createVNode("use",{"xlink:href":"#".concat(l)},null)),f&&f.length&&(b=f);var m=u({},o,d);return r.createVNode(i,m,{default:function(){return[b]}})};return c.props={spin:Boolean,rotate:Number,type:String},c.inheritAttrs=!1,c.displayName="Iconfont",c}var O=n("55ac"),j=p({scriptUrl:""});t.default=Object(r.defineComponent)({name:"IconFont",props:{type:{type:String,default:""},color:{type:String,default:"unset"},size:{type:[Number,String],default:14},scriptUrl:{type:String,default:""}},setup:function(e,t){var n=t.attrs;e.scriptUrl&&(j=p({scriptUrl:e.scriptUrl}));var o=Object(r.computed)((function(){var t=e.color,n=e.size,r=Object(O.c)(n)?parseFloat(n):n;return{color:t,fontSize:"".concat(r,"px")}}));return function(){return Object(r.createVNode)(j,Object(r.mergeProps)({type:e.type||""},n,{style:Object(r.unref)(o)}),null)}}})}}]);