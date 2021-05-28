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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/dom/utils.js");
// import Project from '../project';
// import Todo from '../todo';


function projectForm() {
  const form = document.createElement('form');
  form.setAttribute('class', 'project-form');
  form.id = 'project-form';

  const titleField = document.createElement('input');
  titleField.setAttribute('type', 'text');
  titleField.setAttribute('class', 'text-field');
  titleField.setAttribute('placeholder', 'Project Title');
  titleField.setAttribute('required', 'required');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('class', 'add-btn');
  submitBtn.innerHTML = 'ADD';
  submitBtn.addEventListener('click', () => {
    if (_utils__WEBPACK_IMPORTED_MODULE_0__.default.myValidate.text(titleField)) {
      // console.log(new Project(titleField.value));
    } else {
      // error message;
    }
  });

  form.appendChild(titleField);
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

  const titleField = document.createElement('input');
  titleField.setAttribute('type', 'text');
  titleField.setAttribute('class', 'text-field');
  titleField.setAttribute('placeholder', 'Todo Title');

  const descField = document.createElement('input');
  descField.setAttribute('type', 'text');
  descField.setAttribute('class', 'text-field');
  descField.setAttribute('placeholder', 'Todo Description');

  const dateField = document.createElement('input');
  dateField.setAttribute('type', 'date');
  dateField.setAttribute('class', 'text-field');
  dateField.setAttribute('placeholder', 'Todo Description');

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
    if (_utils__WEBPACK_IMPORTED_MODULE_0__.default.myValidate.text(titleField)
        && _utils__WEBPACK_IMPORTED_MODULE_0__.default.myValidate.text(descField)
        && _utils__WEBPACK_IMPORTED_MODULE_0__.default.myValidate.date(dateField)
        && _utils__WEBPACK_IMPORTED_MODULE_0__.default.myValidate.radio([highField, mediumField, lowField])
    ) {
      // console.log(new Todo(
      //   titleField.value,
      //   descField.value,
      //   dateField.value,
      //   assignPriority(highField, mediumField),
      //   notesField.value,
      // ));
    } else {
      // console.log('error');
    }
  });

  form.appendChild(titleField);
  form.appendChild(descField);
  form.appendChild(dateField);
  form.appendChild(priority);
  form.appendChild(notesField);
  form.appendChild(submitBtn);

  return { node: form, id: form.id };
}

function taskForm() {
  const form = document.createElement('form');
  form.setAttribute('class', 'task-form');

  const nameField = document.createElement('input');
  nameField.setAttribute('type', 'text');
  nameField.setAttribute('class', 'text-field');
  nameField.setAttribute('placeholder', 'Task name');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('class', 'add-btn');
  submitBtn.innerHTML = 'ADD';
  submitBtn.addEventListener('click', () => {
    if (_utils__WEBPACK_IMPORTED_MODULE_0__.default.myValidate.text(nameField)) {
      // console.log(new Todo(nameField));
    } else {
      // display errors
    }
  });

  form.appendChild(nameField);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2Zvcm1zLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vaGVhZGVyLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vbGlzdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL25hdi5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL3V0aWxzLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNOO0FBQ0E7O0FBRTFCO0FBQ0EsTUFBTSw2Q0FBTztBQUNiLE1BQU0sNkNBQU87QUFDYixNQUFNLDZDQUFPO0FBQ2IsTUFBTSw2Q0FBTztBQUNiOztBQUVBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDBDQUFJO0FBQ1YsTUFBTSwwQ0FBSTtBQUNWLE1BQU0sMENBQUk7QUFDVixNQUFNLDBDQUFJO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7O0FBRWQsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekVwQjtBQUNBO0FBQzRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFxQjtBQUM3QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBcUI7QUFDN0IsV0FBVywyREFBcUI7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QUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ1g7QUFDSjs7QUFFMUI7QUFDQSxpQkFBaUIsb0RBQWE7QUFDOUIsaUJBQWlCLG9EQUFVLENBQUMsc0RBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBYSxDQUFDLG1EQUFhIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICBuZXcgUHJvamVjdCgnUHJvamVjdCBPbmUnKSxcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgVHdvJyksXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IFRocmVlJyksXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IEZvdXInKSxcbl07XG5cbmNvbnN0IHRvZG9zID0gW1xuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBPbmUnLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IFR3bycsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgVGhyZWUnLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IEZvdXInLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG5dO1xuXG5jb25zdCB0YXNrcyA9IFtcbiAgbmV3IFRhc2soJ1Rhc2sgT25lJyksXG4gIG5ldyBUYXNrKCdUYXNrIFR3bycpLFxuICBuZXcgVGFzaygnVGFzayBUaHJlZScpLFxuICBuZXcgVGFzaygnVGFzayBGb3VyJyksXG5dO1xuXG5wcm9qZWN0c1swXS5hZGRUb2RvKHRvZG9zWzFdKTtcbnByb2plY3RzWzBdLmFkZFRvZG8odG9kb3NbMl0pO1xuXG5wcm9qZWN0c1syXS5hZGRUb2RvKHRvZG9zWzFdKTtcbnByb2plY3RzWzJdLmFkZFRvZG8odG9kb3NbMl0pO1xucHJvamVjdHNbMl0uYWRkVG9kbyh0b2Rvc1szXSk7XG5cbnRvZG9zWzFdLmFkZFRhc2sodGFza3NbMV0pO1xudG9kb3NbMV0uYWRkVGFzayh0YXNrc1syXSk7XG5cbnRvZG9zWzJdLmFkZFRhc2sodGFza3NbMV0pO1xudG9kb3NbMl0uYWRkVGFzayh0YXNrc1syXSk7XG50b2Rvc1syXS5hZGRUYXNrKHRhc2tzWzNdKTtcblxudGFza3NbMV0uY29tcGxldGUodG9kb3NbMV0pO1xudGFza3NbMV0uY29tcGxldGUodG9kb3NbMl0pO1xudGFza3NbMl0uY29tcGxldGUodG9kb3NbMl0pO1xuXG5jb25zdCBkYXRhID0geyBwcm9qZWN0cyB9O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIiwiLy8gaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vcHJvamVjdCc7XG4vLyBpbXBvcnQgVG9kbyBmcm9tICcuLi90b2RvJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWZvcm0nKTtcbiAgZm9ybS5pZCA9ICdwcm9qZWN0LWZvcm0nO1xuXG4gIGNvbnN0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtYnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQUREJztcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh1dGlscy5teVZhbGlkYXRlLnRleHQodGl0bGVGaWVsZCkpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ldyBQcm9qZWN0KHRpdGxlRmllbGQudmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXJyb3IgbWVzc2FnZTtcbiAgICB9XG4gIH0pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICByZXR1cm4geyBub2RlOiBmb3JtLCBpZDogZm9ybS5pZCB9O1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Qcmlvcml0eShoaWdoLCBtZWRpdW0pIHtcbiAgaWYgKGhpZ2guY2hlY2tlZCkgeyByZXR1cm4gJ2hpZ2gnOyB9XG4gIGlmIChtZWRpdW0uY2hlY2tlZCkgeyByZXR1cm4gJ21lZGl1bSc7IH1cbiAgcmV0dXJuICdsb3cnO1xufVxuXG5mdW5jdGlvbiB0b2RvRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tZm9ybScpO1xuICBmb3JtLmlkID0gJ3RvZG8tZm9ybSc7XG5cbiAgY29uc3QgdGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RvZG8gVGl0bGUnKTtcblxuICBjb25zdCBkZXNjRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkZXNjRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZGVzY0ZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1maWVsZCcpO1xuICBkZXNjRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUb2RvIERlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgZGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVG9kbyBEZXNjcmlwdGlvbicpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktd3JhcCcpO1xuXG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktaXRlbScpO1xuXG4gIGNvbnN0IGhpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaGlnaExhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbGFiZWwnKTtcbiAgaGlnaExhYmVsLmlubmVySFRNTCA9ICdoaWdoJztcblxuICBjb25zdCBoaWdoRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBoaWdoRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGhpZ2hGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcblxuICBoaWdoUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcbiAgaGlnaFByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hGaWVsZCk7XG5cbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktaXRlbScpO1xuXG4gIGNvbnN0IG1lZGl1bUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZWRpdW1MYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWxhYmVsJyk7XG4gIG1lZGl1bUxhYmVsLmlubmVySFRNTCA9ICdtZWRpdW0nO1xuXG4gIGNvbnN0IG1lZGl1bUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbWVkaXVtRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIG1lZGl1bUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuXG4gIG1lZGl1bVByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bUxhYmVsKTtcbiAgbWVkaXVtUHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtRmllbGQpO1xuXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWl0ZW0nKTtcblxuICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbG93TGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1sYWJlbCcpO1xuICBsb3dMYWJlbC5pbm5lckhUTUwgPSAnbG93JztcblxuICBjb25zdCBsb3dGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxvd0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBsb3dGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcblxuICBsb3dQcmlvcml0eS5hcHBlbmRDaGlsZChsb3dMYWJlbCk7XG4gIGxvd1ByaW9yaXR5LmFwcGVuZENoaWxkKGxvd0ZpZWxkKTtcblxuICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICBjb25zdCBub3Rlc0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbm90ZXNGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBub3Rlc0ZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1hcmVhJyk7XG4gIG5vdGVzRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgTm90ZXMnKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bicpO1xuICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FERCc7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodXRpbHMubXlWYWxpZGF0ZS50ZXh0KHRpdGxlRmllbGQpXG4gICAgICAgICYmIHV0aWxzLm15VmFsaWRhdGUudGV4dChkZXNjRmllbGQpXG4gICAgICAgICYmIHV0aWxzLm15VmFsaWRhdGUuZGF0ZShkYXRlRmllbGQpXG4gICAgICAgICYmIHV0aWxzLm15VmFsaWRhdGUucmFkaW8oW2hpZ2hGaWVsZCwgbWVkaXVtRmllbGQsIGxvd0ZpZWxkXSlcbiAgICApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ldyBUb2RvKFxuICAgICAgLy8gICB0aXRsZUZpZWxkLnZhbHVlLFxuICAgICAgLy8gICBkZXNjRmllbGQudmFsdWUsXG4gICAgICAvLyAgIGRhdGVGaWVsZC52YWx1ZSxcbiAgICAgIC8vICAgYXNzaWduUHJpb3JpdHkoaGlnaEZpZWxkLCBtZWRpdW1GaWVsZCksXG4gICAgICAvLyAgIG5vdGVzRmllbGQudmFsdWUsXG4gICAgICAvLyApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgfVxuICB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobm90ZXNGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICByZXR1cm4geyBub2RlOiBmb3JtLCBpZDogZm9ybS5pZCB9O1xufVxuXG5mdW5jdGlvbiB0YXNrRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stZm9ybScpO1xuXG4gIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG4gIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgbmFtZScpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtYnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQUREJztcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh1dGlscy5teVZhbGlkYXRlLnRleHQobmFtZUZpZWxkKSkge1xuICAgICAgLy8gY29uc29sZS5sb2cobmV3IFRvZG8obmFtZUZpZWxkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRpc3BsYXkgZXJyb3JzXG4gICAgfVxuICB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKG5hbWVGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICByZXR1cm4gZm9ybTtcbn1cblxuY29uc3QgZm9ybXMgPSB7XG4gIHByb2plY3Q6IHByb2plY3RGb3JtKCksXG4gIHRvZG86IHRvZG9Gb3JtKCksXG4gIHRhc2s6IHRhc2tGb3JtKCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsImZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoc2l0ZVRpdGxlKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaXRlLXRpdGxlJyk7XG4gIGhlYWRpbmcuaW5uZXJIVE1MID0gc2l0ZVRpdGxlO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIZWFkZXI7XG4iLCJpbXBvcnQgbmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCBmb3JtcyBmcm9tICcuL2Zvcm1zJztcblxuZnVuY3Rpb24gbGlzdFByb2plY3RzKHByb2plY3RBcnIpIHtcbiAgY29uc3Qgb2JqZWN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXdyYXAnKTtcblxuICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG5hdi5tYWluKHByb2plY3RBcnIubGVuZ3RoKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgb2JqZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9iamVjdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotaXRlbScpO1xuXG4gICAgY29uc3Qgb2JqZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9iamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlJyk7XG4gICAgb2JqZWN0VGl0bGUuaW5uZXJIVE1MID0gYCR7cHJvamVjdEFycltpXS50aXRsZX0gKCR7cHJvamVjdEFycltpXS5jb3VudCgpfSlgO1xuXG4gICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsLWJ1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLmlubmVySFRNTCA9ICdkZWxJY29uJztcblxuICAgIG9iamVjdEl0ZW0uYXBwZW5kQ2hpbGQob2JqZWN0VGl0bGUpO1xuICAgIG9iamVjdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcblxuICAgIG9iamVjdFdyYXAuYXBwZW5kQ2hpbGQob2JqZWN0SXRlbSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFdyYXA7XG59XG5cbmZ1bmN0aW9uIExpc3RUYXNrcyh0YXNrQXJyKSB7XG4gIGNvbnN0IHRhc2tXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay13cmFwJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNhcmQnKTtcblxuICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNvbXBsZXRpb24tc3RhdGUnKTtcbiAgICBzdGF0ZS5pbm5lckhUTUwgPSAnY2hlY2tlZEljb24nO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1uYW1lJyk7XG4gICAgbmFtZS5pbm5lckhUTUwgPSBgJHt0YXNrQXJyW2ldLm5hbWV9YDtcblxuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHN0YXRlKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIHRhc2tXcmFwLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfVxuICByZXR1cm4gdGFza1dyYXA7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkVGl0bGUodG9kb09iaikge1xuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXdyYXAnKTtcblxuICBjb25zdCB0aXRsZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVMZWZ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLWxlZnQnKTtcblxuICBjb25zdCB0aXRsZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLWluZm8nKTtcblxuICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJpb3JpdHlCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1iYXInKTtcblxuICB0aXRsZUluZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuXG4gIGNvbnN0IHRpdGxlQ2xvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRpdGxlQ2xvY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1jbG9jaycpO1xuICB0aXRsZUNsb2NrLmlubmVySFRNTCA9ICdjbG9ja0ljb24nO1xuXG4gIHRpdGxlSW5mby5hcHBlbmRDaGlsZChwcmlvcml0eUJhcik7XG5cbiAgY29uc3Qgb2JqZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBvYmplY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZScpO1xuICBvYmplY3RUaXRsZS5pbm5lckhUTUwgPSBgJHt0b2RvT2JqLnRpdGxlfSAoJHt0b2RvT2JqLmNvdW50Q29tcGxldGUoKX0vJHt0b2RvT2JqLmNvdW50KCl9KWA7XG5cbiAgdGl0bGVMZWZ0LmFwcGVuZENoaWxkKHRpdGxlSW5mbyk7XG4gIHRpdGxlTGVmdC5hcHBlbmRDaGlsZChvYmplY3RUaXRsZSk7XG5cbiAgY29uc3QgdGl0bGVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZVJpZ2h0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXJpZ2h0Jyk7XG5cbiAgY29uc3Qgb2JqZWN0VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9iamVjdFRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10b2dnbGUnKTtcbiAgb2JqZWN0VG9nZ2xlLmlubmVySFRNTCA9ICdkcm9wZG93bkljb24nO1xuXG4gIGNhcmRUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZUxlZnQpO1xuICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVSaWdodCk7XG5cbiAgcmV0dXJuIGNhcmRUaXRsZTtcbn1cblxuZnVuY3Rpb24gbWFrZUNhcmRCb2R5KHRvZG9PYmopIHtcbiAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdGl0bGUtd3JhcCcpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1kdWUtZGF0ZScpO1xuXG4gIGNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkdWVEYXRlVGV4dC5pbm5lckhUTUwgPSBgRHVlIERhdGU6ICR7dG9kb09iai5kdWVEYXRlfWA7XG5cbiAgZHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlVGV4dCk7XG5cbiAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udHJvbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotY29udHJvbHMnKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1wcmlvcml0eScpO1xuXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG93LXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVkaXVtLXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoaWdoLXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuICBjb25zdCBjb21wbGV0aW9uU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcGxldGlvblN0YXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNvbXBsZXRpb24tc3RhdGUnKTtcbiAgY29tcGxldGlvblN0YXRlLmlubmVySFRNTCA9ICdjaGVja2VkSWNvbic7XG5cbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChjb21wbGV0aW9uU3RhdGUpO1xuXG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1kZXNjJyk7XG4gIGRlc2MuaW5uZXJIVE1MID0gYCR7dG9kb09iai5kZXNjfWA7XG5cbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90ZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotbm90ZXMnKTtcbiAgbm90ZXMuaW5uZXJIVE1MID0gYCR7dG9kb09iai5ub3Rlc31gO1xuXG4gIGNvbnN0IHRhc2tzID0gTGlzdFRhc2tzKHRvZG9PYmoudGFza3MpO1xuXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChjb250cm9scyk7XG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGRlc2MpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChub3Rlcyk7XG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGZvcm1zLnRhc2spO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZCh0YXNrcyk7XG5cbiAgcmV0dXJuIGNhcmRCb2R5O1xufVxuXG5mdW5jdGlvbiBsaXN0VG9kb3MocHJvamVjdE9iaikge1xuICBjb25zdCB0b2RvQXJyID0gcHJvamVjdE9iai50b2RvcztcbiAgY29uc3Qgb2JqZWN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXdyYXAnKTtcblxuICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG5hdi5wcm9qZWN0KHByb2plY3RPYmoudGl0bGUsIHRvZG9BcnIubGVuZ3RoKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgb2JqZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9iamVjdENhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZFRpdGxlID0gbWFrZUNhcmRUaXRsZSh0b2RvQXJyW2ldKTtcbiAgICBjb25zdCBjYXJkQm9keSA9IG1ha2VDYXJkQm9keSh0b2RvQXJyW2ldKTtcblxuICAgIG9iamVjdENhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBvYmplY3RDYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcblxuICAgIG9iamVjdFdyYXAuYXBwZW5kQ2hpbGQob2JqZWN0Q2FyZCk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFdyYXA7XG59XG5cbmNvbnN0IGxpc3QgPSB7XG4gIHByb2plY3RzOiBsaXN0UHJvamVjdHMsXG4gIHRvZG9zOiBsaXN0VG9kb3MsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0O1xuIiwiaW1wb3J0IGZvcm1zIGZyb20gJy4vZm9ybXMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBtYWluTmF2KHByb2plY3RzQ291bnQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWl0ZW0nKTtcbiAgaGVhZGluZy5pbm5lckhUTUwgPSBgUHJvamVjdHMgKCR7cHJvamVjdHNDb3VudH0pYDtcblxuICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWl0ZW0nKTtcbiAgbmV3UHJvamVjdEJ0bi5pbm5lckhUTUwgPSAnbmV3IHByb2plY3QnO1xuICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWxzLnRvZ2dsZUZvcm0obmV3UHJvamVjdEJ0biwgZm9ybXMucHJvamVjdCwgbmF2LCAnbmV3IHByb2plY3QnLCAnY2xvc2UnKTtcbiAgfSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBuYXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE5hdihwcm9qZWN0VGl0bGUsIHRvZG9zQ291bnQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGJhY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBiYWNrSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gIGJhY2tJY29uLmlubmVySFRNTCA9ICdiYWNrSWNvbic7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gIGhlYWRpbmcuaW5uZXJIVE1MID0gYCR7cHJvamVjdFRpdGxlfSAoJHt0b2Rvc0NvdW50fSlgO1xuXG4gIGNvbnN0IG5ld3RvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3dG9kb0J0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIG5ld3RvZG9CdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xuICBuZXd0b2RvQnRuLmlubmVySFRNTCA9ICduZXcgdG9kbyc7XG4gIG5ld3RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbHMudG9nZ2xlRm9ybShuZXd0b2RvQnRuLCBmb3Jtcy50b2RvLCBuYXYsICduZXcgdG9kbycsICdjbG9zZScpO1xuICB9KTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoYmFja0ljb24pO1xuICBuYXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIG5hdi5hcHBlbmRDaGlsZChuZXd0b2RvQnRuKTtcbiAgcmV0dXJuIG5hdjtcbn1cblxuY29uc3QgbmF2ID0ge1xuICBtYWluOiBtYWluTmF2LFxuICBwcm9qZWN0OiBwcm9qZWN0TmF2LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2O1xuIiwiY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td3JhcCcpO1xuXG4vLyBpdCBpcyBpbXBvcnRhbnQgdG8gdXNlIGNsb29zdXJlIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgdG9nZ2xlIGVmZmVjdDtcbmZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgbGV0IHN0YXRlID0gZmFsc2U7XG4gIHJldHVybiAoYnV0dG9uTm9kZSwgZm9ybSwgcGFyZW50Tm9kZSwgZGVmYXVsdFRleHQsIG9wZW5UZXh0KSA9PiB7XG4gICAgc3RhdGUgPSAhc3RhdGU7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGZvcm0ubm9kZSk7XG4gICAgICBidXR0b25Ob2RlLmlubmVySFRNTCA9IG9wZW5UZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm0uaWQpKTtcbiAgICAgIGJ1dHRvbk5vZGUuaW5uZXJIVE1MID0gZGVmYXVsdFRleHQ7XG4gICAgfVxuICB9O1xufVxuLy8gdGhlIHVzZSBvZiBjbHVzb3JlIGlzIGltcG9ydGFudFxuY29uc3QgdG9nZ2xlRm9ybSA9IHRvZ2dsZSgpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVRleHRJbnB1dChpbnB1dEZpZWxkKSB7XG4gIGlmIChpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKS5sZW5ndGggPj0gMykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVSYWRpb0lucHV0KGlucHV0RmllbGRBcnIpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dEZpZWxkQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGlucHV0RmllbGRBcnJbaV0uY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlSW5wdXQoaW5wdXRGaWVsZCkge1xuICBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoRGF0ZSgpKTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoYCR7ZGF0ZU5vdy5nZXRGdWxsWWVhcigpfS0ke2RhdGVOb3cuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZU5vdy5nZXREYXRlKCl9YCk7XG4gIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShpbnB1dEZpZWxkLnZhbHVlKTtcbiAgaWYgKChpbnB1dEZpZWxkLnZhbHVlID09PSAnJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG5vdyA8PSBkdWVEYXRlO1xufVxuXG5jb25zdCBteVZhbGlkYXRlID0ge1xuICB0ZXh0OiB2YWxpZGF0ZVRleHRJbnB1dCxcbiAgcmFkaW86IHZhbGlkYXRlUmFkaW9JbnB1dCxcbiAgZGF0ZTogdmFsaWRhdGVEYXRlSW5wdXQsXG59O1xuXG5jb25zdCB1dGlscyA9IHsgcGFyZW50LCB0b2dnbGVGb3JtLCBteVZhbGlkYXRlIH07XG5leHBvcnQgZGVmYXVsdCB1dGlscztcbiIsImZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLnRvZG9zID0gW107XG59XG5cblByb2plY3QucHJvdG90eXBlLmFkZFRvZG8gPSBmdW5jdGlvbiBhZGRUb2RvKHRvZG9PYmopIHtcbiAgdGhpcy50b2Rvcy5wdXNoKHRvZG9PYmopO1xuICByZXR1cm4gdGhpcy50b2Rvcy5sZW5ndGg7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5yZW1vdmVUb2RvID0gZnVuY3Rpb24gcmVtb3ZlVG9kbyhpbmRleCkge1xuICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJmdW5jdGlvbiBUYXNrKG5hbWUpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbn1cblxuVGFzay5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBtYXJrQ29tcGxldGVkKHRvZG9PYmopIHtcbiAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICB0b2RvT2JqLnRhc2tzQ29tcGxldGVkICs9IDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjID0gZGVzYztcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIHRoaXMudGFza3MgPSBbXTtcbiAgdGhpcy50YXNrc0NvbXBsZXRlZCA9IDA7XG59XG5cblRvZG8ucHJvdG90eXBlLmVkaXQgPSBmdW5jdGlvbiBlZGl0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2MgPSBkZXNjO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMubm90ZXMgPSBub3Rlcztcbn07XG5cblRvZG8ucHJvdG90eXBlLmNoYW5nZVByaW9yaXR5ID0gZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgaWYgKHByaW9yaXR5ID09PSAnaGlnaCcgfHwgcHJpb3JpdHkgPT09ICdtZWRpdW0nIHx8IHByaW9yaXR5ID09PSAnbG93Jykge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufTtcblxuVG9kby5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xufTtcblxuVG9kby5wcm90b3R5cGUuYWRkVGFzayA9IGZ1bmN0aW9uIGFkZFRhc2sodGFza09iaikge1xuICB0aGlzLnRhc2tzLnB1c2godGFza09iaik7XG4gIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aDtcbn07XG5cblRvZG8ucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aDtcbn07XG5cblRvZG8ucHJvdG90eXBlLmNvdW50Q29tcGxldGUgPSBmdW5jdGlvbiBjb3VudENvbXBsZXRlKCkge1xuICByZXR1cm4gdGhpcy50YXNrc0NvbXBsZXRlZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5SGVhZGVyIGZyb20gJy4vZG9tL2hlYWRlcic7XG5pbXBvcnQgbGlzdCBmcm9tICcuL2RvbS9saXN0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13cmFwJyk7XG5tYWluLmFwcGVuZENoaWxkKGRpc3BsYXlIZWFkZXIoJ0JpbmdvJykpO1xubWFpbi5hcHBlbmRDaGlsZChsaXN0LnRvZG9zKGRhdGEucHJvamVjdHNbMF0pKTtcbi8vIG1haW4uYXBwZW5kQ2hpbGQoZm9ybXMucHJvamVjdCk7XG4vLyBtYWluLmFwcGVuZENoaWxkKGZvcm1zLnRvZG8pO1xuLy8gbWFpbi5hcHBlbmRDaGlsZChmb3Jtcy50YXNrKTtcbm1haW4uYXBwZW5kQ2hpbGQobGlzdC5wcm9qZWN0cyhkYXRhLnByb2plY3RzKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9