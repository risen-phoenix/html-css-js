const searchWidget = document.querySelector('.search-widget');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    searchWidget.classList.toggle('active');
    input.focus();
});

