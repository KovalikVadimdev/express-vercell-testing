const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_secret_key";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

UserSchema.statics.registerUser = async function (name, email, password) {
  const existing = await this.findOne({ email });
  if (existing) throw new Error("A user already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new this({ name, email, password: hashedPassword });
  return await user.save();
};

UserSchema.statics.loginUser = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, {
    expiresIn: "1d",
  });

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};
module.exports = mongoose.model("User", UserSchema);
