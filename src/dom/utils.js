const parent = document.getElementById('main-wrap');

// it is important to use cloosure to achieve the desired toggle effect;
function toggle() {
  let state = false;
  return (buttonNode, form, parentNode, defaultText, openText) => {
    state = !state;
    if (state) {
      parentNode.appendChild(form.node);
      buttonNode.innerHTML = defaultText;
    } else {
      parentNode.removeChild(document.getElementById(form.id));
      buttonNode.innerHTML = openText;
    }
  };
}

const toggleForm = toggle();

const utils = { parent, toggleForm };
export default utils;
