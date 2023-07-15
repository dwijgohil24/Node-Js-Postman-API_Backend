const dbConnect = require('./mongodb');

const insert = async()=>{

    let data = await dbConnect();
    data = await data.find().toArray();
    let new_data = [
        {name : "Xperia",
        brand : "sony",
        price : 1300,
        category : "mobile"},
        {name : "lassan",
        brand : "sony",
        price : 1300,
        category : "mobile"},
        
    ];
    //const input = prompt("Enter 1 : if only single data, Enter 2 : if multiple data");
    //Console.log("enter the data in json format that your want to insert");
    //take data from the user and add that into our database.

    data.insertMany(new_data);
    Console.log("data inserted successfuly !");
}

insert();