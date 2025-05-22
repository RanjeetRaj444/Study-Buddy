const User = require("../model/user.Model");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = User.find({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword)
      return res.status(401).json({ message: "Invalid password" });
    const token = generateToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const userRegister = async (req, res) => {
  try {
    const { email, password, username, DOB, address, mob } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({ message: "User already exists" });
    }
    const hashedPassword = await argon2.hash(password);
    user = new User({
      username,
      DOB,
      address,
      mob,
      email,
      password: hashedPassword,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || "default_secret_key",
      { expiresIn: "7d" },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            _id: user.id,
            name: user.name,
            email: user.email,
            DOB: user.DOB,
            address: user.address,
            mob: user.mob,
          },
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
