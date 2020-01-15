//////////////////////////////////////////////////
// Esercizio
// Il computer deve generare 16 numeri casuali da 1 a 100.

// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//////////////////////////////////////////////////



// Lista numeri generati dal computer
var numbersBombs = [];

// Genero N numeri random fino a 16 unici
while (numbersBombs.length < 16) {
  var randomNumber = getRandomNumber(1, 100); // Numero bomba random casuale (1-100)
  var check = isInArray(numbersBombs, randomNumber); // True or false
  if (check == false) {
    numbersBombs.push(randomNumber);
  }
}
console.log(numbersBombs);

// Lista numeri generati dall'utente
var numbersUser = [];

var minTryCheck = 1; // Verifica il valore minimo del numero giocato
var maxTryCheck = 100; // Verifica il valore massimo del numero giocato
var tries = 5; // Tentativi disponibili
var findBomb = false; // Bomba non trovata
var message = 'Hai vinto!' // Messaggio predefinito
var points = 0; // Punti iniziali

// Genero N numeri random fino a N unici
while (numbersUser.length < tries && findBomb == false) {
  var userTry = false;
  do {
    userTry = parseInt(prompt('Inserisci un numero da 1 a 100'));
    console.log('Numero giocato:' + ' ' + userTry); // Tentativo utente
  } while (checkRangeNumber(minTryCheck, maxTryCheck, userTry) == false)
  if (isInArray(numbersUser, userTry) == false) {
    numbersUser.push(userTry);
    if (isInArray(numbersBombs, userTry) == true) {
    message = 'Hai perso!';
    findBomb = true;
    }
    else {
      points++;
    }
  }
}

console.log(numbersUser);
console.log('Message:' + ' ' + message);
console.log('Points:' + ' ' + points);

//////////////////////////////////////////////////
// F U N C T I O N S
//////////////////////////////////////////////////

// Funzione numero random
function getRandomNumber(numMin, numMax) {
  var result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return result;
}

// Funzione controllo: se un numero è presente in un array specifico
function isInArray(array, element) {
  var result = false;
  var i = 0;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}

// Funzione controllo: se un numero è compreso in un certo range
function checkRangeNumber(min, max, number) {
  var result = false;
  if(number >= min && number <= max) {
    result = true;
  }
  return result;
}
