const helpButton = document.querySelector('button#helpbutton')
const guessTheName = document.querySelector('h1.header')

function sixthLetter () {
    if(guessTheName.innerHTML === "Guess The Name"){
      guessTheName.innerHTML = 'Guiss Thi Nami'  
    } else if(guessTheName.innerHTML === "Guiss Thi Nami"){
        guessTheName.innerHTML = 'Guess The Name'
    }
}

helpButton.addEventListener('mouseover', sixthLetter)
helpButton.addEventListener('mouseoff', sixthLetter)