import{S as w,i as k,s as y,l as u,g as d,q as c,w as v,x as N,y as q,o as f,B,p as g,d as $,G as D,I as F,n as b}from"../chunks/index-4c83912a.js";import{D as I}from"../chunks/DescribeAny-bdd7641f.js";import{a as S,w as x}from"../chunks/ClassDescribe-be7a8da4.js";import"../chunks/EnumDescribe-af5958b0.js";import"../chunks/preload-helper-94699599.js";function _(s,n,l){const e=s.slice();e[1]=n[l];const t=S(e[1]);return e[2]=t,e}function p(s){let n,l;return n=new I({props:{what:s[2],setId:!1,path:"/"}}),{c(){v(n.$$.fragment)},l(e){N(n.$$.fragment,e)},m(e,t){q(n,e,t),l=!0},p(e,t){const i={};t&1&&(i.what=e[2]),n.$set(i)},i(e){l||(c(n.$$.fragment,e),l=!0)},o(e){f(n.$$.fragment,e),l=!1},d(e){B(n,e)}}}function h(s){let n,l,e=s[2]!==null&&p(s);return{c(){e&&e.c(),n=u()},l(t){e&&e.l(t),n=u()},m(t,i){e&&e.m(t,i),d(t,n,i),l=!0},p(t,i){t[2]!==null?e?(e.p(t,i),i&1&&c(e,1)):(e=p(t),e.c(),c(e,1),e.m(n.parentNode,n)):e&&(b(),f(e,1,1,()=>{e=null}),g())},i(t){l||(c(e),l=!0)},o(t){f(e),l=!1},d(t){e&&e.d(t),t&&$(n)}}}function A(s){let n,l,e=s[0].favourites,t=[];for(let o=0;o<e.length;o+=1)t[o]=h(_(s,e,o));const i=o=>f(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();n=u()},l(o){for(let a=0;a<t.length;a+=1)t[a].l(o);n=u()},m(o,a){for(let r=0;r<t.length;r+=1)t[r].m(o,a);d(o,n,a),l=!0},p(o,[a]){if(a&1){e=o[0].favourites;let r;for(r=0;r<e.length;r+=1){const m=_(o,e,r);t[r]?(t[r].p(m,a),c(t[r],1)):(t[r]=h(m),t[r].c(),c(t[r],1),t[r].m(n.parentNode,n))}for(b(),r=e.length;r<t.length;r+=1)i(r);g()}},i(o){if(!l){for(let a=0;a<e.length;a+=1)c(t[a]);l=!0}},o(o){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)f(t[a]);l=!1},d(o){D(t,o),o&&$(n)}}}function C(s,n,l){let e;return F(s,x,t=>l(0,e=t)),[e]}class H extends w{constructor(n){super(),k(this,n,C,A,y,{})}}export{H as default};
