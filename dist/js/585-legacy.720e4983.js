"use strict";(self["webpackChunkproject_1"]=self["webpackChunkproject_1"]||[]).push([[585],{9585:function(e,s,t){t.r(s),t.d(s,{default:function(){return l}});var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"register"},[t("div",{staticClass:"register_info"},[e._m(0),t("div",{staticClass:"register_form"},[t("p",[e._v("Username")]),t("el-input",{attrs:{placeholder:"账号"},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}}),t("p",[e._v("Password")]),t("el-input",{attrs:{placeholder:"密码","show-password":""},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),t("p",[e._v("Check Password")]),t("el-input",{attrs:{placeholder:"确认密码","show-password":""},model:{value:e.checkPass,callback:function(s){e.checkPass=s},expression:"checkPass"}}),t("el-checkbox",{staticClass:"checkBox",model:{value:e.checked,callback:function(s){e.checked=s},expression:"checked"}},[e._v("我已同意“哇塞电影”用户协议")]),t("div",{staticClass:"btn"},[t("el-button",{staticClass:"register-form-button",attrs:{type:"primary"},on:{click:function(s){return e.toLogin()}}},[e._v("SIGN UP")])],1),t("div",{staticClass:"register_footer"},[t("el-link",{staticClass:"rg",attrs:{underline:!1,href:"../"}},[e._v("我有账号 去登录 "),t("i",{staticClass:"el-icon-right"})])],1)],1)])])},a=[function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"register_title"},[r("img",{attrs:{src:t(6949),alt:""}}),r("div",{staticClass:"logo_text"},[e._v("哇塞电影-注册")])])}],n=t(6165),i={data:function(){return{username:"",password:"",checkPass:"",checked:!1}},methods:{toLogin:function(){var e=this;if(this.username.length<1)this.$message({message:"请输入用户名",type:"warning"});else if(this.password.length<6)this.$message({message:"请输入不少于6位的密码",type:"warning"});else if(this.password===this.checkPass)if(0!=this.checked){var s={username:this.username,password:this.password};(0,n.aX)(s).then((function(s){200==s.code&&(e.$message({message:s.msg,type:"success"}),e.$router.push("/Login"))}))}else this.$message({message:"请勾选 我已同意“哇塞电影”用户协议",type:"warning"});else this.$message({message:"两次输入的密码不同",type:"warning"})}}},o=i,c=t(1001),u=(0,c.Z)(o,r,a,!1,null,"1a80f791",null),l=u.exports},6165:function(e,s,t){t.d(s,{XR:function(){return o},aX:function(){return n},ao:function(){return i},m3:function(){return a}});var r=t(7350);function a(e){return(0,r.Z)({url:"/api/user/login",method:"post",data:e})}function n(e){return(0,r.Z)({url:"/api/user/register",method:"post",data:e})}function i(){return(0,r.Z)({url:"/api/user/id",method:"get"})}function o(){return(0,r.Z)({url:"/api/film/name",method:"get"})}},7350:function(e,s,t){t.d(s,{Z:function(){return u}});t(1539);var r=t(6166),a=t.n(r),n={API_URL:"https://www.fastmock.site/mock/bb8184025bf2675a801a55bd2eec58c9/shop01"},i=n,o=localStorage.getItem("token"),c=a().create({baseURL:i.API_URL,headers:{Autorization:o}});c.interceptors.response.use((function(e){var s=e.data;return s}),(function(e){return console.log("err"+e),Promise.reject(e)}));var u=c},6949:function(e,s,t){e.exports=t.p+"img/logo.1f52265e.png"}}]);
//# sourceMappingURL=585-legacy.720e4983.js.map