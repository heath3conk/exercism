var School = function(){
  this.classes = {}
}

School.prototype.roster = function() {
  return this.classes
}

School.prototype.add = function(name, grade) {
  if(this.classes.hasOwnProperty(grade)) {
    this.classes[grade].push(name)
    this.classes[grade].sort()
  }
  else {
    this.classes[grade] = [name]
  }
  return this.roster()
}

School.prototype.grade = function(grade) {
  if(this.classes.hasOwnProperty(grade)) {
    return this.classes[grade]
  }
  else {
    return []
  }
}

module.exports = School;