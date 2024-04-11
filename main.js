const movies = [
    { title: "The Shawshank Redemption", image: "shawshank_redemption.jpg" },
    { title: "The Godfather", image: "godfather.jpg" },
    { title: "The Dark Knight", image: "dark_knight.jpg" }
];

const moviesContainer = document.getElementById('movies-container');

function displayMovies() {
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="images/${movie.image}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        moviesContainer.appendChild(movieElement);
    });
}

displayMovies();
