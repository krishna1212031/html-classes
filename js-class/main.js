// ES - EcmaScript
/* dfv 
fd 
ed
e */

// number - 1, 2, 23.32 (integer and float)
// string - "sadf", 'ASDF' (string and char)
// boolean - true and false
// undefined
// null
// array = [1, "askj", true, [1, 2, [1]]];      index (number) - value (anything)
/* object = {                                   key(string) - value (anything)
    name: "Krishna",
    phoneNumber: 9876543210,
    address: "btm layout",
    marks: {
        hindi: 10,
        english: 20
    },
    isPresent: false
}; */

var a = 2;
var b = 2.5;
console.log(a, b);

var c = true;
var d = false;
console.log(c, d);

var e = "krishna";
var f = "@";
console.log(e, f);

var g = undefined;
console.log(g);

var h = null;
console.log(h);

var arr = [
  "krishna",
  123,
  1.2,
  "@",
  null,
  undefined,
  { "Home Adress": 3, krishna: "sakshi" },
  true,
  ["sakshi", "#", [1]],
];
console.log(arr);

console.log(arr[8][0]);

var obj = {
  name: "Krishna",
  phoneNumber: 9876543210,
  address: "btm layout",
  marks: {
    hindi: 10,
    english: 20,
  },
  isPresent: true,
};

console.log(obj.marks.english);
console.log(arr[6].krishna);
console.log(arr[6]["krishna"]);
console.log(arr[6]["Home Adress"]);

// ARITHMETIC OPERATORS

var first = 6;
var sec = 5;

console.log(first + sec);

console.log(first - sec);

console.log(first * sec);

console.log(first / sec);

console.log(first % sec);

first += sec; // first = first + sec
first -= sec;
first *= sec;
first /= sec;
first %= sec;

console.log(first);

first = 6;

var third = ++first; //pre increment = first it will increment the value of first variable then it will be asigned to third variable
console.log(first, third);

var third = --first;
console.log(first, third);

var third = first++;
console.log(first, third); //post increment = first it will asign the value of the third variable then it will increase the value of first variable.

var third = first--;
console.log(first, third);

// LOGICAL

// OR - gives true if any one is true

console.log(true || true);
console.log(true && false);
console.log(!true);

first = true;
console.log(first || false);
console.log(first && false);
console.log(!first);

console.log(9 || 8);
console.log(true && "krishna");

console.log(!0);
console.log(![]);
console.log(!{});
console.log(!NaN);
console.log(!null);
console.log(!8);
console.log(!"krishna");

// COMPARISON OPERATORS
console.log(first == sec);
console.log(first != sec);
console.log(first === sec);
console.log(first !== sec);

console.log(0 == "0");
console.log(0 === "0");

//BIT WISE OPERATORS

// | & ~ ^

console.log(2 | 5); // 0010  |  0101  =  0111
console.log(2 & 5); // 0010  &  0101  =  0000
console.log(~2); // 0010  =  1101
console.log(2 ^ 5); // 0010  ^  0101  =  0111

// He said, "I am cute". (use backslash)
console.log('He said, "i am handsome\\cute"');
console.log('He said, \n "i am handsome\\cute"');
console.log('He said, \t "i am handsome\\cute"');

// conditionals

/*
if (condition) {

} else {
    // do something
}

if (condition)
{

}
else
{

}

*/
var a = -Infinity;
var b = 1;
if (a == 5) a = a + b;

if (a < 0 && a > -Infinity) {
  console.log("Negative");
} else if (a > 0 && a < Infinity) {
  console.log("Positive");
} else if (a == 0) {
  console.log("Zero");
} else if (a == Infinity) {
  console.log("Infinity");
} else console.log("-infinity");


