const express = require("express");
const cors = require("cors");
const mongoConnect = require("./utils/db");
const userRoutes = require("./routes/user.Routes");
const bookRoutes = require("./routes/books.Routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.send(`
    <div style="height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column; background-color:wheat">
    <h1 style="color:green">Welcome</h1>
    <p>This is a simple API for testing purposes.</p>
    <ul>
    <li>for user Routes :- POST : /user/login</li>
    <li>for user Routes :- POST : /user/register</li>
    <li>for books Routes :- GET : /books/:subject</li>
    <li>for books Routes :- GET : /books/:subject/:id</li>
    </ul>
    </div>
    `);
});

app.listen(3001, mongoConnect);
