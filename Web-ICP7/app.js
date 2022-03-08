const express = require('express')
const database = require('mongodb').MongoClient
const mongoose = require('mongoose')

const app = express()
const port = 4001

database.connect('mongodb://localhost:27017/test', (err,client) => {
    if (err) throw err
    const db = client.db('test')
    db.collection('employees').find().toArray((err, result) => {
        if (err) throw err

        console.log(result)
    })
})

app.get('/', (req, res) => {
    res.send("Hello World!")
})
app.get('/student', (req, res) => {
    res.send("Hello World, students!")
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
