import { removePopup } from './popup.js';

const createTag = (input, tagType) => {
  input.className = 'textArea';
  input.classList.add(tagType);
  input.textContent = input.textContent.slice(2).trim();
  // eslint-disable-next-line no-unused-expressions
  tagType === 'p'
    ? input.setAttribute('placeholder', 'Paragraph')
    : input.setAttribute('placeholder', `Heading ${tagType}`);
  input.focus();
  removePopup();
};

export default createTag;
