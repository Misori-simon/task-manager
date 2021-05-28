function projectForm() {
  const form = document.createElement('form');
  form.setAttribute('class', 'project-form');

  const titleField = document.createElement('input');
  titleField.setAttribute('type', 'text');
  titleField.setAttribute('class', 'text-field');
  titleField.setAttribute('placeholder', 'Project Title');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('class', 'add-btn');
  submitBtn.innerHTML = 'ADD';

  form.appendChild(titleField);
  form.appendChild(submitBtn);

  return form;
}

export default projectForm;
