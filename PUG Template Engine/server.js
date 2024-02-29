const express = require('express')
const app = express()

app.set('view engine', 'pug')
// app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})
  
app.listen(4000)