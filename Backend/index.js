const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/user.route");
const bookRouter = require('./routes/book.route');
const app = express()
require("dotenv").config();

app.use(express.json())
app.use(cors());
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("conncted")
    } catch (error) {
        console.log(error)
    }
}
app.get("/", (req, res)=>{
    res.send("welcome to home page!!!")
})
app.use("/users", userRouter);
app.use("/books", bookRouter);


app.listen(7878, ()=>{
    connect()
    console.log("server run on 4040")
});