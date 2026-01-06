const headerContainer = document.querySelector('.header-container');
const leftSplit = document.querySelector('.split.left');
const rightSplit = document.querySelector('.split.right');

leftSplit.addEventListener('mouseenter', () => headerContainer.classList.add('hover-left'));
leftSplit.addEventListener('mouseleave', () => headerContainer.classList.remove('hover-left'));

rightSplit.addEventListener('mouseenter', () => headerContainer.classList.add('hover-right'));
rightSplit.addEventListener('mouseleave', () => headerContainer.classList.remove('hover-right'));
