const dbConnect = require('./mongodb');

const insert = async()=>{

    let db = await dbConnect();
    data = await db.find().toArray();
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

    const op_done = await db.insertMany(new_data);

    if((await op_done).acknowledged){
        console.log("data inserted successfuly !");
    }
    else{
        console.log("Error : Data not inserted !!");
    }
    //Console.log("data inserted successfuly !");
}

module.exports = insert;