const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/node3db')
        .then(() => console.log("Connected to reviews db"));
}
main();

const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
    customerName: { type: String, required: true },
    review: { type: String, required: true },
    stars: { type: Number, required: true, min: 1, max: 5 },
});

const ReviewModel = mongoose.model('Review', ReviewSchema);
module.exports = { ReviewModel };
