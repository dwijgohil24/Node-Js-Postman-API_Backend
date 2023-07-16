const express = require('express');
const dbConnect = require('./mongodb.js');

const app = express();

app.get('/',async (req,resp)=>{
    let db = await dbConnect();
    const data = await db.find().toArray();

    resp.send(data);
});

app.listen(5000);