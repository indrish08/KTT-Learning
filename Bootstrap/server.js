const express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'))
app.use(express.static('node_modules/jquery/dist'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/modal', (req, res) => {
    res.sendFile(__dirname + '/modal.html')
})

app.get('/forms', (req, res) => {
    res.sendFile(__dirname + '/forms.html')
})

app.get('/list-groups', (req, res) => {
    res.sendFile(__dirname + '/list_groups.html')
})

app.listen(3002, ()=>{
    console.log('Server is running at http://localhost:3002/');
})