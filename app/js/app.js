const menu = document.querySelector('.header__menu');

const body = document.querySelector('body');

const form = document.getElementById('contact__form');

const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

menu.addEventListener('click', function () {
  if (header.classList.contains('cross')) {
    body.classList.remove('no-scroll');
    header.classList.remove('cross');
    fadeElements.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    body.classList.add('no-scroll');
    header.classList.add('cross');
    fadeElements.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});

function processForm(e) {
  if (e.preventDefault) e.preventDefault();
    

  return false;
}

if (form.attachEvent) {
  form.attachEvent('submit', processForm);
} else {
  form.addEventListener('submit', processForm);
}
