var Hamming = function () {};

Hamming.prototype.compute = function ( first, second ) {
  if ( first.length != second.length ) {
    throw "DNA strands must be of equal length."
  }
  else {
    var differences = 0;
    for ( index = 0; index < first.length; index ++ ) {
      if ( first[index] != second[index] ) {
        differences += 1;
      }
    }
  }
  return differences;
}

module.exports = Hamming;
