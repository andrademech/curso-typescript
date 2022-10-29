type HasName = { name: string }
type HasSurname = { surname: string }
type HasAge = { age: number }
type Person = HasName & HasSurname & HasAge

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'A' | 'D'
type Intersection = AB & AC & AD

const person: Person = {
  name: 'Herberth',
  surname: 'Andrade',
  age: 27
}

console.log(person);

// Module mode
export { pessoa }
