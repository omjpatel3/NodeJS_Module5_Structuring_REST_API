const express = require('express')
const app = express();

const productRoutes = require('./routes/productRoute.js');
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const reviewRoute = require("./routes/reviewRoute");

//const { off } = require('./models/userModel');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})



app.use('/products', productRoutes)
app.use("/users", userRoute)
app.use('/orders',orderRoute)
app.use('/reviews', reviewRoute)
app.listen(5000, () => {
    console.log("Listening on port 5000");

})


