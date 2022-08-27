const { Schema, model } = require("mongoose");
const post = new Schema({
  description: String,
  userId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://www.deployhq.com/images/deploy/opengraph-banner.png",
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  karma: {
    type: Number,
    default: 0,
  },
});
module.exports = model("post", post);
