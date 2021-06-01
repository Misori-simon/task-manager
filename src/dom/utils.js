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

function clearValue(inputFieldArr) {
  for (let i = 0; i < inputFieldArr.length; i += 1) {
    inputFieldArr[i].value = '';
  }
}

function makeErrorMessage(tag, message) {
  const node = document.createElement(tag);
  node.setAttribute('class', 'form-error');
  node.innerHTML = message;
  return node;
}

function removeErrors(form) {
  const target = form.getElementsByClassName('form-error');
  if (target) {
    for (let i = 0; i < target.length; i += 1) {
      target[i].remove(target);
    }
  }
}

function displayError(inputFieldWrap) {
  inputFieldWrap.appendChild(makeErrorMessage('p', 'required'));
}

function validateTextInput(inputField, inputFieldWrap) {
  if (inputField.value.trim().length >= 1) {
    return true;
  }
  displayError(inputFieldWrap);
  return false;
}

function validateRadioInput(inputFieldArr, inputFieldWrap) {
  for (let i = 0; i < inputFieldArr.length; i += 1) {
    if (inputFieldArr[i].checked) {
      return true;
    }
  }
  displayError(inputFieldWrap);
  return false;
}

function validateDateInput(inputField, inputFieldWrap) {
  const dateNow = new Date(Date());
  const now = new Date(`${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`);
  const dueDate = new Date(inputField.value);
  if ((inputField.value !== '') && (now <= dueDate)) {
    return true;
  }
  displayError(inputFieldWrap);
  return false;
}

function clearRadio(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].checked = false;
  }
}

const myValidate = {
  text: validateTextInput,
  radio: validateRadioInput,
  date: validateDateInput,
};

const utils = {
  parent,
  toggleForm,
  myValidate,
  displayError,
  removeErrors,
  clearValue,
  clearRadio,
};

export default utils;
