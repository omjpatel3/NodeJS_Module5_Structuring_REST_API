const { ReviewModel } = require("../models/reviewModel");

// Add Reviews (GET)
const add = async (req, res) => {
    const reviews = await ReviewModel.find();
    res.render("reviews", { data: reviews, editcat: null });
};

// Save Reviews (POST)
const savedata = async (req, res) => {
    const { customerName, review, stars, id } = req.body;

    if (id) {
        // Edit Review
        await ReviewModel.findByIdAndUpdate(id, { customerName, review, stars });
    } else {
        // Add New Review
        const newReview = new ReviewModel({ customerName, review, stars });
        await newReview.save();
    }
    res.redirect("/reviews");
};

// Edit Review (GET)
const editData = async (req, res) => {
    const { id } = req.params;
    const review = await ReviewModel.findById(id);
    res.render("reviews", { data: await ReviewModel.find(), editcat: review });
};

// Delete Review (GET)
const delData = async (req, res) => {
    const { id } = req.params;
    await ReviewModel.findByIdAndDelete(id);
    res.redirect("/reviews");
};

module.exports = { add, savedata, delData, editData };
