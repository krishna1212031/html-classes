// Named
// Anonymous

function firstFunc() {
  console.log("Called firstFunc");
}

firstFunc();

function secondFunc(a = "", b = "", c = "") {
  console.log(a, b, c);
}

secondFunc("Krishna");

function thirdFunc(name1, name2) {
  return name1 + " loves " + name2;
}

// console.log(check);
console.log(thirdFunc("Gundi", "Teddy"));


var str = "idjhxncd";

console.log(str.toLowerCase());

function daysInMonth(month) {
  month = month.toLowerCase();
  switch (month) {
    case "jan":
    case "mar":
    case "may":
    case "jul":
    case "aug":
    case "oct":
    case "dec":
      return "this month has 31 days.";
    case "apr":
    case "jun":
    case "sep":
    case "nov":
      return "this month has 30 days.";
    case "feb":
      return "this month has 28/29 days.";
    default:
      return 'please check your input "' + month + '"';
  }
}

console.log(daysInMonth("jAn"));


function add(a, b) {
  return a + b;
}

function sub(a,b) {
  return a-b;
}

function mul(a,b) {
  return a*b;
}

function div(a,b){
  return a/b;
  
}

function calculator(func, a, b) {
  return func(a, b);
}


// pass by value
// pass by reference
console.log(calculator(add, 1, 2));
