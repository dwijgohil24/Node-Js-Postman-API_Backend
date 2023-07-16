const express = require('express');
const dbConnect = require('./mongodb.js');

const app = express();

app.use(express.json());

app.get('/',async (req,resp)=>{
    let db = await dbConnect();
    const data = await db.find().toArray();

    resp.send(data);
});

app.post('/',async(req,resp)=>{
    let db = await dbConnect();
    let result = await db.insertOne(req.body);
    resp.send(result);
});

app.listen(5000);