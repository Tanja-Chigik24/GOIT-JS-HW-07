'use strict';
const colorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

function getRandomHexColor() {
  colorName.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  document.body.style.backgroundColor = colorName.textContent;
}

colorBtn.addEventListener('click', getRandomHexColor);
