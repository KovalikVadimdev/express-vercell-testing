const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
});

ReviewSchema.statics.getReviews = async function () {
  return await this.find();
};

ReviewSchema.statics.addReviews = async function (name, text) {
  const review = new this({ name, text });
  return await review.save();
};

module.exports = mongoose.model("Review", ReviewSchema);
