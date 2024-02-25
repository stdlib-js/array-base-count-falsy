/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

import { Collection } from '@stdlib/types/array';

/**
* Counts the number of falsy values in an array.
*
* @param x - input array
* @returns number of falsy values
*
* @example
* var x = [ 0, 1, 0, 1, 1 ];
*
* var out = countFalsy( x );
* // returns 2
*/
declare function countFalsy( x: Collection ): number;


// EXPORTS //

export = countFalsy;