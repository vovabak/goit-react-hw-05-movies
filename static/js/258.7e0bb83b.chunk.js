"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[258],{148:function(n,t,e){e.d(t,{IQ:function(){return d},Pg:function(){return h},Tn:function(){return g},XT:function(){return f},hY:function(){return s}});var r=e(861),a=e(757),i=e.n(a),u=e(44),c="3102fd9d415f7daf1e30271b3b4dfac5",o="https://api.themoviedb.org/3/";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(i().mark((function n(){var t,e,r,a,s=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"movie",e=s.length>1&&void 0!==s[1]?s[1]:"week",r={api_key:c},n.next=5,u.ZP.get("".concat(o,"trending/").concat(t,"/").concat(e),{params:r});case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={query:t,api_key:c},n.next=3,u.ZP.get("".concat(o,"search/movie"),{params:e});case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:c},n.next=3,u.ZP.get("".concat(o,"movie/").concat(t),{params:e});case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:c},n.next=3,u.ZP.get("".concat(o,"movie/").concat(t,"/credits"),{params:e});case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:c},n.next=3,u.ZP.get("".concat(o,"movie/").concat(t,"/reviews"),{params:e});case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},150:function(n,t,e){e.d(t,{O:function(){return v}});var r,a,i,u,c,o=e(689),s=e(168),p=e(87),f=e(444),l=f.ZP.ul(r||(r=(0,s.Z)(["\n    display: grid;\n    max-width: calc(100vw - 40px);\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 10px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n    "]))),h=f.ZP.li(a||(a=(0,s.Z)(["\n    \n    width: 200px;\n    margin-left: auto;\n    margin-right: auto;    \n    "]))),m=f.ZP.h1(i||(i=(0,s.Z)(["\n    margin: auto 0;\n    padding: 5px 10px;\n    text-align: center;\n    font-size: 20px;    \n    "]))),d=(0,f.ZP)(p.OL)(u||(u=(0,s.Z)(["\n    display: flex;\n    flex-direction: column;    \n    justify-content: space-between;\n    height: 100%;\n    text-decoration: none;\n    cursor: inherit;\n    color: inherit;\n    "]))),x=f.ZP.img(c||(c=(0,s.Z)(["\n    display: block;\n    "]))),g=e(184),v=function(n){var t=n.movies,e=(0,o.TH)();return(0,g.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,g.jsx)(h,{children:(0,g.jsxs)(d,{to:"/movies/:".concat(t),state:{from:e},children:[(0,g.jsx)(m,{children:r}),(0,g.jsx)(x,{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:r})]})},t)}))})}},258:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),a=e(791),i=e(148),u=e(184),c=function(n){var t=n.query,e=n.onSubmit,i=(0,a.useState)(""),c=(0,r.Z)(i,2),o=c[0],s=c[1];return(0,u.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==o.trim().toLowerCase()?o!==t&&e(o):n.currentTarget.searchQuery.value=""},children:[(0,u.jsx)("button",{children:"Search"}),(0,u.jsx)("label",{"aria-label":"search movie",children:(0,u.jsx)("input",{type:"text",name:"searchQuery",onChange:function(n){s(n.currentTarget.value)}})})]})},o=e(150),s=function(){var n=(0,a.useState)(""),t=(0,r.Z)(n,2),e=t[0],s=t[1],p=(0,a.useState)([]),f=(0,r.Z)(p,2),l=f[0],h=f[1];return(0,a.useEffect)((function(){e&&(0,i.XT)(e).then((function(n){h(n.data.results)}))}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{onSubmit:function(n){s(n)}}),(0,u.jsx)(o.O,{movies:l})]})}}}]);
//# sourceMappingURL=258.7e0bb83b.chunk.js.map