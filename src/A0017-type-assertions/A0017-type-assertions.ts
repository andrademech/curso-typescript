/* Recomendado */
// Condidional
const body1 = document.querySelector('body')
if (body1) body1.style.background = 'dodgerblue'

// Type assertion
const body3 = document.querySelector('body') as HMLTBodyElement
body3.style.background = 'dodgerblue'

// HMTLElement
const input = document.querySelector('.input') as HTMLBodyElement
input.value = 'Anything'
input.focus()

/* Não recomendado */
// Type assertion
const body4 = (document.querySelector('body') as unknown) as number;

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
