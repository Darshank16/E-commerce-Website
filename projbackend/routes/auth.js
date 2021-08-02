var express = require("express");
var router = express.Router();
const { check } = require('express-validator');
const {signout,signup,signin,isSignedIn} = require("../controllers/auth.js");

router.post("/signup",[
    check("name").isLength({ min: 5 }).withMessage('Username should be atleast 5 character'),
    check("email").isEmail(),
    check("password").isLength({ min: 7 }).withMessage('Password should be atleast 7 character')


], signup)

router.post("/signin",[
    check("email","email is required").isEmail(),
    check("password").isLength({ min: 1 }).withMessage('Please Enter your Password')
], signin)

router.get("/signout", signout);

// router.get("/testroute", isSignedIn, (req,res) =>{
//     res.send("A Protected Route");
// });

module.exports = router; 