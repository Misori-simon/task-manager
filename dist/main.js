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
function ListProjects(projectArr) {
  const objectWrap = document.createElement('div');
  objectWrap.setAttribute('class', 'obj-wrap');
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

function ListTodos(todoArr) {
  const objectWrap = document.createElement('div');
  objectWrap.setAttribute('class', 'obj-wrap');
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

function projectNav(todosCount) {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'header');
  const navItems = ['backIcon', `Projects (${todosCount})`, 'plusIcon'];
  for (let i = 0; i < navItems.length; i += 1) {
    const heading = document.createElement('h2');
    heading.setAttribute('class', 'nav-item');
    heading.innerHTML = navItems[i];
    nav.appendChild(heading);
  }
  return nav;
}

function displayNav(objectCount, type) {
  if (type === 'm' || type === 'm') {
    return mainNav(objectCount);
  }
  return projectNav(objectCount);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNav);


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
/* harmony import */ var _dom_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/nav */ "./src/dom/nav.js");
/* harmony import */ var _dom_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/list */ "./src/dom/list.js");
/* harmony import */ var _dom_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/forms */ "./src/dom/forms.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/data.js");






const main = document.getElementById('main-wrap');
main.appendChild((0,_dom_header__WEBPACK_IMPORTED_MODULE_0__.default)('Bingo'));
main.appendChild((0,_dom_nav__WEBPACK_IMPORTED_MODULE_1__.default)(3, 'p'));
main.appendChild((0,_dom_list__WEBPACK_IMPORTED_MODULE_2__.default)(_data__WEBPACK_IMPORTED_MODULE_4__.default.projects[2].todos));
main.appendChild(_dom_forms__WEBPACK_IMPORTED_MODULE_3__.default.project);
main.appendChild(_dom_forms__WEBPACK_IMPORTED_MODULE_3__.default.todo);
main.appendChild(_dom_forms__WEBPACK_IMPORTED_MODULE_3__.default.task);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2Zvcm1zLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vaGVhZGVyLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vbGlzdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL25hdi5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTjtBQUNBOztBQUUxQjtBQUNBLE1BQU0sNkNBQU87QUFDYixNQUFNLDZDQUFPO0FBQ2IsTUFBTSw2Q0FBTztBQUNiLE1BQU0sNkNBQU87QUFDYjs7QUFFQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwwQ0FBSTtBQUNWLE1BQU0sMENBQUk7QUFDVixNQUFNLDBDQUFJO0FBQ1YsTUFBTSwwQ0FBSTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjOztBQUVkLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0SXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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RTs7Ozs7Ozs7Ozs7Ozs7OztBQ055QztBQUNOO0FBQ0U7QUFDTDtBQUNOOztBQUUxQjtBQUNBLGlCQUFpQixvREFBYTtBQUM5QixpQkFBaUIsaURBQVU7QUFDM0IsaUJBQWlCLGtEQUFXLENBQUMsNERBQXNCO0FBQ25ELGlCQUFpQix1REFBYTtBQUM5QixpQkFBaUIsb0RBQVU7QUFDM0IsaUJBQWlCLG9EQUFVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICBuZXcgUHJvamVjdCgnUHJvamVjdCBPbmUnKSxcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgVHdvJyksXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IFRocmVlJyksXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IEZvdXInKSxcbl07XG5cbmNvbnN0IHRvZG9zID0gW1xuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBPbmUnLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IFR3bycsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgVGhyZWUnLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IEZvdXInLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG5dO1xuXG5jb25zdCB0YXNrcyA9IFtcbiAgbmV3IFRhc2soJ1Rhc2sgT25lJyksXG4gIG5ldyBUYXNrKCdUYXNrIFR3bycpLFxuICBuZXcgVGFzaygnVGFzayBUaHJlZScpLFxuICBuZXcgVGFzaygnVGFzayBGb3VyJyksXG5dO1xuXG5wcm9qZWN0c1swXS5hZGRUb2RvKHRvZG9zWzFdKTtcbnByb2plY3RzWzBdLmFkZFRvZG8odG9kb3NbMl0pO1xuXG5wcm9qZWN0c1syXS5hZGRUb2RvKHRvZG9zWzFdKTtcbnByb2plY3RzWzJdLmFkZFRvZG8odG9kb3NbMl0pO1xucHJvamVjdHNbMl0uYWRkVG9kbyh0b2Rvc1szXSk7XG5cbnRvZG9zWzFdLmFkZFRhc2sodGFza3NbMV0pO1xudG9kb3NbMV0uYWRkVGFzayh0YXNrc1syXSk7XG5cbnRvZG9zWzJdLmFkZFRhc2sodGFza3NbMV0pO1xudG9kb3NbMl0uYWRkVGFzayh0YXNrc1syXSk7XG50b2Rvc1syXS5hZGRUYXNrKHRhc2tzWzNdKTtcblxudGFza3NbMV0uY29tcGxldGUodG9kb3NbMV0pO1xudGFza3NbMV0uY29tcGxldGUodG9kb3NbMl0pO1xudGFza3NbMl0uY29tcGxldGUodG9kb3NbMl0pO1xuXG5jb25zdCBkYXRhID0geyBwcm9qZWN0cyB9O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIiwiZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWZvcm0nKTtcblxuICBjb25zdCB0aXRsZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1maWVsZCcpO1xuICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBUaXRsZScpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtYnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQUREJztcblxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIHRvZG9Gb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1mb3JtJyk7XG5cbiAgY29uc3QgdGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgdGl0bGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RvZG8gVGl0bGUnKTtcblxuICBjb25zdCBkZXNjRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkZXNjRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZGVzY0ZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1maWVsZCcpO1xuICBkZXNjRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUb2RvIERlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgZGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVG9kbyBEZXNjcmlwdGlvbicpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktd3JhcCcpO1xuXG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktaXRlbScpO1xuXG4gIGNvbnN0IGhpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaGlnaExhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbGFiZWwnKTtcbiAgaGlnaExhYmVsLmlubmVySFRNTCA9ICdoaWdoJztcblxuICBjb25zdCBoaWdoRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBoaWdoRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGhpZ2hGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcblxuICBoaWdoUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcbiAgaGlnaFByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hGaWVsZCk7XG5cbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktaXRlbScpO1xuXG4gIGNvbnN0IG1lZGl1bUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZWRpdW1MYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWxhYmVsJyk7XG4gIG1lZGl1bUxhYmVsLmlubmVySFRNTCA9ICdtZWRpdW0nO1xuXG4gIGNvbnN0IG1lZGl1bUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbWVkaXVtRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIG1lZGl1bUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuXG4gIG1lZGl1bVByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bUxhYmVsKTtcbiAgbWVkaXVtUHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtRmllbGQpO1xuXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWl0ZW0nKTtcblxuICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbG93TGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1sYWJlbCcpO1xuICBsb3dMYWJlbC5pbm5lckhUTUwgPSAnbG93JztcblxuICBjb25zdCBsb3dGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxvd0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBsb3dGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcblxuICBsb3dQcmlvcml0eS5hcHBlbmRDaGlsZChsb3dMYWJlbCk7XG4gIGxvd1ByaW9yaXR5LmFwcGVuZENoaWxkKGxvd0ZpZWxkKTtcblxuICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICBjb25zdCBub3Rlc0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbm90ZXNGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBub3Rlc0ZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1hcmVhJyk7XG4gIG5vdGVzRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgTm90ZXMnKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bicpO1xuICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FERCc7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBmb3JtLmFwcGVuZENoaWxkKG5vdGVzRmllbGQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIHRhc2tGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1mb3JtJyk7XG5cbiAgY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtZmllbGQnKTtcbiAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBuYW1lJyk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1idG4nKTtcbiAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBREQnO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUZpZWxkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIHJldHVybiBmb3JtO1xufVxuXG5jb25zdCBmb3JtcyA9IHtcbiAgcHJvamVjdDogcHJvamVjdEZvcm0oKSxcbiAgdG9kbzogdG9kb0Zvcm0oKSxcbiAgdGFzazogdGFza0Zvcm0oKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xuIiwiZnVuY3Rpb24gZGlzcGxheUhlYWRlcihzaXRlVGl0bGUpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcicpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NpdGUtdGl0bGUnKTtcbiAgaGVhZGluZy5pbm5lckhUTUwgPSBzaXRlVGl0bGU7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhlYWRlcjtcbiIsImZ1bmN0aW9uIExpc3RQcm9qZWN0cyhwcm9qZWN0QXJyKSB7XG4gIGNvbnN0IG9iamVjdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb2JqZWN0V3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai13cmFwJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG9iamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvYmplY3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWl0ZW0nKTtcblxuICAgIGNvbnN0IG9iamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBvYmplY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZScpO1xuICAgIG9iamVjdFRpdGxlLmlubmVySFRNTCA9IGAke3Byb2plY3RBcnJbaV0udGl0bGV9ICgke3Byb2plY3RBcnJbaV0uY291bnQoKX0pYDtcblxuICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbC1idXR0b24nKTtcbiAgICBkZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5pbm5lckhUTUwgPSAnZGVsSWNvbic7XG5cbiAgICBvYmplY3RJdGVtLmFwcGVuZENoaWxkKG9iamVjdFRpdGxlKTtcbiAgICBvYmplY3RJdGVtLmFwcGVuZENoaWxkKGRlbEJ1dHRvbik7XG5cbiAgICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG9iamVjdEl0ZW0pO1xuICB9XG4gIHJldHVybiBvYmplY3RXcmFwO1xufVxuXG5mdW5jdGlvbiBMaXN0VGFza3ModGFza0Fycikge1xuICBjb25zdCB0YXNrV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrV3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2std3JhcCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jYXJkJyk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jb21wbGV0aW9uLXN0YXRlJyk7XG4gICAgc3RhdGUuaW5uZXJIVE1MID0gJ2NoZWNrZWRJY29uJztcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stbmFtZScpO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gYCR7dGFza0FycltpXS5uYW1lfWA7XG5cbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChzdGF0ZSk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICB0YXNrV3JhcC5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gIH1cbiAgcmV0dXJuIHRhc2tXcmFwO1xufVxuXG5mdW5jdGlvbiBtYWtlQ2FyZFRpdGxlKHRvZG9PYmopIHtcbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS13cmFwJyk7XG5cbiAgY29uc3QgdGl0bGVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlTGVmdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1sZWZ0Jyk7XG5cbiAgY29uc3QgdGl0bGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1pbmZvJyk7XG5cbiAgY29uc3QgcHJpb3JpdHlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaW9yaXR5QmFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktYmFyJyk7XG5cbiAgdGl0bGVJbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5QmFyKTtcblxuICBjb25zdCB0aXRsZUNsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXRsZUNsb2NrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUtY2xvY2snKTtcbiAgdGl0bGVDbG9jay5pbm5lckhUTUwgPSAnY2xvY2tJY29uJztcblxuICB0aXRsZUluZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuXG4gIGNvbnN0IG9iamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgb2JqZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdGl0bGUnKTtcbiAgb2JqZWN0VGl0bGUuaW5uZXJIVE1MID0gYCR7dG9kb09iai50aXRsZX0gKCR7dG9kb09iai5jb3VudENvbXBsZXRlKCl9LyR7dG9kb09iai5jb3VudCgpfSlgO1xuXG4gIHRpdGxlTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUluZm8pO1xuICB0aXRsZUxlZnQuYXBwZW5kQ2hpbGQob2JqZWN0VGl0bGUpO1xuXG4gIGNvbnN0IHRpdGxlUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVSaWdodC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS1yaWdodCcpO1xuXG4gIGNvbnN0IG9iamVjdFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RUb2dnbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdG9nZ2xlJyk7XG4gIG9iamVjdFRvZ2dsZS5pbm5lckhUTUwgPSAnZHJvcGRvd25JY29uJztcblxuICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVMZWZ0KTtcbiAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHRpdGxlUmlnaHQpO1xuXG4gIHJldHVybiBjYXJkVGl0bGU7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkQm9keSh0b2RvT2JqKSB7XG4gIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXdyYXAnKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotZHVlLWRhdGUnKTtcblxuICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZVRleHQuaW5uZXJIVE1MID0gYER1ZSBEYXRlOiAke3RvZG9PYmouZHVlRGF0ZX1gO1xuXG4gIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuXG4gIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRyb2xzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNvbnRyb2xzJyk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotcHJpb3JpdHknKTtcblxuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvdy1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lZGl1bS1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcblxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGlnaC1wcmlvcml0eScpO1xuXG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG5cbiAgY29uc3QgY29tcGxldGlvblN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXBsZXRpb25TdGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1jb21wbGV0aW9uLXN0YXRlJyk7XG4gIGNvbXBsZXRpb25TdGF0ZS5pbm5lckhUTUwgPSAnY2hlY2tlZEljb24nO1xuXG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQoY29tcGxldGlvblN0YXRlKTtcblxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotZGVzYycpO1xuICBkZXNjLmlubmVySFRNTCA9IGAke3RvZG9PYmouZGVzY31gO1xuXG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLW5vdGVzJyk7XG4gIG5vdGVzLmlubmVySFRNTCA9IGAke3RvZG9PYmoubm90ZXN9YDtcblxuICBjb25zdCB0YXNrcyA9IExpc3RUYXNrcyh0b2RvT2JqLnRhc2tzKTtcblxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQobm90ZXMpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZCh0YXNrcyk7XG5cbiAgcmV0dXJuIGNhcmRCb2R5O1xufVxuXG5mdW5jdGlvbiBMaXN0VG9kb3ModG9kb0Fycikge1xuICBjb25zdCBvYmplY3RXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9iamVjdFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotd3JhcCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBvYmplY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb2JqZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1jYXJkJyk7XG5cbiAgICBjb25zdCBjYXJkVGl0bGUgPSBtYWtlQ2FyZFRpdGxlKHRvZG9BcnJbaV0pO1xuICAgIGNvbnN0IGNhcmRCb2R5ID0gbWFrZUNhcmRCb2R5KHRvZG9BcnJbaV0pO1xuXG4gICAgb2JqZWN0Q2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgIG9iamVjdENhcmQuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xuXG4gICAgb2JqZWN0V3JhcC5hcHBlbmRDaGlsZChvYmplY3RDYXJkKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0V3JhcDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUxpc3Qob2JqQXJyLCBvYmpUeXBlKSB7XG4gIGlmIChvYmpUeXBlID09PSAncCcgfHwgb2JqVHlwZSA9PT0gJ1AnKSB7XG4gICAgcmV0dXJuIExpc3RQcm9qZWN0cyhvYmpBcnIpO1xuICB9XG4gIHJldHVybiBMaXN0VG9kb3Mob2JqQXJyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUxpc3Q7XG4iLCJmdW5jdGlvbiBtYWluTmF2KHByb2plY3RzQ291bnQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcicpO1xuICBjb25zdCBuYXZJdGVtcyA9IFtgUHJvamVjdHMgKCR7cHJvamVjdHNDb3VudH0pYCwgJ25ldyBwcm9qZWN0J107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSArPSAxKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBuYXZJdGVtc1tpXTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIH1cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE5hdih0b2Rvc0NvdW50KSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcbiAgY29uc3QgbmF2SXRlbXMgPSBbJ2JhY2tJY29uJywgYFByb2plY3RzICgke3RvZG9zQ291bnR9KWAsICdwbHVzSWNvbiddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBuYXZJdGVtc1tpXTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIH1cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5hdihvYmplY3RDb3VudCwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ20nIHx8IHR5cGUgPT09ICdtJykge1xuICAgIHJldHVybiBtYWluTmF2KG9iamVjdENvdW50KTtcbiAgfVxuICByZXR1cm4gcHJvamVjdE5hdihvYmplY3RDb3VudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlOYXY7XG4iLCJmdW5jdGlvbiBQcm9qZWN0KHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy50b2RvcyA9IFtdO1xufVxuXG5Qcm9qZWN0LnByb3RvdHlwZS5hZGRUb2RvID0gZnVuY3Rpb24gYWRkVG9kbyh0b2RvT2JqKSB7XG4gIHRoaXMudG9kb3MucHVzaCh0b2RvT2JqKTtcbiAgcmV0dXJuIHRoaXMudG9kb3MubGVuZ3RoO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUucmVtb3ZlVG9kbyA9IGZ1bmN0aW9uIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICByZXR1cm4gdGhpcy50b2Rvcy5sZW5ndGg7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KCkge1xuICByZXR1cm4gdGhpcy50b2Rvcy5sZW5ndGg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiZnVuY3Rpb24gVGFzayhuYW1lKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG59XG5cblRhc2sucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gbWFya0NvbXBsZXRlZCh0b2RvT2JqKSB7XG4gIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgdG9kb09iai50YXNrc0NvbXBsZXRlZCArPSAxO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzYyA9IGRlc2M7XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB0aGlzLnRhc2tzID0gW107XG4gIHRoaXMudGFza3NDb21wbGV0ZWQgPSAwO1xufVxuXG5Ub2RvLnByb3RvdHlwZS5lZGl0ID0gZnVuY3Rpb24gZWRpdCh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjID0gZGVzYztcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5jaGFuZ2VQcmlvcml0eSA9IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KHByaW9yaXR5KSB7XG4gIGlmIChwcmlvcml0eSA9PT0gJ2hpZ2gnIHx8IHByaW9yaXR5ID09PSAnbWVkaXVtJyB8fCBwcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn07XG5cblRvZG8ucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbn07XG5cblRvZG8ucHJvdG90eXBlLmFkZFRhc2sgPSBmdW5jdGlvbiBhZGRUYXNrKHRhc2tPYmopIHtcbiAgdGhpcy50YXNrcy5wdXNoKHRhc2tPYmopO1xuICByZXR1cm4gdGhpcy50YXNrcy5sZW5ndGg7XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KCkge1xuICByZXR1cm4gdGhpcy50YXNrcy5sZW5ndGg7XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5jb3VudENvbXBsZXRlID0gZnVuY3Rpb24gY291bnRDb21wbGV0ZSgpIHtcbiAgcmV0dXJuIHRoaXMudGFza3NDb21wbGV0ZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheUhlYWRlciBmcm9tICcuL2RvbS9oZWFkZXInO1xuaW1wb3J0IGRpc3BsYXlOYXYgZnJvbSAnLi9kb20vbmF2JztcbmltcG9ydCBkaXNwbGF5TGlzdCBmcm9tICcuL2RvbS9saXN0JztcbmltcG9ydCBmb3JtcyBmcm9tICcuL2RvbS9mb3Jtcyc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td3JhcCcpO1xubWFpbi5hcHBlbmRDaGlsZChkaXNwbGF5SGVhZGVyKCdCaW5nbycpKTtcbm1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheU5hdigzLCAncCcpKTtcbm1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheUxpc3QoZGF0YS5wcm9qZWN0c1syXS50b2RvcykpO1xubWFpbi5hcHBlbmRDaGlsZChmb3Jtcy5wcm9qZWN0KTtcbm1haW4uYXBwZW5kQ2hpbGQoZm9ybXMudG9kbyk7XG5tYWluLmFwcGVuZENoaWxkKGZvcm1zLnRhc2spO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==