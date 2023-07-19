const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/user.route");
const app = express()
require("dotenv").config();

app.use(express.json())
app.use(cors());
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("conncted")
    } catch (error) {
        console.log(error)
    }
}

app.use("/users", userRouter);

app.listen(1010, ()=>{
    connect()
    console.log("server run on 4040")
});