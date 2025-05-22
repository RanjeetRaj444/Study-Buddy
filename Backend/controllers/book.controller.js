const Biology = require("../model/biology.Model");
const Chemistry = require("../model/chemistry.Model");
const Physics = require("../model/physic.Model");

function getModel(subject) {
  switch (subject.toLowerCase()) {
    case "biology":
      return Biology;
    case "chemistry":
      return Chemistry;
    case "physics":
      return Physics;
    default:
      return null;
  }
}

exports.getAll = async (req, res) => {
  const subject = req.params.subject;
  const Model = getModel(subject);
  if (!Model) return res.status(400).json({ message: "Invalid subject" });

  try {
    const books = await Model.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  const subject = req.params.subject;
  const Model = getModel(subject);
  if (!Model) return res.status(400).json({ message: "Invalid subject" });

  try {
    const book = await Model.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
