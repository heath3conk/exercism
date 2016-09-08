var Isogram = function(givenString) {
  this.givenString = givenString;
}

Isogram.prototype.isIsogram = function(){
  var stringArray = this.givenString.toLowerCase().split(/\u0020|-|/).sort()
  for (var i = 0; i < stringArray.length - 1; i++ ) {
    if (stringArray[i] == stringArray[i+1]) {
     return false
    }
    else {
      var check = true
    }
  }
  return check
}

module.exports = Isogram;