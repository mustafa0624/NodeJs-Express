const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.send("user Page1")
})

router.get("/app", (req, res)=> {
    res.send("user App")
})

module.exports = router;

