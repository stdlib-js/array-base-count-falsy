// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-typed-array@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex@v0.1.1-esm/index.mjs";function n(n){return e(n)?r(n)?function(r){var e,t,n;for(e=s(r,0),t=0,n=0;n<e.length;n+=2)0===e[n]&&0===e[n+1]&&(t+=1);return t}(n):function(r){var e,s,n;for(e=t(r),s=0,n=0;n<r.length;n++)e(r,n)||(s+=1);return s}(n):function(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]||(e+=1);return e}(n)}export{n as default};
//# sourceMappingURL=index.mjs.map