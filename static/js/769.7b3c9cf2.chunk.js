"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[769],{148:function(n,r,t){t.d(r,{IQ:function(){return x},Pg:function(){return d},Tn:function(){return v},XT:function(){return f},hY:function(){return s}});var e=t(861),a=t(757),c=t.n(a),u=t(44),i="https://api.themoviedb.org/3/",o={api_key:"3102fd9d415f7daf1e30271b3b4dfac5"};function s(n){return p.apply(this,arguments)}function p(){return p=(0,e.Z)(c().mark((function n(r){var t,e,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"movie",e=s.length>2&&void 0!==s[2]?s[2]:"week",o.page=r,n.next=5,u.ZP.get("".concat(i,"trending/").concat(t,"/").concat(e),{params:o});case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(n,r){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o.query=r,o.page=t,n.next=4,u.ZP.get("".concat(i,"search/movie"),{params:o});case 4:return e=n.sent,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"movie/").concat(r),{params:o});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"movie/").concat(r,"/credits"),{params:o});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"movie/").concat(r,"/reviews"),{params:o});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},769:function(n,r,t){t.r(r),t.d(r,{default:function(){return l}});var e,a,c=t(885),u=t(689),i=t(791),o=t(148),s=t(168),p=t(444),f=p.ZP.ul(e||(e=(0,s.Z)(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    background-color: white;\n    "]))),h=p.ZP.li(a||(a=(0,s.Z)(["\n    padding: 20px 0;\n\n    h3 {\n        margin: 0;\n        padding: 0px 10px;        \n    }\n\n    p {\n        margin: 0;\n        padding: 20px 20px;\n    }\n\n    a {\n        display: inline-block;\n        text-decoration: none;\n        padding: 5px 10px 10px 10px;\n    }\n\n    :nth-child(2n) {\n        background-color: #fffbf5;\n        }    \n    "]))),d=t(184),l=function(){var n=(0,i.useState)(null),r=(0,c.Z)(n,2),t=r[0],e=r[1],a=(0,u.bx)();if((0,i.useEffect)((function(){(0,o.Tn)(a).then((function(n){return e(n.data.results)}))}),[a]),t)return(0,d.jsx)(f,{children:0===t.length?(0,d.jsx)(h,{children:(0,d.jsx)("p",{children:"There're no reviews for this movie yet"})}):t.map((function(n){var r=n.id,t=n.author,e=n.content,a=n.url;return(0,d.jsxs)(h,{children:[(0,d.jsx)("h3",{children:t}),(0,d.jsx)("p",{children:e}),(0,d.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:"See more"})]},r)}))})}}}]);
//# sourceMappingURL=769.7b3c9cf2.chunk.js.map