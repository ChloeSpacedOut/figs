import{F as rt,S as me,i as ve,s as be,w as re,x as ie,y as le,q as L,o as V,B as se,k as K,l as pe,m as x,g as Y,n as fe,p as ue,G as Ie,d as N,t as X,h as Z,j as de,e as z,c as W,a as q,b as P,H as B,I as He,E as ge,J as lt,K as st,L as at,M as ye,N as it,O as xe,P as ot,Q as ct,R as ft,T as ut,U as Fe,V as Le,f as _e,W as ke,X as ht,Y as pt,Z as _t,_ as gt,$ as dt,v as mt,a0 as vt,a1 as bt}from"../chunks/index-4c83912a.js";import{b as oe}from"../chunks/preload-helper-94699599.js";import{n as kt,c as Ne,S as $e,m as yt,f as $t,g as wt,r as Mt,e as Et,k as Oe,a as St,M as Tt,C as At,b as It,d as Ht,w as je}from"../chunks/ClassDescribe-be7a8da4.js";var Re="Pre-5",Nt="/figs/_app/assets/cheese-9bdf176f.png";function Ot(c,t){let e=[],n=c.getBoundingClientRect(),l=(k,_)=>{if(n.top+_.data.y<-_.data.scale*100||n.top+_.data.y>window.innerHeight+_.data.scale*100){k.remove();return}k.parentElement===null&&c.appendChild(k),k.setAttributeNS(null,"transform",`translate(${_.data.x},${_.data.y}) rotate(${_.data.angle}) scale(${_.data.scale}, ${_.data.scale})`)},u=()=>{if(n=c.getBoundingClientRect(),Math.random()>.99&&t){let k=document.createElementNS(kt,"image");k.setAttributeNS(null,"href",Nt),c.appendChild(k),e.push({element:k,data:{x:Math.random()*c.clientWidth,y:-50,ym:Math.random()*.1+1,scale:Math.random()+(Math.random()>.99?5:1),angle:Math.random()*360,anglem:(Math.random()-.5)*.1}})}for(let k=e.length-1;k>=0;k--){let _=e[k];_.data.y+=_.data.ym,_.data.angle+=_.data.anglem,_.data.y>c.clientHeight&&(e.splice(k,1),_.element.remove()),l(_.element,_)}t||e.length>0?v=requestAnimationFrame(u):v=null},v=requestAnimationFrame(u);return{destroy(){v&&cancelAnimationFrame(v)},update(k){v===null&&k&&(v=requestAnimationFrame(u)),t=k}}}const Bt=()=>{const c=rt("__svelte__");return{page:{subscribe:c.page.subscribe},navigating:{subscribe:c.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:c.navigating.subscribe}},session:c.session,updated:c.updated}},et={subscribe(c){return Bt().page.subscribe(c)}};function Ve(c,t,e){const n=c.slice();return n[4]=t[e],n}function Ge(c,t,e){const n=c.slice();return n[7]=t[e],n}function Ct(c){let t=c[7].name+"",e;return{c(){e=X(t)},l(n){e=Z(n,t)},m(n,l){Y(n,e,l)},p(n,l){l&2&&t!==(t=n[7].name+"")&&de(e,t)},d(n){n&&N(e)}}}function qe(c){let t,e;return t=new $e({props:{href:oe+c[0]+c[7].name,src:yt,$$slots:{default:[Ct]},$$scope:{ctx:c}}}),{c(){re(t.$$.fragment)},l(n){ie(t.$$.fragment,n)},m(n,l){le(t,n,l),e=!0},p(n,l){const u={};l&3&&(u.href=oe+n[0]+n[7].name),l&1026&&(u.$$scope={dirty:l,ctx:n}),t.$set(u)},i(n){e||(L(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){se(t,n)}}}function Dt(c){let t=c[4].name+"",e;return{c(){e=X(t)},l(n){e=Z(n,t)},m(n,l){Y(n,e,l)},p(n,l){l&4&&t!==(t=n[4].name+"")&&de(e,t)},d(n){n&&N(e)}}}function ze(c){let t,e;return t=new $e({props:{href:oe+c[0]+c[4].name,src:$t,$$slots:{default:[Dt]},$$scope:{ctx:c}}}),{c(){re(t.$$.fragment)},l(n){ie(t.$$.fragment,n)},m(n,l){le(t,n,l),e=!0},p(n,l){const u={};l&5&&(u.href=oe+n[0]+n[4].name),l&1028&&(u.$$scope={dirty:l,ctx:n}),t.$set(u)},i(n){e||(L(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){se(t,n)}}}function Pt(c){let t,e,n,l=c[1],u=[];for(let d=0;d<l.length;d+=1)u[d]=qe(Ge(c,l,d));const v=d=>V(u[d],1,1,()=>{u[d]=null});let k=c[2],_=[];for(let d=0;d<k.length;d+=1)_[d]=ze(Ve(c,k,d));const $=d=>V(_[d],1,1,()=>{_[d]=null});return{c(){for(let d=0;d<u.length;d+=1)u[d].c();t=K();for(let d=0;d<_.length;d+=1)_[d].c();e=pe()},l(d){for(let E=0;E<u.length;E+=1)u[E].l(d);t=x(d);for(let E=0;E<_.length;E+=1)_[E].l(d);e=pe()},m(d,E){for(let m=0;m<u.length;m+=1)u[m].m(d,E);Y(d,t,E);for(let m=0;m<_.length;m+=1)_[m].m(d,E);Y(d,e,E),n=!0},p(d,[E]){if(E&3){l=d[1];let m;for(m=0;m<l.length;m+=1){const T=Ge(d,l,m);u[m]?(u[m].p(T,E),L(u[m],1)):(u[m]=qe(T),u[m].c(),L(u[m],1),u[m].m(t.parentNode,t))}for(fe(),m=l.length;m<u.length;m+=1)v(m);ue()}if(E&5){k=d[2];let m;for(m=0;m<k.length;m+=1){const T=Ve(d,k,m);_[m]?(_[m].p(T,E),L(_[m],1)):(_[m]=ze(T),_[m].c(),L(_[m],1),_[m].m(e.parentNode,e))}for(fe(),m=k.length;m<_.length;m+=1)$(m);ue()}},i(d){if(!n){for(let E=0;E<l.length;E+=1)L(u[E]);for(let E=0;E<k.length;E+=1)L(_[E]);n=!0}},o(d){u=u.filter(Boolean);for(let E=0;E<u.length;E+=1)V(u[E]);_=_.filter(Boolean);for(let E=0;E<_.length;E+=1)V(_[E]);n=!1},d(d){Ie(u,d),d&&N(t),Ie(_,d),d&&N(e)}}}function Ft(c,t,e){let{klass:n}=t,l,u,{path:v}=t;return c.$$set=k=>{"klass"in k&&e(3,n=k.klass),"path"in k&&e(0,v=k.path)},c.$$.update=()=>{c.$$.dirty&8&&e(1,l=n.methods.sort(Ne)),c.$$.dirty&8&&e(2,u=n.fields.sort(Ne))},[v,l,u,n]}class Lt extends me{constructor(t){super(),ve(this,t,Ft,Pt,be,{klass:3,path:0})}}function We(c,t,e){const n=c.slice();return n[4]=t[e],n}function Je(c,t,e){const n=c.slice();return n[4]=t[e],n}function jt(c){let t,e;return t=new $e({props:{href:oe+"/all",src:Oe,$$slots:{default:[Vt]},$$scope:{ctx:c}}}),{c(){re(t.$$.fragment)},l(n){ie(t.$$.fragment,n)},m(n,l){le(t,n,l),e=!0},p(n,l){const u={};l&512&&(u.$$scope={dirty:l,ctx:n}),t.$set(u)},i(n){e||(L(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){se(t,n)}}}function Rt(c){let t,e;return t=new $e({props:{href:oe,src:Oe,$$slots:{default:[Gt]},$$scope:{ctx:c}}}),{c(){re(t.$$.fragment)},l(n){ie(t.$$.fragment,n)},m(n,l){le(t,n,l),e=!0},p(n,l){const u={};l&512&&(u.$$scope={dirty:l,ctx:n}),t.$set(u)},i(n){e||(L(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){se(t,n)}}}function Vt(c){let t;return{c(){t=X("Show everything")},l(e){t=Z(e,"Show everything")},m(e,n){Y(e,t,n)},d(e){e&&N(t)}}}function Gt(c){let t;return{c(){t=X("Show not everything")},l(e){t=Z(e,"Show not everything")},m(e,n){Y(e,t,n)},d(e){e&&N(t)}}}function qt(c){let t=c[4].name+"",e;return{c(){e=X(t)},l(n){e=Z(n,t)},m(n,l){Y(n,e,l)},p(n,l){l&4&&t!==(t=n[4].name+"")&&de(e,t)},d(n){n&&N(e)}}}function Ye(c){let t,e;return t=new $e({props:{href:oe+c[0]+c[4].name,src:Oe,$$slots:{default:[qt]},$$scope:{ctx:c}}}),{c(){re(t.$$.fragment)},l(n){ie(t.$$.fragment,n)},m(n,l){le(t,n,l),e=!0},p(n,l){const u={};l&5&&(u.href=oe+n[0]+n[4].name),l&516&&(u.$$scope={dirty:l,ctx:n}),t.$set(u)},i(n){e||(L(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){se(t,n)}}}function zt(c){let t=c[4].name+"",e;return{c(){e=X(t)},l(n){e=Z(n,t)},m(n,l){Y(n,e,l)},p(n,l){l&8&&t!==(t=n[4].name+"")&&de(e,t)},d(n){n&&N(e)}}}function Qe(c){let t,e;return t=new $e({props:{href:oe+c[0]+c[4].name,src:Oe,$$slots:{default:[zt]},$$scope:{ctx:c}}}),{c(){re(t.$$.fragment)},l(n){ie(t.$$.fragment,n)},m(n,l){le(t,n,l),e=!0},p(n,l){const u={};l&9&&(u.href=oe+n[0]+n[4].name),l&520&&(u.$$scope={dirty:l,ctx:n}),t.$set(u)},i(n){e||(L(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){se(t,n)}}}function Wt(c){let t,e,n,l,u,v,k,_,$,d,E,m,T,j,U,J,f,r,s,o,i;const h=[Rt,jt],g=[];function S(y,M){return y[1]?0:1}n=S(c),l=g[n]=h[n](c),d=new Lt({props:{klass:wt,path:c[0]}});let H=c[2],b=[];for(let y=0;y<H.length;y+=1)b[y]=Ye(Je(c,H,y));const O=y=>V(b[y],1,1,()=>{b[y]=null});let w=c[3],C=[];for(let y=0;y<w.length;y+=1)C[y]=Qe(We(c,w,y));const A=y=>V(C[y],1,1,()=>{C[y]=null});return{c(){t=z("div"),e=z("div"),l.c(),u=K(),v=z("span"),k=X("Global Objects"),_=K(),$=z("div"),re(d.$$.fragment),E=K(),m=z("span"),T=X("Miscellaneous Types"),j=K(),U=z("div");for(let y=0;y<b.length;y+=1)b[y].c();J=K(),f=z("span"),r=X("Miscellaneous Enums"),s=K(),o=z("div");for(let y=0;y<C.length;y+=1)C[y].c();this.h()},l(y){t=W(y,"DIV",{class:!0});var M=q(t);e=W(M,"DIV",{class:!0});var F=q(e);l.l(F),F.forEach(N),u=x(M),v=W(M,"SPAN",{class:!0});var te=q(v);k=Z(te,"Global Objects"),te.forEach(N),_=x(M),$=W(M,"DIV",{class:!0});var I=q($);ie(d.$$.fragment,I),I.forEach(N),E=x(M),m=W(M,"SPAN",{class:!0});var Q=q(m);T=Z(Q,"Miscellaneous Types"),Q.forEach(N),j=x(M),U=W(M,"DIV",{class:!0});var ne=q(U);for(let G=0;G<b.length;G+=1)b[G].l(ne);ne.forEach(N),J=x(M),f=W(M,"SPAN",{class:!0});var ce=q(f);r=Z(ce,"Miscellaneous Enums"),ce.forEach(N),s=x(M),o=W(M,"DIV",{class:!0});var ae=q(o);for(let G=0;G<C.length;G+=1)C[G].l(ae);ae.forEach(N),M.forEach(N),this.h()},h(){P(e,"class","fields-container svelte-10srbja"),P(v,"class","tab svelte-10srbja"),P($,"class","fields-container svelte-10srbja"),P(m,"class","tab svelte-10srbja"),P(U,"class","fields-container svelte-10srbja"),P(f,"class","tab svelte-10srbja"),P(o,"class","fields-container svelte-10srbja"),P(t,"class","sidebar-viewer svelte-10srbja")},m(y,M){Y(y,t,M),B(t,e),g[n].m(e,null),B(t,u),B(t,v),B(v,k),B(t,_),B(t,$),le(d,$,null),B(t,E),B(t,m),B(m,T),B(t,j),B(t,U);for(let F=0;F<b.length;F+=1)b[F].m(U,null);B(t,J),B(t,f),B(f,r),B(t,s),B(t,o);for(let F=0;F<C.length;F+=1)C[F].m(o,null);i=!0},p(y,[M]){let F=n;n=S(y),n===F?g[n].p(y,M):(fe(),V(g[F],1,1,()=>{g[F]=null}),ue(),l=g[n],l?l.p(y,M):(l=g[n]=h[n](y),l.c()),L(l,1),l.m(e,null));const te={};if(M&1&&(te.path=y[0]),d.$set(te),M&5){H=y[2];let I;for(I=0;I<H.length;I+=1){const Q=Je(y,H,I);b[I]?(b[I].p(Q,M),L(b[I],1)):(b[I]=Ye(Q),b[I].c(),L(b[I],1),b[I].m(U,null))}for(fe(),I=H.length;I<b.length;I+=1)O(I);ue()}if(M&9){w=y[3];let I;for(I=0;I<w.length;I+=1){const Q=We(y,w,I);C[I]?(C[I].p(Q,M),L(C[I],1)):(C[I]=Qe(Q),C[I].c(),L(C[I],1),C[I].m(o,null))}for(fe(),I=w.length;I<C.length;I+=1)A(I);ue()}},i(y){if(!i){L(l),L(d.$$.fragment,y);for(let M=0;M<H.length;M+=1)L(b[M]);for(let M=0;M<w.length;M+=1)L(C[M]);i=!0}},o(y){V(l),V(d.$$.fragment,y),b=b.filter(Boolean);for(let M=0;M<b.length;M+=1)V(b[M]);C=C.filter(Boolean);for(let M=0;M<C.length;M+=1)V(C[M]);i=!1},d(y){y&&N(t),g[n].d(),se(d),Ie(b,y),Ie(C,y)}}}function Jt(c,t,e){let n,l,{path:u}=t,{everything:v}=t;return c.$$set=k=>{"path"in k&&e(0,u=k.path),"everything"in k&&e(1,v=k.everything)},e(2,n=Object.values(Mt).sort(Ne)),e(3,l=Object.values(Et).sort(Ne)),[u,v,n,l]}class Yt extends me{constructor(t){super(),ve(this,t,Jt,Wt,be,{path:0,everything:1})}}function Qt(c){let t;return{c(){t=X("Not Found")},l(e){t=Z(e,"Not Found")},m(e,n){Y(e,t,n)},p:ge,i:ge,o:ge,d(e){e&&N(t)}}}function Ut(c){let t,e,n,l;const u=[Zt,Xt],v=[];function k(_,$){return _[0].type==="class"?0:_[0].type==="method"?1:-1}return~(t=k(c))&&(e=v[t]=u[t](c)),{c(){e&&e.c(),n=pe()},l(_){e&&e.l(_),n=pe()},m(_,$){~t&&v[t].m(_,$),Y(_,n,$),l=!0},p(_,$){let d=t;t=k(_),t===d?~t&&v[t].p(_,$):(e&&(fe(),V(v[d],1,1,()=>{v[d]=null}),ue()),~t?(e=v[t],e?e.p(_,$):(e=v[t]=u[t](_),e.c()),L(e,1),e.m(n.parentNode,n)):e=null)},i(_){l||(L(e),l=!0)},o(_){V(e),l=!1},d(_){~t&&v[t].d(_),_&&N(n)}}}function Xt(c){let t,e;return t=new Tt({props:{hostClass:c[0].klass,method:c[0].value,forceSmall:!0,path:c[1]?"/all#":"/"}}),{c(){re(t.$$.fragment)},l(n){ie(t.$$.fragment,n)},m(n,l){le(t,n,l),e=!0},p(n,l){const u={};l&1&&(u.hostClass=n[0].klass),l&1&&(u.method=n[0].value),l&2&&(u.path=n[1]?"/all#":"/"),t.$set(u)},i(n){e||(L(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){se(t,n)}}}function Zt(c){let t,e;return t=new At({props:{klass:c[0].value,forceSmall:!0,path:c[1]?"/all#":"/"}}),{c(){re(t.$$.fragment)},l(n){ie(t.$$.fragment,n)},m(n,l){le(t,n,l),e=!0},p(n,l){const u={};l&1&&(u.klass=n[0].value),l&2&&(u.path=n[1]?"/all#":"/"),t.$set(u)},i(n){e||(L(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){se(t,n)}}}function Kt(c){let t,e,n,l;const u=[Ut,Qt],v=[];function k(_,$){return _[0]!==null?0:1}return t=k(c),e=v[t]=u[t](c),{c(){e.c(),n=pe()},l(_){e.l(_),n=pe()},m(_,$){v[t].m(_,$),Y(_,n,$),l=!0},p(_,[$]){let d=t;t=k(_),t===d?v[t].p(_,$):(fe(),V(v[d],1,1,()=>{v[d]=null}),ue(),e=v[t],e?e.p(_,$):(e=v[t]=u[t](_),e.c()),L(e,1),e.m(n.parentNode,n))},i(_){l||(L(e),l=!0)},o(_){V(e),l=!1},d(_){v[t].d(_),_&&N(n)}}}function xt(c,t,e){let n;He(c,et,k=>e(3,n=k));let{name:l}=t,u,v;return c.$$set=k=>{"name"in k&&e(2,l=k.name)},c.$$.update=()=>{c.$$.dirty&4&&e(0,u=St(l)),c.$$.dirty&8&&e(1,v=n.stuff.navigation==="hashed")},[u,v,l,n]}class en extends me{constructor(t){super(),ve(this,t,xt,Kt,be,{name:2})}}var tn=Object.freeze(Object.defineProperty({__proto__:null,default:en},Symbol.toStringTag,{value:"Module"})),Be={},tt={},nn={},rn=Object.freeze(Object.defineProperty({__proto__:null,default:nn},Symbol.toStringTag,{value:"Module"})),ln=It(rn);(function(c){(function(t){var e=t.Markdown=function(f){switch(typeof f){case"undefined":this.dialect=e.dialects.Gruber;break;case"object":this.dialect=f;break;default:if(f in e.dialects)this.dialect=e.dialects[f];else throw new Error("Unknown Markdown dialect '"+String(f)+"'");break}this.em_state=[],this.strong_state=[],this.debug_indent=""};t.parse=function(f,r){var s=new e(r);return s.toTree(f)},t.toHTML=function(r,s,o){var i=t.toHTMLTree(r,s,o);return t.renderJsonML(i)},t.toHTMLTree=function(r,s,o){typeof r=="string"&&(r=this.parse(r,s));var i=m(r),h={};i&&i.references&&(h=i.references);var g=U(r,h,o);return J(g),g};function n(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function l(){var f=ln;return"Markdown.mk_block( "+f.inspect(this.toString())+", "+f.inspect(this.trailing)+", "+f.inspect(this.lineNumber)+" )"}var u=e.mk_block=function(f,r,s){arguments.length==1&&(r=`

`);var o=new String(f);return o.trailing=r,o.inspect=l,o.toSource=n,s!=null&&(o.lineNumber=s),o};function v(f){for(var r=0,s=-1;(s=f.indexOf(`
`,s+1))!==-1;)r++;return r}e.prototype.split_blocks=function(r,s){r=r.replace(/(\r\n|\n|\r)/g,`
`);var o=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,i=[],h,g=1;for((h=/^(\s*\n)/.exec(r))!=null&&(g+=v(h[0]),o.lastIndex=h[0].length);(h=o.exec(r))!==null;)h[2]==`
#`&&(h[2]=`
`,o.lastIndex--),i.push(u(h[1],h[2],g)),g+=v(h[0]);return i},e.prototype.processBlock=function(r,s){var o=this.dialect.block,i=o.__order__;if("__call__"in o)return o.__call__.call(this,r,s);for(var h=0;h<i.length;h++){var g=o[i[h]].call(this,r,s);if(g)return(!$(g)||g.length>0&&!$(g[0]))&&this.debug(i[h],"didn't return a proper array"),g}return[]},e.prototype.processInline=function(r){return this.dialect.inline.__call__.call(this,String(r))},e.prototype.toTree=function(r,s){var o=r instanceof Array?r:this.split_blocks(r),i=this.tree;try{this.tree=s||this.tree||["markdown"];e:for(;o.length;){var h=this.processBlock(o.shift(),o);if(!h.length)continue e;this.tree.push.apply(this.tree,h)}return this.tree}finally{s&&(this.tree=i)}},e.prototype.debug=function(){var f=Array.prototype.slice.call(arguments);f.unshift(this.debug_indent),typeof print!="undefined"&&print.apply(print,f),typeof console!="undefined"&&typeof console.log!="undefined"&&console.log.apply(null,f)},e.prototype.loop_re_over_block=function(f,r,s){for(var o,i=r.valueOf();i.length&&(o=f.exec(i))!=null;)i=i.substr(o[0].length),s.call(this,o);return i},e.dialects={},e.dialects.Gruber={block:{atxHeader:function(r,s){var o=r.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(!!o){var i=["header",{level:o[1].length}];return Array.prototype.push.apply(i,this.processInline(o[2])),o[0].length<r.length&&s.unshift(u(r.substr(o[0].length),r.trailing,r.lineNumber+2)),[i]}},setextHeader:function(r,s){var o=r.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(!!o){var i=o[2]==="="?1:2,h=["header",{level:i},o[1]];return o[0].length<r.length&&s.unshift(u(r.substr(o[0].length),r.trailing,r.lineNumber+2)),[h]}},code:function(r,s){var o=[],i=/^(?: {0,3}\t| {4})(.*)\n?/;if(!r.match(i))return;e:do{var h=this.loop_re_over_block(i,r.valueOf(),function(g){o.push(g[1])});if(h.length){s.unshift(u(h,r.trailing));break e}else if(s.length){if(!s[0].match(i))break e;o.push(r.trailing.replace(/[^\n]/g,"").substring(2)),r=s.shift()}else break e}while(!0);return[["code_block",o.join(`
`)]]},horizRule:function(r,s){var o=r.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(!!o){var i=[["hr"]];return o[1]&&i.unshift.apply(i,this.processBlock(o[1],[])),o[3]&&s.unshift(u(o[3])),i}},lists:function(){var f="[*+-]|\\d+\\.",r=/[*+-]/,s=new RegExp("^( {0,3})("+f+")[ 	]+"),o="(?: {0,3}\\t| {4})";function i(b){return new RegExp("(?:^("+o+"{0,"+b+"} {0,3})("+f+")\\s+)|(^"+o+"{0,"+(b-1)+"}[ ]{0,4})")}function h(b){return b.replace(/ {0,3}\t/g,"    ")}function g(b,O,w,C){if(O){b.push(["para"].concat(w));return}var A=b[b.length-1]instanceof Array&&b[b.length-1][0]=="para"?b[b.length-1]:b;C&&b.length>1&&w.unshift(C);for(var y=0;y<w.length;y++){var M=w[y],F=typeof M=="string";F&&A.length>1&&typeof A[A.length-1]=="string"?A[A.length-1]+=M:A.push(M)}}function S(b,O){for(var w=new RegExp("^("+o+"{"+b+"}.*?\\n?)*$"),C=new RegExp("^"+o+"{"+b+"}","gm"),A=[];O.length>0&&w.exec(O[0]);){var y=O.shift(),M=y.replace(C,"");A.push(u(M,y.trailing,y.lineNumber))}return A}function H(b,O,w){var C=b.list,A=C[C.length-1];if(!(A[1]instanceof Array&&A[1][0]=="para"))if(O+1==w.length)A.push(["para"].concat(A.splice(1,A.length-1)));else{var y=A.pop();A.push(["para"].concat(A.splice(1,A.length-1)),y)}}return function(b,O){var w=b.match(s);if(!w)return;function C(he){var Se=r.exec(he[2])?["bulletlist"]:["numberlist"];return A.push({list:Se,indent:he[1]}),Se}var A=[],y=C(w),M,F=!1,te=[A[0].list],I;e:for(;;){for(var Q=b.split(/(?=\n)/),ne="",ce=0;ce<Q.length;ce++){var ae="",G=Q[ce].replace(/^\n/,function(he){return ae=he,""}),D=i(A.length);if(w=G.match(D),w[1]!==void 0){ne.length&&(g(M,F,this.processInline(ne),ae),F=!1,ne=""),w[1]=h(w[1]);var R=Math.floor(w[1].length/4)+1;if(R>A.length)y=C(w),M.push(y),M=y[1]=["listitem"];else{var ee=!1;for(I=0;I<A.length;I++)if(A[I].indent==w[1]){y=A[I].list,A.splice(I+1,A.length-(I+1)),ee=!0;break}ee||(R++,R<=A.length?(A.splice(R,A.length-R),y=A[R-1].list):(y=C(w),M.push(y))),M=["listitem"],y.push(M)}ae=""}G.length>w[0].length&&(ne+=ae+G.substr(w[0].length))}ne.length&&(g(M,F,this.processInline(ne),ae),F=!1,ne="");var we=S(A.length,O);we.length>0&&(d(A,H,this),M.push.apply(M,this.toTree(we,[])));var Me=O[0]&&O[0].valueOf()||"";if(Me.match(s)||Me.match(/^ /)){b=O.shift();var Ee=this.dialect.block.horizRule(b,O);if(Ee){te.push.apply(te,Ee);break}d(A,H,this),F=!0;continue e}break}return te}}(),blockquote:function(r,s){if(!!r.match(/^>/m)){var o=[];if(r[0]!=">"){for(var i=r.split(/\n/),h=[],g=r.lineNumber;i.length&&i[0][0]!=">";)h.push(i.shift()),g++;var S=u(h.join(`
`),`
`,r.lineNumber);o.push.apply(o,this.processBlock(S,[])),r=u(i.join(`
`),r.trailing,g)}for(;s.length&&s[0][0]==">";){var H=s.shift();r=u(r+r.trailing+H,H.trailing,r.lineNumber)}var b=r.replace(/^> ?/gm,"");this.tree;var O=this.toTree(b,["blockquote"]),w=m(O);return w&&w.references&&(delete w.references,E(w)&&O.splice(1,1)),o.push(O),o}},referenceDefn:function(r,s){var o=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(!!r.match(o)){m(this.tree)||this.tree.splice(1,0,{});var i=m(this.tree);i.references===void 0&&(i.references={});var h=this.loop_re_over_block(o,r,function(g){g[2]&&g[2][0]=="<"&&g[2][g[2].length-1]==">"&&(g[2]=g[2].substring(1,g[2].length-1));var S=i.references[g[1].toLowerCase()]={href:g[2]};g[4]!==void 0?S.title=g[4]:g[5]!==void 0&&(S.title=g[5])});return h.length&&s.unshift(u(h,r.trailing)),[]}},para:function(r,s){return[["para"].concat(this.processInline(r))]}}},e.dialects.Gruber.inline={__oneElement__:function(r,s,o){var i,g;s=s||this.dialect.inline.__patterns__;var h=new RegExp("([\\s\\S]*?)("+(s.source||s)+")");if(i=h.exec(r),i){if(i[1])return[i[1].length,i[1]]}else return[r.length,r];var g;return i[2]in this.dialect.inline&&(g=this.dialect.inline[i[2]].call(this,r.substr(i.index),i,o||[])),g=g||[i[2].length,i[2]],g},__call__:function(r,s){var o=[],i;function h(g){typeof g=="string"&&typeof o[o.length-1]=="string"?o[o.length-1]+=g:o.push(g)}for(;r.length>0;)i=this.dialect.inline.__oneElement__.call(this,r,s,o),r=r.substr(i.shift()),d(i,h);return o},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(r){return this.dialect.inline.__escape__.exec(r)?[2,r.charAt(1)]:[1,"\\"]},"![":function(r){var s=r.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(s){s[2]&&s[2][0]=="<"&&s[2][s[2].length-1]==">"&&(s[2]=s[2].substring(1,s[2].length-1)),s[2]=this.dialect.inline.__call__.call(this,s[2],/\\/)[0];var o={alt:s[1],href:s[2]||""};return s[4]!==void 0&&(o.title=s[4]),[s[0].length,["img",o]]}return s=r.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),s?[s[0].length,["img_ref",{alt:s[1],ref:s[2].toLowerCase(),original:s[0]}]]:[2,"!["]},"[":function(r){var s=String(r),o=e.DialectHelpers.inline_until_char.call(this,r.substr(1),"]");if(!o)return[1,"["];var i=1+o[0],h=o[1],g,S;r=r.substr(i);var H=r.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(H){var b=H[1];if(i+=H[0].length,b&&b[0]=="<"&&b[b.length-1]==">"&&(b=b.substring(1,b.length-1)),!H[3])for(var O=1,w=0;w<b.length;w++)switch(b[w]){case"(":O++;break;case")":--O==0&&(i-=b.length-w,b=b.substring(0,w));break}return b=this.dialect.inline.__call__.call(this,b,/\\/)[0],S={href:b||""},H[3]!==void 0&&(S.title=H[3]),g=["link",S].concat(h),[i,g]}return H=r.match(/^\s*\[(.*?)\]/),H?(i+=H[0].length,S={ref:(H[1]||String(h)).toLowerCase(),original:s.substr(0,i)},g=["link_ref",S].concat(h),[i,g]):h.length==1&&typeof h[0]=="string"?(S={ref:h[0].toLowerCase(),original:s.substr(0,i)},g=["link_ref",S,h[0]],[i,g]):[1,"["]},"<":function(r){var s;return(s=r.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))!=null?s[3]?[s[0].length,["link",{href:"mailto:"+s[3]},s[3]]]:s[2]=="mailto"?[s[0].length,["link",{href:s[1]},s[1].substr(7)]]:[s[0].length,["link",{href:s[1]},s[1]]]:[1,"<"]},"`":function(r){var s=r.match(/(`+)(([\s\S]*?)\1)/);return s&&s[2]?[s[1].length+s[2].length,["inlinecode",s[3]]]:[1,"`"]},"  \n":function(r){return[3,["linebreak"]]}};function k(f,r){var s=f+"_state",o=f=="strong"?"em_state":"strong_state";function i(h){this.len_after=h,this.name="close_"+r}return function(h,g){if(this[s][0]==r)return this[s].shift(),[h.length,new i(h.length-r.length)];var S=this[o].slice(),H=this[s].slice();this[s].unshift(r);var b=this.processInline(h.substr(r.length)),O=b[b.length-1];if(this[s].shift(),O instanceof i){b.pop();var w=h.length-O.len_after;return[w,[f].concat(b)]}else return this[o]=S,this[s]=H,[r.length,r]}}e.dialects.Gruber.inline["**"]=k("strong","**"),e.dialects.Gruber.inline.__=k("strong","__"),e.dialects.Gruber.inline["*"]=k("em","*"),e.dialects.Gruber.inline._=k("em","_"),e.buildBlockOrder=function(f){var r=[];for(var s in f)s=="__order__"||s=="__call__"||r.push(s);f.__order__=r},e.buildInlinePatterns=function(f){var r=[];for(var s in f)if(!s.match(/^__.*__$/)){var o=s.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");r.push(s.length==1?o:"(?:"+o+")")}r=r.join("|"),f.__patterns__=r;var i=f.__call__;f.__call__=function(h,g){return g!=null?i.call(this,h,g):i.call(this,h,r)}},e.DialectHelpers={},e.DialectHelpers.inline_until_char=function(f,r){for(var s=0,o=[];;){if(f.charAt(s)==r)return s++,[s,o];if(s>=f.length)return null;var i=this.dialect.inline.__oneElement__.call(this,f.substr(s));s+=i[0],o.push.apply(o,i.slice(1))}},e.subclassDialect=function(f){function r(){}r.prototype=f.block;function s(){}return s.prototype=f.inline,{block:new r,inline:new s}},e.buildBlockOrder(e.dialects.Gruber.block),e.buildInlinePatterns(e.dialects.Gruber.inline),e.dialects.Maruku=e.subclassDialect(e.dialects.Gruber),e.dialects.Maruku.processMetaHash=function(r){for(var s=_(r),o={},i=0;i<s.length;++i)if(/^#/.test(s[i]))o.id=s[i].substring(1);else if(/^\./.test(s[i]))o.class?o.class=o.class+s[i].replace(/./," "):o.class=s[i].substring(1);else if(/\=/.test(s[i])){var h=s[i].split(/\=/);o[h[0]]=h[1]}return o};function _(f){for(var r=f.split(""),s=[""],o=!1;r.length;){var i=r.shift();switch(i){case" ":o?s[s.length-1]+=i:s.push("");break;case"'":case'"':o=!o;break;case"\\":i=r.shift();default:s[s.length-1]+=i;break}}return s}e.dialects.Maruku.block.document_meta=function(r,s){if(!(r.lineNumber>1)&&!!r.match(/^(?:\w+:.*\n)*\w+:.*$/)){m(this.tree)||this.tree.splice(1,0,{});var o=r.split(/\n/);for(p in o){var i=o[p].match(/(\w+):\s*(.*)$/),h=i[1].toLowerCase(),g=i[2];this.tree[1][h]=g}return[]}},e.dialects.Maruku.block.block_meta=function(r,s){var o=r.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(!!o){var i=this.dialect.processMetaHash(o[2]),h;if(o[1]===""){var g=this.tree[this.tree.length-1];if(h=m(g),typeof g=="string")return;h||(h={},g.splice(1,0,h));for(a in i)h[a]=i[a];return[]}var S=r.replace(/\n.*$/,""),H=this.processBlock(S,[]);h=m(H[0]),h||(h={},H[0].splice(1,0,h));for(a in i)h[a]=i[a];return H}},e.dialects.Maruku.block.definition_list=function(r,s){var o=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"],h,g;if(g=r.match(o)){for(var S=[r];s.length&&o.exec(s[0]);)S.push(s.shift());for(var H=0;H<S.length;++H){var g=S[H].match(o),b=g[1].replace(/\n$/,"").split(/\n/),O=g[2].split(/\n:\s+/);for(h=0;h<b.length;++h)i.push(["dt",b[h]]);for(h=0;h<O.length;++h)i.push(["dd"].concat(this.processInline(O[h].replace(/(\n)\s+/,"$1"))))}}else return;return[i]},e.dialects.Maruku.block.table=function(r,s){var o=function(O,w){w=w||"\\s",w.match(/^[\\|\[\]{}?*.+^$]$/)&&(w="\\"+w);for(var C=[],A=new RegExp("^((?:\\\\.|[^\\\\"+w+"])*)"+w+"(.*)"),y;y=O.match(A);)C.push(y[1]),O=y[2];return C.push(O),C},i=/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,h=/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,g,S;if(S=r.match(i))S[3]=S[3].replace(/^\s*\|/gm,"");else if(!(S=r.match(h)))return;var H=["table",["thead",["tr"]],["tbody"]];S[2]=S[2].replace(/\|\s*$/,"").split("|");var b=[];for(d(S[2],function(O){O.match(/^\s*-+:\s*$/)?b.push({align:"right"}):O.match(/^\s*:-+\s*$/)?b.push({align:"left"}):O.match(/^\s*:-+:\s*$/)?b.push({align:"center"}):b.push({})}),S[1]=o(S[1].replace(/\|\s*$/,""),"|"),g=0;g<S[1].length;g++)H[1][1].push(["th",b[g]||{}].concat(this.processInline(S[1][g].trim())));return d(S[3].replace(/\|\s*$/mg,"").split(`
`),function(O){var w=["tr"];for(O=o(O,"|"),g=0;g<O.length;g++)w.push(["td",b[g]||{}].concat(this.processInline(O[g].trim())));H[2].push(w)},this),[H]},e.dialects.Maruku.inline["{:"]=function(r,s,o){if(!o.length)return[2,"{:"];var i=o[o.length-1];if(typeof i=="string")return[2,"{:"];var h=r.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!h)return[2,"{:"];var g=this.dialect.processMetaHash(h[1]),S=m(i);S||(S={},i.splice(1,0,S));for(var H in g)S[H]=g[H];return[h[0].length,""]},e.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,e.buildBlockOrder(e.dialects.Maruku.block),e.buildInlinePatterns(e.dialects.Maruku.inline);var $=Array.isArray||function(f){return Object.prototype.toString.call(f)=="[object Array]"},d;Array.prototype.forEach?d=function(f,r,s){return f.forEach(r,s)}:d=function(f,r,s){for(var o=0;o<f.length;o++)r.call(s||f,f[o],o,f)};var E=function(f){for(var r in f)if(hasOwnProperty.call(f,r))return!1;return!0};function m(f){return $(f)&&f.length>1&&typeof f[1]=="object"&&!$(f[1])?f[1]:void 0}t.renderJsonML=function(f,r){r=r||{},r.root=r.root||!1;var s=[];if(r.root)s.push(j(f));else for(f.shift(),f.length&&typeof f[0]=="object"&&!(f[0]instanceof Array)&&f.shift();f.length;)s.push(j(f.shift()));return s.join(`

`)};function T(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function j(f){if(typeof f=="string")return T(f);var r=f.shift(),s={},o=[];for(f.length&&typeof f[0]=="object"&&!(f[0]instanceof Array)&&(s=f.shift());f.length;)o.push(j(f.shift()));var i="";for(var h in s)i+=" "+h+'="'+T(s[h])+'"';return r=="img"||r=="br"||r=="hr"?"<"+r+i+"/>":"<"+r+i+">"+o.join("")+"</"+r+">"}function U(f,r,s){var o;s=s||{};var i=f.slice(0);typeof s.preprocessTreeNode=="function"&&(i=s.preprocessTreeNode(i,r));var h=m(i);if(h){i[1]={};for(o in h)i[1][o]=h[o];h=i[1]}if(typeof i=="string")return i;switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level;break;case"bulletlist":i[0]="ul";break;case"numberlist":i[0]="ol";break;case"listitem":i[0]="li";break;case"para":i[0]="p";break;case"markdown":i[0]="html",h&&delete h.references;break;case"code_block":i[0]="pre",o=h?2:1;var g=["code"];g.push.apply(g,i.splice(o,i.length-o)),i[o]=g;break;case"inlinecode":i[0]="code";break;case"img":i[1].src=i[1].href,delete i[1].href;break;case"linebreak":i[0]="br";break;case"link":i[0]="a";break;case"link_ref":i[0]="a";var S=r[h.ref];if(S)delete h.ref,h.href=S.href,S.title&&(h.title=S.title),delete h.original;else return h.original;break;case"img_ref":i[0]="img";var S=r[h.ref];if(S)delete h.ref,h.src=S.href,S.title&&(h.title=S.title),delete h.original;else return h.original;break}if(o=1,h){for(var H in i[1]){o=2;break}o===1&&i.splice(o,1)}for(;o<i.length;++o)i[o]=U(i[o],r,s);return i}function J(f){for(var r=m(f)?2:1;r<f.length;)typeof f[r]=="string"?r+1<f.length&&typeof f[r+1]=="string"?f[r]+=f.splice(r+1,1)[0]:++r:(J(f[r]),++r)}})(function(){return c}())})(tt);(function(c){c.markdown=tt,c.parse=c.markdown.toHTML})(Be);function sn(c){let t,e=Be.markdown.toHTML(c[0])+"",n;return{c(){t=new lt(!1),n=pe(),this.h()},l(l){t=st(l,!1),n=pe(),this.h()},h(){t.a=n},m(l,u){t.m(e,l,u),Y(l,n,u)},p(l,[u]){u&1&&e!==(e=Be.markdown.toHTML(l[0])+"")&&t.p(e)},i:ge,o:ge,d(l){l&&N(n),l&&t.d()}}}function an(c,t,e){let{name:n}=t;return c.$$set=l=>{"name"in l&&e(0,n=l.name)},[n]}class on extends me{constructor(t){super(),ve(this,t,an,sn,be,{name:0})}}var cn=Object.freeze(Object.defineProperty({__proto__:null,default:on},Symbol.toStringTag,{value:"Module"}));function fn(c){let t,e,n;return{c(){t=z("h1"),e=X(c[0]),n=X(`

A lua Primitive`)},l(l){t=W(l,"H1",{});var u=q(t);e=Z(u,c[0]),u.forEach(N),n=Z(l,`

A lua Primitive`)},m(l,u){Y(l,t,u),B(t,e),Y(l,n,u)},p(l,[u]){u&1&&de(e,l[0])},i:ge,o:ge,d(l){l&&N(t),l&&N(n)}}}function un(c,t,e){let{name:n}=t;return c.$$set=l=>{"name"in l&&e(0,n=l.name)},[n]}class hn extends me{constructor(t){super(),ve(this,t,un,fn,be,{name:0})}}var pn=Object.freeze(Object.defineProperty({__proto__:null,default:hn},Symbol.toStringTag,{value:"Module"}));const{clearTimeout:Ue,setTimeout:Xe,window:Ce}=ot;function Ze(c,t,e){const n=c.slice();return n[16]=t[e],n}function Ke(c,t){let e,n,l,u,v;var k=t[2][t[16].type];function _($){return{props:{name:$[16].name}}}return k&&(l=new k(_(t))),{key:c,first:null,c(){e=z("div"),n=z("div"),l&&re(l.$$.fragment),u=K(),this.h()},l($){e=W($,"DIV",{class:!0});var d=q(e);n=W(d,"DIV",{class:!0});var E=q(n);l&&ie(l.$$.fragment,E),E.forEach(N),u=x(d),d.forEach(N),this.h()},h(){P(n,"class","popup-content svelte-1atb9vj"),P(e,"class","popup svelte-1atb9vj"),this.first=e},m($,d){Y($,e,d),B(e,n),l&&le(l,n,null),B(e,u),v=!0},p($,d){t=$;const E={};if(d&16&&(E.name=t[16].name),k!==(k=t[2][t[16].type])){if(l){fe();const m=l;V(m.$$.fragment,1,0,()=>{se(m,1)}),ue()}k?(l=new k(_(t)),re(l.$$.fragment),L(l.$$.fragment,1),le(l,n,null)):l=null}else k&&l.$set(E)},i($){v||(l&&L(l.$$.fragment,$),v=!0)},o($){l&&V(l.$$.fragment,$),v=!1},d($){$&&N(e),l&&se(l)}}}function _n(c){let t=!1,e=()=>{t=!1},n,l,u=[],v=new Map,k,_,$;at(c[7]);let d=c[4];const E=m=>m[16].id;for(let m=0;m<d.length;m+=1){let T=Ze(c,d,m),j=E(T);v.set(j,u[m]=Ke(j,T))}return{c(){l=z("div");for(let m=0;m<u.length;m+=1)u[m].c();this.h()},l(m){l=W(m,"DIV",{class:!0});var T=q(l);for(let j=0;j<u.length;j+=1)u[j].l(T);T.forEach(N),this.h()},h(){P(l,"class","hint-overlay svelte-1atb9vj")},m(m,T){Y(m,l,T);for(let j=0;j<u.length;j+=1)u[j].m(l,null);c[8](l),k=!0,_||($=[ye(Ce,"scroll",()=>{t=!0,Ue(n),n=Xe(e,100),c[7]()}),ye(l,"mouseover",c[9]),ye(l,"mouseout",c[10])],_=!0)},p(m,[T]){T&2&&!t&&(t=!0,Ue(n),scrollTo(Ce.pageXOffset,m[1]),n=Xe(e,100)),T&20&&(d=m[4],fe(),u=it(u,T,E,1,m,d,v,l,ct,Ke,null,Ze),ue())},i(m){if(!k){for(let T=0;T<d.length;T+=1)L(u[T]);k=!0}},o(m){for(let T=0;T<u.length;T+=1)V(u[T]);k=!1},d(m){m&&N(l);for(let T=0;T<u.length;T+=1)u[T].d();c[8](null),_=!1,xe($)}}}function gn(c,t,e){let n;He(c,Ht,s=>e(6,n=s));let l={"./popups/docs.svelte":tn,"./popups/inherent.svelte":cn,"./popups/primitive.svelte":pn},u={};Object.entries(l).forEach(([s,o])=>{let i=s.split("/");e(2,u[i[i.length-1].split(".")[0]]=o.default,u)});let v,k=!0,_,$=n;function d(){v!==null&&($.length===0?(e(3,v.style.display="none",v),e(3,v.style.transition="",v),e(3,v.style.top="",v),e(3,v.style.left="",v)):(e(3,v.style.transition="top 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s, left 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s",v),e(3,v.style.display="",v),T(10),requestAnimationFrame(()=>T())))}function E(){e(4,$=n)}function m(){return $}function T(s=0){if(v===null||$.length===0||$[0].span.parentElement===null)return;let o=$[0].span.getBoundingClientRect().bottom,i=$[0].span.getBoundingClientRect().left;i=Math.min(window.innerWidth-300,i),i=Math.max(10,i),e(3,v.style.top=o+_+s+"px",v),e(3,v.style.left=i+"px",v),e(3,v.style.height=window.innerHeight-o-10+"px",v),e(3,v.style.width=window.innerWidth-i-40+"px",v)}let j=null;function U(){e(1,_=Ce.pageYOffset)}function J(s){ft[s?"unshift":"push"](()=>{v=s,e(3,v)})}const f=()=>e(0,k=!1),r=()=>e(0,k=!0);return c.$$.update=()=>{c.$$.dirty&97&&(j!==null&&clearTimeout(j),e(5,j=setTimeout(()=>{k&&(E(),d(),e(0,k=k||m().length==0))},n.length===0?100:1))),c.$$.dirty&2&&T()},[k,_,u,v,$,j,n,U,J,f,r]}class dn extends me{constructor(t){super(),ve(this,t,gn,_n,be,{})}}function mn(c){let t,e,n,l,u,v,k,_,$,d=c[2]?"Hide Table":"Show Table",E,m,T,j=c[4].readerEnabled?"Disable":"Enable",U,J,f,r,s,o,i,h,g,S,H,b,O,w,C,A,y,M,F,te,I,Q,ne,ce;g=new Yt({props:{everything:c[3],path:c[3]?"/all#":"/"}});const ae=c[8].default,G=ut(ae,c,c[7],null);return I=new dn({}),{c(){t=z("div"),e=z("nav"),n=z("a"),l=X("FIGS!!"),u=K(),v=z("a"),k=X("Favourites"),_=K(),$=z("a"),E=X(d),m=K(),T=z("a"),U=X(j),J=X(" Better Reader"),f=K(),r=z("a"),s=X(Re),o=K(),i=z("div"),h=z("div"),re(g.$$.fragment),S=K(),H=z("footer"),b=X("Made by applejuice"),O=K(),w=z("div"),G&&G.c(),C=K(),A=Fe("svg"),M=K(),F=Fe("svg"),te=K(),re(I.$$.fragment),this.h()},l(D){t=W(D,"DIV",{class:!0});var R=q(t);e=W(R,"NAV",{class:!0});var ee=q(e);n=W(ee,"A",{class:!0,href:!0});var we=q(n);l=Z(we,"FIGS!!"),we.forEach(N),u=x(ee),v=W(ee,"A",{class:!0,href:!0});var Me=q(v);k=Z(Me,"Favourites"),Me.forEach(N),_=x(ee),$=W(ee,"A",{class:!0,href:!0,"aria-label":!0});var Ee=q($);E=Z(Ee,d),Ee.forEach(N),m=x(ee),T=W(ee,"A",{class:!0,href:!0});var he=q(T);U=Z(he,j),J=Z(he," Better Reader"),he.forEach(N),f=x(ee),r=W(ee,"A",{class:!0,href:!0});var Se=q(r);s=Z(Se,Re),Se.forEach(N),ee.forEach(N),o=x(R),i=W(R,"DIV",{class:!0});var De=q(i);h=W(De,"DIV",{class:!0});var Te=q(h);ie(g.$$.fragment,Te),S=x(Te),H=W(Te,"FOOTER",{class:!0});var Pe=q(H);b=Z(Pe,"Made by applejuice"),Pe.forEach(N),Te.forEach(N),De.forEach(N),O=x(R),w=W(R,"DIV",{class:!0});var Ae=q(w);G&&G.l(Ae),C=x(Ae),A=Le(Ae,"svg",{class:!0,width:!0,height:!0,"aria-hidden":!0});var nt=q(A);nt.forEach(N),Ae.forEach(N),R.forEach(N),M=x(D),F=Le(D,"svg",{id:!0,class:!0,width:!0,height:!0}),q(F).forEach(N),te=x(D),ie(I.$$.fragment,D),this.h()},h(){P(n,"class","nav-item svelte-518g4d"),P(n,"href",oe+"/"),P(v,"class","nav-item svelte-518g4d"),P(v,"href",oe+"/fav"),P($,"class","nav-item expander svelte-518g4d"),P($,"href","javascript:;"),P($,"aria-label","Expand"),P(T,"class","nav-item better-reader-button svelte-518g4d"),P(T,"href","javascript:;"),_e(T,"margin-left","auto",!1),P(r,"class","nav-item svelte-518g4d"),P(r,"href","javascript:;"),_e(r,"font-size",Math.max(c[1],10)-9+"em",!1),_e(r,"opacity","0.5",!1),P(e,"class","figura-background svelte-518g4d"),ke(e,"expanded",c[2]),P(H,"class","svelte-518g4d"),P(h,"class","category-inner svelte-518g4d"),P(i,"class","category figura-background svelte-518g4d"),ke(i,"expanded",c[2]),P(A,"class","cheese-svg svelte-518g4d"),P(A,"width","100%"),P(A,"height","100%"),P(A,"aria-hidden","true"),_e(A,"pointer-events","none",!1),_e(A,"touch-action","none",!1),P(w,"class","content svelte-518g4d"),ke(w,"expanded",c[2]),P(t,"class","root svelte-518g4d"),P(F,"id","root-glasspane"),P(F,"class","glasspane svelte-518g4d"),P(F,"width","100%"),P(F,"height","100%"),_e(F,"z-index","99999",!1)},m(D,R){Y(D,t,R),B(t,e),B(e,n),B(n,l),B(e,u),B(e,v),B(v,k),B(e,_),B(e,$),B($,E),B(e,m),B(e,T),B(T,U),B(T,J),B(e,f),B(e,r),B(r,s),B(t,o),B(t,i),B(i,h),le(g,h,null),B(h,S),B(h,H),B(H,b),B(t,O),B(t,w),G&&G.m(w,null),B(w,C),B(w,A),Y(D,M,R),Y(D,F,R),Y(D,te,R),le(I,D,R),Q=!0,ne||(ce=[ye($,"click",c[9]),ye(T,"click",c[10]),ye(r,"click",c[5]),ht(y=Ot.call(null,A,c[0]))],ne=!0)},p(D,[R]){(!Q||R&4)&&d!==(d=D[2]?"Hide Table":"Show Table")&&de(E,d),(!Q||R&16)&&j!==(j=D[4].readerEnabled?"Disable":"Enable")&&de(U,j),R&2&&_e(r,"font-size",Math.max(D[1],10)-9+"em",!1),R&4&&ke(e,"expanded",D[2]);const ee={};R&8&&(ee.everything=D[3]),R&8&&(ee.path=D[3]?"/all#":"/"),g.$set(ee),R&4&&ke(i,"expanded",D[2]),G&&G.p&&(!Q||R&128)&&pt(G,ae,D,D[7],Q?gt(ae,D[7],R,null):_t(D[7]),null),y&&dt(y.update)&&R&1&&y.update.call(null,D[0]),R&4&&ke(w,"expanded",D[2])},i(D){Q||(L(g.$$.fragment,D),L(G,D),L(I.$$.fragment,D),Q=!0)},o(D){V(g.$$.fragment,D),V(G,D),V(I.$$.fragment,D),Q=!1},d(D){D&&N(t),se(g),G&&G.d(D),D&&N(M),D&&N(F),D&&N(te),se(I,D),ne=!1,xe(ce)}}}function vn(c,t,e){let n,l;He(c,et,J=>e(6,n=J)),He(c,je,J=>e(4,l=J));let{$$slots:u={},$$scope:v}=t,k=null,_=!1;mt(()=>{let J=()=>{e(1,d+=E),e(1,d=Math.max(d,0)),E-=.001,E*=.99,d>20&&e(0,_=!0),requestAnimationFrame(J)};k=requestAnimationFrame(J)}),vt(()=>k&&cancelAnimationFrame(k));function $(){_||(E+=.1)}let d=0,E=0,m=!1,T;const j=()=>e(2,m=!m),U=()=>bt(je,l.readerEnabled=!l.readerEnabled,l);return c.$$set=J=>{"$$scope"in J&&e(7,v=J.$$scope)},c.$$.update=()=>{c.$$.dirty&64&&e(3,T=n.stuff.navigation==="hashed")},[_,d,m,T,l,$,n,v,u,j,U]}class $n extends me{constructor(t){super(),ve(this,t,vn,mn,be,{})}}export{$n as default};
