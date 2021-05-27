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

export default Todo;
