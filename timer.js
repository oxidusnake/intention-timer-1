class Timer {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  start(newTimer) {
    var seconds = this.seconds;
    var minutes = this.minutes
    debugger
    var interval = setInterval(function() {
    	seconds--;
      if(seconds < 10) {
        seconds = `0${seconds}`
      }
      if (seconds === '00' && minutes === '0') {
        clearInterval(interval);
      } else {
        if(minutes > 0) {
          minutes--
        }
        if(seconds === '00') {
          seconds = 59;
        }
        if(minutes === 0) {
          minutes = '0'
        }
      }
      showTimer(minutes, seconds)
    }, 1000);
  }

  changeTime(minutes, seconds) {

  }
}
