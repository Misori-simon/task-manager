const parent = document.getElementById('main-wrap');

// it is important to use cloosure to achieve the desired toggle effect;
function toggle() {
  let state = false;
  return (buttonNode, form, parentNode, defaultText, openText) => {
    state = !state;
    if (state) {
      parentNode.appendChild(form.node);
      buttonNode.innerHTML = openText;
    } else {
      parentNode.removeChild(document.getElementById(form.id));
      buttonNode.innerHTML = defaultText;
    }
  };
}
// the use of clusore is important
const toggleForm = toggle();

function validateTextInput(inputField) {
  if (inputField.value.trim().length >= 3) {
    return true;
  }
  return false;
}

function validateRadioInput(inputFieldArr) {
  for (let i = 0; i < inputFieldArr.length; i += 1) {
    if (inputFieldArr[i].checked) {
      return true;
    }
  }
  return false;
}

function validateDateInput(inputField) {
  const dateNow = new Date(Date());
  const now = new Date(`${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`);
  const dueDate = new Date(inputField.value);
  if ((inputField.value === '')) {
    return false;
  }
  return now <= dueDate;
}

const myValidate = {
  text: validateTextInput,
  radio: validateRadioInput,
  date: validateDateInput,
};

const utils = { parent, toggleForm, myValidate };
export default utils;
