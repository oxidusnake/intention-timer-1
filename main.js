var studyBox = document.querySelector('.study-box');
var meditateBox = document.querySelector('.meditate-box');
var exerciseBox = document.querySelector('.exercise-box');
var activityBoxes = document.querySelector('.activity-box-container');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var startBtn = document.querySelector('.start-button')
var taskAnswer = document.querySelector('.task-answer')
var mainLeft = document.querySelector('.main-left')
var timerStart = document.querySelector('.timer-start-button')
var page1 = document.querySelector('.activity-background-1')
var page2 = document.querySelector('.activity-background-2')
var timerHeader = document.querySelector('.chosen-task-header')
var timerCount = document.querySelector('.timer-countdown')
var logActivityBtn = document.querySelector('.log-activity-btn')
var cardHead = document.querySelector('.activity-card-header')
var cardTime = document.querySelector('.activity-card-time')
var cardTask = document.querySelector('.activity-card-task')
var pastActivities = document.querySelector('.past-activities')
var boxArray = [studyBox, meditateBox, exerciseBox];
var inputsArray = [minutesInput, secondsInput, taskAnswer];


activityBoxes.addEventListener('click', changeBoxes);
minutesInput.addEventListener('input', checkTime);
secondsInput.addEventListener('input', checkTime);
startBtn.addEventListener('click', checkBoxes);
timerStart.addEventListener('click', startTimer)
logActivityBtn.addEventListener('click', populateCard)


function changeBoxes() {
    var classList = event.target.classList;
    var currentDataId = event.target.dataset.id;
    var btnImg = event.target.firstElementChild;
    if(classList.contains('active')) {
      classList.remove('active');
      btnImg.src = `assets/${currentDataId}.svg`
    } else {
      classList.add('active')
      btnImg.src = `assets/${currentDataId}-active.svg`
    }
    removeActive(currentDataId);
  }

function removeActive(currentDataId) {
  for (var i = 0; i < boxArray.length; i++) {
    if(boxArray[i].dataset.id !== currentDataId) {
      boxArray[i].classList.remove('active');
      boxArray[i].firstElementChild.src = `assets/${boxArray[i].dataset.id}.svg`
      }
    }
  }

function checkTime() {
    if(minutesInput.value === '') {
      minutesInput.value = '';
    }
    if(secondsInput.value === '') {
      secondsInput.value = '';
    }
  }

function displayTimer() {
  page1.classList.add('hidden')
  page2.classList.remove('hidden')
  for (var i = 0; i < boxArray.length; i++){
    if(boxArray[i].classList.contains('active')){
      timerStart.classList.add(`${boxArray[i].dataset.id}`)
    }
  }
  timerHeader.innerText = taskAnswer.value;
  if(secondsInput.value < 10) {
    secondsInput.value = `0${secondsInput.value}`
  }
  timerCount.innerText = `${minutesInput.value}:${secondsInput.value}`
}

function startTimer() {
  event.target.setAttribute('disabled', true)
  var minutes = Number(minutesInput.value);
  var seconds = Number(secondsInput.value)
  var totalSeconds = (minutes * 60) + seconds;
  var remainingMinutes = Math.floor(totalSeconds / 60);
  var remainingSeconds = totalSeconds % 60;
  var countdown = setInterval(function() {
    if(totalSeconds % 60 < 10) {
      remainingSeconds = Number(remainingSeconds);
      remainingSeconds = `0${remainingSeconds}`
    }
    timerCount.innerText = `${remainingMinutes}:${remainingSeconds}`
    totalSeconds--
    remainingMinutes = Math.floor(totalSeconds / 60);
    remainingSeconds = totalSeconds % 60;
    if(remainingSeconds < 10) {
      remainingSeconds = `0${remainingSeconds}`
    }
    if(totalSeconds < 0) {
      clearInterval(countdown);
      displayComplete();
    }
  }, 1000)
}

function displayComplete() {
  timerStart.innerText = 'COMPLETE!'
  logActivityBtn.classList.remove('hidden')
}

function checkBoxes(){
  var isNotSelected;
  for (var i = 0; i < boxArray.length; i++) {
    if(!boxArray[i].classList.contains("active")) {
      isNotSelected = true;
    } else {
      isNotSelected = false;
      break
    }
  }
  checkInputs(isNotSelected)
}

function checkInputs(isNotSelected) {
  for (var i = 0; i < inputsArray.length; i++) {
    if(inputsArray[i].value !== '' && !isNotSelected) {
      displayTimer();
      break
    } else {
      break
    }
  }
  showError();
}

function showError() {{
  if(taskAnswer.value === "")
    taskAnswer.insertAdjacentHTML('afterend', `
    <div class="warning-container">
      <img class="warning-icon" src="assets/warning.svg">
      <p class="warning">A description is required.</p>
    </div>`)
  }
  if(minutesInput.value === ""){
    minutesInput.insertAdjacentHTML('afterend', `
    <div class="warning-container">
      <img class="warning-icon" src="assets/warning.svg">
      <p class="warning">Define your minutes.</p>
    </div>`)
  }
  if(secondsInput.value === ""){
    secondsInput.insertAdjacentHTML('afterend', `
    <div class="warning-container">
      <img class="warning-icon" src="assets/warning.svg">
      <p class="warning">Define your seconds.</p>
    </div>`)
  }
}

function populateCard() {
  event.target.setAttribute('disabled', true)
  var activeHeader;
  for(var i = 0; i < boxArray.length; i++){
    if(boxArray[i].classList.contains('active')){
      activeHeader = boxArray[i].dataset.id;
    }
  }
  displayCard(activeHeader)
}

function displayCard(activeHeader) {
pastActivities.insertAdjacentHTML('afterbegin', `
<section class="activity-card">
  <section class="type-time-container ${activeHeader}">
    <p class="activity-card-header">${activeHeader.toUpperCase()}</p>
    <p class="activity-card-time">${minutesInput.value} MIN ${secondsInput.value} SEC</p>
    <p class="activity-card-task">${taskAnswer.value}</p>
  </section>
</section>`)
}
