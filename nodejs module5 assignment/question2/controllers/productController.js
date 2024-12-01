const { ProductModel } = require("../models/productModel");


const add = async (req, res) => {
    let data = await ProductModel.find().sort({ price: 1 });
    res.render("products", {
        data: data,
        editcat: "",
    });
};


const savedata = async (req, res) => {
    let productname = req.body.productname; 
    let price = req.body.price;
    let id = req.body.id;

    if (id != "") {
        await ProductModel.findByIdAndUpdate(id, { productname: productname, price: price });
    } else {
        const productModel = new ProductModel({ productname, price }); 
        await productModel.save();
    }
    res.redirect("/products");
};


// Delete Product
const delData = async (req, res) => {
    let id = req.params.id;
    await ProductModel.findByIdAndDelete(id);
    res.redirect("/products");
};

// Edit Product
const editData = async (req, res) => {
    let id = req.params.id;
    let result = await ProductModel.findById(id);
    let data = await ProductModel.find();
    res.render("products", {
        data: data,
        editcat: result,
    });
};

module.exports = {
    add,
    savedata,
    delData,
    editData,
};
