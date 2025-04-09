require('dotenv').config(); // load environment variables from .env file

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
// create DB connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://karanhari564:TggLJdhiLgz1IleO@backenddb.fmr7rla.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => console.log('Connected!'));
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', ()=> console.log("Connected to DB"));

app.use(express.json());

const subscribersRouters = require('./routes/subscriber');
app.use('/api/appointment', subscribersRouters);


app.use(express.json());
app.listen(3000,()=>console.log("Server is running on port 3000"));