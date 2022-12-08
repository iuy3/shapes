let square = document.querySelector('.square')
let triangle = document.querySelector('.triangle')

function getRandomColour(object) {
  return object.onclick = () => {
    square.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
  }
}

getRandomColour(square)



