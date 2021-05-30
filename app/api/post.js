module.exports = (app, db) => {
    app.get('/posts', async (req, res) => {
        await db.Post.findAll({include: { model: db.Author, attributes: ['firstName', 'lastName'] }}).then((result) => {
            return res.json(result)
        })
    })

    app.get('/posts/:id', async (req, res) => {
        await db.Post.findOne({
            where: {
                id: req.params.id
            }, include: { model: db.Author, attributes: ['firstName', 'lastName'] }
        }).then((result) => {
            return res.json(result)
        })
    })

    app.post('/post', async (req, res) => {
        await db.Post.create({
            title: req.body.title,
            content: req.body.content,
            AuthorId:req.body.AuthorId

        }).then((result) => res.json(result))
    })

    app.put('/post/:id', async (req, res) => {
        await db.Post.update({
            title: req.body.title,
            content: req.body.content,
            AuthorId:req.body.AuthorId
        }, {
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result))
    })

    app.delete('/post/:id', async (req, res) => {
        await db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            return res.json(result)
        })
    })
    app.get('/posts/author/:id', async (req, res) => {
        await db.Post.findAll({
            where: {
                AuthorId: req.params.id
            }, include: { model: db.Author, attributes: ['firstName', 'lastName'] }
        }).then((result) => {
            return res.json(result)
        })
    })

}

