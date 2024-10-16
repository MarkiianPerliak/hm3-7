// 1
let numbers = [5, 15, 25];
numbers[1] = 10;
console.log(numbers);
// 2
let stringsArray = ["hypna", "dance", "oh"];
stringsArray.push("eh");
console.log(stringsArray);
// 3
let numbersArray = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

console.log(`Сума всіх чисел в масиві: ${sum}`);
// 4
let numbersArray4 = [10, 20, 30, 40, 50];

for (let q = 0; q < numbersArray4.length; q++) {
    console.log(numbersArray4[q]);
}
// 5

let stringsArray5 = ["mandela", "man", "man", "man-dela", "dela"];

for (let g = 0; g < stringsArray5.length; g++) {
    if (stringsArray5[g].length > 5) {
        console.log(stringsArray5[g]);
    }
}
// 6
let numbersArray6 = [12, 5, 8, 21, 34, 15, 7, 19, 45, 3];

let maxNumber = numbersArray6[0];

for (let v = 1; v < numbersArray6.length; v++) {
    if (numbersArray6[v] > maxNumber) {
        maxNumber = numbersArray6[v];
    }
}

console.log(`Максимальне значення з масиву: ${maxNumber}`);
// 7

let numbersArray7 = [12, 5, 8, 21, 34, 15, 7, 20, 45, 6];

console.log("Парні числа в масиві:");
for (let z = 0; z < numbersArray7.length; z++) {
    if (numbersArray7[z] % 2 === 0) {
        console.log(numbersArray7[z]);
    }
}
