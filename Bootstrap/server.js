const express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'))
app.use(express.static('node_modules/jquery/dist'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/blog.html')
})

app.get('/aboutme', (req, res) => {
    res.sendFile(__dirname + '/aboutme.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})

app.listen(3002, ()=>{
    console.log('Server is running at http://localhost:3002/');
})