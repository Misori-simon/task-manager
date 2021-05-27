import makeHeader from './dom/header';
import makeNav from './dom/nav';

const main = document.getElementById('main-wrap');
main.appendChild(makeHeader('Bingo'));
main.appendChild(makeNav(2, 3));
