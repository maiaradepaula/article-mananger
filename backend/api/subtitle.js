module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation
    

const getById = (req, res) => {
    // app.db({s:'subtitles', l:'language' })
    //     .select('s:id', 'idiom')
    //     .where({ id: req.params.id })
    //     .first()
    //     .then(subtitles => res.json(subtitles))
    //     .catch(err => res.status(500).send(err))
        //console.log("chegou aqui..." +  req.params.id )
        app.db({ a: 'subtitles', l:'languages' })
        .select('l.idiom')
        .whereRaw('?? = ??', ['a.subtitleId', 'l.id']) 
       .where('a.articleId' ,  req.params.id )
        
        .then(subtitles => {
            res.json(subtitles)
          
        }
           )
         
        .catch(err => res.status(500).send(err))

        
      
        // app.db('subtitles').where({
        //     articleId:8
    
          //})
      

        
}
return {  getById }
}