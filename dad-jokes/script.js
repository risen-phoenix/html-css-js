const jokeBtn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
    const url = "https://icanhazdadjoke.com/";
    const config = {
        headers: {
            Accept: "application/json"
        }
    };
    const res = await fetch(url, config);
    const data = await res.json();
    joke.innerHTML = data.joke;
}