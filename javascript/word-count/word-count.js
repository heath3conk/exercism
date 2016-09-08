var Words = function() {
}

Words.prototype.count = function(givenString) {
  var stringArray = givenString.trim().split(/\n|\t|\u0020+/);
  var wordCount = {};
  stringArray.forEach(function(checkWord){
    var word = checkWord.toLowerCase();
    ( wordCount.hasOwnProperty(word) ? wordCount[word]++ : wordCount[word] = 1 )
  })
  return wordCount
}


module.exports = Words;