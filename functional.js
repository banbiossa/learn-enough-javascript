let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string){
  return string.toLowerCase().split(/\s+/).join('-');
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

function functionUrls(elements){
  return elements.map(element => urlify(element));
}
console.log(functionUrls(states));

function httpsUrl(string){
  return `https://example.com/${string}`
}

function asUrl(elements){
  return elements.map(element => httpsUrl(urlify(element)));
}

console.log(asUrl(states));

// singles: Imperative
function imperativeSingles(elements){
  let singles = [];
  elements.forEach(function(element){
    if (element.split(/\s+/).length === 1){
      singles.push(element)
    }
  });
  return singles;
}

function functionalSingles(elements){
  return elements.filter(n => n.split(/\s+/).length === 1);
}

function includesDacota(elements){
  return elements.filter(n => n.includes("Dakota"));
}

function functionalDoubles(elements){
  return elements.filter(n => n.split(/\s+/).length === 2);
}

console.log(imperativeSingles(states));
console.log(functionalSingles(states));
console.log(includesDacota(states));
console.log(functionalDoubles(states));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers = ([...Array(10).keys()].map(x => x+1));

// sum: imperative
function imperativeSum(elements){
  let total = 0;
  elements.forEach(function(n){
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));


/*

console.log(numbers.reduce((total, n) => {
  total += n;
  return total;
}, 0));

numbers.reduce((total, n) => { return total += n}, 0);
numbers.reduce((total, n) => { return total += n });
*/

function functionalSum(elements){
  return numbers.reduce((total, n) => { return total += n});
}
console.log(functionalSum(numbers));

// lengths, imperative
function imperativeLengths(elements){
  let lengths = {};
  elements.forEach(function(element){
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: functional
function functionalLengths(elements){
  return elements.reduce((lengths, element) => { lengths[element] = element.length;return lengths; }, {});
}
console.log(functionalLengths(states));

// multipy: functional
function functionalProduct(elements){
  return elements.reduce((product, element) => {
    return product *= element;
  }, 1);
}

console.log(functionalProduct(numbers));
console.log("return elements.reduce((lengths, element) => { lengths[element] = element.length;return lengths; }, {});".length)
