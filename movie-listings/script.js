const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzMwNzRhMzIxZjc4YWRiNzExOTc1Y2RjMmYyYTE0ZiIsIm5iZiI6MTc2ODMxOTczMS40OTIsInN1YiI6IjY5NjY2YWYzZDA3OWQ3M2Q3NzRjMTYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6wcJHQuQEdJTOGYDRCOnplKC2GuzA_Oc77IovNT3FyQ';
const ACCOUNT_ID = '22653219';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?query=';

const search = document.getElementById('search');
const form = document.getElementById('form');
const main = document.getElementById('main');


getMovies(API_URL);

async function getMovies(url) {
    apiKey = API_KEY;
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + apiKey
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    
    showMovies(data.results);
}

async function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const {title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}"
                alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                    <span class="${getColorByRate(vote_average)}">${(vote_average.toFixed(1))}</span>
                
            </div>
            
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>`

        main.appendChild(movieEl);
    });
     
}

function getColorByRate(vote) {

    switch (true) {
        case vote >= 8:
            console.log('green');
            return 'green';
        case vote >= 5:
            console.log('orange');
            return 'orange';
        default:
            console.log('red');
            return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        searchTerm = '';
    } else {
        window.location.reload();
    }
})

