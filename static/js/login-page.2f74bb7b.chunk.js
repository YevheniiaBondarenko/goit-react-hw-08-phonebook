(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(2),o=a(3),s=a(51),r=a(52),c=a(54),i=a(53),l=a(0),h=a(172),d=a(183),u=a(179),b=a(176),j=a(147),p=a(14),m=a(16),O=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(o.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(n.jsxs)(h.a,{maxWidth:"sm",children:[Object(n.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(n.jsxs)(d.a,{children:["\u041f\u043e\u0447\u0442\u0430",Object(n.jsx)(u.a,{color:"secondary",type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(n.jsxs)(d.a,{children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(n.jsx)(u.a,{color:"secondary",type:"password",name:"password",value:a,onChange:this.handleChange})]}),Object(n.jsx)(b.a,{m:1,children:Object(n.jsx)(j.a,{type:"submit",variant:"contained",color:"secondary",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})}}]),a}(l.Component),f={onLogin:m.a.logIn},g=Object(p.b)(null,f)(O)}}]);
//# sourceMappingURL=login-page.2f74bb7b.chunk.js.map