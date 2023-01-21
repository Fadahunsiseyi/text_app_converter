
const createOption = (option) => {
  const { title, description,type } = option;
  return `
    <button class="popup_item" data-type="${type}">
    <div>
      <h4>${title}</h4>
      <p>${description}</p>
    </div>
    </button>`;
};

export default createOption;
