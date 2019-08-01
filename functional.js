let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function realUrl(string) {
  return 'https://example.com/'+ string;
}



// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
// console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => realUrl(urlify(element)));
}
console.log(functionalUrls(states));





// Using map, write a function that takes in the states variable and returns an
// array of URLs of the form https://example.com/<urlified form>.

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Write two filter functions that return the Dakotas: one using String#includes
// (Section 2.5) to test for the presence of the string “Dakota” and one using a
// regex that tests for the length of the split array being 2.

function isItDakota(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(isItDakota(states));

console.log(states.includes('Dakota'));



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));



function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n;
  });}

console.log(functionalSum(numbers));




// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});}

console.log(functionalLengths(states));



function imperativeProduct(elements) {
  let total = 1;
  elements.forEach( function(n) {
                total *= n;
              });
  return total;
}

console.log(imperativeProduct(numbers));

function functionalProduct(elements) {
  return elements.reduce( (product, n) => {
                            return product *= n;
                          });
}

console.log(functionalProduct(numbers));





/////
