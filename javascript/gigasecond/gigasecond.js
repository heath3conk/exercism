var Gigasecond = function (date) {
  this.startDate = date;
  this.giga = date + 1000000000;
};

Gigasecond.prototype.date = function(){
  var milliseconds = Date.parse(this.startDate); // returns the number of milliseconds between midnight on 1/1/1970 and startDate
  var addGiga = milliseconds + (1000 * 1000000000); // add a gigasecond, converted into milliseconds  
  var newDate = new Date(addGiga) // create a new Date obj with the new time
  return newDate;
}

module.exports = Gigasecond;