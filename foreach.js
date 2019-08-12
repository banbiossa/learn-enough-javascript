let a = ["ant", "bat", "cat", 42];
a.forEach(function(element){
  console.log(element);
});

let solioquy = "To be, or not to be, that is the question:";

Array.from(solioquy).forEach((character) => {
  console.log(character);
})
