var studyBox = document.querySelector('.study-box');
var meditateBox = document.querySelector('.meditate-box');
var exerciseBox = document.querySelector('.exercise-box');
var studyTitle = document.querySelector('.study');
var meditateTitle = document.querySelector('.meditate');
var exerciseTitle = document.querySelector('.exercise');
var studyIcon = document.querySelector('.study-icon');
var meditateIcon = document.querySelector('.meditate-icon');
var exerciseIcon = document.querySelector('.exercise-icon');
var activityBoxes = document.querySelector('.activity-box-container');
var boxArray = [studyBox, meditateBox, exerciseBox];

activityBoxes.addEventListener('click', changeBoxes);

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
