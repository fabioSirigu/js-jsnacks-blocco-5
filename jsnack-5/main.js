/* Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */

const numeri = [1,2,3,4,5];
const primoNumero = 1;
const secondoNumero = 5;

function valoriCompresi(array,primoNumero,secondoNumero) {
      let resultArray = array.filter(element => {
            if(element>primoNumero && element<secondoNumero){
                  return true;
            }
            return false;
      })
      return resultArray;
}
const resultArray = valoriCompresi(numeri,primoNumero,secondoNumero);
console.log(`i numeri compresi tra ${primoNumero} e ${secondoNumero} sono `, resultArray);