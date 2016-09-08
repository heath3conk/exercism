var Bob = function() {};

Bob.prototype.hey = function(input) {

  if (/[A-z]/.test(input) == true && input.toUpperCase() == input ) {
    return 'Whoa, chill out!';
  }
  else if ( input[input.length-1] == '?') {
    return 'Sure.';
  }
  else if ('' == input || (/[A-z]/.test(input) == false && /\d/.test(input) == false)) {
    return 'Fine. Be that way!';
  }
  else {
    return 'Whatever.';
  }
};

module.exports = Bob;
