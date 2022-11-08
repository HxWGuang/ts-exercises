
// function getMaxIndex(input, comparator) {
//     if (input.length === 0) {
//         return -1;
//     }
//     var maxIndex = 0;
//     for (var i = 1; i < input.length; i++) {
//         if (comparator(input[i], input[maxIndex]) > 0) {
//             maxIndex = i;
//         }
//     }
//     return maxIndex;
// }

declare module 'stats' {
    type Comparator<T> = (input: T, max: T) => number;

    export function getMaxIndex<T>(input: T[], comparator: Comparator<T>): number;

    export function getMaxElement<T>(input: T[], comparator: Comparator<T>): T | null;

    export function getMinIndex<T>(input: T[], comparator: Comparator<T>): number;

    export function getMinElement<T>(input: T[], comparator: Comparator<T>): T | null;

    export function getMedianIndex<T>(input: T[], comparator: Comparator<T>): number;

    export function getMedianElement<T>(input: T[], comparator: Comparator<T>): T | null;

    type GetValue<T> = (item: T) => number;
    export function getAverageValue<T>(input: T[], getValue: GetValue<T>): number | null;

}
