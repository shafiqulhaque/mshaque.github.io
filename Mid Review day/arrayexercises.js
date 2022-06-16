// 1. Create /Delete Object
// 2. Update Properties of Object
// 3. Remove Properties from the object
// 4. Copy/Clone Object


let obj={

   p1: {
    name: "Shainkey",
    age: 28,
    salary: 1200000, }, 

    p2: {
        name: "Shainkey1",
        age: 27,
        salary: 1600000, },
    
    p3: {
            name: "Shainkey2",
            age: 25,
            salary: 1300000, }
};


let obj1={a: 2};

let obj2= {};

console.log(obj.p2.age);

obj1.a=3;
console.log(obj1);
obj1=null;
console.log(obj1);

obj.p3.name=null;
console.log(obj.p3.name);

obj1={a: 7};
console.log(obj1);

obj.p3.name="Rana";
console.log(obj.p3.name);

console.log(obj);


let copyobj= obj1;
console.log(copyobj);
let copyobj1= obj;
console.log(copyobj1);


// Need to work on below mentioned exercises    /////////////////// after this, also work on object array 6 questions mentioned in the pdf

// //for(let key in obj){
//     key ->key
//     value->obj[key]
// //}
// // Find if this particular "value" exists in the object -> "sdfsdf"
// let newObject = {a:1, b:"string",c:[1,2] }


// //Compare arrays and objects