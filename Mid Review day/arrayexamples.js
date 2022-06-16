// 1. Array – Find array of Odd/Even/Numbers divisible by 4
let numbers = [1, 12, 2, 23, 80, 7, 23, 44, 2, 231];

// Finding Odd Numbers
let oddNum = numbers.filter(a => a % 2 != 0);
console.log(oddNum);

// Finding even Numbers
let evenNum = numbers.filter(a => a % 2 == 0);
console.log(evenNum);

// Finding even Numbers
let divisibleByfour = numbers.filter(a => a % 4 == 0);
console.log(divisibleByfour);


// 2. Caluculate Sum of all Odd/Even/Numbers divisible by 4

// Calculating sum of all odd numbers


// Calculating sum of all even numbers


// Calculating sum of all numbers divisible by 4

let divsblarr = numbers.filter(a => a % 4 == 0);
let sum = divsblarr.reduce((init, a) => init + a, 0);
console.log(sum);

// 3. Find Unique Numbers in the Array

let uniqueArray = [];
numbers.map(a => {
    if (uniqueArray.indexOf(a) == -1)
        uniqueArray.push(a);
    else {
        uniqueArray.splice(uniqueArray.indexOf(a), 1)
    }
})
console.log(uniqueArray);
// 4. Transform Array to print the type of elements in the Array
// getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”]

let array2 = [50, "apple", { a: 1 }];
let typeArray = array2.map(a => typeof a);
console.log(typeArray, array2);

// 5. Destructure Array
// From the given array, build an object that has array elements as
// properties. The name of the property is
// <typeof the element>+index
// destructureArray([50,”apple”,{a:1}])=>
// {number0:50,string1:”apple”,object2:{a:1}}

//-> bond er ss ace: 
let indexArray = [];
for (i = 0; i < typeArray.length; i++) {
    indexArray.push(i);
}
console.log(indexArray);

let contactArray = [];
for (i = 0; i < typeArray.length; i++) {
    contactArray.push(typeArray[i].concat(indexArray[i]));
}
console.log(contactArray);


let finalArray = {};
contactArray.forEach((element, index) => {
    finalArray[element] = array2[index];
});
console.log(finalArray);


// 6. Find Index of first odd number - (using array method and also not
// using array methods)

// Not Sure how to do it
let oddNum1 = numbers.filter(a => a % 2 != 0);

oddNum1


// 7. Convert string to array and array to string. don’t use split() and
// toString()
//"Here goes the string"

// Not Sure how to do this as well