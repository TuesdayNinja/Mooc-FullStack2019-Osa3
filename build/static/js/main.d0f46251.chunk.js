(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=(t(19),t(2)),l=t(3),i=t.n(l),m="https://agile-thicket-93842.herokuapp.com/api/persons",d=function(){return i.a.get(m).then((function(e){return e.data}))},f=function(e){return i.a.post(m,e).then((function(e){return e.data}))},s=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},h=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},b=(t(37),function(e){var n=e.person,t=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("p",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return t(n)}},"delete")," "))}),p=function(e){var n=e.persons,t=e.filterNames,a=e.handleDelete;return n.filter(t).map((function(e){return r.a.createElement(b,{key:e.name,person:e,handleDelete:a})}))},v=function(e){var n=e.newName,t=e.newNumber,a=e.addName,o=e.handleNameChange,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:o})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},w=function(e){var n=e.message,t=e.isError;return null===n?null:t?r.a.createElement("div",{className:"error"},n):r.a.createElement("div",{className:"success"},n)},g=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],m=l[1],b=Object(a.useState)(""),g=Object(u.a)(b,2),N=g[0],j=g[1],O=Object(a.useState)(""),k=Object(u.a)(O,2),C=k[0],y=k[1],S=Object(a.useState)(null),D=Object(u.a)(S,2),A=D[0],B=D[1],F=Object(a.useState)(!1),J=Object(u.a)(F,2),L=J[0],T=J[1];Object(a.useEffect)((function(){d().then((function(e){o(e)}))}),[]);var W=function(){return t.some((function(e){return e.name===i}))},x=function(e){if(window.confirm("".concat(i," is already added to phonebook. Do you want to change the number?"))){var n=t.find((function(e){return e.name===i})).id;console.log(n),h(n,e).then((function(e){o(t.map((function(t){return t.id!==n?t:e}))),I("".concat(i,"'s number changed"))})).catch((function(e){P("".concat(i," was already removed from server")),o(t.filter((function(e){return e.id!==n})))}))}},I=function(e){B("".concat(e)),T(!1),setTimeout((function(){B(null)}),5e3)},P=function(e){B("".concat(e)),T(!0),setTimeout((function(){B(null)}),5e3)};return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:A,isError:L}),r.a.createElement(E,{filter:C,handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement("h3",null,"Add new number"),r.a.createElement(v,{newName:i,newNumber:N,addName:function(e){e.preventDefault();var n={name:i,number:N};W()?x(n):f(n).then((function(e){o(t.concat(e)),I("".concat(i," added to phonebook"))})),m(""),j("")},handleNameChange:function(e){m(e.target.value)},handleNumberChange:function(e){j(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement("ul",null,r.a.createElement(p,{persons:t,filterNames:function(e){return e.name.toLowerCase().includes(C.toLowerCase())},handleDelete:function(e){var n=e.id;window.confirm("Are you sure to delete ".concat(e.name))&&s(n).then((function(a){o(t.filter((function(e){return e.id!==n}))),I("".concat(e.name," deleted from phonebook."))}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.d0f46251.chunk.js.map