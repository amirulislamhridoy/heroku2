const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('hridoy!')
})
app.get('/o', (req, res) => {
  res.send('mam')
})
app.get('/oo', (req, res) => {
  res.send('yeah!')
})
app.get('/ooo', (req, res) => {
  res.send('how!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
///slfjsl