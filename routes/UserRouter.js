const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.render("user")
})

router.get("/app", (req, res)=> {
    res.send("user App")
})

module.exports = router;

