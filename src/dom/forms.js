import Project from '../project';
import Todo from '../todo';
import Task from '../task';
import utils from './utils';

function projectForm() {
  const form = document.createElement('form');
  form.setAttribute('class', 'project-form');
  form.id = 'project-form';

  const titleFieldWrap = document.createElement('div');
  titleFieldWrap.setAttribute('class', 'text-field');

  const titleField = document.createElement('input');
  titleField.setAttribute('type', 'text');
  titleField.setAttribute('class', 'text-field');
  titleField.setAttribute('placeholder', 'Project Title');
  titleField.setAttribute('required', 'required');

  titleFieldWrap.appendChild(titleField);

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('class', 'add-btn');
  submitBtn.innerHTML = 'ADD';
  submitBtn.addEventListener('click', () => {
    utils.removeErrors(form);
    if (utils.myValidate.text(titleField, titleFieldWrap)) {
      console.log(new Project(titleField.value));
      utils.clearValue([titleField]);
    }
  });

  form.appendChild(titleFieldWrap);
  form.appendChild(submitBtn);

  return { node: form, id: form.id };
}

function assignPriority(high, medium) {
  if (high.checked) { return 'high'; }
  if (medium.checked) { return 'medium'; }
  return 'low';
}

function todoForm() {
  const form = document.createElement('form');
  form.setAttribute('class', 'todo-form');
  form.id = 'todo-form';

  const titleFieldWrap = document.createElement('div');
  titleFieldWrap.setAttribute('class', 'text-field');

  const titleField = document.createElement('input');
  titleField.setAttribute('type', 'text');
  titleField.setAttribute('class', 'text-field');
  titleField.setAttribute('placeholder', 'Todo Title');

  titleFieldWrap.appendChild(titleField);

  const descFieldWrap = document.createElement('div');
  descFieldWrap.setAttribute('class', 'text-field');

  const descField = document.createElement('input');
  descField.setAttribute('type', 'text');
  descField.setAttribute('class', 'text-field');
  descField.setAttribute('placeholder', 'Todo Description');

  descFieldWrap.appendChild(descField);

  const dateFieldWrap = document.createElement('div');
  dateFieldWrap.setAttribute('class', 'text-field');

  const dateField = document.createElement('input');
  dateField.setAttribute('type', 'date');
  dateField.setAttribute('class', 'text-field');
  dateField.setAttribute('placeholder', 'Todo Description');

  dateFieldWrap.appendChild(dateField);

  const priority = document.createElement('div');
  priority.setAttribute('class', 'priority-wrap');

  const highPriority = document.createElement('span');
  highPriority.setAttribute('class', 'priority-item');

  const highLabel = document.createElement('p');
  highLabel.setAttribute('class', 'priority-label');
  highLabel.innerHTML = 'high';

  const highField = document.createElement('input');
  highField.setAttribute('type', 'radio');
  highField.setAttribute('name', 'priority');

  highPriority.appendChild(highLabel);
  highPriority.appendChild(highField);

  const mediumPriority = document.createElement('span');
  mediumPriority.setAttribute('class', 'priority-item');

  const mediumLabel = document.createElement('p');
  mediumLabel.setAttribute('class', 'priority-label');
  mediumLabel.innerHTML = 'medium';

  const mediumField = document.createElement('input');
  mediumField.setAttribute('type', 'radio');
  mediumField.setAttribute('name', 'priority');

  mediumPriority.appendChild(mediumLabel);
  mediumPriority.appendChild(mediumField);

  const lowPriority = document.createElement('span');
  lowPriority.setAttribute('class', 'priority-item');

  const lowLabel = document.createElement('p');
  lowLabel.setAttribute('class', 'priority-label');
  lowLabel.innerHTML = 'low';

  const lowField = document.createElement('input');
  lowField.setAttribute('type', 'radio');
  lowField.setAttribute('name', 'priority');

  lowPriority.appendChild(lowLabel);
  lowPriority.appendChild(lowField);

  priority.appendChild(highPriority);
  priority.appendChild(mediumPriority);
  priority.appendChild(lowPriority);

  const notesField = document.createElement('textarea');
  notesField.setAttribute('type', 'text');
  notesField.setAttribute('class', 'text-area');
  notesField.setAttribute('placeholder', 'Add Notes');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('class', 'add-btn');
  submitBtn.innerHTML = 'ADD';
  submitBtn.addEventListener('click', () => {
    utils.removeErrors(form);
    if (utils.myValidate.text(titleField, titleFieldWrap)
        && utils.myValidate.text(descField, descFieldWrap)
        && utils.myValidate.date(dateField, dateFieldWrap)
        && utils.myValidate.radio([highField, mediumField, lowField], priority)
    ) {
      console.log(new Todo(
        titleField.value,
        descField.value,
        dateField.value,
        assignPriority(highField, mediumField),
        notesField.value,
      ));

      utils.clearValue([titleField]);
      utils.clearValue([descField]);
      utils.clearValue([dateField]);
      utils.clearRadio([highField, mediumField, lowField]);
      utils.clearValue([notesField]);
    }
  });

  form.appendChild(titleFieldWrap);
  form.appendChild(descFieldWrap);
  form.appendChild(dateFieldWrap);
  form.appendChild(priority);
  form.appendChild(notesField);
  form.appendChild(submitBtn);

  return { node: form, id: form.id };
}

function taskForm() {
  const form = document.createElement('form');
  form.setAttribute('class', 'task-form');

  const nameFieldWrap = document.createElement('div');
  nameFieldWrap.setAttribute('class', 'text-field');

  const nameField = document.createElement('input');
  nameField.setAttribute('type', 'text');
  nameField.setAttribute('class', 'text-field');
  nameField.setAttribute('placeholder', 'Task name');

  nameFieldWrap.appendChild(nameField);

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('class', 'add-btn');
  submitBtn.innerHTML = 'ADD';
  submitBtn.addEventListener('click', () => {
    utils.removeErrors(form);
    if (utils.myValidate.text(nameField, nameFieldWrap)) {
      console.log(new Task(nameField));
      utils.clearValue([nameField]);
    }
  });

  form.appendChild(nameFieldWrap);
  form.appendChild(submitBtn);

  return form;
}

const forms = {
  project: projectForm(),
  todo: todoForm(),
  task: taskForm(),
};

export default forms;
