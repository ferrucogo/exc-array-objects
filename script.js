// Primo esercizio

/* Creare degli oggetti "studente" che contengano nome, cognome, età, sesso con i propri dati;
creare un array che contiene questi oggetti; funzione "filtraEtà" che data un età restituisce un array più piccolo con chi ha quell'età;
funzione "filtraSesso" che con M restituisce array solo maschi, se F solo femmine;
funzione in cui passo il nome della proprietà e il valore da filtrare (es: filtra per M di nome "Simone")*/


//Creazione degli oggetti studente
let studente0 = { name: "Nicolò", surname: "Giuggiola", age: 28, gender: "M" };
let studente1 = { name: "Andrea", surname: "Ferruggia", age: 20, gender: "M" };
let studente2 = { name: "Matteo", surname: "Rinaldi", age: 27, gender: "M" };
let studente3 = { name: "Micheal", surname: "Parodi", age: 20, gender: "M" };
let studente4 = { name: "Francesca", surname: "Capuzzo", age: 25, gender: "F" };
let studente5 = { name: "Alba", surname: "Myrtaj", age: 27, gender: "F" };
let studente6 = { name: "Alessandro", surname: "Capogreco", age: 19, gender: "M" };
let studente7 = { name: "Lorenzo", surname: "Miranza", age: 21, gender: "M" };
let studente8 = { name: "Simone", surname: "Aloia", age: 24, gender: "M" };
let studente9 = { name: "Marco", surname: "Sorci", age: 24, gender: "M" };

//Inscatolamento degli studenti nell'array che li comprende
let studenti = [studente0, studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9];
//console.log(studenti[9]);

//Funzione che restituisce un'array secondario filtrando gli oggetti per l'attributo 'age'
function filterByAge(age){
    let filteredByAge = [];
    for (let i = 0; i < studenti.length; i++) {
        if (studenti[i].age === age){
            filteredByAge.push(studenti[i].name + studenti[i].surname);
            console.log(age + " anni: " + studenti[i].name + " " + studenti[i].surname);
        }       
    }
    return filteredByAge;
}
//console.log(filterByAge(25));

//Funzione che restituisce un'array secondario filtrando gli oggetti per l'attributo 'gender'
function filterByGender(gender){
    let filteredByGender = [];
    let genderToLetter = gender;

    //Controllo che il carattere M (o maschio) o il carattere F (o femmina) sia maiuscolo o meno. In ogni caso, il parametro viene considerato come maiuscolo.
    if (gender === "maschio" || gender === "Maschio"){
        genderToLetter = "m";
    } else if (gender === "femmina" || gender === "Femmina"){
        genderToLetter = "f";
    }

    for (let i = 0; i < studenti.length; i++) {
        if (studenti[i].gender === genderToLetter.toUpperCase()){ 
            filteredByGender.push(studenti[i].name + studenti[i].surname);
            console.log("Sesso: " + genderToLetter.toUpperCase() + " - " + studenti[i].name + " " + studenti[i].surname);
        }       
    }
    return filteredByGender;
}
//console.log(filterByGender("M"));

//Funzione che restituisce un'array secondario filtrando gli oggetti per sesso e nome
function filterBy(toFind, toFind2, value, value2){
    let filteredBy = [];
    for (let entry of studenti) {
        if(Object.hasOwnProperty.call(entry, toFind)){ //Verifica del primo parametro inserito al richiamo della funzione
            if(Object.hasOwnProperty.call(entry, toFind2)){ //Verifica del secondo parametro inserito al richiamo della funzione
                if((entry[toFind] === value) && (entry[toFind2] === value2)){
                    filteredBy.push(entry.name + entry.surname); 
                }
            }           
        }
    }
    return filteredBy;
}

let result = filterBy("age", "gender", 24, "M");
if (result.length === 0){
    //console.log("Nessun risultato trovato per i parametri di ricerca");
} else {
    //console.log(result);
}


// Secondo esercizio

/* Creare un array che contiene dei numeri, 1, 5 e 2. Creare una funzione che aggiunge all'array numeri (solo numeri accettati, controllo se non stringa) */

let numbers = [1,5,2];

function addNumber(numbers, toAdd){
    if (typeof(toAdd) != typeof(numbers[0])){
        console.log("Il valore che si intende aggiungere non è dello stesso dei valori presenti all'interno dell'array.")
    } else {
        numbers.push(toAdd);
    }
}

addNumber(numbers, 7);
console.log(numbers);


// Terzo esercizio

/* Funzione che fa clear da un array con più dati [1,2, true, 3, pippo, false] */
let arrayToFilter = [4, 267, true, 39, "johnny", false];
let arrayToClean = [1, 2, true, 3, "pippo", false];

function arrayCleaner(arrayToClean, permittedType){
    let tempArray = [];
    for (const element of arrayToClean){
        if (typeof element === permittedType){
            tempArray.push(element);
        }
    }
    return tempArray;
}
console.log(arrayCleaner(arrayToClean, "string"));

function filterToRemoveUpTo100(){
    let tempArray = [];
    for (const element of arrayToFilter){
        if (element <= 100){
            tempArray.push(element);
        }
    }
    return tempArray;
}
console.log(filterToRemoveUpTo100(numbers));

function isEven(element){
    if (element % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function greaterThan30(){
    /* if (element > 30){
        return true;
    } else {
        return false;
    } */

    return (element > 30);
}

function filter(arrayToFilter, filterFunction){
    let tempArray = [];
    for (const element of arrayToFilter){
        if (filterFunction(element)){
            tempArray.push(element);
        }
    }
    return tempArray;
}
console.log(filter(numbers, greaterThan30));
console.log(filter(numbers, isEven));
console.log(numbers.filter(isEven));

function isPositive(element){
    return element > 0;
}

function isNegative(element){
    return element < 0;
}

let isNegative2 = function(element){
    return element < 0;
}

let isNegative3 = (element) => element < 0;

console.log("IsPositive Filter: ", myArray.filter(isPositive));

function hasEvenPosition(element, index){
    if (index % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(myArray.filter(hasEvenPosition));

console.log(myArray.filter(function(element, index){
    return index % 2 === 0;
}));
console.log(myArray.filter((e, i) => i % 2 === 0));

function removeOddAddConcatenate(previous, current, index){
    let tempString = previous;
    if(index % 2 === 0){
        tempString + current;
    }
}