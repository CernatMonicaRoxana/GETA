const express = require('express')

const router = require('./routes')
const bodyParser = require('body-parser')

let app = express()
const port = 8080

app.use(bodyParser.json())
app.use(router)

app.listen(port, () =>{  // pornim serverul
    console.log(`app running on port ${port}`)
})