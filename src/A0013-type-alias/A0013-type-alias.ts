type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  preferedColor?: string;
};
type RGBcolor = 'RED' | 'GREEN' | 'BLUE'; // OR
type CMYBcolor = 'CYAN' | 'Magenta' | 'YELLOW' | 'BLACK';
type PreferedColor = RGBcolor | CMYBcolor;

const person: Person = {
  age: 30,
  name: 'Herberth',
  salary: 200000,
};

export function setCorPreferida(person: Person, cor: PreferedColor): Person {
  return { ...person, preferedColor: cor };
}

console.log(setCorPreferida(person, 'BLUE'));
console.log(person);
