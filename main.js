/*
  X 1. Create 3 spans, assign colors to each.
  2. find way to turn string into array
  3. create button to iterate through text array, changing styles
*/

// GLOBAL VARIABLES
var text = 'abc';
var isGameActive = false;
var testData = {
  remain: text,
  current: '',
  comlete: '',
  pos: 0
};

// ELEMENT VARIABLES
var $complete = document.querySelector('#complete');
var $current = document.querySelector('#current');
var $remain = document.querySelector('#remain');
var $button = document.querySelector('#test-button');

function initialize(testData) {
  if (testData.remain.length > 0) {
    isGameActive = true;
    testData.moveTextPos();
  } else {
    alert('nothing to test');
  }
  updateElements(testData);
}

function removeFirstChar(text) {
  if (text.length !== 1) {
    return text.substr(1,text.length -1);
  } else {
    return '';
  }
}

function moveTextPos() {
  this.complete += testData.current;
  this.current = testData.remain.substr(0, 1);
  this.remain = removeFirstChar(testData.remain);
  this.pos++;
}

function setElementClass(element, className) {

}

function updateElements(testData) {
  $complete.textContent = testData.complete;
  $current.textContent = testData.current;
  $remain.textContent = testData.remain;
}

$button.addEventListener('click', function() {
  if (isGameActive) {

  }
});

initialize(testData);
