import forms from './forms';
import utils from './utils';

function mainNav(projectsCount) {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'header');

  const heading = document.createElement('h2');
  heading.setAttribute('class', 'nav-item');
  heading.innerHTML = `Projects (${projectsCount})`;

  const newProjectBtn = document.createElement('button');
  newProjectBtn.setAttribute('type', 'button');
  newProjectBtn.setAttribute('class', 'nav-item');
  newProjectBtn.innerHTML = 'new project';
  newProjectBtn.addEventListener('click', () => {
    utils.toggleForm(newProjectBtn, forms.project, nav, 'new project', 'close');
  });

  nav.appendChild(heading);
  nav.appendChild(newProjectBtn);

  return nav;
}

function projectNav(projectTitle, todosCount) {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'header');

  const backIcon = document.createElement('span');
  backIcon.setAttribute('class', 'nav-item');
  backIcon.innerHTML = 'backIcon';

  const heading = document.createElement('span');
  heading.setAttribute('class', 'nav-item');
  heading.innerHTML = `${projectTitle} (${todosCount})`;

  const newtodoBtn = document.createElement('button');
  newtodoBtn.setAttribute('type', 'button');
  newtodoBtn.setAttribute('class', 'nav-item');
  newtodoBtn.innerHTML = 'new todo';
  newtodoBtn.addEventListener('click', () => {
    utils.toggleForm(newtodoBtn, forms.todo, nav, 'new todo', 'close');
  });

  nav.appendChild(backIcon);
  nav.appendChild(heading);
  nav.appendChild(newtodoBtn);
  return nav;
}

const nav = {
  main: mainNav,
  project: projectNav,
};

export default nav;
