(function(t){function e(e){for(var n,u,i=e[0],d=e[1],a=e[2],s=0,f=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,a||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,i=1;i<o.length;i++){var d=o[i];0!==r[d]&&(n=!1)}n&&(c.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={app:0},c=[];function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var l=d;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0862":function(t,e,o){"use strict";o("66c8")},"13c1":function(t,e,o){"use strict";o("ba63")},"37c5":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={class:"main-root"};function c(t,e,o,c,u,i){var d=Object(n["m"])("todo-input"),a=Object(n["m"])("todo-list");return Object(n["h"])(),Object(n["c"])("section",r,[Object(n["f"])(d,{onAddTodo:c.addTodo},null,8,["onAddTodo"]),Object(n["f"])(a,{todos:c.todos,onRemoveTodo:c.removeTodo},null,8,["todos","onRemoveTodo"])])}o("e9c4"),o("4de4"),o("d3b7");var u=function(t){return Object(n["j"])("data-v-5801d054"),t=t(),Object(n["i"])(),t},i=u((function(){return Object(n["d"])("div",{class:"btn"},[Object(n["d"])("input",{type:"submit",value:" "})],-1)}));function d(t,e,o,r,c,u){return Object(n["h"])(),Object(n["c"])("form",{class:"input-container",onSubmit:e[1]||(e[1]=Object(n["q"])((function(){return r.submitTodo&&r.submitTodo.apply(r,arguments)}),["prevent"]))},[Object(n["p"])(Object(n["d"])("input",{type:"text",class:"input","onUpdate:modelValue":e[0]||(e[0]=function(t){return r.todo=t}),ref:"input",placeholder:"할 일이 있나요?"},null,512),[[n["o"],r.todo]]),i],32)}var a={name:"TodoInput",setup:function(t,e){var o=Object(n["k"])(""),r=Object(n["k"])(null),c=function(){e.emit("addTodo",o.value),o.value="",r.value.focus()};return{todo:o,input:r,submitTodo:c}}},l=(o("0862"),o("d959")),s=o.n(l);const f=s()(a,[["render",d],["__scopeId","data-v-5801d054"]]);var p=f,b={class:"todo-list"},v=["onClick"];function O(t,e,o,r,c,u){return Object(n["h"])(),Object(n["c"])("section",b,[Object(n["d"])("ul",null,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(o.todos,(function(e){return Object(n["h"])(),Object(n["c"])("li",{key:e.idx},[Object(n["e"])(Object(n["n"])(e.todo)+" ",1),Object(n["d"])("button",{type:"button",onClick:function(o){return t.$emit("removeTodo",e.idx)}},null,8,v)])})),128))])])}var j={name:"TodoList",props:{todos:Array}};o("13c1");const m=s()(j,[["render",O],["__scopeId","data-v-bda3551e"]]);var y=m,h={name:"App",components:{TodoInput:p,TodoList:y},setup:function(){var t=0,e=Object(n["k"])([]),o=function(o){e.value.push({idx:t,todo:o}),t++,localStorage.setItem("todo-items",JSON.stringify(e.value))},r=function(t){e.value=e.value.filter((function(e){return e.idx!==t})),localStorage.setItem("todo-items",JSON.stringify(e.value))};return Object(n["g"])((function(){var t=JSON.parse(localStorage.getItem("todo-items"));e.value=null==t?[]:t})),{todos:e,addTodo:o,removeTodo:r}}};o("fd89"),o("9719");const T=s()(h,[["render",c],["__scopeId","data-v-1fe4b4de"]]);var g=T;Object(n["b"])(g).mount("#app")},"66c8":function(t,e,o){},9719:function(t,e,o){"use strict";o("f5fb")},ba63:function(t,e,o){},f5fb:function(t,e,o){},fd89:function(t,e,o){"use strict";o("37c5")}});
//# sourceMappingURL=app.5383d868.js.map