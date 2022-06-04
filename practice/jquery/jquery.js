
// print type of Array
let ar = [50, "apple", { a: 1 }];
let nar = [];
for (i = 0; i < ar.length; i++) {
    nar[i] = typeof (ar[i]);
}
console.log(nar);

// let array2 = [50, "apple", { a: 1 }];
// let typeArray = array2.map(a => typeof a);
// console.log(typeArray);

    //  getTypes([50,”apple”, { a: 1 }]) => [“number”,”string”,”object”]
