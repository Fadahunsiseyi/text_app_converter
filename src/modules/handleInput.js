import { createPopup, removePopup } from './popup.js';
import createInput from './createInput.js';
import selectOption from './selectOption.js';
import filterOptions from './filterOptions.js';
import createTag from './createTag.js';

const handleInput = (input = document.getElementById('1')) => {
  input.addEventListener('input', () => {
    if (input.textContent[0] === '/') {
      createPopup(input);
      selectOption(input);
      filterOptions(input.textContent);
    } else {
      removePopup();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const text = input.textContent;
      if (text[0] === '/' && text[1] === '1') createTag(input, 'h1');
      if (text[0] === '/' && text[1] === '2') createTag(input, 'h2');
      if (text === '') input.removeAttribute('placeholder');

      const newInput = createInput(input, input.id);
      handleInput(newInput);
    }

    if (e.key === 'Backspace' && input.textContent.length === 0 && input.id !== '1') {
      const previousInput = input.previousElementSibling;
      input.remove();
      previousInput.setAttribute('placeholder', "Type '/' for blocks");
      previousInput.textContent += ' ';
      previousInput.focus();
      const range = document.createRange();
      const sel = window.getSelection();
      range.setStart(
        previousInput.childNodes[0] || previousInput,
        previousInput.textContent.length,
      );
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });
};

export default handleInput;
