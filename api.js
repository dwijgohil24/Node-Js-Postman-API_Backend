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

app.put('/:name',async(req, resp)=>{
    let db = await dbConnect();
    let result = db.updateOne(
        {name : req.params.name},
        {
            $set : req.body
        }
    );
    resp.send({result : "update"});
});

app.listen(5000);