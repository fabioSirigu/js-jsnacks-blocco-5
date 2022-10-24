/* Bonus
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */

const persone = [
      {
            nome: 'Luca',
            cognome: 'Toni',
            eta: 15,
      },
      {
            nome: 'Francesco',
            cognome: 'Rossi',
            eta: 79,
      },
      {
            nome: 'Fabio',
            cognome: 'Marini',
            eta: 55,
      },
      {
            nome: 'Maria',
            cognome: 'Verdi',
            eta: 11,
      },
      {
            nome: 'Francesca',
            cognome: 'Chiarelli',
            eta: 11,
      },
      {
            nome: 'Giacomo',
            cognome: 'Berlusconi',
            eta: 19,
      },
]

let driveOrNOt = []

persone.forEach(element => {
    if (element.eta < 18 || element.eta > 65) {
        driveOrNOt.push(`${element.nome} ${element.cognome}, con età: ${element.eta} anni. Non può guidare`)
    } else {
        driveOrNOt.push(`${element.nome} ${element.cognome}, con età: ${element.eta} anni. Può guidare`)
    }
});

console.log(driveOrNOt);