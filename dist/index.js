/** @license Apache-2.0 */

'use strict';

/**
* The minimum biased base 2 exponent for a normal double-precision floating-point number.
*
* @module @stdlib/constants-float64-min-base2-exponent
* @type {integer32}
*
* @example
* var FLOAT64_MIN_BASE2_EXPONENT = require( '@stdlib/constants-float64-min-base2-exponent' );
* // returns -1022
*/


// MAIN //

/**
* The minimum biased base 2 exponent for a normal double-precision floating-point number.
*
* ```text
* 1 - BIAS = -1022
* ```
*
* where `BIAS = 1023`.
*
* @constant
* @type {integer32}
* @default -1022
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT64_MIN_BASE2_EXPONENT = -1022|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT64_MIN_BASE2_EXPONENT;
