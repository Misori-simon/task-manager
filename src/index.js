import makeHeader from './dom/header';
import makeNav from './dom/nav';
import displayList from './dom/list';
import data from './data';

const main = document.getElementById('main-wrap');
main.appendChild(makeHeader('Bingo'));
main.appendChild(makeNav(2, 3));
main.appendChild(displayList(data.projects, 'p'));
