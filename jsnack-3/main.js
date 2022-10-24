/* Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC) */

const wordUser = prompt ('inserisci parola');
toReverse(wordUser);

function toReverse(word) {
      let reverseWord ='';
      for (let i = word.length-1; i >= 0; i--) {
            const reverse = word[i];
            // console.log(reverse);
            reverseWord += reverse;
      }
      console.log('la parola invertita è ' + reverseWord);
}