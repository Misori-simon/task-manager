/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");




const projects = [
  new _project__WEBPACK_IMPORTED_MODULE_0__.default('Project One'),
  new _project__WEBPACK_IMPORTED_MODULE_0__.default('Project Two'),
  new _project__WEBPACK_IMPORTED_MODULE_0__.default('Project Three'),
  new _project__WEBPACK_IMPORTED_MODULE_0__.default('Project Four'),
];

const todos = [
  new _todo__WEBPACK_IMPORTED_MODULE_1__.default(
    'Test One',
    'Test todo properties',
    '26/05/2020',
    'high',
    'Test using jest',
    'pending',
  ),
  new _todo__WEBPACK_IMPORTED_MODULE_1__.default(
    'Test Two',
    'Test todo properties',
    '26/05/2020',
    'high',
    'Test using jest',
    'pending',
  ),
  new _todo__WEBPACK_IMPORTED_MODULE_1__.default(
    'Test Three',
    'Test todo properties',
    '26/05/2020',
    'high',
    'Test using jest',
    'pending',
  ),
  new _todo__WEBPACK_IMPORTED_MODULE_1__.default(
    'Test Four',
    'Test todo properties',
    '26/05/2020',
    'high',
    'Test using jest',
    'pending',
  ),
];

const tasks = [
  new _task__WEBPACK_IMPORTED_MODULE_2__.default('Task One'),
  new _task__WEBPACK_IMPORTED_MODULE_2__.default('Task Two'),
  new _task__WEBPACK_IMPORTED_MODULE_2__.default('Task Three'),
  new _task__WEBPACK_IMPORTED_MODULE_2__.default('Task Four'),
];

projects[0].addTodo(todos[1]);
projects[0].addTodo(todos[2]);

projects[2].addTodo(todos[1]);
projects[2].addTodo(todos[2]);
projects[2].addTodo(todos[3]);

todos[1].addTask(tasks[1]);
todos[1].addTask(tasks[2]);

todos[2].addTask(tasks[1]);
todos[2].addTask(tasks[2]);
todos[2].addTask(tasks[3]);

tasks[1].complete(todos[1]);
tasks[1].complete(todos[2]);
tasks[2].complete(todos[2]);

const data = { projects };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


/***/ }),

/***/ "./src/dom/forms.js":
/*!**************************!*\
  !*** ./src/dom/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo */ "./src/todo.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task */ "./src/task.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/dom/utils.js");





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
    _utils__WEBPACK_IMPORTED_MODULE_3__.default.removeErrors(form);
    if (_utils__WEBPACK_IMPORTED_MODULE_3__.default.myValidate.text(titleField, titleFieldWrap)) {
      console.log(new _project__WEBPACK_IMPORTED_MODULE_0__.default(titleField.value));
      _utils__WEBPACK_IMPORTED_MODULE_3__.default.clearValue([titleField]);
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
    _utils__WEBPACK_IMPORTED_MODULE_3__.default.removeErrors(form);
    if (_utils__WEBPACK_IMPORTED_MODULE_3__.default.myValidate.text(titleField, titleFieldWrap)
        && _utils__WEBPACK_IMPORTED_MODULE_3__.default.myValidate.text(descField, descFieldWrap)
        && _utils__WEBPACK_IMPORTED_MODULE_3__.default.myValidate.date(dateField, dateFieldWrap)
        && _utils__WEBPACK_IMPORTED_MODULE_3__.default.myValidate.radio([highField, mediumField, lowField], priority)
    ) {
      console.log(new _todo__WEBPACK_IMPORTED_MODULE_1__.default(
        titleField.value,
        descField.value,
        dateField.value,
        assignPriority(highField, mediumField),
        notesField.value,
      ));

      _utils__WEBPACK_IMPORTED_MODULE_3__.default.clearValue([titleField]);
      _utils__WEBPACK_IMPORTED_MODULE_3__.default.clearValue([descField]);
      _utils__WEBPACK_IMPORTED_MODULE_3__.default.clearValue([dateField]);
      _utils__WEBPACK_IMPORTED_MODULE_3__.default.clearRadio([highField, mediumField, lowField]);
      _utils__WEBPACK_IMPORTED_MODULE_3__.default.clearValue([notesField]);
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
    _utils__WEBPACK_IMPORTED_MODULE_3__.default.removeErrors(form);
    if (_utils__WEBPACK_IMPORTED_MODULE_3__.default.myValidate.text(nameField, nameFieldWrap)) {
      console.log(new _task__WEBPACK_IMPORTED_MODULE_2__.default(nameField));
      _utils__WEBPACK_IMPORTED_MODULE_3__.default.clearValue([nameField]);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);


/***/ }),

/***/ "./src/dom/header.js":
/*!***************************!*\
  !*** ./src/dom/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function displayHeader(siteTitle) {
  const header = document.createElement('header');
  header.setAttribute('class', 'header');
  const heading = document.createElement('h2');
  heading.setAttribute('class', 'site-title');
  heading.innerHTML = siteTitle;
  header.appendChild(heading);
  return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHeader);


/***/ }),

/***/ "./src/dom/list.js":
/*!*************************!*\
  !*** ./src/dom/list.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/dom/nav.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ "./src/dom/forms.js");



function listProjects(projectArr) {
  const objectWrap = document.createElement('div');
  objectWrap.setAttribute('class', 'obj-wrap');

  objectWrap.appendChild(_nav__WEBPACK_IMPORTED_MODULE_0__.default.main(projectArr.length));

  for (let i = 0; i < projectArr.length; i += 1) {
    const objectItem = document.createElement('div');
    objectItem.setAttribute('class', 'obj-item');

    const objectTitle = document.createElement('h3');
    objectTitle.setAttribute('class', 'obj-title');
    objectTitle.innerHTML = `${projectArr[i].title} (${projectArr[i].count()})`;

    const delButton = document.createElement('button');
    delButton.setAttribute('class', 'del-button');
    delButton.setAttribute('type', 'button');
    delButton.innerHTML = 'delIcon';

    objectItem.appendChild(objectTitle);
    objectItem.appendChild(delButton);

    objectWrap.appendChild(objectItem);
  }
  return objectWrap;
}

function ListTasks(taskArr) {
  const taskWrap = document.createElement('div');
  taskWrap.setAttribute('class', 'task-wrap');
  for (let i = 0; i < taskArr.length; i += 1) {
    const taskCard = document.createElement('div');
    taskCard.setAttribute('class', 'task-card');

    const state = document.createElement('div');
    state.setAttribute('class', 'task-completion-state');
    state.innerHTML = 'checkedIcon';

    const name = document.createElement('p');
    name.setAttribute('class', 'task-name');
    name.innerHTML = `${taskArr[i].name}`;

    taskCard.appendChild(state);
    taskCard.appendChild(name);

    taskWrap.appendChild(taskCard);
  }
  return taskWrap;
}

function makeCardTitle(todoObj) {
  const cardTitle = document.createElement('div');
  cardTitle.setAttribute('class', 'obj-title-wrap');

  const titleLeft = document.createElement('div');
  titleLeft.setAttribute('class', 'obj-title-left');

  const titleInfo = document.createElement('div');
  titleInfo.setAttribute('class', 'obj-title-info');

  const priorityBar = document.createElement('span');
  priorityBar.setAttribute('class', 'priority-bar');

  titleInfo.appendChild(priorityBar);

  const titleClock = document.createElement('span');
  titleClock.setAttribute('class', 'title-clock');
  titleClock.innerHTML = 'clockIcon';

  titleInfo.appendChild(priorityBar);

  const objectTitle = document.createElement('h3');
  objectTitle.setAttribute('class', 'obj-title');
  objectTitle.innerHTML = `${todoObj.title} (${todoObj.countComplete()}/${todoObj.count()})`;

  titleLeft.appendChild(titleInfo);
  titleLeft.appendChild(objectTitle);

  const titleRight = document.createElement('div');
  titleRight.setAttribute('class', 'obj-title-right');

  const objectToggle = document.createElement('div');
  objectToggle.setAttribute('class', 'obj-toggle');
  objectToggle.innerHTML = 'dropdownIcon';

  cardTitle.appendChild(titleLeft);
  cardTitle.appendChild(titleRight);

  return cardTitle;
}

function makeCardBody(todoObj) {
  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'obj-title-wrap');

  const dueDate = document.createElement('div');
  dueDate.setAttribute('class', 'obj-due-date');

  const dueDateText = document.createElement('p');
  dueDateText.innerHTML = `Due Date: ${todoObj.dueDate}`;

  dueDate.appendChild(dueDateText);

  const controls = document.createElement('div');
  controls.setAttribute('class', 'obj-controls');

  const priority = document.createElement('div');
  priority.setAttribute('class', 'obj-priority');

  const lowPriority = document.createElement('button');
  lowPriority.setAttribute('class', 'low-priority');

  priority.appendChild(lowPriority);

  const mediumPriority = document.createElement('button');
  mediumPriority.setAttribute('class', 'medium-priority');

  priority.appendChild(mediumPriority);

  const highPriority = document.createElement('button');
  highPriority.setAttribute('class', 'high-priority');

  priority.appendChild(highPriority);

  const completionState = document.createElement('div');
  completionState.setAttribute('class', 'obj-completion-state');
  completionState.innerHTML = 'checkedIcon';

  controls.appendChild(priority);
  controls.appendChild(completionState);

  const desc = document.createElement('div');
  desc.setAttribute('class', 'obj-desc');
  desc.innerHTML = `${todoObj.desc}`;

  const notes = document.createElement('div');
  notes.setAttribute('class', 'obj-notes');
  notes.innerHTML = `${todoObj.notes}`;

  const tasks = ListTasks(todoObj.tasks);

  cardBody.appendChild(dueDate);
  cardBody.appendChild(controls);
  cardBody.appendChild(desc);
  cardBody.appendChild(notes);
  cardBody.appendChild(_forms__WEBPACK_IMPORTED_MODULE_1__.default.task);
  cardBody.appendChild(tasks);

  return cardBody;
}

function listTodos(projectObj) {
  const todoArr = projectObj.todos;
  const objectWrap = document.createElement('div');
  objectWrap.setAttribute('class', 'obj-wrap');

  objectWrap.appendChild(_nav__WEBPACK_IMPORTED_MODULE_0__.default.project(projectObj.title, todoArr.length));

  for (let i = 0; i < todoArr.length; i += 1) {
    const objectCard = document.createElement('div');
    objectCard.setAttribute('class', 'obj-card');

    const cardTitle = makeCardTitle(todoArr[i]);
    const cardBody = makeCardBody(todoArr[i]);

    objectCard.appendChild(cardTitle);
    objectCard.appendChild(cardBody);

    objectWrap.appendChild(objectCard);
  }
  return objectWrap;
}

const list = {
  projects: listProjects,
  todos: listTodos,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);


/***/ }),

/***/ "./src/dom/nav.js":
/*!************************!*\
  !*** ./src/dom/nav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/dom/forms.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/dom/utils.js");



function mainNav(projectsCount) {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'header');

  const heading = document.createElement('h2');
  heading.setAttribute('class', 'nav-item');
  heading.innerHTML = `Projects (${projectsCount})`;

  const newProjectBtn = document.createElement('button');
  newProjectBtn.setAttribute('type', 'button');
  newProjectBtn.setAttribute('class', 'nav-item');
  newProjectBtn.innerHTML = 'new project';
  newProjectBtn.addEventListener('click', () => {
    _utils__WEBPACK_IMPORTED_MODULE_1__.default.toggleForm(newProjectBtn, _forms__WEBPACK_IMPORTED_MODULE_0__.default.project, nav, 'new project', 'close');
  });

  nav.appendChild(heading);
  nav.appendChild(newProjectBtn);

  return nav;
}

function projectNav(projectTitle, todosCount) {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'header');

  const backIcon = document.createElement('span');
  backIcon.setAttribute('class', 'nav-item');
  backIcon.innerHTML = 'backIcon';

  const heading = document.createElement('span');
  heading.setAttribute('class', 'nav-item');
  heading.innerHTML = `${projectTitle} (${todosCount})`;

  const newtodoBtn = document.createElement('button');
  newtodoBtn.setAttribute('type', 'button');
  newtodoBtn.setAttribute('class', 'nav-item');
  newtodoBtn.innerHTML = 'new todo';
  newtodoBtn.addEventListener('click', () => {
    _utils__WEBPACK_IMPORTED_MODULE_1__.default.toggleForm(newtodoBtn, _forms__WEBPACK_IMPORTED_MODULE_0__.default.todo, nav, 'new todo', 'close');
  });

  nav.appendChild(backIcon);
  nav.appendChild(heading);
  nav.appendChild(newtodoBtn);
  return nav;
}

const nav = {
  main: mainNav,
  project: projectNav,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);


/***/ }),

/***/ "./src/dom/utils.js":
/*!**************************!*\
  !*** ./src/dom/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Project(title) {
  this.title = title;
  this.todos = [];
}

Project.prototype.addTodo = function addTodo(todoObj) {
  this.todos.push(todoObj);
  return this.todos.length;
};

Project.prototype.removeTodo = function removeTodo(index) {
  this.todos.splice(index, 1);
  return this.todos.length;
};

Project.prototype.count = function count() {
  return this.todos.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Task(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function markCompleted(todoObj) {
  this.completed = true;
  todoObj.tasksCompleted += 1;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Todo(title, desc, dueDate, priority, notes) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.completed = false;
  this.tasks = [];
  this.tasksCompleted = 0;
}

Todo.prototype.edit = function edit(title, desc, dueDate, priority, notes) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
};

Todo.prototype.changePriority = function changePriority(priority) {
  if (priority === 'high' || priority === 'medium' || priority === 'low') {
    this.priority = priority;
  }
};

Todo.prototype.complete = function complete() {
  this.completed = true;
};

Todo.prototype.addTask = function addTask(taskObj) {
  this.tasks.push(taskObj);
  return this.tasks.length;
};

Todo.prototype.count = function count() {
  return this.tasks.length;
};

Todo.prototype.countComplete = function countComplete() {
  return this.tasksCompleted;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/header */ "./src/dom/header.js");
/* harmony import */ var _dom_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/list */ "./src/dom/list.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");




const main = document.getElementById('main-wrap');
main.appendChild((0,_dom_header__WEBPACK_IMPORTED_MODULE_0__.default)('Bingo'));
main.appendChild(_dom_list__WEBPACK_IMPORTED_MODULE_1__.default.todos(_data__WEBPACK_IMPORTED_MODULE_2__.default.projects[0]));
// main.appendChild(forms.project);
// main.appendChild(forms.todo);
// main.appendChild(forms.task);
main.appendChild(_dom_list__WEBPACK_IMPORTED_MODULE_1__.default.projects(_data__WEBPACK_IMPORTED_MODULE_2__.default.projects));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2Zvcm1zLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vaGVhZGVyLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vbGlzdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL25hdi5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL3V0aWxzLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNOO0FBQ0E7O0FBRTFCO0FBQ0EsTUFBTSw2Q0FBTztBQUNiLE1BQU0sNkNBQU87QUFDYixNQUFNLDZDQUFPO0FBQ2IsTUFBTSw2Q0FBTztBQUNiOztBQUVBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWO0FBQ0E7QUFDQTtB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Ozs7O0FDbkJ2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1ZwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQzFDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNYO0FBQ0o7O0FBRTFCO0FBQ0EsaUJBQWlCLG9EQUFhO0FBQzlCLGlCQUFpQixvREFBVSxDQUFDLHNEQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQWEsQ0FBQyxtREFBYSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgT25lJyksXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IFR3bycpLFxuICBuZXcgUHJvamVjdCgnUHJvamVjdCBUaHJlZScpLFxuICBuZXcgUHJvamVjdCgnUHJvamVjdCBGb3VyJyksXG5dO1xuXG5jb25zdCB0b2RvcyA9IFtcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgT25lJyxcbiAgICAnVGVzdCB0b2RvIHByb3BlcnRpZXMnLFxuICAgICcyNi8wNS8yMDIwJyxcbiAgICAnaGlnaCcsXG4gICAgJ1Rlc3QgdXNpbmcgamVzdCcsXG4gICAgJ3BlbmRpbmcnLFxuICApLFxuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBUd28nLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IFRocmVlJyxcbiAgICAnVGVzdCB0b2RvIHByb3BlcnRpZXMnLFxuICAgICcyNi8wNS8yMDIwJyxcbiAgICAnaGlnaCcsXG4gICAgJ1Rlc3QgdXNpbmcgamVzdCcsXG4gICAgJ3BlbmRpbmcnLFxuICApLFxuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBGb3VyJyxcbiAgICAnVGVzdCB0b2RvIHByb3BlcnRpZXMnLFxuICAgICcyNi8wNS8yMDIwJyxcbiAgICAnaGlnaCcsXG4gICAgJ1Rlc3QgdXNpbmcgamVzdCcsXG4gICAgJ3BlbmRpbmcnLFxuICApLFxuXTtcblxuY29uc3QgdGFza3MgPSBbXG4gIG5ldyBUYXNrKCdUYXNrIE9uZScpLFxuICBuZXcgVGFzaygnVGFzayBUd28nKSxcbiAgbmV3IFRhc2soJ1Rhc2sgVGhyZWUnKSxcbiAgbmV3IFRhc2soJ1Rhc2sgRm91cicpLFxuXTtcblxucHJvamVjdHNbMF0uYWRkVG9kbyh0b2Rvc1sxXSk7XG5wcm9qZWN0c1swXS5hZGRUb2RvKHRvZG9zWzJdKTtcblxucHJvamVjdHNbMl0uYWRkVG9kbyh0b2Rvc1sxXSk7XG5wcm9qZWN0c1syXS5hZGRUb2RvKHRvZG9zWzJdKTtcbnByb2plY3RzWzJdLmFkZFRvZG8odG9kb3NbM10pO1xuXG50b2Rvc1sxXS5hZGRUYXNrKHRhc2tzWzFdKTtcbnRvZG9zWzFdLmFkZFRhc2sodGFza3NbMl0pO1xuXG50b2Rvc1syXS5hZGRUYXNrKHRhc2tzWzFdKTtcbnRvZG9zWzJdLmFkZFRhc2sodGFza3NbMl0pO1xudG9kb3NbMl0uYWRkVGFzayh0YXNrc1szXSk7XG5cbnRhc2tzWzFdLmNvbXBsZXRlKHRvZG9zWzFdKTtcbnRhc2tzWzFdLmNvbXBsZXRlKHRvZG9zWzJdKTtcbnRhc2tzWzJdLmNvbXBsZXRlKHRvZG9zWzJdKTtcblxuY29uc3QgZGF0YSA9IHsgcHJvamVjdHMgfTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4uL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi4vdG9kbyc7XG5pbXBvcnQgVGFzayBmcm9tICcuLi90YXNrJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWZvcm0nKTtcbiAgZm9ybS5pZCA9ICdwcm9qZWN0LWZvcm0nO1xuXG4gIGNvbnN0IHRpdGxlRmllbGRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlRmllbGRXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1maWVsZCcpO1xuXG4gIGNvbnN0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXG4gIHRpdGxlRmllbGRXcmFwLmFwcGVuZENoaWxkKHRpdGxlRmllbGQpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtYnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQUREJztcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWxzLnJlbW92ZUVycm9ycyhmb3JtKTtcbiAgICBpZiAodXRpbHMubXlWYWxpZGF0ZS50ZXh0KHRpdGxlRmllbGQsIHRpdGxlRmllbGRXcmFwKSkge1xuICAgICAgY29uc29sZS5sb2cobmV3IFByb2plY3QodGl0bGVGaWVsZC52YWx1ZSkpO1xuICAgICAgdXRpbHMuY2xlYXJWYWx1ZShbdGl0bGVGaWVsZF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkV3JhcCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICByZXR1cm4geyBub2RlOiBmb3JtLCBpZDogZm9ybS5pZCB9O1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Qcmlvcml0eShoaWdoLCBtZWRpdW0pIHtcbiAgaWYgKGhpZ2guY2hlY2tlZCkgeyByZXR1cm4gJ2hpZ2gnOyB9XG4gIGlmIChtZWRpdW0uY2hlY2tlZCkgeyByZXR1cm4gJ21lZGl1bSc7IH1cbiAgcmV0dXJuICdsb3cnO1xufVxuXG5mdW5jdGlvbiB0b2RvRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tZm9ybScpO1xuICBmb3JtLmlkID0gJ3RvZG8tZm9ybSc7XG5cbiAgY29uc3QgdGl0bGVGaWVsZFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVGaWVsZFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG5cbiAgY29uc3QgdGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RvZG8gVGl0bGUnKTtcblxuICB0aXRsZUZpZWxkV3JhcC5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkKTtcblxuICBjb25zdCBkZXNjRmllbGRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NGaWVsZFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG5cbiAgY29uc3QgZGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGVzY0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgZGVzY0ZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVG9kbyBEZXNjcmlwdGlvbicpO1xuXG4gIGRlc2NGaWVsZFdyYXAuYXBwZW5kQ2hpbGQoZGVzY0ZpZWxkKTtcblxuICBjb25zdCBkYXRlRmllbGRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhdGVGaWVsZFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG5cbiAgY29uc3QgZGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVG9kbyBEZXNjcmlwdGlvbicpO1xuXG4gIGRhdGVGaWVsZFdyYXAuYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LXdyYXAnKTtcblxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWl0ZW0nKTtcblxuICBjb25zdCBoaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhpZ2hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWxhYmVsJyk7XG4gIGhpZ2hMYWJlbC5pbm5lckhUTUwgPSAnaGlnaCc7XG5cbiAgY29uc3QgaGlnaEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaGlnaEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBoaWdoRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG5cbiAgaGlnaFByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hMYWJlbCk7XG4gIGhpZ2hQcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoRmllbGQpO1xuXG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWl0ZW0nKTtcblxuICBjb25zdCBtZWRpdW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVkaXVtTGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1sYWJlbCcpO1xuICBtZWRpdW1MYWJlbC5pbm5lckhUTUwgPSAnbWVkaXVtJztcblxuICBjb25zdCBtZWRpdW1GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG1lZGl1bUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBtZWRpdW1GaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcblxuICBtZWRpdW1Qcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1MYWJlbCk7XG4gIG1lZGl1bVByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bUZpZWxkKTtcblxuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1pdGVtJyk7XG5cbiAgY29uc3QgbG93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxvd0xhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbGFiZWwnKTtcbiAgbG93TGFiZWwuaW5uZXJIVE1MID0gJ2xvdyc7XG5cbiAgY29uc3QgbG93RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBsb3dGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgbG93RmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG5cbiAgbG93UHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuICBsb3dQcmlvcml0eS5hcHBlbmRDaGlsZChsb3dGaWVsZCk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbiAgY29uc3Qgbm90ZXNGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIG5vdGVzRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbm90ZXNGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtYXJlYScpO1xuICBub3Rlc0ZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQWRkIE5vdGVzJyk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1idG4nKTtcbiAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBREQnO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbHMucmVtb3ZlRXJyb3JzKGZvcm0pO1xuICAgIGlmICh1dGlscy5teVZhbGlkYXRlLnRleHQodGl0bGVGaWVsZCwgdGl0bGVGaWVsZFdyYXApXG4gICAgICAgICYmIHV0aWxzLm15VmFsaWRhdGUudGV4dChkZXNjRmllbGQsIGRlc2NGaWVsZFdyYXApXG4gICAgICAgICYmIHV0aWxzLm15VmFsaWRhdGUuZGF0ZShkYXRlRmllbGQsIGRhdGVGaWVsZFdyYXApXG4gICAgICAgICYmIHV0aWxzLm15VmFsaWRhdGUucmFkaW8oW2hpZ2hGaWVsZCwgbWVkaXVtRmllbGQsIGxvd0ZpZWxkXSwgcHJpb3JpdHkpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhuZXcgVG9kbyhcbiAgICAgICAgdGl0bGVGaWVsZC52YWx1ZSxcbiAgICAgICAgZGVzY0ZpZWxkLnZhbHVlLFxuICAgICAgICBkYXRlRmllbGQudmFsdWUsXG4gICAgICAgIGFzc2lnblByaW9yaXR5KGhpZ2hGaWVsZCwgbWVkaXVtRmllbGQpLFxuICAgICAgICBub3Rlc0ZpZWxkLnZhbHVlLFxuICAgICAgKSk7XG5cbiAgICAgIHV0aWxzLmNsZWFyVmFsdWUoW3RpdGxlRmllbGRdKTtcbiAgICAgIHV0aWxzLmNsZWFyVmFsdWUoW2Rlc2NGaWVsZF0pO1xuICAgICAgdXRpbHMuY2xlYXJWYWx1ZShbZGF0ZUZpZWxkXSk7XG4gICAgICB1dGlscy5jbGVhclJhZGlvKFtoaWdoRmllbGQsIG1lZGl1bUZpZWxkLCBsb3dGaWVsZF0pO1xuICAgICAgdXRpbHMuY2xlYXJWYWx1ZShbbm90ZXNGaWVsZF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkV3JhcCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0ZpZWxkV3JhcCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkV3JhcCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBmb3JtLmFwcGVuZENoaWxkKG5vdGVzRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIHsgbm9kZTogZm9ybSwgaWQ6IGZvcm0uaWQgfTtcbn1cblxuZnVuY3Rpb24gdGFza0Zvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWZvcm0nKTtcblxuICBjb25zdCBuYW1lRmllbGRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hbWVGaWVsZFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG5cbiAgY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBuYW1lJyk7XG5cbiAgbmFtZUZpZWxkV3JhcC5hcHBlbmRDaGlsZChuYW1lRmllbGQpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtYnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQUREJztcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWxzLnJlbW92ZUVycm9ycyhmb3JtKTtcbiAgICBpZiAodXRpbHMubXlWYWxpZGF0ZS50ZXh0KG5hbWVGaWVsZCwgbmFtZUZpZWxkV3JhcCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKG5ldyBUYXNrKG5hbWVGaWVsZCkpO1xuICAgICAgdXRpbHMuY2xlYXJWYWx1ZShbbmFtZUZpZWxkXSk7XG4gICAgfVxuICB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKG5hbWVGaWVsZFdyYXApO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmNvbnN0IGZvcm1zID0ge1xuICBwcm9qZWN0OiBwcm9qZWN0Rm9ybSgpLFxuICB0b2RvOiB0b2RvRm9ybSgpLFxuICB0YXNrOiB0YXNrRm9ybSgpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKHNpdGVUaXRsZSkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2l0ZS10aXRsZScpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IHNpdGVUaXRsZTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SGVhZGVyO1xuIiwiaW1wb3J0IG5hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9mb3Jtcyc7XG5cbmZ1bmN0aW9uIGxpc3RQcm9qZWN0cyhwcm9qZWN0QXJyKSB7XG4gIGNvbnN0IG9iamVjdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb2JqZWN0V3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai13cmFwJyk7XG5cbiAgb2JqZWN0V3JhcC5hcHBlbmRDaGlsZChuYXYubWFpbihwcm9qZWN0QXJyLmxlbmd0aCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG9iamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvYmplY3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWl0ZW0nKTtcblxuICAgIGNvbnN0IG9iamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBvYmplY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZScpO1xuICAgIG9iamVjdFRpdGxlLmlubmVySFRNTCA9IGAke3Byb2plY3RBcnJbaV0udGl0bGV9ICgke3Byb2plY3RBcnJbaV0uY291bnQoKX0pYDtcblxuICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbC1idXR0b24nKTtcbiAgICBkZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5pbm5lckhUTUwgPSAnZGVsSWNvbic7XG5cbiAgICBvYmplY3RJdGVtLmFwcGVuZENoaWxkKG9iamVjdFRpdGxlKTtcbiAgICBvYmplY3RJdGVtLmFwcGVuZENoaWxkKGRlbEJ1dHRvbik7XG5cbiAgICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG9iamVjdEl0ZW0pO1xuICB9XG4gIHJldHVybiBvYmplY3RXcmFwO1xufVxuXG5mdW5jdGlvbiBMaXN0VGFza3ModGFza0Fycikge1xuICBjb25zdCB0YXNrV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrV3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2std3JhcCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jYXJkJyk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jb21wbGV0aW9uLXN0YXRlJyk7XG4gICAgc3RhdGUuaW5uZXJIVE1MID0gJ2NoZWNrZWRJY29uJztcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stbmFtZScpO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gYCR7dGFza0FycltpXS5uYW1lfWA7XG5cbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChzdGF0ZSk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICB0YXNrV3JhcC5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gIH1cbiAgcmV0dXJuIHRhc2tXcmFwO1xufVxuXG5mdW5jdGlvbiBtYWtlQ2FyZFRpdGxlKHRvZG9PYmopIHtcbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS13cmFwJyk7XG5cbiAgY29uc3QgdGl0bGVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlTGVmdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1sZWZ0Jyk7XG5cbiAgY29uc3QgdGl0bGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1pbmZvJyk7XG5cbiAgY29uc3QgcHJpb3JpdHlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaW9yaXR5QmFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktYmFyJyk7XG5cbiAgdGl0bGVJbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5QmFyKTtcblxuICBjb25zdCB0aXRsZUNsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXRsZUNsb2NrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUtY2xvY2snKTtcbiAgdGl0bGVDbG9jay5pbm5lckhUTUwgPSAnY2xvY2tJY29uJztcblxuICB0aXRsZUluZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuXG4gIGNvbnN0IG9iamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgb2JqZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdGl0bGUnKTtcbiAgb2JqZWN0VGl0bGUuaW5uZXJIVE1MID0gYCR7dG9kb09iai50aXRsZX0gKCR7dG9kb09iai5jb3VudENvbXBsZXRlKCl9LyR7dG9kb09iai5jb3VudCgpfSlgO1xuXG4gIHRpdGxlTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUluZm8pO1xuICB0aXRsZUxlZnQuYXBwZW5kQ2hpbGQob2JqZWN0VGl0bGUpO1xuXG4gIGNvbnN0IHRpdGxlUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVSaWdodC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1yaWdodCcpO1xuXG4gIGNvbnN0IG9iamVjdFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RUb2dnbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdG9nZ2xlJyk7XG4gIG9iamVjdFRvZ2dsZS5pbm5lckhUTUwgPSAnZHJvcGRvd25JY29uJztcblxuICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVMZWZ0KTtcbiAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHRpdGxlUmlnaHQpO1xuXG4gIHJldHVybiBjYXJkVGl0bGU7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkQm9keSh0b2RvT2JqKSB7XG4gIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXdyYXAnKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotZHVlLWRhdGUnKTtcblxuICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZVRleHQuaW5uZXJIVE1MID0gYER1ZSBEYXRlOiAke3RvZG9PYmouZHVlRGF0ZX1gO1xuXG4gIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuXG4gIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRyb2xzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNvbnRyb2xzJyk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotcHJpb3JpdHknKTtcblxuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvdy1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lZGl1bS1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcblxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGlnaC1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG5cbiAgY29uc3QgY29tcGxldGlvblN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXBsZXRpb25TdGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1jb21wbGV0aW9uLXN0YXRlJyk7XG4gIGNvbXBsZXRpb25TdGF0ZS5pbm5lckhUTUwgPSAnY2hlY2tlZEljb24nO1xuXG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQoY29tcGxldGlvblN0YXRlKTtcblxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotZGVzYycpO1xuICBkZXNjLmlubmVySFRNTCA9IGAke3RvZG9PYmouZGVzY31gO1xuXG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLW5vdGVzJyk7XG4gIG5vdGVzLmlubmVySFRNTCA9IGAke3RvZG9PYmoubm90ZXN9YDtcblxuICBjb25zdCB0YXNrcyA9IExpc3RUYXNrcyh0b2RvT2JqLnRhc2tzKTtcblxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQobm90ZXMpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChmb3Jtcy50YXNrKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQodGFza3MpO1xuXG4gIHJldHVybiBjYXJkQm9keTtcbn1cblxuZnVuY3Rpb24gbGlzdFRvZG9zKHByb2plY3RPYmopIHtcbiAgY29uc3QgdG9kb0FyciA9IHByb2plY3RPYmoudG9kb3M7XG4gIGNvbnN0IG9iamVjdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb2JqZWN0V3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai13cmFwJyk7XG5cbiAgb2JqZWN0V3JhcC5hcHBlbmRDaGlsZChuYXYucHJvamVjdChwcm9qZWN0T2JqLnRpdGxlLCB0b2RvQXJyLmxlbmd0aCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG9iamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvYmplY3RDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IG1ha2VDYXJkVGl0bGUodG9kb0FycltpXSk7XG4gICAgY29uc3QgY2FyZEJvZHkgPSBtYWtlQ2FyZEJvZHkodG9kb0FycltpXSk7XG5cbiAgICBvYmplY3RDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgb2JqZWN0Q2FyZC5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG5cbiAgICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG9iamVjdENhcmQpO1xuICB9XG4gIHJldHVybiBvYmplY3RXcmFwO1xufVxuXG5jb25zdCBsaXN0ID0ge1xuICBwcm9qZWN0czogbGlzdFByb2plY3RzLFxuICB0b2RvczogbGlzdFRvZG9zLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGlzdDtcbiIsImltcG9ydCBmb3JtcyBmcm9tICcuL2Zvcm1zJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gbWFpbk5hdihwcm9qZWN0c0NvdW50KSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gIGhlYWRpbmcuaW5uZXJIVE1MID0gYFByb2plY3RzICgke3Byb2plY3RzQ291bnR9KWA7XG5cbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgbmV3UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gIG5ld1Byb2plY3RCdG4uaW5uZXJIVE1MID0gJ25ldyBwcm9qZWN0JztcbiAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlscy50b2dnbGVGb3JtKG5ld1Byb2plY3RCdG4sIGZvcm1zLnByb2plY3QsIG5hdiwgJ25ldyBwcm9qZWN0JywgJ2Nsb3NlJyk7XG4gIH0pO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbmF2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIHByb2plY3ROYXYocHJvamVjdFRpdGxlLCB0b2Rvc0NvdW50KSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcblxuICBjb25zdCBiYWNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYmFja0ljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xuICBiYWNrSWNvbi5pbm5lckhUTUwgPSAnYmFja0ljb24nO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IGAke3Byb2plY3RUaXRsZX0gKCR7dG9kb3NDb3VudH0pYDtcblxuICBjb25zdCBuZXd0b2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld3RvZG9CdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBuZXd0b2RvQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWl0ZW0nKTtcbiAgbmV3dG9kb0J0bi5pbm5lckhUTUwgPSAnbmV3IHRvZG8nO1xuICBuZXd0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWxzLnRvZ2dsZUZvcm0obmV3dG9kb0J0biwgZm9ybXMudG9kbywgbmF2LCAnbmV3IHRvZG8nLCAnY2xvc2UnKTtcbiAgfSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGJhY2tJY29uKTtcbiAgbmF2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBuYXYuYXBwZW5kQ2hpbGQobmV3dG9kb0J0bik7XG4gIHJldHVybiBuYXY7XG59XG5cbmNvbnN0IG5hdiA9IHtcbiAgbWFpbjogbWFpbk5hdixcbiAgcHJvamVjdDogcHJvamVjdE5hdixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5hdjtcbiIsImNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdyYXAnKTtcblxuLy8gaXQgaXMgaW1wb3J0YW50IHRvIHVzZSBjbG9vc3VyZSB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIHRvZ2dsZSBlZmZlY3Q7XG5mdW5jdGlvbiB0b2dnbGUoKSB7XG4gIGxldCBzdGF0ZSA9IGZhbHNlO1xuICByZXR1cm4gKGJ1dHRvbk5vZGUsIGZvcm0sIHBhcmVudE5vZGUsIGRlZmF1bHRUZXh0LCBvcGVuVGV4dCkgPT4ge1xuICAgIHN0YXRlID0gIXN0YXRlO1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmb3JtLm5vZGUpO1xuICAgICAgYnV0dG9uTm9kZS5pbm5lckhUTUwgPSBvcGVuVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtLmlkKSk7XG4gICAgICBidXR0b25Ob2RlLmlubmVySFRNTCA9IGRlZmF1bHRUZXh0O1xuICAgIH1cbiAgfTtcbn1cbi8vIHRoZSB1c2Ugb2YgY2x1c29yZSBpcyBpbXBvcnRhbnRcbmNvbnN0IHRvZ2dsZUZvcm0gPSB0b2dnbGUoKTtcblxuZnVuY3Rpb24gY2xlYXJWYWx1ZShpbnB1dEZpZWxkQXJyKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRGaWVsZEFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlucHV0RmllbGRBcnJbaV0udmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlRXJyb3JNZXNzYWdlKHRhZywgbWVzc2FnZSkge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1lcnJvcicpO1xuICBub2RlLmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcnJvcnMoZm9ybSkge1xuICBjb25zdCB0YXJnZXQgPSBmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tZXJyb3InKTtcbiAgaWYgKHRhcmdldCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0YXJnZXRbaV0ucmVtb3ZlKHRhcmdldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFcnJvcihpbnB1dEZpZWxkV3JhcCkge1xuICBpbnB1dEZpZWxkV3JhcC5hcHBlbmRDaGlsZChtYWtlRXJyb3JNZXNzYWdlKCdwJywgJ3JlcXVpcmVkJykpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRleHRJbnB1dChpbnB1dEZpZWxkLCBpbnB1dEZpZWxkV3JhcCkge1xuICBpZiAoaW5wdXRGaWVsZC52YWx1ZS50cmltKCkubGVuZ3RoID49IDEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBkaXNwbGF5RXJyb3IoaW5wdXRGaWVsZFdyYXApO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUmFkaW9JbnB1dChpbnB1dEZpZWxkQXJyLCBpbnB1dEZpZWxkV3JhcCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmllbGRBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaW5wdXRGaWVsZEFycltpXS5jaGVja2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgZGlzcGxheUVycm9yKGlucHV0RmllbGRXcmFwKTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGVJbnB1dChpbnB1dEZpZWxkLCBpbnB1dEZpZWxkV3JhcCkge1xuICBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoRGF0ZSgpKTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoYCR7ZGF0ZU5vdy5nZXRGdWxsWWVhcigpfS0ke2RhdGVOb3cuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZU5vdy5nZXREYXRlKCl9YCk7XG4gIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShpbnB1dEZpZWxkLnZhbHVlKTtcbiAgaWYgKChpbnB1dEZpZWxkLnZhbHVlICE9PSAnJykgJiYgKG5vdyA8PSBkdWVEYXRlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGRpc3BsYXlFcnJvcihpbnB1dEZpZWxkV3JhcCk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2xlYXJSYWRpbyhhcnIpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnJbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICB9XG59XG5cbmNvbnN0IG15VmFsaWRhdGUgPSB7XG4gIHRleHQ6IHZhbGlkYXRlVGV4dElucHV0LFxuICByYWRpbzogdmFsaWRhdGVSYWRpb0lucHV0LFxuICBkYXRlOiB2YWxpZGF0ZURhdGVJbnB1dCxcbn07XG5cbmNvbnN0IHV0aWxzID0ge1xuICBwYXJlbnQsXG4gIHRvZ2dsZUZvcm0sXG4gIG15VmFsaWRhdGUsXG4gIGRpc3BsYXlFcnJvcixcbiAgcmVtb3ZlRXJyb3JzLFxuICBjbGVhclZhbHVlLFxuICBjbGVhclJhZGlvLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iLCJmdW5jdGlvbiBQcm9qZWN0KHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy50b2RvcyA9IFtdO1xufVxuXG5Qcm9qZWN0LnByb3RvdHlwZS5hZGRUb2RvID0gZnVuY3Rpb24gYWRkVG9kbyh0b2RvT2JqKSB7XG4gIHRoaXMudG9kb3MucHVzaCh0b2RvT2JqKTtcbiAgcmV0dXJuIHRoaXMudG9kb3MubGVuZ3RoO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUucmVtb3ZlVG9kbyA9IGZ1bmN0aW9uIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICByZXR1cm4gdGhpcy50b2Rvcy5sZW5ndGg7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KCkge1xuICByZXR1cm4gdGhpcy50b2Rvcy5sZW5ndGg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiZnVuY3Rpb24gVGFzayhuYW1lKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG59XG5cblRhc2sucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gbWFya0NvbXBsZXRlZCh0b2RvT2JqKSB7XG4gIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgdG9kb09iai50YXNrc0NvbXBsZXRlZCArPSAxO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzYyA9IGRlc2M7XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB0aGlzLnRhc2tzID0gW107XG4gIHRoaXMudGFza3NDb21wbGV0ZWQgPSAwO1xufVxuXG5Ub2RvLnByb3RvdHlwZS5lZGl0ID0gZnVuY3Rpb24gZWRpdCh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjID0gZGVzYztcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5jaGFuZ2VQcmlvcml0eSA9IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KHByaW9yaXR5KSB7XG4gIGlmIChwcmlvcml0eSA9PT0gJ2hpZ2gnIHx8IHByaW9yaXR5ID09PSAnbWVkaXVtJyB8fCBwcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn07XG5cblRvZG8ucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbn07XG5cblRvZG8ucHJvdG90eXBlLmFkZFRhc2sgPSBmdW5jdGlvbiBhZGRUYXNrKHRhc2tPYmopIHtcbiAgdGhpcy50YXNrcy5wdXNoKHRhc2tPYmopO1xuICByZXR1cm4gdGhpcy50YXNrcy5sZW5ndGg7XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KCkge1xuICByZXR1cm4gdGhpcy50YXNrcy5sZW5ndGg7XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5jb3VudENvbXBsZXRlID0gZnVuY3Rpb24gY291bnRDb21wbGV0ZSgpIHtcbiAgcmV0dXJuIHRoaXMudGFza3NDb21wbGV0ZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheUhlYWRlciBmcm9tICcuL2RvbS9oZWFkZXInO1xuaW1wb3J0IGxpc3QgZnJvbSAnLi9kb20vbGlzdCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td3JhcCcpO1xubWFpbi5hcHBlbmRDaGlsZChkaXNwbGF5SGVhZGVyKCdCaW5nbycpKTtcbm1haW4uYXBwZW5kQ2hpbGQobGlzdC50b2RvcyhkYXRhLnByb2plY3RzWzBdKSk7XG4vLyBtYWluLmFwcGVuZENoaWxkKGZvcm1zLnByb2plY3QpO1xuLy8gbWFpbi5hcHBlbmRDaGlsZChmb3Jtcy50b2RvKTtcbi8vIG1haW4uYXBwZW5kQ2hpbGQoZm9ybXMudGFzayk7XG5tYWluLmFwcGVuZENoaWxkKGxpc3QucHJvamVjdHMoZGF0YS5wcm9qZWN0cykpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==