(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),s=r(4),a=r.n(s),i=(r(14),r(15),r(5)),u=r(2),o="CHECK-USER",p={users:[{id:1,name:"user1",email:"user1@example.com",todoList:["wash the car","to order spare parts","to buy a gift for Bob"]},{id:2,name:"user2",email:"user2@example.com",todoList:["write an article","extend the pass to the library","to buy books according to the list"]}],currentUser:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var r=Object(u.a)(Object(u.a)({},e),{},{users:e.users}),c=[];return r.users.forEach((function(e){e.email===t.userEmail&&c.push(e.id)})),1===c.length?Object(u.a)(Object(u.a)({},e),{},{currentUser:c[0]}):Object(u.a)(Object(u.a)({},e),{},{currentUser:""});default:return e}},j=r(3),b=r.n(j),d=r(1);function h(e){var t=n.a.createRef();return Object(d.jsxs)("div",{className:b.a.wrapper,children:[Object(d.jsx)("h1",{className:b.a.title,children:"Sign up"}),Object(d.jsx)("input",{ref:t,className:b.a.input,type:"text",placeholder:"user1@example.com/user2@example.com"}),Object(d.jsx)("button",{onClick:function(){var r=t.current.value;e.checkUser(r)},className:b.a.btn,children:"Sign up"})]})}function O(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"TODO LIST"})})}var f=Object(i.b)((function(e){return{users:e.todo.users,currentUser:e.todo.currentUser}}),(function(e){return{checkUser:function(t){e(function(e){return{type:o,userEmail:e}}(t))}}}))((function(e){return Object(d.jsx)("div",{children:""===e.currentUser?Object(d.jsx)(h,{checkUser:e.checkUser}):Object(d.jsx)(O,{})})}));var m=function(){return Object(d.jsx)("div",{className:"app-wrapper",children:Object(d.jsx)(f,{})})},x=r(6),U=Object(x.a)({todo:l}),v=Object(x.b)(U);a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(i.a,{store:v,children:Object(d.jsx)(m,{})})}),document.getElementById("root"))},3:function(e,t,r){e.exports={wrapper:"SingUp_wrapper__2Xzxf",title:"SingUp_title__1VEQ4",input:"SingUp_input__3fi2Q",btn:"SingUp_btn__3Q6rc"}}},[[23,1,2]]]);
//# sourceMappingURL=main.fe80a5b8.chunk.js.map