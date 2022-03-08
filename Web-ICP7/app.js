const express = require('express')
const database = require('mongodb').MongoClient
const mongoose = require('mongoose')
const student= require('schema')
const {json} = require("express");
const app = express()
const port = 4001
app.use(json())
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
app.get('/student', async (req, res) => {
    const getAllStudents = await new student.find();


})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
