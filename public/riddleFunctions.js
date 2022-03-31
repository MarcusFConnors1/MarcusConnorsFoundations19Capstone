const riddleForm = document.querySelector('form.riddleForm')
const riddleInput = document.querySelector('input.riddleInput')
const riddleButton = document.querySelector('button.riddleSubmit')

function riddle () {
    riddleInput.value.toLowerCase()
    if(riddleInput.value === 'pliers'){
        alert("The Second Letter is E")
    }else{
        alert('Uh oh, try a little harder. Use that "tool" in your head, maybe it will help.')
    }
}

riddleForm.addEventListener('submit', riddle)