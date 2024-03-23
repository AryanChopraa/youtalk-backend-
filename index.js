const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
var cors = require('cors')
const {testConnection} = require('./testConnection')


dotenv.config();

const port = 3002
const app = express()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors())

//routes
const authRoute = require('./routes/authRoute.js')
app.use('/auth', authRoute)

const chatsRoute = require('./routes/chatsRoute.js')
app.use('/chats', chatsRoute)


// testConnection()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})