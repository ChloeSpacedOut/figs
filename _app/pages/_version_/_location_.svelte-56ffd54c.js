import{S as _,i as b,s as h,w as l,k as D,x as c,m as v,y as u,g as q,q as p,o as d,B as g,d as y}from"../../chunks/index-291ebab7.js";import{D as f}from"../../chunks/statistics-5eb9d5bb.js";import{M as B}from"../../chunks/MetaTags-6b47c5c8.js";import{D as I}from"../../chunks/DescribeAny-fffb1afc.js";import{p as w}from"../../chunks/translator-6d388499.js";import"../../chunks/preload-helper-dfa869de.js";import"../../chunks/TranslatableKey-5db92918.js";function M(n){let t,i,s,o;return t=new B({props:{title:n[0].value.name,description:w.getPresentableValue(n[0].value.description)}}),s=new I({props:{classi:new f(n[1]),what:n[0],setId:!1,path:n[2]}}),{c(){l(t.$$.fragment),i=D(),l(s.$$.fragment)},l(e){c(t.$$.fragment,e),i=v(e),c(s.$$.fragment,e)},m(e,a){u(t,e,a),q(e,i,a),u(s,e,a),o=!0},p(e,[a]){const m={};a&1&&(m.title=e[0].value.name),a&1&&(m.description=w.getPresentableValue(e[0].value.description)),t.$set(m);const r={};a&2&&(r.classi=new f(e[1])),a&1&&(r.what=e[0]),a&4&&(r.path=e[2]),s.$set(r)},i(e){o||(p(t.$$.fragment,e),p(s.$$.fragment,e),o=!0)},o(e){d(t.$$.fragment,e),d(s.$$.fragment,e),o=!1},d(e){g(t,e),e&&y(i),g(s,e)}}}let N=function({stuff:n,params:t}){let i=n.docs,s=new f(i).findFromQualifiedName(t.location);return s!==null?{status:200,props:{what:s,docs:i,base:n.base}}:{status:404}};function P(n,t,i){let{what:s}=t,{docs:o}=t,{base:e}=t;return n.$$set=a=>{"what"in a&&i(0,s=a.what),"docs"in a&&i(1,o=a.docs),"base"in a&&i(2,e=a.base)},[s,o,e]}class Q extends _{constructor(t){super(),b(this,t,P,M,h,{what:0,docs:1,base:2})}}export{Q as default,N as load};
