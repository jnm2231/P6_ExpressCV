exports.show = (req, res, next) => {
    res.render('index', {
        title:"Blog"
    })
}

exports.showAutor = (req, res, next) => {
    res.render('autor', {
        nombreAutor:"Juan Nicolas Miro"
    })
}