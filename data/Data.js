const mongoose = require('mongoose')

const dataSchma = mongoose.Schema({
    type:{type: String, require: true},
    value: {type: Number, require:true},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Data',dataSchma)