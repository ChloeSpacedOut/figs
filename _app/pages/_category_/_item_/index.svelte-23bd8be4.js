import{S as i,i as c,s as m,x as f,y as u,z as p,r as d,p as l,C as _}from"../../../chunks/index-ac18434c.js";import{C as g}from"../../../chunks/CategoryItemDocs-ee84b141.js";import{r as a}from"../../../chunks/Article.svelte_svelte_type_style_lang-4914ee14.js";import"../../../chunks/ItemFieldDocs-15de57d3.js";function $(o){let e,n;return e=new g({props:{docs:o[0]}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,r){p(e,t,r),n=!0},p(t,[r]){const s={};r&1&&(s.docs=t[0]),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}let D=function({params:{category:o,item:e}}){if(!(o in a))return{status:404};let n=a[o];for(let t=0;t<n.length;t++)if(n[t].name===e)return{props:{docs:n[t]}};if(!(e in n))return{status:404}};function y(o,e,n){let{docs:t}=e;return o.$$set=r=>{"docs"in r&&n(0,t=r.docs)},[t]}class S extends i{constructor(e){super(),c(this,e,y,$,m,{docs:0})}}export{S as default,D as load};
