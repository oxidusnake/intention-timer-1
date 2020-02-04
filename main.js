var studyBox = document.querySelector('.study-box');
var meditateBox = document.querySelector('.meditate-box');
var exerciseBox = document.querySelector('.exercise-box');
var studyTitle = document.querySelector('.study');
var meditateTitle = document.querySelector('.meditate');
var exerciseTitle = document.querySelector('.exercise');

studyBox.addEventListener('click', studyBoxChange);
meditateBox.addEventListener('click', meditateBoxChange);
exerciseBox.addEventListener('click', exerciseBoxChange);

function studyBoxChange() {
  //if the box that is clicked contains a class of said box,
  //we are going to update that box by changing the icon and border color
  if(event.target.classList.contains('study-box')) {
    event.target.classList.add('active-study-box');
    studyTitle.style.color = '#B3FD78';
  }
}
function meditateBoxChange() {
if(event.target.classList.contains('meditate-box')) {
  event.target.classList.add('active-meditate-box');
  meditateTitle.style.color = '#C278FD';
  }
}

function exerciseBoxChange() {
  if(event.target.classList.contains('exercise-box')) {
    event.target.classList.add('active-exercise-box');
    exerciseTitle.style.color = '#FD8078';
  }
}
