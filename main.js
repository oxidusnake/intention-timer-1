var studyBox = document.querySelector('.study-box');
var meditateBox = document.querySelector('.meditate-box');
var exerciseBox = document.querySelector('.exercise-box');
var studyTitle = document.querySelector('.study');
var meditateTitle = document.querySelector('.meditate');
var exerciseTitle = document.querySelector('.exercise');
var studyIcon = document.querySelector('.study-icon');
var meditateIcon = document.querySelector('.meditate-icon');
var exerciseIcon = document.querySelector('.exercise-icon');
<<<<<<< HEAD
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var taskAnswer = document.querySelector('.task-answer');
var startButton = document.querySelector('.start-button');
var activityBoxes = document.querySelector('.activity-box-container')
var boxArray = [studyBox, meditateBox, exerciseBox]
var inputArray = [taskAnswer, minutesInput, secondsInput]


studyBox.addEventListener('click', studyBoxChange);
meditateBox.addEventListener('click', meditateBoxChange);
exerciseBox.addEventListener('click', exerciseBoxChange);
minutesInput.addEventListener('input', checkTime);
secondsInput.addEventListener('input', checkTime);
startButton.addEventListener('click', checkInputs);

=======
var activityBoxes = document.querySelector('.activity-box-container');
var boxArray = [studyBox, meditateBox, exerciseBox];

activityBoxes.addEventListener('click', changeBoxes);
>>>>>>> master

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

  function checkInput() {
    if(minutesInput.value === '') {
      minutesInput.value = '';
    }
    if(secondsInput.value === '') {
      secondsInput.value = '';
    }
  }

<<<<<<< HEAD
  function checkTime() {
    if(minutesInput.value === '') {
      minutesInput.value = '';
    }
    if(secondsInput.value === '') {
      secondsInput.value = '';
    }
  }

  function showError() {
    if (boxArray != "active") {
      return ('A description is required.')
}
  }

  function showTimer() {

  }

  function checkInputs(){
    for (var i = 0; i < boxArray.length; i++) {
      if(boxArray[i] === "active" && inputArray.value !== '') {
      showpage()
    } else {
      showerror()
    }
  }
}


  // here is an idea for targeting child elements
  // childClassList1= document.querySelector('.childClass:nth-child(2)');



    // else return('A description is requried.')
  // }
=======
>>>>>>> master
