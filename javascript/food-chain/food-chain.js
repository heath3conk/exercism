var FoodChain = function() {
  this.creaturesToSwallow = ['cow', 'goat', 'dog', 'cat', 'bird', 'spider']
  this.creaturesToCatch = ['goat.\n', 'dog.\n', 'cat.\n', 'bird.\n', 'spider that wriggled and jiggled and tickled inside her.\n']
}

FoodChain.prototype.verse = function(verseNum) {
  var currentVerse = 'I know an old lady who swallowed a fly.\n'

  // each verse except 1 and 8 includes the animals from earlier verses

  var supplyVerse = function(verseNum) {
    var nextVerse = ''
    switch(verseNum) {
      case 1:
        nextVerse = 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
      case 2:
        nextVerse = 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
        'She swallowed the spider to catch the ' + supplyVerse(verseNum - 1)
      case 3:
        nextVerse = 'I know an old lady who swallowed a bird.\n' +
        'How absurd to swallow a bird!\n'
      case 4:
        nextVerse = 'I know an old lady who swallowed a cat.\n' +
        'Imagine that, to swallow a cat!\n'
      case 5:
        nextVerse = 'I know an old lady who swallowed a dog.\n' +
        'What a hog, to swallow a dog!\n'
      case 6:
        nextVerse = 'I know an old lady who swallowed a goat.\n' +
        'Just opened her throat and swallowed a goat!\n'
      case 7:
        nextVerse = 'I know an old lady who swallowed a cow.\n' +
        'I don\'t know how she swallowed a cow!\n'
      case 8:
        nextVerse = 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n'
      }
      return nextVerse
    }

}


module.exports = FoodChain;
