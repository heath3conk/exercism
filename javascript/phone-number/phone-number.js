var PhoneNumber = function(phoneNumber) {
  this.phoneNumber = phoneNumber;
}


PhoneNumber.prototype.number = function() {
  var numberParts = this.phoneNumber.split("")
  
  function isNumber(character) {
    return character.match(/\d/)
  }
  var cleanNumber = numberParts.filter(isNumber).join('')

  if(cleanNumber.length == 11 && cleanNumber[0] == "1") {
    cleanNumber = cleanNumber.substr(1)
  }
  else if(cleanNumber.length != 10) {
    cleanNumber = '0000000000'
  }

  return cleanNumber
}

PhoneNumber.prototype.areaCode = function() {
  return this.number().substr(0, 3)
}

PhoneNumber.prototype.toString = function() {
  return this.number().replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
}



module.exports = PhoneNumber;