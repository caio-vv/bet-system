import User from "../../models/user-model.js";

const store = (req, res) => {
    try{
    User.create(req.body)
    res.json()
    } catch (error){
        res.status(400)
    }
}

const index = async (req, res) => {
    try {
        const content = await User.find(req.query).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

const show = async (req, res) => {
    try {
        const content = await User.findById(req.query).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updated = async (req, res) => {
    try {
        const content = await User.findByIdAndUpdate(req.query).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

const destroy = async (req, res) => {
    try {
        const content = await User.findByIdAndDelete(req.query).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

export default {
    store,
    index,
    show,
    updated,
    destroy
}