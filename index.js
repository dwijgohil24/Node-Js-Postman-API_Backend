const dbConnect = require('./mongodb');
const insert_op = require('./insert.js');
const update_op = require('./update.js');
const delete_op = require('./delete.js');
const main = async () => {
    let db = await dbConnect();
    
        
    data = await db.find().toArray();

    console.log(data);
    //console.log("Starting of Insertion operation");
    //await insert_op(); //uncomment for insertion operation.
    //await update_op(); //uncomment for update operation.
    await delete_op(); //uncomment for delete operation.
};

main();