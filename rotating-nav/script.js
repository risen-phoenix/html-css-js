const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');
const searchWidget = document.querySelector('.search-widget');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    searchWidget.classList.toggle('active');
    input.focus();
});

open.addEventListener('click', () => {
    container.classList.add('show-nav');
});

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
});

