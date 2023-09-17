const mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({
    name:String,exists:Boolean,price:String
})

module.exports = mongoose.model('Property', PropertySchema)