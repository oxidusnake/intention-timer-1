var studyBox = document.querySelector('.study-box');
var meditateBox = document.querySelector('.meditate-box');
var exerciseBox = document.querySelector('.exercise-box');
var studyTitle = document.querySelector('.study');
var meditateTitle = document.querySelector('.meditate');
var exerciseTitle = document.querySelector('.exercise');
var studyIcon = document.querySelector('.study-icon');
var meditateIcon = document.querySelector('.meditate-icon');
var exerciseIcon = document.querySelector('.exercise-icon');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var taskAnswer = document.querySelector('.task-answer');
var startButton = document.querySelector('.start-button');
var activityBoxes = document.querySelector('.activity-box-container')
var boxArray = ['studyBox, meditateBox, exerciseBox']
var inputArray = ['taskAnswer, minutesInput, secondsInput']


studyBox.addEventListener('click', studyBoxChange);
meditateBox.addEventListener('click', meditateBoxChange);
exerciseBox.addEventListener('click', exerciseBoxChange);
minutesInput.addEventListener('input', checkTime);
secondsInput.addEventListener('input', checkTime);
startButton.addEventListener('click', checkInputs);


function studyBoxChange() {
  //if the box that is clicked contains a class of said box,
  //we are going to update that box by changing the text, icon and border color
    studyBox.classList.add('active-study-box');
    studyTitle.style.color = '#B3FD78';
    studyIcon.src = "assets/study-active.svg";
    meditateIcon.src = "assets/meditate.svg";
    exerciseIcon.src = "assets/exercise.svg";
    meditateBox.classList.remove('active-meditate-box');
    meditateTitle.style.color = '#FFF';
    exerciseBox.classList.remove('active-exercise-box');
    exerciseTitle.style.color = '#FFF';
  }

function meditateBoxChange() {
  meditateBox.classList.add('active-meditate-box');
  meditateTitle.style.color = '#C278FD';
  meditateIcon.src = "assets/meditate-active.svg";
  studyIcon.src = "assets/study.svg";
  exerciseIcon.src = "assets/exercise.svg";
  studyBox.classList.remove('active-study-box');
  studyTitle.style.color = '#FFF';
  exerciseBox.classList.remove('active-exercise-box');
  exerciseTitle.style.color = '#FFF';
  }


function exerciseBoxChange() {
    exerciseBox.classList.add('active-exercise-box');
    exerciseTitle.style.color = '#FD8078';
    exerciseIcon.src = "assets/exercise-active.svg";
    studyIcon.src = "assets/study.svg";
    meditateIcon.src = "assets/meditate.svg";
    meditateBox.classList.remove('active-meditate-box');
    meditateTitle.style.color = '#FFF';
    studyBox.classList.remove('active-study-box');
    studyTitle.style.color = '#FFF';
  }

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

  function showCard() {

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
