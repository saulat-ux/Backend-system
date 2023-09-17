
console.log('changes after version 1')
console.log('changes after version 2 ')
console.log('changes after verison 3 ')
const express = require('express');
const properties = require('./routes/properties')
 const connectDB = require('./db/connect')
 require('dotenv').config()
const app = express();



//middleware
app.use(express.json())




app.get('/testing', (req, res) => {
    res.send('welcome from server')
})

app.use('/api/v1/properties', properties)

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