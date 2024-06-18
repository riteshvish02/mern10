const mongoose = require("mongoose")

exports.DB = ()=>{
    try {
        mongoose.connect(process.env.MONGODBURL).then(()=>{
            console.log('connected to db');
        })
    } catch (error) {
        console.log(error);
    }
}