var DnaTranscriber = function() {};


DnaTranscriber.prototype.toRna = function(original) {
  var Dna = ['G', 'C', 'T', 'A'];
  var Rna = ['C', 'G', 'A', 'U'];

  var transcribedStrand = '';

  for (index = 0; index < original.length; index ++) {
    transcribedStrand += Rna[Dna.indexOf(original[index])];
  }
  return transcribedStrand;
}

module.exports = DnaTranscriber;