module.exports = (app, db) => {
    app.get('/authors', async (req, res) => {
        await db.Author.findAll({
            attributes: ['id', 'firstName', 'lastName']
        }).then((result) => {
            return res.json(result)
        })
    })

    app.get('/authors/:id', async (req, res) => {
        await db.Author.findOne({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            return res.json(result)
        })
    })

    app.post('/author', async (req, res) => {
        await db.Author.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }).then((result) => res.json(result))
    })

    app.put('/author/:id', async (req, res) => {
        await db.Author.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }, {
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result))
    })

    app.delete('/author/:id', async (req, res) => {
        await db.Author.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            return res.json(result)
        })
    })

}

