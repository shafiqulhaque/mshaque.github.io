//deep clone , shallow clone 
// let obj1 = { a: 1, b: 2 };
// let cloneObj = obj1;
// //let cloneObj = { ...obj1 };

// obj1.a = 5;
// console.log(obj1, cloneObj);


//deep clone , shallow clone 
// let ar = [1, 2, 3];
// let cloneAr = [...ar];
// cloneAr.push(4);
// console.log(ar, cloneAr);



//deep clone , shallow clone 
let ar1 = [{ a: 1, b: 2 }, { c: 3, d: 4 }];
let cloneAr1 = [...ar1];
// console.log(ar1, cloneAr1);
cloneAr1[0].b = 4000;
console.log(ar1, cloneAr1);


//how to clone an array // clone objects

// ******copy the object will come in exam *******
// sahidul - copy using loop - deep copy
// let arr4 = [{ a: 1, b: 2 }, { c: 3, d: 4 }];
// let arr5 = [];
// arr4.forEach(function (item, idx) {
//     //console.log(idx, item);
//     arr5.push({ ...item });
// });

// arr4[0].a = 10;
// console.log(arr4, arr5);


//madam
// let aa = [45, 46, 88];
// let bb = { a: 1, b: 2, c: 3, elem: 5 };

//console.log(arr4, arr5);

//scope printing 5 rules given in sahred file by prof



// //x();
// function x() {
//     console.log("i am at 1st");
// }

// //x();
// function x(a) {
//     console.log("i am at 2nd");
// }

// //x();
// function x(a, b) {
//     console.log("i am at 3rd");
// }


//aguments
// function x(a, b) {
//     console.log(a, b);

//     for (let i = 0; i < arguments; i++) {
//         confirm.log(arguments[i]);
//     }
//     console.log("i am at 3rd");

//     x("string", 1, true, 9);
// }

// x(1, 2, 3, 4, 5, 6);

// //****** */
// let a = [4, 5];
// let b = { a: 1 };
// let c = [{ b: 1 }, { d: 8 }];
// let d = "d";

// console.log([...a, b, ...c, d]);

// //destructing assignment - rest and spread-11

// let address = [1, "street", "London"];
// const [, street] = address;

