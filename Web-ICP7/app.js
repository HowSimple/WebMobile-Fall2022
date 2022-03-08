const express = require('express')
const app = express()
const port = 4001


app.get('/', (req, res) => {
    res.send("Hello World!")
})
app.get('/student', (req, res) => {
    res.send("Hello World, students!")
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
