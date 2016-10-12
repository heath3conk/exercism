var ETL = function() {

}

ETL.prototype.transform = function(old) {
 
  var xformed = {}
 
  // iterate through the properties of the 'old' object
  for (score in old) {
    // iterate through the letters in the array
    for (var i = 0; i < old[score].length; i++) {
      xformed[old[score][i].toLowerCase()] = parseInt(score)
    }
  }
  
  return xformed
}

module.exports = ETL;