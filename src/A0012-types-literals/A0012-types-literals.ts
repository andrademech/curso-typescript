let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const person = {
  nome: 'Herberth' as const,
  sobrenome: 'Miranda',
};

export function chooseColor(color: 'RED' | 'YELLOW' | 'BLUE'): string {
  return color;
}
console.log(chooseColor('RED'), 'Herberth', x, y, person);

// Module mode
export default 1;
