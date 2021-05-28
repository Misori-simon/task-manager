import displayHeader from './dom/header';
import list from './dom/list';
import forms from './dom/forms';
import data from './data';

const main = document.getElementById('main-wrap');
main.appendChild(displayHeader('Bingo'));
main.appendChild(list.todos(data.projects[0]));
main.appendChild(forms.project);
main.appendChild(forms.todo);
main.appendChild(forms.task);
main.appendChild(list.projects(data.projects));
