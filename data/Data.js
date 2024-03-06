const mongoose = require('mongoose')

const dataSchma = mongoose.Schema({
    type:{type: String, require: true},
    value: {type: Number, require:true},
    date: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Data',dataSchma)