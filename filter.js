const movie = [
  {
    title: "The Interview",
    trailer: "https://www.youtube.com/embed/frsvWVEHowg?controls=0",
    imdb: "https://www.imdb.com/title/tt2788710/",
    isAction: "true",
    isAnime: "false",
    isComedy: "true",
    isCrime: "false",
    isCult: "false",
    isForeign: "false",
    isRomance: "false",
    isFamily: "false",
    isDocumentary: "false",
    isDrama: "false",
    isHorror: "false",
    isSciFi: "false",
  },
  {
    title: "Goodfellas",
    trailer: "https://www.youtube.com/embed/qo5jJpHtI1Y?controls=0",
    imdb: "https://www.imdb.com/title/tt0099685/",
    isAction: "true",
    isAnime: "false",
    isComedy: "false",
    isCrime: "true",
    isCult: "true",
    isForeign: "false",
    isRomance: "false",
    isFamily: "false",
    isDocumentary: "false",
    isDrama: "false",
    isHorror: "false",
    isSciFi: "false",
  },
  {
    title: "Mean Girls",
    trailer: "https://www.youtube.com/embed/oDU84nmSDZY?controls=0",
    imdb: "https://www.imdb.com/title/tt0377092/",
    isAction: "false",
    isAnime: "false",
    isComedy: "true",
    isCrime: "false",
    isCult: "true",
    isForeign: "false",
    isRomance: "false",
    isFamily: "false",
    isDocumentary: "false",
    isDrama: "true",
    isHorror: "false",
    isSciFi: "false",
  }
]

let movieBlock = document.querySelector('.movie-block')
let movieRecommend = document.querySelector('.movie-recommendation')
let movieBtn = document.querySelector('.movie-btn')


function randomizeMovie() {
  let randomMovie = movie[Math.floor(Math.random() * movie.length)];
  let title = randomMovie.title
  let trailer = randomMovie.trailer
  let imdb = randomMovie.imdb

  const renderMovie = `
    <div class="movie-random">
      <h5 class="movie-title">${title}</h5>
      <iframe 
        width="560" 
        height="315" 
        src="${trailer}" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen>
      </iframe>
      <a href="${imdb}" class="movie-imdb">IMDB</a>
    </div>
  `

  let movieDiv = document.createElement('div')
  movieDiv.classList.add('movie-card')
  movieRecommend.innerHTML = renderMovie;
  // movieRecommend.appendChild(movieDiv)
}





// let randomMovie = movie[Math.floor(Math.random() * movie.length)];

// let title = randomMovie.title
// let trailer = randomMovie.trailer
// let imdb = randomMovie.imdb

// const renderMovie = `
//   <div class="movie-random">
//     <h5 class="movie-title">${title}</h5>
//     <iframe 
//       width="560" 
//       height="315" 
//       src="${trailer}" 
//       frameborder="0" 
//       allow="accelerometer; 
//       autoplay; 
//       encrypted-media; 
//       gyroscope; 
//       picture-in-picture" 
//       allowfullscreen>
//     </iframe>
//     <a href="${imdb}" class="movie-imdb">IMDB</a>
//   </div>
// `

// let movieDiv = document.createElement('div')
// movieDiv.classList.add('movie-card')

movieBtn.addEventListener('click', function(){
  randomizeMovie()
})

