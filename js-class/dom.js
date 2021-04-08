// a = 8;

// console.log(window);
// console.log(window.window.window.location.host);

// console.log(document);

var para = document.getElementsByTagName("p");
console.log(para);

// golfcode
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    var n = 0;
  } else if (strokes <= par - 2) n = 1;
  else if (strokes == par - 1) n = 2;
  else if (strokes == par) n = 3;
  else if (strokes == par + 1) n = 4;
  else if (strokes == par + 2) n = 5;
  else if (strokes >= par + 3) n = 6;
  return console.log(names[n]);
}

golfScore(4, 1);

// Card counting
var count = 0;

function cc(card) {
  var status = "";
  if (card == 2 || card == 3 || card == 4 || card == 6) {
    count++;
  } else if (
    card == 10 ||
    card == "J" ||
    card == "Q" ||
    card == "K" ||
    card == "A"
  ) {
    status = "Hold";
    count--;
  } else status = "Hold";
  if (count <= 0) return console.log(count, status);
  else return console.log(count, status);
}
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

function sumFor(arr, n) {
  var sum = 0;
  if (n <= 0) sum = 0;

  for (i = 0; i < n; i++) {
    sum += arr[i];
  }
  return console.log(sum);
}
sumFor([1], 0);
sumFor([2, 3, 4], 1);
sumFor([2, 3, 4, 5], 3);

// Strings using Template Literals

class Book {
  //constructor
  constructor(author) {
    this._author = author;
  }
  //getter
  get writer() {
    return (this._author = author);
  }
  //setter
  set writer(updateAuthor) {
    this._author = updateAuthor;
  }
}

const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "My life";
console.log(novel.writer);
