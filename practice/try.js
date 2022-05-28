// var x = 1;
// var y = 3;
// var z = x + y;
// console.log(z);

// var obj = {
//     x: 10,
//     y: 20,
//     nested: { x: 1 },
//     a: "String"
// }

// console.log(obj.nested.x);

// var q = true;
// console.log(typeof q);

// let aNum = 10;
// console.log(++aNum);
// console.log(++aNum);

// let aNum2 = 10;
// console.log(--aNum2);
// console.log(--aNum2);

// var st = "my name";

// console.log(st.indexOf(" "));

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let arr = ['apple', 'banana', 'grap', 'cherry', 'wheat', 'orange'];
// arr.pop();

// console.log(arr);
// arr.unshift("orange");
// console.log(arr);
// arr.shift("orange");
// console.log(arr);

// arr.splice(0, 3);
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);
// arr.splice(100, 0, "toy");
// console.log(arr);


// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(2, 4));

// function a() {
//     return {
//         a: 1
//     }
// }
// function b() {
//     return
//     {
//         b: 1
//     }
// }
// console.log(a());
// console.log(b());

// function caller(b) {
//     console.log(b);
//     b();
// }

// let a = function () {
//     console.log("here");
// }

// caller(a);

// function caller2(a) {

// }
// let b = 5;
// caller2(b);


// function color() {
//     let list = ['Apple', 'Banana', 'Jackfruit'];

//     for (var i = 0; i < list.length; i++) {
//         console.log(list[i].length);
//     }
//     // console.log(chars.length);
// }

// //console.log(color());

// function color2() {
//     let list = ['Apple', 'Banana', 'Jackfruit'];
//     let newArr = [];

//     for (var i = 0; i < list.length; i++) {
//         if (list[i].length >= 5) {
//             newArr.push(list[i])
//         }
//         return newArr[i];
//     }
// }

// console.log(color2());


let arr = [4, 5, 9];

let resAdd = arr.reduce(function (prev, element, index, array) {
    console.log(prev, index, element)
    return prev + element;
}, 0);

console.log(resAdd, arr);

let resMul = arr.reduce(function (prev, element, index, array) {
    console.log(prev, index, element)
    return prev * element;
}, 1);

console.log(resMul, arr);