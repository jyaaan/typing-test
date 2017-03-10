/*
  X 1. Create 3 spans, assign colors to each.
  X 2. find way to turn string into array
  X 3. create button to iterate through text array, changing styles
  X 4. create function to determine if at the end of the sentence
  5. create function to determine game state
  X 6. create keypress event listener
  X 7. determine if pressed key is valid
  X 8. create way to update class of span depending on accuracy

*/

// ELEMENT VARIABLES
var $complete = document.querySelector('#complete');
var $current = document.querySelector('.current');
var $remain = document.querySelector('#remain');
var $testContent = document.querySelector('.test-content');

// GLOBAL VARIABLES
var text = 'You are watching me type.';
var isTestActive = false;
var testData = {
  remain: text,
  current: '',
  complete: '',
  error: 0,
  moveTextPos: function() {
    this.complete += this.current;
    this.current = this.remain.substr(0, 1);
    this.remain = removeFirstChar(this.remain);
  },
  updateElements: function() {
    $complete.textContent = this.complete;
    $current.textContent = this.current;
    $remain.textContent = this.remain;
  }
};

// FUNCTIONS

function initialize(testData) {
  if (testData.remain.length > 0) {
    isTestActive = true;
    testData.moveTextPos();
  } else {
    alert('nothing to test');
  }
  testData.updateElements();
}

function removeFirstChar(text) {
  return text.substr(1,text.length -1);
}

function alertOnComplete(error) {
  if (error === 1) {
    alert('Completed with' + ' ' + error + ' ' + 'error');
  } else {
    alert('Completed with' + ' ' + error + ' ' + 'errors');
  }
}
// EVENT LISTENERS

document.addEventListener('keydown', function(event) {
  if (isTestActive) {
    if (event.key === testData.current) {
      if (testData.remain.length === 0) {
        alertOnComplete(testData.error);
        isTestActive = false;
      }
      testData.moveTextPos();
      testData.updateElements();
      $current.setAttribute('id', 'active');
      $testContent.classList.remove('shake');
    } else {
      if (event.key !== 'Shift'){
        testData.error++;
        $current.setAttribute('id', 'error');
        $testContent.classList.add('shake');
      }
    }
  }
})

// INITIALIZER

document.addEventListener('DOMContentLoaded', function () {
  initialize(testData);
})
