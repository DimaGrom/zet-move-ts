(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"authRegisterActionCreate",(function(){return G})),n.d(a,"authLoginActionCreate",(function(){return k})),n.d(a,"authMeActionCreater",(function(){return B})),n.d(a,"logoutActionCreater",(function(){return I}));var c,r=n(0),s=n(25),A=n.n(s),o=(n(24),n(45),n(3));!function(e){e.FILM_PAGE="/film",e.LOGI_ROUTER="/login",e.MAIN_PAGE="/",e.MY_PAGE="/my"}(c||(c={}));var i,u=n(2),l=function(){return Object(u.jsx)("div",{className:"FilmPage",children:"FilmPage"})},j=n(6),g=n(4),b=n.n(g),d=n(12),f=n.n(d),p=n(38),h=function(){Object(r.useEffect)((function(){console.log("This is MainPage: React.FC")}),[]);var e=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://crimson-badger-tux.cyclic.app/users");case 2:t=e.sent,console.log(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:p(),name:"111111"},e.next=3,f.a.post("https://crimson-badger-tux.cyclic.app/users",t);case 3:n=e.sent,console.log(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:["MainPage",Object(u.jsx)("div",{onClick:e,style:{width:"100%",margin:"50px auto",height:70,background:"gray",color:"white",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},children:"TEST"}),Object(u.jsx)("div",{onClick:t,style:{width:"100%",margin:"50px auto",height:70,background:"gray",color:"white",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},children:"NEw"})]})},O=[{path:c.FILM_PAGE,Component:l},{path:c.LOGI_ROUTER,Component:function(){return Object(u.jsx)("div",{children:"LoginPage"})}},{path:c.MAIN_PAGE,Component:h}],E=(c.FILM_PAGE,c.MY_PAGE,c.MAIN_PAGE,function(){return Object(u.jsx)(o.c,{children:O.map((function(e,t){var n=e.path,a=e.Component;return Object(u.jsx)(o.a,{path:n,element:Object(u.jsx)(a,{})},t)}))})}),v=n(5),x=(n(65),n(66),n(19)),m=n(14),N=n(7);!function(e){e.AUTH_REGISTER="AUTH_REGISTER",e.AUTH_REGISTER_ERROR="AUTH_REGISTER_ERROR",e.AUTH_REGISTER_SUCCESS="AUTH_REGISTER_SUCCESS",e.AUTH_LOGI="AUTH_LOGI",e.AUTH_LOGIN_ERROR="AUTH_LOGIN_ERROR",e.AUTH_LOGIN_SUCCESS="AUTH_LOGIN_SUCCESS",e.AUTH_ME="AUTH_ME",e.AUTH_ME_ERROR="AUTH_ME_ERROR",e.AUTH_LOGOUT="AUTH_LOGOUT"}(i||(i={}));var R="https://crimson-badger-tux.cyclic.app",C=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(R,"/users"));case 2:return n=e.sent,e.next=5,n.data.find((function(e){return e.name===t}));case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(R,"/users"),t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(b.a.mark((function e(t,n){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(R,"/users"));case 2:return a=e.sent,e.next=5,a.data.find((function(e){return e.name===t&&e.password===n}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(R,"/users"));case 2:return n=e.sent,e.next=5,n.data.find((function(e){return e.id===t}));case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=n(38),G=function(e,t){return function(){var n=Object(j.a)(b.a.mark((function n(a){var c,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C(e);case 3:if(void 0!==(c=n.sent)){n.next=17;break}return(r={}).id=F(),r.token=r.id,r.name=e,r.password=t,r.favoritFilms=[],console.log("authRegisterActionCreate newUser ",r),a({type:i.AUTH_REGISTER_SUCCESS,payload:{name:e,user:r,token:String(r.token)}}),n.next=15,localStorage.setItem("token",r.token);case 15:return n.next=17,w(r);case 17:void 0!==c&&a({type:i.AUTH_REGISTER_ERROR,payload:404}),n.next=23;break;case 20:n.prev=20,n.t0=n.catch(0),console.log(n.t0);case 23:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(e){return n.apply(this,arguments)}}()},k=function(e,t){return function(){var n=Object(j.a)(b.a.mark((function n(a){var c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S(e,t);case 3:if(void 0===(c=n.sent)&&a({type:i.AUTH_REGISTER_ERROR,payload:405}),void 0===c){n.next=9;break}return a({type:i.AUTH_LOGIN_SUCCESS,payload:{name:c.name,user:c,token:String(F())}}),n.next=9,localStorage.setItem("token",c.id);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:i.AUTH_REGISTER_ERROR,payload:405});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},B=function(){return function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("token");case 2:if(null!==(n=e.sent)){e.next=5;break}return e.abrupt("return",t({type:i.AUTH_ME_ERROR}));case 5:if(null===n){e.next=11;break}return e.next=8,U(n);case 8:if(!(a=e.sent)){e.next=11;break}return e.abrupt("return",t({type:i.AUTH_ME,payload:{name:a.name,user:a,token:n}}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("token");case 2:return e.abrupt("return",t({type:i.AUTH_LOGOUT}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=Object(N.a)({},a),Q=function(){var e=Object(x.b)();return Object(m.b)(L,e)},H=x.c,T=function(e){var t=Object(r.useState)(""),n=Object(v.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),A=Object(v.a)(s,2),o=A[0],i=A[1],l=Object(r.useState)("password"),j=Object(v.a)(l,2),g=j[0],b=j[1],d=Q(),f=d.authLoginActionCreate,p=d.authRegisterActionCreate,h=H((function(e){return e.auth})),O=h.statuse,E=h.saccess;Object(r.useEffect)((function(){E&&(e.setToggle(!1),e.setUserActive(!1))}),[E]);var x=function(){"password"===g&&b("text"),"text"===g&&b("password")};return Object(u.jsx)("div",{className:"LoginForm",children:Object(u.jsxs)("form",{className:"LoginForm-form",children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"".concat(e.login?"active":""),onClick:function(){e.setLogin(!0),e.setRegister(!1)},children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(u.jsx)("span",{className:"".concat(e.registrater?"active":""),onClick:function(){e.setLogin(!1),e.setRegister(!0)},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(u.jsx)("img",{onClick:function(){e.setUserActive(!1),e.setToggle(!1)},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLElEQVR4nO1Xu07cQBQ9JFSRKJAoAkkThGio+IuAlJKWwrv3bqChC0vFT6RJRw2igiqi4RGlyw+kIkkRpERCAiEhihPN2PGO9uXHGmxr50hX6925r3OPx94BPDw8PEYFW1il4qc1wQrqCoYkaE3wA3UF606Eihf2U7BiCFhTvHXXKg0GmKLgIxXfqZjpWVfM2DXjE2AKVQTN9BWX0a10T0HQ49NCw66FPpf/VaoEuIFpCj45e+Eb32N5oH8TS1R8jf0V+/3Ue1JQsUbBVUTgjoptruF5YtwunlGhFNxEsVdsYf1punYbUcxScOiocMomFjPnaeINBZ8ddY7ZxOvH6dotDEyYyVHxNyp8bScLTBSg7J84p2DLqFZc526xDcxTcOJM76jI6XETLyk4cPKf5VF5cIFdTNoJKW6jAr8f836m4h0Fv7LuO4/Kgoovzv1ZDxNc9CPCOho8ES1fBXpFtPzJ0yui8RTM2eIDA8xZM2/azpkifmpkjUub18Woe2S7j287BZGhcWnzFkckwJzzwjy31+EEhxNJiMudV3MS6V5P+p43Lm1eFkUk7XqGRvcoeMhal1UhwgYW4t8aWOgmhIz9lUckbHqvDyHWi0gXodT+Ou6bnZ3H5Lk5R9vrFl4lFkyIy51X8xJRtHt8BTsDE3VyDY0bIS/zEjF/G9r2ZWUmFhZL81diaNwIeZmXSKUNnoiWrwK9Ilr+5Dl+igguym6K2c2eYzw8PMYI/wCrTlaUK+ta/QAAAABJRU5ErkJggg==",alt:"close"})]}),Object(u.jsx)("p",{className:"line"}),Object(u.jsxs)("div",{className:"flex-row relative",children:[Object(u.jsx)("input",{value:a,onChange:function(e){c(e.target.value)},className:"LoginForm__lf-input",placeholder:"Your username",type:"text"}),405===O&&Object(u.jsx)("p",{className:"LoginForm_error",children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 \u0438\u043c\u044f"}),404===O&&Object(u.jsx)("p",{className:"LoginForm_error",children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0437\u0430\u043d\u044f\u0442\u043e"})]}),Object(u.jsxs)("div",{className:"flex-row relative",children:[Object(u.jsx)("input",{value:o,onChange:function(e){i(e.target.value)},className:"LoginForm__lf-input",placeholder:"Your password",type:g}),"password"===g?Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJElEQVR4nO2Ze2jOYRTHP2zjdZ+ZFVZDLWm5pSXxBykpk2RYCRGSlOIvSyGFZMU/UhKi/KUkqZH9YYjl0jbN1ELkLom5zXh16vurp9V7+b37vRf6fepp7949zznPec5zOecMQkJCQkJCcoMIMBfYA5wHWoEPwHegG/gIPAHqgcPAUqCYHGIOcAr4DER9NjPwCrAa6J8tAxYBTc6k/gD3gDpgOTAVKJKn8oDhQDmwENgJXJW3vPEvge2ZNKhc28ObwBtgFzA+BVmFwHrggSOvQ8amlQ1ApxTa/t+iFQ+CBUCLY9AxYCABUwCccJScBkYErQTIB7Y5W+4+MCZIBZck2LxRQ/qZBDyWzhfAyCCE2kF9C7wCppM5ioBrwA+dy0CwQzmYzNMHGJQFvSEh/zr5iTrYNfcM2E/usgLoUtAZk1J1+g3MJPco0lNg70t1os516tiiFz2XOK653dLVHJdhek2jCgZzhfnaKV2KrJNingZZqyL7jAXea3F3+B28VwM/ARPJHkOBZs2lXiGTL/oCFyTgNVBB5ikEbmsO7fo9JQYADRL0DphG5ihWxmm6nwJlvRVY4+QhX4F1pJ9ZwHNH74wgCgtekuOtjrUzaaqA9ANqgV/S81M/rSJTkqrQSqcyclTfVausY999AXYHmOpaMaNDsu22PKLs0Et/HwGj/AqtUE5uAs7q4HtYkeGy4x1LuA4AE1KYfIkqJ22OvIfA7B59WlPxzDiVZmzgxTivuxXj7vSoUzXLe6uUTZYpIYtodScDi4GDQKOzdaKK8dbEuF59GzPacW9DEttmq+MVz4N+2jdVH+3zyQS6fBnjHWhb6SEJBEccz1Vp+1XqsNp2vOH83XuLmlRO3afoIaKt2i3vlPowxmTFpFEdkin1bHZus3gBnGdIPM6pz6Ek9JoxdxU49poC7WlTviRB32QMmaKSa2ea6mUx2ejcMO6NlqohOGXYWjJEgXNArVhNQIbYmYkqcbLQKO2slcK2JLzhxxDDCxA3kQHapWxlkv39GLLMiXTTzk21vDQYkqer3/7NkHP4MYRkcvFsYW/T9WxPIiQkhP+Dv586CF9EuOZSAAAAAElFTkSuQmCC",alt:"im",className:"LoginForm__change",onClick:x}):Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFZklEQVR4nO2ba4hVVRTHfzNWpo6ZSUVONWWlNRk9bMpKKwixhGbGMvHDmIWoDRWFOUkQlhFRjT3JKLEnPSz6VNGHghoiC8owix4IZWZTqWmWlabjTCxYB1bbe+fuc+4+5x7z/mHD5d591lp77b3X81yooooqKoRaYKYO+bzf4WqgT4coYb/DnUYB8nmfxsHAAmBWBgq4FrgbGEqOsNAsZnqKCmg1zywmR7jRCLYyRQW8a56RE5cbHAr8ZYQ7KwUFnAL06vx/gCPJGZ4xC3oyBQU8aua/QA5xjhFwOzAsoAIGA1vN/AvIKT4xQt4QUAFzzdw15BizjaBfATWBFPCpmSvKyC0GA78ZYS/sZ+5MM6+tn3lNZt42oI4MUQPM0NHfblo8ZARu72derS68rUQuMMPQe9hThqOBm4DRnvO9mL8IHERpHKJWeoWHIfTBQOBxYJln9HcS0K0y/xBj40oqQMbbWR/BmBili47kXV8uwRrgAUcJqzTwyRvqge+NnL8D54YivsBEYTI6yB/uMfL9AZwfmkGbhqA9wKQYzw3QIOl64CmgS3dqq9Lq0c/rgPeA5Tq3SZ/1xRRgt3qKiaSEBr1nPobrSuBlJ4KLO7YALwFTPQ1wfaWvZwPwoAreF3j8CiwBjiGHOA54To9gIeF/Bl4B5gOT1T8PBw7QMVy/u1TnvAr8UoTWLuBZVXbFUQd0AjsLCPoTcL/e/yRFz1p9tlMV6NLfqfSHUCFMUT/rCvax3n/Z2VAQWlepC3b5iUG9jAwxCFjquEUZ3wLNGfCXsth3Dm+R5TGVLVUcr+moZf43sEgLo1lBFnqH8rayfKb2KBVcBGx2GHalydADwvt9R6bNJbLQRGgGdjhH7hHgQCoPsQ/3OldSArZpoRjM0mjNxthXkD9M0xA4krMnRMdpurP4bq3O5hWnOi6zJ0afYi9M1qAjIvZjiAKD3lvx7V8Af+r4XH16CHsyxtQDosBJAqxYGKtHPSIiOfaJAVLrhXo/i4W7EtzcSvmQosgG59rKmrxwmGZmNqLzSYBKYUmMuF9OSLk4wbkOsqYRPrv0umNNQ+TVUxMkPy0B+E5wTtybpUpkNztCzAsghDD8JoECSpXVfdHu0L2l2MTRTmT1BGFwdoLFR+PMQDIsc+yMeIv/QDKvD8yk1Z4FCB/MK0MBcwLJMNAJ4T9yM9RrzI97NA0NhdvKUIA8GwrjdW17KXeoWvroB8mqLMSHPl1GfD23AiegVXsTrgFfamhvispn9oh2O82MWu30Rr50ZAJhxmVsAxqN5V/r/DbM2ez2KOLr1VHI9XxpHpAiZ1yIJf86oRdIwqvL0HinwJwWvQoSJl8cfTlWNVcIkxzB4pTEC73b4zsuL/PVO6lPnl5kXqNGi95YYQivTdge64yx+PsS0D8C2GhoSJM2GEY6uUHSV1Q6ihRQo7Ej4ctPA/S428Qt+Gt0cxxhr0tIp0F3eI0a2O36WYoaxyakudjI1Zvw+njheWe3zqPyaHb8u6TVqRYjVxtm29TNVQqXOKW6D7Mo041xWl+bKlQlmqDFFHvvj8qKeZPufsR8owqUFVpNgNanbTTZmEwx3ilC7ta2dpqIqkp7nDK4d7UnNCZq19Z6B2mSHp5SU+Yth5eE7mdQYYwq0C3aom4zxD9BpON0e4Eu0Mos73wpDHGiRdsvnJ/wpYV6/V+Aje5ssSZUvSIoWpyCajTEWr+hyhhXJEoboSn3In0tfleRBElcX64xCLjLCZ2Lhb0bND0ttNg+x9B15KQV5406LYa49iHOWKU05BXcfRqn6b9KXlPLbd2YdaPr9Y1UKdKczP8YNeoqG3WhJRsWVVRRRRWkgH8Bg5PVaPr631sAAAAASUVORK5CYII=",alt:"im",className:"LoginForm__change",onClick:x})]}),Object(u.jsx)("div",{className:"flex-row",children:Object(u.jsx)("button",{className:"LoginForm__lf-submit",onClick:function(t){t.preventDefault(),e.login&&(console.log("\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),f(a,o)),e.registrater&&(console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),p(a,o))},children:"Sign Up"})})]})})},D=n(10),P=function(){var e,t=Q().logoutActionCreater,n=Object(o.l)(),a={opacity:1},s=Object(r.useState)(!1),A=Object(v.a)(s,2),i=A[0],l=A[1],j=Object(r.useState)(!1),g=Object(v.a)(j,2),b=g[0],d=g[1],f=Object(r.useState)(!1),p=Object(v.a)(f,2),h=p[0],O=p[1],E=Object(r.useState)(!1),x=Object(v.a)(E,2),m=x[0],N=x[1],R=Object(r.useState)(!1),C=Object(v.a)(R,2),w=C[0],S=C[1],U=H((function(e){return e.auth})),F=U.user,G=U.name,k=U.isAuth;return Object(u.jsxs)("div",{className:"Navbar",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"Navbar__wrape",children:[Object(u.jsxs)("div",{className:"Navbar__logo__content",children:[Object(u.jsx)("img",{onClick:function(){n(c.MAIN_PAGE),l(!1),d(!1)},className:"Navbar__logo",src:"data:image/png;base64,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",alt:"s"}),Object(u.jsx)("div",{onClick:function(){l(!1),d(!b)},className:"Navbar__burgger-cover",children:Object(u.jsx)("div",{className:"Navbar__burgger ".concat(b?"active":"")})})]}),Object(u.jsx)("div",{className:"Navbar__burgger_menu ".concat(b?"active":""),children:Object(u.jsxs)("div",{className:"Navbar__move ".concat(k?"isAuth":""),children:[Object(u.jsx)(D.b,{to:c.FILM_PAGE,style:function(e){return e.isActive?a:void 0},children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(D.b,{to:c.FILM_PAGE,children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"}),Object(u.jsx)(D.b,{to:c.FILM_PAGE,children:"\u041c\u0443\u043b\u044c\u0442\u0438\u043a\u0438"}),k&&Object(u.jsx)(D.b,{to:c.FILM_PAGE,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"})]})}),Object(u.jsxs)("div",{className:"Navbar__move ".concat(k?"isAuth":""),children:[Object(u.jsx)(D.b,{to:c.FILM_PAGE,style:function(e){return e.isActive?a:void 0},children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(D.b,{to:c.FILM_PAGE,children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"}),Object(u.jsx)(D.b,{to:c.FILM_PAGE,children:"\u041c\u0443\u043b\u044c\u0442\u0438\u043a\u0438"}),k&&Object(u.jsx)(D.b,{to:c.FILM_PAGE,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"})]}),Object(u.jsxs)("div",{className:"Navbar__a",onClick:function(){console.log("\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443"),d(!1)},children:[Object(u.jsxs)("div",{className:"Navbar__serch",children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD1UlEQVR4nO2aS4gUVxRArx+y0wRX8bdSDMz0vaV0FFf+0Lq3FSIBexGzUQRXycZNNgFBF9kFhIEQGFdu3QlCCEgERREz2fiJgZ5+r3pWZhMlAR0/Lbc1zAfrVU3P66rq9h2obd/Pu9/3GiAQCAQCgUAgMDgM19cnDUQbY70jNUqORBu7ACtgVJlp0DbD+L0VvGYZn1ih7uLPMP5nGW9YofPqFBgFkpjEMP32PoNzfHeN4LHuWVgJw0YSj201jL/0afjCj+nWdDwewbCQMH5lmZ56MX7OCc9MXPsGqo4V/M4IvfZq/MJvorIpYXpFbmCGzxVLwZ+gimFvlnjyRvCFYfzbCs72kRJnoEoFz+bI+Z6DmK4aoVMdwU3zQ1nngnaMx63gZcP4MtsJOJvI9p1QBUyOam8Yb7cFd+f5veQQ1azQr9lRgFPdZnPV4C3M6PM5FJ281xz7CJaARodh/CEzrRhPQJkYpusZCl5czu9bwXMZkfWotBF6pkHbssJ+qSe/GDXOCl5xyUkO4x6oWtszQq/z5nwWVsa3WKbnDidM+JDTh2J4zdGmrnqVxTjpcMCfPmXlJm2r64VlXDsJHkmY2JUGf8mutVAkhuvrXQrNxOObfcrTWuIcmGKsQ5EkepmRmv/4YhD92Qgl6U6PYiiSJI52Oar/40HItEK/p8lsS/QlFElHapR+Gjg7iI3NMppUB8TRfiiSjuAmVw1oHx771Ke87t69q12tsPALky7ACiP4b3odqH3tU16bo33pKUev2kejT6BorNBNRxpc9isLL6TPHHjfp6zc6O2toxC+1K3Oi5yDOza4os0y/QxlMB2PR646oCutj2JoGS856w1H+/xY1I9yQnddyulKu5zfN0LfOp3M1Cr1QcUIHnM6oLfP47l+lNRbYB2q3FGGp6FMumdhpd7bZ6SCKnpFt7q8OZ8V9u9O/4G2Ryibaa0FTM9yKPxctzpdbBbfE+jo/LbV4QVnwVtY/adKaX9p4ZpL6bmImDVMnV4N0QnPve+7asyd6jiB6cd+jFj2xziVxGPryrYfevVAaKIMJ1QqEizTmb4eO0bJCYls36mh6SfE6YFl/GPonNBtNlfpvb1eXfdpeEv7vLY6NUqNGzonKDoE6dX1u/rw0P10hvd1tteWuHh4GmonzOfhF5+tsY3a5zauHbKCTdOgAzpL5FF4ZJywHFoH6x/ro8tQtUjfBCfA0tNBUw8+ZCdYxkkYRVp5awLjk8r+v6ioSCj8Ca1STmBqwajTdjjB94NtZekNWr3ndPzn/5P/YIyfj47SI53zgUAgEAgEwDdvAHHM0/ArWiS3AAAAAElFTkSuQmCC",alt:"s"}),Object(u.jsx)("p",{children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443"})]}),Object(u.jsxs)("div",{className:"Navbar__dropdown",children:[F?Object(u.jsx)("div",{onClick:function(){return l(!i)},className:"Navbar__signIn ".concat(i?"active":""),children:(e=G,e.split(/\s+/).join("")[0])}):Object(u.jsx)("img",{onClick:function(){l(!i),d(!1)},className:"Navbar__signIn ".concat(i?"active":""),src:"data:image/png;base64,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",alt:"s"}),Object(u.jsxs)("div",{className:"Navbar__dropdown-content ".concat(i?"show":""),children:[k?Object(u.jsx)("div",{onClick:function(){t(),l(!1)},children:Object(u.jsx)("p",{children:"\u0412\u044b\u0439\u0442\u0438"})}):Object(u.jsx)("div",{onClick:function(){O(!0),l(!1),N(!0),S(!1)},children:Object(u.jsx)("p",{children:"\u0412\u043e\u0439\u0442\u0438"})}),!k&&Object(u.jsx)("div",{onClick:function(){O(!0),l(!1),S(!0),N(!1)},children:Object(u.jsx)("p",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),k&&Object(u.jsx)(D.b,{to:"#contact",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 (0)"})]})]})]})]})}),h&&Object(u.jsx)(T,{setUserActive:O,setToggle:l,login:m,setLogin:N,registrater:w,setRegister:S})]})},y=function(){var e=Q().authMeActionCreater,t=H((function(e){return e.auth})).isAuth;return Object(r.useEffect)((function(){console.log("This is App: React.FC")}),[]),Object(r.useEffect)((function(){e()}),[t]),Object(u.jsx)("div",{className:"base font",children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(P,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(E,{})})]})})},W=n(40),J={error:null,isAuth:!1,loading:!1,name:"",saccess:!1,statuse:null,token:null,user:null},Y=Object(m.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.AUTH_REGISTER:return Object(N.a)(Object(N.a)({},e),{},{loading:!0,statuse:null});case i.AUTH_REGISTER_SUCCESS:return Object(N.a)(Object(N.a)({},e),{},{loading:!0,statuse:null,user:t.payload.user,name:t.payload.name,token:t.payload.token,isAuth:!0,saccess:!0});case i.AUTH_REGISTER_ERROR:return Object(N.a)(Object(N.a)({},e),{},{loading:!0,statuse:t.payload});case i.AUTH_LOGI:return Object(N.a)(Object(N.a)({},e),{},{loading:!0,statuse:null});case i.AUTH_LOGIN_SUCCESS:return Object(N.a)(Object(N.a)({},e),{},{loading:!0,statuse:null,user:t.payload.user,name:t.payload.name,token:t.payload.token,saccess:!0,isAuth:!0});case i.AUTH_LOGIN_ERROR:return Object(N.a)(Object(N.a)({},e),{},{loading:!0,statuse:t.payload});case i.AUTH_LOGIN_SUCCESS:return Object(N.a)(Object(N.a)({},e),{},{loading:!1,statuse:null,user:t.payload.user,name:t.payload.name,token:t.payload.token,saccess:!0,isAuth:!0});case i.AUTH_ME_ERROR:return Object(N.a)(Object(N.a)({},e),{},{loading:!1,statuse:null,user:null,token:null,saccess:!1,isAuth:!1});case i.AUTH_ME:return Object(N.a)(Object(N.a)({},e),{},{loading:!1,statuse:null,user:t.payload.user,name:t.payload.name,token:t.payload.token,saccess:!0,isAuth:!0});case i.AUTH_LOGOUT:return Object(N.a)(Object(N.a)({},e),{},{loading:!1,statuse:null,token:null,saccess:!1,isAuth:!1});default:return e}}}),M=Object(m.d)(Y,Object(m.a)(W.a));A.a.render(Object(u.jsx)(D.a,{children:Object(u.jsx)(x.a,{store:M,children:Object(u.jsx)(y,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1b9f822e.chunk.js.map