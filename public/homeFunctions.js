const firstLetterForm = document.querySelector('form#firstletter')
const firstLetterInput = document.querySelector('input.firstinput')
const secondLetterForm = document.querySelector('form#secondletter')
const secondLetterInput = document.querySelector('input.secondinput')
const thirdLetterForm = document.querySelector('form#thirdletter')
const thirdLetterInput = document.querySelector('input.thirdinput')
const fourthLetterForm = document.querySelector('form#fourthletter')
const fourthLetterInput = document.querySelector('input.fourthinput')
const fifthLetterForm = document.querySelector('form#fifthletter')
const fifthLetterInput = document.querySelector('input.fifthinput')
const sixthLetterForm = document.querySelector('form#sixthletter')
const sixthLetterInput = document.querySelector('input.sixthinput')
const smileyFace = document.querySelector('main.homeMain')
const desc = document.querySelector('p.gamedesc')
const mainContent = document.querySelector('div.guessing')
const contentLose = document.querySelector('section.content')
const header = document.querySelector('header')
const footer = document.querySelector('footer')

let firstLetterCleared = false
let secondLetterCleared = false
let thirdLetterCleared = false
let fourthLetterCleared = false
let fifthLetterCleared = false
let sixthLetterCleared = false

let firstAnswer = ' '
let secondAnswer = ' '
let thirdAnswer = ' '
let fourthAnswer = ' '
let fifthAnswer = ' '
let sixthAnswer = ' '

let attempts = 0

function firstLetter (evt) {
    evt.preventDefault()
    let firstAnswer = firstLetterInput.value
    if(firstAnswer.length > 1 || firstAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    axios.put(`http://localhost:5550/public/home/letters/1/${firstAnswer}`)
    .then(res => {
        console.log(res.data)
        if(attempts === res.data){
            firstLetterCleared = true
            firstLetterForm.classList.add('hide')
            alert('First Letter Down')
        }else{
            attempts = res.data
        }
        smileyFaceStatus()
        youWon()
    })
    firstLetterInput.value = ''
}

function secondLetter (evt) {
    evt.preventDefault()
    let secondAnswer = secondLetterInput.value
    if(secondAnswer.length > 1 || secondAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    axios.put(`http://localhost:5550/public/home/letters/2/${secondAnswer}`)
    .then(res => {
        console.log(res.data)
        if(attempts === res.data){
            secondLetterCleared = true
            secondLetterForm.classList.add('hide')
            alert('Second Letter Down')
        }else{
            attempts = res.data
        }
        smileyFaceStatus()
        youWon()
    })
    secondLetterInput.value = ''
}

function thirdLetter (evt) {
    evt.preventDefault()
    let thirdAnswer = thirdLetterInput.value
    if(thirdAnswer.length > 1 || thirdAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    axios.put(`http://localhost:5550/public/home/letters/3/${thirdAnswer}`)
    .then(res => {
        console.log(res.data)
        if(attempts === res.data){
            thirdLetterCleared = true
            thirdLetterForm.classList.add('hide')
            alert('Third Letter Down')
        }else{
            attempts = res.data
        }
        smileyFaceStatus()
        youWon()
    })
    thirdLetterInput.value = ''
}

function fourthLetter (evt) {
    evt.preventDefault()
    let fourthAnswer = fourthLetterInput.value
    if(fourthAnswer.length > 1 || fourthAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    axios.put(`http://localhost:5550/public/home/letters/4/${fourthAnswer}`)
    .then(res => {
        console.log(res.data)
        if(attempts === res.data){
            fourthLetterCleared = true
            fourthLetterForm.classList.add('hide')
            alert('Fourth Letter Down')
        }else{
            attempts = res.data
        }
        smileyFaceStatus()
        youWon()
    })
    fourthLetterInput.value = ''
}

function fifthLetter (evt) {
    evt.preventDefault()
    let fifthAnswer = fifthLetterInput.value
    if(fifthAnswer.length > 1 || fifthAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    axios.put(`http://localhost:5550/public/home/letters/5/${fifthAnswer}`)
    .then(res => {
        console.log(res.data)
        if(attempts === res.data){
            fifthLetterCleared = true
            fifthLetterForm.classList.add('hide')
            alert('Fifth Letter Down')
        }else{
            attempts = res.data
        }
        smileyFaceStatus()
        youWon()
    })
    fifthLetterInput.value = ''
}

function sixthLetter (evt) {
    evt.preventDefault()
    let sixthAnswer = sixthLetterInput.value
    if(sixthAnswer.length > 1 || sixthAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    axios.put(`http://localhost:5550/public/home/letters/6/${sixthAnswer}`)
    .then(res => {
        console.log(res.data)
        if(attempts === res.data){
            sixthLetterCleared = true
            sixthLetterForm.classList.add('hide')
            alert('Sixth Letter Down')
        }else{
            attempts = res.data
        }
        smileyFaceStatus()
        youWon()
    })
    sixthLetterInput.value = ''
    
}

function youWon () {
    if(firstLetterCleared === true && secondLetterCleared === true && thirdLetterCleared === true && fourthLetterCleared === true && fifthLetterCleared === true && sixthLetterCleared === true){
        mainContent.classList.add('hide')
        header.classList.add('hide')
        footer.classList.add('hide')
        const lossCont = document.createElement('div')
        lossCont.classList.add('lost')
        contentLose.appendChild(lossCont)
        const loss = document.createElement('h1')
        const test = document.createTextNode("Congrats")
        loss.appendChild(test)
        contentLose.appendChild(loss)
        const lossDesc = document.createElement('h3')
        const test1 = document.createTextNode("He Goes Free! I knew you could do it")
        lossDesc.appendChild(test1)
        contentLose.appendChild(lossDesc)
    }
}

function smileyFaceStatus () {
    if(attempts === 1){
        smileyFace.style.backgroundImage = 'url("/smileyFace2.png")'
        desc.innerHTML = "Yikes! That's one strike right there! Look what you did! Hope you can get it right before he gets worse! Did you forget the first letter is A?"
    }else if(attempts === 2){
        smileyFace.style.backgroundImage = 'url("/smileyFace3.png")'
        desc.innerHTML = "Uh Oh, he's, not looking too good. I don't know how much more me can take. Are you even trying now? Make sure you know the first letter is A!"
    }else if(attempts === 3){
        smileyFace.style.backgroundImage = 'url("/smileyFace4.png")'
        mainContent.classList.add('hide')
        header.classList.add('hide')
        footer.classList.add('hide')
        const lossCont = document.createElement('div')
        lossCont.classList.add('lost')
        contentLose.appendChild(lossCont)
        const loss = document.createElement('h1')
        const test = document.createTextNode("YOU LOSE")
        loss.appendChild(test)
        contentLose.appendChild(loss)
        const lossDesc = document.createElement('h3')
        const test1 = document.createTextNode("Want to Try Again? Click Refresh")
        lossDesc.appendChild(test1)
        contentLose.appendChild(lossDesc)
    }
}

function getSmileyFaceStatus() {
    axios.get('http://localhost:5550/public/home')
    .then(res => {
        attempts = res.data
        smileyFaceStatus()
    })
}

function firstForm() {
    axios.get('http://localhost:5550/public/home/input/1')
    .then(res => {
        if(res.data === true){
            firstLetterForm.classList.add('hide')
            firstLetterCleared = true
            youWon()
        }
    })
}

function secondForm() {
    axios.get('http://localhost:5550/public/home/input/2')
    .then(res => {
        if(res.data === true){
            secondLetterForm.classList.add('hide')
            secondLetterCleared = true
            youWon()
        }
    })
}

function thirdForm() {
    axios.get('http://localhost:5550/public/home/input/3')
    .then(res => {
        if(res.data === true){
            thirdLetterForm.classList.add('hide')
            thirdLetterCleared = true
            youWon()
        }
    })
}

function fourthForm() {
    axios.get('http://localhost:5550/public/home/input/4')
    .then(res => {
        if(res.data === true){
            fourthLetterForm.classList.add('hide')
            fourthLetterCleared = true
            youWon()
        }
    })
}

function fifthForm() {
    axios.get('http://localhost:5550/public/home/input/5')
    .then(res => {
        if(res.data === true){
            fifthLetterForm.classList.add('hide')
            fifthLetterCleared = true
            youWon()
        }
    })
}

function sixthForm() {
    axios.get('http://localhost:5550/public/home/input/6')
    .then(res => {
        if(res.data === true){
            sixthLetterForm.classList.add('hide')
            sixthLetterCleared = true
            youWon()
        }
    })
}

firstForm()
secondForm()
thirdForm()
fourthForm()
fifthForm()
sixthForm()
getSmileyFaceStatus()
youWon()

firstLetterForm.addEventListener('submit', firstLetter)
secondLetterForm.addEventListener('submit', secondLetter)
thirdLetterForm.addEventListener('submit', thirdLetter)
fourthLetterForm.addEventListener('submit', fourthLetter)
fifthLetterForm.addEventListener('submit', fifthLetter)
sixthLetterForm.addEventListener('submit', sixthLetter)