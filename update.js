const dbConnect = require('./mongodb.js');

const update = async() =>{
    let db = await dbConnect();
    //success connection with db
    let update_data = await db.updateOne(
        {name : "A21"}, {
            $set : {name : "B21", price : 1390}
        }
    );

    if(update_data.acknowledged){
        console.log("data updated successfuly !");
    }
    else{
        console.log("Error : data not updated !");
    }
}

module.exports = update;