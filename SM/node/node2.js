let myFunc = {};

function a() {
    console.log("a");
}

function b() {
    console.log("b");
}

myFunc.myVar = 9;

var x = 10;
// module.expert = { a: a, c: b };

module.exports = myFunc;