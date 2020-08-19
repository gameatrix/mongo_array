const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  productName: String,

  stores: [
    {
      name: String,
    },
  ],
});

module.exports = mongoose.model('Product', ProductSchema);
