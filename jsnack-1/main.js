/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine = [
      {
            varieta:'striate',
            lunghezza: 18,
            peso: 0.8,
      },
      {
            varieta:'verdi',
            lunghezza: 18,
            peso: 0.5,
      },
      {
            varieta:'tonde',
            lunghezza: 5,
            peso: 0.8,
      },
      {
            varieta:'striate',
            lunghezza: 12,
            peso: 0.5,
      },
      {
            varieta:'tonde',
            lunghezza: 14,
            peso: 0.7,
      },
      {
            varieta:'verdi',
            lunghezza: 12,
            peso: 0.3,
      },
      {
            varieta:'bianche',
            lunghezza: 18,
            peso: 0.2,
      },
      {
            varieta:'bianche',
            lunghezza: 19,
            peso: 0.1,
      },
      {
            varieta:'striate',
            lunghezza: 14,
            peso: 0.2,
      },
      {
            varieta:'verdi',
            lunghezza: 16,
            peso: 0.6,
      }, 
]
let somma = 0;
zucchine.forEach(element => {
      somma += element.peso
});

console.log('Il peso è di ' + somma.toFixed(2) + 'kg');