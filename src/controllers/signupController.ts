const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req: any, res: any) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  // check for duplicate usernames in the db
  const duplicate = await User.findOne({ username }).exec();
  if (duplicate) return res.sendStatus(409);
  try {
    // encrypt password
    const hashedPwd = await bcrypt.hash(password, 10);
    // create and store the new user
    const result = await User.create({
      username,
      password: hashedPwd,
    });
    // res.setHeader("Access-Control-Allow-Credentials", "http://localhost:3000");

    res.status(201).json({ success: `New user ${username} created!` });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
export {};
