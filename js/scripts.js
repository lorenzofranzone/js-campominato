//////////////////////////////////////////////////
// Esercizio
// Il computer deve generare 16 numeri casuali da 1 a 100.

// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//////////////////////////////////////////////////



// Lista numeri genrati dal computer
var numbersList = [];
console.log(numbersList);

// Inserisco nella lista del computer ogni numero random generato dal computer
for (var i = 1; i <= 16; i++) {
  numbersList.push(getRandomNumber(1, 100));
}

// Lista numeri scelti dall'utente
var userNumbersList = [];
console.log(userNumbersList);


// Chiedo all'utente di inserire n volte un numero a condizione che questo non sia già presente nella lista random
var j = 1;
while (j <= 84 &&) {
  var userNumber = parseInt(prompt('Inserisci un numero da 1 a 100'));
  userNumbersList.push(userNumber);
  j++;
}

// Funzione Random
function getRandomNumber(min, max) {
  var random = Math.floor(Math.random() * (min - max + 1) ) + max;
  return random;
}
