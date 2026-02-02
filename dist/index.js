"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=o(function(d,a){
var v=require('@stdlib/array-base-assert-is-complex-typed-array/dist'),s=require('@stdlib/array-base-assert-is-booleanarray/dist'),f=require('@stdlib/array-base-assert-is-accessor-array/dist'),c=require('@stdlib/array-base-resolve-getter/dist'),l=require('@stdlib/strided-base-reinterpret-complex/dist'),p=require('@stdlib/strided-base-reinterpret-boolean/dist');function t(r){var e,i;for(e=0,i=0;i<r.length;i++)r[i]||(e+=1);return e}function q(r){var e,i,n;for(e=c(r),i=0,n=0;n<r.length;n++)e(r,n)||(i+=1);return i}function y(r){var e,i,n;for(e=l(r,0),i=0,n=0;n<e.length;n+=2)e[n]===0&&e[n+1]===0&&(i+=1);return i}function g(r){return f(r)?s(r)?t(p(r,0)):v(r)?y(r):q(r):t(r)}a.exports=g
});var m=u();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
