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
function projectForm() {
  const form = document.createElement('form');
  form.setAttribute('class', 'project-form');
  form.id = 'project-form';

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

  return { node: form, id: form.id };
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
      buttonNode.innerHTML = defaultText;
    } else {
      parentNode.removeChild(document.getElementById(form.id));
      buttonNode.innerHTML = openText;
    }
  };
}

const toggleForm = toggle();

const utils = { parent, toggleForm };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2Zvcm1zLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vaGVhZGVyLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vbGlzdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL25hdi5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL3V0aWxzLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNOO0FBQ0E7O0FBRTFCO0FBQ0EsTUFBTSw2Q0FBTztBQUNiLE1BQU0sNkNBQU87QUFDYixNQUFNLDZDQUFPO0FBQ2IsTUFBTSw2Q0FBTztBQUNiOztBQUVBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDBDQUFJO0FBQ1YsTUFBTSwwQ0FBSTtBQUNWLE1BQU0sMENBQUk7QUFDVixNQUFNLDBDQUFJO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7O0FBRWQsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6RXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDMUNwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ1g7QUFDSjs7QUFFMUI7QUFDQSxpQkFBaUIsb0RBQWE7QUFDOUIsaUJBQWlCLG9EQUFVLENBQUMsc0RBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBYSxDQUFDLG1EQUFhIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICBuZXcgUHJvamVjdCgnUHJvamVjdCBPbmUnKSxcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgVHdvJyksXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IFRocmVlJyksXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IEZvdXInKSxcbl07XG5cbmNvbnN0IHRvZG9zID0gW1xuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBPbmUnLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IFR3bycsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgVGhyZWUnLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IEZvdXInLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG5dO1xuXG5jb25zdCB0YXNrcyA9IFtcbiAgbmV3IFRhc2soJ1Rhc2sgT25lJyksXG4gIG5ldyBUYXNrKCdUYXNrIFR3bycpLFxuICBuZXcgVGFzaygnVGFzayBUaHJlZScpLFxuICBuZXcgVGFzaygnVGFzayBGb3VyJyksXG5dO1xuXG5wcm9qZWN0c1swXS5hZGRUb2RvKHRvZG9zWzFdKTtcbnByb2plY3RzWzBdLmFkZFRvZG8odG9kb3NbMl0pO1xuXG5wcm9qZWN0c1syXS5hZGRUb2RvKHRvZG9zWzFdKTtcbnByb2plY3RzWzJdLmFkZFRvZG8odG9kb3NbMl0pO1xucHJvamVjdHNbMl0uYWRkVG9kbyh0b2Rvc1szXSk7XG5cbnRvZG9zWzFdLmFkZFRhc2sodGFza3NbMV0pO1xudG9kb3NbMV0uYWRkVGFzayh0YXNrc1syXSk7XG5cbnRvZG9zWzJdLmFkZFRhc2sodGFza3NbMV0pO1xudG9kb3NbMl0uYWRkVGFzayh0YXNrc1syXSk7XG50b2Rvc1syXS5hZGRUYXNrKHRhc2tzWzNdKTtcblxudGFza3NbMV0uY29tcGxldGUodG9kb3NbMV0pO1xudGFza3NbMV0uY29tcGxldGUodG9kb3NbMl0pO1xudGFza3NbMl0uY29tcGxldGUodG9kb3NbMl0pO1xuXG5jb25zdCBkYXRhID0geyBwcm9qZWN0cyB9O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIiwiZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWZvcm0nKTtcbiAgZm9ybS5pZCA9ICdwcm9qZWN0LWZvcm0nO1xuXG4gIGNvbnN0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1idG4nKTtcbiAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBREQnO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICByZXR1cm4geyBub2RlOiBmb3JtLCBpZDogZm9ybS5pZCB9O1xufVxuXG5mdW5jdGlvbiB0b2RvRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tZm9ybScpO1xuICBmb3JtLmlkID0gJ3RvZG8tZm9ybSc7XG5cbiAgY29uc3QgdGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RvZG8gVGl0bGUnKTtcblxuICBjb25zdCBkZXNjRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkZXNjRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZGVzY0ZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1maWVsZCcpO1xuICBkZXNjRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUb2RvIERlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgZGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVG9kbyBEZXNjcmlwdGlvbicpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktd3JhcCcpO1xuXG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktaXRlbScpO1xuXG4gIGNvbnN0IGhpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaGlnaExhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbGFiZWwnKTtcbiAgaGlnaExhYmVsLmlubmVySFRNTCA9ICdoaWdoJztcblxuICBjb25zdCBoaWdoRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBoaWdoRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGhpZ2hGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcblxuICBoaWdoUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcbiAgaGlnaFByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hGaWVsZCk7XG5cbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktaXRlbScpO1xuXG4gIGNvbnN0IG1lZGl1bUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZWRpdW1MYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWxhYmVsJyk7XG4gIG1lZGl1bUxhYmVsLmlubmVySFRNTCA9ICdtZWRpdW0nO1xuXG4gIGNvbnN0IG1lZGl1bUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbWVkaXVtRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIG1lZGl1bUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuXG4gIG1lZGl1bVByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bUxhYmVsKTtcbiAgbWVkaXVtUHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtRmllbGQpO1xuXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWl0ZW0nKTtcblxuICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbG93TGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1sYWJlbCcpO1xuICBsb3dMYWJlbC5pbm5lckhUTUwgPSAnbG93JztcblxuICBjb25zdCBsb3dGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxvd0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBsb3dGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcblxuICBsb3dQcmlvcml0eS5hcHBlbmRDaGlsZChsb3dMYWJlbCk7XG4gIGxvd1ByaW9yaXR5LmFwcGVuZENoaWxkKGxvd0ZpZWxkKTtcblxuICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICBjb25zdCBub3Rlc0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbm90ZXNGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBub3Rlc0ZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1hcmVhJyk7XG4gIG5vdGVzRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgTm90ZXMnKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bicpO1xuICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FERCc7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBmb3JtLmFwcGVuZENoaWxkKG5vdGVzRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIHsgbm9kZTogZm9ybSwgaWQ6IGZvcm0uaWQgfTtcbn1cblxuZnVuY3Rpb24gdGFza0Zvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWZvcm0nKTtcblxuICBjb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1maWVsZCcpO1xuICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIG5hbWUnKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bicpO1xuICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FERCc7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmNvbnN0IGZvcm1zID0ge1xuICBwcm9qZWN0OiBwcm9qZWN0Rm9ybSgpLFxuICB0b2RvOiB0b2RvRm9ybSgpLFxuICB0YXNrOiB0YXNrRm9ybSgpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKHNpdGVUaXRsZSkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2l0ZS10aXRsZScpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IHNpdGVUaXRsZTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SGVhZGVyO1xuIiwiaW1wb3J0IG5hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9mb3Jtcyc7XG5cbmZ1bmN0aW9uIGxpc3RQcm9qZWN0cyhwcm9qZWN0QXJyKSB7XG4gIGNvbnN0IG9iamVjdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb2JqZWN0V3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai13cmFwJyk7XG5cbiAgb2JqZWN0V3JhcC5hcHBlbmRDaGlsZChuYXYubWFpbihwcm9qZWN0QXJyLmxlbmd0aCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG9iamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvYmplY3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWl0ZW0nKTtcblxuICAgIGNvbnN0IG9iamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBvYmplY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZScpO1xuICAgIG9iamVjdFRpdGxlLmlubmVySFRNTCA9IGAke3Byb2plY3RBcnJbaV0udGl0bGV9ICgke3Byb2plY3RBcnJbaV0uY291bnQoKX0pYDtcblxuICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbC1idXR0b24nKTtcbiAgICBkZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5pbm5lckhUTUwgPSAnZGVsSWNvbic7XG5cbiAgICBvYmplY3RJdGVtLmFwcGVuZENoaWxkKG9iamVjdFRpdGxlKTtcbiAgICBvYmplY3RJdGVtLmFwcGVuZENoaWxkKGRlbEJ1dHRvbik7XG5cbiAgICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG9iamVjdEl0ZW0pO1xuICB9XG4gIHJldHVybiBvYmplY3RXcmFwO1xufVxuXG5mdW5jdGlvbiBMaXN0VGFza3ModGFza0Fycikge1xuICBjb25zdCB0YXNrV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrV3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2std3JhcCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jYXJkJyk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jb21wbGV0aW9uLXN0YXRlJyk7XG4gICAgc3RhdGUuaW5uZXJIVE1MID0gJ2NoZWNrZWRJY29uJztcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stbmFtZScpO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gYCR7dGFza0FycltpXS5uYW1lfWA7XG5cbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChzdGF0ZSk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICB0YXNrV3JhcC5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gIH1cbiAgcmV0dXJuIHRhc2tXcmFwO1xufVxuXG5mdW5jdGlvbiBtYWtlQ2FyZFRpdGxlKHRvZG9PYmopIHtcbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS13cmFwJyk7XG5cbiAgY29uc3QgdGl0bGVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlTGVmdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1sZWZ0Jyk7XG5cbiAgY29uc3QgdGl0bGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1pbmZvJyk7XG5cbiAgY29uc3QgcHJpb3JpdHlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaW9yaXR5QmFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktYmFyJyk7XG5cbiAgdGl0bGVJbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5QmFyKTtcblxuICBjb25zdCB0aXRsZUNsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXRsZUNsb2NrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUtY2xvY2snKTtcbiAgdGl0bGVDbG9jay5pbm5lckhUTUwgPSAnY2xvY2tJY29uJztcblxuICB0aXRsZUluZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuXG4gIGNvbnN0IG9iamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgb2JqZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdGl0bGUnKTtcbiAgb2JqZWN0VGl0bGUuaW5uZXJIVE1MID0gYCR7dG9kb09iai50aXRsZX0gKCR7dG9kb09iai5jb3VudENvbXBsZXRlKCl9LyR7dG9kb09iai5jb3VudCgpfSlgO1xuXG4gIHRpdGxlTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUluZm8pO1xuICB0aXRsZUxlZnQuYXBwZW5kQ2hpbGQob2JqZWN0VGl0bGUpO1xuXG4gIGNvbnN0IHRpdGxlUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVSaWdodC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1yaWdodCcpO1xuXG4gIGNvbnN0IG9iamVjdFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RUb2dnbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdG9nZ2xlJyk7XG4gIG9iamVjdFRvZ2dsZS5pbm5lckhUTUwgPSAnZHJvcGRvd25JY29uJztcblxuICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVMZWZ0KTtcbiAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHRpdGxlUmlnaHQpO1xuXG4gIHJldHVybiBjYXJkVGl0bGU7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkQm9keSh0b2RvT2JqKSB7XG4gIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXdyYXAnKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotZHVlLWRhdGUnKTtcblxuICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZVRleHQuaW5uZXJIVE1MID0gYER1ZSBEYXRlOiAke3RvZG9PYmouZHVlRGF0ZX1gO1xuXG4gIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuXG4gIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRyb2xzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNvbnRyb2xzJyk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotcHJpb3JpdHknKTtcblxuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvdy1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lZGl1bS1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcblxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGlnaC1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG5cbiAgY29uc3QgY29tcGxldGlvblN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXBsZXRpb25TdGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1jb21wbGV0aW9uLXN0YXRlJyk7XG4gIGNvbXBsZXRpb25TdGF0ZS5pbm5lckhUTUwgPSAnY2hlY2tlZEljb24nO1xuXG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQoY29tcGxldGlvblN0YXRlKTtcblxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotZGVzYycpO1xuICBkZXNjLmlubmVySFRNTCA9IGAke3RvZG9PYmouZGVzY31gO1xuXG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLW5vdGVzJyk7XG4gIG5vdGVzLmlubmVySFRNTCA9IGAke3RvZG9PYmoubm90ZXN9YDtcblxuICBjb25zdCB0YXNrcyA9IExpc3RUYXNrcyh0b2RvT2JqLnRhc2tzKTtcblxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQobm90ZXMpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChmb3Jtcy50YXNrKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQodGFza3MpO1xuXG4gIHJldHVybiBjYXJkQm9keTtcbn1cblxuZnVuY3Rpb24gbGlzdFRvZG9zKHByb2plY3RPYmopIHtcbiAgY29uc3QgdG9kb0FyciA9IHByb2plY3RPYmoudG9kb3M7XG4gIGNvbnN0IG9iamVjdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb2JqZWN0V3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai13cmFwJyk7XG5cbiAgb2JqZWN0V3JhcC5hcHBlbmRDaGlsZChuYXYucHJvamVjdChwcm9qZWN0T2JqLnRpdGxlLCB0b2RvQXJyLmxlbmd0aCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG9iamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvYmplY3RDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IG1ha2VDYXJkVGl0bGUodG9kb0FycltpXSk7XG4gICAgY29uc3QgY2FyZEJvZHkgPSBtYWtlQ2FyZEJvZHkodG9kb0FycltpXSk7XG5cbiAgICBvYmplY3RDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgb2JqZWN0Q2FyZC5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG5cbiAgICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG9iamVjdENhcmQpO1xuICB9XG4gIHJldHVybiBvYmplY3RXcmFwO1xufVxuXG5jb25zdCBsaXN0ID0ge1xuICBwcm9qZWN0czogbGlzdFByb2plY3RzLFxuICB0b2RvczogbGlzdFRvZG9zLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGlzdDtcbiIsImltcG9ydCBmb3JtcyBmcm9tICcuL2Zvcm1zJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gbWFpbk5hdihwcm9qZWN0c0NvdW50KSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gIGhlYWRpbmcuaW5uZXJIVE1MID0gYFByb2plY3RzICgke3Byb2plY3RzQ291bnR9KWA7XG5cbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgbmV3UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gIG5ld1Byb2plY3RCdG4uaW5uZXJIVE1MID0gJ25ldyBwcm9qZWN0JztcbiAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlscy50b2dnbGVGb3JtKG5ld1Byb2plY3RCdG4sIGZvcm1zLnByb2plY3QsIG5hdiwgJ25ldyBwcm9qZWN0JywgJ2Nsb3NlJyk7XG4gIH0pO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbmF2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIHByb2plY3ROYXYocHJvamVjdFRpdGxlLCB0b2Rvc0NvdW50KSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcblxuICBjb25zdCBiYWNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYmFja0ljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xuICBiYWNrSWNvbi5pbm5lckhUTUwgPSAnYmFja0ljb24nO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IGAke3Byb2plY3RUaXRsZX0gKCR7dG9kb3NDb3VudH0pYDtcblxuICBjb25zdCBuZXd0b2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld3RvZG9CdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBuZXd0b2RvQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWl0ZW0nKTtcbiAgbmV3dG9kb0J0bi5pbm5lckhUTUwgPSAnbmV3IHRvZG8nO1xuICBuZXd0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWxzLnRvZ2dsZUZvcm0obmV3dG9kb0J0biwgZm9ybXMudG9kbywgbmF2LCAnbmV3IHRvZG8nLCAnY2xvc2UnKTtcbiAgfSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGJhY2tJY29uKTtcbiAgbmF2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBuYXYuYXBwZW5kQ2hpbGQobmV3dG9kb0J0bik7XG4gIHJldHVybiBuYXY7XG59XG5cbmNvbnN0IG5hdiA9IHtcbiAgbWFpbjogbWFpbk5hdixcbiAgcHJvamVjdDogcHJvamVjdE5hdixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5hdjtcbiIsImNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdyYXAnKTtcblxuLy8gaXQgaXMgaW1wb3J0YW50IHRvIHVzZSBjbG9vc3VyZSB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIHRvZ2dsZSBlZmZlY3Q7XG5mdW5jdGlvbiB0b2dnbGUoKSB7XG4gIGxldCBzdGF0ZSA9IGZhbHNlO1xuICByZXR1cm4gKGJ1dHRvbk5vZGUsIGZvcm0sIHBhcmVudE5vZGUsIGRlZmF1bHRUZXh0LCBvcGVuVGV4dCkgPT4ge1xuICAgIHN0YXRlID0gIXN0YXRlO1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmb3JtLm5vZGUpO1xuICAgICAgYnV0dG9uTm9kZS5pbm5lckhUTUwgPSBkZWZhdWx0VGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtLmlkKSk7XG4gICAgICBidXR0b25Ob2RlLmlubmVySFRNTCA9IG9wZW5UZXh0O1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgdG9nZ2xlRm9ybSA9IHRvZ2dsZSgpO1xuXG5jb25zdCB1dGlscyA9IHsgcGFyZW50LCB0b2dnbGVGb3JtIH07XG5leHBvcnQgZGVmYXVsdCB1dGlscztcbiIsImZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLnRvZG9zID0gW107XG59XG5cblByb2plY3QucHJvdG90eXBlLmFkZFRvZG8gPSBmdW5jdGlvbiBhZGRUb2RvKHRvZG9PYmopIHtcbiAgdGhpcy50b2Rvcy5wdXNoKHRvZG9PYmopO1xuICByZXR1cm4gdGhpcy50b2Rvcy5sZW5ndGg7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5yZW1vdmVUb2RvID0gZnVuY3Rpb24gcmVtb3ZlVG9kbyhpbmRleCkge1xuICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJmdW5jdGlvbiBUYXNrKG5hbWUpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbn1cblxuVGFzay5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBtYXJrQ29tcGxldGVkKHRvZG9PYmopIHtcbiAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICB0b2RvT2JqLnRhc2tzQ29tcGxldGVkICs9IDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjID0gZGVzYztcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIHRoaXMudGFza3MgPSBbXTtcbiAgdGhpcy50YXNrc0NvbXBsZXRlZCA9IDA7XG59XG5cblRvZG8ucHJvdG90eXBlLmVkaXQgPSBmdW5jdGlvbiBlZGl0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2MgPSBkZXNjO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMubm90ZXMgPSBub3Rlcztcbn07XG5cblRvZG8ucHJvdG90eXBlLmNoYW5nZVByaW9yaXR5ID0gZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgaWYgKHByaW9yaXR5ID09PSAnaGlnaCcgfHwgcHJpb3JpdHkgPT09ICdtZWRpdW0nIHx8IHByaW9yaXR5ID09PSAnbG93Jykge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufTtcblxuVG9kby5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xufTtcblxuVG9kby5wcm90b3R5cGUuYWRkVGFzayA9IGZ1bmN0aW9uIGFkZFRhc2sodGFza09iaikge1xuICB0aGlzLnRhc2tzLnB1c2godGFza09iaik7XG4gIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aDtcbn07XG5cblRvZG8ucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aDtcbn07XG5cblRvZG8ucHJvdG90eXBlLmNvdW50Q29tcGxldGUgPSBmdW5jdGlvbiBjb3VudENvbXBsZXRlKCkge1xuICByZXR1cm4gdGhpcy50YXNrc0NvbXBsZXRlZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5SGVhZGVyIGZyb20gJy4vZG9tL2hlYWRlcic7XG5pbXBvcnQgbGlzdCBmcm9tICcuL2RvbS9saXN0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13cmFwJyk7XG5tYWluLmFwcGVuZENoaWxkKGRpc3BsYXlIZWFkZXIoJ0JpbmdvJykpO1xubWFpbi5hcHBlbmRDaGlsZChsaXN0LnRvZG9zKGRhdGEucHJvamVjdHNbMF0pKTtcbi8vIG1haW4uYXBwZW5kQ2hpbGQoZm9ybXMucHJvamVjdCk7XG4vLyBtYWluLmFwcGVuZENoaWxkKGZvcm1zLnRvZG8pO1xuLy8gbWFpbi5hcHBlbmRDaGlsZChmb3Jtcy50YXNrKTtcbm1haW4uYXBwZW5kQ2hpbGQobGlzdC5wcm9qZWN0cyhkYXRhLnByb2plY3RzKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9