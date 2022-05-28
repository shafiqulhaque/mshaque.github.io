//Assignment Q-1
function max(x, y) {
    return x > y ? x : y;
}
console.log(max(8, 6));

// -----------------------------------------------------

// Assignment Q-2
function max2(a, b, c) {
    if (a > b & a > c) {
        return a;
    } else if (b > c & b > a) {
        return b;
    } else {
        return c;
    }
}
console.log(max2(131, 21, 172));
// ---------------------------------

//Assignment Q-3
function isVowel(argument) {
    var text;
    var argument = argument.toLowerCase();
    var vowels = (['a', 'e', 'i', 'o', 'u']);
    for (var i = 0; i <= vowels.length; i++) {
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
var char = "E"; // give your string here
if (isVowel(char)) {
    //console.log(char + " is a vowel");
    console.log(char + " is a vowel");
} else {
    //console.log(char + " is not a vowel");
    console.log(char + " is not a vowel");
}
// ---------------------------------
//Assignment Q-4
function multi() {
    let s = 1;
    let array = [1, 2, 3, 4];
    for (let i = 0; i <= array.length - 1; i++) {
        s = s * array[i];
    }
    return s;
}
console.log(multi());

function sum() {
    let sm = 0;
    let array = [1, 2, 3, 4];

    for (let i = 0; i <= array.length - 1; i++) {
        sm = sm + array[i];
    }

    return sm;
}
console.log(sum());
// ---------------------------------

//Assignment Q-5
function reverse(str) {
    let st = "";
    for (let i = str.length - 1; i >= 0; i--) {
        st += str[i];
    }
    return st;
}
console.log(reverse("jag testar"));
// ---------------------------------
// Assignment Q-6

const findLongestWord = (s) => {
    //Write a function findLongestWord()
    // that takes an array of words and returns the length of the longest one.
    let splicedString = s.split(" ");
    let max = 0;
    splicedString.forEach((element) => {
        if (element.length > max) {
            max = element.length;
        }
    });
    return max;
};

console.log(findLongestWord("I love Bangladesh"));

// Assignment Q-7
// function filterLongWords(){

// }
// ---------------------------------
//Assignment Q-8

//a) multiply each element by 10; 
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem) {
    return elem * 10;
});
console.log(b.toString());

//b) return array with all elements equal to 3;
const c = a.filter(function (elem) {
    return elem == 3;
});
console.log(c.toString());
//c) return the product of all element
const d = a.reduce(function (prevValue, elem) {
    return prevValue * elem;
});
console.log(d);
