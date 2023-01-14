import express from 'express';
import mongodb from 'mongodb';
import config from './';

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

app.use('/', router);

app.listen(PORT, () => {
    console.log('Your server is running on PORT:',PORT);
});