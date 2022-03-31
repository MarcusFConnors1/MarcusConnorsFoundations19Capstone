const testButton = document.querySelector("a.fifthLetterButton")

function test () {
    alert('You will have to *inspect* a little closer to find this letter. Maybe keeping a *log* of places to search might help?')
    console.log("R")
}

testButton.addEventListener('click', test)