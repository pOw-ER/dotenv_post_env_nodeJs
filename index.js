const express = require('express')
const fetch = require('node-fetch')
const PORT = process.env.PORT || 5000
const app = express()
require('dotenv').config()

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.MY_API_KEY}`)
    .then(result => result.json())
    .then(data => {
      // console.log(data)
      // res.json : Good for testing
      // res.json(data)
      // console.log(data.articles[0]);
      res.render('pages/index', { data: data.articles[0], cool: process.env.SECRET })
    })
})
app.get('/as', (req, res) => {
  res.send(`<h1>hello world</h1>`)
})

