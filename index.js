const express = require('express')
const mongoose = require('mongoose');
const redis = require('redis');
const client = redis.createClient();
const app = express()
const port = 3000

// Database Connection
var mongoDB = 'mongodb://127.0.0.1/redisPOC';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

db.on('connected', function(){
    console.log("Database connected");
})

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Schema Creation
// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  username: String,
  place: String
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

SomeModel.create({
   username: 'saurav12',
   place: 'Gorakhpur12'
})

const redis_get = (req, res, next) => {
    client.get('getData',(err, redis_data) => {
        if(err){
            throw err;
        }
        else if (redis_data){
            console.log("Redis Cache Data..............")
            res.send(JSON.parse(redis_data));
        }
        else {
            next();
        }
    })
}

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/users', redis_get , async (req, res) => {
    try {
        const users = await SomeModel.find({})
        client.setex('getData2' , 60 , JSON.stringify(users));
        console.log("From Database......")
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send()
    }
})


app.listen(port, () => {
  console.log(`Server listening on - http://localhost:${port}`)
})