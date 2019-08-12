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
    const lettersRegex = /[a-z]/ig;
    return (this.content.match(lettersRegex) || []).join("");
  }

  // is palindrome
  this.palindrome = function palindrome(){
    // return this.processedContent() === reverse(this.processedContent());
    if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }

}
