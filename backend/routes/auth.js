const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
    let success = false;
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if (!user) {
            success = false;
            return res.status(400).json({success, error: "Invalid Credentials"});
        }
        if (password !== user.password) {
            success = false;
            return res.status(400).json({success, error: "Invalid Credentials"});
        }

        success = true;
        res.json({success});
    }
    catch(error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

});

router.post('/createuser', async (req, res) => {
    let success = false;
    try {
        const {email, username, password} = req.body;
        if (!email || !password || !username) {
            success = false;
            res.status(400).json({success, error: "Invalid data"});
        }

        success = true;
        let data = new User(req.body);
        let result = await data.save();
        console.log(result);
        res.json({success, result});
    }
    catch (error) {
        success = false;
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
