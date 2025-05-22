const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");

router.get("/:subject", bookController.getAll);

router.get("/:subject/:id", bookController.getById);

module.exports = router;
