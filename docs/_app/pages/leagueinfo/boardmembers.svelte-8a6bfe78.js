import{S as oe,i as re,s as ne,e as i,t as D,k as y,c as h,a as c,h as B,d as s,m as T,b as S,g as N,G as t,H as F,O as ie,J as ee}from"../../chunks/vendor-57dbb66d.js";function te(d,l,r){const E=d.slice();return E[1]=l[r],E}function le(d,l,r){const E=d.slice();return E[1]=l[r],E}function ae(d){let l,r,E=d[1].position+"",H,_,m,g=d[1].name+"",u,P,n,R=d[1].phone+"",V,q,f,w=d[1].email+"",G,k;return{c(){l=i("div"),r=i("p"),H=D(E),_=y(),m=i("p"),u=D(g),P=y(),n=i("p"),V=D(R),q=y(),f=i("p"),G=D(w),k=y(),this.h()},l(b){l=h(b,"DIV",{class:!0});var o=c(l);r=h(o,"P",{class:!0});var I=c(r);H=B(I,E),I.forEach(s),_=T(o),m=h(o,"P",{});var A=c(m);u=B(A,g),A.forEach(s),P=T(o),n=h(o,"P",{});var C=c(n);V=B(C,R),C.forEach(s),q=T(o),f=h(o,"P",{});var x=c(f);G=B(x,w),x.forEach(s),k=T(o),o.forEach(s),this.h()},h(){S(r,"class","font-bold underline"),S(l,"class","my-2 text-center")},m(b,o){N(b,l,o),t(l,r),t(r,H),t(l,_),t(l,m),t(m,u),t(l,P),t(l,n),t(n,V),t(l,q),t(l,f),t(f,G),t(l,k)},p:F,d(b){b&&s(l)}}}function se(d){let l,r,E=d[1].position+"",H,_,m,g=d[1].name+"",u,P,n,R=d[1].phone+"",V,q,f,w=d[1].email+"",G,k;return{c(){l=i("tr"),r=i("td"),H=D(E),_=y(),m=i("td"),u=D(g),P=y(),n=i("td"),V=D(R),q=y(),f=i("td"),G=D(w),k=y(),this.h()},l(b){l=h(b,"TR",{});var o=c(l);r=h(o,"TD",{class:!0});var I=c(r);H=B(I,E),I.forEach(s),_=T(o),m=h(o,"TD",{class:!0});var A=c(m);u=B(A,g),A.forEach(s),P=T(o),n=h(o,"TD",{class:!0});var C=c(n);V=B(C,R),C.forEach(s),q=T(o),f=h(o,"TD",{class:!0});var x=c(f);G=B(x,w),x.forEach(s),k=T(o),o.forEach(s),this.h()},h(){S(r,"class","pr-2"),S(m,"class","pr-2"),S(n,"class","pr-2"),S(f,"class","pr-2")},m(b,o){N(b,l,o),t(l,r),t(r,H),t(l,_),t(l,m),t(m,u),t(l,P),t(l,n),t(n,V),t(l,q),t(l,f),t(f,G),t(l,k)},p:F,d(b){b&&s(l)}}}function he(d){let l,r,E,H,_,m,g,u,P,n,R,V,q,f,w,G,k,b,o,I,A,C,x,Y=d[0],p=[];for(let e=0;e<Y.length;e+=1)p[e]=ae(le(d,Y,e));let $=d[0],v=[];for(let e=0;e<$.length;e+=1)v[e]=se(te(d,$,e));return{c(){l=y(),r=i("h2"),E=D("Board Members"),H=y(),_=i("div");for(let e=0;e<p.length;e+=1)p[e].c();m=y(),g=i("div"),u=i("table"),P=i("thead"),n=i("tr"),R=i("th"),V=D("Position"),q=y(),f=i("th"),w=D("Name"),G=y(),k=i("th"),b=D("Phone"),o=y(),I=i("th"),A=D("Email"),C=y(),x=i("tbody");for(let e=0;e<v.length;e+=1)v[e].c();this.h()},l(e){ie('[data-svelte="svelte-cvs839"]',document.head).forEach(s),l=T(e),r=h(e,"H2",{class:!0});var a=c(r);E=B(a,"Board Members"),a.forEach(s),H=T(e),_=h(e,"DIV",{class:!0});var J=c(_);for(let O=0;O<p.length;O+=1)p[O].l(J);J.forEach(s),m=T(e),g=h(e,"DIV",{class:!0});var K=c(g);u=h(K,"TABLE",{class:!0});var j=c(u);P=h(j,"THEAD",{});var z=c(P);n=h(z,"TR",{class:!0});var L=c(n);R=h(L,"TH",{});var Q=c(R);V=B(Q,"Position"),Q.forEach(s),q=T(L),f=h(L,"TH",{});var U=c(f);w=B(U,"Name"),U.forEach(s),G=T(L),k=h(L,"TH",{});var W=c(k);b=B(W,"Phone"),W.forEach(s),o=T(L),I=h(L,"TH",{});var X=c(I);A=B(X,"Email"),X.forEach(s),L.forEach(s),z.forEach(s),C=T(j),x=h(j,"TBODY",{});var Z=c(x);for(let O=0;O<v.length;O+=1)v[O].l(Z);Z.forEach(s),j.forEach(s),K.forEach(s),this.h()},h(){document.title="CYBL Board Members",S(r,"class","font-bold text-xl text-center my-2"),S(_,"class","block md:hidden text-left"),S(n,"class","text-left"),S(u,"class","hidden table-fixed md:block"),S(g,"class","flex justify-center mb-2")},m(e,M){N(e,l,M),N(e,r,M),t(r,E),N(e,H,M),N(e,_,M);for(let a=0;a<p.length;a+=1)p[a].m(_,null);N(e,m,M),N(e,g,M),t(g,u),t(u,P),t(P,n),t(n,R),t(R,V),t(n,q),t(n,f),t(f,w),t(n,G),t(n,k),t(k,b),t(n,o),t(n,I),t(I,A),t(u,C),t(u,x);for(let a=0;a<v.length;a+=1)v[a].m(x,null)},p(e,[M]){if(M&1){Y=e[0];let a;for(a=0;a<Y.length;a+=1){const J=le(e,Y,a);p[a]?p[a].p(J,M):(p[a]=ae(J),p[a].c(),p[a].m(_,null))}for(;a<p.length;a+=1)p[a].d(1);p.length=Y.length}if(M&1){$=e[0];let a;for(a=0;a<$.length;a+=1){const J=te(e,$,a);v[a]?v[a].p(J,M):(v[a]=se(J),v[a].c(),v[a].m(x,null))}for(;a<v.length;a+=1)v[a].d(1);v.length=$.length}},i:F,o:F,d(e){e&&s(l),e&&s(r),e&&s(H),e&&s(_),ee(p,e),e&&s(m),e&&s(g),ee(v,e)}}}function ce(d){return[[{position:"President",name:"Jennifer Kluger",phone:"(989) 621-6716",email:""},{position:"Vice President",name:"Terry Geliske",phone:"(301) 351-1446",email:""},{position:"Secretary",name:"Tina Howard",phone:"(810) 459-3753",email:"tmhoward6@yahoo.com"},{position:"Treasurer",name:"Mary Rilley",phone:"(810) 650-9744",email:"maryrilley1@aol.com"},{position:"Fundraising",name:"Mary Rilley",phone:"(810) 650-9744",email:"maryrilley1@aol.com"},{position:"Equipment",name:"Barry Geliske",phone:"(586) 215-9596",email:"thomemi@frontier.com"}]]}class fe extends oe{constructor(l){super();re(this,l,ce,he,ne,{})}}export{fe as default};
