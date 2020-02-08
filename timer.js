class Timer {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  start(newTimer) {
    var seconds = this.seconds;
    var interval = setInterval(function() {
    	seconds--;
    	if (seconds === 0) {
    		clearInterval(interval);
    	}
    	var d = new Date(seconds * 1000)
    	var timeStr = d.toISOString().slice(11, 19);
    	console.log(timeStr);
      showTimer(seconds)
    }, 1000);
}
}
