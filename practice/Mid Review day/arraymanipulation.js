// 1. Create Array empty/some elements,
let array=[];
let array1=[1, a= 5, {a:7}, "Pakistan", 9.5];
console.log(array, array1);

// 2. Update Array - change the value of element at nth position,
let b= array1.pop();
console.log(b);

array1.push("Hasde rawo");
console.log(array1);

array1[0]=3;
console.log(array1);

// 3. Delete Item - remove the element at nth position
array1[1]=null;
console.log(array1);
console.log(array1.length);

delete array1[1];
console.log(array1);
console.log(array1.length);

// 4. Delete Array/Empty Array/Copy Array/Clone Array( Both arrays
// should be changed independently without changing the Others)
array=array1;
array1=[];
console.log(array1);
console.log(array);

// 5. Get subset of array

// Don't know how?


// 6. Length of array
console.log(array1.length);
console.log(array.length);

// 7. Splice/slice/concat
array.splice(1,1, "Hello wai");
console.log(array);

//slice
console.log(array1);
array1=array.slice(1, 3);
console.log(array);
console.log(array1);

//find index of
console.log(array1.indexOf(5));


// #Question 12 ##Write some code to put these numbers in order var numbers

// Didn't understand this code
var numbers2 = [1, 12, 2 ,23,77,7,33,5,99,234];
var numbers3 = numbers2.sort((a, b) => {
   return a - b;
});

console.log(numbers3);
