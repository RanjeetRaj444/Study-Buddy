const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    class: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    questions: [
      {
        id: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          enum: ["Theory", "Numerical"],
          required: true,
        },
        question: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ChemistryQuestion", questionSchema);
