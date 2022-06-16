let moduleArray = require('./array-exercise.js');

console.log(moduleArray.arrOfOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(moduleArray.arrOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(moduleArray.arrOfDiv4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(moduleArray.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(moduleArray.uniqueOfArray([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]));
console.log(moduleArray.typeOfElement([50, "apple", { a: 1 }]));

console.log(moduleArray.destArr([50, "apple", { a: 1 }]));
console.log(moduleArray.indexOfFirstOdd([2, 4, 6, 7, 8, 9, 10]));

console.log(moduleArray.string2Array("WAP Course"));
console.log(moduleArray.array2String(["Wap", "Course", "P"]));

let objArray = require('./objArray.js');
console.log(objArray.convertObject2Array({ a: 1, b: [1, 2], c: "string", d: { x: 1, y: 2 } }));

console.log(objArray.objMinify([{ a: 1, b: 2 }, { a: 2, b: 4 }]));

console.log(objArray.findOldestPerson([{ name: "Ram", age: 20 }, { name: "Lakshman", age: 15 }]));

console.log(objArray.findYounger([{ name: "Ram", age: 20 }, { name: "Lakshman", age: 15 }]));

console.log(objArray.findBetween([{ name: "Ram", age: 20 }, { name: "Lakshman", age: 16 }]));