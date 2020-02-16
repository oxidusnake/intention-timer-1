// This is the one we are commenting!!!
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
// comments will comment on the line Below!
// Executing the changeBoxes function
function changeBoxes() {
  // Declaring a variable called classList that will be dynamic classing depending on the click of the user.
  var classList = event.target.classList;
// Declaring a variable called currentDataId which will be a dynamic dataset id that can be used for JS fucntionality independent of the class list.
  var currentDataId = event.target.dataset.id;
  // Declaring a variable called btnImg which will dynamically target the first child of which ever element is clicked, in this instance we are targeting the inner image of our primary buttons on the home page.
  var btnImg = event.target.firstElementChild;
  // We are creatng a conditional statement that is reaching into our class list and seeing if our dynamic target contains the class of 'active'
  if(classList.contains('active')) {
    // IF the dynamic target does contain 'active' this will remove that attribute.
    classList.remove('active');
    // we are defining the btnImg source with an interpolated event target that will unhighlight the corresponding button
    btnImg.src = `assets/${currentDataId}.svg`
    // if the above IF conditional is not met...
  } else {
    // If one of the buttons is not highlighted or not 'active' we will add the class of active.
    classList.add('active')
    // using the btnImg source we are interpolating the dynamic target to insert the attributes of the function to which ever button the user has clicked on.
    btnImg.src = `assets/${currentDataId}-active.svg`
  }
  // invoking the removeActive function that will be defined below.
  removeActive(currentDataId);
}
// We are defining the remove active function with the currentDataId variable
function removeActive(currentDataId) {
  // using a for loop that creates an index that runs the length of boxArray and increments up to its maximum value
  for (var i = 0; i < boxArray.length; i++) {
    // creating a conditional statement saying that IF the index of the boxarray dataset id is not equal to the currentDataId THEN
    if(boxArray[i].dataset.id !== currentDataId) {
      // the boxArray index will reach into the class list and remove the class attribute of active.
      boxArray[i].classList.remove('active');
      //which ever element the boxarray is on we will reach for the first child element and interpolate the dataset id to equal the corresponding image source that does not highlight or vice versa
      boxArray[i].firstElementChild.src = `assets/${boxArray[i].dataset.id}.svg`
      }
    }
  }
// defining the checkTime function
function checkTime() {
  // setting a conditional that says IF the minutes input value strictly equals a string...
  if(minutesInput.value === '') {
// THEN the minutes input will clear out the input. since only numbers should be allowed here
    minutesInput.value = '';
  }
  // setting a conditional similar to the function above just for the seconds input
  if(secondsInput.value === '') {
    secondsInput.value = '';
  }
}
// Defining the displayTimer function
function displayTimer() {
  // taking the element of page1 and adding the class list of .hidden which is a display none attribute in the CSS file
  page1.classList.add('hidden');
  // setting a conditional saying IF the timerStart is disabled THEN
  if(timerStart.disabled) {
    // the timerstart disabled feature will be false reenabling the button for use in subsequent uses after the initial.
    timerStart.disabled = false;
  }
  // this takes the inner text of the activityHeader defines it to 'Current Activity'
  activityHeader.innerText = 'Current Activity'
  // creating a for loop that will create an index that goes through the length of the boxArray.
  for (var i = 0; i < boxArray.length; i++){
    // setting a conditional IF the boxArray index contains the class of active THEN
    if(boxArray[i].classList.contains('active')){
      // the timerStart will add the interpolated box array index to the dataset id for use in JS
      timerStart.classList.add(`${boxArray[i].dataset.id}`)
    }
  }
  //takes the time header elements inner text and has it equal to the value what the taskAnswer was on the previous page.
  timerHeader.innerText = taskAnswer.value;
  // setting a conditional IF the seconds input is less than 10 THEN
  if(secondsInput.value < 10) {
    // the seconds input value will add a zero in front of the less than 10 value for aesthetic purposes.
    secondsInput.value = `0${secondsInput.value}`
  }
  // This defines what is going to be displayed on the timers inner text by interpolating the value the user has put in for the seconds and minutes.
  timerCount.innerText = `${minutesInput.value}:${secondsInput.value}`
}
// defining the clock with the startTimer function
function startTimer() {
  // takes the timerstart button and disables it at the start of the clock function.
  timerStart.setAttribute('disabled', true)
  // sets the minutes input value from page1 and turns it from a string into an integer or 'Number'
  var minutes = Number(minutesInput.value);
  // creates a variable taking the seconds input value from page1 and turns it from a string into an integer
  var seconds = Number(secondsInput.value)
  // creates a variable totalSeconds that takes the minutes and multiplies them by 60 and then adds the seconds to have an internal combined integer of seconds
  var totalSeconds = (minutes * 60) + seconds;
  // creates a variable called remainingMinutes that will be our totalSeconds / 60 and then rounds whatever number that equals down to give us a whole number to display for the minutes on the clock.
  var remainingMinutes = Math.floor(totalSeconds / 60);
  // creates a variable called remainingSeconds that takes our total seconds and gets the modulus of 60 which is the reaminder after division giving us a total seconds to put on the clock.
  var remainingSeconds = totalSeconds % 60;
  // creates a variable called countdown which creates a set interval using an anonymous function.
  var countdown = setInterval(function(){
    // sets a conditional IF the total seconds modulus of 60 is less than 10 THEN
      if(totalSeconds % 60 < 10) {
        // the remaining seconds will be turned from a string into an integer
        remainingSeconds = Number(remainingSeconds);
        // using this seconds integer if the number is less than 10 using interpolation a 0 will be added to the front of the number for aesthetic purposes.
        remainingSeconds = `0${remainingSeconds}`
      }
      // takes the timer count inner text and interpolates the remaining minutes and the remaining seconds to create the appearance of a clock ticking down by the second
      timerCount.innerText = `${remainingMinutes}:${remainingSeconds}`
      // totalSeconds is decrementing
      totalSeconds--
      // defining the remainingMinutes to be the total seconds / 60 and then using the math.floor function to round the number down each time it is run to give only whole numbers on the clock.
      remainingMinutes = Math.floor(totalSeconds / 60);
      // defining remainingSeconds as the total seconds modulus of 60 or the remainder
      remainingSeconds = totalSeconds % 60;
      // creating a conditional saying IF the remaining seconds is less than 10 THEN
      if(remainingSeconds < 10) {
// using interpolation the remaining seconds will insert a zero infront of any digit less than 10 for aesthetic purposes.
        remainingSeconds = `0${remainingSeconds}`
      }
      // setting a conditional IF the totalSecondsis less than 0 THEN
      if(totalSeconds < 0) {
        // the countdown will clear the interval so that the numbers never descend into the negatives.
        clearInterval(countdown);
        // execute the displayComplete function.
        displayComplete();
      }
      // this is the interval time of 1000 miliseconds creating human seconds on the clock and executing the startTimer function once every second.
    }, 1000)
  }
// defining the displayComplete function
function displayComplete() {
  // taking the timerStart inner text and changing it to the string 'COMPLETE!'
  timerStart.innerText = 'COMPLETE!'
  // the logActivityBtn button is reaching into the classlist and removes the class of hidden revealing the button upon the completion of the timer
  logActivityBtn.classList.remove('hidden')
}
// defining the checkBoxes function
function checkBoxes(){
  // the timerStart innertext is being changed to 'START'
  timerStart.innerText = 'START'
  // declaring the variable isNotSelected to be defined below
  var isNotSelected;
  // starting a for loop that will create an index that goes through the length of the boxArray
  for (var i = 0; i < boxArray.length; i++) {
    // creates a conditional that says IF the index of the box array does not contain 'active' THEN
    if(!boxArray[i].classList.contains("active")) {
      // isNotSelected will equal true
      isNotSelected = true;
      // otherwise
    } else {
      // isNotSelected will equal false
      isNotSelected = false;
      // break out of the loop in this condition
      break
    }
  }
  // execute checkinputs function with the isNotSelected variable
  checkInputs(isNotSelected)
}
// defining the checkInputs function with the isNotSelected variable
function checkInputs(isNotSelected) {
  // declaring the variable isFilledOut
  var isFilledOut;
  // begins a for loop that creates an index that will go through the length of the inputsArray
  for (var i = 0; i < inputsArray.length; i++) {
    // creates a conditional saying IF the index of the arrays value is not equal to a string THEN
    if(inputsArray[i].value !== '') {
      // isFilledOut is true
      isFilledOut = true;
      // otherwise
    } else {
      // isFilledOut will equal false
      isFilledOut = false;
      // under this conditional break out of the loop
      break
    }
  }
  // setting a conditional IF there is not isNotSelected and isFilledOut is true THEN
  if(!isNotSelected && isFilledOut) {
    // execute displayTimer
    displayTimer();
  }
  // otherwise execute showError
  showError();
}
// defining the showError function
function showError() {
  // setting a conditional IF the taskanswer from page1 strictly equals an empty string THEN
  if(taskAnswer.value === "") {
    // the taskAnswer will insertAdjacentHTML after the end of the input line. inserting the warning container after the end combined with a warning image.
    taskAnswer.insertAdjacentHTML('afterend', `
    <div class="warning-container">
      <img class="warning-icon" src="assets/warning.svg">
      <p class="warning">A description is required.</p>
    </div>`)
  }
  // setting a conditional IF the minutesInput value is strictly equal to an empty string THEN
  if(minutesInput.value === ""){
    // the minuutes input will insert a div called 'warning container' that will be inserted after the input line
    minutesInput.insertAdjacentHTML('afterend', `
    <div class="warning-container">
      <img class="warning-icon" src="assets/warning.svg">
      <p class="warning">Define your minutes.</p>
    </div>`)
  }
  // setting a conditional IF the seconds input value is strictly equal to an empty string THEN
  if(secondsInput.value === ""){
    // the secondsInput will insert a div called 'warning container' that will appear after the end of the seconds input line
    secondsInput.insertAdjacentHTML('afterend', `
    <div class="warning-container">
      <img class="warning-icon" src="assets/warning.svg">
      <p class="warning">Define your seconds.</p>
    </div>`)
  }
}
// defining the populateCard function
function populateCard() {
  // once the function executes then the logActivityBtn button will add the class of hidden removing it from the page.
  logActivityBtn.classList.add('hidden')
  // the activityMessage message will add the class of hidden to remove it from the page
  activityMessage.classList.add('hidden')
  // page2 will add the class of hidden to remove the page.
  page2.classList.add('hidden')
  // page3 will remove the class of hidden revealing the 3rd page to the user
  page3.classList.remove('hidden')
  // change the activity header inner text to say 'Completed Activity'
  activityHeader.innerText = 'Completed Activity'
  // declaring the variable activeHeader
  var activeHeader;
  // begin a for loop that will create an index that runs through the length of the boxArray
  for(var i = 0; i < boxArray.length; i++){
    // setting a conditional IF the boxArray index class list contains the word 'active' THEN
    if(boxArray[i].classList.contains('active')){
      // the active header will equal whatever the box array index dataset id is at that given moment.
      activeHeader = boxArray[i].dataset.id;
    }
  }
  // execute the displayCard function with the activeHeader variable
  displayCard(activeHeader)
}
// defining  the displayCard function with the activeHeader variable
function displayCard(activeHeader) {
  // using the insertAdjacentHTML mechanic the past activities card is filled out after the beginning using interpolation to fill in the card with the input values that were given on page1 by the user.
  pastActivities.insertAdjacentHTML('afterbegin', `
  <section class="activity-card">
    <section class="type-time-container ${activeHeader}">
      <p class="activity-card-header">${activeHeader.toUpperCase()}</p>
      <p class="activity-card-time">${minutesInput.value} MIN ${secondsInput.value} SEC</p>
      <p class="activity-card-task">${taskAnswer.value}</p>
    </section>
  </section>`)
}
//defining the createNewActivityPage function
function createNewActivityPage() {
  // page3 is going into the class list and adding the class of hidden of hidden removing the page from the screen.
  page3.classList.add('hidden');
  // page1 is reaching into the class list and removing the class of hidden showing page1 to the user
  page1.classList.remove('hidden');
  // The activeHeader inner text will change to display 'New Activity'
  activityHeader.innerText = 'New Activity'
  // starts a for loop that creates an index that will run the length of the boxArray
  for (var i = 0; i < boxArray.length; i++) {
    // the box array index will remove the class of active to any buttons holding that attribute.
    boxArray[i].classList.remove('active')
    // the box array index will look for the first child element in this case the picture of the button and using interpolation will change the inner image to be unhighlighted upon page open.
    boxArray[i].firstElementChild.src = `assets/${boxArray[i].dataset.id}.svg`
  }
  // these 3 answers on page1 will be cleared from the previous entry so that the page can now be populated with a new activity, time and task answer.
  taskAnswer.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
}
