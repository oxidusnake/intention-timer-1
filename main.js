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

studyBox.addEventListener('click', studyBoxChange);
meditateBox.addEventListener('click', meditateBoxChange);
exerciseBox.addEventListener('click', exerciseBoxChange);
minutesInput.addEventListener('input', checkInput);
secondsInput.addEventListener('input', checkInput);

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

  function checkInput() {
    if(minutesInput.value === '') {
      minutesInput.value = '';
    }
    if(secondsInput.value === '') {
      secondsInput.value = '';
    }
  }


    // var invalidChars = invalidChars.replace(/[^a-zA-Z ]/g, "");
    // var validChars = /[0-9]/;
    // var invalidChars = name.replace([e-+.] "");
