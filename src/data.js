import Project from './project';
import Todo from './todo';

const projects = [
  new Project('Project One'),
  new Project('Project Two'),
  new Project('Project Three'),
  new Project('Project Four'),
];

const todos = [
  new Todo(
    'Test One',
    'Test todo properties',
    '26/05/2020',
    'high',
    'Test using jest',
    'pending',
  ),
  new Todo(
    'Test Two',
    'Test todo properties',
    '26/05/2020',
    'high',
    'Test using jest',
    'pending',
  ),
  new Todo(
    'Test Three',
    'Test todo properties',
    '26/05/2020',
    'high',
    'Test using jest',
    'pending',
  ),
  new Todo(
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
export default data;
