//Ejercicio 1 
let myName = "matias"
console.log(myName);

//Ejercicio 2 
let age = 21;
console.log(age);

//Ejercicio 3 

let ignasiAge = 32

ageDiff = age - ignasiAge

console.log(ageDiff)

//Ejercicio 4

if(age > 21) {
    console.log("You are older than 21")
}else {
    console.log("You are younger than 21")
}

//Ejercicio 5

if(age == ignasiAge) {
    console.log("You have the same age than Ignasi")
} else if(age > ignasiAge) {
    console.log("Ignasi is younger than you")
} else if(age < ignasiAge) {
    console.log("Ignasi is older than you")
}


//SORTING AN ARRAY 
/* EJERCICIO 1  */

classPeople = ["Matias","Alfredo","Ricardo","Noelia","Ejemplo","Lorem","Ignacio","Nelson","Cristian","Matias","Barbara"];

orderedArray  = classPeople.sort()
firstNumber = classPeople[0];
lastNumber = classPeople[classPeople.length-1];
console.log(firstNumber,lastNumber)
console.log(orderedArray)

for(i=0; i< classPeople.length;i++) {
    console.log(classPeople[i]);
}


// Looping over an array
let ageOfStudents = [0,2,12,42,23,31,15,19,21,23,12,20];
for(let i =0; i<ageOfStudents.length;i++) {
    if(ageOfStudents[i] % 2 == 0) {
        console.log(ageOfStudents[i]);
    }
}

//Ejercicio 3 

let lowestNumberInArray = function(array) {
    min = Math.min(...array);
    return min;
}

console.log('Numero mas chico: ' + lowestNumberInArray(ageOfStudents));


//Ejercicio 4

let biggerNumberInArray = function(array) {
    max = Math.max(...array);
    return max;
}

console.log('Numero mas grande: ' + biggerNumberInArray(ageOfStudents));

//Ejercicio 5
testArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
function findNumber(array,position) {
    if(position> array.length) {
        throw 'Que haces? pone un numero mas chico'
    }
    return array[position];
}

console.log(findNumber(testArray,1));

//Ejercicio 6

function findSameNumbers(array) {
    repeated = [];
    cont = 0;
    for(i=0;i<array.length;i++){
        for(j = i+1;j<array.length;j++) {
            if(array[i] == array[j]) {
                repeated[cont] = array[i]
                cont++;
            }
        }
    }
    return repeated;
}
let arraySix = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
console.log(findSameNumbers(arraySix));

//Ejercicio 7 
myColor = ["Red", "Green", "White", "Black"];
function JoinElements(array) {
    return array.join() 
}

console.log(JoinElements(myColor))

///JAVASCRIPT STRING FUNCTIONS 
//ejercicio 1
const EX1 = '32443';
function reversedNumbers(string) {
    first = string.split('');
    second = first.reverse()
    lastOne = second.join('')
    return lastOne;
}
console.log(reversedNumbers(EX1))


//EJERCICIO 2
const EX2 = 'webmaster';

function alphabeticalOrder(value) {
    first = value.split('');
    ordered = first.sort();
    joinAgain = ordered.join('');
    return joinAgain;
}

console.log(alphabeticalOrder(EX2));

//EJERCICIO 3

function FirstLetter(value ) {
    arraysa = value.split(" ");
    newArray = [];
    cont = 0;
    finalArray = []
    arraysa.forEach(element => {
         nuevo = element.split("");
         otherPart = element.slice(1);
         string =  nuevo[0].toUpperCase();
         finalArray[cont] = string + otherPart;
        cont++
        });
    return(finalArray.join(" "));
}

console.log(FirstLetter('prince of persia'))


//Ejercicio 4 

function longestWords(value) {
    newArray = [];
    arrayToUse = value.split(" ");
    for (let index = 0; index < arrayToUse.length; index++) {
       newArray[index] = arrayToUse[index].split('');
    }
    let biggerWord = newArray.sort()
    return biggerWord[0].join('');
}

console.log(longestWords('Web Development Tutorial'))