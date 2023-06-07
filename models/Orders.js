const mongoose = require("mongoose");

const BookOrderIssue = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },

  productName: {
    type: String,
  },
  productImage: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
  paymentType: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  months: {
    type: String,
  },
  updateStatus: {
    type: String,
  },
  status: {
    type: String,
  },
  equipment: [
    {
      type: String,
    },
  ],
  diet: [
    {
      type: String,
    },
  ],
});
module.exports = mongoose.model("BookOrderIssue", BookOrderIssue);
