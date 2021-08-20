(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{22:function(e,t,n){e.exports={container:"Container_container__3e1Mh"}},23:function(e,t,n){e.exports={section:"Section_section__snUHO"}},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(7),i=n.n(a),o=n(24),s=n(2),u=n(22),l=n.n(u),b=n(1);var d=function(e){var t=e.children;return Object(b.jsx)("div",{className:l.a.container,children:t})},j=n(23),f=n.n(j);var m,O=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:f.a.section,children:["phonebook"===t.toLowerCase()?Object(b.jsx)("h1",{children:t}):Object(b.jsx)("h2",{children:t}),n]})},h=n(5),p=n(13),x=n(6),v=n.n(x),C=n(8),g=n(4),y=n(9),w=n.n(y),N=Object(g.b)("contacts/fetchContacts",Object(C.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("http://localhost:7777/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),k=Object(g.b)("contacts/setContact",function(){var e=Object(C.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("http://localhost:7777/contacts",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(g.b)("contacts/deleteContact",function(){var e=Object(C.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("http://localhost:7777/contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(g.c)({name:"contacts",initialState:{items:[],status:null,error:null},extraReducers:(m={},Object(h.a)(m,N.fulfilled,(function(e,t){e.items=Object(p.a)(t.payload),e.status=null,e.error=null})),Object(h.a)(m,N.pending,(function(e,t){e.status="loading"})),Object(h.a)(m,N.rejected,(function(e,t){e.status=null,e.error=t.error.message,console.log(e.error)})),Object(h.a)(m,k.fulfilled,(function(e,t){e.items=[].concat(Object(p.a)(e.items),[t.payload]),e.status=null,e.error=null})),Object(h.a)(m,k.pending,(function(e,t){e.status="loading",e.error=null})),Object(h.a)(m,k.rejected,(function(e,t){e.status=null,e.error="Error"})),Object(h.a)(m,A.fulfilled,(function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))})),m)}).reducer;var _=function(e){var t=e.id,n=e.name,r=e.number,c=Object(s.b)();return Object(b.jsxs)("li",{children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:"ContactName",children:["Name: ",n]}),Object(b.jsxs)("p",{children:["Number: ",r]})]}),Object(b.jsx)("button",{onClick:function(){c(A(t))},id:t,children:"Delete"})]},t)};var z=function(e){var t=e.contacts;return Object(b.jsx)("ul",{children:t&&t.map((function(e){var t=e.name,n=e.number,r=e.id;return Object(b.jsx)(_,{name:t,number:n,id:r},r)}))})};var B=function(e){var t=e.handleAddNewContact,n=e.handleChangeInput,r=Object(s.c)((function(e){return e.number})),c=Object(s.c)((function(e){return e.name}));return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,style:{display:"block",marginBottom:"10px"},onChange:n})]}),Object(b.jsxs)("label",{children:["Number",Object(b.jsx)("input",{type:"tel",name:"number",value:r,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,style:{display:"block",marginBottom:"10px"},onChange:n})]}),Object(b.jsx)("button",{type:"submit",children:"Add Contact"})]})})},E=Object(g.c)({name:"filter",initialState:"",reducers:{setFilter:function(e,t){return t.payload}}}),F=E.actions.setFilter,I=E.reducer;var J=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.filter}));return Object(b.jsxs)("label",{children:["Find Contact",Object(b.jsx)("input",{type:"text",onChange:function(t){e(F(t.target.value))},name:"filter",value:t,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0456\u043c'\u044f, \u0430\u0431\u043e \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043b\u044e\u0434\u0438\u043d\u0438, \u044f\u043a\u0443 \u0448\u0443\u043a\u0430\u0454\u0442\u0435",placeholder:"Name"})]})};var L=function(e){var t=Object(s.c)((function(e){return e.filter}));return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}))},M=Object(g.c)({name:"number",initialState:"",reducers:{setNumber:function(e,t){return t.payload}}}),Z=M.actions.setNumber,q=M.reducer,D=Object(g.c)({name:"name",initialState:"",reducers:{setName:function(e,t){return t.payload}}}),H=D.actions.setName,P=D.reducer;n(53);function R(){var e=Object(s.c)((function(e){return e.contacts.items})),t=Object(s.c)((function(e){return e.number})),n=Object(s.c)((function(e){return e.name})),c=Object(s.b)();Object(r.useEffect)((function(){c(N())}),[c]);var a=L(e);return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(d,{children:Object(b.jsxs)(O,{title:"Phonebook",children:[Object(b.jsx)(O,{title:"Add new contact",children:Object(b.jsx)(B,{handleAddNewContact:function(r){if(r.preventDefault(),e.some((function(e){return e.name===n})))alert("".concat(n," has alredy be declared"));else{var a={name:n,number:t,id:Object(o.a)()};c(k(a)),c(H("")),c(Z(""))}},handleChangeInput:function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return c(H(r));case"number":return c(Z(r));default:return}}})}),Object(b.jsxs)(O,{title:"Contacts",children:[Object(b.jsx)(J,{}),Object(b.jsx)(z,{contacts:a})]})]})})})}var U={filter:I,contacts:S,number:q,name:P},$=Object(g.a)({reducer:U});i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(s.a,{store:$,children:Object(b.jsx)(R,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.0e2c8135.chunk.js.map