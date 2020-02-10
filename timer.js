class Timer {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  start(newTimer) {
    var seconds = this.seconds;
    var minutes = this.minutes
    var interval = setInterval(function() {
    	seconds--;
      if (seconds === 0 && minutes === '0') {
        clearInterval(interval);
        if(seconds === 0) {
          seconds = '0';
        }
      } else {
        newTimer.changeTime(minutes, seconds)
    }
      showTimer(minutes, seconds)
    }, 1000);
  }

  changeTime(minutes, seconds) {
    if(seconds === 0) {
    seconds = 59;
      if(minutes !== 0) {
        minutes--
      }
    }
    if(minutes === 0) {
      minutes = '0'
    }
  }
}
