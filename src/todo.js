function Todo(title, desc, dueDate, priority, notes, completionState) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.completionState = completionState;
}

Todo.prototype.edit = function (title, desc, dueDate, priority, notes, completionState) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.completionState = completionState;
};

Todo.prototype.changePriority = function (priority) {
  if (priority === 'high' || priority === 'medium' || priority === 'low') {
    this.priority = priority;
  }
};

Todo.prototype.changeState = function (completionState) {
  if (completionState === 'pending' || completionState === 'progress' || completionState === 'complete') {
    this.completionState = completionState;
  }
};

export default Todo;
