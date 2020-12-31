// global scope, most major variables and functions should be defined here
// grab the elements by name or id and assign them to variables 

const counterDisplay = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');

let commentList = document.getElementById('list');
let commentInput = document.getElementById('comment-input');
const commentSubmit = document.getElementById('submit');

let startCounter = 0;

document.addEventListener("DOMContentLoaded", function () {

  setInterval(function() {
    counterDisplay.innerHTML = startCounter;
    startCounter += 1;
  }, 1000);

});

minus.addEventListener('click', function () {
  counter -= 1;
  counterDisplay.innerHTML = parseInt(counterDisplay.innerHTML) - 1;
});

plus.addEventListener('click', function () {
  counter += 1;
  counterDisplay.innerHTML = parseInt(counterDisplay.innerHTML) + 1;
});

pause.addEventListener('click', function () {

  
  
});

