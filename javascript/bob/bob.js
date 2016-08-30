var Bob = function() {};

Bob.prototype.hey = function(input) {
  if ( input.toUpperCase() == input ) {
    if ( input does not include letters ) {
      return 'Whatever.';
    }
    return 'Whoa, chill out!';
  }
  else if ( input[input.length-1] == '?' ) {
    return 'Sure.';
  }
  else {
    return 'Whatever.';
  }
};

module.exports = Bob;
