// version 1: isogram as a class

// class Isogram {

//   constructor(givenString) {
//     this.givenString = givenString;
//   }

//   isIsogram() {
//     var stringArray = this.givenString.toLowerCase().split(/\u0020|-|/).sort()
//     for (var i = 0; i < stringArray.length - 1; i++ ) {
//       if (stringArray[i] == stringArray[i+1]) {
//        return false
//       }
//       else {
//         var check = true
//       }
//     }
//     return check
//     }
// }
// module.exports = Isogram;

// version 2: isogram as an object


var Isogram = function(word){
  this.word = word,

  this.prepareWord = function (inputWord){
    var firstClean = inputWord.replace(/[@.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var secondClean = firstClean.replace(/\s+/g,"");
    return secondClean.toLowerCase().split("");
  },
  
  this.isIsogram = function(){
    var arrayOfLetters = this.prepareWord(this.word);
    var letterCount = {};
    var isogram = true;
    for(var i = 0; i < arrayOfLetters.length; i++){
      if(letterCount.hasOwnProperty(arrayOfLetters[i])){
        letterCount[arrayOfLetters[i]] += 1;
        isogram = false;
      } else {
        letterCount[arrayOfLetters[i]] = 1;
      }
    }
    return isogram;
  }
}

module.exports = Isogram;