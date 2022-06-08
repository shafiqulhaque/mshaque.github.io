// #1 Find array of Odd / Even / Numbers divisible by 4.
//let numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];

const func = {};

func.arrOfOdd = function (myarr) {
    let oddNumbers = [];
    myarr.forEach(myarr => {
        if (myarr % 2 === 1) {
            oddNumbers.push(myarr);
        }
    });
    return oddNumbers;
}

func.arrOfEven = function (myarr) {
    let evNumbers = [];
    myarr.forEach(myarr => {
        if (myarr % 2 === 0) {
            evNumbers.push(myarr);
        }
    });
    return evNumbers;
}


func.arrOfDiv4 = function (myarr) {
    let dvsbl4 = [];
    myarr.forEach(myarr => {
        if (myarr % 4 === 0) {
            dvsbl4.push(myarr);
        }
    });
    return dvsbl4;
}

// arrOfOdd(numbers);
// arrOfEven(numbers);
//arrOfDiv4(numbers);

// #2 Caluculate Sum of all Odd / Even / Numbers divisible by 4.

func.sum = function (myarr) {
    let s = 0;
    //let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i <= myarr.length - 1; i++) {
        if (myarr[i] % 2 === 0) {
            s = s + myarr[i];
        }
    }
    return s;
}
//console.log(sum());

// #3 Find Unique Numbers in the Array.
func.uniqueOfArray = function (myarr) {

    let uniqueArray = [];

    for (let item of myarr) {
        if (uniqueArray.indexOf(item) == -1) {
            uniqueArray.push(item)
        }
    }
    return uniqueArray;
}

// console.log(uniqueArray);

// #4 Transform Array to print the type of elements in the Array
// getTypes([50,”apple”, { a: 1 }]) => [“number”,”string”,”object”]
// let ar = [50, "apple", { a: 1 }];

func.typeOfElement = function (myarr) {
    let typeArray = [];
    for (i = 0; i < myarr.length; i++) {
        typeArray[i] = typeof (myarr[i]);
    }
    return typeArray;
}

// #5 Destructure Array From the given array, build an object that has array elements
// as properties.The name of the property is < typeof the element > +index
// destructureArray([50,”apple”,{a: 1}])=>{ number0: 50, string1:”apple”, object2: { a: 1 }}

func.destArr = function (myarr) {
    let result = {};
    for (let i = 0; i < myarr.length; i++) {
        result[typeof myarr[i] + i] = myarr[i];
    }
    return result;
};

// #6 Find Index of first odd number -
//(using array method and also not using array methods)
// let numbers2 = [2, 3, 6, 7];

func.indexOfFirstOdd = function (myarr) {
    for (i = 0; i < myarr.length; i++) {
        if (myarr[i] % 2 != 0) {
            return i;
        }
    }
    return "There is no odd number in the array";
}


// #7 Convert string to array and array to string.
// Don’t use split() and toString()

func.string2Array = function (myString) {
    let myArr = [];

    for (i = 0; i < myString.length; i++) {
        myArr.push(myString.charAt(i));
    }
    return myArr;
}

func.array2String = function (myarr) {
    let str = "";

    for (i = 0; i < myarr.length; i++) {
        str = str + myarr[i];
    }
    return str;
}

module.exports = func;