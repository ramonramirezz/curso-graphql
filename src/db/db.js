const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost:27017/curso', {useNewUrlParser: true, useCreateIndex: true,});

module.exports = db;