const Drink = require('../models/drinkModel');


//! GET
exports.drink_getAll = (req, res) => {
    Drink.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}



//! GET ID
exports.drink_getAll_Id = (req, res) => {
    const { id } = req.params;
    Drink.findById(id, (err, docs) => {
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
exports.drink_post = async (req, res) => {
    const food = req.body
    try {
        await Drink.create(food)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error)
    }
}



//! DELETE
exports.drink_delete = (req, res) => {
    const { id } = req.params;
    Drink.findByIdAndDelete(id, (err) => {
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
exports.drink_update = async (req, res) => {
    try {
        const example = await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Drink not found' })
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}