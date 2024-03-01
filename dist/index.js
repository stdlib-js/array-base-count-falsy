"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=u(function(d,n){
var o=require('@stdlib/array-base-assert-is-complex-typed-array/dist'),s=require('@stdlib/array-base-assert-is-accessor-array/dist'),v=require('@stdlib/array-base-resolve-getter/dist'),c=require('@stdlib/strided-base-reinterpret-complex/dist');function f(r){var e,i;for(e=0,i=0;i<r.length;i++)r[i]||(e+=1);return e}function l(r){var e,i,t;for(e=v(r),i=0,t=0;t<r.length;t++)e(r,t)||(i+=1);return i}function p(r){var e,i,t;for(e=c(r,0),i=0,t=0;t<e.length;t+=2)e[t]===0&&e[t+1]===0&&(i+=1);return i}function q(r){return s(r)?o(r)?p(r):l(r):f(r)}n.exports=q
});var g=a();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
