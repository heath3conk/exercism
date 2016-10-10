var FoodChain = function() {
  this.creaturesToSwallow = ['spider', 'bird', 'cat', 'dog', 'goat', 'cow']
  this.creaturesToCatch = ['fly.\n', 'spider that wriggled and jiggled and tickled inside her.\n', 'bird.\n', 'cat.\n', 'dog.\n', 'goat.\n']
  this.fillLines = function(nextLineNum) {
    if(nextLineNum == 0 ) {
      return 'She swallowed the ' + this.creaturesToSwallow[nextLineNum] + ' to catch the ' + this.creaturesToCatch[nextLineNum] + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
    }
    else {
      return 'She swallowed the ' + this.creaturesToSwallow[nextLineNum] + ' to catch the ' + this.creaturesToCatch[nextLineNum] + this.fillLines(nextLineNum-1)
    }
  }
}

FoodChain.prototype.verse = function(verseNum) {
  switch(verseNum) {
    case 8:
      return 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n'
    case 1:
      return 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
    case 2: 
     return 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' + this.fillLines(verseNum-2)
    case 3: 
      return 'I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\n' + this.fillLines(verseNum-2)
    case 4: 
      return 'I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\n' + this.fillLines(verseNum-2)
    case 5:
      return 'I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\n' + this.fillLines(verseNum-2)
    case 6:
      return 'I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\n' + this.fillLines(verseNum-2)
    case 7:
      return 'I know an old lady who swallowed a cow.\nI don\'t know how she swallowed a cow!\n' + this.fillLines(verseNum-2)
  }
}

FoodChain.prototype.verses = function(startVerse, endVerse) {
  var song = this.verse(startVerse) + '\n'

  while(endVerse > startVerse) {
    song += this.verse(startVerse+1) + '\n'
    startVerse++
  }
  return song
}


module.exports = FoodChain;
