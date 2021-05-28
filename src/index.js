import displayHeader from './dom/header';
import displayNav from './dom/nav';
import displayList from './dom/list';
import forms from './dom/forms';
import data from './data';

const main = document.getElementById('main-wrap');
main.appendChild(displayHeader('Bingo'));
main.appendChild(displayNav(3, 'p'));
main.appendChild(displayList(data.projects[2].todos));
main.appendChild(forms.project);
main.appendChild(forms.todo);
main.appendChild(forms.task);
