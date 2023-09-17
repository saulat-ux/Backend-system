const mongoose = require('mongoose')


const connectDB = (url) => {
    return mongoose
    .connect(url , {
        // becasue of version 5 of mongoose
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    
}
module.exports = connectDB
