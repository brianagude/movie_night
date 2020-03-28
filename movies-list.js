const moviesHolder =  document.querySelector('.movies-list')
const movieCounter = document.querySelector('.movie-counter')
const numberOfMovies = movies.length

// show the number of movies currently in database
movieCounter.innerHTML = `<b>${numberOfMovies}</b> movies total`

// change youtube url to embed url
function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}


function allMovies(){
  movies.forEach(movie => {
    const title = movie.title
    const trailer = movie.trailer
    const trailerID = getId(trailer);

    const renderMovie = `
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
    `

    // console.log(renderMovie)
    const singleMovie = document.createElement('div')
    singleMovie.classList.add('movie-card')
    singleMovie.innerHTML = renderMovie
    moviesHolder.insertAdjacentElement('beforeend', singleMovie)

    // start a google search when you click the title
    const titleTag = document.querySelector('.movie-title');

    titleTag.onclick = function () {
      window.open('http://google.com/search?q=' + title);
    };
  })

}

allMovies()