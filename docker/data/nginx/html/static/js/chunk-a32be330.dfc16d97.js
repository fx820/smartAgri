(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a32be330"],{"501d":function(e,t,n){"use strict";n("9694")},9694:function(e,t,n){},dd7b:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("el-row",[n("el-col",{attrs:{xs:24}},[n("div",{staticStyle:{color:"#fff","background-color":"#0f73ee",width:"100%",height:"200px","text-align":"center",padding:"15px","font-family":"'微软雅黑'"}},[n("div",{staticStyle:{"font-size":"42px","padding-top":"40px",width:"300px",margin:"0 auto"}},[n("img",{staticStyle:{width:"100px",height:"100px",float:"left"},attrs:{src:e.logo,alt:"logo"}}),n("div",{staticStyle:{float:"left","margin-top":"13px",width:"200px","text-align":"left"}},[n("div",[e._v("FastBee")]),n("div",{staticStyle:{"letter-spacing":"1.5px","font-size":"20px","font-weight":"600","margin-top":"-8px","margin-left":"3px"}},[e._v("开源物联网平台")])])])]),n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules}},[n("div",{staticStyle:{"margin-bottom":"10px","font-size":"14px","font-family":"'微软雅黑'",color:"#f78e21"}},[e._v("演示账号：wumei 123456")]),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[n("svg-icon",{staticClass:"input-icon",attrs:{slot:"prefix","icon-class":"user"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[n("svg-icon",{staticClass:"input-icon",attrs:{slot:"prefix","icon-class":"password"},slot:"prefix"})],1)],1),e.captchaOnOff?n("el-form-item",{attrs:{prop:"code"}},[n("el-input",{staticStyle:{width:"63%"},attrs:{"auto-complete":"off",placeholder:"验证码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.code,callback:function(t){e.$set(e.loginForm,"code",t)},expression:"loginForm.code"}},[n("svg-icon",{staticClass:"input-icon",attrs:{slot:"prefix","icon-class":"validCode"},slot:"prefix"})],1),n("div",{staticClass:"login-code"},[n("img",{attrs:{src:e.codeUrl},on:{click:e.getCode}})])],1):e._e(),n("el-checkbox",{staticStyle:{margin:"0px 0px 25px 0px",color:"#000"},model:{value:e.loginForm.rememberMe,callback:function(t){e.$set(e.loginForm,"rememberMe",t)},expression:"loginForm.rememberMe"}},[e._v("记住密码")]),n("el-form-item",{staticStyle:{width:"100%"}},[e.bindAccount?n("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e.loading?n("span",[e._v("绑 定 中...")]):n("span",[e._v("绑定")])]):n("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e.loading?n("span",[e._v("登 录 中...")]):n("span",[e._v("登 录")])])],1),n("el-form-item",[n("el-link",{staticStyle:{float:"left"},attrs:{href:"https://fastbee.cn/",underline:!1,target:"_blank"}},[e._v("返回官网")]),n("el-link",{staticStyle:{float:"left","margin-left":"20px"},attrs:{href:"https://fastbee.cn/doc",underline:!1,target:"_blank"}},[e._v("查看文档")]),n("router-link",{staticStyle:{float:"left","margin-left":"20px"},attrs:{to:{path:"/register",query:this.$route.query}}},[e._v("注册账号 ")])],1)],1)],1)],1),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-login-footer"},[n("span",[e._v("Copyright © 2023 "),n("a",{attrs:{target:"_blank",href:"http://fastbee.cn"}},[e._v("FastBee")]),e._v(" All Rights Reserved.")])])}],r=(n("e05f"),n("4309")),a=n.n(r),s=n("7ded"),l=n("852e"),c=n.n(l),u=n("24e5"),d=n.n(u),f="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdH\nnzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ==",g="MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAqhHyZfSsYourNxaY\n7Nt+PrgrxkiA50efORdI5U5lsW79MmFnusUA355oaSXcLhu5xxB38SMSyP2KvuKN\nPuH3owIDAQABAkAfoiLyL+Z4lf4Myxk6xUDgLaWGximj20CUf+5BKKnlrK+Ed8gA\nkM0HqoTt2UZwA5E2MzS4EI2gjfQhz5X28uqxAiEA3wNFxfrCZlSZHb0gn2zDpWow\ncSxQAgiCstxGUoOqlW8CIQDDOerGKH5OmCJ4Z21v+F25WaHYPxCFMvwxpcw99Ecv\nDQIgIdhDTIqD2jfYjPTY8Jj3EDGPbH2HHuffvflECt3Ek60CIQCFRlCkHpi7hthh\nYhovyloRYsM+IS9h/0BzlEAuO0ktMQIgSPT3aFAgJYwKpqRYKlLDVcflZFCKY7u3\nUP8iWi1Qw0Y=";function p(e){var t=new d.a;return t.setPublicKey(f),t.encrypt(e)}function m(e){var t=new d.a;return t.setPrivateKey(g),t.decrypt(e)}var h={name:"Login",data:function(){return{logo:a.a,codeUrl:"",loginForm:{username:"",password:"",rememberMe:!1,code:"",uuid:"",bindId:""},loginRules:{username:[{required:!0,trigger:"blur",message:"请输入您的账号"}],password:[{required:!0,trigger:"blur",message:"请输入您的密码"}],code:[{required:!0,trigger:"change",message:"请输入验证码"}]},loading:!1,captchaOnOff:!0,bindAccount:!1,register:!0,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){var e=this.$route.query.loginId;void 0===e||null===e?(this.checkBind(),this.checkErrorMsg(),this.getCode(),this.getCookie()):this.redirectLogin(e)},methods:{redirectLogin:function(e){var t=this;this.loading=!0,this.$store.dispatch("RedirectLogin",e).then((function(){t.$router.push({path:t.redirect||"/"}).catch((function(){}))})).catch((function(){t.loading=!1,t.captchaOnOff&&t.getCode(),t.$router.push({query:{}})}))},checkBind:function(){var e=this,t=this.$route.query,n=t.bindId;void 0===n||null===n?this.bindAccount=!1:(this.bindAccount=!0,Object(s["c"])(n).then((function(t){e.bindAccount=void 0===t.bindAccount||t.bindAccount,e.bindAccount?e.loginForm.bindId=n:(e.loginForm.bindId="",e.$router.push({query:{}}))})))},checkErrorMsg:function(){var e=this,t=this.$route.query.errorId;void 0!==t&&null!==t&&Object(s["e"])(t).then((function(e){})).catch((function(t){e.$router.push({query:{}})}))},getCode:function(){var e=this;Object(s["d"])().then((function(t){e.captchaOnOff=void 0===t.captchaOnOff||t.captchaOnOff,e.captchaOnOff&&(e.codeUrl="data:image/gif;base64,"+t.img,e.loginForm.uuid=t.uuid)}))},getCookie:function(){var e=c.a.get("username"),t=c.a.get("password"),n=c.a.get("rememberMe");this.loginForm={username:void 0===e?this.loginForm.username:e,password:void 0===t?this.loginForm.password:m(t),rememberMe:void 0!==n&&Boolean(n)}},qqLogin:function(){window.location.href="http://localhost:8080/auth/render/qq"},authLogin:function(){var e=this;this.$alert("第三方登录正在集成中...","提示消息",{confirmButtonText:"确定",callback:function(t){e.$message({type:"info",message:"action: ".concat(t)})}})},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){t&&(e.loading=!0,e.loginForm.rememberMe?(c.a.set("username",e.loginForm.username,{expires:30}),c.a.set("password",p(e.loginForm.password),{expires:30}),c.a.set("rememberMe",e.loginForm.rememberMe,{expires:30})):(c.a.remove("username"),c.a.remove("password"),c.a.remove("rememberMe")),console.log(e.loginForm),e.$store.dispatch("Login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}).catch((function(){}))})).catch((function(){e.loading=!1,e.captchaOnOff&&e.getCode()})))}))}}},v=h,x=(n("501d"),n("2877")),b=Object(x["a"])(v,o,i,!1,null,null,null);t["default"]=b.exports}}]);