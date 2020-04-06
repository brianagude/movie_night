// rotating background gradient
let angle = 0

const background = function (){
  angle = angle + .2
  document.body.style.backgroundImage = "linear-gradient(" + angle + "deg, #f0f791, #19a95c"
  requestAnimationFrame(background)
}

background()

// menu
function openMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("open");
}
 

// show the number of movies currently in database
const movieCounter = document.querySelector('.movie-counter')
const numberOfMovies = movies.length
movieCounter.innerHTML = `<p><b>${numberOfMovies}</b> movies total</p>`