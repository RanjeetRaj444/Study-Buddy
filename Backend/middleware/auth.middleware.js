// const jwt = require("jsonwebtoken");
// const {BLackListModel} = require("../models/blacklist.model")
// require("dotenv").config();

// const AuthMiddleWAre = async(req, res, next) => {
//     const token = req.headers.authorization.split(" ")[1];

//     try {
//         let existingToken = await BLackListModel.find({
//             blacklist: {$in: token},
//         });
//         if(existingToken){
//             res.status(200).json("Please Login!!")
//         }else{
//             const decoded = jwt.verify(token, "studyBuddy");
//             req.body.userID = decoded.userID;
//             next()
//         }
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// };

// module.exports = AuthMiddleWAre;



const jwt = require("jsonwebtoken");
const { BlackListModel } = require("../models/blacklist.model");
require("dotenv").config();

const AuthMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    let existingToken = await BlackListModel.findOne({
      blacklist: token,
    });
    if (existingToken) {
      return res.status(200).json("Please Login!!");
    } else {
      const decoded = jwt.verify(token, 'studdybuddy');
      req.body.userID = decoded.userID;
      next();
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = AuthMiddleware;