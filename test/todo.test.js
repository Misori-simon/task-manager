import testData from './testData';

describe('Todo Object', () => {
  it('should have a title', () => {
    expect(testData.todo.title).toBe('Test properties');
  });

  it('should have a description', () => {
    expect(testData.todo.desc).toBe('Test todo properties');
  });

  it('should have a due date', () => {
    expect(testData.todo.dueDate).toBe('26/05/2020');
  });

  it('should have a priority', () => {
    expect(testData.todo.priority).toBe('high');
  });

  it('should have notes', () => {
    expect(testData.todo.notes).toBe('Test using jest');
  });

  it('should have a Completion State', () => {
    expect(testData.todo.completionState).toBe('pending');
  });
});
