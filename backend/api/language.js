module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const language = {
            id: req.body.id,
            idiom: req.body.idiom,
            country: req.body.country,
            acronym: req.body.acronym
        }

        if (req.params.id) language.id = req.params.id

        try {
            existsOrError(language.idiom, 'Idioma não informado')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (language.id) {
            app.db('languages')
                .update(language)
                .where({ id: language.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('languages')
                .insert(language)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }
    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('languages')
                .where({ id: req.params.id }).del()
            
            try {
                existsOrError(rowsDeleted, 'Idioma não foi encontrado.')
            } catch(msg) {
                return res.status(400).send(msg)    
            }

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }
    const get = (req, res) => {
        app.db('languages')
            .select('id', 'idiom', 'country', 'acronym')
            .then(languages => res.json(languages))
            .catch(err => res.status(500).send(err))
    }
    const getById = (req, res) => {
        app.db('languages')
            .select('id', 'idiom', 'country', 'acronym')
            .where({ id: req.params.id })
            .first()
            .then(language => res.json(language))
            .catch(err => res.status(500).send(err))
    }
    return { save, get, getById, remove }
}