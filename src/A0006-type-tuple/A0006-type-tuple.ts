// Tuple

const dataClient1: readonly [number, string] = [1, 'Herberth'];
const dataClient2: [number, string, string] = [1, 'Herberth', 'Andrade'];
const dataClient3: [number, string, string?] = [1, 'Herberth'];
const dataClient4: [number, string, ...string[]] = [1, 'Herberth', 'Andrade'];

// dataClient1[0] = 100
// dataClient1[1] = 'Herberth'

console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);
console.log(dataClient4);

// readonly array

const array1: readonly string[] = ['Herberth', 'Andrade'];
const array2: ReadonlyArray<string> = ['Herberth', 'Andrade'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;
