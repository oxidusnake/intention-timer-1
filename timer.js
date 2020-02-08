class Timer {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  start() {
    var interval = setInterval(function() {
    sec--;
	   if (sec == 0) {
		     clearInterval(interval);
	   }
	   var currentDate = new Date(sec * 1000)
	   var timeString = currentDate.toISOString().slice(11, 19);
	   return timeString;
   }, 1000);
}
}
