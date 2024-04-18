// Crea una funzione che controlli due numeri interi. Ritorna true se uno dei due è 50 o se la somma dei due è 50.

let a = 30;
let b = 20;

function controlloNumeri(a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  } else {
    return false;
  }
}

console.log(controlloNumeri(a, b));

// Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function rimuoviCarattere(stringa, posizione) {
    if (posizione < 0 || posizione >= stringa.length) {
        return stringa;
    }
    return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
}

let stringaOriginale = "amongus";
let posizioneDaRimuovere = 3;
let nuovaStringa = rimuoviCarattere(stringaOriginale, posizioneDaRimuovere);

console.log(nuovaStringa);

// Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna true se rispecchiano queste condizioni, altrimenti ritorna false.

let c = 75;
let d = 50;

function controlloNumeri2(c, d) {
  if (((c >= 40 && c <= 60) || (c >= 70 && c <= 100)) && ((d >= 40 && d <= 60) || (d >= 70 && d <= 100))) {
    return true;
  } else {
    return false;
  }
}

console.log(controlloNumeri2(c, d));

//Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni false.

function controlloNomeCitta(nomeCitta) {
    if (nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")) {
        return nomeCitta;
    } else {
        return false;
    }
}

console.log(controlloNomeCitta("Los Angeles"));
console.log(controlloNomeCitta("New York"));
console.log(controlloNomeCitta("Napule"));

 
// Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array dev'essere passato come parametro.

function sommaArray(array) {
    let somma = 0;
    
    for (let i = 0; i < array.length; i++) {
        somma += array[i];
    }

    return somma;
}

let array4 = [1, 2, 3, 4, 5];
console.log(sommaArray(array4));

let array5 = [-1, 0, 1];
console.log(sommaArray(array5));

let array6 = [];
console.log(sommaArray(array6));

// Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritrona true, altrimenti ritorna false.

function controlloArray(array) {
    if (array.some(numero => numero === 1 || numero === 3)) {
        return false;
    } else {
        return true;
    }
}

let array1 = [2, 4, 5];
console.log(controlloArray(array1));

let array2 = [1, 2, 5, 7];
console.log(controlloArray(array2));

let array3 = [3, 6, 7];
console.log(controlloArray(array3));

// Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° => ritorna "acuto"
// Angolo ottuso: tra i 90° e i 180° => ritorna "ottuso"
// Angolo retto: 90° => ritorna "retto"
// Angolo piatto: 180° => ritorna "piatto"

function tipoAngolo(gradi) {
    switch (true) {
        case (gradi < 90):
            return "acuto";
        case (gradi === 90):
            return "retto";
        case (gradi > 90 && gradi < 180):
            return "ottuso";
        case (gradi === 180):
            return "piatto";
        default:
            return "Errore";
    }
}

console.log(tipoAngolo(45));
console.log(tipoAngolo(90));
console.log(tipoAngolo(120));
console.log(tipoAngolo(180));
console.log(tipoAngolo(200));

// Crea una funzione che crei un acronimo a partire da una frase. Esempio:"Fabbrica Italiana Automobili Torino" deve ritornare:"FIAT".

function creaAcronimo(frase) {
    const parole = frase.split(" ");
    let acronimo = "";

    for (let i = 0; i < parole.length; i++) {
        acronimo += parole[i][0].toUpperCase();
    }

    return acronimo;
}

console.log(creaAcronimo("Ancora Mi Occorre Generare Una Situazione")); // Output: AMOGUS