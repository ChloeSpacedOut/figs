import{S as N,i as S,s as E,e as y,t as k,c as v,a as T,h as g,d as f,b as A,X as B,g as p,K as C,j as $,l as h,E as d,J as I,N as J,W,Y as X,Z as Y,_ as Z,q as m,o as b,F as z,w as K,x as L,y as O,B as P,n as j,p as D,k as H,m as M}from"./index-06c54a84.js";import{w as Q,p as V}from"./translator-173f9b36.js";function F(a,t,s){const e=a.slice();return e[3]=t[s],e}function U(a){let t,s=a[3]+"",e;return{c(){t=y("span"),e=k(s),this.h()},l(l){t=v(l,"SPAN",{class:!0});var r=T(t);e=g(r,s),r.forEach(f),this.h()},h(){A(t,"class","svelte-1ifvv27"),B(t,"enabled",a[1].readerEnabled)},m(l,r){p(l,t,r),C(t,e)},p(l,r){r&1&&s!==(s=l[3]+"")&&$(e,s),r&2&&B(t,"enabled",l[1].readerEnabled)},d(l){l&&f(t)}}}function x(a){let t,s=a[0],e=[];for(let l=0;l<s.length;l+=1)e[l]=U(F(a,s,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=h()},l(l){for(let r=0;r<e.length;r+=1)e[r].l(l);t=h()},m(l,r){for(let n=0;n<e.length;n+=1)e[n].m(l,r);p(l,t,r)},p(l,[r]){if(r&3){s=l[0];let n;for(n=0;n<s.length;n+=1){const u=F(l,s,n);e[n]?e[n].p(u,r):(e[n]=U(u),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i:d,o:d,d(l){I(e,l),l&&f(t)}}}function ee(a,t,s){let e;J(a,Q,n=>s(1,e=n));let{value:l}=t,r=[];return a.$$set=n=>{"value"in n&&s(2,l=n.value)},a.$$.update=()=>{if(a.$$.dirty&5){let n=[",",". "];s(0,r=[]);let u=0;for(;;){let o=-1,i=0;for(let c=0;c<n.length;c++){let _=l.indexOf(n[c],u+50);_!==-1&&(_<o||o===-1)&&(o=_,i=n[c].length)}if(o===-1){r.push(l.substring(u));break}else r.push(l.substring(u,o+i)),u=o+i}}},[r,e,l]}class G extends N{constructor(t){super(),S(this,t,ee,x,E,{value:2})}}const te=a=>({value:a&2}),q=a=>({value:a[1]});function le(a){let t;const s=a[4].default,e=W(s,a,a[3],q);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,r){e&&e.m(l,r),t=!0},p(l,[r]){e&&e.p&&(!t||r&10)&&X(e,s,l,l[3],t?Z(s,l[3],r,te):Y(l[3]),q)},i(l){t||(m(e,l),t=!0)},o(l){b(e,l),t=!1},d(l){e&&e.d(l)}}}function se(a,t,s){let e,l=d,r=()=>(l(),l=z(i,c=>s(1,e=c)),i);a.$$.on_destroy.push(()=>l());let{$$slots:n={},$$scope:u}=t,{key:o}=t,i;return a.$$set=c=>{"key"in c&&s(2,o=c.key),"$$scope"in c&&s(3,u=c.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&r(s(0,i=V.createStore(o)))},[i,e,o,u,n]}class ne extends N{constructor(t){super(),S(this,t,se,le,E,{key:2})}}function re(a){let t=a[3].result+"",s;return{c(){s=k(t)},l(e){s=g(e,t)},m(e,l){p(e,s,l)},p(e,l){l&8&&t!==(t=e[3].result+"")&&$(s,t)},i:d,o:d,d(e){e&&f(s)}}}function ae(a){let t,s;return t=new G({props:{value:a[3].result}}),{c(){K(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){O(t,e,l),s=!0},p(e,l){const r={};l&8&&(r.value=e[3].result),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}function oe(a){let t,s,e,l,r,n=a[1]&&R();const u=[fe,ue],o=[];function i(c,_){return c[2]?0:1}return s=i(a),e=o[s]=u[s](a),{c(){n&&n.c(),t=H(),e.c(),l=h()},l(c){n&&n.l(c),t=M(c),e.l(c),l=h()},m(c,_){n&&n.m(c,_),p(c,t,_),o[s].m(c,_),p(c,l,_),r=!0},p(c,_){c[1]?n||(n=R(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null);let w=s;s=i(c),s===w?o[s].p(c,_):(j(),b(o[w],1,1,()=>{o[w]=null}),D(),e=o[s],e?e.p(c,_):(e=o[s]=u[s](c),e.c()),m(e,1),e.m(l.parentNode,l))},i(c){r||(m(e),r=!0)},o(c){b(e),r=!1},d(c){n&&n.d(c),c&&f(t),o[s].d(c),c&&f(l)}}}function ce(a){let t,s;return{c(){t=y("span"),s=k(a[0]),this.h()},l(e){t=v(e,"SPAN",{class:!0});var l=T(t);s=g(l,a[0]),l.forEach(f),this.h()},h(){A(t,"class","svelte-demb7k")},m(e,l){p(e,t,l),C(t,s)},p(e,l){l&1&&$(s,e[0])},i:d,o:d,d(e){e&&f(t)}}}function ie(a){let t;return{c(){t=k("Loading...")},l(s){t=g(s,"Loading...")},m(s,e){p(s,t,e)},p:d,i:d,o:d,d(s){s&&f(t)}}}function R(a){let t,s,e;return{c(){t=y("span"),s=k("Using a fallback language"),e=y("br"),this.h()},l(l){t=v(l,"SPAN",{class:!0});var r=T(t);s=g(r,"Using a fallback language"),r.forEach(f),e=v(l,"BR",{}),this.h()},h(){A(t,"class","svelte-demb7k")},m(l,r){p(l,t,r),C(t,s),p(l,e,r)},d(l){l&&f(t),l&&f(e)}}}function ue(a){let t=a[3].result+"",s;return{c(){s=k(t)},l(e){s=g(e,t)},m(e,l){p(e,s,l)},p(e,l){l&8&&t!==(t=e[3].result+"")&&$(s,t)},i:d,o:d,d(e){e&&f(s)}}}function fe(a){let t,s;return t=new G({props:{value:a[3].result}}),{c(){K(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){O(t,e,l),s=!0},p(e,l){const r={};l&8&&(r.value=e[3].result),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}function _e(a){let t,s,e,l;const r=[ie,ce,oe,ae,re],n=[];function u(o,i){return o[3].type==="PROCESSING"?0:o[3].type==="NOTFOUND"?1:o[3].type==="FALLBACK"?2:o[2]?3:4}return t=u(a),s=n[t]=r[t](a),{c(){s.c(),e=h()},l(o){s.l(o),e=h()},m(o,i){n[t].m(o,i),p(o,e,i),l=!0},p(o,i){let c=t;t=u(o),t===c?n[t].p(o,i):(j(),b(n[c],1,1,()=>{n[c]=null}),D(),s=n[t],s?s.p(o,i):(s=n[t]=r[t](o),s.c()),m(s,1),s.m(e.parentNode,e))},i(o){l||(m(s),l=!0)},o(o){b(s),l=!1},d(o){n[t].d(o),o&&f(e)}}}function de(a){let t,s;return t=new ne({props:{key:a[0],$$slots:{default:[_e,({value:e})=>({3:e}),({value:e})=>e?8:0]},$$scope:{ctx:a}}}),{c(){K(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){O(t,e,l),s=!0},p(e,[l]){const r={};l&1&&(r.key=e[0]),l&31&&(r.$$scope={dirty:l,ctx:e}),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}function pe(a,t,s){let{key:e}=t,{warn:l=!1}=t,{focus:r=!1}=t;return a.$$set=n=>{"key"in n&&s(0,e=n.key),"warn"in n&&s(1,l=n.warn),"focus"in n&&s(2,r=n.focus)},[e,l,r]}class he extends N{constructor(t){super(),S(this,t,pe,de,E,{key:0,warn:1,focus:2})}}export{ne as S,he as T};
