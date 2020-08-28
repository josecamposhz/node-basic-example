const ProductController = {};

const Product = require('../models/Product')

// Retornamos todas las productos
ProductController.all = async (req, res) => {
    Product.find().exec().then(tasks => res.send(tasks))
}

// Creamos un producto
ProductController.create = async (req, res) => {
    const newProduct = new Product({
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        product_price: req.body.product_price
    })

    Product.create(newProduct).then(() => {
        res.status(201).send('Producto creado con exito')
    }).catch(error => {
        res.status(500).send({ 'error': error });
    })
}

// Retorna un producto especifico
ProductController.find = (req, res) => {
    Product.findById(req.params.id)
        .exec()
        .then(user => {
            res.status(200).send(user)
        })
}

// Actualizar un producto
ProductController.update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.status(200).send(user))
        .catch(error => {
            res.status(500).send({ 'error': error });
        })
}

// Eliminar un producto
ProductController.delete = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => {
            res.sendStatus(204)
        })
}

module.exports = ProductController;