require("dotenv").config({path:"./.env"})
const path = require("path")
const express = require("express")
require("./models/database").DB()
const app = express()
const userRoute = require("./routes/userRoute")
app.use('/',userRoute)
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
})