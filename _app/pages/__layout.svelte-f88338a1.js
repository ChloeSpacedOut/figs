import{S as _e,i as ge,s as de,w as ee,x as le,y as te,q as L,o as F,B as ne,k as Q,l as se,m as U,g as J,n as he,p as pe,F as Se,d as O,t as X,h as Z,j as Me,e as z,c as j,a as V,b as C,G as N,E as ie,H as Qe,I as Ue,J as Xe,K as ke,L as Ze,M as je,N as Ye,O as Ke,P as xe,Q as et,R as tt,T as Ie,U as Oe,f as ue,V as be,W as nt,X as rt,Y as lt,Z as it,_ as st,v as at,$ as ot,a0 as ct}from"../chunks/index-03ac9702.js";import{b as ye}from"../chunks/preload-helper-7002f5f4.js";import{n as ft}from"../chunks/svgNamespace-ebff0b03.js";import{S as He,m as ut,f as ht,g as pt,r as Ne,k as _t,a as gt,M as dt,C as mt,b as vt,c as bt,s as Be}from"../chunks/ClassDescribe-4f093b5d.js";var Ce="Pre-4",kt="/figs/_app/assets/cheese-9bdf176f.png";function yt(h,n){let e=[],r=h.getBoundingClientRect(),c=(b,_)=>{if(console.log(r.top+_.data.y),r.top+_.data.y<-_.data.scale*100||r.top+_.data.y>window.innerHeight+_.data.scale*100){b.remove();return}b.parentElement===null&&h.appendChild(b),b.setAttributeNS(null,"transform",`translate(${_.data.x},${_.data.y}) rotate(${_.data.angle}) scale(${_.data.scale}, ${_.data.scale})`)},u=()=>{if(r=h.getBoundingClientRect(),Math.random()>.99&&n){let b=document.createElementNS(ft,"image");b.setAttributeNS(null,"href",kt),h.appendChild(b),e.push({element:b,data:{x:Math.random()*h.clientWidth,y:-50,ym:Math.random()*.1+1,scale:Math.random()+(Math.random()>.99?5:1),angle:Math.random()*360,anglem:(Math.random()-.5)*.1}})}for(let b=e.length-1;b>=0;b--){let _=e[b];_.data.y+=_.data.ym,_.data.angle+=_.data.anglem,_.data.y>h.clientHeight&&(e.splice(b,1),_.element.remove()),c(_.element,_)}n||e.length>0?m=requestAnimationFrame(u):m=null},m=requestAnimationFrame(u);return{destroy(){m&&cancelAnimationFrame(m)},update(b){m===null&&b&&(m=requestAnimationFrame(u)),n=b}}}function De(h,n,e){const r=h.slice();return r[1]=n[e],r}function Pe(h,n,e){const r=h.slice();return r[4]=n[e],r}function $t(h){let n=h[4].name+"",e;return{c(){e=X(n)},l(r){e=Z(r,n)},m(r,c){J(r,e,c)},p(r,c){c&1&&n!==(n=r[4].name+"")&&Me(e,n)},d(r){r&&O(e)}}}function Le(h){let n,e;return n=new He({props:{href:ye+"#"+h[4].name,src:ut,$$slots:{default:[$t]},$$scope:{ctx:h}}}),{c(){ee(n.$$.fragment)},l(r){le(n.$$.fragment,r)},m(r,c){te(n,r,c),e=!0},p(r,c){const u={};c&1&&(u.href=ye+"#"+r[4].name),c&129&&(u.$$scope={dirty:c,ctx:r}),n.$set(u)},i(r){e||(L(n.$$.fragment,r),e=!0)},o(r){F(n.$$.fragment,r),e=!1},d(r){ne(n,r)}}}function wt(h){let n=h[1].name+"",e;return{c(){e=X(n)},l(r){e=Z(r,n)},m(r,c){J(r,e,c)},p(r,c){c&1&&n!==(n=r[1].name+"")&&Me(e,n)},d(r){r&&O(e)}}}function Re(h){let n,e;return n=new He({props:{href:ye+"#"+h[1].name,src:ht,$$slots:{default:[wt]},$$scope:{ctx:h}}}),{c(){ee(n.$$.fragment)},l(r){le(n.$$.fragment,r)},m(r,c){te(n,r,c),e=!0},p(r,c){const u={};c&1&&(u.href=ye+"#"+r[1].name),c&129&&(u.$$scope={dirty:c,ctx:r}),n.$set(u)},i(r){e||(L(n.$$.fragment,r),e=!0)},o(r){F(n.$$.fragment,r),e=!1},d(r){ne(n,r)}}}function Mt(h){let n,e,r,c=h[0].methods,u=[];for(let g=0;g<c.length;g+=1)u[g]=Le(Pe(h,c,g));const m=g=>F(u[g],1,1,()=>{u[g]=null});let b=h[0].fields,_=[];for(let g=0;g<b.length;g+=1)_[g]=Re(De(h,b,g));const $=g=>F(_[g],1,1,()=>{_[g]=null});return{c(){for(let g=0;g<u.length;g+=1)u[g].c();n=Q();for(let g=0;g<_.length;g+=1)_[g].c();e=se()},l(g){for(let k=0;k<u.length;k+=1)u[k].l(g);n=U(g);for(let k=0;k<_.length;k+=1)_[k].l(g);e=se()},m(g,k){for(let d=0;d<u.length;d+=1)u[d].m(g,k);J(g,n,k);for(let d=0;d<_.length;d+=1)_[d].m(g,k);J(g,e,k),r=!0},p(g,[k]){if(k&1){c=g[0].methods;let d;for(d=0;d<c.length;d+=1){const A=Pe(g,c,d);u[d]?(u[d].p(A,k),L(u[d],1)):(u[d]=Le(A),u[d].c(),L(u[d],1),u[d].m(n.parentNode,n))}for(he(),d=c.length;d<u.length;d+=1)m(d);pe()}if(k&1){b=g[0].fields;let d;for(d=0;d<b.length;d+=1){const A=De(g,b,d);_[d]?(_[d].p(A,k),L(_[d],1)):(_[d]=Re(A),_[d].c(),L(_[d],1),_[d].m(e.parentNode,e))}for(he(),d=b.length;d<_.length;d+=1)$(d);pe()}},i(g){if(!r){for(let k=0;k<c.length;k+=1)L(u[k]);for(let k=0;k<b.length;k+=1)L(_[k]);r=!0}},o(g){u=u.filter(Boolean);for(let k=0;k<u.length;k+=1)F(u[k]);_=_.filter(Boolean);for(let k=0;k<_.length;k+=1)F(_[k]);r=!1},d(g){Se(u,g),g&&O(n),Se(_,g),g&&O(e)}}}function Et(h,n,e){let{klass:r}=n;return h.$$set=c=>{"klass"in c&&e(0,r=c.klass)},[r]}class St extends _e{constructor(n){super(),ge(this,n,Et,Mt,de,{klass:0})}}function Fe(h,n,e){const r=h.slice();return r[0]=n[e][0],r[1]=n[e][1],r}function Tt(h){let n=h[0]+"",e;return{c(){e=X(n)},l(r){e=Z(r,n)},m(r,c){J(r,e,c)},p:ie,d(r){r&&O(e)}}}function Ge(h){let n,e;return n=new He({props:{href:ye+"#"+h[1].name,src:_t,$$slots:{default:[Tt]},$$scope:{ctx:h}}}),{c(){ee(n.$$.fragment)},l(r){le(n.$$.fragment,r)},m(r,c){te(n,r,c),e=!0},p(r,c){const u={};c&16&&(u.$$scope={dirty:c,ctx:r}),n.$set(u)},i(r){e||(L(n.$$.fragment,r),e=!0)},o(r){F(n.$$.fragment,r),e=!1},d(r){ne(n,r)}}}function At(h){let n,e,r,c,u,m,b,_,$,g,k,d;m=new St({props:{klass:pt}});let A=Object.entries(Ne),M=[];for(let B=0;B<A.length;B+=1)M[B]=Ge(Fe(h,A,B));const Y=B=>F(M[B],1,1,()=>{M[B]=null});return{c(){n=z("div"),e=z("span"),r=X("Global Objects"),c=Q(),u=z("div"),ee(m.$$.fragment),b=Q(),_=z("span"),$=X("Miscellaneous Types"),g=Q(),k=z("div");for(let B=0;B<M.length;B+=1)M[B].c();this.h()},l(B){n=j(B,"DIV",{class:!0});var o=V(n);e=j(o,"SPAN",{class:!0});var t=V(e);r=Z(t,"Global Objects"),t.forEach(O),c=U(o),u=j(o,"DIV",{class:!0});var l=V(u);le(m.$$.fragment,l),l.forEach(O),b=U(o),_=j(o,"SPAN",{class:!0});var s=V(_);$=Z(s,"Miscellaneous Types"),s.forEach(O),g=U(o),k=j(o,"DIV",{class:!0});var i=V(k);for(let f=0;f<M.length;f+=1)M[f].l(i);i.forEach(O),o.forEach(O),this.h()},h(){C(e,"class","tab svelte-7ix4nt"),C(u,"class","fields-container svelte-7ix4nt"),C(_,"class","tab svelte-7ix4nt"),C(k,"class","fields-container svelte-7ix4nt"),C(n,"class","sidebar-viewer svelte-7ix4nt")},m(B,o){J(B,n,o),N(n,e),N(e,r),N(n,c),N(n,u),te(m,u,null),N(n,b),N(n,_),N(_,$),N(n,g),N(n,k);for(let t=0;t<M.length;t+=1)M[t].m(k,null);d=!0},p(B,[o]){if(o&0){A=Object.entries(Ne);let t;for(t=0;t<A.length;t+=1){const l=Fe(B,A,t);M[t]?(M[t].p(l,o),L(M[t],1)):(M[t]=Ge(l),M[t].c(),L(M[t],1),M[t].m(k,null))}for(he(),t=A.length;t<M.length;t+=1)Y(t);pe()}},i(B){if(!d){L(m.$$.fragment,B);for(let o=0;o<A.length;o+=1)L(M[o]);d=!0}},o(B){F(m.$$.fragment,B),M=M.filter(Boolean);for(let o=0;o<M.length;o+=1)F(M[o]);d=!1},d(B){B&&O(n),ne(m),Se(M,B)}}}class Ht extends _e{constructor(n){super(),ge(this,n,null,At,de,{})}}function It(h){let n;return{c(){n=X("Not Found")},l(e){n=Z(e,"Not Found")},m(e,r){J(e,n,r)},p:ie,i:ie,o:ie,d(e){e&&O(n)}}}function Ot(h){let n,e,r,c;const u=[Bt,Nt],m=[];function b(_,$){return _[0].type==="class"?0:_[0].type==="method"?1:-1}return~(n=b(h))&&(e=m[n]=u[n](h)),{c(){e&&e.c(),r=se()},l(_){e&&e.l(_),r=se()},m(_,$){~n&&m[n].m(_,$),J(_,r,$),c=!0},p(_,$){let g=n;n=b(_),n===g?~n&&m[n].p(_,$):(e&&(he(),F(m[g],1,1,()=>{m[g]=null}),pe()),~n?(e=m[n],e?e.p(_,$):(e=m[n]=u[n](_),e.c()),L(e,1),e.m(r.parentNode,r)):e=null)},i(_){c||(L(e),c=!0)},o(_){F(e),c=!1},d(_){~n&&m[n].d(_),_&&O(r)}}}function Nt(h){let n,e;return n=new dt({props:{hostClass:h[0].klass,method:h[0].value,forceSmall:!0}}),{c(){ee(n.$$.fragment)},l(r){le(n.$$.fragment,r)},m(r,c){te(n,r,c),e=!0},p(r,c){const u={};c&1&&(u.hostClass=r[0].klass),c&1&&(u.method=r[0].value),n.$set(u)},i(r){e||(L(n.$$.fragment,r),e=!0)},o(r){F(n.$$.fragment,r),e=!1},d(r){ne(n,r)}}}function Bt(h){let n,e;return n=new mt({props:{klass:h[0].value,forceSmall:!0}}),{c(){ee(n.$$.fragment)},l(r){le(n.$$.fragment,r)},m(r,c){te(n,r,c),e=!0},p(r,c){const u={};c&1&&(u.klass=r[0].value),n.$set(u)},i(r){e||(L(n.$$.fragment,r),e=!0)},o(r){F(n.$$.fragment,r),e=!1},d(r){ne(n,r)}}}function Ct(h){let n,e,r,c;const u=[Ot,It],m=[];function b(_,$){return _[0]!==null?0:1}return n=b(h),e=m[n]=u[n](h),{c(){e.c(),r=se()},l(_){e.l(_),r=se()},m(_,$){m[n].m(_,$),J(_,r,$),c=!0},p(_,[$]){let g=n;n=b(_),n===g?m[n].p(_,$):(he(),F(m[g],1,1,()=>{m[g]=null}),pe(),e=m[n],e?e.p(_,$):(e=m[n]=u[n](_),e.c()),L(e,1),e.m(r.parentNode,r))},i(_){c||(L(e),c=!0)},o(_){F(e),c=!1},d(_){m[n].d(_),_&&O(r)}}}function Dt(h,n,e){let{name:r}=n,c;return h.$$set=u=>{"name"in u&&e(1,r=u.name)},h.$$.update=()=>{h.$$.dirty&2&&e(0,c=gt(r))},[c,r]}class Pt extends _e{constructor(n){super(),ge(this,n,Dt,Ct,de,{name:1})}}var Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"})),Te={},Je={},Rt={},Ft=Object.freeze(Object.defineProperty({__proto__:null,default:Rt},Symbol.toStringTag,{value:"Module"})),Gt=vt(Ft);(function(h){(function(n){var e=n.Markdown=function(o){switch(typeof o){case"undefined":this.dialect=e.dialects.Gruber;break;case"object":this.dialect=o;break;default:if(o in e.dialects)this.dialect=e.dialects[o];else throw new Error("Unknown Markdown dialect '"+String(o)+"'");break}this.em_state=[],this.strong_state=[],this.debug_indent=""};n.parse=function(o,t){var l=new e(t);return l.toTree(o)},n.toHTML=function(t,l,s){var i=n.toHTMLTree(t,l,s);return n.renderJsonML(i)},n.toHTMLTree=function(t,l,s){typeof t=="string"&&(t=this.parse(t,l));var i=d(t),f={};i&&i.references&&(f=i.references);var v=Y(t,f,s);return B(v),v};function r(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function c(){var o=Gt;return"Markdown.mk_block( "+o.inspect(this.toString())+", "+o.inspect(this.trailing)+", "+o.inspect(this.lineNumber)+" )"}var u=e.mk_block=function(o,t,l){arguments.length==1&&(t=`

`);var s=new String(o);return s.trailing=t,s.inspect=c,s.toSource=r,l!=null&&(s.lineNumber=l),s};function m(o){for(var t=0,l=-1;(l=o.indexOf(`
`,l+1))!==-1;)t++;return t}e.prototype.split_blocks=function(t,l){t=t.replace(/(\r\n|\n|\r)/g,`
`);var s=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,i=[],f,v=1;for((f=/^(\s*\n)/.exec(t))!=null&&(v+=m(f[0]),s.lastIndex=f[0].length);(f=s.exec(t))!==null;)f[2]==`
#`&&(f[2]=`
`,s.lastIndex--),i.push(u(f[1],f[2],v)),v+=m(f[0]);return i},e.prototype.processBlock=function(t,l){var s=this.dialect.block,i=s.__order__;if("__call__"in s)return s.__call__.call(this,t,l);for(var f=0;f<i.length;f++){var v=s[i[f]].call(this,t,l);if(v)return(!$(v)||v.length>0&&!$(v[0]))&&this.debug(i[f],"didn't return a proper array"),v}return[]},e.prototype.processInline=function(t){return this.dialect.inline.__call__.call(this,String(t))},e.prototype.toTree=function(t,l){var s=t instanceof Array?t:this.split_blocks(t),i=this.tree;try{this.tree=l||this.tree||["markdown"];e:for(;s.length;){var f=this.processBlock(s.shift(),s);if(!f.length)continue e;this.tree.push.apply(this.tree,f)}return this.tree}finally{l&&(this.tree=i)}},e.prototype.debug=function(){var o=Array.prototype.slice.call(arguments);o.unshift(this.debug_indent),typeof print!="undefined"&&print.apply(print,o),typeof console!="undefined"&&typeof console.log!="undefined"&&console.log.apply(null,o)},e.prototype.loop_re_over_block=function(o,t,l){for(var s,i=t.valueOf();i.length&&(s=o.exec(i))!=null;)i=i.substr(s[0].length),l.call(this,s);return i},e.dialects={},e.dialects.Gruber={block:{atxHeader:function(t,l){var s=t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(!!s){var i=["header",{level:s[1].length}];return Array.prototype.push.apply(i,this.processInline(s[2])),s[0].length<t.length&&l.unshift(u(t.substr(s[0].length),t.trailing,t.lineNumber+2)),[i]}},setextHeader:function(t,l){var s=t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(!!s){var i=s[2]==="="?1:2,f=["header",{level:i},s[1]];return s[0].length<t.length&&l.unshift(u(t.substr(s[0].length),t.trailing,t.lineNumber+2)),[f]}},code:function(t,l){var s=[],i=/^(?: {0,3}\t| {4})(.*)\n?/;if(!t.match(i))return;e:do{var f=this.loop_re_over_block(i,t.valueOf(),function(v){s.push(v[1])});if(f.length){l.unshift(u(f,t.trailing));break e}else if(l.length){if(!l[0].match(i))break e;s.push(t.trailing.replace(/[^\n]/g,"").substring(2)),t=l.shift()}else break e}while(!0);return[["code_block",s.join(`
`)]]},horizRule:function(t,l){var s=t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(!!s){var i=[["hr"]];return s[1]&&i.unshift.apply(i,this.processBlock(s[1],[])),s[3]&&l.unshift(u(s[3])),i}},lists:function(){var o="[*+-]|\\d+\\.",t=/[*+-]/,l=new RegExp("^( {0,3})("+o+")[ 	]+"),s="(?: {0,3}\\t| {4})";function i(y){return new RegExp("(?:^("+s+"{0,"+y+"} {0,3})("+o+")\\s+)|(^"+s+"{0,"+(y-1)+"}[ ]{0,4})")}function f(y){return y.replace(/ {0,3}\t/g,"    ")}function v(y,E,S,q){if(E){y.push(["para"].concat(S));return}var T=y[y.length-1]instanceof Array&&y[y.length-1][0]=="para"?y[y.length-1]:y;q&&y.length>1&&S.unshift(q);for(var P=0;P<S.length;P++){var R=S[P],W=typeof R=="string";W&&T.length>1&&typeof T[T.length-1]=="string"?T[T.length-1]+=R:T.push(R)}}function w(y,E){for(var S=new RegExp("^("+s+"{"+y+"}.*?\\n?)*$"),q=new RegExp("^"+s+"{"+y+"}","gm"),T=[];E.length>0&&S.exec(E[0]);){var P=E.shift(),R=P.replace(q,"");T.push(u(R,P.trailing,P.lineNumber))}return T}function H(y,E,S){var q=y.list,T=q[q.length-1];if(!(T[1]instanceof Array&&T[1][0]=="para"))if(E+1==S.length)T.push(["para"].concat(T.splice(1,T.length-1)));else{var P=T.pop();T.push(["para"].concat(T.splice(1,T.length-1)),P)}}return function(y,E){var S=y.match(l);if(!S)return;function q(ce){var fe=t.exec(ce[2])?["bulletlist"]:["numberlist"];return T.push({list:fe,indent:ce[1]}),fe}var T=[],P=q(S),R,W=!1,ae=[T[0].list],x;e:for(;;){for(var me=y.split(/(?=\n)/),G="",I=0;I<me.length;I++){var D="",K=me[I].replace(/^\n/,function(ce){return D=ce,""}),Ee=i(T.length);if(S=K.match(Ee),S[1]!==void 0){G.length&&(v(R,W,this.processInline(G),D),W=!1,G=""),S[1]=f(S[1]);var re=Math.floor(S[1].length/4)+1;if(re>T.length)P=q(S),R.push(P),R=P[1]=["listitem"];else{var ve=!1;for(x=0;x<T.length;x++)if(T[x].indent==S[1]){P=T[x].list,T.splice(x+1,T.length-(x+1)),ve=!0;break}ve||(re++,re<=T.length?(T.splice(re,T.length-re),P=T[re-1].list):(P=q(S),R.push(P))),R=["listitem"],P.push(R)}D=""}K.length>S[0].length&&(G+=D+K.substr(S[0].length))}G.length&&(v(R,W,this.processInline(G),D),W=!1,G="");var $e=w(T.length,E);$e.length>0&&(g(T,H,this),R.push.apply(R,this.toTree($e,[])));var we=E[0]&&E[0].valueOf()||"";if(we.match(l)||we.match(/^ /)){y=E.shift();var oe=this.dialect.block.horizRule(y,E);if(oe){ae.push.apply(ae,oe);break}g(T,H,this),W=!0;continue e}break}return ae}}(),blockquote:function(t,l){if(!!t.match(/^>/m)){var s=[];if(t[0]!=">"){for(var i=t.split(/\n/),f=[],v=t.lineNumber;i.length&&i[0][0]!=">";)f.push(i.shift()),v++;var w=u(f.join(`
`),`
`,t.lineNumber);s.push.apply(s,this.processBlock(w,[])),t=u(i.join(`
`),t.trailing,v)}for(;l.length&&l[0][0]==">";){var H=l.shift();t=u(t+t.trailing+H,H.trailing,t.lineNumber)}var y=t.replace(/^> ?/gm,"");this.tree;var E=this.toTree(y,["blockquote"]),S=d(E);return S&&S.references&&(delete S.references,k(S)&&E.splice(1,1)),s.push(E),s}},referenceDefn:function(t,l){var s=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(!!t.match(s)){d(this.tree)||this.tree.splice(1,0,{});var i=d(this.tree);i.references===void 0&&(i.references={});var f=this.loop_re_over_block(s,t,function(v){v[2]&&v[2][0]=="<"&&v[2][v[2].length-1]==">"&&(v[2]=v[2].substring(1,v[2].length-1));var w=i.references[v[1].toLowerCase()]={href:v[2]};v[4]!==void 0?w.title=v[4]:v[5]!==void 0&&(w.title=v[5])});return f.length&&l.unshift(u(f,t.trailing)),[]}},para:function(t,l){return[["para"].concat(this.processInline(t))]}}},e.dialects.Gruber.inline={__oneElement__:function(t,l,s){var i,v;l=l||this.dialect.inline.__patterns__;var f=new RegExp("([\\s\\S]*?)("+(l.source||l)+")");if(i=f.exec(t),i){if(i[1])return[i[1].length,i[1]]}else return[t.length,t];var v;return i[2]in this.dialect.inline&&(v=this.dialect.inline[i[2]].call(this,t.substr(i.index),i,s||[])),v=v||[i[2].length,i[2]],v},__call__:function(t,l){var s=[],i;function f(v){typeof v=="string"&&typeof s[s.length-1]=="string"?s[s.length-1]+=v:s.push(v)}for(;t.length>0;)i=this.dialect.inline.__oneElement__.call(this,t,l,s),t=t.substr(i.shift()),g(i,f);return s},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(t){return this.dialect.inline.__escape__.exec(t)?[2,t.charAt(1)]:[1,"\\"]},"![":function(t){var l=t.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(l){l[2]&&l[2][0]=="<"&&l[2][l[2].length-1]==">"&&(l[2]=l[2].substring(1,l[2].length-1)),l[2]=this.dialect.inline.__call__.call(this,l[2],/\\/)[0];var s={alt:l[1],href:l[2]||""};return l[4]!==void 0&&(s.title=l[4]),[l[0].length,["img",s]]}return l=t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),l?[l[0].length,["img_ref",{alt:l[1],ref:l[2].toLowerCase(),original:l[0]}]]:[2,"!["]},"[":function(t){var l=String(t),s=e.DialectHelpers.inline_until_char.call(this,t.substr(1),"]");if(!s)return[1,"["];var i=1+s[0],f=s[1],v,w;t=t.substr(i);var H=t.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(H){var y=H[1];if(i+=H[0].length,y&&y[0]=="<"&&y[y.length-1]==">"&&(y=y.substring(1,y.length-1)),!H[3])for(var E=1,S=0;S<y.length;S++)switch(y[S]){case"(":E++;break;case")":--E==0&&(i-=y.length-S,y=y.substring(0,S));break}return y=this.dialect.inline.__call__.call(this,y,/\\/)[0],w={href:y||""},H[3]!==void 0&&(w.title=H[3]),v=["link",w].concat(f),[i,v]}return H=t.match(/^\s*\[(.*?)\]/),H?(i+=H[0].length,w={ref:(H[1]||String(f)).toLowerCase(),original:l.substr(0,i)},v=["link_ref",w].concat(f),[i,v]):f.length==1&&typeof f[0]=="string"?(w={ref:f[0].toLowerCase(),original:l.substr(0,i)},v=["link_ref",w,f[0]],[i,v]):[1,"["]},"<":function(t){var l;return(l=t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))!=null?l[3]?[l[0].length,["link",{href:"mailto:"+l[3]},l[3]]]:l[2]=="mailto"?[l[0].length,["link",{href:l[1]},l[1].substr(7)]]:[l[0].length,["link",{href:l[1]},l[1]]]:[1,"<"]},"`":function(t){var l=t.match(/(`+)(([\s\S]*?)\1)/);return l&&l[2]?[l[1].length+l[2].length,["inlinecode",l[3]]]:[1,"`"]},"  \n":function(t){return[3,["linebreak"]]}};function b(o,t){var l=o+"_state",s=o=="strong"?"em_state":"strong_state";function i(f){this.len_after=f,this.name="close_"+t}return function(f,v){if(this[l][0]==t)return this[l].shift(),[f.length,new i(f.length-t.length)];var w=this[s].slice(),H=this[l].slice();this[l].unshift(t);var y=this.processInline(f.substr(t.length)),E=y[y.length-1];if(this[l].shift(),E instanceof i){y.pop();var S=f.length-E.len_after;return[S,[o].concat(y)]}else return this[s]=w,this[l]=H,[t.length,t]}}e.dialects.Gruber.inline["**"]=b("strong","**"),e.dialects.Gruber.inline.__=b("strong","__"),e.dialects.Gruber.inline["*"]=b("em","*"),e.dialects.Gruber.inline._=b("em","_"),e.buildBlockOrder=function(o){var t=[];for(var l in o)l=="__order__"||l=="__call__"||t.push(l);o.__order__=t},e.buildInlinePatterns=function(o){var t=[];for(var l in o)if(!l.match(/^__.*__$/)){var s=l.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");t.push(l.length==1?s:"(?:"+s+")")}t=t.join("|"),o.__patterns__=t;var i=o.__call__;o.__call__=function(f,v){return v!=null?i.call(this,f,v):i.call(this,f,t)}},e.DialectHelpers={},e.DialectHelpers.inline_until_char=function(o,t){for(var l=0,s=[];;){if(o.charAt(l)==t)return l++,[l,s];if(l>=o.length)return null;var i=this.dialect.inline.__oneElement__.call(this,o.substr(l));l+=i[0],s.push.apply(s,i.slice(1))}},e.subclassDialect=function(o){function t(){}t.prototype=o.block;function l(){}return l.prototype=o.inline,{block:new t,inline:new l}},e.buildBlockOrder(e.dialects.Gruber.block),e.buildInlinePatterns(e.dialects.Gruber.inline),e.dialects.Maruku=e.subclassDialect(e.dialects.Gruber),e.dialects.Maruku.processMetaHash=function(t){for(var l=_(t),s={},i=0;i<l.length;++i)if(/^#/.test(l[i]))s.id=l[i].substring(1);else if(/^\./.test(l[i]))s.class?s.class=s.class+l[i].replace(/./," "):s.class=l[i].substring(1);else if(/\=/.test(l[i])){var f=l[i].split(/\=/);s[f[0]]=f[1]}return s};function _(o){for(var t=o.split(""),l=[""],s=!1;t.length;){var i=t.shift();switch(i){case" ":s?l[l.length-1]+=i:l.push("");break;case"'":case'"':s=!s;break;case"\\":i=t.shift();default:l[l.length-1]+=i;break}}return l}e.dialects.Maruku.block.document_meta=function(t,l){if(!(t.lineNumber>1)&&!!t.match(/^(?:\w+:.*\n)*\w+:.*$/)){d(this.tree)||this.tree.splice(1,0,{});var s=t.split(/\n/);for(p in s){var i=s[p].match(/(\w+):\s*(.*)$/),f=i[1].toLowerCase(),v=i[2];this.tree[1][f]=v}return[]}},e.dialects.Maruku.block.block_meta=function(t,l){var s=t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(!!s){var i=this.dialect.processMetaHash(s[2]),f;if(s[1]===""){var v=this.tree[this.tree.length-1];if(f=d(v),typeof v=="string")return;f||(f={},v.splice(1,0,f));for(a in i)f[a]=i[a];return[]}var w=t.replace(/\n.*$/,""),H=this.processBlock(w,[]);f=d(H[0]),f||(f={},H[0].splice(1,0,f));for(a in i)f[a]=i[a];return H}},e.dialects.Maruku.block.definition_list=function(t,l){var s=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"],f,v;if(v=t.match(s)){for(var w=[t];l.length&&s.exec(l[0]);)w.push(l.shift());for(var H=0;H<w.length;++H){var v=w[H].match(s),y=v[1].replace(/\n$/,"").split(/\n/),E=v[2].split(/\n:\s+/);for(f=0;f<y.length;++f)i.push(["dt",y[f]]);for(f=0;f<E.length;++f)i.push(["dd"].concat(this.processInline(E[f].replace(/(\n)\s+/,"$1"))))}}else return;return[i]},e.dialects.Maruku.block.table=function(t,l){var s=function(E,S){S=S||"\\s",S.match(/^[\\|\[\]{}?*.+^$]$/)&&(S="\\"+S);for(var q=[],T=new RegExp("^((?:\\\\.|[^\\\\"+S+"])*)"+S+"(.*)"),P;P=E.match(T);)q.push(P[1]),E=P[2];return q.push(E),q},i=/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,f=/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,v,w;if(w=t.match(i))w[3]=w[3].replace(/^\s*\|/gm,"");else if(!(w=t.match(f)))return;var H=["table",["thead",["tr"]],["tbody"]];w[2]=w[2].replace(/\|\s*$/,"").split("|");var y=[];for(g(w[2],function(E){E.match(/^\s*-+:\s*$/)?y.push({align:"right"}):E.match(/^\s*:-+\s*$/)?y.push({align:"left"}):E.match(/^\s*:-+:\s*$/)?y.push({align:"center"}):y.push({})}),w[1]=s(w[1].replace(/\|\s*$/,""),"|"),v=0;v<w[1].length;v++)H[1][1].push(["th",y[v]||{}].concat(this.processInline(w[1][v].trim())));return g(w[3].replace(/\|\s*$/mg,"").split(`
`),function(E){var S=["tr"];for(E=s(E,"|"),v=0;v<E.length;v++)S.push(["td",y[v]||{}].concat(this.processInline(E[v].trim())));H[2].push(S)},this),[H]},e.dialects.Maruku.inline["{:"]=function(t,l,s){if(!s.length)return[2,"{:"];var i=s[s.length-1];if(typeof i=="string")return[2,"{:"];var f=t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!f)return[2,"{:"];var v=this.dialect.processMetaHash(f[1]),w=d(i);w||(w={},i.splice(1,0,w));for(var H in v)w[H]=v[H];return[f[0].length,""]},e.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,e.buildBlockOrder(e.dialects.Maruku.block),e.buildInlinePatterns(e.dialects.Maruku.inline);var $=Array.isArray||function(o){return Object.prototype.toString.call(o)=="[object Array]"},g;Array.prototype.forEach?g=function(o,t,l){return o.forEach(t,l)}:g=function(o,t,l){for(var s=0;s<o.length;s++)t.call(l||o,o[s],s,o)};var k=function(o){for(var t in o)if(hasOwnProperty.call(o,t))return!1;return!0};function d(o){return $(o)&&o.length>1&&typeof o[1]=="object"&&!$(o[1])?o[1]:void 0}n.renderJsonML=function(o,t){t=t||{},t.root=t.root||!1;var l=[];if(t.root)l.push(M(o));else for(o.shift(),o.length&&typeof o[0]=="object"&&!(o[0]instanceof Array)&&o.shift();o.length;)l.push(M(o.shift()));return l.join(`

`)};function A(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function M(o){if(typeof o=="string")return A(o);var t=o.shift(),l={},s=[];for(o.length&&typeof o[0]=="object"&&!(o[0]instanceof Array)&&(l=o.shift());o.length;)s.push(M(o.shift()));var i="";for(var f in l)i+=" "+f+'="'+A(l[f])+'"';return t=="img"||t=="br"||t=="hr"?"<"+t+i+"/>":"<"+t+i+">"+s.join("")+"</"+t+">"}function Y(o,t,l){var s;l=l||{};var i=o.slice(0);typeof l.preprocessTreeNode=="function"&&(i=l.preprocessTreeNode(i,t));var f=d(i);if(f){i[1]={};for(s in f)i[1][s]=f[s];f=i[1]}if(typeof i=="string")return i;switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level;break;case"bulletlist":i[0]="ul";break;case"numberlist":i[0]="ol";break;case"listitem":i[0]="li";break;case"para":i[0]="p";break;case"markdown":i[0]="html",f&&delete f.references;break;case"code_block":i[0]="pre",s=f?2:1;var v=["code"];v.push.apply(v,i.splice(s,i.length-s)),i[s]=v;break;case"inlinecode":i[0]="code";break;case"img":i[1].src=i[1].href,delete i[1].href;break;case"linebreak":i[0]="br";break;case"link":i[0]="a";break;case"link_ref":i[0]="a";var w=t[f.ref];if(w)delete f.ref,f.href=w.href,w.title&&(f.title=w.title),delete f.original;else return f.original;break;case"img_ref":i[0]="img";var w=t[f.ref];if(w)delete f.ref,f.src=w.href,w.title&&(f.title=w.title),delete f.original;else return f.original;break}if(s=1,f){for(var H in i[1]){s=2;break}s===1&&i.splice(s,1)}for(;s<i.length;++s)i[s]=Y(i[s],t,l);return i}function B(o){for(var t=d(o)?2:1;t<o.length;)typeof o[t]=="string"?t+1<o.length&&typeof o[t+1]=="string"?o[t]+=o.splice(t+1,1)[0]:++t:(B(o[t]),++t)}})(function(){return h}())})(Je);(function(h){h.markdown=Je,h.parse=h.markdown.toHTML})(Te);function Vt(h){let n,e=Te.markdown.toHTML(h[0])+"",r;return{c(){n=new Qe(!1),r=se(),this.h()},l(c){n=Ue(c,!1),r=se(),this.h()},h(){n.a=r},m(c,u){n.m(e,c,u),J(c,r,u)},p(c,[u]){u&1&&e!==(e=Te.markdown.toHTML(c[0])+"")&&n.p(e)},i:ie,o:ie,d(c){c&&O(r),c&&n.d()}}}function qt(h,n,e){let{name:r}=n;return h.$$set=c=>{"name"in c&&e(0,r=c.name)},[r]}class zt extends _e{constructor(n){super(),ge(this,n,qt,Vt,de,{name:0})}}var jt=Object.freeze(Object.defineProperty({__proto__:null,default:zt},Symbol.toStringTag,{value:"Module"}));function Yt(h){let n,e,r;return{c(){n=z("h1"),e=X(h[0]),r=X(`

A lua Primitive`)},l(c){n=j(c,"H1",{});var u=V(n);e=Z(u,h[0]),u.forEach(O),r=Z(c,`

A lua Primitive`)},m(c,u){J(c,n,u),N(n,e),J(c,r,u)},p(c,[u]){u&1&&Me(e,c[0])},i:ie,o:ie,d(c){c&&O(n),c&&O(r)}}}function Jt(h,n,e){let{name:r}=n;return h.$$set=c=>{"name"in c&&e(0,r=c.name)},[r]}class Wt extends _e{constructor(n){super(),ge(this,n,Jt,Yt,de,{name:0})}}var Qt=Object.freeze(Object.defineProperty({__proto__:null,default:Wt},Symbol.toStringTag,{value:"Module"}));const{setTimeout:Ve,window:Ae}=Ke;function qe(h,n,e){const r=h.slice();return r[15]=n[e],r}function ze(h,n){let e,r,c,u,m;var b=n[2][n[15].type];function _($){return{props:{name:$[15].name}}}return b&&(c=new b(_(n))),{key:h,first:null,c(){e=z("div"),r=z("div"),c&&ee(c.$$.fragment),u=Q(),this.h()},l($){e=j($,"DIV",{class:!0});var g=V(e);r=j(g,"DIV",{class:!0});var k=V(r);c&&le(c.$$.fragment,k),k.forEach(O),u=U(g),g.forEach(O),this.h()},h(){C(r,"class","popup-content svelte-tihr16"),C(e,"class","popup svelte-tihr16"),this.first=e},m($,g){J($,e,g),N(e,r),c&&te(c,r,null),N(e,u),m=!0},p($,g){n=$;const k={};if(g&16&&(k.name=n[15].name),b!==(b=n[2][n[15].type])){if(c){he();const d=c;F(d.$$.fragment,1,0,()=>{ne(d,1)}),pe()}b?(c=new b(_(n)),ee(c.$$.fragment),L(c.$$.fragment,1),te(c,r,null)):c=null}else b&&c.$set(k)},i($){m||(c&&L(c.$$.fragment,$),m=!0)},o($){c&&F(c.$$.fragment,$),m=!1},d($){$&&O(e),c&&ne(c)}}}function Ut(h){let n=!1,e=()=>{n=!1},r,c,u=[],m=new Map,b,_,$;Xe(h[7]);let g=h[4];const k=d=>d[15].id;for(let d=0;d<g.length;d+=1){let A=qe(h,g,d),M=k(A);m.set(M,u[d]=ze(M,A))}return{c(){c=z("div");for(let d=0;d<u.length;d+=1)u[d].c();this.h()},l(d){c=j(d,"DIV",{class:!0});var A=V(c);for(let M=0;M<u.length;M+=1)u[M].l(A);A.forEach(O),this.h()},h(){C(c,"class","hint-overlay svelte-tihr16")},m(d,A){J(d,c,A);for(let M=0;M<u.length;M+=1)u[M].m(c,null);h[8](c),b=!0,_||($=[ke(Ae,"scroll",()=>{n=!0,clearTimeout(r),r=Ve(e,100),h[7]()}),ke(c,"mouseover",h[9]),ke(c,"mouseout",h[10])],_=!0)},p(d,[A]){A&2&&!n&&(n=!0,clearTimeout(r),scrollTo(Ae.pageXOffset,d[1]),r=Ve(e,100)),A&20&&(g=d[4],he(),u=Ze(u,A,k,1,d,g,m,c,xe,ze,null,qe),pe())},i(d){if(!b){for(let A=0;A<g.length;A+=1)L(u[A]);b=!0}},o(d){for(let A=0;A<u.length;A+=1)F(u[A]);b=!1},d(d){d&&O(c);for(let A=0;A<u.length;A+=1)u[A].d();h[8](null),_=!1,je($)}}}function Xt(h,n,e){let r;Ye(h,bt,t=>e(6,r=t));let c={"./popups/docs.svelte":Lt,"./popups/inherent.svelte":jt,"./popups/primitive.svelte":Qt},u={};Object.entries(c).forEach(([t,l])=>{let s=t.split("/");e(2,u[s[s.length-1].split(".")[0]]=l.default,u)}),console.log(u);let m,b=!0,_,$=0,g=r;function k(){if(m!==null)if(g.length===0)e(3,m.style.display="none",m),e(3,m.style.transition="",m),e(3,m.style.top="",m),e(3,m.style.left="",m);else{let t=g[0].span.getBoundingClientRect().bottom,l=g[0].span.getBoundingClientRect().left;e(3,m.style.transition="top 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s, left 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s",m),e(3,m.style.display="",m),e(3,m.style.top=t+10+"px",m),e(3,m.style.left=l+"px",m),e(3,m.style.height=window.innerHeight-t-10+"px",m),e(3,m.style.width=window.innerWidth-l-40+"px",m),requestAnimationFrame(()=>{e(3,m.style.top=t+"px",m)}),setTimeout(()=>{e(3,m.style.transition="",m)},200)}}function d(){e(4,g=r),console.log(g)}function A(){return g}function M(){e(1,_=Ae.pageYOffset)}function Y(t){et[t?"unshift":"push"](()=>{m=t,e(3,m)})}const B=()=>e(0,b=!1),o=()=>e(0,b=!0);return h.$$.update=()=>{h.$$.dirty&99&&setTimeout(()=>{(b||$!==_)&&(b&&d(),k(),e(5,$=_),e(0,b=b||A().length==0))},1)},[b,_,u,m,g,$,r,M,Y,B,o]}class Zt extends _e{constructor(n){super(),ge(this,n,Xt,Ut,de,{})}}function Kt(h){let n,e,r,c,u,m,b=h[2]?"Hide Table":"Show Table",_,$,g,k=h[3].readerEnabled?"Disable":"Enable",d,A,M,Y,B,o,t,l,s,i,f,v,w,H,y,E,S,q,T,P,R,W,ae,x;s=new Ht({});const me=h[6].default,G=tt(me,h,h[5],null);return R=new Zt({}),{c(){n=z("div"),e=z("nav"),r=z("a"),c=X("FIGS!!"),u=Q(),m=z("a"),_=X(b),$=Q(),g=z("a"),d=X(k),A=X(" Better Reader"),M=Q(),Y=z("a"),B=X(Ce),o=Q(),t=z("div"),l=z("div"),ee(s.$$.fragment),i=Q(),f=z("footer"),v=X("Made by applejuice"),w=Q(),H=z("div"),G&&G.c(),y=Q(),E=Ie("svg"),q=Q(),T=Ie("svg"),P=Q(),ee(R.$$.fragment),this.h()},l(I){n=j(I,"DIV",{class:!0});var D=V(n);e=j(D,"NAV",{class:!0});var K=V(e);r=j(K,"A",{class:!0,href:!0});var Ee=V(r);c=Z(Ee,"FIGS!!"),Ee.forEach(O),u=U(K),m=j(K,"A",{class:!0,href:!0,"aria-label":!0});var re=V(m);_=Z(re,b),re.forEach(O),$=U(K),g=j(K,"A",{class:!0,href:!0});var ve=V(g);d=Z(ve,k),A=Z(ve," Better Reader"),ve.forEach(O),M=U(K),Y=j(K,"A",{class:!0,href:!0});var $e=V(Y);B=Z($e,Ce),$e.forEach(O),K.forEach(O),o=U(D),t=j(D,"DIV",{class:!0});var we=V(t);l=j(we,"DIV",{class:!0});var oe=V(l);le(s.$$.fragment,oe),i=U(oe),f=j(oe,"FOOTER",{class:!0});var ce=V(f);v=Z(ce,"Made by applejuice"),ce.forEach(O),oe.forEach(O),we.forEach(O),w=U(D),H=j(D,"DIV",{class:!0});var fe=V(H);G&&G.l(fe),y=U(fe),E=Oe(fe,"svg",{class:!0,width:!0,height:!0,"aria-hidden":!0});var We=V(E);We.forEach(O),fe.forEach(O),D.forEach(O),q=U(I),T=Oe(I,"svg",{id:!0,class:!0,width:!0,height:!0}),V(T).forEach(O),P=U(I),le(R.$$.fragment,I),this.h()},h(){C(r,"class","nav-item svelte-1olg3tp"),C(r,"href",ye+"/"),C(m,"class","nav-item expander svelte-1olg3tp"),C(m,"href","javascript:;"),C(m,"aria-label","Expand"),C(g,"class","nav-item svelte-1olg3tp"),C(g,"href","javascript:;"),ue(g,"margin-left","auto",!1),C(Y,"class","nav-item svelte-1olg3tp"),C(Y,"href","javascript:;"),ue(Y,"font-size",Math.max(h[1],10)-9+"em",!1),ue(Y,"opacity","0.5",!1),C(e,"class","figura-background svelte-1olg3tp"),be(e,"expanded",h[2]),C(f,"class","svelte-1olg3tp"),C(l,"class","category-inner svelte-1olg3tp"),C(t,"class","category figura-background svelte-1olg3tp"),be(t,"expanded",h[2]),C(E,"class","cheese-svg svelte-1olg3tp"),C(E,"width","100%"),C(E,"height","100%"),C(E,"aria-hidden","true"),ue(E,"pointer-events","none",!1),ue(E,"touch-action","none",!1),C(H,"class","content svelte-1olg3tp"),be(H,"expanded",h[2]),C(n,"class","root svelte-1olg3tp"),C(T,"id","root-glasspane"),C(T,"class","glasspane svelte-1olg3tp"),C(T,"width","100%"),C(T,"height","100%"),ue(T,"z-index","99999",!1)},m(I,D){J(I,n,D),N(n,e),N(e,r),N(r,c),N(e,u),N(e,m),N(m,_),N(e,$),N(e,g),N(g,d),N(g,A),N(e,M),N(e,Y),N(Y,B),N(n,o),N(n,t),N(t,l),te(s,l,null),N(l,i),N(l,f),N(f,v),N(n,w),N(n,H),G&&G.m(H,null),N(H,y),N(H,E),J(I,q,D),J(I,T,D),J(I,P,D),te(R,I,D),W=!0,ae||(x=[ke(m,"click",h[7]),ke(g,"click",h[8]),ke(Y,"click",h[4]),nt(S=yt.call(null,E,h[0]))],ae=!0)},p(I,[D]){(!W||D&4)&&b!==(b=I[2]?"Hide Table":"Show Table")&&Me(_,b),(!W||D&8)&&k!==(k=I[3].readerEnabled?"Disable":"Enable")&&Me(d,k),D&2&&ue(Y,"font-size",Math.max(I[1],10)-9+"em",!1),D&4&&be(e,"expanded",I[2]),D&4&&be(t,"expanded",I[2]),G&&G.p&&(!W||D&32)&&rt(G,me,I,I[5],W?it(me,I[5],D,null):lt(I[5]),null),S&&st(S.update)&&D&1&&S.update.call(null,I[0]),D&4&&be(H,"expanded",I[2])},i(I){W||(L(s.$$.fragment,I),L(G,I),L(R.$$.fragment,I),W=!0)},o(I){F(s.$$.fragment,I),F(G,I),F(R.$$.fragment,I),W=!1},d(I){I&&O(n),ne(s),G&&G.d(I),I&&O(q),I&&O(T),I&&O(P),ne(R,I),ae=!1,je(x)}}}function xt(h,n,e){let r;Ye(h,Be,M=>e(3,r=M));let{$$slots:c={},$$scope:u}=n,m=null,b=!1;at(()=>{let M=()=>{e(1,$+=g),e(1,$=Math.max($,0)),g-=.001,g*=.99,$>20&&e(0,b=!0),requestAnimationFrame(M)};m=requestAnimationFrame(M)}),ot(()=>m&&cancelAnimationFrame(m));function _(){b||(g+=.1)}let $=0,g=0,k=!1;const d=()=>e(2,k=!k),A=()=>ct(Be,r.readerEnabled=!r.readerEnabled,r);return h.$$set=M=>{"$$scope"in M&&e(5,u=M.$$scope)},[b,$,k,r,_,u,c,d,A]}class ln extends _e{constructor(n){super(),ge(this,n,xt,Kt,de,{})}}export{ln as default};
