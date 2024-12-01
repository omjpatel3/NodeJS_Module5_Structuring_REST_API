const { UserModel } = require("../models/userModel");

const listUsers = async (req, res) => {
    const users = await UserModel.find();
    res.render("users", { users: users, editUser: "" });
};

const saveUser = async (req, res) => {
    const { id, username, age } = req.body;

    if (id) {
        await UserModel.findByIdAndUpdate(id, { username, age });
    } else {
        const newUser = new UserModel({ username,age });
        await newUser.save();
    }
    res.redirect("/users");
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await UserModel.findByIdAndDelete(id);
    res.redirect("/users");
};


const editUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    const users = await UserModel.find();
    res.render("users", { users: users, editUser: user });
};

module.exports = { listUsers, saveUser, deleteUser, editUser };
