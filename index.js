const dbConnect = require('./mongodb');

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    //console.log("bencho yeh new wala h");
    console.log(data);
    
};

main();