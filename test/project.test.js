import testData from './testData';

describe('Project Object', () => {
  it('should have a title', () => {
    expect(testData.project.title).toBe('Testing');
  });

  it('should have an empty array of empty Todo items', () => {
    expect(testData.project.todos.length).toBe(0);
  });
});
