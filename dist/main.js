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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectForm);


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
main.appendChild((0,_dom_forms__WEBPACK_IMPORTED_MODULE_3__.default)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2Zvcm1zLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vaGVhZGVyLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3NyYy9kb20vbGlzdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL25hdi5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTjtBQUNBOztBQUUxQjtBQUNBLE1BQU0sNkNBQU87QUFDYixNQUFNLDZDQUFPO0FBQ2IsTUFBTSw2Q0FBTztBQUNiLE1BQU0sNkNBQU87QUFDYjs7QUFFQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQUk7QUFDVjtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDMUNwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDTjtBQUNFO0FBQ0M7QUFDWjs7QUFFMUI7QUFDQSxpQkFBaUIsb0RBQWE7QUFDOUIsaUJBQWlCLGlEQUFVO0FBQzNCLGlCQUFpQixrREFBVyxDQUFDLDREQUFzQjtBQUNuRCxpQkFBaUIsbURBQVciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IE9uZScpLFxuICBuZXcgUHJvamVjdCgnUHJvamVjdCBUd28nKSxcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgVGhyZWUnKSxcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgRm91cicpLFxuXTtcblxuY29uc3QgdG9kb3MgPSBbXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IE9uZScsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgVHdvJyxcbiAgICAnVGVzdCB0b2RvIHByb3BlcnRpZXMnLFxuICAgICcyNi8wNS8yMDIwJyxcbiAgICAnaGlnaCcsXG4gICAgJ1Rlc3QgdXNpbmcgamVzdCcsXG4gICAgJ3BlbmRpbmcnLFxuICApLFxuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBUaHJlZScsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgRm91cicsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbl07XG5cbmNvbnN0IHRhc2tzID0gW1xuICBuZXcgVGFzaygnVGFzayBPbmUnKSxcbiAgbmV3IFRhc2soJ1Rhc2sgVHdvJyksXG4gIG5ldyBUYXNrKCdUYXNrIFRocmVlJyksXG4gIG5ldyBUYXNrKCdUYXNrIEZvdXInKSxcbl07XG5cbnByb2plY3RzWzBdLmFkZFRvZG8odG9kb3NbMV0pO1xucHJvamVjdHNbMF0uYWRkVG9kbyh0b2Rvc1syXSk7XG5cbnByb2plY3RzWzJdLmFkZFRvZG8odG9kb3NbMV0pO1xucHJvamVjdHNbMl0uYWRkVG9kbyh0b2Rvc1syXSk7XG5wcm9qZWN0c1syXS5hZGRUb2RvKHRvZG9zWzNdKTtcblxudG9kb3NbMV0uYWRkVGFzayh0YXNrc1sxXSk7XG50b2Rvc1sxXS5hZGRUYXNrKHRhc2tzWzJdKTtcblxudG9kb3NbMl0uYWRkVGFzayh0YXNrc1sxXSk7XG50b2Rvc1syXS5hZGRUYXNrKHRhc2tzWzJdKTtcbnRvZG9zWzJdLmFkZFRhc2sodGFza3NbM10pO1xuXG50YXNrc1sxXS5jb21wbGV0ZSh0b2Rvc1sxXSk7XG50YXNrc1sxXS5jb21wbGV0ZSh0b2Rvc1syXSk7XG50YXNrc1syXS5jb21wbGV0ZSh0b2Rvc1syXSk7XG5cbmNvbnN0IGRhdGEgPSB7IHByb2plY3RzIH07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJmdW5jdGlvbiBwcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtZm9ybScpO1xuXG4gIGNvbnN0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWZpZWxkJyk7XG4gIHRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1idG4nKTtcbiAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBREQnO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVGaWVsZCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICByZXR1cm4gZm9ybTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZvcm07XG4iLCJmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKHNpdGVUaXRsZSkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2l0ZS10aXRsZScpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IHNpdGVUaXRsZTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SGVhZGVyO1xuIiwiZnVuY3Rpb24gTGlzdFByb2plY3RzKHByb2plY3RBcnIpIHtcbiAgY29uc3Qgb2JqZWN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXdyYXAnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgb2JqZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9iamVjdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotaXRlbScpO1xuXG4gICAgY29uc3Qgb2JqZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9iamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlJyk7XG4gICAgb2JqZWN0VGl0bGUuaW5uZXJIVE1MID0gYCR7cHJvamVjdEFycltpXS50aXRsZX0gKCR7cHJvamVjdEFycltpXS5jb3VudCgpfSlgO1xuXG4gICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsLWJ1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLmlubmVySFRNTCA9ICdkZWxJY29uJztcblxuICAgIG9iamVjdEl0ZW0uYXBwZW5kQ2hpbGQob2JqZWN0VGl0bGUpO1xuICAgIG9iamVjdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcblxuICAgIG9iamVjdFdyYXAuYXBwZW5kQ2hpbGQob2JqZWN0SXRlbSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFdyYXA7XG59XG5cbmZ1bmN0aW9uIExpc3RUYXNrcyh0YXNrQXJyKSB7XG4gIGNvbnN0IHRhc2tXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay13cmFwJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNhcmQnKTtcblxuICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNvbXBsZXRpb24tc3RhdGUnKTtcbiAgICBzdGF0ZS5pbm5lckhUTUwgPSAnY2hlY2tlZEljb24nO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1uYW1lJyk7XG4gICAgbmFtZS5pbm5lckhUTUwgPSBgJHt0YXNrQXJyW2ldLm5hbWV9YDtcblxuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHN0YXRlKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIHRhc2tXcmFwLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfVxuICByZXR1cm4gdGFza1dyYXA7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkVGl0bGUodG9kb09iaikge1xuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXdyYXAnKTtcblxuICBjb25zdCB0aXRsZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVMZWZ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLWxlZnQnKTtcblxuICBjb25zdCB0aXRsZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLWluZm8nKTtcblxuICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJpb3JpdHlCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1iYXInKTtcblxuICB0aXRsZUluZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuXG4gIGNvbnN0IHRpdGxlQ2xvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRpdGxlQ2xvY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1jbG9jaycpO1xuICB0aXRsZUNsb2NrLmlubmVySFRNTCA9ICdjbG9ja0ljb24nO1xuXG4gIHRpdGxlSW5mby5hcHBlbmRDaGlsZChwcmlvcml0eUJhcik7XG5cbiAgY29uc3Qgb2JqZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBvYmplY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZScpO1xuICBvYmplY3RUaXRsZS5pbm5lckhUTUwgPSBgJHt0b2RvT2JqLnRpdGxlfSAoJHt0b2RvT2JqLmNvdW50Q29tcGxldGUoKX0vJHt0b2RvT2JqLmNvdW50KCl9KWA7XG5cbiAgdGl0bGVMZWZ0LmFwcGVuZENoaWxkKHRpdGxlSW5mbyk7XG4gIHRpdGxlTGVmdC5hcHBlbmRDaGlsZChvYmplY3RUaXRsZSk7XG5cbiAgY29uc3QgdGl0bGVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZVJpZ2h0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXJpZ2h0Jyk7XG5cbiAgY29uc3Qgb2JqZWN0VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9iamVjdFRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10b2dnbGUnKTtcbiAgb2JqZWN0VG9nZ2xlLmlubmVySFRNTCA9ICdkcm9wZG93bkljb24nO1xuXG4gIGNhcmRUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZUxlZnQpO1xuICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVSaWdodCk7XG5cbiAgcmV0dXJuIGNhcmRUaXRsZTtcbn1cblxuZnVuY3Rpb24gbWFrZUNhcmRCb2R5KHRvZG9PYmopIHtcbiAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdGl0bGUtd3JhcCcpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1kdWUtZGF0ZScpO1xuXG4gIGNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkdWVEYXRlVGV4dC5pbm5lckhUTUwgPSBgRHVlIERhdGU6ICR7dG9kb09iai5kdWVEYXRlfWA7XG5cbiAgZHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlVGV4dCk7XG5cbiAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udHJvbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotY29udHJvbHMnKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1wcmlvcml0eScpO1xuXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG93LXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVkaXVtLXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoaWdoLXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuICBjb25zdCBjb21wbGV0aW9uU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcGxldGlvblN0YXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNvbXBsZXRpb24tc3RhdGUnKTtcbiAgY29tcGxldGlvblN0YXRlLmlubmVySFRNTCA9ICdjaGVja2VkSWNvbic7XG5cbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChjb21wbGV0aW9uU3RhdGUpO1xuXG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1kZXNjJyk7XG4gIGRlc2MuaW5uZXJIVE1MID0gYCR7dG9kb09iai5kZXNjfWA7XG5cbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90ZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotbm90ZXMnKTtcbiAgbm90ZXMuaW5uZXJIVE1MID0gYCR7dG9kb09iai5ub3Rlc31gO1xuXG4gIGNvbnN0IHRhc2tzID0gTGlzdFRhc2tzKHRvZG9PYmoudGFza3MpO1xuXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChjb250cm9scyk7XG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGRlc2MpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChub3Rlcyk7XG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRhc2tzKTtcblxuICByZXR1cm4gY2FyZEJvZHk7XG59XG5cbmZ1bmN0aW9uIExpc3RUb2Rvcyh0b2RvQXJyKSB7XG4gIGNvbnN0IG9iamVjdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb2JqZWN0V3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai13cmFwJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG9iamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvYmplY3RDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IG1ha2VDYXJkVGl0bGUodG9kb0FycltpXSk7XG4gICAgY29uc3QgY2FyZEJvZHkgPSBtYWtlQ2FyZEJvZHkodG9kb0FycltpXSk7XG5cbiAgICBvYmplY3RDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgb2JqZWN0Q2FyZC5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG5cbiAgICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG9iamVjdENhcmQpO1xuICB9XG4gIHJldHVybiBvYmplY3RXcmFwO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TGlzdChvYmpBcnIsIG9ialR5cGUpIHtcbiAgaWYgKG9ialR5cGUgPT09ICdwJyB8fCBvYmpUeXBlID09PSAnUCcpIHtcbiAgICByZXR1cm4gTGlzdFByb2plY3RzKG9iakFycik7XG4gIH1cbiAgcmV0dXJuIExpc3RUb2RvcyhvYmpBcnIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TGlzdDtcbiIsImZ1bmN0aW9uIG1haW5OYXYocHJvamVjdHNDb3VudCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG4gIGNvbnN0IG5hdkl0ZW1zID0gW2BQcm9qZWN0cyAoJHtwcm9qZWN0c0NvdW50fSlgLCAnbmV3IHByb2plY3QnXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpICs9IDEpIHtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWl0ZW0nKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IG5hdkl0ZW1zW2ldO1xuICAgIG5hdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgfVxuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TmF2KHRvZG9zQ291bnQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcicpO1xuICBjb25zdCBuYXZJdGVtcyA9IFsnYmFja0ljb24nLCBgUHJvamVjdHMgKCR7dG9kb3NDb3VudH0pYCwgJ3BsdXNJY29uJ107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2SXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWl0ZW0nKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IG5hdkl0ZW1zW2ldO1xuICAgIG5hdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgfVxuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmF2KG9iamVjdENvdW50LCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSAnbScgfHwgdHlwZSA9PT0gJ20nKSB7XG4gICAgcmV0dXJuIG1haW5OYXYob2JqZWN0Q291bnQpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0TmF2KG9iamVjdENvdW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU5hdjtcbiIsImZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLnRvZG9zID0gW107XG59XG5cblByb2plY3QucHJvdG90eXBlLmFkZFRvZG8gPSBmdW5jdGlvbiBhZGRUb2RvKHRvZG9PYmopIHtcbiAgdGhpcy50b2Rvcy5wdXNoKHRvZG9PYmopO1xuICByZXR1cm4gdGhpcy50b2Rvcy5sZW5ndGg7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5yZW1vdmVUb2RvID0gZnVuY3Rpb24gcmVtb3ZlVG9kbyhpbmRleCkge1xuICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJmdW5jdGlvbiBUYXNrKG5hbWUpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbn1cblxuVGFzay5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBtYXJrQ29tcGxldGVkKHRvZG9PYmopIHtcbiAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICB0b2RvT2JqLnRhc2tzQ29tcGxldGVkICs9IDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjID0gZGVzYztcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIHRoaXMudGFza3MgPSBbXTtcbiAgdGhpcy50YXNrc0NvbXBsZXRlZCA9IDA7XG59XG5cblRvZG8ucHJvdG90eXBlLmVkaXQgPSBmdW5jdGlvbiBlZGl0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2MgPSBkZXNjO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMubm90ZXMgPSBub3Rlcztcbn07XG5cblRvZG8ucHJvdG90eXBlLmNoYW5nZVByaW9yaXR5ID0gZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgaWYgKHByaW9yaXR5ID09PSAnaGlnaCcgfHwgcHJpb3JpdHkgPT09ICdtZWRpdW0nIHx8IHByaW9yaXR5ID09PSAnbG93Jykge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufTtcblxuVG9kby5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xufTtcblxuVG9kby5wcm90b3R5cGUuYWRkVGFzayA9IGZ1bmN0aW9uIGFkZFRhc2sodGFza09iaikge1xuICB0aGlzLnRhc2tzLnB1c2godGFza09iaik7XG4gIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aDtcbn07XG5cblRvZG8ucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aDtcbn07XG5cblRvZG8ucHJvdG90eXBlLmNvdW50Q29tcGxldGUgPSBmdW5jdGlvbiBjb3VudENvbXBsZXRlKCkge1xuICByZXR1cm4gdGhpcy50YXNrc0NvbXBsZXRlZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5SGVhZGVyIGZyb20gJy4vZG9tL2hlYWRlcic7XG5pbXBvcnQgZGlzcGxheU5hdiBmcm9tICcuL2RvbS9uYXYnO1xuaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gJy4vZG9tL2xpc3QnO1xuaW1wb3J0IHByb2plY3RGb3JtIGZyb20gJy4vZG9tL2Zvcm1zJztcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13cmFwJyk7XG5tYWluLmFwcGVuZENoaWxkKGRpc3BsYXlIZWFkZXIoJ0JpbmdvJykpO1xubWFpbi5hcHBlbmRDaGlsZChkaXNwbGF5TmF2KDMsICdwJykpO1xubWFpbi5hcHBlbmRDaGlsZChkaXNwbGF5TGlzdChkYXRhLnByb2plY3RzWzJdLnRvZG9zKSk7XG5tYWluLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==