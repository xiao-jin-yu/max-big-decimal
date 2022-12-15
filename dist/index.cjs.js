"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
/*!
 *  decimal.js v10.4.2
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var n,e,t=9e15,i="0123456789abcdef",r="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",s="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",o={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-t,maxE:t,crypto:!1},u=!0,c="[DecimalError] Invalid argument: ",l="[object Decimal]",f=Math.floor,h=Math.pow,a=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,d=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,g=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,p=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,m=1e7,w=r.length-1,v=s.length-1,N={toStringTag:l};function b(n){var e,t,i,r=n.length-1,s="",o=n[0];if(r>0){for(s+=o,e=1;e<r;e++)(t=7-(i=n[e]+"").length)&&(s+=T(t)),s+=i;(t=7-(i=(o=n[e])+"").length)&&(s+=T(t))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function x(n,e,t){if(n!==~~n||n<e||n>t)throw Error(c+n)}function E(n,e,t,i){var r,s,o,u;for(s=n[0];s>=10;s/=10)--e;return--e<0?(e+=7,r=0):(r=Math.ceil((e+1)/7),e%=7),s=h(10,7-e),u=n[r]%s|0,null==i?e<3?(0==e?u=u/100|0:1==e&&(u=u/10|0),o=t<4&&99999==u||t>3&&49999==u||5e4==u||0==u):o=(t<4&&u+1==s||t>3&&u+1==s/2)&&(n[r+1]/s/100|0)==h(10,e-2)-1||(u==s/2||0==u)&&0==(n[r+1]/s/100|0):e<4?(0==e?u=u/1e3|0:1==e?u=u/100|0:2==e&&(u=u/10|0),o=(i||t<4)&&9999==u||!i&&t>3&&4999==u):o=((i||t<4)&&u+1==s||!i&&t>3&&u+1==s/2)&&(n[r+1]/s/1e3|0)==h(10,e-3)-1,o}function y(n,e,t){for(var r,s,o=[0],u=0,c=n.length;u<c;){for(s=o.length;s--;)o[s]*=e;for(o[0]+=i.indexOf(n.charAt(u++)),r=0;r<o.length;r++)o[r]>t-1&&(void 0===o[r+1]&&(o[r+1]=0),o[r+1]+=o[r]/t|0,o[r]%=t)}return o.reverse()}N.absoluteValue=N.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),D(n)},N.ceil=function(){return D(new this.constructor(this),this.e+1,2)},N.clampedTo=N.clamp=function(n,e){var t=this,i=t.constructor;if(n=new i(n),e=new i(e),!n.s||!e.s)return new i(NaN);if(n.gt(e))throw Error(c+e);return t.cmp(n)<0?n:t.cmp(e)>0?e:new i(t)},N.comparedTo=N.cmp=function(n){var e,t,i,r,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,l=n.s;if(!o||!u)return c&&l?c!==l?c:o===u?0:!o^c<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-l:0;if(c!==l)return c;if(s.e!==n.e)return s.e>n.e^c<0?1:-1;for(e=0,t=(i=o.length)<(r=u.length)?i:r;e<t;++e)if(o[e]!==u[e])return o[e]>u[e]^c<0?1:-1;return i===r?0:i>r^c<0?1:-1},N.cosine=N.cos=function(){var n,t,i=this,r=i.constructor;return i.d?i.d[0]?(n=r.precision,t=r.rounding,r.precision=n+Math.max(i.e,i.sd())+7,r.rounding=1,i=function(n,e){var t,i,r;if(e.isZero())return e;(i=e.d.length)<32?r=(1/z(4,t=Math.ceil(i/3))).toString():(t=16,r="2.3283064365386962890625e-10");n.precision+=t,e=U(n,1,e.times(r),new n(1));for(var s=t;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=t,e}(r,C(r,i)),r.precision=n,r.rounding=t,D(2==e||3==e?i.neg():i,n,t,!0)):new r(1):new r(NaN)},N.cubeRoot=N.cbrt=function(){var n,e,t,i,r,s,o,c,l,a,d=this,g=d.constructor;if(!d.isFinite()||d.isZero())return new g(d);for(u=!1,(s=d.s*h(d.s*d,1/3))&&Math.abs(s)!=1/0?i=new g(s.toString()):(t=b(d.d),(s=((n=d.e)-t.length+1)%3)&&(t+=1==s||-2==s?"0":"00"),s=h(t,1/3),n=f((n+1)/3)-(n%3==(n<0?-1:2)),(i=new g(t=s==1/0?"5e"+n:(t=s.toExponential()).slice(0,t.indexOf("e")+1)+n)).s=d.s),o=(n=g.precision)+3;;)if(a=(l=(c=i).times(c).times(c)).plus(d),i=O(a.plus(d).times(c),a.plus(l),o+2,1),b(c.d).slice(0,o)===(t=b(i.d)).slice(0,o)){if("9999"!=(t=t.slice(o-3,o+1))&&(r||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(D(i,n+1,1),e=!i.times(i).times(i).eq(d));break}if(!r&&(D(c,n+1,0),c.times(c).times(c).eq(d))){i=c;break}o+=4,r=1}return u=!0,D(i,n,g.rounding,e)},N.decimalPlaces=N.dp=function(){var n,e=this.d,t=NaN;if(e){if(t=7*((n=e.length-1)-f(this.e/7)),n=e[n])for(;n%10==0;n/=10)t--;t<0&&(t=0)}return t},N.dividedBy=N.div=function(n){return O(this,new this.constructor(n))},N.dividedToIntegerBy=N.divToInt=function(n){var e=this.constructor;return D(O(this,new e(n),0,1,1),e.precision,e.rounding)},N.equals=N.eq=function(n){return 0===this.cmp(n)},N.floor=function(){return D(new this.constructor(this),this.e+1,3)},N.greaterThan=N.gt=function(n){return this.cmp(n)>0},N.greaterThanOrEqualTo=N.gte=function(n){var e=this.cmp(n);return 1==e||0===e},N.hyperbolicCosine=N.cosh=function(){var n,e,t,i,r,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;t=o.precision,i=o.rounding,o.precision=t+Math.max(s.e,s.sd())+4,o.rounding=1,(r=s.d.length)<32?e=(1/z(4,n=Math.ceil(r/3))).toString():(n=16,e="2.3283064365386962890625e-10"),s=U(o,1,s.times(e),new o(1),!0);for(var c,l=n,f=new o(8);l--;)c=s.times(s),s=u.minus(c.times(f.minus(c.times(f))));return D(s,o.precision=t,o.rounding=i,!0)},N.hyperbolicSine=N.sinh=function(){var n,e,t,i,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,t=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,(i=r.d.length)<3)r=U(s,2,r,r,!0);else{n=(n=1.4*Math.sqrt(i))>16?16:0|n,r=U(s,2,r=r.times(1/z(5,n)),r,!0);for(var o,u=new s(5),c=new s(16),l=new s(20);n--;)o=r.times(r),r=r.times(u.plus(o.times(c.times(o).plus(l))))}return s.precision=e,s.rounding=t,D(r,e,t,!0)},N.hyperbolicTangent=N.tanh=function(){var n,e,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+7,i.rounding=1,O(t.sinh(),t.cosh(),i.precision=n,i.rounding=e)):new i(t.s)},N.inverseCosine=N.acos=function(){var n,e=this,t=e.constructor,i=e.abs().cmp(1),r=t.precision,s=t.rounding;return-1!==i?0===i?e.isNeg()?$(t,r,s):new t(0):new t(NaN):e.isZero()?$(t,r+4,s).times(.5):(t.precision=r+6,t.rounding=1,e=e.asin(),n=$(t,r+4,s).times(.5),t.precision=r,t.rounding=s,n.minus(e))},N.inverseHyperbolicCosine=N.acosh=function(){var n,e,t=this,i=t.constructor;return t.lte(1)?new i(t.eq(1)?0:NaN):t.isFinite()?(n=i.precision,e=i.rounding,i.precision=n+Math.max(Math.abs(t.e),t.sd())+4,i.rounding=1,u=!1,t=t.times(t).minus(1).sqrt().plus(t),u=!0,i.precision=n,i.rounding=e,t.ln()):new i(t)},N.inverseHyperbolicSine=N.asinh=function(){var n,e,t=this,i=t.constructor;return!t.isFinite()||t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+2*Math.max(Math.abs(t.e),t.sd())+6,i.rounding=1,u=!1,t=t.times(t).plus(1).sqrt().plus(t),u=!0,i.precision=n,i.rounding=e,t.ln())},N.inverseHyperbolicTangent=N.atanh=function(){var n,e,t,i,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,e=s.rounding,i=r.sd(),Math.max(i,n)<2*-r.e-1?D(new s(r),n,e,!0):(s.precision=t=i-r.e,r=O(r.plus(1),new s(1).minus(r),t+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=e,r.times(.5))):new s(NaN)},N.inverseSine=N.asin=function(){var n,e,t,i,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),t=s.precision,i=s.rounding,-1!==e?0===e?((n=$(s,t+4,i).times(.5)).s=r.s,n):new s(NaN):(s.precision=t+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=i,r.times(2)))},N.inverseTangent=N.atan=function(){var n,e,t,i,r,s,o,c,l,f=this,h=f.constructor,a=h.precision,d=h.rounding;if(f.isFinite()){if(f.isZero())return new h(f);if(f.abs().eq(1)&&a+4<=v)return(o=$(h,a+4,d).times(.25)).s=f.s,o}else{if(!f.s)return new h(NaN);if(a+4<=v)return(o=$(h,a+4,d).times(.5)).s=f.s,o}for(h.precision=c=a+10,h.rounding=1,n=t=Math.min(28,c/7+2|0);n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(u=!1,e=Math.ceil(c/7),i=1,l=f.times(f),o=new h(f),r=f;-1!==n;)if(r=r.times(l),s=o.minus(r.div(i+=2)),r=r.times(l),void 0!==(o=s.plus(r.div(i+=2))).d[e])for(n=e;o.d[n]===s.d[n]&&n--;);return t&&(o=o.times(2<<t-1)),u=!0,D(o,h.precision=a,h.rounding=d,!0)},N.isFinite=function(){return!!this.d},N.isInteger=N.isInt=function(){return!!this.d&&f(this.e/7)>this.d.length-2},N.isNaN=function(){return!this.s},N.isNegative=N.isNeg=function(){return this.s<0},N.isPositive=N.isPos=function(){return this.s>0},N.isZero=function(){return!!this.d&&0===this.d[0]},N.lessThan=N.lt=function(n){return this.cmp(n)<0},N.lessThanOrEqualTo=N.lte=function(n){return this.cmp(n)<1},N.logarithm=N.log=function(n){var e,t,i,r,s,o,c,l,f=this,h=f.constructor,a=h.precision,d=h.rounding;if(null==n)n=new h(10),e=!0;else{if(t=(n=new h(n)).d,n.s<0||!t||!t[0]||n.eq(1))return new h(NaN);e=n.eq(10)}if(t=f.d,f.s<0||!t||!t[0]||f.eq(1))return new h(t&&!t[0]?-1/0:1!=f.s?NaN:t?0:1/0);if(e)if(t.length>1)s=!0;else{for(r=t[0];r%10==0;)r/=10;s=1!==r}if(u=!1,o=Z(f,c=a+5),i=e?P(h,c+10):Z(n,c),E((l=O(o,i,c,1)).d,r=a,d))do{if(o=Z(f,c+=10),i=e?P(h,c+10):Z(n,c),l=O(o,i,c,1),!s){+b(l.d).slice(r+1,r+15)+1==1e14&&(l=D(l,a+1,0));break}}while(E(l.d,r+=10,d));return u=!0,D(l,a,d)},N.minus=N.sub=function(n){var e,t,i,r,s,o,c,l,h,a,d,g,p=this,w=p.constructor;if(n=new w(n),!p.d||!n.d)return p.s&&n.s?p.d?n.s=-n.s:n=new w(n.d||p.s!==n.s?p:NaN):n=new w(NaN),n;if(p.s!=n.s)return n.s=-n.s,p.plus(n);if(h=p.d,g=n.d,c=w.precision,l=w.rounding,!h[0]||!g[0]){if(g[0])n.s=-n.s;else{if(!h[0])return new w(3===l?-0:0);n=new w(p)}return u?D(n,c,l):n}if(t=f(n.e/7),a=f(p.e/7),h=h.slice(),s=a-t){for((d=s<0)?(e=h,s=-s,o=g.length):(e=g,t=a,o=h.length),s>(i=Math.max(Math.ceil(c/7),o)+2)&&(s=i,e.length=1),e.reverse(),i=s;i--;)e.push(0);e.reverse()}else{for((d=(i=h.length)<(o=g.length))&&(o=i),i=0;i<o;i++)if(h[i]!=g[i]){d=h[i]<g[i];break}s=0}for(d&&(e=h,h=g,g=e,n.s=-n.s),o=h.length,i=g.length-o;i>0;--i)h[o++]=0;for(i=g.length;i>s;){if(h[--i]<g[i]){for(r=i;r&&0===h[--r];)h[r]=m-1;--h[r],h[i]+=m}h[i]-=g[i]}for(;0===h[--o];)h.pop();for(;0===h[0];h.shift())--t;return h[0]?(n.d=h,n.e=R(h,t),u?D(n,c,l):n):new w(3===l?-0:0)},N.modulo=N.mod=function(n){var e,t=this,i=t.constructor;return n=new i(n),!t.d||!n.s||n.d&&!n.d[0]?new i(NaN):!n.d||t.d&&!t.d[0]?D(new i(t),i.precision,i.rounding):(u=!1,9==i.modulo?(e=O(t,n.abs(),0,3,1)).s*=n.s:e=O(t,n,0,i.modulo,1),e=e.times(n),u=!0,t.minus(e))},N.naturalExponential=N.exp=function(){return A(this)},N.naturalLogarithm=N.ln=function(){return Z(this)},N.negated=N.neg=function(){var n=new this.constructor(this);return n.s=-n.s,D(n)},N.plus=N.add=function(n){var e,t,i,r,s,o,c,l,h,a,d=this,g=d.constructor;if(n=new g(n),!d.d||!n.d)return d.s&&n.s?d.d||(n=new g(n.d||d.s===n.s?d:NaN)):n=new g(NaN),n;if(d.s!=n.s)return n.s=-n.s,d.minus(n);if(h=d.d,a=n.d,c=g.precision,l=g.rounding,!h[0]||!a[0])return a[0]||(n=new g(d)),u?D(n,c,l):n;if(s=f(d.e/7),i=f(n.e/7),h=h.slice(),r=s-i){for(r<0?(t=h,r=-r,o=a.length):(t=a,i=s,o=h.length),r>(o=(s=Math.ceil(c/7))>o?s+1:o+1)&&(r=o,t.length=1),t.reverse();r--;)t.push(0);t.reverse()}for((o=h.length)-(r=a.length)<0&&(r=o,t=a,a=h,h=t),e=0;r;)e=(h[--r]=h[r]+a[r]+e)/m|0,h[r]%=m;for(e&&(h.unshift(e),++i),o=h.length;0==h[--o];)h.pop();return n.d=h,n.e=R(h,i),u?D(n,c,l):n},N.precision=N.sd=function(n){var e,t=this;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(c+n);return t.d?(e=q(t.d),n&&t.e+1>e&&(e=t.e+1)):e=NaN,e},N.round=function(){var n=this,e=n.constructor;return D(new e(n),n.e+1,e.rounding)},N.sine=N.sin=function(){var n,t,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(n=r.precision,t=r.rounding,r.precision=n+Math.max(i.e,i.sd())+7,r.rounding=1,i=function(n,e){var t,i=e.d.length;if(i<3)return e.isZero()?e:U(n,2,e,e);t=(t=1.4*Math.sqrt(i))>16?16:0|t,e=e.times(1/z(5,t)),e=U(n,2,e,e);for(var r,s=new n(5),o=new n(16),u=new n(20);t--;)r=e.times(e),e=e.times(s.plus(r.times(o.times(r).minus(u))));return e}(r,C(r,i)),r.precision=n,r.rounding=t,D(e>2?i.neg():i,n,t,!0)):new r(NaN)},N.squareRoot=N.sqrt=function(){var n,e,t,i,r,s,o=this,c=o.d,l=o.e,h=o.s,a=o.constructor;if(1!==h||!c||!c[0])return new a(!h||h<0&&(!c||c[0])?NaN:c?o:1/0);for(u=!1,0==(h=Math.sqrt(+o))||h==1/0?(((e=b(c)).length+l)%2==0&&(e+="0"),h=Math.sqrt(e),l=f((l+1)/2)-(l<0||l%2),i=new a(e=h==1/0?"5e"+l:(e=h.toExponential()).slice(0,e.indexOf("e")+1)+l)):i=new a(h.toString()),t=(l=a.precision)+3;;)if(i=(s=i).plus(O(o,s,t+2,1)).times(.5),b(s.d).slice(0,t)===(e=b(i.d)).slice(0,t)){if("9999"!=(e=e.slice(t-3,t+1))&&(r||"4999"!=e)){+e&&(+e.slice(1)||"5"!=e.charAt(0))||(D(i,l+1,1),n=!i.times(i).eq(o));break}if(!r&&(D(s,l+1,0),s.times(s).eq(o))){i=s;break}t+=4,r=1}return u=!0,D(i,l,a.rounding,n)},N.tangent=N.tan=function(){var n,t,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(n=r.precision,t=r.rounding,r.precision=n+10,r.rounding=1,(i=i.sin()).s=1,i=O(i,new r(1).minus(i.times(i)).sqrt(),n+10,0),r.precision=n,r.rounding=t,D(2==e||4==e?i.neg():i,n,t,!0)):new r(NaN)},N.times=N.mul=function(n){var e,t,i,r,s,o,c,l,h,a=this,d=a.constructor,g=a.d,p=(n=new d(n)).d;if(n.s*=a.s,!(g&&g[0]&&p&&p[0]))return new d(!n.s||g&&!g[0]&&!p||p&&!p[0]&&!g?NaN:g&&p?0*n.s:n.s/0);for(t=f(a.e/7)+f(n.e/7),(l=g.length)<(h=p.length)&&(s=g,g=p,p=s,o=l,l=h,h=o),s=[],i=o=l+h;i--;)s.push(0);for(i=h;--i>=0;){for(e=0,r=l+i;r>i;)c=s[r]+p[i]*g[r-i-1]+e,s[r--]=c%m|0,e=c/m|0;s[r]=(s[r]+e)%m|0}for(;!s[--o];)s.pop();return e?++t:s.shift(),n.d=s,n.e=R(s,t),u?D(n,d.precision,d.rounding):n},N.toBinary=function(n,e){return H(this,2,n,e)},N.toDecimalPlaces=N.toDP=function(n,e){var t=this,i=t.constructor;return t=new i(t),void 0===n?t:(x(n,0,1e9),void 0===e?e=i.rounding:x(e,0,8),D(t,n+t.e+1,e))},N.toExponential=function(n,e){var t,i=this,r=i.constructor;return void 0===n?t=M(i,!0):(x(n,0,1e9),void 0===e?e=r.rounding:x(e,0,8),t=M(i=D(new r(i),n+1,e),!0,n+1)),i.isNeg()&&!i.isZero()?"-"+t:t},N.toFixed=function(n,e){var t,i,r=this,s=r.constructor;return void 0===n?t=M(r):(x(n,0,1e9),void 0===e?e=s.rounding:x(e,0,8),t=M(i=D(new s(r),n+r.e+1,e),!1,n+i.e+1)),r.isNeg()&&!r.isZero()?"-"+t:t},N.toFraction=function(n){var e,t,i,r,s,o,l,f,a,d,g,p,m=this,w=m.d,v=m.constructor;if(!w)return new v(m);if(a=t=new v(1),i=f=new v(0),o=(s=(e=new v(i)).e=q(w)-m.e-1)%7,e.d[0]=h(10,o<0?7+o:o),null==n)n=s>0?e:a;else{if(!(l=new v(n)).isInt()||l.lt(a))throw Error(c+l);n=l.gt(e)?s>0?e:a:l}for(u=!1,l=new v(b(w)),d=v.precision,v.precision=s=7*w.length*2;g=O(l,e,0,1,1),1!=(r=t.plus(g.times(i))).cmp(n);)t=i,i=r,r=a,a=f.plus(g.times(r)),f=r,r=e,e=l.minus(g.times(r)),l=r;return r=O(n.minus(t),i,0,1,1),f=f.plus(r.times(a)),t=t.plus(r.times(i)),f.s=a.s=m.s,p=O(a,i,s,1).minus(m).abs().cmp(O(f,t,s,1).minus(m).abs())<1?[a,i]:[f,t],v.precision=d,u=!0,p},N.toHexadecimal=N.toHex=function(n,e){return H(this,16,n,e)},N.toNearest=function(n,e){var t=this,i=t.constructor;if(t=new i(t),null==n){if(!t.d)return t;n=new i(1),e=i.rounding}else{if(n=new i(n),void 0===e?e=i.rounding:x(e,0,8),!t.d)return n.s?t:n;if(!n.d)return n.s&&(n.s=t.s),n}return n.d[0]?(u=!1,t=O(t,n,0,e,1).times(n),u=!0,D(t)):(n.s=t.s,t=n),t},N.toNumber=function(){return+this},N.toOctal=function(n,e){return H(this,8,n,e)},N.toPower=N.pow=function(n){var e,t,i,r,s,o,c=this,l=c.constructor,a=+(n=new l(n));if(!(c.d&&n.d&&c.d[0]&&n.d[0]))return new l(h(+c,a));if((c=new l(c)).eq(1))return c;if(i=l.precision,s=l.rounding,n.eq(1))return D(c,i,s);if((e=f(n.e/7))>=n.d.length-1&&(t=a<0?-a:a)<=9007199254740991)return r=S(l,c,t,i),n.s<0?new l(1).div(r):D(r,i,s);if((o=c.s)<0){if(e<n.d.length-1)return new l(NaN);if(0==(1&n.d[e])&&(o=1),0==c.e&&1==c.d[0]&&1==c.d.length)return c.s=o,c}return(e=0!=(t=h(+c,a))&&isFinite(t)?new l(t+"").e:f(a*(Math.log("0."+b(c.d))/Math.LN10+c.e+1)))>l.maxE+1||e<l.minE-1?new l(e>0?o/0:0):(u=!1,l.rounding=c.s=1,t=Math.min(12,(e+"").length),(r=A(n.times(Z(c,i+t)),i)).d&&E((r=D(r,i+5,1)).d,i,s)&&(e=i+10,+b((r=D(A(n.times(Z(c,e+t)),e),e+5,1)).d).slice(i+1,i+15)+1==1e14&&(r=D(r,i+1,0))),r.s=o,u=!0,l.rounding=s,D(r,i,s))},N.toPrecision=function(n,e){var t,i=this,r=i.constructor;return void 0===n?t=M(i,i.e<=r.toExpNeg||i.e>=r.toExpPos):(x(n,1,1e9),void 0===e?e=r.rounding:x(e,0,8),t=M(i=D(new r(i),n,e),n<=i.e||i.e<=r.toExpNeg,n)),i.isNeg()&&!i.isZero()?"-"+t:t},N.toSignificantDigits=N.toSD=function(n,e){var t=this.constructor;return void 0===n?(n=t.precision,e=t.rounding):(x(n,1,1e9),void 0===e?e=t.rounding:x(e,0,8)),D(new t(this),n,e)},N.toString=function(){var n=this,e=n.constructor,t=M(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+t:t},N.truncated=N.trunc=function(){return D(new this.constructor(this),this.e+1,1)},N.valueOf=N.toJSON=function(){var n=this,e=n.constructor,t=M(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+t:t};var O=function(){function e(n,e,t){var i,r=0,s=n.length;for(n=n.slice();s--;)i=n[s]*e+r,n[s]=i%t|0,r=i/t|0;return r&&n.unshift(r),n}function t(n,e,t,i){var r,s;if(t!=i)s=t>i?1:-1;else for(r=s=0;r<t;r++)if(n[r]!=e[r]){s=n[r]>e[r]?1:-1;break}return s}function i(n,e,t,i){for(var r=0;t--;)n[t]-=r,r=n[t]<e[t]?1:0,n[t]=r*i+n[t]-e[t];for(;!n[0]&&n.length>1;)n.shift()}return function(r,s,o,u,c,l){var h,a,d,g,p,w,v,N,b,x,E,y,O,M,R,P,$,q,T,S,F=r.constructor,I=r.s==s.s?1:-1,A=r.d,Z=s.d;if(!(A&&A[0]&&Z&&Z[0]))return new F(r.s&&s.s&&(A?!Z||A[0]!=Z[0]:Z)?A&&0==A[0]||!Z?0*I:I/0:NaN);for(l?(p=1,a=r.e-s.e):(l=m,p=7,a=f(r.e/p)-f(s.e/p)),T=Z.length,$=A.length,x=(b=new F(I)).d=[],d=0;Z[d]==(A[d]||0);d++);if(Z[d]>(A[d]||0)&&a--,null==o?(M=o=F.precision,u=F.rounding):M=c?o+(r.e-s.e)+1:o,M<0)x.push(1),w=!0;else{if(M=M/p+2|0,d=0,1==T){for(g=0,Z=Z[0],M++;(d<$||g)&&M--;d++)R=g*l+(A[d]||0),x[d]=R/Z|0,g=R%Z|0;w=g||d<$}else{for((g=l/(Z[0]+1)|0)>1&&(Z=e(Z,g,l),A=e(A,g,l),T=Z.length,$=A.length),P=T,y=(E=A.slice(0,T)).length;y<T;)E[y++]=0;(S=Z.slice()).unshift(0),q=Z[0],Z[1]>=l/2&&++q;do{g=0,(h=t(Z,E,T,y))<0?(O=E[0],T!=y&&(O=O*l+(E[1]||0)),(g=O/q|0)>1?(g>=l&&(g=l-1),1==(h=t(v=e(Z,g,l),E,N=v.length,y=E.length))&&(g--,i(v,T<N?S:Z,N,l))):(0==g&&(h=g=1),v=Z.slice()),(N=v.length)<y&&v.unshift(0),i(E,v,y,l),-1==h&&(h=t(Z,E,T,y=E.length))<1&&(g++,i(E,T<y?S:Z,y,l)),y=E.length):0===h&&(g++,E=[0]),x[d++]=g,h&&E[0]?E[y++]=A[P]||0:(E=[A[P]],y=1)}while((P++<$||void 0!==E[0])&&M--);w=void 0!==E[0]}x[0]||x.shift()}if(1==p)b.e=a,n=w;else{for(d=1,g=x[0];g>=10;g/=10)d++;b.e=d+a*p-1,D(b,c?o+b.e+1:o,u,w)}return b}}();function D(n,e,t,i){var r,s,o,c,l,f,a,d,g,p=n.constructor;n:if(null!=e){if(!(d=n.d))return n;for(r=1,c=d[0];c>=10;c/=10)r++;if((s=e-r)<0)s+=7,o=e,l=(a=d[g=0])/h(10,r-o-1)%10|0;else if((g=Math.ceil((s+1)/7))>=(c=d.length)){if(!i)break n;for(;c++<=g;)d.push(0);a=l=0,r=1,o=(s%=7)-7+1}else{for(a=c=d[g],r=1;c>=10;c/=10)r++;l=(o=(s%=7)-7+r)<0?0:a/h(10,r-o-1)%10|0}if(i=i||e<0||void 0!==d[g+1]||(o<0?a:a%h(10,r-o-1)),f=t<4?(l||i)&&(0==t||t==(n.s<0?3:2)):l>5||5==l&&(4==t||i||6==t&&(s>0?o>0?a/h(10,r-o):0:d[g-1])%10&1||t==(n.s<0?8:7)),e<1||!d[0])return d.length=0,f?(e-=n.e+1,d[0]=h(10,(7-e%7)%7),n.e=-e||0):d[0]=n.e=0,n;if(0==s?(d.length=g,c=1,g--):(d.length=g+1,c=h(10,7-s),d[g]=o>0?(a/h(10,r-o)%h(10,o)|0)*c:0),f)for(;;){if(0==g){for(s=1,o=d[0];o>=10;o/=10)s++;for(o=d[0]+=c,c=1;o>=10;o/=10)c++;s!=c&&(n.e++,d[0]==m&&(d[0]=1));break}if(d[g]+=c,d[g]!=m)break;d[g--]=0,c=1}for(s=d.length;0===d[--s];)d.pop()}return u&&(n.e>p.maxE?(n.d=null,n.e=NaN):n.e<p.minE&&(n.e=0,n.d=[0])),n}function M(n,e,t){if(!n.isFinite())return _(n);var i,r=n.e,s=b(n.d),o=s.length;return e?(t&&(i=t-o)>0?s=s.charAt(0)+"."+s.slice(1)+T(i):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):r<0?(s="0."+T(-r-1)+s,t&&(i=t-o)>0&&(s+=T(i))):r>=o?(s+=T(r+1-o),t&&(i=t-r-1)>0&&(s=s+"."+T(i))):((i=r+1)<o&&(s=s.slice(0,i)+"."+s.slice(i)),t&&(i=t-o)>0&&(r+1===o&&(s+="."),s+=T(i))),s}function R(n,e){var t=n[0];for(e*=7;t>=10;t/=10)e++;return e}function P(n,e,t){if(e>w)throw u=!0,t&&(n.precision=t),Error("[DecimalError] Precision limit exceeded");return D(new n(r),e,1,!0)}function $(n,e,t){if(e>v)throw Error("[DecimalError] Precision limit exceeded");return D(new n(s),e,t,!0)}function q(n){var e=n.length-1,t=7*e+1;if(e=n[e]){for(;e%10==0;e/=10)t--;for(e=n[0];e>=10;e/=10)t++}return t}function T(n){for(var e="";n--;)e+="0";return e}function S(n,e,t,i){var r,s=new n(1),o=Math.ceil(i/7+4);for(u=!1;;){if(t%2&&B((s=s.times(e)).d,o)&&(r=!0),0===(t=f(t/2))){t=s.d.length-1,r&&0===s.d[t]&&++s.d[t];break}B((e=e.times(e)).d,o)}return u=!0,s}function F(n){return 1&n.d[n.d.length-1]}function I(n,e,t){for(var i,r=new n(e[0]),s=0;++s<e.length;){if(!(i=new n(e[s])).s){r=i;break}r[t](i)&&(r=i)}return r}function A(n,e){var t,i,r,s,o,c,l,f=0,a=0,d=0,g=n.constructor,p=g.rounding,m=g.precision;if(!n.d||!n.d[0]||n.e>17)return new g(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(null==e?(u=!1,l=m):l=e,c=new g(.03125);n.e>-2;)n=n.times(c),d+=5;for(l+=i=Math.log(h(2,d))/Math.LN10*2+5|0,t=s=o=new g(1),g.precision=l;;){if(s=D(s.times(n),l,1),t=t.times(++a),b((c=o.plus(O(s,t,l,1))).d).slice(0,l)===b(o.d).slice(0,l)){for(r=d;r--;)o=D(o.times(o),l,1);if(null!=e)return g.precision=m,o;if(!(f<3&&E(o.d,l-i,p,f)))return D(o,g.precision=m,p,u=!0);g.precision=l+=10,t=s=c=new g(1),a=0,f++}o=c}}function Z(n,e){var t,i,r,s,o,c,l,f,h,a,d,g=1,p=n,m=p.d,w=p.constructor,v=w.rounding,N=w.precision;if(p.s<0||!m||!m[0]||!p.e&&1==m[0]&&1==m.length)return new w(m&&!m[0]?-1/0:1!=p.s?NaN:m?0:p);if(null==e?(u=!1,h=N):h=e,w.precision=h+=10,i=(t=b(m)).charAt(0),!(Math.abs(s=p.e)<15e14))return f=P(w,h+2,N).times(s+""),p=Z(new w(i+"."+t.slice(1)),h-10).plus(f),w.precision=N,null==e?D(p,N,v,u=!0):p;for(;i<7&&1!=i||1==i&&t.charAt(1)>3;)i=(t=b((p=p.times(n)).d)).charAt(0),g++;for(s=p.e,i>1?(p=new w("0."+t),s++):p=new w(i+"."+t.slice(1)),a=p,l=o=p=O(p.minus(1),p.plus(1),h,1),d=D(p.times(p),h,1),r=3;;){if(o=D(o.times(d),h,1),b((f=l.plus(O(o,new w(r),h,1))).d).slice(0,h)===b(l.d).slice(0,h)){if(l=l.times(2),0!==s&&(l=l.plus(P(w,h+2,N).times(s+""))),l=O(l,new w(g),h,1),null!=e)return w.precision=N,l;if(!E(l.d,h-10,v,c))return D(l,w.precision=N,v,u=!0);w.precision=h+=10,f=o=p=O(a.minus(1),a.plus(1),h,1),d=D(p.times(p),h,1),r=c=1}l=f,r+=2}}function _(n){return String(n.s*n.s/0)}function k(n,e){var t,i,r;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(t<0&&(t=i),t+=+e.slice(i+1),e=e.substring(0,i)):t<0&&(t=e.length),i=0;48===e.charCodeAt(i);i++);for(r=e.length;48===e.charCodeAt(r-1);--r);if(e=e.slice(i,r)){if(r-=i,n.e=t=t-i-1,n.d=[],i=(t+1)%7,t<0&&(i+=7),i<r){for(i&&n.d.push(+e.slice(0,i)),r-=7;i<r;)n.d.push(+e.slice(i,i+=7));i=7-(e=e.slice(i)).length}else i-=r;for(;i--;)e+="0";n.d.push(+e),u&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function L(n,e){var t,i,r,s,o,l,f,w,v;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),p.test(e))return k(n,e)}else if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(d.test(e))t=16,e=e.toLowerCase();else if(a.test(e))t=2;else{if(!g.test(e))throw Error(c+e);t=8}for((s=e.search(/p/i))>0?(f=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),o=(s=e.indexOf("."))>=0,i=n.constructor,o&&(s=(l=(e=e.replace(".","")).length)-s,r=S(i,new i(t),s,2*s)),s=v=(w=y(e,t,m)).length-1;0===w[s];--s)w.pop();return s<0?new i(0*n.s):(n.e=R(w,v),n.d=w,u=!1,o&&(n=O(n,r,4*l)),f&&(n=n.times(Math.abs(f)<54?h(2,f):Sn.pow(2,f))),u=!0,n)}function U(n,e,t,i,r){var s,o,c,l,f=n.precision,h=Math.ceil(f/7);for(u=!1,l=t.times(t),c=new n(i);;){if(o=O(c.times(l),new n(e++*e++),f,1),c=r?i.plus(o):i.minus(o),i=O(o.times(l),new n(e++*e++),f,1),void 0!==(o=c.plus(i)).d[h]){for(s=h;o.d[s]===c.d[s]&&s--;);if(-1==s)break}s=c,c=i,i=o,o=s}return u=!0,o.d.length=h+1,o}function z(n,e){for(var t=n;--e;)t*=n;return t}function C(n,t){var i,r=t.s<0,s=$(n,n.precision,1),o=s.times(.5);if((t=t.abs()).lte(o))return e=r?4:1,t;if((i=t.divToInt(s)).isZero())e=r?3:2;else{if((t=t.minus(i.times(s))).lte(o))return e=F(i)?r?2:3:r?4:1,t;e=F(i)?r?1:4:r?3:2}return t.minus(s).abs()}function H(e,t,r,s){var o,u,c,l,f,h,a,d,g,p=e.constructor,m=void 0!==r;if(m?(x(r,1,1e9),void 0===s?s=p.rounding:x(s,0,8)):(r=p.precision,s=p.rounding),e.isFinite()){for(m?(o=2,16==t?r=4*r-3:8==t&&(r=3*r-2)):o=t,(c=(a=M(e)).indexOf("."))>=0&&(a=a.replace(".",""),(g=new p(1)).e=a.length-c,g.d=y(M(g),10,o),g.e=g.d.length),u=f=(d=y(a,10,o)).length;0==d[--f];)d.pop();if(d[0]){if(c<0?u--:((e=new p(e)).d=d,e.e=u,d=(e=O(e,g,r,s,0,o)).d,u=e.e,h=n),c=d[r],l=o/2,h=h||void 0!==d[r+1],h=s<4?(void 0!==c||h)&&(0===s||s===(e.s<0?3:2)):c>l||c===l&&(4===s||h||6===s&&1&d[r-1]||s===(e.s<0?8:7)),d.length=r,h)for(;++d[--r]>o-1;)d[r]=0,r||(++u,d.unshift(1));for(f=d.length;!d[f-1];--f);for(c=0,a="";c<f;c++)a+=i.charAt(d[c]);if(m){if(f>1)if(16==t||8==t){for(c=16==t?4:3,--f;f%c;f++)a+="0";for(f=(d=y(a,o,t)).length;!d[f-1];--f);for(c=1,a="1.";c<f;c++)a+=i.charAt(d[c])}else a=a.charAt(0)+"."+a.slice(1);a=a+(u<0?"p":"p+")+u}else if(u<0){for(;++u;)a="0"+a;a="0."+a}else if(++u>f)for(u-=f;u--;)a+="0";else u<f&&(a=a.slice(0,u)+"."+a.slice(u))}else a=m?"0p+0":"0";a=(16==t?"0x":2==t?"0b":8==t?"0o":"")+a}else a=_(e);return e.s<0?"-"+a:a}function B(n,e){if(n.length>e)return n.length=e,!0}function j(n){return new this(n).abs()}function V(n){return new this(n).acos()}function W(n){return new this(n).acosh()}function J(n,e){return new this(n).plus(e)}function G(n){return new this(n).asin()}function K(n){return new this(n).asinh()}function Q(n){return new this(n).atan()}function X(n){return new this(n).atanh()}function Y(n,e){n=new this(n),e=new this(e);var t,i=this.precision,r=this.rounding,s=i+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(t=e.s<0?$(this,i,r):new this(0)).s=n.s:!n.d||e.isZero()?(t=$(this,s,1).times(.5)).s=n.s:e.s<0?(this.precision=s,this.rounding=1,t=this.atan(O(n,e,s,1)),e=$(this,s,1),this.precision=i,this.rounding=r,t=n.s<0?t.minus(e):t.plus(e)):t=this.atan(O(n,e,s,1)):(t=$(this,s,1).times(e.s>0?.25:.75)).s=n.s:t=new this(NaN),t}function nn(n){return new this(n).cbrt()}function en(n){return D(n=new this(n),n.e+1,2)}function tn(n,e,t){return new this(n).clamp(e,t)}function rn(n){if(!n||"object"!=typeof n)throw Error("[DecimalError] Object expected");var e,i,r,s=!0===n.defaults,u=["precision",1,1e9,"rounding",0,8,"toExpNeg",-t,0,"toExpPos",0,t,"maxE",0,t,"minE",-t,0,"modulo",0,9];for(e=0;e<u.length;e+=3)if(i=u[e],s&&(this[i]=o[i]),void 0!==(r=n[i])){if(!(f(r)===r&&r>=u[e+1]&&r<=u[e+2]))throw Error(c+i+": "+r);this[i]=r}if(i="crypto",s&&(this[i]=o[i]),void 0!==(r=n[i])){if(!0!==r&&!1!==r&&0!==r&&1!==r)throw Error(c+i+": "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error("[DecimalError] crypto unavailable");this[i]=!0}else this[i]=!1}return this}function sn(n){return new this(n).cos()}function on(n){return new this(n).cosh()}function un(n,e){return new this(n).div(e)}function cn(n){return new this(n).exp()}function ln(n){return D(n=new this(n),n.e+1,3)}function fn(){var n,e,t=new this(0);for(u=!1,n=0;n<arguments.length;)if((e=new this(arguments[n++])).d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return u=!0,new this(1/0);t=e}return u=!0,t.sqrt()}function hn(n){return n instanceof Sn||n&&n.toStringTag===l||!1}function an(n){return new this(n).ln()}function dn(n,e){return new this(n).log(e)}function gn(n){return new this(n).log(2)}function pn(n){return new this(n).log(10)}function mn(){return I(this,arguments,"lt")}function wn(){return I(this,arguments,"gt")}function vn(n,e){return new this(n).mod(e)}function Nn(n,e){return new this(n).mul(e)}function bn(n,e){return new this(n).pow(e)}function xn(n){var e,t,i,r,s=0,o=new this(1),u=[];if(void 0===n?n=this.precision:x(n,1,1e9),i=Math.ceil(n/7),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(i));s<i;)(r=e[s])>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=r%1e7;else{if(!crypto.randomBytes)throw Error("[DecimalError] crypto unavailable");for(e=crypto.randomBytes(i*=4);s<i;)(r=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((127&e[s+3])<<24))>=214e7?crypto.randomBytes(4).copy(e,s):(u.push(r%1e7),s+=4);s=i/4}else for(;s<i;)u[s++]=1e7*Math.random()|0;for(n%=7,(i=u[--s])&&n&&(r=h(10,7-n),u[s]=(i/r|0)*r);0===u[s];s--)u.pop();if(s<0)t=0,u=[0];else{for(t=-1;0===u[0];t-=7)u.shift();for(i=1,r=u[0];r>=10;r/=10)i++;i<7&&(t-=7-i)}return o.e=t,o.d=u,o}function En(n){return D(n=new this(n),n.e+1,this.rounding)}function yn(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function On(n){return new this(n).sin()}function Dn(n){return new this(n).sinh()}function Mn(n){return new this(n).sqrt()}function Rn(n,e){return new this(n).sub(e)}function Pn(){var n=0,e=arguments,t=new this(e[n]);for(u=!1;t.s&&++n<e.length;)t=t.plus(e[n]);return u=!0,D(t,this.precision,this.rounding)}function $n(n){return new this(n).tan()}function qn(n){return new this(n).tanh()}function Tn(n){return D(n=new this(n),n.e+1,1)}N[Symbol.for("nodejs.util.inspect.custom")]=N.toString,N[Symbol.toStringTag]="Decimal";var Sn=N.constructor=function n(e){var t,i,r;function s(n){var e,t,i,r=this;if(!(r instanceof s))return new s(n);if(r.constructor=s,hn(n))return r.s=n.s,void(u?!n.d||n.e>s.maxE?(r.e=NaN,r.d=null):n.e<s.minE?(r.e=0,r.d=[0]):(r.e=n.e,r.d=n.d.slice()):(r.e=n.e,r.d=n.d?n.d.slice():n.d));if("number"===(i=typeof n)){if(0===n)return r.s=1/n<0?-1:1,r.e=0,void(r.d=[0]);if(n<0?(n=-n,r.s=-1):r.s=1,n===~~n&&n<1e7){for(e=0,t=n;t>=10;t/=10)e++;return void(u?e>s.maxE?(r.e=NaN,r.d=null):e<s.minE?(r.e=0,r.d=[0]):(r.e=e,r.d=[n]):(r.e=e,r.d=[n]))}return 0*n!=0?(n||(r.s=NaN),r.e=NaN,void(r.d=null)):k(r,n.toString())}if("string"!==i)throw Error(c+n);return 45===(t=n.charCodeAt(0))?(n=n.slice(1),r.s=-1):(43===t&&(n=n.slice(1)),r.s=1),p.test(n)?k(r,n):L(r,n)}if(s.prototype=N,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=rn,s.clone=n,s.isDecimal=hn,s.abs=j,s.acos=V,s.acosh=W,s.add=J,s.asin=G,s.asinh=K,s.atan=Q,s.atanh=X,s.atan2=Y,s.cbrt=nn,s.ceil=en,s.clamp=tn,s.cos=sn,s.cosh=on,s.div=un,s.exp=cn,s.floor=ln,s.hypot=fn,s.ln=an,s.log=dn,s.log10=pn,s.log2=gn,s.max=mn,s.min=wn,s.mod=vn,s.mul=Nn,s.pow=bn,s.random=xn,s.round=En,s.sign=yn,s.sin=On,s.sinh=Dn,s.sqrt=Mn,s.sub=Rn,s.sum=Pn,s.tan=$n,s.tanh=qn,s.trunc=Tn,void 0===e&&(e={}),e&&!0!==e.defaults)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],t=0;t<r.length;)e.hasOwnProperty(i=r[t++])||(e[i]=this[i]);return s.config(e),s}(o);r=new Sn(r),s=new Sn(s);class Fn{stock=[];parenthesesPairPosition={};add;sub;mul;div;constructor(n,e,t,i){this.stock=[],this.parenthesesPairPosition={},this.add=n,this.sub=e,this.mul=t,this.div=i}removeParentheses=(n,e)=>this.parenthesesPairPosition[n]===e?[++n,--e]:[n,e];init(n){const e=n.replace(/\s+/g,"").split("");if(e.filter((n=>"("===n)).length!==e.filter((n=>")"===n)).length)return console.error("请输入正确计算公式!"),null;e.forEach(((n,t)=>{if("-"===n&&["+","-","*","/"].includes(e[t-1])){e[t-1]=`${e[t-1]}(0`;let n=1;for(;!["+","-","*","/"].includes(e[t+n]);)n+=1;e[t+n-1]=`${e[t+n-1]})`}"-"===n&&["("].includes(e[t-1])&&(e[t-1]=`${e[t-1]}0`)}));return e.join("")}parse=(n,e=0,t=n.length-1,i=!1)=>{let r=!0,s=0,o=null,u=0;[e,t]=this.removeParentheses(e,t);for(let c=t;c>=e;c--){const l=n[c];if(")"===l)this.stock.push(c),s++;else if("("===l){const n=this.stock.pop();this.parenthesesPairPosition[c]=n,s--}if(i&&o)return{type:o,left:this.parse(n,e,u-1,!0),right:this.parse(n,u+1,t)};if(c===e)return r?{type:"bigDecimal",value:String(n.slice(e,t+1))}:this.parenthesesPairPosition[c]===t?this.parse(n,e+1,t-1):{type:o,left:this.parse(n,e,u-1,!0),right:this.parse(n,u+1,t)};if(!/[0-9]/.test(l)&&"."!==l){if(r=!1,0===s&&("+"===l||"-"===l))return{type:l,left:this.parse(n,e,c-1),right:this.parse(n,c+1,t)};0!==s||"*"!==l&&"/"!==l||o||(o=l,u=c)}}};exec=n=>{const e=n=>"+"===n.type?this.add(e(n.left),e(n.right)):"-"===n.type?this.sub(e(n.left),e(n.right)):"*"===n.type?this.mul(e(n.left),e(n.right)):"/"===n.type?this.div(e(n.left),e(n.right)):"bigDecimal"===n.type?n.value:void 0;return e(n)}}const In={FEreg:new RegExp(/\d(?:\.(\d*))?e([+-]\d+)/),numReg:new RegExp(/^(\-|\+)?\d+(\.\d+)?$/),zeroReg:new RegExp(/^[0]*$/)},An=(n="")=>BigInt(n),Zn=n=>{let e=n;In.FEreg.test(n)&&(e=new Sn(n).toFixed());"bigint"==typeof n&&(e=n.toString());return"number"==typeof n&&(e=String(n)),e},_n=(n="")=>In.numReg.test(n),kn=(n="",e=0)=>{if(e<=0)return n;let t=n;for(let n=0;n<e;n++)t+="0";return t},Ln=(n="",e="")=>{const[t,i="0"]=n.split("."),[r,s="0"]=e.split(".");let o=i,u=s;return i.length!==s.length&&(i.length>s.length&&(o=i,u=kn(s,i.length-s.length)),i.length<s.length&&(o=kn(i,s.length-i.length),u=s)),{numOneInt:t,numOneDecimal:o,numTwoInt:r,numTwoDecimal:u}},Un=(n,e,t)=>`${n}${In.zeroReg.test(e)?"":`.${e.substring(0,t)}`}`,zn=(n,e,t=16)=>{let i=Zn(n),r=Zn(e);if(!_n(i)||!_n(r))return console.error("请输入正确值!"),null;const{numOneInt:s,numOneDecimal:o,numTwoInt:u,numTwoDecimal:c}=Ln(i,r),l=(An(`${s}${o}`)+An(`${u}${c}`)).toString(),f=o.length;let h=l.length-f<=0?"0":l.substring(0,l.length-f);"-"===h&&(h="-0");const a=l.substring(l.length-f,l.length);return Un(h,a,t)},Cn=(n,e,t=16)=>{const i=Zn(n),r=Zn(e);if(!_n(i)||!_n(r))return console.error("请输入正确值!"),null;const{numOneInt:s,numOneDecimal:o,numTwoInt:u,numTwoDecimal:c}=Ln(i,r),l=(An(`${s}${o}`)-An(`${u}${c}`)).toString(),f=o.length;let h=l.length-f<=0?"0":l.substring(0,l.length-f);"-"===h&&(h="-0");const a=l.substring(l.length-f,l.length);return Un(h,a,t)},Hn=(n,e,t=16)=>{const i=Zn(n),r=Zn(e);if(!_n(i)||!_n(r))return console.error("请输入正确值!"),null;const{numOneInt:s,numOneDecimal:o,numTwoInt:u,numTwoDecimal:c}=Ln(i,r);if(In.zeroReg.test(s)&&In.zeroReg.test(o)||In.zeroReg.test(u)&&In.zeroReg.test(c))return"0";const l=(An(`${s}${o}`)*An(`${u}${c}`)).toString(),f=2*o.length;let h=l.length-f<=0?"0":l.substring(0,l.length-f);"-"===h&&(h="-0");const a=l.substring(l.length-f,l.length);return Un(h,a,t)},Bn=(n,e,t=16)=>{const i=Zn(n),r=Zn(e);if(!_n(i)||!_n(r))return console.error("请输入正确值!"),null;const{numOneInt:s,numOneDecimal:o,numTwoInt:u,numTwoDecimal:c}=Ln(i,r);if(In.zeroReg.test(s)&&In.zeroReg.test(o)||In.zeroReg.test(u)&&In.zeroReg.test(c))return"0";const l=(An(`${s}${o}`)%An(`${u}${c}`)).toString(),[f,h]=new Sn(l).div(new Sn(`${u}${c}`)).toString().split("."),a=h||"0",d=(An(s+o)/An(u+c)+An(f)).toString();return Un(d,a,t)},jn=(n,e,t="===")=>{const i=Zn(n),r=Zn(e);if(!_n(i)||!_n(r))return console.error("请输入正确值!"),null;const{numOneInt:s,numOneDecimal:o,numTwoInt:u,numTwoDecimal:c}=Ln(i,r),l=(n,e)=>n===e,f=(n,e)=>n<e,h=(n,e)=>n>e;let a=!1;return"==="!==t&&"<="!==t&&">="!==t||(a=l(An(s),An(u))&&l(An(o),An(c))),(!a&&"<="===t||"<"===t)&&(a=f(An(s),An(u))||l(An(s),An(u))&&f(An(o),An(c))),(!a&&">="===t||">"===t)&&(a=h(An(s),An(u))||l(An(s),An(u))&&h(An(o),An(c))),a},Vn=n=>{const e=new Fn(zn,Cn,Hn,Bn),t=e.init(n);if(!t)return null;const i=e.parse(t);return e.exec(i)};var Wn={add:zn,sub:Cn,mul:Hn,div:Bn,compare:jn,calc:Vn};exports.add=zn,exports.calc=Vn,exports.compare=jn,exports.default=Wn,exports.div=Bn,exports.mul=Hn,exports.sub=Cn;
