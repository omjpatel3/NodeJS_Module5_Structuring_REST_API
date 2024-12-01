const express = require('express')
const app = express();
var catRoutes = require('./routes/categoryRoutes')
app.set('view engine','ejs')

app.get('/',(req,res)  => {
    res.render('home') 
})

app.use(express.urlencoded({extended : false}))
app.use('/category',catRoutes)

app.listen(4000, () => {
    console.log("listening on port 4000")
})