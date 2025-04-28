const mongoose = require("mongoose");

const AdvantageSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  alt: { type: String, required: true },
});

AdvantageSchema.statics.getAdvantages = async function () {
  return await this.find();
};

AdvantageSchema.statics.addAdvantages = async function (
  id,
  image,
  title,
  text,
  alt
) {
  const advantage = new this({
    id,
    image,
    title,
    text,
    alt,
  });
  return await advantage.save();
};

module.exports = mongoose.model("advantage", AdvantageSchema);
