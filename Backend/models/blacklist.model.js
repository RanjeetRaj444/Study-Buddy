const mongoose = require("mongoose")

const blackListSchema = new mongoose.Schema({
    blacklist : {type: [String]}
})

const BLackListModel = mongoose.model("blacklist", blackListSchema);

module.exports = {BLackListModel}