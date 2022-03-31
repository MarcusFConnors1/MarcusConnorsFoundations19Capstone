const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let attempts = 0
let firstLetter = false
let secondLetter = false
let thirdLetter = false
let fourthLetter = false
let fifthLetter = false
let sixthLetter = false

app.put('/public/home/letters/1/:id', (req, res) => {
    if(req.params.id === 'a' || req.params.id === 'A'){
        firstLetter = true
    }else {
        attempts ++
    }
    console.log(firstLetter)
    res.status(200).send(`${attempts}`)
})

app.put('/public/home/letters/2/:id', (req, res) => {
    if(req.params.id === 'e' || req.params.id === 'E'){
        secondLetter = true
    }else {
        attempts ++
    }
    console.log(secondLetter)
    res.status(200).send(`${attempts}`)
})

app.put('/public/home/letters/3/:id', (req, res) => {
    if(req.params.id === 's' || req.params.id === 'S'){
        thirdLetter = true
    }else {
        attempts ++
    }
    console.log(thirdLetter)
    res.status(200).send(`${attempts}`)
})

app.put('/public/home/letters/4/:id', (req, res) => {
    if(req.params.id === 't' || req.params.id === 'T'){
        fourthLetter = true
    }else {
        attempts ++
    }
    console.log(fourthLetter)
    res.status(200).send(`${attempts}`)
})

app.put('/public/home/letters/5/:id', (req, res) => {
    if(req.params.id === 'r' || req.params.id === 'R'){
        fifthLetter = true
    }else {
        attempts ++
    }
    console.log(fifthLetter)
    res.status(200).send(`${attempts}`)
})

app.put('/public/home/letters/6/:id', (req, res) => {
    if(req.params.id === 'i' || req.params.id === 'I'){
        sixthLetter = true
    }else {
        attempts ++
    }
    console.log(sixthLetter)
    res.status(200).send(`${attempts}`)
})

app.get('/public/home', (req, res) => {
    res.status(200).send(`${attempts}`)
})

app.get('/public/home/input/1', (req, res) => {
    res.status(200).send(`${firstLetter}`)
})

app.get('/public/home/input/2', (req, res) => {
    res.status(200).send(`${secondLetter}`)
})

app.get('/public/home/input/3', (req, res) => {
    res.status(200).send(`${thirdLetter}`)
})

app.get('/public/home/input/4', (req, res) => {
    res.status(200).send(`${fourthLetter}`)
})

app.get('/public/home/input/5', (req, res) => {
    res.status(200).send(`${fifthLetter}`)
})

app.get('/public/home/input/6', (req, res) => {
    res.status(200).send(`${sixthLetter}`)
})

app.post('/public/comments', (req, res) => {
    console.log(req.body.comment)
    let splitComment = req.body.comment.split('')
    splitComment[0] = 'S'
    if(splitComment.length > 7){
        splitComment[7] = 'S'
        splitComment[4] = 'S'
    }else if(splitComment.length > 4){
        splitComment[4] = 'S'
    }
    let finalComment =splitComment.join('')
    res.status(200).send(finalComment)
})

app.listen(5550, () => {
    console.log('Listening on port 5550')
})