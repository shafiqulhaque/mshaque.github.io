// function test() {
//     let x = 10;
//     if (x >= 10) {
//         var y = 5;  // why only var ?
//     }
//     console.log(y);
// }
// test();


// var obj = { x: 3, y: 5, z: "String", a: "1", ar: { x: 1 }, arE: [1, 2] };
// console.log(obj.ar.x);

let ma = ["ap", "ju", null];
let na = ma.splice(0, 2, "Insert Me");
console.log(ma, na); 