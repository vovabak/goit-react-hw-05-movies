"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{148:function(n,t,e){e.d(t,{IQ:function(){return h},Pg:function(){return d},Tn:function(){return g},XT:function(){return f},hY:function(){return s}});var r=e(861),a=e(757),o=e.n(a),c=e(44),i="https://api.themoviedb.org/3/",u={api_key:"3102fd9d415f7daf1e30271b3b4dfac5"};function s(n){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(o().mark((function n(t){var e,r,a,s=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"movie",r=s.length>2&&void 0!==s[2]?s[2]:"week",u.page=t,n.next=5,c.ZP.get("".concat(i,"trending/").concat(e,"/").concat(r),{params:u});case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(n,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u.query=t,u.page=e,n.next=4,c.ZP.get("".concat(i,"search/movie"),{params:u});case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(i,"movie/").concat(t),{params:u});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(i,"movie/").concat(t,"/credits"),{params:u});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(i,"movie/").concat(t,"/reviews"),{params:u});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},1:function(n,t,e){e.d(t,{n:function(){return i}});var r,a=e(168),o=e(444).ZP.button(r||(r=(0,a.Z)(["    \n    margin: 10px 0;\n    padding: 10px;\n    border-radius: 4px;\n    background-color: tomato;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    text-align: center;\n    display: inline-block;\n    color: #fff;\n    border: 0;\n    text-decoration: none;\n    outline: none;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 16px;    \n    width: 100px;\n    \n        :hover, :focus {\n            opacity: 0.8;\n            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n                0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n        }\n    "]))),c=e(184),i=function(n){var t=n.onClick,e=n.children;return(0,c.jsx)(o,{type:"button",onClick:t,children:e})}},150:function(n,t,e){e.d(t,{O:function(){return v}});var r,a,o,c,i,u=e(689),s=e(168),p=e(731),f=e(444),l=f.ZP.ul(r||(r=(0,s.Z)(["\n    display: grid;\n    max-width: calc(100vw - 40px);\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 10px;\n    margin: 0 auto;    \n    padding: 10px 0;\n    list-style: none;\n    border-bottom: 1px solid tomato;\n    background-color: #fffbf5;\n    "]))),d=f.ZP.li(a||(a=(0,s.Z)(["    \n    width: 200px;\n    margin: 0 auto;\n    background-color: #fff;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n                0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    \n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n        :hover, :focus {            \n            transform: scale(1.05);\n        }\n    "]))),x=f.ZP.h1(o||(o=(0,s.Z)(["\n    margin: auto 0;\n    padding: 10px 10px 10px 10px;\n    text-align: center;\n    font-size: 20px;    \n    "]))),h=(0,f.ZP)(p.OL)(c||(c=(0,s.Z)(["\n    display: flex;\n    flex-direction: column;    \n    justify-content: space-between;\n    height: 100%;\n    text-decoration: none;\n    cursor: inherit;\n    color: inherit;\n    outline: none;    \n    "]))),m=f.ZP.img(i||(i=(0,s.Z)(["\n    display: block;\n    width: 100%;\n    height: 300px;\n    object-fit: cover;\n    "]))),g=e(184),v=function(n){var t=n.movies,e=(0,u.TH)();return(0,g.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,g.jsx)(d,{children:(0,g.jsxs)(h,{to:"/movies/:".concat(t),state:{from:e},children:[(0,g.jsx)(x,{children:r}),(0,g.jsx)(m,{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:r})]})},t)}))})}},771:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,o=e(982),c=e(885),i=e(791),u=e(148),s=e(150),p=e(1),f=e(168),l=e(444),d=l.ZP.main(r||(r=(0,f.Z)(["\n    width: 100wv;\n    height: 100vh;\n    text-align: center;\n    background-color: #fffbf5\n    "]))),x=l.ZP.p(a||(a=(0,f.Z)(["\n    margin: 0;\n    padding: 20px;    \n    color: red;\n    "]))),h=e(184),m=function(){var n=(0,i.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(null),f=(0,c.Z)(a,2),l=f[0],m=f[1],g=(0,i.useState)("idle"),v=(0,c.Z)(g,2),b=v[0],Z=v[1],w=(0,i.useState)(null),k=(0,c.Z)(w,2),y=k[0],j=k[1],P=(0,i.useState)(!1),_=(0,c.Z)(P,2),C=_[0],S=_[1];(0,i.useEffect)((function(){return m(1)}),[]),(0,i.useEffect)((function(){l&&(Z("pending"),(0,u.hY)(l).then((function(n){n.data.total_results<=20&&0!==n.data.total_pages&&(Z("resolved"),S(!1)),r((function(t){return[].concat((0,o.Z)(t),(0,o.Z)(n.data.results))})),Z("resolved"),S(!0)})).catch((function(n){j(n.message),S(!1),Z("rejected")})))}),[l]);return(0,h.jsxs)(d,{children:["rejected"===b&&(0,h.jsx)(x,{children:y}),"resolved"===b&&(0,h.jsx)(s.O,{movies:e}),"resolved"===b&&C&&(0,h.jsx)(p.n,{onClick:function(){return m((function(n){return n+1}))},children:"Load more"})]})}}}]);
//# sourceMappingURL=771.97e1b906.chunk.js.map