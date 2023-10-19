const Product = require('../models/Product');

class ProductController {
    async showAll(req, res) {
        const products = await Product.find({}).catch(err => console.error(err));
        res.render('product/index', {products})

    }

    showAdd(req, res) {
        res.render('admin/product/new')
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