/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

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

let overQuindici =[];
let underQuinidici =[];

zucchine.forEach(element => {
      if (element.lunghezza <= 15){
            underQuinidici.push(element);
      }else{
            overQuindici.push(element);
      }
});

console.log(overQuindici);
console.log(underQuinidici);

peso(overQuindici);
peso(underQuinidici);



function peso (array){
      let somma = 0;
      array.forEach(element => {
            somma += element.peso
      });
      
      console.log('Il peso è di ' + somma.toFixed(2) + 'kg');
}
