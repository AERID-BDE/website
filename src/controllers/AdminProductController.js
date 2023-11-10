const Product = require('../models/Product')

class AdminProductController {
    async showAll(req, res){
        const products = await Product.find().catch(err => console.log(err))
        res.render('admin/product/index', { products })
    }

    showAddProduct(req, res){
        res.render('admin/product/new')
    }

    async addProduct(req, res){
        const { name, price, image } = req.body
        const product = new Product ({
            name,
            price,
            image,
        })
        await product.save().catch(err => console.error(err))
        res.redirect('/admin/products')
    }

    async showEditProduct(req, res) {
        const myProduct = await Product.findById(req.params.id).catch(err => console.error(err))
        console.log(myProduct)
        res.render('admin/product/edit', { myProduct })
    }
    async editProduct (req,res,next) {
        const editedProductForm = req.body
        await Product.findByIdAndUpdate(req.params.id, editedProductForm)
        res.redirect('/admin/products')
    }

}

module.exports = new AdminProductController();