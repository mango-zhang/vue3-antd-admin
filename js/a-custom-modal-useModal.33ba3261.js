(window.webpackJsonp=window.webpackJsonp||[]).push([["a-custom-modal-useModal"],{b548:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n("99af");var l=n("7a23"),o=n("8e1b"),u=n("7303");function i(e,t){var n=t.emit,i=(t.attrs,Object(l.ref)(null)),c=Object(l.ref)(null),s=Object(l.ref)(null),f=Object(l.ref)(null),r=Object(l.ref)(null),a=Object(l.ref)(null),d=Object(l.ref)(null),v=Object(l.ref)(null),m=Object(l.ref)(null),p=Object(l.ref)(null),h=Object(l.ref)(null),y=Object(l.ref)(null),b=Object(l.ref)(null),g=Object(l.ref)(null),O=Object(l.ref)(null),j=Object(l.ref)(null),E={x:0,y:0},w=function(e){return Object.assign(E,{x:e.pageX,y:e.pageY})};document.documentElement.addEventListener("click",w,!0);var L,x,R,T,z,k=Object(o.getTransitionProps)("fade"),H=Object(o.getTransitionProps)("zoom",{onAfterLeave:function(){return n("update:visible",!1)}}),W=0;function B(e,t,n,l,o,u){t.onmousedown=function(i){var c=i.clientX-t.offsetLeft,f=i.clientY-t.offsetTop,r=e.offsetTop,a=e.offsetLeft,d=e.offsetWidth,v=e.offsetHeight,m=function(i){var m=i.clientX-c,p=i.clientY-f,h=document.documentElement.clientWidth-e.offsetLeft-2,y=document.documentElement.clientHeight-e.offsetTop-2,b=n?d-m:t.offsetWidth+m,g=l?v-p:t.offsetHeight+p;return n&&(e.style.left=a+m+"px"),l&&(e.style.top=r+p+"px"),b<400&&(b=400),b>h&&(b=h),o||(s.value.style.width=b+"px"),g<140&&(g=140),g>y&&(g=y),u||(s.value.style.height=g-W-z+"px"),(n&&400==b||l&&140==g)&&(document.onmousemove=null),(n||l)&&(document.onmousemove=null),!1};return document.addEventListener("mousemove",m),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",e)})),!1}}var X=function(){var t,n,l;t=i.value,n=r.value,l=0,(n=n||t).style.cursor="move",n.onmousedown=function(e){l=e.clientX-t.offsetLeft;var n=e.clientY-t.offsetTop,o=function(e){var o=e.clientX-l,u=e.clientY-n,i=document.documentElement.clientWidth-t.offsetWidth,c=document.documentElement.clientHeight-t.offsetHeight;return o<=0&&(o=0),u<=0&&(u=0),o>=i&&(o=i),u>=c&&(u=c),t.style.left=o+"px",t.style.top=u+"px",!1};return document.addEventListener("mousemove",o),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",e)})),!1},O.value.onclick=function(){var e=getComputedStyle(t),n=e.left,l=e.top,o=getComputedStyle(s.value),u=o.width,i=o.height;L=u,x=i,R=n,T=l,t.style.top=t.style.left=0,t.style.width=document.documentElement.clientWidth-2+"px",t.style.height=document.documentElement.clientHeight-2+"px",s.value.style.width=t.style.width,s.value.style.height=parseFloat(t.style.height)-z-W+"px",this.style.display="none",j.value.style.display="block"},j.value.onclick=function(){s.value.style.height=x,s.value.style.width=L,t.style.width=t.style.height="unset",t.style.left=R,t.style.top=T,this.style.display="none",O.value.style.display="block"},B(i.value,p.value,!0,!0,!1,!1),B(i.value,h.value,!1,!0,!1,!1),B(i.value,y.value,!1,!1,!1,!1),B(i.value,b.value,!0,!1,!1,!1),B(i.value,a.value,!0,!1,!1,!0),B(i.value,d.value,!1,!0,!0,!1),B(i.value,v.value,!1,!1,!1,!0),B(i.value,m.value,!1,!1,!0,!1),i.value.style.left=(document.documentElement.clientWidth-i.value.offsetWidth)/2+"px",i.value.style.top=e.centered?(document.documentElement.clientHeight-i.value.offsetHeight)/2+"px":"100px";var o=i.value.getBoundingClientRect(),u=o.left,f=o.top,g=E.x,w=E.y;c.value.style.transformOrigin="".concat(g-u,"px ").concat(w-f,"px")},Y=Object(u.a)(X,30);return Object(l.onMounted)((function(){Object(l.watch)((function(){return e.visible}),(function(e){e&&(Object(l.nextTick)((function(){var e,t;z=(null===(e=r.value)||void 0===e?void 0:e.offsetHeight)||0,W=(null===(t=f.value)||void 0===t?void 0:t.offsetHeight)||0,X()})),window.addEventListener("resize",Y))}),{immediate:!0})})),Object(l.onBeforeUnmount)((function(){window.removeEventListener("resize",Y),document.documentElement.removeEventListener("click",w,!0),Y.cancel})),{dragRef:i,modalWrapRef:c,modalBody:s,modalFooter:f,titleRef:r,resizeLRef:a,resizeTRef:d,resizeRRef:v,resizeBRef:m,resizeLTRef:p,resizeTRRef:h,resizeBRRef:y,resizeLBRef:b,minRef:g,maxRef:O,revertRef:j,maskTransitionProps:k,dialogTransitionProps:H,closeModal:function(){n("update:visible",!1)}}}}}]);