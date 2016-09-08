var Pangram = function(sentence){
  this.sentence = sentence.toLowerCase();
  this.alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
}

Pangram.prototype.isPangram = function () {
  /* 
  array.some returns true as soon as its callback function finds a truthy value so I want it to return true if a letter in alpha is not included in the given sentence
  */
  return !this.alpha.some(letter => !this.sentence.includes(letter))
}


module.exports = Pangram;