const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    image: String,
    title: String,
    author: String,
    description: String,
    solution_No: Number,
    chapter: [String],
    exercise: [String],
    solution: String
})

const BookModel = mongoose.model("books", bookSchema)

module.exports = BookModel;