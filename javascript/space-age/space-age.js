var SpaceAge = function(ageInSeconds) {
  this.seconds = ageInSeconds
  this.earthAge = ageInSeconds/31557600
  this.calculateAge = function(factor) {
  // really Javascript? You don't have a 'round to x decimal places' function???
    return parseFloat((this.earthAge/factor).toFixed(2))
  }
}


SpaceAge.prototype.onEarth = function () {
  var factor = 1
  return this.calculateAge(factor)
}

SpaceAge.prototype.onMercury = function () {
  var mercuryFactor = 0.2408467
  return this.calculateAge(mercuryFactor)
}

SpaceAge.prototype.onVenus = function () {
  var venusFactor = 0.61519726
  return this.calculateAge(venusFactor)
}

SpaceAge.prototype.onMars = function () {
  var marsFactor = 1.8808158
  return this.calculateAge(marsFactor)
}

SpaceAge.prototype.onJupiter = function () {
  var jupiterFactor = 11.862615
  return this.calculateAge(jupiterFactor)
}

SpaceAge.prototype.onSaturn = function () {
  var saturnFactor = 29.447498
  return this.calculateAge(saturnFactor)
}

SpaceAge.prototype.onUranus = function () {
  var uranusFactor = 84.016846
  return this.calculateAge(uranusFactor)
}

SpaceAge.prototype.onNeptune = function () {
  var neptuneFactor = 164.79132
  return this.calculateAge(neptuneFactor)
}

module.exports = SpaceAge;