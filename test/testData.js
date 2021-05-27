import Todo from '../src/todo';
import Project from '../src/project';

const testData = {
  todo: new Todo(
    'Test properties',
    'Test todo properties',
    '26/05/2020',
    'high',
    'Test using jest',
    'pending',
  ),

  project: new Project('Testing'),
};

export default testData;
