'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//PAGE NAVIGATION
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//EVENT DELEGATION
//1. add event to common parent element
//2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();

    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //Guard clause
  if (!clicked) return;

  //Remove active classes
  tabContent.forEach(c => c.classList.remove('operations__content--active'));

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation
const handleOver = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing 'argument' to handler function - only accepts one
nav.addEventListener('mouseover', handleOver.bind(0.5));
nav.addEventListener('mouseout', handleOver.bind(1));

//Sticky nav
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function (e) {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//Intersection Observer API
const obsCallback = function (entries, observer) {
  entries.forEach(entry => console.log(entry));
};
const obsOptions = {
  root: null,
  threshold: 0.1,
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
///////////////////////////////////////////////////////////////////
//LECTURE
console.log(document.documentElement);
console.log(document.head);

const header = document.querySelector('.header');
console.log(header);

const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//creating and inserting elements
//.insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//add element as first child vs append - adds as last child
//DOM element is unique - can only be in one place at a time
// header.prepend(message);
//copy element
// header.append(message.cloneNode(true));
header.append(message);

//add elements as sibling
// header.before(message);
// header.after(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Styles, Attributes and Classes
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//only works with inline styles e.g. set thru DOM style property
console.log(message.style.color);
console.log(message.style.backgroundColor);
//gets all style properties
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//Setting Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

//Non-standard
logo.setAttribute('designer', 'Will');
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

//access absolute path
console.log(logo.src);
//gets actual property, relative path
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data Attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//mouse pos coords, viewport height and width
// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());
//   console.log('Current scroll x-y', window.scrollX, scrollY);
//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
// });

//EVENTS
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('Hi');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// h1.onmouseenter = function (e) {
//   alert('Hi');
// };

//BUBBLING
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

//DOM Traversing
//-selecting elements based on other elements

// console.log(h1.querySelectorAll('.highlight'));
//direct children
// console.log(h1.childNodes);
//get elements inside parent
// console.log(h1.children);
// h1.firstElementChild.style.color = 'blue';
// h1.lastElementChild.style.color = 'pink';

//going upwards - to parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

//going sideways - siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
