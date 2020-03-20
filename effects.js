// background gradient
let angle = 0
const wrapper = document.querySelector('.wrapper')

const background = function (){
  angle = angle + .2

  wrapper.style.backgroundImage = "linear-gradient(" + angle + "deg, #f0f791, #19a95c"
  requestAnimationFrame(background)
}

background()