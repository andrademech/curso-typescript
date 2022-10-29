// Array<T> - T[]

export function multiplyArgs(...args:Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1)
}

export function concatString(...args:string[]): string {
  return args.reduce((ac, value) => ac + value)
}

export function toUpperCase(...args:string[]): string {
  return args.map((value) => value.toUpperCase())
}

const result = multiplyArgs(1, 2, 3)
const concatenate = concatString(1, 2, 3)
const upper = toUpperCase(1, 2, 3)

console.log(result)
console.log(concatenate)
console.log(upper)
