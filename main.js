var studyBox = document.querySelector('.study-box');
var meditateBox = document.querySelector('.meditate-box');
var exerciseBox = document.querySelector('.exercise-box');
var activityBoxes = document.querySelector('.activity-box-container');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var startBtn = document.querySelector('.start-button')
var taskAnswer = document.querySelector('.task-answer')
var mainLeft = document.querySelector('.main-left')
var boxArray = [studyBox, meditateBox, exerciseBox];
var inputsArray = [minutesInput, secondsInput, taskAnswer];


activityBoxes.addEventListener('click', changeBoxes);
minutesInput.addEventListener('input', checkTime);
secondsInput.addEventListener('input', checkTime);
startBtn.addEventListener('click', checkBoxes);

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

    function showTimer() {
      mainLeft.innerHTML = `
      <h1 class="activity-header">Current Activity</h1>
      <section class="activity-background">
        <section class="timer-container">
          <h1 class="chosen-task-header">${taskAnswer.value}</h1>
          <span class="timer-countdown">${minutesInput.value}:${secondsInput.value}</span>
          <button class="circle-start-button">START</button>
        </section>
      </section>`
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
    if(inputsArray[i].value !== '' && isNotSelected === false) {
      showTimer();
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
