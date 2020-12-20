const express = require("express");
const path = require("path")
const MainRouter= require("./routes/MainRouter")
const UserRouter= require("./routes/UserRouter")

const app = express();
const port =process.env.port || 5000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.use("/",MainRouter)

app.use("/user",UserRouter)

app.listen(port,()=>{
    console.log(`i am listening o port ${port}`)
})