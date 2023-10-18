class ProductController {
    showAll(req, res){
        res.render('event/index')
    }
    addProduct(req, res){
        res.render('event/new')
    }
}

module.exports = new ProductController();