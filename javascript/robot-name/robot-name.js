var usedNames = []

var Robot = function () {

  makeName = function() {
    var possName = String.fromCharCode(Math.random()*26+65) + String.fromCharCode(Math.random()*26+65) + String.fromCharCode(Math.random()*10+48) + String.fromCharCode(Math.random()*10+48) + + String.fromCharCode(Math.random()*10+48)

    while(usedNames.includes(possName)) {
      possName = String.fromCharCode(Math.random()*26+65) + String.fromCharCode(Math.random()*26+65) + String.fromCharCode(Math.random()*10+48) + String.fromCharCode(Math.random()*10+48) + + String.fromCharCode(Math.random()*10+48)
    }

    usedNames.push(possName)
    return possName
  }

  this.name = makeName()
}

Robot.prototype.reset = function() {
  this.name = makeName()
  return this
}



module.exports = Robot;