import testData from './testData';

describe('Project Object', () => {
  it('should have a title', () => {
    expect(testData.project.title).toBe('Testing');
  });

  it('should have an empty array of empty Todo items', () => {
    expect(testData.project.todos.length).toBe(0);
  });

  it('should add a Todo item to Project todos array ', () => {
    testData.project.addTodo(testData.todo);
    testData.project.addTodo(testData.todo);
    expect(testData.project.todos.length).toBe(2);
  });

  it('should removed a Todo item to Project todos array ', () => {
    testData.project.removeTodo(0);
    expect(testData.project.todos.length).toBe(1);
  });

  it('should return a count of Todo items in a Project ', () => {
    expect(testData.project.count()).toBe(1);
  });
});
