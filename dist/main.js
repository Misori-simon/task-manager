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

function todoForm() {
  const form = document.createElement('form');
  form.setAttribute('class', 'todo-form');

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

  return form;
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
function mainNav(projectsCount) {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'header');
  const navItems = [`Projects (${projectsCount})`, 'new project'];
  for (let i = 0; i < 2; i += 1) {
    const heading = document.createElement('h2');
    heading.setAttribute('class', 'nav-item');
    heading.innerHTML = navItems[i];
    nav.appendChild(heading);
  }
  return nav;
}

function projectNav(projectTitle, todosCount) {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'header');
  const navItems = ['backIcon', `${projectTitle} (${todosCount})`, 'plusIcon'];
  for (let i = 0; i < navItems.length; i += 1) {
    const heading = document.createElement('h2');
    heading.setAttribute('class', 'nav-item');
    heading.innerHTML = navItems[i];
    nav.appendChild(heading);
  }
  return nav;
}

const nav = {
  main: mainNav,
  project: projectNav,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);


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
/* harmony import */ var _dom_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/forms */ "./src/dom/forms.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/data.js");





const main = document.getElementById('main-wrap');
main.appendChild((0,_dom_header__WEBPACK_IMPORTED_MODULE_0__.default)('Bingo'));
main.appendChild(_dom_list__WEBPACK_IMPORTED_MODULE_1__.default.todos(_data__WEBPACK_IMPORTED_MODULE_3__.default.projects[0]));
main.appendChild(_dom_forms__WEBPACK_IMPORTED_MODULE_2__.default.project);
main.appendChild(_dom_forms__WEBPACK_IMPORTED_MODULE_2__.default.todo);
main.appendChild(_dom_forms__WEBPACK_IMPORTED_MODULE_2__.default.task);
main.appendChild(_dom_list__WEBPACK_IMPORTED_MODULE_1__.default.projects(_data__WEBPACK_IMPORTED_MODULE_3__.default.projects));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2Zvcm1zLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vaGVhZGVyLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vbGlzdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL25hdi5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTjtBQUNBOztBQUUxQjtBQUNBLE1BQU0sNkNBQU87QUFDYixNQUFNLDZDQUFPO0FBQ2IsTUFBTSw2Q0FBTztBQUNiLE1BQU0sNkNBQU87QUFDYjs7QUFFQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWLE1BQU0sMENBQUk7QUFDVixNQUFNLDBDQUFJO0FBQ1YsTUFBTSwwQ0FBSTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjOztBQUVkLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0SXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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LHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDWDtBQUNFO0FBQ047O0FBRTFCO0FBQ0EsaUJBQWlCLG9EQUFhO0FBQzlCLGlCQUFpQixvREFBVSxDQUFDLHNEQUFnQjtBQUM1QyxpQkFBaUIsdURBQWE7QUFDOUIsaUJBQWlCLG9EQUFVO0FBQzNCLGlCQUFpQixvREFBVTtBQUMzQixpQkFBaUIsdURBQWEsQ0FBQyxtREFBYSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgT25lJyksXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IFR3bycpLFxuICBuZXcgUHJvamVjdCgnUHJvamVjdCBUaHJlZScpLFxuICBuZXcgUHJvamVjdCgnUHJvamVjdCBGb3VyJyksXG5dO1xuXG5jb25zdCB0b2RvcyA9IFtcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgT25lJyxcbiAgICAnVGVzdCB0b2RvIHByb3BlcnRpZXMnLFxuICAgICcyNi8wNS8yMDIwJyxcbiAgICAnaGlnaCcsXG4gICAgJ1Rlc3QgdXNpbmcgamVzdCcsXG4gICAgJ3BlbmRpbmcnLFxuICApLFxuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBUd28nLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IFRocmVlJyxcbiAgICAnVGVzdCB0b2RvIHByb3BlcnRpZXMnLFxuICAgICcyNi8wNS8yMDIwJyxcbiAgICAnaGlnaCcsXG4gICAgJ1Rlc3QgdXNpbmcgamVzdCcsXG4gICAgJ3BlbmRpbmcnLFxuICApLFxuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBGb3VyJyxcbiAgICAnVGVzdCB0b2RvIHByb3BlcnRpZXMnLFxuICAgICcyNi8wNS8yMDIwJyxcbiAgICAnaGlnaCcsXG4gICAgJ1Rlc3QgdXNpbmcgamVzdCcsXG4gICAgJ3BlbmRpbmcnLFxuICApLFxuXTtcblxuY29uc3QgdGFza3MgPSBbXG4gIG5ldyBUYXNrKCdUYXNrIE9uZScpLFxuICBuZXcgVGFzaygnVGFzayBUd28nKSxcbiAgbmV3IFRhc2soJ1Rhc2sgVGhyZWUnKSxcbiAgbmV3IFRhc2soJ1Rhc2sgRm91cicpLFxuXTtcblxucHJvamVjdHNbMF0uYWRkVG9kbyh0b2Rvc1sxXSk7XG5wcm9qZWN0c1swXS5hZGRUb2RvKHRvZG9zWzJdKTtcblxucHJvamVjdHNbMl0uYWRkVG9kbyh0b2Rvc1sxXSk7XG5wcm9qZWN0c1syXS5hZGRUb2RvKHRvZG9zWzJdKTtcbnByb2plY3RzWzJdLmFkZFRvZG8odG9kb3NbM10pO1xuXG50b2Rvc1sxXS5hZGRUYXNrKHRhc2tzWzFdKTtcbnRvZG9zWzFdLmFkZFRhc2sodGFza3NbMl0pO1xuXG50b2Rvc1syXS5hZGRUYXNrKHRhc2tzWzFdKTtcbnRvZG9zWzJdLmFkZFRhc2sodGFza3NbMl0pO1xudG9kb3NbMl0uYWRkVGFzayh0YXNrc1szXSk7XG5cbnRhc2tzWzFdLmNvbXBsZXRlKHRvZG9zWzFdKTtcbnRhc2tzWzFdLmNvbXBsZXRlKHRvZG9zWzJdKTtcbnRhc2tzWzJdLmNvbXBsZXRlKHRvZG9zWzJdKTtcblxuY29uc3QgZGF0YSA9IHsgcHJvamVjdHMgfTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiIsImZ1bmN0aW9uIHByb2plY3RGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1mb3JtJyk7XG5cbiAgY29uc3QgdGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgVGl0bGUnKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bicpO1xuICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FERCc7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiB0b2RvRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tZm9ybScpO1xuXG4gIGNvbnN0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUb2RvIFRpdGxlJyk7XG5cbiAgY29uc3QgZGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGVzY0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgZGVzY0ZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVG9kbyBEZXNjcmlwdGlvbicpO1xuXG4gIGNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG4gIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RvZG8gRGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LXdyYXAnKTtcblxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWl0ZW0nKTtcblxuICBjb25zdCBoaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhpZ2hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWxhYmVsJyk7XG4gIGhpZ2hMYWJlbC5pbm5lckhUTUwgPSAnaGlnaCc7XG5cbiAgY29uc3QgaGlnaEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaGlnaEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBoaWdoRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG5cbiAgaGlnaFByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hMYWJlbCk7XG4gIGhpZ2hQcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoRmllbGQpO1xuXG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWl0ZW0nKTtcblxuICBjb25zdCBtZWRpdW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVkaXVtTGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1sYWJlbCcpO1xuICBtZWRpdW1MYWJlbC5pbm5lckhUTUwgPSAnbWVkaXVtJztcblxuICBjb25zdCBtZWRpdW1GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG1lZGl1bUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBtZWRpdW1GaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcblxuICBtZWRpdW1Qcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1MYWJlbCk7XG4gIG1lZGl1bVByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bUZpZWxkKTtcblxuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1pdGVtJyk7XG5cbiAgY29uc3QgbG93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxvd0xhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbGFiZWwnKTtcbiAgbG93TGFiZWwuaW5uZXJIVE1MID0gJ2xvdyc7XG5cbiAgY29uc3QgbG93RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBsb3dGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgbG93RmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG5cbiAgbG93UHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuICBsb3dQcmlvcml0eS5hcHBlbmRDaGlsZChsb3dGaWVsZCk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbiAgY29uc3Qgbm90ZXNGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIG5vdGVzRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbm90ZXNGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtYXJlYScpO1xuICBub3Rlc0ZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQWRkIE5vdGVzJyk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1idG4nKTtcbiAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBREQnO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0ZpZWxkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChub3Rlc0ZpZWxkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiB0YXNrRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stZm9ybScpO1xuXG4gIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG4gIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgbmFtZScpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtYnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQUREJztcblxuICBmb3JtLmFwcGVuZENoaWxkKG5hbWVGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICByZXR1cm4gZm9ybTtcbn1cblxuY29uc3QgZm9ybXMgPSB7XG4gIHByb2plY3Q6IHByb2plY3RGb3JtKCksXG4gIHRvZG86IHRvZG9Gb3JtKCksXG4gIHRhc2s6IHRhc2tGb3JtKCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsImZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoc2l0ZVRpdGxlKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaXRlLXRpdGxlJyk7XG4gIGhlYWRpbmcuaW5uZXJIVE1MID0gc2l0ZVRpdGxlO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIZWFkZXI7XG4iLCJpbXBvcnQgbmF2IGZyb20gJy4vbmF2JztcblxuZnVuY3Rpb24gbGlzdFByb2plY3RzKHByb2plY3RBcnIpIHtcbiAgY29uc3Qgb2JqZWN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXdyYXAnKTtcblxuICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG5hdi5tYWluKHByb2plY3RBcnIubGVuZ3RoKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgb2JqZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9iamVjdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotaXRlbScpO1xuXG4gICAgY29uc3Qgb2JqZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9iamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlJyk7XG4gICAgb2JqZWN0VGl0bGUuaW5uZXJIVE1MID0gYCR7cHJvamVjdEFycltpXS50aXRsZX0gKCR7cHJvamVjdEFycltpXS5jb3VudCgpfSlgO1xuXG4gICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsLWJ1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLmlubmVySFRNTCA9ICdkZWxJY29uJztcblxuICAgIG9iamVjdEl0ZW0uYXBwZW5kQ2hpbGQob2JqZWN0VGl0bGUpO1xuICAgIG9iamVjdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcblxuICAgIG9iamVjdFdyYXAuYXBwZW5kQ2hpbGQob2JqZWN0SXRlbSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFdyYXA7XG59XG5cbmZ1bmN0aW9uIExpc3RUYXNrcyh0YXNrQXJyKSB7XG4gIGNvbnN0IHRhc2tXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay13cmFwJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNhcmQnKTtcblxuICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNvbXBsZXRpb24tc3RhdGUnKTtcbiAgICBzdGF0ZS5pbm5lckhUTUwgPSAnY2hlY2tlZEljb24nO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1uYW1lJyk7XG4gICAgbmFtZS5pbm5lckhUTUwgPSBgJHt0YXNrQXJyW2ldLm5hbWV9YDtcblxuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHN0YXRlKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIHRhc2tXcmFwLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfVxuICByZXR1cm4gdGFza1dyYXA7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkVGl0bGUodG9kb09iaikge1xuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXdyYXAnKTtcblxuICBjb25zdCB0aXRsZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVMZWZ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLWxlZnQnKTtcblxuICBjb25zdCB0aXRsZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLWluZm8nKTtcblxuICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJpb3JpdHlCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1iYXInKTtcblxuICB0aXRsZUluZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuXG4gIGNvbnN0IHRpdGxlQ2xvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRpdGxlQ2xvY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1jbG9jaycpO1xuICB0aXRsZUNsb2NrLmlubmVySFRNTCA9ICdjbG9ja0ljb24nO1xuXG4gIHRpdGxlSW5mby5hcHBlbmRDaGlsZChwcmlvcml0eUJhcik7XG5cbiAgY29uc3Qgb2JqZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBvYmplY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZScpO1xuICBvYmplY3RUaXRsZS5pbm5lckhUTUwgPSBgJHt0b2RvT2JqLnRpdGxlfSAoJHt0b2RvT2JqLmNvdW50Q29tcGxldGUoKX0vJHt0b2RvT2JqLmNvdW50KCl9KWA7XG5cbiAgdGl0bGVMZWZ0LmFwcGVuZENoaWxkKHRpdGxlSW5mbyk7XG4gIHRpdGxlTGVmdC5hcHBlbmRDaGlsZChvYmplY3RUaXRsZSk7XG5cbiAgY29uc3QgdGl0bGVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZVJpZ2h0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXJpZ2h0Jyk7XG5cbiAgY29uc3Qgb2JqZWN0VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9iamVjdFRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10b2dnbGUnKTtcbiAgb2JqZWN0VG9nZ2xlLmlubmVySFRNTCA9ICdkcm9wZG93bkljb24nO1xuXG4gIGNhcmRUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZUxlZnQpO1xuICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVSaWdodCk7XG5cbiAgcmV0dXJuIGNhcmRUaXRsZTtcbn1cblxuZnVuY3Rpb24gbWFrZUNhcmRCb2R5KHRvZG9PYmopIHtcbiAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdGl0bGUtd3JhcCcpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1kdWUtZGF0ZScpO1xuXG4gIGNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkdWVEYXRlVGV4dC5pbm5lckhUTUwgPSBgRHVlIERhdGU6ICR7dG9kb09iai5kdWVEYXRlfWA7XG5cbiAgZHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlVGV4dCk7XG5cbiAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udHJvbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotY29udHJvbHMnKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1wcmlvcml0eScpO1xuXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG93LXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVkaXVtLXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoaWdoLXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuICBjb25zdCBjb21wbGV0aW9uU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcGxldGlvblN0YXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNvbXBsZXRpb24tc3RhdGUnKTtcbiAgY29tcGxldGlvblN0YXRlLmlubmVySFRNTCA9ICdjaGVja2VkSWNvbic7XG5cbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChjb21wbGV0aW9uU3RhdGUpO1xuXG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1kZXNjJyk7XG4gIGRlc2MuaW5uZXJIVE1MID0gYCR7dG9kb09iai5kZXNjfWA7XG5cbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90ZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotbm90ZXMnKTtcbiAgbm90ZXMuaW5uZXJIVE1MID0gYCR7dG9kb09iai5ub3Rlc31gO1xuXG4gIGNvbnN0IHRhc2tzID0gTGlzdFRhc2tzKHRvZG9PYmoudGFza3MpO1xuXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChjb250cm9scyk7XG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGRlc2MpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChub3Rlcyk7XG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRhc2tzKTtcblxuICByZXR1cm4gY2FyZEJvZHk7XG59XG5cbmZ1bmN0aW9uIGxpc3RUb2Rvcyhwcm9qZWN0T2JqKSB7XG4gIGNvbnN0IHRvZG9BcnIgPSBwcm9qZWN0T2JqLnRvZG9zO1xuICBjb25zdCBvYmplY3RXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9iamVjdFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotd3JhcCcpO1xuXG4gIG9iamVjdFdyYXAuYXBwZW5kQ2hpbGQobmF2LnByb2plY3QocHJvamVjdE9iai50aXRsZSwgdG9kb0Fyci5sZW5ndGgpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBvYmplY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb2JqZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1jYXJkJyk7XG5cbiAgICBjb25zdCBjYXJkVGl0bGUgPSBtYWtlQ2FyZFRpdGxlKHRvZG9BcnJbaV0pO1xuICAgIGNvbnN0IGNhcmRCb2R5ID0gbWFrZUNhcmRCb2R5KHRvZG9BcnJbaV0pO1xuXG4gICAgb2JqZWN0Q2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgIG9iamVjdENhcmQuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xuXG4gICAgb2JqZWN0V3JhcC5hcHBlbmRDaGlsZChvYmplY3RDYXJkKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0V3JhcDtcbn1cblxuY29uc3QgbGlzdCA9IHtcbiAgcHJvamVjdHM6IGxpc3RQcm9qZWN0cyxcbiAgdG9kb3M6IGxpc3RUb2Rvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3Q7XG4iLCJmdW5jdGlvbiBtYWluTmF2KHByb2plY3RzQ291bnQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcicpO1xuICBjb25zdCBuYXZJdGVtcyA9IFtgUHJvamVjdHMgKCR7cHJvamVjdHNDb3VudH0pYCwgJ25ldyBwcm9qZWN0J107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSArPSAxKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBuYXZJdGVtc1tpXTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIH1cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE5hdihwcm9qZWN0VGl0bGUsIHRvZG9zQ291bnQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcicpO1xuICBjb25zdCBuYXZJdGVtcyA9IFsnYmFja0ljb24nLCBgJHtwcm9qZWN0VGl0bGV9ICgke3RvZG9zQ291bnR9KWAsICdwbHVzSWNvbiddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBuYXZJdGVtc1tpXTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIH1cbiAgcmV0dXJuIG5hdjtcbn1cblxuY29uc3QgbmF2ID0ge1xuICBtYWluOiBtYWluTmF2LFxuICBwcm9qZWN0OiBwcm9qZWN0TmF2LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2O1xuIiwiZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMudG9kb3MgPSBbXTtcbn1cblxuUHJvamVjdC5wcm90b3R5cGUuYWRkVG9kbyA9IGZ1bmN0aW9uIGFkZFRvZG8odG9kb09iaikge1xuICB0aGlzLnRvZG9zLnB1c2godG9kb09iaik7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLnJlbW92ZVRvZG8gPSBmdW5jdGlvbiByZW1vdmVUb2RvKGluZGV4KSB7XG4gIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgcmV0dXJuIHRoaXMudG9kb3MubGVuZ3RoO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiBjb3VudCgpIHtcbiAgcmV0dXJuIHRoaXMudG9kb3MubGVuZ3RoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImZ1bmN0aW9uIFRhc2sobmFtZSkge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xufVxuXG5UYXNrLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIG1hcmtDb21wbGV0ZWQodG9kb09iaikge1xuICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gIHRvZG9PYmoudGFza3NDb21wbGV0ZWQgKz0gMTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJmdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2MgPSBkZXNjO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMubm90ZXMgPSBub3RlcztcbiAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgdGhpcy50YXNrcyA9IFtdO1xuICB0aGlzLnRhc2tzQ29tcGxldGVkID0gMDtcbn1cblxuVG9kby5wcm90b3R5cGUuZWRpdCA9IGZ1bmN0aW9uIGVkaXQodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzYyA9IGRlc2M7XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5ub3RlcyA9IG5vdGVzO1xufTtcblxuVG9kby5wcm90b3R5cGUuY2hhbmdlUHJpb3JpdHkgPSBmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShwcmlvcml0eSkge1xuICBpZiAocHJpb3JpdHkgPT09ICdoaWdoJyB8fCBwcmlvcml0eSA9PT0gJ21lZGl1bScgfHwgcHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5hZGRUYXNrID0gZnVuY3Rpb24gYWRkVGFzayh0YXNrT2JqKSB7XG4gIHRoaXMudGFza3MucHVzaCh0YXNrT2JqKTtcbiAgcmV0dXJuIHRoaXMudGFza3MubGVuZ3RoO1xufTtcblxuVG9kby5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiBjb3VudCgpIHtcbiAgcmV0dXJuIHRoaXMudGFza3MubGVuZ3RoO1xufTtcblxuVG9kby5wcm90b3R5cGUuY291bnRDb21wbGV0ZSA9IGZ1bmN0aW9uIGNvdW50Q29tcGxldGUoKSB7XG4gIHJldHVybiB0aGlzLnRhc2tzQ29tcGxldGVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRpc3BsYXlIZWFkZXIgZnJvbSAnLi9kb20vaGVhZGVyJztcbmltcG9ydCBsaXN0IGZyb20gJy4vZG9tL2xpc3QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vZG9tL2Zvcm1zJztcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13cmFwJyk7XG5tYWluLmFwcGVuZENoaWxkKGRpc3BsYXlIZWFkZXIoJ0JpbmdvJykpO1xubWFpbi5hcHBlbmRDaGlsZChsaXN0LnRvZG9zKGRhdGEucHJvamVjdHNbMF0pKTtcbm1haW4uYXBwZW5kQ2hpbGQoZm9ybXMucHJvamVjdCk7XG5tYWluLmFwcGVuZENoaWxkKGZvcm1zLnRvZG8pO1xubWFpbi5hcHBlbmRDaGlsZChmb3Jtcy50YXNrKTtcbm1haW4uYXBwZW5kQ2hpbGQobGlzdC5wcm9qZWN0cyhkYXRhLnByb2plY3RzKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9