function j(){}function ct(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function I(){return Object.create(null)}function $(t){t.forEach(Q)}function U(t){return typeof t=="function"}function Et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function At(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function lt(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function kt(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Nt(t,e,n,i){if(t){const s=V(t,e,n,i);return t[0](s)}}function V(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function St(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)u[l]=e.dirty[l]|s[l];return u}return e.dirty|s}return e.dirty}function Mt(t,e,n,i,s,u){if(s){const r=V(e,n,i,u);t.p(r,s)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ct(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ht(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Lt(t){return t==null?"":t}function qt(t,e,n){return t.set(n),e}function Ot(t){return t&&U(t.destroy)?t.destroy:j}let C=!1;function ut(){C=!0}function at(){C=!1}function ft(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=o?s+1:ft(1,s,_=>e[n[_]].claim_order,o))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,s=Math.max(d,s)}const u=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);u.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<u.length&&r[c].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(r[c],f)}}function dt(t,e){if(C){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){t.insertBefore(e,n||null)}function mt(t,e,n){C&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function Bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Dt(){return G(" ")}function Pt(){return G("")}function Gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function zt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:yt(t,i,e[i])}function pt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){Z(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||u.push(l.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ft(t,e,n){return et(t,e,n,X)}function It(t,e,n){return et(t,e,n,Y)}function gt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function Rt(t){return gt(t," ")}function R(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Wt(t,e){const n=R(t,"HTML_TAG_START",0),i=R(t,"HTML_TAG_END",n);if(n===i)return new W(void 0,e);Z(t);const s=t.splice(n,i-n+1);M(s[0]),M(s[s.length-1]);const u=s.slice(1,s.length-1);for(const r of u)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new W(u,e)}function Jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Kt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Qt(t,e,n){t.classList[n?"add":"remove"](e)}function Ut(t,e=document.body){return Array.from(e.querySelectorAll(t))}class xt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Y(n.nodeName):this.e=X(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class W extends xt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)mt(this.t,this.n[n],e)}}let b;function w(t){b=t}function v(){if(!b)throw new Error("Function called outside component initialization");return b}function Vt(t){v().$$.on_mount.push(t)}function Xt(t){v().$$.after_update.push(t)}function Yt(t){v().$$.on_destroy.push(t)}function Zt(t,e){return v().$$.context.set(t,e),e}function te(t){return v().$$.context.get(t)}const x=[],J=[],N=[],K=[],nt=Promise.resolve();let D=!1;function it(){D||(D=!0,nt.then(st))}function ee(){return it(),nt}function P(t){N.push(t)}const B=new Set;let k=0;function st(){const t=b;do{for(;k<x.length;){const e=x[k];k++,w(e),wt(e.$$)}for(w(null),x.length=0,k=0;J.length;)J.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];B.has(n)||(B.add(n),n())}N.length=0}while(x.length);for(;K.length;)K.pop()();D=!1,B.clear(),w(t)}function wt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const S=new Set;let g;function ne(){g={r:0,c:[],p:g}}function ie(){g.r||$(g.c),g=g.p}function rt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function bt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const se=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function re(t,e){bt(t,1,1,()=>{e.delete(t.key)})}function ce(t,e,n,i,s,u,r,l,c,o,f,d){let _=t.length,m=u.length,h=_;const H={};for(;h--;)H[t[h].key]=h;const T=[],L=new Map,q=new Map;for(h=m;h--;){const a=d(s,u,h),y=n(a);let p=r.get(y);p?i&&p.p(a,e):(p=o(y,a),p.c()),L.set(y,T[h]=p),y in H&&q.set(y,Math.abs(h-H[y]))}const z=new Set,F=new Set;function O(a){rt(a,1),a.m(l,f),r.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=T[m-1],y=t[_-1],p=a.key,E=y.key;a===y?(f=a.first,_--,m--):L.has(E)?!r.has(p)||z.has(p)?O(a):F.has(E)?_--:q.get(p)>q.get(E)?(F.add(p),O(a)):(z.add(E),_--):(c(y,r),_--)}for(;_--;){const a=t[_];L.has(a.key)||c(a,r)}for(;m;)O(T[m-1]);return T}function le(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],l=e[u];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[u]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function oe(t){return typeof t=="object"&&t!==null?t:{}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function $t(t,e,n,i){const{fragment:s,on_mount:u,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),i||P(()=>{const c=u.map(Q).filter(U);r?r.push(...c):$(c),t.$$.on_mount=[]}),l.forEach(P)}function vt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(x.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,i,s,u,r,l=[-1]){const c=b;w(t);const o=t.$$={fragment:null,ctx:null,props:u,update:j,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return o.ctx&&s(o.ctx[d],o.ctx[d]=h)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](h),f&&Tt(t,d)),_}):[],o.update(),f=!0,$(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){ut();const d=pt(e.target);o.fragment&&o.fragment.l(d),d.forEach(M)}else o.fragment&&o.fragment.c();e.intro&&rt(t.$$.fragment),$t(t,e.target,e.anchor,e.customElement),at(),st()}w(c)}class _e{$destroy(){vt(this,1),this.$destroy=j}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{U as $,oe as A,vt as B,ct as C,ee as D,j as E,te as F,Bt as G,dt as H,kt as I,W as J,Wt as K,P as L,Gt as M,ce as N,$ as O,se as P,re as Q,J as R,_e as S,Nt as T,Y as U,It as V,Qt as W,Ot as X,Mt as Y,jt as Z,St as _,pt as a,Yt as a0,qt as a1,At as a2,zt as a3,Lt as a4,Ut as a5,Ht as a6,Ct as a7,yt as b,Ft as c,M as d,X as e,Kt as f,mt as g,gt as h,fe as i,Jt as j,Dt as k,Pt as l,Rt as m,ne as n,bt as o,ie as p,rt as q,Zt as r,Et as s,G as t,Xt as u,Vt as v,ue as w,ae as x,$t as y,le as z};
