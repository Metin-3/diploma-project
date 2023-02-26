const Breakfast = require('../models/breakfastModel');


//! GET
exports.breakfast_getAll = (req, res) => {
    Breakfast.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}



//! GET ID
exports.breakfast_getAll_Id = (req, res) => {
    const { id } = req.params;
    Breakfast.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            } else {
                res.status(400).json({ message: "Not Found" })
            }
        } else {
            res.status(500).json(
                { message: err }
            )
        }
    })
}



//! POST
exports.breakfast_post = async (req, res) => {
    const food = req.body
    try {
        await Breakfast.create(food)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error)
    }
}



//! DELETE
exports.breakfast_delete = (req, res) => {
    const { id } = req.params;
    Breakfast.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}


//! UPDATE
exports.breakfast_update = async (req, res) => {
    try {
        const example = await Breakfast.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Chef not found' })
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}