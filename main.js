// query selectors are grabbing elements from html and assigning them to JS variables
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
var page3 = document.querySelector('.activity-background-3')
var timerHeader = document.querySelector('.chosen-task-header')
var activityHeader = document.querySelector('.activity-header')
var timerCount = document.querySelector('.timer-countdown')
var logActivityBtn = document.querySelector('.log-activity-btn')
var newActivityBtn = document.querySelector('.create-new-activity')
var cardHead = document.querySelector('.activity-card-header')
var cardTime = document.querySelector('.activity-card-time')
var cardTask = document.querySelector('.activity-card-task')
var pastActivities = document.querySelector('.past-activities')
var activityMessage = document.querySelector('.activity-message-container')
var boxArray = [studyBox, meditateBox, exerciseBox];
var inputsArray = [taskAnswer, minutesInput, secondsInput];

//event listeners are listening for events on the specified variables and then performing a task on event.
activityBoxes.addEventListener('click', changeBoxes);
minutesInput.addEventListener('input', checkTime);
secondsInput.addEventListener('input', checkTime);
startBtn.addEventListener('click', checkBoxes);
timerStart.addEventListener('click', startTimer)
logActivityBtn.addEventListener('click', populateCard)
newActivityBtn.addEventListener('click', createNewActivityPage)


function changeBoxes() {
  //declaring a varaible set to whatever the clicked items class list is
  var classList = event.target.classList;
  //declaring a varaible set to whatever the clicked items data id is
  var currentDataId = event.target.dataset.id;
  //declaring a varaible set to whatever the clicked items first child element is
  var btnImg = event.target.firstElementChild;
  //if statement stating if the clicked items classList contains the active class -
  //remove that class and reset image to zero state
  if(classList.contains('active')) {
    classList.remove('active');
    btnImg.src = `assets/${currentDataId}.svg`
  //if the item does not contain a class of active -
  //add the active class and reassign the source to the active image
  } else {
    classList.add('active')
    btnImg.src = `assets/${currentDataId}-active.svg`
  }
  //invoke remove active
  removeActive(currentDataId);
}

function removeActive(currentDataId) {
  //this function is looping through the box array and removing the active class -
  //and resetting image src value if the index dataset id does not match the event -
  //target id
  for (var i = 0; i < boxArray.length; i++) {
    if(boxArray[i].dataset.id !== currentDataId) {
      boxArray[i].classList.remove('active');
      boxArray[i].firstElementChild.src = `assets/${boxArray[i].dataset.id}.svg`
      }
    }
  }

function checkTime() {
  //this function is checking if the inputted time is a string
  //if it is, we are setting the inputs value to empty
  //This is so letters are not accepted in the inputs
  if(minutesInput.value === '') {
    minutesInput.value = '';
  }
  if(secondsInput.value === '') {
    secondsInput.value = '';
  }
}

function displayTimer() {
  //adding a class of hidden to the page 1's classlist
  page1.classList.add('hidden');
  //removing a class of hidden to the page 2's classlist
  page2.classList.remove('hidden'); // this is hiding the first page and displaying the seconds page
  //the timer start button is disabled on click so the second time through the -
  //app we have to disable the startTimer btn.
  if(timerStart.disabled) {
    timerStart.disabled = false;
  }
  //changing the header of the page current activityBoxes
  activityHeader.innerText = 'Current Activity'
  //looping through box array and giving a class to the timer start btn that is
  //the same name as the dataset id.
  //this allows the border of the timer start to be dynamic
  for (var i = 0; i < boxArray.length; i++){
    if(boxArray[i].classList.contains('active')){
      timerStart.classList.add(`${boxArray[i].dataset.id}`)
    }
  }
  //this allows the user to see the task they inserted on the timer
  timerHeader.innerText = taskAnswer.value;
  //if the time they inserted is less than 10, we are interpolating a 0 for
  //readability
  if(secondsInput.value < 10) {
    secondsInput.value = `0${secondsInput.value}`
  }
  //displaying the timer in case they have seconds less that 10
  timerCount.innerText = `${minutesInput.value}:${secondsInput.value}`
}

function startTimer() {
  //disabling the button after click
  timerStart.setAttribute('disabled', true)
  //turning inputted minutes to a number and declaring it as a variable
  var minutes = Number(minutesInput.value);
  //turning inputted seconds to a number and declaring it as a variable
  var seconds = Number(secondsInput.value)
  //getting total seconds by multiplying minutes by 60 and adding seconds
  var totalSeconds = (minutes * 60) + seconds;
  //getting remaining minutes by dividing seconds by 60 and throwing away the remainder
  var remainingMinutes = Math.floor(totalSeconds / 60);
  //getting remaining seconds by grabbing the remainder of total seconds / 60
  var remainingSeconds = totalSeconds % 60;
  //creating an interval for the timer to run on every second
  //giving the interval conditions with the timer logic function
  var countdown = setInterval(function(){
      //interpolating a 0 on the remaining seconds if they are less than 10
      if(totalSeconds % 60 < 10) {
        remainingSeconds = Number(remainingSeconds);
        remainingSeconds = `0${remainingSeconds}`
      }
      //displaying the last decreased second
      timerCount.innerText = `${remainingMinutes}:${remainingSeconds}`
      //decreasing the total seconds by 1
      totalSeconds--
      //reestablishing the remaining minutes and seconds based on decreased total
      remainingMinutes = Math.floor(totalSeconds / 60);
      remainingSeconds = totalSeconds % 60;
      //if the decreased second is now less than 10, we are interpolating a 0
      if(remainingSeconds < 10) {
        remainingSeconds = `0${remainingSeconds}`
      }
      //if the decreased total is now -1 we are not doing another interval
      if(totalSeconds < 0) {
        clearInterval(countdown);
        //running diplay complete function
        displayComplete();
      }
    }, 1000)
  }

function displayComplete() {
  //changing the inner text of the start button to 'complete'
  timerStart.innerText = 'COMPLETE!'
  //displaying the log activity button
  logActivityBtn.classList.remove('hidden')
}

function checkBoxes(){
  //changing the inner text of the start button from 'complete' to 'start'
  timerStart.innerText = 'START'
  //declaring a variable as undefined
  var isNotSelected;
  //if the box array index has active then the check boxes is valid
  for (var i = 0; i < boxArray.length; i++) {
    if(!boxArray[i].classList.contains("active")) {
      isNotSelected = true;
    } else {
      isNotSelected = false;
      break
    }
  }
  //invoking check inputs with validity of boxes
  checkInputs(isNotSelected)
}

function checkInputs(isNotSelected) {
  //declaring a variable of undefined
  var isFilledOut;
  //if the input index contains anything input is valid
  for (var i = 0; i < inputsArray.length; i++) {
    if(inputsArray[i].value !== '') {
      isFilledOut = true;
    } else {
      isFilledOut = false;
      break
    }
  }
  //if all inputs are valid and 1 box is selected, allow access to page 2
  if(!isNotSelected && isFilledOut) {
    displayTimer();
  }
  //if the requirements are not met, errors will appear
  showError();
}

function showError() {
  //if the input is empty display task answer error
  if(taskAnswer.value === "") {
    taskAnswer.insertAdjacentHTML('afterend', `
    <div class="warning-container">
      <img class="warning-icon" src="assets/warning.svg">
      <p class="warning">A description is required.</p>
    </div>`)
  }
  //if the input is empty display minutes error
  if(minutesInput.value === ""){
    minutesInput.insertAdjacentHTML('afterend', `
    <div class="warning-container">
      <img class="warning-icon" src="assets/warning.svg">
      <p class="warning">Define your minutes.</p>
    </div>`)
  }
  //if the input is empty display seconds error
  if(secondsInput.value === ""){
    secondsInput.insertAdjacentHTML('afterend', `
    <div class="warning-container">
      <img class="warning-icon" src="assets/warning.svg">
      <p class="warning">Define your seconds.</p>
    </div>`)
  }
}

function populateCard() {
  //hide the log activity button
  logActivityBtn.classList.add('hidden')
  //display the 'complete' message
  activityMessage.classList.add('hidden')
  //hide the timer page
  page2.classList.add('hidden')
  //display the page that gives an option to create new activity
  page3.classList.remove('hidden')
  //header of the card says
  activityHeader.innerText = 'Completed Activity'
  //declaring a variable with an undefined value
  var activeHeader;
  //assigning the activeHeader equal to the dataset id of the active box
  for(var i = 0; i < boxArray.length; i++){
    if(boxArray[i].classList.contains('active')){
      activeHeader = boxArray[i].dataset.id;
    }
  }
  //invoke function with activeHeader argument
  displayCard(activeHeader)
}

function displayCard(activeHeader) {
  //displayed card with interpolated values in correct positions
  //made the activeHeader upper case with the upperCase method
  pastActivities.insertAdjacentHTML('afterbegin', `
  <section class="activity-card">
    <section class="type-time-container ${activeHeader}">
      <p class="activity-card-header">${activeHeader.toUpperCase()}</p>
      <p class="activity-card-time">${minutesInput.value} MIN ${secondsInput.value} SEC</p>
      <p class="activity-card-task">${taskAnswer.value}</p>
    </section>
  </section>`)
}

function createNewActivityPage() {
  // hide page 3
  //unhide page1
  page3.classList.add('hidden');
  page1.classList.remove('hidden');
  //activityHeader inner text is changed to page 1 requirement
  activityHeader.innerText = 'New Activity'
  //removing all previous inserted slections and inputs from first task
  for (var i = 0; i < boxArray.length; i++) {
    boxArray[i].classList.remove('active')
    boxArray[i].firstElementChild.src = `assets/${boxArray[i].dataset.id}.svg`
  }
  taskAnswer.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
}
