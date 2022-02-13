const { Schema, model } = require('mongoose')

const CartShema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: { type: String },
        quantity: {type: Number, default: 1}
      }
    ]
  }
)

module.exports = model("Cart", CartShema)