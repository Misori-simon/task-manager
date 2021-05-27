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

projects[0].addTodo(todos[1]);
projects[0].addTodo(todos[2]);

projects[2].addTodo(todos[1]);
projects[2].addTodo(todos[2]);
projects[2].addTodo(todos[3]);

const data = { projects };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


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

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Todo(title, desc, dueDate, priority, notes, completionState) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.completionState = completionState;
  this.tasks = [];
  this.tasksCompleted = 0;
}

Todo.prototype.edit = function edit(title, desc, dueDate, priority, notes, completionState) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.completionState = completionState;
};

Todo.prototype.changePriority = function changePriority(priority) {
  if (priority === 'high' || priority === 'medium' || priority === 'low') {
    this.priority = priority;
  }
};

Todo.prototype.changeState = function changeState(completionState) {
  if (completionState === 'pending' || completionState === 'progress' || completionState === 'complete') {
    this.completionState = completionState;
  }
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/data.js");





const main = document.getElementById('main-wrap');
main.appendChild((0,_dom_header__WEBPACK_IMPORTED_MODULE_0__.default)('Bingo'));
main.appendChild((0,_dom_nav__WEBPACK_IMPORTED_MODULE_1__.default)(3, 'p'));
main.appendChild((0,_dom_list__WEBPACK_IMPORTED_MODULE_2__.default)(_data__WEBPACK_IMPORTED_MODULE_3__.default.projects[2].todos));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL2RvbS9uYXYuanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTjs7QUFFMUI7QUFDQSxNQUFNLDZDQUFPO0FBQ2IsTUFBTSw2Q0FBTztBQUNiLE1BQU0sNkNBQU87QUFDYixNQUFNLDZDQUFPO0FBQ2I7O0FBRUE7QUFDQSxNQUFNLDBDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ055QztBQUNOO0FBQ0U7QUFDWDs7QUFFMUI7QUFDQSxpQkFBaUIsb0RBQWE7QUFDOUIsaUJBQWlCLGlEQUFVO0FBQzNCLGlCQUFpQixrREFBVyxDQUFDLDREQUFzQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICBuZXcgUHJvamVjdCgnUHJvamVjdCBPbmUnKSxcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgVHdvJyksXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IFRocmVlJyksXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IEZvdXInKSxcbl07XG5cbmNvbnN0IHRvZG9zID0gW1xuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBPbmUnLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IFR3bycsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgVGhyZWUnLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IEZvdXInLFxuICAgICdUZXN0IHRvZG8gcHJvcGVydGllcycsXG4gICAgJzI2LzA1LzIwMjAnLFxuICAgICdoaWdoJyxcbiAgICAnVGVzdCB1c2luZyBqZXN0JyxcbiAgICAncGVuZGluZycsXG4gICksXG5dO1xuXG5wcm9qZWN0c1swXS5hZGRUb2RvKHRvZG9zWzFdKTtcbnByb2plY3RzWzBdLmFkZFRvZG8odG9kb3NbMl0pO1xuXG5wcm9qZWN0c1syXS5hZGRUb2RvKHRvZG9zWzFdKTtcbnByb2plY3RzWzJdLmFkZFRvZG8odG9kb3NbMl0pO1xucHJvamVjdHNbMl0uYWRkVG9kbyh0b2Rvc1szXSk7XG5cbmNvbnN0IGRhdGEgPSB7IHByb2plY3RzIH07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKHNpdGVUaXRsZSkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2l0ZS10aXRsZScpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IHNpdGVUaXRsZTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SGVhZGVyO1xuIiwiZnVuY3Rpb24gTGlzdFByb2plY3RzKHByb2plY3RBcnIpIHtcbiAgY29uc3Qgb2JqZWN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXdyYXAnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgb2JqZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9iamVjdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotaXRlbScpO1xuXG4gICAgY29uc3Qgb2JqZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9iamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlJyk7XG4gICAgb2JqZWN0VGl0bGUuaW5uZXJIVE1MID0gYCR7cHJvamVjdEFycltpXS50aXRsZX0gKCR7cHJvamVjdEFycltpXS5jb3VudCgpfSlgO1xuXG4gICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsLWJ1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLmlubmVySFRNTCA9ICdkZWxJY29uJztcblxuICAgIG9iamVjdEl0ZW0uYXBwZW5kQ2hpbGQob2JqZWN0VGl0bGUpO1xuICAgIG9iamVjdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcblxuICAgIG9iamVjdFdyYXAuYXBwZW5kQ2hpbGQob2JqZWN0SXRlbSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFdyYXA7XG59XG5cbmZ1bmN0aW9uIExpc3RUYXNrcyh0YXNrQXJyKSB7XG4gIGNvbnN0IHRhc2tXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay13cmFwJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNhcmQnKTtcblxuICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNvbXBsZXRpb24tc3RhdGUnKTtcbiAgICBzdGF0ZS5pbm5lckhUTUwgPSAnY2hlY2tlZEljb24nO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1uYW1lJyk7XG4gICAgbmFtZS5pbm5lckhUTUwgPSBgJHt0YXNrQXJyW2ldLm5hbWV9YDtcblxuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHN0YXRlKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIHRhc2tXcmFwLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfVxuICByZXR1cm4gdGFza1dyYXA7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkVGl0bGUodG9kb09iaikge1xuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXdyYXAnKTtcblxuICBjb25zdCB0aXRsZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVMZWZ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLWxlZnQnKTtcblxuICBjb25zdCB0aXRsZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLWluZm8nKTtcblxuICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJpb3JpdHlCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1iYXInKTtcblxuICB0aXRsZUluZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuXG4gIGNvbnN0IHRpdGxlQ2xvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRpdGxlQ2xvY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1jbG9jaycpO1xuICB0aXRsZUNsb2NrLmlubmVySFRNTCA9ICdjbG9ja0ljb24nO1xuXG4gIHRpdGxlSW5mby5hcHBlbmRDaGlsZChwcmlvcml0eUJhcik7XG5cbiAgY29uc3Qgb2JqZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBvYmplY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZScpO1xuICBvYmplY3RUaXRsZS5pbm5lckhUTUwgPSBgJHt0b2RvT2JqLnRpdGxlfSAoJHt0b2RvT2JqLmNvdW50Q29tcGxldGUoKX0vJHt0b2RvT2JqLmNvdW50KCl9KWA7XG5cbiAgdGl0bGVMZWZ0LmFwcGVuZENoaWxkKHRpdGxlSW5mbyk7XG4gIHRpdGxlTGVmdC5hcHBlbmRDaGlsZChvYmplY3RUaXRsZSk7XG5cbiAgY29uc3QgdGl0bGVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZVJpZ2h0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXJpZ2h0Jyk7XG5cbiAgY29uc3Qgb2JqZWN0VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9iamVjdFRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10b2dnbGUnKTtcbiAgb2JqZWN0VG9nZ2xlLmlubmVySFRNTCA9ICdkcm9wZG93bkljb24nO1xuXG4gIGNhcmRUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZUxlZnQpO1xuICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVSaWdodCk7XG5cbiAgcmV0dXJuIGNhcmRUaXRsZTtcbn1cblxuZnVuY3Rpb24gbWFrZUNhcmRCb2R5KHRvZG9PYmopIHtcbiAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdGl0bGUtd3JhcCcpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1kdWUtZGF0ZScpO1xuXG4gIGNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkdWVEYXRlVGV4dC5pbm5lckhUTUwgPSBgRHVlIERhdGU6ICR7dG9kb09iai5kdWVEYXRlfWA7XG5cbiAgZHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlVGV4dCk7XG5cbiAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udHJvbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotY29udHJvbHMnKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1wcmlvcml0eScpO1xuXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG93LXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVkaXVtLXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoaWdoLXByaW9yaXR5Jyk7XG5cbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuICBjb25zdCBjb21wbGV0aW9uU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcGxldGlvblN0YXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNvbXBsZXRpb24tc3RhdGUnKTtcbiAgY29tcGxldGlvblN0YXRlLmlubmVySFRNTCA9ICdjaGVja2VkSWNvbic7XG5cbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChjb21wbGV0aW9uU3RhdGUpO1xuXG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1kZXNjJyk7XG4gIGRlc2MuaW5uZXJIVE1MID0gYCR7dG9kb09iai5kZXNjfWA7XG5cbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90ZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotbm90ZXMnKTtcbiAgbm90ZXMuaW5uZXJIVE1MID0gYCR7dG9kb09iai5ub3Rlc31gO1xuXG4gIGNvbnN0IHRhc2tzID0gTGlzdFRhc2tzKHRvZG9PYmoudGFza3MpO1xuXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChjb250cm9scyk7XG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGRlc2MpO1xuICBjYXJkQm9keS5hcHBlbmRDaGlsZChub3Rlcyk7XG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRhc2tzKTtcblxuICByZXR1cm4gY2FyZEJvZHk7XG59XG5cbmZ1bmN0aW9uIExpc3RUb2Rvcyh0b2RvQXJyKSB7XG4gIGNvbnN0IG9iamVjdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb2JqZWN0V3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai13cmFwJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG9iamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvYmplY3RDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWNhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IG1ha2VDYXJkVGl0bGUodG9kb0FycltpXSk7XG4gICAgY29uc3QgY2FyZEJvZHkgPSBtYWtlQ2FyZEJvZHkodG9kb0FycltpXSk7XG5cbiAgICBvYmplY3RDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgb2JqZWN0Q2FyZC5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG5cbiAgICBvYmplY3RXcmFwLmFwcGVuZENoaWxkKG9iamVjdENhcmQpO1xuICB9XG4gIHJldHVybiBvYmplY3RXcmFwO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TGlzdChvYmpBcnIsIG9ialR5cGUpIHtcbiAgaWYgKG9ialR5cGUgPT09ICdwJyB8fCBvYmpUeXBlID09PSAnUCcpIHtcbiAgICByZXR1cm4gTGlzdFByb2plY3RzKG9iakFycik7XG4gIH1cbiAgcmV0dXJuIExpc3RUb2RvcyhvYmpBcnIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TGlzdDtcbiIsImZ1bmN0aW9uIG1haW5OYXYocHJvamVjdHNDb3VudCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG4gIGNvbnN0IG5hdkl0ZW1zID0gW2BQcm9qZWN0cyAoJHtwcm9qZWN0c0NvdW50fSlgLCAnbmV3IHByb2plY3QnXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpICs9IDEpIHtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWl0ZW0nKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IG5hdkl0ZW1zW2ldO1xuICAgIG5hdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgfVxuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TmF2KHRvZG9zQ291bnQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcicpO1xuICBjb25zdCBuYXZJdGVtcyA9IFsnYmFja0ljb24nLCBgUHJvamVjdHMgKCR7dG9kb3NDb3VudH0pYCwgJ3BsdXNJY29uJ107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2SXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWl0ZW0nKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IG5hdkl0ZW1zW2ldO1xuICAgIG5hdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgfVxuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmF2KG9iamVjdENvdW50LCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSAnbScgfHwgdHlwZSA9PT0gJ20nKSB7XG4gICAgcmV0dXJuIG1haW5OYXYob2JqZWN0Q291bnQpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0TmF2KG9iamVjdENvdW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU5hdjtcbiIsImZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLnRvZG9zID0gW107XG59XG5cblByb2plY3QucHJvdG90eXBlLmFkZFRvZG8gPSBmdW5jdGlvbiBhZGRUb2RvKHRvZG9PYmopIHtcbiAgdGhpcy50b2Rvcy5wdXNoKHRvZG9PYmopO1xuICByZXR1cm4gdGhpcy50b2Rvcy5sZW5ndGg7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5yZW1vdmVUb2RvID0gZnVuY3Rpb24gcmVtb3ZlVG9kbyhpbmRleCkge1xuICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJmdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNvbXBsZXRpb25TdGF0ZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzYyA9IGRlc2M7XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB0aGlzLmNvbXBsZXRpb25TdGF0ZSA9IGNvbXBsZXRpb25TdGF0ZTtcbiAgdGhpcy50YXNrcyA9IFtdO1xuICB0aGlzLnRhc2tzQ29tcGxldGVkID0gMDtcbn1cblxuVG9kby5wcm90b3R5cGUuZWRpdCA9IGZ1bmN0aW9uIGVkaXQodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY29tcGxldGlvblN0YXRlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjID0gZGVzYztcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIHRoaXMuY29tcGxldGlvblN0YXRlID0gY29tcGxldGlvblN0YXRlO1xufTtcblxuVG9kby5wcm90b3R5cGUuY2hhbmdlUHJpb3JpdHkgPSBmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShwcmlvcml0eSkge1xuICBpZiAocHJpb3JpdHkgPT09ICdoaWdoJyB8fCBwcmlvcml0eSA9PT0gJ21lZGl1bScgfHwgcHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIGNoYW5nZVN0YXRlKGNvbXBsZXRpb25TdGF0ZSkge1xuICBpZiAoY29tcGxldGlvblN0YXRlID09PSAncGVuZGluZycgfHwgY29tcGxldGlvblN0YXRlID09PSAncHJvZ3Jlc3MnIHx8IGNvbXBsZXRpb25TdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIHRoaXMuY29tcGxldGlvblN0YXRlID0gY29tcGxldGlvblN0YXRlO1xuICB9XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5hZGRUYXNrID0gZnVuY3Rpb24gYWRkVGFzayh0YXNrT2JqKSB7XG4gIHRoaXMudGFza3MucHVzaCh0YXNrT2JqKTtcbiAgcmV0dXJuIHRoaXMudGFza3MubGVuZ3RoO1xufTtcblxuVG9kby5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiBjb3VudCgpIHtcbiAgcmV0dXJuIHRoaXMudGFza3MubGVuZ3RoO1xufTtcblxuVG9kby5wcm90b3R5cGUuY291bnRDb21wbGV0ZSA9IGZ1bmN0aW9uIGNvdW50Q29tcGxldGUoKSB7XG4gIHJldHVybiB0aGlzLnRhc2tzQ29tcGxldGVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRpc3BsYXlIZWFkZXIgZnJvbSAnLi9kb20vaGVhZGVyJztcbmltcG9ydCBkaXNwbGF5TmF2IGZyb20gJy4vZG9tL25hdic7XG5pbXBvcnQgZGlzcGxheUxpc3QgZnJvbSAnLi9kb20vbGlzdCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td3JhcCcpO1xubWFpbi5hcHBlbmRDaGlsZChkaXNwbGF5SGVhZGVyKCdCaW5nbycpKTtcbm1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheU5hdigzLCAncCcpKTtcbm1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheUxpc3QoZGF0YS5wcm9qZWN0c1syXS50b2RvcykpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==