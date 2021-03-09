(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{26:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e(1),c=e(15),o=e.n(c),i=e(2),u=e(3);function s(){var t=Object(i.a)(["\n    font-size: 30px;\n  "]);return s=function(){return t},t}function l(){var t=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    margin: 0 auto;\n    width: 50%;\n    height: auto;\n    list-style: none;\n  "]);return l=function(){return t},t}var f={Sections:u.a.section(l()),Title:u.a.h2(s())},b=f.Sections,d=f.Title;function h(t){var n=t.title,e=t.children;return Object(r.jsxs)(b,{children:[Object(r.jsx)(d,{children:n}),e]})}h.defaultProps={title:"Homework"};var j=h,p=e(13),m=e(4),x=e(5),O=e(7),v=e(6),g=e(28);function y(t){var n=t.name,e=t.number;return{id:Object(g.a)(),name:n,number:e}}function C(){var t=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n    width: 150px;\n    height: 100%;\n    border-radius: 10px;\n    margin: 20px 5px;\n    text-transform: uppercase;\n    cursor: pointer;\n    &:hover {\n      background-color: rgb(155, 255, 155);\n      border-radius: 10px;\n    }\n    &:focus {\n      border-radius: 10px;\n      outline: none;\n    }\n  "]);return C=function(){return t},t}function w(){var t=Object(i.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin: 0 5px;\n  "]);return w=function(){return t},t}function S(){var t=Object(i.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    width: 100%;\n  "]);return S=function(){return t},t}function k(){var t=Object(i.a)(['\n    font-size: 30px;\n    font-family: "Lato";\n    color: rgb(18, 34, 54);\n    font-weight: bold;\n    line-height: 1.778;\n    text-align: center;\n  ']);return k=function(){return t},t}function N(){var t=Object(i.a)(['\n    font-size: 16px;\n    font-family: "Lato";\n    color: rgb(18, 34, 54);\n    font-weight: bold;\n    line-height: 1.778;\n    text-align: center;\n    margin-right: 40px;\n  ']);return N=function(){return t},t}var P={Name:u.a.p(N()),H2:u.a.h2(k()),Ul:u.a.ul(S()),Li:u.a.li(w()),Button:u.a.button(C())},L=P.H2,z=P.Ul,A=P.Li,B=P.Name,D=P.Button,J=function(t){Object(O.a)(e,t);var n=Object(v.a)(e);function e(){var t;Object(m.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=n.call.apply(n,[this].concat(a))).filterContact=function(t,n){return t.filter((function(t){return!t.name.toLowerCase().indexOf(n.toLowerCase())}))},t}return Object(x.a)(e,[{key:"render",value:function(){var t=this.props,n=t.contacts,e=t.filter,a=t.onRemoveContact,c=this.filterContact(n,e);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L,{children:"Contacts "}),Object(r.jsx)(z,{children:c.map((function(t){var n=t.id,e=t.name,c=t.number;return Object(r.jsxs)(A,{children:[Object(r.jsxs)(B,{children:[e," :",c]}),Object(r.jsx)(D,{onClick:function(){return a(n)},children:"Delete"})]},n)}))})]})}}]),e}(a.Component);J.defaultProps={};var T=e(9),H=e(12);function U(){var t=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n    width: 150px;\n    height: 100%;\n    border-radius: 10px;\n    margin: 10px auto 25px;\n    text-transform: uppercase;\n    cursor: pointer;\n    &:hover {\n      background-color: rgb(155, 255, 155);\n      border-radius: 10px;\n    }\n    &:focus {\n      border-radius: 10px;\n      outline: none;\n    }\n  "]);return U=function(){return t},t}var F={Button:u.a.button(U())}.Button,I={name:"",number:""},R=function(t){Object(O.a)(e,t);var n=Object(v.a)(e);function e(){var t;Object(m.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=n.call.apply(n,[this].concat(a))).state=Object(H.a)({},I),t.handleChange=function(n){var e=n.target,r=e.value,a=e.name;t.setState(Object(T.a)({},a,r))},t.formValidator=function(n){t.state.name&&t.state.number?t.handleSubmit(n):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f.")},t.handleSubmit=function(n){n.preventDefault();var e=t.state,r=e.name,a=e.number;(0,t.props.onAddContact)({name:r,number:a}),alert("\u0424\u043e\u0440\u043c\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 "),t.reset()},t.reset=function(){t.setState(Object(H.a)({},I))},t}return Object(x.a)(e,[{key:"render",value:function(){var t=this.state,n=t.name,e=t.number;return Object(r.jsxs)("form",{onSubmit:this.formValidator,children:[Object(r.jsxs)("label",{children:["Name",Object(r.jsx)("input",{type:"text",placeholder:"Your Name",name:"name",value:n,onChange:this.handleChange})]}),Object(r.jsxs)("label",{children:["Number",Object(r.jsx)("input",{type:"tel",placeholder:"Your Phone",name:"number",value:e,list:"defaultTels",onChange:this.handleChange}),Object(r.jsxs)("datalist",{name:"age",id:"defaultTels",children:[Object(r.jsx)("option",{value:"",disabled:!0,children:"..."}),Object(r.jsx)("option",{value:"+38(068)",children:"+38(068)"}),Object(r.jsx)("option",{value:"+38(097)",children:"+38(097)"}),Object(r.jsx)("option",{value:"+38(063)",children:"+38(063)"})]})]}),Object(r.jsx)(F,{type:"submit",children:"Create contact"})]})}}]),e}(a.Component);R.defaultProps={};var V=function(t){Object(O.a)(e,t);var n=Object(v.a)(e);function e(){return Object(m.a)(this,e),n.apply(this,arguments)}return Object(x.a)(e,[{key:"render",value:function(){var t=this.props.onChange;return Object(r.jsxs)("label",{children:["Search contacts by name",Object(r.jsx)("input",{type:"text",placeholder:"Enter your search data.",name:"filter",onChange:t})]})}}]),e}(a.Component);V.defaultProps={};var Y=function(t){Object(O.a)(e,t);var n=Object(v.a)(e);function e(){var t;Object(m.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=n.call.apply(n,[this].concat(a))).state={contacts:[],filter:""},t.addContact=function(n){t.setState((function(t){return{contacts:[].concat(Object(p.a)(t.contacts),[y(n)])}}))},t.removeContact=function(n){t.setState((function(t){return{contacts:Object(p.a)(t.contacts.filter((function(t){return t.id!==n})))}}))},t.findContact=function(n){var e=n.target.value;t.setState({filter:e})},t}return Object(x.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),n=JSON.parse(t);n&&this.setState({contacts:n})}},{key:"componentDidUpdate",value:function(t,n){this.state.contacts!==n.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,n=t.contacts,e=t.filter;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{onAddContact:this.addContact}),Object(r.jsx)(V,{onChange:this.findContact}),Object(r.jsx)(J,{contacts:n,filter:e,onRemoveContact:this.removeContact})]})}}]),e}(a.Component);Y.defaultProps={};var q=function(){return Object(r.jsx)(j,{title:"Phone Book",children:Object(r.jsx)(Y,{})})};o.a.render(Object(r.jsx)(q,{}),document.querySelector("#root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c36c763d.chunk.js.map