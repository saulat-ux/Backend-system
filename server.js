
console.log('changes after version 1')
console.log('changes after version 2 ')
console.log('changes after verison 3 ')
console.log('changes after version 4')
const express = require('express');
const properties = require('./routes/properties')
const cors = require('cors')
 const connectDB = require('./db/connect')
 const notFound = require('./middleware/notFound')
 require('dotenv').config()
const app = express();



//middleware
// app.use(express.static('frontend/dist'))
app.use(express.json())

// server static files don't know what it means yet 

app.use(cors());

app.use('/api/v1/properties', properties)
app.use(notFound)

const port =3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`listining on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()