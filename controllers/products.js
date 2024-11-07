const Product = require('../models/products.model')

exports.addProduct = async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
        })
        product.save()
            .then(result => {
                console.log(result);
                return res.status(200).json({ result: result })
            }).catch(err => {
                console.log(err.message);
                return res.status(400).json({ error: 'Cannot add product' })
            })
    } catch (error) {
        return res.status(400).send({ error: 'Cannot add product' })
    }

}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({}, { __v: 0 })
        if (!products) {
            return res.status(404).json({ message: 'Cannot find products' })
        }
        return res.status(200).send(products)
    } catch (error) {
        return res.status(400).send({ error: 'Cannot get products' })
    }
}

exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findOne({ _id: id })
        if (!product) {
            return res.status(404).json({ message: 'Cannot find product' })
        }
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send({ error: 'Cannot get product' })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const updates = req.body
        const product = await Product.findByIdAndUpdate(id, updates, { new: true })
        if (!product) {
            return res.status(404).json({ message: 'Cannot find product to update' })
        }
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send({ error: 'Cannot update product' })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({ message: 'Cannot find product to delete' })
        }
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send({ error: 'Cannot delete product' })
    }
}