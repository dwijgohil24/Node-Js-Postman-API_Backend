const dbConnect = require("./mongodb.js");

const dlt = async() => {

    let db = await dbConnect();

    let dlt_data = await db.deleteOne({
        name : "B21",
        brand : "Oppo",
    })

    if(dlt_data.acknowledged){
        console.log("Data Deleted Successfuly !");
    }
    else{
        console.log("Error : Data not deleted !");
    }
}

module.exports = dlt;
