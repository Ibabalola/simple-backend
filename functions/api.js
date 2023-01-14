import express from 'express';
import mongodb from 'mongodb';
import config from './api';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

const PORT = 4000;
const client = mongodb.MongoClient;

client.connect(config.DB, { useNewUrlParser: true }, (err, db) => { 
    if(err) {
        console.log('database is not connected')
    }
    else {
        console.log('connected!!')
    }
});

router.get('/', (req, res) => {
    res.json("I love docker!");
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);