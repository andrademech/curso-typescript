enum Colors {
  RED = 10,
  BLUE = 100,
  YELLOW = 200
}

enum Colors {
  PURPLE = 'PURPLE',
  GREEN = 201,
  PINK
}

export function chooseColor(color:Colors): void {
  console.log(Colors[color]);
}

chooseColor(123546)

// Module mode
export default 1;
