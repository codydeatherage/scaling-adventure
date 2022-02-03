const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String, //name of the product
    amount: Number, //amount of product in inventory
    description: String, //item description
    image: { //product image
        type: String
    }
}, { timestamps: true })

const Item = mongoose.model('Item', itemSchema);
module.exports = Item