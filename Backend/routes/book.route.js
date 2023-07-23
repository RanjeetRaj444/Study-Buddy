const {Router} = require("express")
const BookModel = require("../models/book.model");

const bookRouter = Router();

bookRouter.post("/add", async(req, res)=>{
    try {
        let book = await new BookModel(req.body)
        book.save();
        res.status(200).json({msg: "Book added", addBook: book})
    } catch (err) {
         res.status(400).json({err: message})
    }
});


bookRouter.get("/", async (req, res) => {
    try {
      const { category, sortBy } = req.query;
  
      const query = {};
      if (category) {
        query.category = category;
      }
  
      const sortOptions = {};
      if (sortBy) {
        sortOptions[sortBy] = 1; 
      }
  
      const books = await BookModel.find(query).sort(sortOptions).exec();
      res.status(200).json(books);
    } catch (err) {
      res.status(400).json({err: message});
    }
  });


  
  
  bookRouter.get("/getOneData/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const book = await BookModel.findOne({ _id: id });
      res.status(200).json(book);
    } catch (err) {
      res.status(400).json({ err: message });
    }
  });



bookRouter.patch("/update/:id", async(req, res)=>{
    const {id} = req.params;
    try {
        let book = await BookModel.findByIdAndUpdate({_id: id}, req.body);
        res.status(200).json({msg: "Book updated"})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})


bookRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      let book = await BookModel.findByIdAndDelete(id);
      res.status(200).json({ msg: "Book deleted" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  
module.exports = bookRouter