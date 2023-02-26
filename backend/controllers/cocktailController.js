const Cocktail = require('../models/cocktailModel');


//! GET
exports.cocktail_getAll = (req, res) => {
    Cocktail.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}



//! GET ID
exports.cocktail_getAll_Id = (req, res) => {
    const { id } = req.params;
    Cocktail.findById(id, (err, docs) => {
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
exports.cocktail_post = async (req, res) => {
    const food = req.body
    try {
        await Cocktail.create(food)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error)
    }
}



//! DELETE
exports.cocktail_delete = (req, res) => {
    const { id } = req.params;
    Cocktail.findByIdAndDelete(id, (err) => {
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
exports.cocktail_update = async (req, res) => {
    try {
        const example = await Cocktail.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Cocktail not found' })
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}