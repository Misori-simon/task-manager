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
    expect(testData.todo.completed).toBe(false);
  });

  it('should update Todo after edit', () => {
    testData.todo.edit(
      'Mow lawn Edited',
      'Clear the surrounding grasses edited',
      '23/03/2020',
      'low',
      'Leave immediately after school Edited',
    );
    expect(testData.todo.title).toBe('Mow lawn Edited');
    expect(testData.todo.desc).toBe('Clear the surrounding grasses edited');
    expect(testData.todo.dueDate).toBe('23/03/2020');
    expect(testData.todo.priority).toBe('low');
    expect(testData.todo.notes).toBe('Leave immediately after school Edited');
  });

  it('should change todo priority', () => {
    testData.todo.changePriority('medium');
    expect(testData.todo.priority).toBe('medium');
  });

  it('should not change todo priority unless value is low, high, medium', () => {
    testData.todo.changePriority('urgent');
    expect(testData.todo.priority).not.toBe('urgent');
  });

  it('should change todo completed to true', () => {
    testData.todo.complete();
    expect(testData.todo.completed).toBe(true);
  });
});
