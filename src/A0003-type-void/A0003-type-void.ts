function noReturn(...args: string[]): void {
  console.log('====================================');
  console.log(args.join(' '));
  console.log('====================================');
}

const person = {
  name: 'Herberth',
  surname: 'Andrade',

  showName(): void {
    console.log('====================================');
    console.log(this.name + ' ' + this.surname);
    console.log('====================================');
  },
};

noReturn('Herberth', 'Andrade');
person.showName();

export { person };
