const Product = require('../models/Product');

class ProductController {
    showAll(req, res) {
        res.render('product/index')
    }

    showAdd(req, res) {
        res.render('product/new')
    }

    async handleAdd(req, res, next) {
        const {name, price, image, archived} = req.body;
        const product = new Product({
            name,
            price,
            image,
            archived: 0,
        });
        await product.save().catch(err => console.error(err));
        res.redirect('/products');
    }
}

module.exports = new ProductController();