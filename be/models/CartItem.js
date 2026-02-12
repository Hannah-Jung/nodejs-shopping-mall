const mongoose = require("mongoose");
const Cart = require("./Cart");
const Product = require("./Product");
const Schema = mongoose.Schema;
const cartItemSchema = Schema(
  {
    cartId: { type: mongoose.ObjectId, ref: Cart },
    productId: { type: mongoose.ObjectId, ref: Product },
    qty: { type: Number, required: true, default: 1 },
    size: { type: String, required: true },
  },
  { timestamps: true },
);
cartItemSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.__v;
  delete obj.updatedAt;
  return obj;
};

const CartItem = mongoose.model("CartItem", cartItemSchema);
module.exports = CartItem;
