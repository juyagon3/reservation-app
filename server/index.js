const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDb = require('./fake-db')

mongoose.connect(config.DB_URI)
    .then(
        () => {
            const fakeDb = new FakeDb()
            fakeDb.seeDb();
        }
    );

const app = express()

app.get('/products', function (req, res) {
    res.json({ 'success': true })
})

const PORT = process.env.PORT || '3001'

app.listen('3001', function () {
    console.log('I am runnning!')
})

// mongodb+srv://test:<password>@cluster0.yqa0zj2.mongodb.net/?retryWrites=true&w=majority