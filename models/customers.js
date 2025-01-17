const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customersSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email:{ type: String, required: true} ,
  password: {type: String, required: true},
  date: { type: Date, default: Date.now },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "products"
    }
  ]
});

const Customers = mongoose.model("Customers", customersSchema);

module.exports = Customers;