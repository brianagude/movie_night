// some variables
let movieBlock = document.querySelector('.movie-block')
let movieRecommend = document.querySelector('.movie-recommendation')
let movieBtn = document.querySelector('.movie-btn')

// change youtube url to embed url
function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

// get a random movie
function randomizeMovie() {

  // some more variables
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  const title = randomMovie.title
  const trailer = randomMovie.trailer
  const imdb = randomMovie.imdb
  const trailerID = getId(trailer);

  // create random movie div
  const renderMovie = `
    <div class="movie-random">
      <h4 class="movie-title"><a href="${imdb}">${title}</a></h4>
      
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/${trailerID}?controls=0"
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
  let movieDiv = document.createElement('div')
  movieDiv.classList.add('movie-card')
  movieRecommend.innerHTML = renderMovie;
  movieBtn.innerHTML = 'Gimme Another Movie!'
}

movieBtn.addEventListener('click', function(){
  randomizeMovie()
})





