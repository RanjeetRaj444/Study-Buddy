const { Router } = require("express");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  try {
    let { email, pass } = req.body;
    const existingUser = await UserModel.find({ email });
    if (existingUser.length) {
      return res.status(200).send({
        error: "Register Failed. User already exists",
      });
    }

    if (checkPassword(pass)) {
      const hashPass = bcrypt.hashSync(pass, 10);
      const user = new UserModel({ ...req.body, pass: hashPass });
      await user.save();
      return res.status(200).send({
        msg: "The new user has been registered.",
        registeredUser: { ...req.body, pass: hashPass },
      });
    }
    return res.status(400).send({
      error:
        "Register Failed. Password must contain at least one uppercase letter, one number, and one special character.",
    });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

const checkPassword = (pass) => {
  if (pass.length < 0) {
    return false;
  }

  let alfabeta = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let nums = "0123456789";
  let specail = "[]{}!@#$%^&*()_-+=~`";
  let flag1 = false;
  let flag2 = false;
  let flag3 = false;

  for (let i = 0; i < pass.length; i++) {
    if (alfabeta.includes(pass[i])) {
      flag1 = true;
    }
    if (nums.includes(pass[i])) {
      flag2 = true;
    }
    if (specail.includes(pass[i])) {
      flag3 = true;
    }
  }
  return flag1 && flag2 && flag3 ? true : false;
};

userRouter.post("/login", async (req, res) => {
    try {
      let { email, pass } = req.body;
      const exitingUser = await UserModel.findOne({ email });
      if (exitingUser) {
        bcrypt.compare(pass, exitingUser.pass, (err, result) => {
          if (result) {
            try {
              const token = jwt.sign({ userID: exitingUser._id }, "kamran", {
                expiresIn: 120,
              });
              
              return res
                .status(200)
                .send({ msg: "Login successFull!", token });
            } catch (err) {
              return res.status(400).send({ error: err.message });
            }
          }
          res
            .status(400)
            .send({ error: "Login failed! wrong password is provided." });
        });
      } else res.status(400).send({ error: "Login Failed! Uesr Not Found" });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });

userRouter.get("/logout", async () => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || null;
    if (token) {
      await BlackListmodel.updateMany({}, { $push: { blacklist: [token] } });
      res.status(200).send("Logout successfull!");
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = userRouter;
