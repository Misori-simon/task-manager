import testData from './testData';

describe('Task Object', () => {
  it('should have a name', () => {
    expect(testData.task.name).toBe('Task One');
  });

  it('should have completed set to false', () => {
    expect(testData.task.completed).toBe(false);
  });

  it('should change compeleted to true', () => {
    testData.task.complete(testData.todo);
    expect(testData.task.completed).toBe(true);
  });
});
