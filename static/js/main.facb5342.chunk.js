(this.webpackJsonpfunbox=this.webpackJsonpfunbox||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(6),l=a(2),i=a(3),s=a.n(i),o=a(7),d=a.n(o),m=a(1),u=function(e,t){switch(t.type){case"SET_SELECTED":return Object(m.a)(Object(m.a)({},e),{},{isSelected:t.payload});case"SET_HOVERED":return Object(m.a)(Object(m.a)({},e),{},{isHovered:t.payload});case"SET_DISABLED":return Object(m.a)(Object(m.a)({},e),{},{isDisabled:t.payload});default:return e}},E={isSelected:!1,isHovered:!1},_=function(e){var t=e.index,a=e.item,c=e.disabled,r=n.a.useReducer(u,E),i=Object(l.a)(r,2),o=i[0],m=i[1],_=a.desc,p=a.title,y=a.taste,h=a.stock,b=a.weight,f=a.unit,g=o.isHovered,S=o.isSelected,C=n.a.useCallback((function(){m({type:"SET_SELECTED",payload:!S}),m({type:"SET_HOVERED",payload:!1})}),[S]),O=n.a.useCallback((function(){m({type:"SET_HOVERED",payload:!0})})),k=n.a.useCallback((function(){m({type:"SET_HOVERED",payload:!1})})),N=n.a.useCallback((function(){}));return n.a.createElement("div",{className:s()("card",{"card--selected":S,"card--disabled":c})},n.a.createElement("div",{className:"card__content",role:"button",tabIndex:t,onMouseEnter:O,onMouseLeave:k,onClick:C,onKeyDown:N},n.a.createElement("div",{className:"card__content-root"},n.a.createElement("p",{className:s()("card__description",{"card__description--selected":S&&g})},S&&g?n.a.createElement(n.a.Fragment,null,"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?"):n.a.createElement(n.a.Fragment,null,"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e")),n.a.createElement("h6",{className:"card__title"},p),n.a.createElement("p",{className:"card__taste"},y),n.a.createElement("p",{className:"card__description card__description--small"},h),n.a.createElement("div",{className:"card__weight"},b,n.a.createElement("span",{className:"card__weight-unit"},f)),n.a.createElement("img",{className:"card__image",src:d.a,alt:"".concat(p," ").concat(y)}))),c?n.a.createElement("div",{className:"card__footer"},"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ".concat(y," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f.")):n.a.createElement("div",{className:"card__footer"},S?n.a.createElement(n.a.Fragment,null,_):n.a.createElement(n.a.Fragment,null,"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",n.a.createElement("button",{type:"button",className:"card__link",onClick:C},"\u043a\u0443\u043f\u0438"))))},p=a(4),y=function(){return n.a.createElement("div",{className:"skeleton"},n.a.createElement(p.a,{className:"skeleton__root",speed:2,width:320,height:480,backgroundColor:"#e9e9e9",foregroundColor:"#dcdcdc"},n.a.createElement("rect",{x:"0",y:"4",rx:"6",ry:"6",width:"200",height:"16"}),n.a.createElement("rect",{x:"0",y:"36",rx:"10",ry:"10",width:"200",height:"36"}),n.a.createElement("rect",{x:"0",y:"86",rx:"8",ry:"8",width:"140",height:"24"}),n.a.createElement("rect",{x:"0",y:"126",rx:"6",ry:"6",width:"180",height:"16"}),n.a.createElement("circle",{cx:"203",cy:"398",r:"42"})),n.a.createElement(p.a,{className:"skeleton__footer",speed:2,width:320,height:20,backgroundColor:"#eee",foregroundColor:"#aaa"},n.a.createElement("rect",{x:"30",y:"0",rx:"4",ry:"4",width:"260",height:"12"})))},h=function(e){var t=e.items;return n.a.createElement("ul",{className:"products"},t?t.map((function(e,t){return n.a.createElement("li",{key:"".concat(e.id),className:"products__item"},n.a.createElement(_,{index:t,item:e}))})):Array(3).fill(0).map((function(e,t){return n.a.createElement(y,{key:t})})))},b=[{id:0,desc:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",stock:"10 \u043f\u043e\u0440\u0446\u0438\u0439 \u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",weight:.5,unit:"\u043a\u0433"},{id:1,desc:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u0440\u044b\u0431\u043e\u0439",stock:"40 \u043f\u043e\u0440\u0446\u0438\u0439 2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",weight:2,unit:"\u043a\u0433"},{id:2,desc:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u043a\u0443\u0440\u043e\u0439",stock:"100 \u043f\u043e\u0440\u0446\u0438\u0439 5 \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",weight:5,unit:"\u043a\u0433"}],f=function(e,t){switch(t.type){case"FETCH_PRODUCTS":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case"FETCH_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1});case"SET_PRODUCTS":return Object(m.a)(Object(m.a)({},e),{},{items:t.payload});default:return e}},g={isLoading:!1,items:[]},S=function(){var e=n.a.useReducer(f,g),t=Object(l.a)(e,2),a=t[0],c=t[1],r=a.isLoading,i=a.items;return n.a.useEffect((function(){c({type:"FETCH_PRODUCTS"}),setTimeout((function(){c({type:"FETCH_SUCCESS"})}),1500),c({type:"SET_PRODUCTS",payload:b})}),[]),n.a.createElement("main",{className:"container"},n.a.createElement("h1",{className:"main-title"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),r?n.a.createElement(h,null):n.a.createElement(h,{items:i}))};a(13);Object(r.render)(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a.p+"static/media/cat.4277d519.png"},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.facb5342.chunk.js.map