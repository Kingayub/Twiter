const Users = require("../models/Users.model")
const mongoose = require("mongoose")

module.exports.userController = {
    addUsers: (req, res) => {
        Users.create({
            name: req.body.name,
            aboutMe: req.body.aboutMe,
        }).then((data) => {
            res.json(data)
        })
    },
    getAllUsers: (req, res) => {
        Users.find().populate('saves').then((data) => {
            res.json(data)
        })
    },
    getUserById: (req, res) => {
        Users.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    deleteUserById: (req, res) => {
        Users.findByIdAndRemove(req.params.id).then(() => {
            res.json("User deleted")
        })
    },

    addSaves: (req, res) => {
        Users.findByIdAndUpdate({ _id: req.params.id }, { $push: { saves: req.body.saves } }, { new: true }).then((data) => {
            res.json(data)
        })
    },
    // getSavesByUser: (req, res) => {
    //     Users.find(req.params.id, { saves: req.body.saves }).then((data) => {
    //         res.json(data)
    //     })
    // },
    // deleteSaveByUser: (req, res) => {
    //     Users.findOneAndDelete(req.params.id, { saves: req.body.saves }).then((data) => {
    //         res.json(data)
    //     })
    // }
}

// Как реализовать удаление постов из сохраненок ?