"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[306],{306:function(e,o,n){n.r(o),n.d(o,{default:function(){return Z}});var r=n(1413),i=n(9439),l=n(2791),s={login:"login_login__i6Bcz",bg_img__div:"login_bg_img__div__Uriwi",bg_img:"login_bg_img__g5-9Z",form:"login_form__GccQx",footer_form:"login_footer_form__7GGOA",link:"login_link__va7P-",language:"login_language__5EgJQ"},a=n(6072),m=n(4695),d=n(6871),t=n(3135),c=n(4554),g=n(890),_=n(3767),u=n(8550),h=n(9174),v=n(6151),f=n(3168),p=n(1105),x=n(184),j=t.Ry({username:t.Z_().required((0,p.t)("common:login.email_required")).trim(),password:t.Z_().required((0,p.t)("common:login.password_required")).trim().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^ ]{6,20}$/,(0,p.t)("common:login.password_wrong_format"))}).required();function Z(){var e,o,n=(0,f.$)("common"),t=(0,i.Z)(n,2),p=t[0],Z=t[1],b=localStorage.getItem("LANGUAGE"),w=l.useState(b),N=(0,i.Z)(w,2),k=N[0],S=N[1],q=(0,a.cI)({resolver:(0,m.X)(j)}),G=q.register,A=q.handleSubmit,C=q.formState.errors,E=(0,d.s0)();return(0,x.jsx)(c.Z,{children:(0,x.jsxs)("div",{className:s.login,children:[(0,x.jsx)("div",{className:s.bg_img__div,children:(0,x.jsx)("div",{className:s.bg_img})}),(0,x.jsxs)("div",{className:s.form,children:[(0,x.jsx)(g.Z,{variant:"h3",children:p("common:login.login")}),(0,x.jsx)(c.Z,{sx:{p:2,pt:5,pb:5},children:(0,x.jsxs)("form",{onSubmit:A((function(e){localStorage.setItem("CURRENT_USER","Bearer "+e.username),E("/")})),className:s.from_login,children:[(0,x.jsxs)(_.Z,{spacing:4,children:[(0,x.jsx)(u.Z,(0,r.Z)((0,r.Z)({},G("username")),{},{error:!!C.username,id:"username",label:p("common:login.email_placeholder"),fullWidth:!0,helperText:null===(e=C.username)||void 0===e?void 0:e.message,required:!0})),(0,x.jsx)(u.Z,(0,r.Z)((0,r.Z)({},G("password")),{},{error:!!C.password,id:"password",label:p("common:login.password_placeholder"),type:"password",fullWidth:!0,helperText:null===(o=C.password)||void 0===o?void 0:o.message,required:!0}))]}),(0,x.jsxs)("div",{className:s.footer_form,children:[(0,x.jsxs)("div",{className:s.link,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(h.Z,(0,r.Z)((0,r.Z)({},G("remember")),{},{defaultChecked:!0}))," ",(0,x.jsx)("label",{children:p("common:login.remember_me")})]}),(0,x.jsx)("a",{href:"/forgot-password",children:p("common:login.forgot_password")})]}),(0,x.jsx)(v.Z,{type:"submit",variant:"contained",children:p("common:login.login_button")}),(0,x.jsxs)(g.Z,{variant:"body2",children:[p("common:login.dont_have_account")," ",(0,x.jsx)("a",{href:"/register",children:p("common:login.sign_up")})]})]})]})})]}),(0,x.jsx)("div",{className:s.language,children:(0,x.jsxs)("select",{value:k,onChange:function(e){S(e.target.value),Z.changeLanguage(e.target.value),localStorage.setItem("LANGUAGE",e.target.value),document.title=p("common:app_name")},children:[(0,x.jsx)("option",{value:"vi",children:p("common:language.vi")}),(0,x.jsx)("option",{value:"en",children:p("common:language.en")})]})})]})})}}}]);
//# sourceMappingURL=306.4f700c2a.chunk.js.map