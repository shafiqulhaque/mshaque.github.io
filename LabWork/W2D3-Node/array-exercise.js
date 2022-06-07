// #1 Find array of Odd / Even / Numbers divisible by 4.
let numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];

function arrOfOdd(myarr) {
    let oddNumbers = [];
    numbers.forEach(number => {
        if (number % 2 === 1) {
            oddNumbers.push(number);
        }
    });
    console.log(oddNumbers);
}

function arrOfEven(myarr) {
    let evNumbers = [];

    numbers.forEach(number => {
        if (number % 2 === 0) {
            evNumbers.push(number);
        }
    });
    console.log(evNumbers);
}

function arrOfDiv4(myarr) {
    let oddNumbers = [];

    numbers.forEach(number => {
        if (number % 4 === 0) {
            oddNumbers.push(number);
        }
    });
    console.log(oddNumbers);
}
arrOfOdd(numbers);
arrOfEven(numbers);
arrOfDiv4(numbers);

// #2 Caluculate Sum of all Odd / Even / Numbers divisible by 4.

function sum() {
    let s = 0;
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] % 2 === 0) {
            s = s + array[i];
        }
    }
    return s;
}
console.log(sum());

// #3 Find Unique Numbers in the Array.

let uniqueArray = [];

for (let i = 0; i <= numbers.length - 1; i++) {
    if (uniqueArray.indexOf(numbers[i]) == -1) {
        uniqueArray.push(numbers[i]);
    } else {
        uniqueArray.splice(uniqueArray.indexOf(numbers[i]), 1)
    }
}
console.log(uniqueArray);

// #4 Transform Array to print the type of elements in the Array 
// getTypes([50,”apple”, { a: 1 }]) => [“number”,”string”,”object”]

let ar = [50, "apple", { a: 1 }];
let typeArray = [];
for (i = 0; i < ar.length; i++) {
    typeArray[i] = typeof (ar[i]);
}
console.log(typeArray);

// #5 Destructure Array  From the given array, build an object that has array elements 
// as properties.The name of the property is < typeof the element > +index 
//destructureArray([50,”apple”,{a: 1}])=>{ number0: 50, string1:”apple”, object2: { a: 1 }}

let indexArray = [];
for (i = 0; i < typeArray.length; i++) {
    indexArray.push(i);
}
//console.log(indexArray);

let contactArray = [];
for (i = 0; i < typeArray.length; i++) {
    contactArray.push(typeArray[i].concat(indexArray[i]));
}
//console.log(contactArray);

let finalArray = {};
contactArray.forEach((element, index) => {
    finalArray[element] = ar[index];
});
console.log(finalArray);

// #6 Find Index of first odd number -
//(using array method and also not using array methods)

let numbers2 = [2, 3, 6, 7];
function indxOfOdd(myarr) {
    for (i = 0; i < myarr.length; i++) {
        if (myarr[i] % 2 != 0) {
            return i;
        }
    }
    return "There is no odd number in the array";
};
console.log(indxOfOdd(numbers2));

// #7 Convert string to array and array to string. 
// Don’t use split() and toString()
let str = "I am doing WAP now";
let arrStr = [];

let strArr = ["I", "am", "doing", "wap", "now"];
let strf = "";

for (i = 0; i < strArr.length; i++) {
    strf += strArr[i] + " ";
}
console.log(strf);



