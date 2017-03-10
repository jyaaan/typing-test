/*
  X 1. Create 3 spans, assign colors to each.
  X 2. find way to turn string into array
  X 3. create button to iterate through text array, changing styles
  X 4. create function to determine if at the end of the sentence
  5. create function to determine game state
  6. create keypress event listener
  7. determine if pressed key is valid
  8. create way to update class of span depending on accuracy

*/

// ELEMENT VARIABLES
var $complete = document.querySelector('#complete');
var $current = document.querySelector('#current');
var $remain = document.querySelector('#remain');
var $button = document.querySelector('#test-button');

// GLOBAL VARIABLES
var text = 'abcdefgh';
var isTestActive = false;
var isTestComplete = false;
var testData = {
  remain: text,
  current: '',
  complete: '',
  error: 0,
  moveTextPos: function() {
    this.complete += this.current;
    this.current = this.remain.substr(0, 1);
    this.remain = removeFirstChar(this.remain);
    this.pos++;
  },
  updateElements: function() {
    $complete.textContent = this.complete;
    $current.textContent = this.current;
    $remain.textContent = this.remain;
  }
};

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
  if (text.length !== 1) {
    return text.substr(1,text.length -1);
  } else {
    return '';
  }
}

function setElementClass(element, className) {

}

$button.addEventListener('click', function() {
  if (isTestActive) {
    if (testData.remain.length == 0) {
      alert('done');
    } else {
      testData.moveTextPos();
      testData.updateElements();
    }
  }
});

initialize(testData);
