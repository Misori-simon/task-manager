import displayHeader from './dom/header';
import displayList from './dom/list';
import forms from './dom/forms';
import data from './data';

const main = document.getElementById('main-wrap');
main.appendChild(displayHeader('Bingo'));
main.appendChild(displayList(data.projects[2]));
main.appendChild(forms.project);
main.appendChild(forms.todo);
main.appendChild(forms.task);
main.appendChild(displayList(data.projects, 'p'));
