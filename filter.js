const movieBlock = document.querySelector('.movie-block')
const movieRecommend = document.querySelector('.movie-recommendation')
const movieBtn = document.querySelector('.movie-btn')
const finePrint = document.querySelector('.movie-block small')
const movieCounter = document.querySelector('.movie-counter')
const numberOfMovies = movies.length

// show the number of movies currently in database
movieCounter.innerHTML = `<a href="movieslist.html" class="list-btn"><b>${numberOfMovies}</b> movies total</a>`

// change youtube url to embed url
function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

// get a random movie without repeats!
function randomMovie(moviesList) {
  let moviesListSlice = moviesList.slice(0);

  return function () {
    if (moviesListSlice.length < 1) { moviesListSlice = moviesList.slice(0); }
    let index = Math.floor(Math.random() * moviesListSlice.length);
    let item = moviesListSlice[index];
    moviesListSlice.splice(index, 1);
    return item;
  };
}

const randomize = randomMovie(movies);

// add a random movie to the page
function randomizeMovie() {
  const randomMovie = randomize()
  const title = randomMovie.title
  const trailer = randomMovie.trailer
  const trailerID = getId(trailer);

  // create random movie div
  const renderMovie = `
    <div class="movie-random">
      <h4 class="movie-title">${title}</h4>
      
      <iframe 
        width="680" 
        height="384" 
        src="https://www.youtube.com/embed/${trailerID}?version=3&loop=1&playlist=${trailerID}"
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen>
      </iframe>
      
    </div>
  `

  // create a div, fill it with random movie info, add it to the page
  const movieDiv = document.createElement('div')
  movieDiv.classList.add('movie-card')
  movieRecommend.innerHTML = renderMovie;
  movieBtn.innerHTML = 'Gimme Another Movie!'
  finePrint.innerHTML = 'Click the movie title for a <b>sURpriSe</b>!'

  // start a google search when you click the title
  const titleTag = document.querySelector('.movie-title');
  
  titleTag.onclick = function () {
    window.open('http://google.com/search?q=' + title);
  };
}

randomizeMovie()

movieBtn.addEventListener('click', function(){
  randomizeMovie()
})





