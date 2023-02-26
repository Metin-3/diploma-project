const Guest = require('../models/galleryGuestModel');


//! GET
exports.guest_getAll = (req, res) => {
    Guest.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}



//! GET ID
exports.guest_getAll_Id = (req, res) => {
    const { id } = req.params;
    Guest.findById(id, (err, docs) => {
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
exports.guest_post = async (req, res) => {
    const food = req.body
    try {
        await Guest.create(food)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error)
    }
}



//! DELETE
exports.guest_delete = (req, res) => {
    const { id } = req.params;
    Guest.findByIdAndDelete(id, (err) => {
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
exports.guest_update = async (req, res) => {
    try {
        const example = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Chef not found' })
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}