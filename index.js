let square = document.querySelector('.square')
let triangle = document.querySelector('.triangle')
let circle = document.querySelector('.circle')

function gotRandomColour(object) {
  return object.onclick = () => {
    object.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    object.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
  }
}

gotRandomColour(square)
gotRandomColour(triangle)
gotRandomColour(circle)




let text = ['Hey', 'You', 'Boy']

for(let i = 0; i < text.length; i++){
  circle.textContent += text[i]
}







