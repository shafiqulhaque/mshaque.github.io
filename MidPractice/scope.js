let x = 10;
function main() {   //var x;
    console.log("x1 is:" + x);  //undefined? x is declared but not yet assigned,
    //there is local varaible with same name.
    x = 20;
    console.log("x2 is:" + x);  //20? assign local variable
    if (x > 0) {
        var x = 30;//
        console.log("x3 is:" + x);  //30?local variable is reassigned.
    }
    console.log("x4 is:" + x);  //30 (209) var is function scope, so you can read it out of block
    var x = 40;
    var f = function (x) {
        console.log("x5 is:" + x);  //50 x is parameter, x is called with 50(217)
    };
    f(50);
    console.log("x6 is:" + x);  //40 (213)local variable is assigned 40,
}

main();
console.log("x7 is:" + x);  //10 (213, 209) local declaration of x inside the function.
