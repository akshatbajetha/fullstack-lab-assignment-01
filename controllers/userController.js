const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        res.status(201).json({
            status: "User Created Successfully",
        });
    } catch (e) {
        res.status(400).json({
            status: "Failed to create User",
        });
    }
};

exports.getUserByUsername = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    } catch (e) {
        res.status(400).json({
            status: "Failed to get User",
        });
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        const userList = await User.find();
        res.status(200).json({
            status: "success",
            count: userList.length,
            data: {
                userList
            }
        });
    } catch (e) {
        res.status(400).json({
            status: "Failed to get all Users",
        });
    }
};

exports.deleteUserByUsername = async (req, res, next) => {
    try {
        const user = await User.deleteOne({ username: req.params.username });
        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    } catch (e) {
        res.status(400).json({
            status: "Failed to delete User",
        });
    }
};
