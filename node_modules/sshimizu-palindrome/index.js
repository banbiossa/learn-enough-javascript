module.exports = Phrase;

String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
}

// Phrase object
function Phrase(content){
  this.content = content;

  // processed
  this.processedContent = function processedContent(){
    return this.letters().toLowerCase();
    // return this.content;
  }

  // letters
  this.letters = function letters(){
    return (this.content.match(/[a-z]/ig) || []).join("");
  }

  // is palindrome
  this.palindrome = function palindrome(){
    // return this.processedContent() === reverse(this.processedContent());
    return this.processedContent() === this.processedContent().reverse();
  }

}
