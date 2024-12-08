'use strict';
const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories:`, itemsEl.length);
itemsEl.forEach(function (itemEl) {
  console.log(`Category:`, itemEl.querySelector('h2').textContent);
  console.log(`Elements:`, itemEl.querySelectorAll('li').length);
});
