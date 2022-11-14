const mongoose = require("mongoose");

const Home_page_medeelelSchema = {
  name: { type: String },
  description: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  home_page: {
    type: mongoose.Schema.ObjectId,
    ref: "Home_Page",
    required: true,
  },
};

module.exports = mongoose.model("Home_page_medeelel", Home_page_medeelelSchema);
