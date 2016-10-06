var Anagram = function(word) {
  this.word = word
}

Anagram.prototype.matches = function(arg) {
  // the arguments keyword captures everything passed as parameters
  // and turns it into an object
  if(typeof(arguments[0]) == "string") {
    possibleMatches = []
    for(var prop in arguments){
      possibleMatches.push(arguments[prop])
    }
  }
  else {
    possibleMatches = arg
  }
 
  var matches = []

  function splitSortAndJoin(aWord) {
    return aWord.toLowerCase().split('').sort().join('')
  }

  var originalWord = splitSortAndJoin(this.word)

  for(var i = 0; i < possibleMatches.length; i++) {
    if(possibleMatches[i].length == originalWord.length && possibleMatches[i].toLowerCase() != this.word.toLowerCase() && splitSortAndJoin(possibleMatches[i]) == originalWord) {

      matches.push(possibleMatches[i])

    }
  }

  return matches
}
  // function splitAndSort(string) {
  //   return string.toLowerCase().split('').sort()
  // }
  
  // var originalWord = splitAndSort(this.word)
  
  // var matches = []

  // for(var i = 0; i < possibleMatches.length; i++) {
  //   if(possibleMatches[i].length == originalWord.length && possibleMatches[i].toLowerCase() != this.word.toLowerCase()) {
  //     matches.push(possibleMatches[i])
  //     var possibleAnagram = splitAndSort(possibleMatches[i])
        
  //     if(!loopThroughLetters(possibleAnagram, originalWord, matches)) {
  //       matches.pop()
  //     }  

  //     function loopThroughLetters(possAna, origWd, matchAry) {
  //       for(var j = 0; j < origWd.length; j++) {
  //         if(possAna[j] != origWd[j]) {
  //           return false
  //         }
  //       }
  //       return true
  //     }
  //   }
  // }
    

module.exports = Anagram