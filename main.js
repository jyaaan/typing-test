/*
  X 1. Create 3 spans, assign colors to each.
  2. find way to turn string into array
  3. create button to iterate through text array, changing styles
*/

// ELEMENT VARIABLES
var $complete = document.querySelector('#complete');
var $current = document.querySelector('#current');
var $remain = document.querySelector('#remain');
var $button = document.querySelector('#test-button');

// GLOBAL VARIABLES
var text = 'abc';
var isGameActive = false;
var testData = {
  remain: text,
  current: '',
  comlete: '',
  pos: 0,
  moveTextPos: function() {
    if (this.current !== '') {
      this.complete += this.current;
    }
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
    isGameActive = true;
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
  if (isGameActive) {

  }
});

initialize(testData);
