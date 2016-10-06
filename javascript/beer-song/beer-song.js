var BeerSong = function() {
  
}

BeerSong.prototype.verse = function(verseNum) {
  var verse = '';
  var verseString = verseNum.toString();
  var nextVerseString = (verseNum - 1).toString();
  switch(verseNum) {
    case 0:
      verse = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
      break
    case 1:
      verse = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
      break
    case 2:
      verse = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
      break
    default:
      verse = verseString + ' bottles of beer on the wall, ' +  verseString + ' bottles of beer.\nTake one down and pass it around, '+ nextVerseString + ' bottles of beer on the wall.\n';
  }
  return verse;
}

BeerSong.prototype.sing = function(fromVerse, throughVerse = 0) {
  var allVerses = this.verse(fromVerse)
  for (i = fromVerse - 1; i >= throughVerse; i--) {
    allVerses = allVerses + "\n" + this.verse(i)
  }

  return allVerses
}


module.exports = BeerSong;