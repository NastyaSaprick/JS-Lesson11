'use strict';

let text = document.getElementById('text');
let btn = document.getElementById('btn');
let ebtn = document.getElementById('e_btn');
let range = document.getElementById('range');
let square = document.getElementById('square');
let circle = document.getElementById('circle');
let span = document.getElementById('range-span');

text.value = 'Red';

const adding = function () {
    square.style.backgroundColor = text.value;
}

btn.addEventListener('click', adding)

ebtn.style.display = 'none';

let wd = parseInt(window.getComputedStyle(circle).getPropertyValue('width'), 10);
let ht = parseInt(window.getComputedStyle(circle).getPropertyValue('height'), 10);
range.value = '100';
span.textContent = '100%';
const size = function () {
    let i_value = range.value / 100;
    span.textContent = range.value + '%';
    circle.style.width = wd*i_value + 'px';
    circle.style.height = ht*i_value + 'px';
}

range.addEventListener('input', size);




