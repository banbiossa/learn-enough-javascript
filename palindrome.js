function reverse(string){
  return Array.from(string).reverse().join("");
}

/*
function palindrome(string){
  let processedContent = string.toLowerCase();
  return processedContent == reverse(processedContent);
}
*/

function emailParts(email){
  return email.toLowerCase().split("@");
}

// Add `reverse` to all strings.
String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function(){
  return this.match(/^\s+$/) != null;
}

Array.prototype.last = function(){
  return this.slice(-1);
}


// Phrase object
function Phrase(content){
  this.content = content;

  this.processor = function(string){
    return string.toLowerCase();
  }

  // processed
  this.processedContent = function processedContent(){
    return this.processor(this.content);
  }

  // is palindrome
  this.palindrome = function palindrome(){
    // return this.processedContent() === reverse(this.processedContent());
    return this.processedContent() === this.processedContent().reverse();
  }

  // Louder
  this.louder = function louder(){
    return this.content.toUpperCase();
  }
}

function TranslatedPhrase(content, translation){
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing
  this.processedContent = function processedContent(){
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
