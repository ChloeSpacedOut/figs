import{S as D,i as N,s as B,t as C,h as W,g as m,d as p,w as b,l as g,x as j,y as w,z as x,A as z,o as d,p as I,q as _,B as q,k as A,m as F,ab as M,v as P,aa as T,C as E,n as S}from"../../chunks/index-e112e42e.js";import{D as G}from"../../chunks/statistics-e03f576d.js";import{p as H}from"../../chunks/translator-7fd4d062.js";import"../../chunks/preload-helper-7fa5b643.js";import"../../chunks/index-514aa2c7.js";function y(r,t,n){const c=r.slice();return c[9]=t[n],c}function k(r){let t;return{c(){t=C("Waiting for the pool to finish fetching languages")},l(n){t=W(n,"Waiting for the pool to finish fetching languages")},m(n,c){m(n,t,c)},d(n){n&&p(t)}}}function v(r){let t,n,c;const o=[r[9],{classi:r[3]},{setId:!1},{path:r[0]}];var f=r[9].this;function l(i){let e={};for(let s=0;s<o.length;s+=1)e=E(e,o[s]);return{props:e}}return f&&(t=new f(l())),{c(){t&&b(t.$$.fragment),n=g()},l(i){t&&j(t.$$.fragment,i),n=g()},m(i,e){t&&w(t,i,e),m(i,n,e),c=!0},p(i,e){const s=e&11?x(o,[e&2&&z(i[9]),e&8&&{classi:i[3]},o[2],e&1&&{path:i[0]}]):{};if(f!==(f=i[9].this)){if(t){S();const a=t;d(a.$$.fragment,1,0,()=>{q(a,1)}),I()}f?(t=new f(l()),b(t.$$.fragment),_(t.$$.fragment,1),w(t,n.parentNode,n)):t=null}else f&&t.$set(s)},i(i){c||(t&&_(t.$$.fragment,i),c=!0)},o(i){t&&d(t.$$.fragment,i),c=!1},d(i){i&&p(n),t&&q(t,i)}}}function J(r){let t,n,c,o=r[2]&&k(),f=r[1],l=[];for(let e=0;e<f.length;e+=1)l[e]=v(y(r,f,e));const i=e=>d(l[e],1,1,()=>{l[e]=null});return{c(){o&&o.c(),t=A();for(let e=0;e<l.length;e+=1)l[e].c();n=g()},l(e){o&&o.l(e),t=F(e);for(let s=0;s<l.length;s+=1)l[s].l(e);n=g()},m(e,s){o&&o.m(e,s),m(e,t,s);for(let a=0;a<l.length;a+=1)l[a].m(e,s);m(e,n,s),c=!0},p(e,[s]){if(e[2]?o||(o=k(),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),s&11){f=e[1];let a;for(a=0;a<f.length;a+=1){const h=y(e,f,a);l[a]?(l[a].p(h,s),_(l[a],1)):(l[a]=v(h),l[a].c(),_(l[a],1),l[a].m(n.parentNode,n))}for(S(),a=f.length;a<l.length;a+=1)i(a);I()}},i(e){if(!c){for(let s=0;s<f.length;s+=1)_(l[s]);c=!0}},o(e){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)d(l[s]);c=!1},d(e){o&&o.d(e),e&&p(t),M(l,e),e&&p(n)}}}let V=function({stuff:r,url:t}){let n=r.docs;return{props:{query:t.searchParams.get("q"),docs:n,base:r.base}}};function K(r,t,n){let{query:c}=t,{docs:o}=t,{base:f}=t,l=new G(o),i=null,e=null,s=[],a=!1;function h(){if(i!==null){if(H.activeTransfers.length>0){n(2,a=!0);return}n(2,a=!1);let u=i.next();u.done?i=null:n(1,s=[...s,u.value])}}return P(()=>{e=setInterval(h,1)}),T(()=>{e!==null&&clearInterval(e)}),r.$$set=u=>{"query"in u&&n(4,c=u.query),"docs"in u&&n(5,o=u.docs),"base"in u&&n(0,f=u.base)},r.$$.update=()=>{r.$$.dirty&16&&(i=null,n(1,s=[]),c!==null&&(i=l.search(c)))},[f,s,a,l,c,o]}class X extends D{constructor(t){super(),N(this,t,K,J,B,{query:4,docs:5,base:0})}}export{X as default,V as load};
