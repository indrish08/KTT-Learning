const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res){
    var ans = Number(req.body.n1) + Number(req.body.n2);
    res.send('The answer is ' + ans)
})

app.get('/contact', function(req, res){
    res.send('Contact me at: indrish@gmail.com')
})

app.get('/about', function(req, res){
    res.send('My name is Indrish. I like to code.')
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
});