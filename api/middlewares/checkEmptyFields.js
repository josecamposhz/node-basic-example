checkEmptyFields = (req, res, next) => {
    if (req.body.name === '') {
        return res.status(400).send({ error: 'El campo Nombre es requerido.' })
    } else if (req.body.description === '') {
        return res.status(400).send({ error: 'El campo Descripción es requerido.' })
    } else if (req.body.price <= 0) {
        return res.status(400).send({ error: 'El campo Precio debe ser mayor a 0.' })
    } else {
        next();
    }
}

module.exports = checkEmptyFields