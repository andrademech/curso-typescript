type: MapStringCallback = (item: string) => string

export function mapStrings(
  array:string[],
  callbackfn: MapStringCallback
  ): string[] {
  const newArray: string[] = []

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(callbackfn(item))
  }

  return newArray
}

const abc = ['a', 'b', 'c']
const abcMapped = mapStrings(abc, (item) => item.toUpperCase())
console.log(abc);
console.log(abcMapped);
