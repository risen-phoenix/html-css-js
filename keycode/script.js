const insert = document.getElementById("insert");

window.addEventListener("keydown", function (event) {
    insert.innerHTML = `
    <section class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </section>
        <section class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </section>
        <section class="key">
                ${event.code}
                <small>event.code</small>
            </section>
    `;
});