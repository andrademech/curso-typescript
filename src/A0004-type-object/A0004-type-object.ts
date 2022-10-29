const objectA: {
  readonly keyA: string
  keyB: string
  keyC?: string
  [key: string]: unknown
} = {
  keyA: 'Value A',
  keyB: 'Value B'
}

objectA.keyB = 'Another value'
objectA.keyC = 'New value'
objectA.keyC = 'New key'

console.log('====================================');
console.log(objectA);
console.log('====================================');

// Module mode
export default 1;
