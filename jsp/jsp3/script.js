"use strict";
const counter = document.querySelector('#counter');
const prevbtn = document.querySelector('.prevbtn');
const nextbtn = document.querySelector('.nextbtn');
let count =0;
function updateCount(newvalue){
    count = newvalue;
    counter.textContent = count;
}
prevbtn.addEventListener('click', () => {
    updateCount(count - 1);
  });
  nextbtn.addEventListener('click', () => {
    updateCount(count + 1);
  });