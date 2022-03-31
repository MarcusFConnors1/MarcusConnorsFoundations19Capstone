const commentForm = document.querySelector('form.commentsForm')
const commentInput = document.querySelector('input.commentInput')
const comments = document.querySelector('section.commentsContainer')

function makeComment (evt) {
    evt.preventDefault()
    const body = {
        comment: commentInput.value
    }
    axios.post('http://localhost:5550/public/comments', body)
    .then(res => {
        const newComment = document.createElement('div')
        newComment.classList.add('comments')
        const h2 = document.createElement('h2')
        const commentContent = document.createTextNode(`${res.data}`)
        const author = document.createElement('p')
        const authorContent = document.createTextNode('-Anon')
        author.appendChild(authorContent)
        h2.appendChild(commentContent)
        newComment.appendChild(h2)
        newComment.appendChild(author)
        comments.appendChild(newComment)
        alert("I'm just kidding. I don't really care about your comment")
        commentInput.value = ''
    })
}

commentForm.addEventListener('submit', makeComment)