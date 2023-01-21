import { optionsData } from './.data.js';
import createOption from './createOption.js';

let flag = false;
let active = -1;

const createPopup = (currentInput) => {
  if (flag) return;
  const popupHtml = `
  <div class="popup_container">
    <div class="heading_popup">
      <h4>Basic Blocks</h4>
    </div>
    <div class="list_popup" role="listitem">
      ${optionsData.map((option) => createOption(option)).join('')}
    </div>
  </div>`;

  currentInput.insertAdjacentHTML('afterend', popupHtml);
  flag = true;
};

const removePopup = () => {
  const popup = document.querySelector('.popup_container');
  if (popup) {
    popup.remove();
    flag = false;
  }
};

document.addEventListener('keydown', (e) => {
  const popOptions = [...document.querySelectorAll('.popup_item')];
  if (!flag) return;
  if (e.key === 'ArrowDown' && active < popOptions.length - 1) {
    active += 1;
    popOptions[active].focus();
  }
  if (e.key === 'ArrowUp' && active > 0) {
    active -= 1;
    popOptions[active].focus();
  }
  if (e.key === 'Escape') removePopup();
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.popup')) return;
  removePopup();
});

export { createPopup, removePopup };
