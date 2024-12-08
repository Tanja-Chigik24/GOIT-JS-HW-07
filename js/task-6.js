'use strict';

const textInput = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const Boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  if (textInput.value <= 100) {
    const amount = textInput.value;
    createBoxes(amount);
  }
});

function createBoxes(amount) {
  destroyBoxes();
  const divArr = [];
  for (let i = 1; i <= amount; i++) {
    let st = 30;
    st += (i - 1) * 10;
    let divNew = document.createElement('div');
    divNew.classList.add('newEl');
    divNew.style.width = `${st}px`;
    divNew.style.height = `${st}px`;
    const getRandomHexColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    divNew.style.backgroundColor = getRandomHexColor;
    divArr.push(divNew);
  }

  Boxes.append(...divArr);
  textInput.value = '';
}

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function destroyBoxes() {
  const divsEl = document.querySelectorAll('.newEl');
  divsEl.forEach(e => e.remove());
}
