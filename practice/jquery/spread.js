//deep clone , shallow clone 
// let obj1 = { a: 1, b: 2 };
// // let cloneObj = obj1;
// let cloneObj = { ...obj1 };

// obj1.a = 5;
// console.log(obj1, cloneObj);


//deep clone , shallow clone
// let ar = [1, 2, 3];
// let cloneAr = [...ar];
// cloneAr.push(4);
// console.log(ar, cloneAr);



//deep clone , shallow clone
// let ar1 = [{ a: 1, b: 2 }, { c: 3, d: 4 }];
// let cloneAr1 = [...ar1];
// // console.log(ar1, cloneAr1);
// cloneAr1[0].b = 4000;
// console.log(ar1, cloneAr1);


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




x();
function x() {
    console.log("i am at 1st");
}

x();
function x(a) {
    console.log("i am at 2nd");
}

x();
function x(a, b) {
    console.log("i am at 3rd");
}



