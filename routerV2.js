const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json("La v2 est ici"));

module.exports = router;