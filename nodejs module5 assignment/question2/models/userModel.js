const mongoose = require('mongoose')
const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/node3db')
        .then(() => console.log("Connected to  users db"));
}
main()
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: String,
    age:Number
});
const UserModel = mongoose.model('User', UserSchema);
module.exports = {UserModel}