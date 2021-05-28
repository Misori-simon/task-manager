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


function ListProjects(projectArr) {
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

function ListTodos(projectObj) {
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

function displayList(objArr, objType) {
  if (objType === 'p' || objType === 'P') {
    return ListProjects(objArr);
  }
  return ListTodos(objArr);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);


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
main.appendChild((0,_dom_list__WEBPACK_IMPORTED_MODULE_1__.default)(_data__WEBPACK_IMPORTED_MODULE_3__.default.projects[2]));
main.appendChild(_dom_forms__WEBPACK_IMPORTED_MODULE_2__.default.project);
main.appendChild(_dom_forms__WEBPACK_IMPORTED_MODULE_2__.default.todo);
main.appendChild(_dom_forms__WEBPACK_IMPORTED_MODULE_2__.default.task);
main.appendChild((0,_dom_list__WEBPACK_IMPORTED_MODULE_1__.default)(_data__WEBPACK_IMPORTED_MODULE_3__.default.projects, 'p'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2Zvcm1zLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vaGVhZGVyLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vbGlzdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL25hdi5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTjtBQUNBOztBQUUxQjtBQUNBLE1BQU0sNkNBQU87QUFDYixNQUFNLDZDQUFPO0FBQ2IsTUFBTSw2Q0FBTztBQUNiLE1BQU0sNkNBQU87QUFDYjs7QUFFQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWLE1BQU0sMENBQUk7QUFDVixNQUFNLDBDQUFJO0FBQ1YsTUFBTSwwQ0FBSTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjOztBQUVkLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0SXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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O1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0o7QUFDTDtBQUNOOztBQUUxQjtBQUNBLGlCQUFpQixvREFBYTtBQUM5QixpQkFBaUIsa0RBQVcsQ0FBQyxzREFBZ0I7QUFDN0MsaUJBQWlCLHVEQUFhO0FBQzlCLGlCQUFpQixvREFBVTtBQUMzQixpQkFBaUIsb0RBQVU7QUFDM0IsaUJBQWlCLGtEQUFXLENBQUMsbURBQWEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IE9uZScpLFxuICBuZXcgUHJvamVjdCgnUHJvamVjdCBUd28nKSxcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgVGhyZWUnKSxcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgRm91cicpLFxuXTtcblxuY29uc3QgdG9kb3MgPSBbXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IE9uZScsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgVHdvJyxcbiAgICAnVGVzdCB0b2RvIHByb3BlcnRpZXMnLFxuICAgICcyNi8wNS8yMDIwJyxcbiAgICAnaGlnaCcsXG4gICAgJ1Rlc3QgdXNpbmcgamVzdCcsXG4gICAgJ3BlbmRpbmcnLFxuICApLFxuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBUaHJlZScsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgRm91cicsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbl07XG5cbmNvbnN0IHRhc2tzID0gW1xuICBuZXcgVGFzaygnVGFzayBPbmUnKSxcbiAgbmV3IFRhc2soJ1Rhc2sgVHdvJyksXG4gIG5ldyBUYXNrKCdUYXNrIFRocmVlJyksXG4gIG5ldyBUYXNrKCdUYXNrIEZvdXInKSxcbl07XG5cbnByb2plY3RzWzBdLmFkZFRvZG8odG9kb3NbMV0pO1xucHJvamVjdHNbMF0uYWRkVG9kbyh0b2Rvc1syXSk7XG5cbnByb2plY3RzWzJdLmFkZFRvZG8odG9kb3NbMV0pO1xucHJvamVjdHNbMl0uYWRkVG9kbyh0b2Rvc1syXSk7XG5wcm9qZWN0c1syXS5hZGRUb2RvKHRvZG9zWzNdKTtcblxudG9kb3NbMV0uYWRkVGFzayh0YXNrc1sxXSk7XG50b2Rvc1sxXS5hZGRUYXNrKHRhc2tzWzJdKTtcblxudG9kb3NbMl0uYWRkVGFzayh0YXNrc1sxXSk7XG50b2Rvc1syXS5hZGRUYXNrKHRhc2tzWzJdKTtcbnRvZG9zWzJdLmFkZFRhc2sodGFza3NbM10pO1xuXG50YXNrc1sxXS5jb21wbGV0ZSh0b2Rvc1sxXSk7XG50YXNrc1sxXS5jb21wbGV0ZSh0b2Rvc1syXSk7XG50YXNrc1syXS5jb21wbGV0ZSh0b2Rvc1syXSk7XG5cbmNvbnN0IGRhdGEgPSB7IHByb2plY3RzIH07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJmdW5jdGlvbiBwcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtZm9ybScpO1xuXG4gIGNvbnN0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1idG4nKTtcbiAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBREQnO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gdG9kb0Zvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLWZvcm0nKTtcblxuICBjb25zdCB0aXRsZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1maWVsZCcpO1xuICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVG9kbyBUaXRsZScpO1xuXG4gIGNvbnN0IGRlc2NGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRlc2NGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBkZXNjRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG4gIGRlc2NGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RvZG8gRGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBkYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1maWVsZCcpO1xuICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUb2RvIERlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS13cmFwJyk7XG5cbiAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1pdGVtJyk7XG5cbiAgY29uc3QgaGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBoaWdoTGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1sYWJlbCcpO1xuICBoaWdoTGFiZWwuaW5uZXJIVE1MID0gJ2hpZ2gnO1xuXG4gIGNvbnN0IGhpZ2hGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGhpZ2hGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgaGlnaEZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuXG4gIGhpZ2hQcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoTGFiZWwpO1xuICBoaWdoUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaEZpZWxkKTtcblxuICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1pdGVtJyk7XG5cbiAgY29uc3QgbWVkaXVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lZGl1bUxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbGFiZWwnKTtcbiAgbWVkaXVtTGFiZWwuaW5uZXJIVE1MID0gJ21lZGl1bSc7XG5cbiAgY29uc3QgbWVkaXVtRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBtZWRpdW1GaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgbWVkaXVtRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG5cbiAgbWVkaXVtUHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtTGFiZWwpO1xuICBtZWRpdW1Qcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1GaWVsZCk7XG5cbiAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktaXRlbScpO1xuXG4gIGNvbnN0IGxvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWxhYmVsJyk7XG4gIGxvd0xhYmVsLmlubmVySFRNTCA9ICdsb3cnO1xuXG4gIGNvbnN0IGxvd0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbG93RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGxvd0ZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuXG4gIGxvd1ByaW9yaXR5LmFwcGVuZENoaWxkKGxvd0xhYmVsKTtcbiAgbG93UHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93RmllbGQpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gIGNvbnN0IG5vdGVzRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBub3Rlc0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5vdGVzRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWFyZWEnKTtcbiAgbm90ZXNGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0FkZCBOb3RlcycpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtYnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQUREJztcblxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobm90ZXNGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gdGFza0Zvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWZvcm0nKTtcblxuICBjb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1maWVsZCcpO1xuICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIG5hbWUnKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bicpO1xuICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FERCc7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmNvbnN0IGZvcm1zID0ge1xuICBwcm9qZWN0OiBwcm9qZWN0Rm9ybSgpLFxuICB0b2RvOiB0b2RvRm9ybSgpLFxuICB0YXNrOiB0YXNrRm9ybSgpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKHNpdGVUaXRsZSkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2l0ZS10aXRsZScpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IHNpdGVUaXRsZTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SGVhZGVyO1xuIiwiaW1wb3J0IG5hdiBmcm9tICcuL25hdic7XG5cbmZ1bmN0aW9uIExpc3RQcm9qZWN0cyhwcm9qZWN0QXJyKSB7XG4gIGNvbnN0IG9iamVjdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb2JqZWN0V3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai13cmFwJyk7XG5cbiAgb2JqZWN0V3JhcC5hcHBlbmRDaGlsZChuYXYubWFpbihwcm9qZWN0QXJyLmxlbmd0aCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG9iamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvYmplY3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWl0ZW0nKTtcblxuICAgIGNvbnN0IG9iamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBvYmplY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZScpO1xuICAgIG9iamVjdFRpdGxlLmlubmVySFRNTCA9IGAke3Byb2plY3RBcnJbaV0udGl0bGV9ICgke3Byb2plY3RBcnJbaV0uY291bnQoKX0pYDtcblxuICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbC1idXR0b24nKTtcbiAgICBkZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5pbm5lckhUTUwgPSAnZGVsSWNvbic7XG5cbiAgICBvYmplY3RJdGVtLmFwcGVuZENoaWxkKG9iamVjdFRpdGxlKTtcbiAgICBvYmplY3RJdGVtLmFwcGVuZENoaWxkKGRlbEJ1dHRvbik7XG5cbiAgICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG9iamVjdEl0ZW0pO1xuICB9XG4gIHJldHVybiBvYmplY3RXcmFwO1xufVxuXG5mdW5jdGlvbiBMaXN0VGFza3ModGFza0Fycikge1xuICBjb25zdCB0YXNrV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrV3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2std3JhcCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jYXJkJyk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jb21wbGV0aW9uLXN0YXRlJyk7XG4gICAgc3RhdGUuaW5uZXJIVE1MID0gJ2NoZWNrZWRJY29uJztcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stbmFtZScpO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gYCR7dGFza0FycltpXS5uYW1lfWA7XG5cbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChzdGF0ZSk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICB0YXNrV3JhcC5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gIH1cbiAgcmV0dXJuIHRhc2tXcmFwO1xufVxuXG5mdW5jdGlvbiBtYWtlQ2FyZFRpdGxlKHRvZG9PYmopIHtcbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS13cmFwJyk7XG5cbiAgY29uc3QgdGl0bGVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlTGVmdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1sZWZ0Jyk7XG5cbiAgY29uc3QgdGl0bGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1pbmZvJyk7XG5cbiAgY29uc3QgcHJpb3JpdHlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaW9yaXR5QmFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktYmFyJyk7XG5cbiAgdGl0bGVJbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5QmFyKTtcblxuICBjb25zdCB0aXRsZUNsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXRsZUNsb2NrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUtY2xvY2snKTtcbiAgdGl0bGVDbG9jay5pbm5lckhUTUwgPSAnY2xvY2tJY29uJztcblxuICB0aXRsZUluZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuXG4gIGNvbnN0IG9iamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgb2JqZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdGl0bGUnKTtcbiAgb2JqZWN0VGl0bGUuaW5uZXJIVE1MID0gYCR7dG9kb09iai50aXRsZX0gKCR7dG9kb09iai5jb3VudENvbXBsZXRlKCl9LyR7dG9kb09iai5jb3VudCgpfSlgO1xuXG4gIHRpdGxlTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUluZm8pO1xuICB0aXRsZUxlZnQuYXBwZW5kQ2hpbGQob2JqZWN0VGl0bGUpO1xuXG4gIGNvbnN0IHRpdGxlUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVSaWdodC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1yaWdodCcpO1xuXG4gIGNvbnN0IG9iamVjdFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RUb2dnbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdG9nZ2xlJyk7XG4gIG9iamVjdFRvZ2dsZS5pbm5lckhUTUwgPSAnZHJvcGRvd25JY29uJztcblxuICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVMZWZ0KTtcbiAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHRpdGxlUmlnaHQpO1xuXG4gIHJldHVybiBjYXJkVGl0bGU7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkQm9keSh0b2RvT2JqKSB7XG4gIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXdyYXAnKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotZHVlLWRhdGUnKTtcblxuICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZVRleHQuaW5uZXJIVE1MID0gYER1ZSBEYXRlOiAke3RvZG9PYmouZHVlRGF0ZX1gO1xuXG4gIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuXG4gIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRyb2xzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNvbnRyb2xzJyk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotcHJpb3JpdHknKTtcblxuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvdy1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lZGl1bS1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcblxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGlnaC1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG5cbiAgY29uc3QgY29tcGxldGlvblN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXBsZXRpb25TdGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1jb21wbGV0aW9uLXN0YXRlJyk7XG4gIGNvbXBsZXRpb25TdGF0ZS5pbm5lckhUTUwgPSAnY2hlY2tlZEljb24nO1xuXG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQoY29tcGxldGlvblN0YXRlKTtcblxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotZGVzYycpO1xuICBkZXNjLmlubmVySFRNTCA9IGAke3RvZG9PYmouZGVzY31gO1xuXG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLW5vdGVzJyk7XG4gIG5vdGVzLmlubmVySFRNTCA9IGAke3RvZG9PYmoubm90ZXN9YDtcblxuICBjb25zdCB0YXNrcyA9IExpc3RUYXNrcyh0b2RvT2JqLnRhc2tzKTtcblxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQobm90ZXMpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZCh0YXNrcyk7XG5cbiAgcmV0dXJuIGNhcmRCb2R5O1xufVxuXG5mdW5jdGlvbiBMaXN0VG9kb3MocHJvamVjdE9iaikge1xuICBjb25zdCB0b2RvQXJyID0gcHJvamVjdE9iai50b2RvcztcbiAgY29uc3Qgb2JqZWN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXdyYXAnKTtcblxuICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG5hdi5wcm9qZWN0KHByb2plY3RPYmoudGl0bGUsIHRvZG9BcnIubGVuZ3RoKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgb2JqZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9iamVjdENhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZFRpdGxlID0gbWFrZUNhcmRUaXRsZSh0b2RvQXJyW2ldKTtcbiAgICBjb25zdCBjYXJkQm9keSA9IG1ha2VDYXJkQm9keSh0b2RvQXJyW2ldKTtcblxuICAgIG9iamVjdENhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBvYmplY3RDYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcblxuICAgIG9iamVjdFdyYXAuYXBwZW5kQ2hpbGQob2JqZWN0Q2FyZCk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFdyYXA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0KG9iakFyciwgb2JqVHlwZSkge1xuICBpZiAob2JqVHlwZSA9PT0gJ3AnIHx8IG9ialR5cGUgPT09ICdQJykge1xuICAgIHJldHVybiBMaXN0UHJvamVjdHMob2JqQXJyKTtcbiAgfVxuICByZXR1cm4gTGlzdFRvZG9zKG9iakFycik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlMaXN0O1xuIiwiZnVuY3Rpb24gbWFpbk5hdihwcm9qZWN0c0NvdW50KSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcbiAgY29uc3QgbmF2SXRlbXMgPSBbYFByb2plY3RzICgke3Byb2plY3RzQ291bnR9KWAsICduZXcgcHJvamVjdCddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gbmF2SXRlbXNbaV07XG4gICAgbmF2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICB9XG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIHByb2plY3ROYXYocHJvamVjdFRpdGxlLCB0b2Rvc0NvdW50KSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcbiAgY29uc3QgbmF2SXRlbXMgPSBbJ2JhY2tJY29uJywgYCR7cHJvamVjdFRpdGxlfSAoJHt0b2Rvc0NvdW50fSlgLCAncGx1c0ljb24nXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZJdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gbmF2SXRlbXNbaV07XG4gICAgbmF2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICB9XG4gIHJldHVybiBuYXY7XG59XG5cbmNvbnN0IG5hdiA9IHtcbiAgbWFpbjogbWFpbk5hdixcbiAgcHJvamVjdDogcHJvamVjdE5hdixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5hdjtcbiIsImZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLnRvZG9zID0gW107XG59XG5cblByb2plY3QucHJvdG90eXBlLmFkZFRvZG8gPSBmdW5jdGlvbiBhZGRUb2RvKHRvZG9PYmopIHtcbiAgdGhpcy50b2Rvcy5wdXNoKHRvZG9PYmopO1xuICByZXR1cm4gdGhpcy50b2Rvcy5sZW5ndGg7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5yZW1vdmVUb2RvID0gZnVuY3Rpb24gcmVtb3ZlVG9kbyhpbmRleCkge1xuICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJmdW5jdGlvbiBUYXNrKG5hbWUpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbn1cblxuVGFzay5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBtYXJrQ29tcGxldGVkKHRvZG9PYmopIHtcbiAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICB0b2RvT2JqLnRhc2tzQ29tcGxldGVkICs9IDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjID0gZGVzYztcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIHRoaXMudGFza3MgPSBbXTtcbiAgdGhpcy50YXNrc0NvbXBsZXRlZCA9IDA7XG59XG5cblRvZG8ucHJvdG90eXBlLmVkaXQgPSBmdW5jdGlvbiBlZGl0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2MgPSBkZXNjO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMubm90ZXMgPSBub3Rlcztcbn07XG5cblRvZG8ucHJvdG90eXBlLmNoYW5nZVByaW9yaXR5ID0gZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgaWYgKHByaW9yaXR5ID09PSAnaGlnaCcgfHwgcHJpb3JpdHkgPT09ICdtZWRpdW0nIHx8IHByaW9yaXR5ID09PSAnbG93Jykge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufTtcblxuVG9kby5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xufTtcblxuVG9kby5wcm90b3R5cGUuYWRkVGFzayA9IGZ1bmN0aW9uIGFkZFRhc2sodGFza09iaikge1xuICB0aGlzLnRhc2tzLnB1c2godGFza09iaik7XG4gIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aDtcbn07XG5cblRvZG8ucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aDtcbn07XG5cblRvZG8ucHJvdG90eXBlLmNvdW50Q29tcGxldGUgPSBmdW5jdGlvbiBjb3VudENvbXBsZXRlKCkge1xuICByZXR1cm4gdGhpcy50YXNrc0NvbXBsZXRlZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5SGVhZGVyIGZyb20gJy4vZG9tL2hlYWRlcic7XG5pbXBvcnQgZGlzcGxheUxpc3QgZnJvbSAnLi9kb20vbGlzdCc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9kb20vZm9ybXMnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJztcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdyYXAnKTtcbm1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheUhlYWRlcignQmluZ28nKSk7XG5tYWluLmFwcGVuZENoaWxkKGRpc3BsYXlMaXN0KGRhdGEucHJvamVjdHNbMl0pKTtcbm1haW4uYXBwZW5kQ2hpbGQoZm9ybXMucHJvamVjdCk7XG5tYWluLmFwcGVuZENoaWxkKGZvcm1zLnRvZG8pO1xubWFpbi5hcHBlbmRDaGlsZChmb3Jtcy50YXNrKTtcbm1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheUxpc3QoZGF0YS5wcm9qZWN0cywgJ3AnKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9