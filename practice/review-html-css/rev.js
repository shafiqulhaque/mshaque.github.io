
//sum object item a and b and return it

// let obj = {
//     a: 1, b: 2, c: function () {
//         console.log("Here", this.a);
//         console.log("In Method", this);
//         //return this.a;
//     },
//     d: {
//         e: function () {
//             console.log(this);
//         }, f: 30
//     }
// };
// obj.d.e();
// obj.c();


//new

// function sum() {
//     let x = 10;
//     let obj = {
//         a: 1, inner:
//             function () {
//                 console.log("Inner", this);
//                 function level2() {
//                     console.log("Level2 (***", self);
//                 }
//                 level2();
//             }
//     };
//     obj.inner();
// }

// sum();


//***************************************8 */
let array = [{ a: 1, b: 2, c: 3 }, { a: 3, b: 4, c: 6 }];
//find sum of C and return it
let sum = array.reduce((prev, elem, idx, arr) => {
    return prev += elem.c;
}, 0);

console.log(sum);

//********* */

const pt = {
    x: 4,
    y: 3,
    distanceFromOrigin: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};
console.log((pt.distanceFromOrigin())); 