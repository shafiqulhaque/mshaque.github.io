/*
Object Arrays
1. Convert Object to Array
Each element in the array is the concentation of key+value in the
object.
convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}
=> [a1,b12,cstring,dx1,dy2]
*/

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