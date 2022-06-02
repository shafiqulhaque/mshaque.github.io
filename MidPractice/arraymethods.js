//map
let arr2 = [1, 2, 3, 4, 5, 6];
let nArr2 = arr2.map(a => a * a);
console.log(nArr2);

//filter
let arr = [1, 2, 3, 4, 5, 6];
let nArr = arr.filter(a => a % 2 === 0);
console.log(nArr);

//reduce
let arr3 = [1, 2, 3, 4, 5, 6];
let nArr3 = arr3.reduce((n1, n2) => {
    return n1 + n2;
});
console.log(nArr3);

//mixed 
let arrm = [1, 2, 3, 4, 5, 6, 7, 8];

let arrn = arrm
    .filter(a => a % 2 === 1)
    .map(a => a * a)
    .reduce((prev, elem) => prev + elem);
console.log(arrn);

//real life example
let orders = [
    { userId: 1, amount: 10 },
    { userId: 1, amount: 15 },
    { userId: 2, amount: 5 },
    { userId: 2, amount: 7 }
];

let fin = orders.filter(order => order.userId === 1)
    .map(order => order.amount)
    .reduce((prev, elem) => prev + elem);

console.log(fin);








