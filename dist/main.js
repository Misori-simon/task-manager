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
function makeHeader(siteTitle) {
  const header = document.createElement('header');
  header.setAttribute('class', 'header');
  const heading = document.createElement('h2');
  heading.setAttribute('class', 'site-title');
  heading.innerHTML = siteTitle;
  header.appendChild(heading);
  return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHeader);


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
function displayProjects(projectArr) {
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

function displayTasks(taskArr) {
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
  objectTitle.innerHTML = `${todoObj.title} (${todoObj.countComplete}/${todoObj.count})`;

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

  const tasks = displayTasks(todoObj.tasks);

  cardBody.appendChild(dueDate);
  cardBody.appendChild(controls);
  cardBody.appendChild(desc);
  cardBody.appendChild(notes);
  cardBody.appendChild(tasks);

  return cardBody;
}

function displayTodos(todoArr) {
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
    return displayProjects(objArr);
  }
  return displayTodos(objArr);
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

function makeNav(objectCount, type) {
  if (type === 1) {
    return mainNav(objectCount);
  }
  return projectNav(objectCount);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeNav);


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
main.appendChild((0,_dom_nav__WEBPACK_IMPORTED_MODULE_1__.default)(2, 3));
main.appendChild((0,_dom_list__WEBPACK_IMPORTED_MODULE_2__.default)(_data__WEBPACK_IMPORTED_MODULE_3__.default.projects, 'p'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvZG9tL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL2RvbS9uYXYuanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTjs7QUFFMUI7QUFDQSxNQUFNLDZDQUFPO0FBQ2IsTUFBTSw2Q0FBTztBQUNiLE1BQU0sNkNBQU87QUFDYixNQUFNLDZDQUFPO0FBQ2I7O0FBRUE7QUFDQSxNQUFNLDBDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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Ozs7OztBQ05zQztBQUNOO0FBQ0s7QUFDWDs7QUFFMUI7QUFDQSxpQkFBaUIsb0RBQVU7QUFDM0IsaUJBQWlCLGlEQUFPO0FBQ3hCLGlCQUFpQixrREFBVyxDQUFDLG1EQUFhIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gIG5ldyBQcm9qZWN0KCdQcm9qZWN0IE9uZScpLFxuICBuZXcgUHJvamVjdCgnUHJvamVjdCBUd28nKSxcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgVGhyZWUnKSxcbiAgbmV3IFByb2plY3QoJ1Byb2plY3QgRm91cicpLFxuXTtcblxuY29uc3QgdG9kb3MgPSBbXG4gIG5ldyBUb2RvKFxuICAgICdUZXN0IE9uZScsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgVHdvJyxcbiAgICAnVGVzdCB0b2RvIHByb3BlcnRpZXMnLFxuICAgICcyNi8wNS8yMDIwJyxcbiAgICAnaGlnaCcsXG4gICAgJ1Rlc3QgdXNpbmcgamVzdCcsXG4gICAgJ3BlbmRpbmcnLFxuICApLFxuICBuZXcgVG9kbyhcbiAgICAnVGVzdCBUaHJlZScsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbiAgbmV3IFRvZG8oXG4gICAgJ1Rlc3QgRm91cicsXG4gICAgJ1Rlc3QgdG9kbyBwcm9wZXJ0aWVzJyxcbiAgICAnMjYvMDUvMjAyMCcsXG4gICAgJ2hpZ2gnLFxuICAgICdUZXN0IHVzaW5nIGplc3QnLFxuICAgICdwZW5kaW5nJyxcbiAgKSxcbl07XG5cbnByb2plY3RzWzBdLmFkZFRvZG8odG9kb3NbMV0pO1xucHJvamVjdHNbMF0uYWRkVG9kbyh0b2Rvc1syXSk7XG5cbnByb2plY3RzWzJdLmFkZFRvZG8odG9kb3NbMV0pO1xucHJvamVjdHNbMl0uYWRkVG9kbyh0b2Rvc1syXSk7XG5wcm9qZWN0c1syXS5hZGRUb2RvKHRvZG9zWzNdKTtcblxuY29uc3QgZGF0YSA9IHsgcHJvamVjdHMgfTtcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJmdW5jdGlvbiBtYWtlSGVhZGVyKHNpdGVUaXRsZSkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2l0ZS10aXRsZScpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IHNpdGVUaXRsZTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlSGVhZGVyO1xuIiwiZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKHByb2plY3RBcnIpIHtcbiAgY29uc3Qgb2JqZWN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXdyYXAnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgb2JqZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9iamVjdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotaXRlbScpO1xuXG4gICAgY29uc3Qgb2JqZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9iamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlJyk7XG4gICAgb2JqZWN0VGl0bGUuaW5uZXJIVE1MID0gYCR7cHJvamVjdEFycltpXS50aXRsZX0gKCR7cHJvamVjdEFycltpXS5jb3VudCgpfSlgO1xuXG4gICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsLWJ1dHRvbicpO1xuICAgIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLmlubmVySFRNTCA9ICdkZWxJY29uJztcblxuICAgIG9iamVjdEl0ZW0uYXBwZW5kQ2hpbGQob2JqZWN0VGl0bGUpO1xuICAgIG9iamVjdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcblxuICAgIG9iamVjdFdyYXAuYXBwZW5kQ2hpbGQob2JqZWN0SXRlbSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFdyYXA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyh0YXNrQXJyKSB7XG4gIGNvbnN0IHRhc2tXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay13cmFwJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNhcmQnKTtcblxuICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWNvbXBsZXRpb24tc3RhdGUnKTtcbiAgICBzdGF0ZS5pbm5lckhUTUwgPSAnY2hlY2tlZEljb24nO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1uYW1lJyk7XG4gICAgbmFtZS5pbm5lckhUTUwgPSBgJHt0YXNrQXJyW2ldLm5hbWV9YDtcblxuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHN0YXRlKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIHRhc2tXcmFwLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfVxuICByZXR1cm4gdGFza1dyYXA7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkVGl0bGUodG9kb09iaikge1xuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLXdyYXAnKTtcblxuICBjb25zdCB0aXRsZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVMZWZ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLWxlZnQnKTtcblxuICBjb25zdCB0aXRsZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRpdGxlLWluZm8nKTtcblxuICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJpb3JpdHlCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1iYXInKTtcblxuICB0aXRsZUluZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuXG4gIGNvbnN0IHRpdGxlQ2xvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRpdGxlQ2xvY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1jbG9jaycpO1xuICB0aXRsZUNsb2NrLmlubmVySFRNTCA9ICdjbG9ja0ljb24nO1xuXG4gIHRpdGxlSW5mby5hcHBlbmRDaGlsZChwcmlvcml0eUJhcik7XG5cbiAgY29uc3Qgb2JqZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBvYmplY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZScpO1xuICBvYmplY3RUaXRsZS5pbm5lckhUTUwgPSBgJHt0b2RvT2JqLnRpdGxlfSAoJHt0b2RvT2JqLmNvdW50Q29tcGxldGV9LyR7dG9kb09iai5jb3VudH0pYDtcblxuICB0aXRsZUxlZnQuYXBwZW5kQ2hpbGQodGl0bGVJbmZvKTtcbiAgdGl0bGVMZWZ0LmFwcGVuZENoaWxkKG9iamVjdFRpdGxlKTtcblxuICBjb25zdCB0aXRsZVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlUmlnaHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotdGl0bGUtcmlnaHQnKTtcblxuICBjb25zdCBvYmplY3RUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb2JqZWN0VG9nZ2xlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXRvZ2dsZScpO1xuICBvYmplY3RUb2dnbGUuaW5uZXJIVE1MID0gJ2Ryb3Bkb3duSWNvbic7XG5cbiAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHRpdGxlTGVmdCk7XG4gIGNhcmRUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVJpZ2h0KTtcblxuICByZXR1cm4gY2FyZFRpdGxlO1xufVxuXG5mdW5jdGlvbiBtYWtlQ2FyZEJvZHkodG9kb09iaikge1xuICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai10aXRsZS13cmFwJyk7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWR1ZS1kYXRlJyk7XG5cbiAgY29uc3QgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGR1ZURhdGVUZXh0LmlubmVySFRNTCA9IGBEdWUgRGF0ZTogJHt0b2RvT2JqLmR1ZURhdGV9YDtcblxuICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KTtcblxuICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250cm9scy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1jb250cm9scycpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXByaW9yaXR5Jyk7XG5cbiAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsb3ctcHJpb3JpdHknKTtcblxuICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZWRpdW0tcHJpb3JpdHknKTtcblxuICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG5cbiAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hpZ2gtcHJpb3JpdHknKTtcblxuICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGNvbXBsZXRpb25TdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21wbGV0aW9uU3RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotY29tcGxldGlvbi1zdGF0ZScpO1xuICBjb21wbGV0aW9uU3RhdGUuaW5uZXJIVE1MID0gJ2NoZWNrZWRJY29uJztcblxuICBjb250cm9scy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKGNvbXBsZXRpb25TdGF0ZSk7XG5cbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLWRlc2MnKTtcbiAgZGVzYy5pbm5lckhUTUwgPSBgJHt0b2RvT2JqLmRlc2N9YDtcblxuICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29iai1ub3RlcycpO1xuICBub3Rlcy5pbm5lckhUTUwgPSBgJHt0b2RvT2JqLm5vdGVzfWA7XG5cbiAgY29uc3QgdGFza3MgPSBkaXNwbGF5VGFza3ModG9kb09iai50YXNrcyk7XG5cbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGNvbnRyb2xzKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQodGFza3MpO1xuXG4gIHJldHVybiBjYXJkQm9keTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9zKHRvZG9BcnIpIHtcbiAgY29uc3Qgb2JqZWN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvYmplY3RXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb2JqLXdyYXAnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgb2JqZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9iamVjdENhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvYmotY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZFRpdGxlID0gbWFrZUNhcmRUaXRsZSh0b2RvQXJyW2ldKTtcbiAgICBjb25zdCBjYXJkQm9keSA9IG1ha2VDYXJkQm9keSh0b2RvQXJyW2ldKTtcblxuICAgIG9iamVjdENhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBvYmplY3RDYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcblxuICAgIG9iamVjdFdyYXAuYXBwZW5kQ2hpbGQob2JqZWN0Q2FyZCk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFdyYXA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0KG9iakFyciwgb2JqVHlwZSkge1xuICBpZiAob2JqVHlwZSA9PT0gJ3AnIHx8IG9ialR5cGUgPT09ICdQJykge1xuICAgIHJldHVybiBkaXNwbGF5UHJvamVjdHMob2JqQXJyKTtcbiAgfVxuICByZXR1cm4gZGlzcGxheVRvZG9zKG9iakFycik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlMaXN0O1xuIiwiZnVuY3Rpb24gbWFpbk5hdihwcm9qZWN0c0NvdW50KSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcbiAgY29uc3QgbmF2SXRlbXMgPSBbYFByb2plY3RzICgke3Byb2plY3RzQ291bnR9KWAsICduZXcgcHJvamVjdCddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gbmF2SXRlbXNbaV07XG4gICAgbmF2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICB9XG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIHByb2plY3ROYXYodG9kb3NDb3VudCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG4gIGNvbnN0IG5hdkl0ZW1zID0gWydiYWNrSWNvbicsIGBQcm9qZWN0cyAoJHt0b2Rvc0NvdW50fSlgLCAncGx1c0ljb24nXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZJdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gbmF2SXRlbXNbaV07XG4gICAgbmF2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICB9XG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIG1ha2VOYXYob2JqZWN0Q291bnQsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IDEpIHtcbiAgICByZXR1cm4gbWFpbk5hdihvYmplY3RDb3VudCk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3ROYXYob2JqZWN0Q291bnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlTmF2O1xuIiwiZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMudG9kb3MgPSBbXTtcbn1cblxuUHJvamVjdC5wcm90b3R5cGUuYWRkVG9kbyA9IGZ1bmN0aW9uIGFkZFRvZG8odG9kb09iaikge1xuICB0aGlzLnRvZG9zLnB1c2godG9kb09iaik7XG4gIHJldHVybiB0aGlzLnRvZG9zLmxlbmd0aDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLnJlbW92ZVRvZG8gPSBmdW5jdGlvbiByZW1vdmVUb2RvKGluZGV4KSB7XG4gIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgcmV0dXJuIHRoaXMudG9kb3MubGVuZ3RoO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiBjb3VudCgpIHtcbiAgcmV0dXJuIHRoaXMudG9kb3MubGVuZ3RoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY29tcGxldGlvblN0YXRlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjID0gZGVzYztcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIHRoaXMuY29tcGxldGlvblN0YXRlID0gY29tcGxldGlvblN0YXRlO1xufVxuXG5Ub2RvLnByb3RvdHlwZS5lZGl0ID0gZnVuY3Rpb24gZWRpdCh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjb21wbGV0aW9uU3RhdGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2MgPSBkZXNjO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMubm90ZXMgPSBub3RlcztcbiAgdGhpcy5jb21wbGV0aW9uU3RhdGUgPSBjb21wbGV0aW9uU3RhdGU7XG59O1xuXG5Ub2RvLnByb3RvdHlwZS5jaGFuZ2VQcmlvcml0eSA9IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KHByaW9yaXR5KSB7XG4gIGlmIChwcmlvcml0eSA9PT0gJ2hpZ2gnIHx8IHByaW9yaXR5ID09PSAnbWVkaXVtJyB8fCBwcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn07XG5cblRvZG8ucHJvdG90eXBlLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gY2hhbmdlU3RhdGUoY29tcGxldGlvblN0YXRlKSB7XG4gIGlmIChjb21wbGV0aW9uU3RhdGUgPT09ICdwZW5kaW5nJyB8fCBjb21wbGV0aW9uU3RhdGUgPT09ICdwcm9ncmVzcycgfHwgY29tcGxldGlvblN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RhdGUgPSBjb21wbGV0aW9uU3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtYWtlSGVhZGVyIGZyb20gJy4vZG9tL2hlYWRlcic7XG5pbXBvcnQgbWFrZU5hdiBmcm9tICcuL2RvbS9uYXYnO1xuaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gJy4vZG9tL2xpc3QnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJztcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdyYXAnKTtcbm1haW4uYXBwZW5kQ2hpbGQobWFrZUhlYWRlcignQmluZ28nKSk7XG5tYWluLmFwcGVuZENoaWxkKG1ha2VOYXYoMiwgMykpO1xubWFpbi5hcHBlbmRDaGlsZChkaXNwbGF5TGlzdChkYXRhLnByb2plY3RzLCAncCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=