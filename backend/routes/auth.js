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

module.exports = router;
