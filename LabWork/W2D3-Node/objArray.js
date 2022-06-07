// Convert Object to Array
// 1. Each element in the array is the concentation of key + value in the  object.
//     convertObjectToArray({ a: 1, b: [1, 2], c:”string”, d: { x: 1, y: 2 } }
// => [a1, b12, cstring, dx1, dy2]

let obj = { a: 1, b: [1, 2], c: "string", d: { x: 1, y: 2 } };
function convertObjectToArray(myobj) {
    let objentries = Object.entries(myobj);
    let objArr = [];
    for (let [key, value] of objentries) {
        let x;
        if (Array.isArray(value)) {
            value = value.reduce((accumulator, element) => {
                return accumulator += element;
            }, '');
            x = key + "" + value;
            objArr.push(x);
        }
        else if (typeof (value) == 'object') {
            value = convertObjectToArray(value)
            //console.log(key, "objarr= ", value)
            for (let y of value) {
                objArr.push(key + "" + y);
            }
        } else {
            x = key + "" + value;
            objArr.push(x);
        }
    }
    return objArr;
}
console.log(convertObjectToArray(obj));


// 2. Minify Object
// Get objects that has properties of name, ‘a’
//         [{ a: 1, b: 2 }, { a: 2, b: 4]=> [{ a: 1 }, { a: 2 }]



// 3. Get the Oldest person age
// findOldestPerson[{ name:’Ram’, age: 20 }, { name:’Lakshman’, age: 15 }]=> Ram



// 4. Get the Youngest person name
// findYounger[{ name:’Ram’, age: 20 }, { name:’Lakshman’, age: 15 }]=> 15


// 5. Find the person whose age is between 16 and 17 years
// findYounger[{ name:’Ram’, age: 20 }, { name:’Lakshman’, age: 15 }]=> { name:’Lakshman’, age: 15 }

