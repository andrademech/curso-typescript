/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)

let namee: string = 'Herberth' // qualquer tipo de strings
let age: number = 26 // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o774
let adult: boolean = true // true ou false
let symbol: symbol = Symbol('qualquer-symbol') // symbol
// let big: bigint = 10n // bigint

// Arrays

let arrayNumbers: Array<number> = [1, 2, 3]
let arrayNumbers2: number[] = [1, 2, 3] // mais usado

let arrayStrings: Array<string> = ['1', '2', '3']
let arrayStrings2: string[] = ['1', '2', '3'] // mais usado


// Objects

let people: {name: string, age: number, adult?: boolean} = {
  name: 'Herberth',
  age: 26,
  adult: true // poderia declarar ou não
}

// Funções

function soma(x: number, y: number) {
  return x + y
}

const result = soma(2, 3)

export default 1
