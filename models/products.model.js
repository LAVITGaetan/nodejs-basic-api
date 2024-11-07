const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    }
})

const Products = mongoose.model('products', productsSchema)

module.exports = Products