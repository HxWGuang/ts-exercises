/**
 * 声明模块
 */

// import {
//     strReverse,
//     strToLower,
//     strToUpper,
//     strRandomize,
//     strInvertCase
// } from 'str-utils';

// # `str-utils`
// Professional string decoration functions.
// ## Installation
// It's already installed in your `node_modules`, all good.
// ## API
// ### `strReverse(value)`
// Reverses a string.
// ### `strToLower(value)`
// Converts a string into lower case.
// ### `strToUpper(value)`
// Converts a string into upper case.
// ### `strRandomize(value)`
// Randomizes characters of a string.
// ### `strInvertCase(value)`
// Inverts case of a string.

declare module 'str-utils' {
    export function strReverse(value: string): string
    export function strToLower(value: string): string
    export function strToUpper(value: string): string
    export function strRandomize(value: string): string
    export function strInvertCase(value: string): string
}
