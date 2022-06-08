const func = {};

// Convert Object to Array
// 1. Each element in the array is the concentation of key + value in the  object.
//     convertObjectToArray({ a: 1, b: [1, 2], c:”string”, d: { x: 1, y: 2 } }
// => [a1, b12, cstring, dx1, dy2]

//let obj = { a: 1, b: [1, 2], c: "string", d: { x: 1, y: 2 } };

func.convertObject2Array = function (obj) {
    let result = [];
    for (let key in obj) {
        if (obj[key] instanceof Array) {
            result.push(key + flatArr(obj[key]));
        }
        else if (obj[key] instanceof Object) {
            for (let key2 in obj[key]) {
                result.push("" + key + key2 + obj[key][key2]);
            }
        }
        else {
            result.push("" + key + obj[key]);
        }
    }
    return result;
};

function flatArr(arr) {
    let str = "";
    for (let item of arr) {
        str += item;
    }
    return str;
}

// 2. Minify Object
// Get objects that has properties of name, ‘a’
// [{ a: 1, b: 2 }, { a: 2, b: 4]=> [{ a: 1 }, { a: 2 }]

func.objMinify = function (arr) {
    let result = [];
    for (let item of arr) {
        for (let key in item) {
            if (key == "a") {
                result.push({ [key]: item[key] });
            }
        }
    }
    return result;
};

// 3. Get the Oldest person age
// findOldestPerson[{ name:’Ram’, age: 20 }, { name:’Lakshman’, age: 15 }]=> Ram

func.findOldestPerson = function (arr) {
    let oldestName = "";
    let oldestAge = -Infinity;
    for (let person of arr) {
        if (person.age > oldestAge) {
            oldestAge = person.age;
            oldestName = person.name;
        }
    }
    return oldestAge;
};

// 4. Get the Youngest person name
// findYounger[{ name:’Ram’, age: 20 }, { name:’Lakshman’, age: 15 }]=> 15

func.findYounger = function (arr) {
    let youngestName = "";
    let youngestAge = Infinity;
    for (let person of arr) {
        if (person.age < youngestAge) {
            youngestAge = person.age;
            youngestName = person.name;
        }
    }
    return youngestName;
};

// 5. Find the person whose age is between 16 and 17 years
// findYounger[{ name:’Ram’, age: 20 }, { name:’Lakshman’, age: 16 }]=> { name:’Lakshman’, age: 15 }

func.findBetween = function (arr) {
    for (let person of arr) {
        if (person.age >= 16 && person.age <= 17) {
            return person;
        }
    }
};

module.exports = func;



