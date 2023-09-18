const mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'must provide name'],
        trim:true,
        maxlength:[20, 'name can not be more than 20 chars']
    },exists:{
        type:Boolean,
        default:true
    },price:String
})


module.exports = mongoose.model('Property', PropertySchema)