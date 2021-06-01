import Todo from '../src/todo';
import Project from '../src/project';
import Task from '../src/task';

const testData = {
  todo: new Todo(
    'Test properties',
    'Test todo properties',
    '26/05/2020',
    'high',
    'Test using jest',
  ),

  project: new Project('Testing'),
  task: new Task('Task One'),
};

export default testData;
