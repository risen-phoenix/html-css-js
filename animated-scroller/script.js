const rows = document.querySelectorAll(".row");

window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight / 5 * 4;

    rows.forEach(rows => {
        const rowTop = rows.getBoundingClientRect().top;
        if (rowTop < triggerPoint) {
            rows.classList.add("show");
        }
    });
});