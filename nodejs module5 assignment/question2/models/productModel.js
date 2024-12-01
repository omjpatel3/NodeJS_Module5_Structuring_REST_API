const mongoose = require('mongoose')

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/node3db')
        .then(() => console.log("Connected to  products db"));
}
main()
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    productname: String,
    price: Number,
});
const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = {ProductModel}