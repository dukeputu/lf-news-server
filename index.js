const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000

const catagory = require('./data/categories.json');
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello Worleeeed!ddd')
})

app.get('/catagory',(req, res)=>{
    res.send(catagory)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})