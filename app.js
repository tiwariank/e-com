import express from 'express';
import bodyParser from 'body-parser';
// import dbConnection from './modal/db.js';
import session from 'express-session';
import connection  from './modal/ormconfig.js';
import connectionStore from 'connect-mongodb-session'
import cors from "cors";
import Routes from './router/main.js';
import productschema from './modal/productschema.js';
import multer from 'multer';
import Stream from './services/streamservice.js';
import ftpClient from './services/downloadservice.js';

const router = express.Router();

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://ankitt969:ank@5668@cluster0.ldxeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


let corsOptions = { 
    origin: "*" 
}; 

const app = express();
app.use(cors()); 
app.use(bodyParser.json());
app.get('/checkConnection',cors(corsOptions),(req,res) => {
    res.send("Welcome to Node Babel")
})

// app.use('/admin', adminRoutes);
// const appWithRoute = 
// Routes();

const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('data') ,(req,res) =>{
    console.log("i am here to check mutler")
    console.log(req.file)
    return res.send('check node console')
})

// app.put('/upload',cors(corsOptions),(req,res)=> {
//     console.log("request body")
//     console.log(req.body)
//     res.send(req.body)
// })

app.post('/checkpost',cors(corsOptions),(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send("let's test cors requet ")
})

app.get('/downloadFile',cors(corsOptions),(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    ftpClient();
    console.log("i am inside download file")

    // res.send("let's test cors requet ")
})


Routes(app)
app.listen(4000,() => {

     console.log(`app is listening to port 4000`);
    //  dbConnection()
    // connection()
    console.log(productschema)
    // console.log(Stream())
})