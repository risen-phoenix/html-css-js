const faqBtn = document.querySelectorAll('.faq-toggle');

faqBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');

    });
});