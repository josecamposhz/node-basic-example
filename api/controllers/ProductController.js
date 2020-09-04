const ProductController = {};

const Product = require('../models/Product')

// Retornamos todas las productos
ProductController.all = async (req, res) => {
    Product.find().exec().then(products => res.send(products))
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
        .then(product => {
            res.status(200).send(product)
        })
}

// Actualizar un producto
ProductController.update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .exec()
        .then( () => {
            res.status(200).send('Producto actualizado con exito')
        })
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