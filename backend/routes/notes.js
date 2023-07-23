const express = require('express');
const router = express.Router();

const Notes = require('../models/Notes');

router.get('/list', async (req, res) => {
    let data = await Notes.find();
    console.log(data);
    res.send(data);
});

router.post('/add', async (req, res) => {
    let success = false;
    try {
        let data = new Notes(req.body);
        let result = await data.save();
        let {title, description} = req.body;
        if (!title || !description) {
            success = false;
            res.status(400).json({success, error: "Provide all data properly"});
        }
        if (!result) {
            success = false;
            res.status(400).json({success, error: "Something went wrong while adding notes"});
        }
        
        success = true;
        res.json({success, data});
    }
    catch (error) {
        res.status(500).send("Internal server error");
    }
});

router.put('/update/:_id', async (req, res) => {
    let success = false;
    try {
        let data = req.body;
        let result = await Notes.updateOne(
            req.params,
            {
                $set: req.body
            }
        );
        if (!result) {
            success = false;
            res.status(400).json({success, error: "Cannot update notes"});
        }
        success = true;
        res.json({success, data});
    }
    catch (error) {
        res.status(500).send("Internal server error");
    }
})

router.delete('/delete/:_id', async (req, res) => {
    let success = false;
    try {
        let result = await Notes.deleteOne(req.params);
        if (!result) {
            res.status(400).json({success, error: "Cannot delete notes"});
        }
        success = true;
        res.json({success, result});
    }
    catch (error) {
        res.status(500).send("Internal server error");
    }
});

module.exports = router;
