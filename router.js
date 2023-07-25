const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.post("/persons", controller.addPerson);

router.get("/persons", controller.getAllPersons);

router.get("/persons:id", controller.getOnePerson);

router.put("/persons", controller.updateOnePerson);

router.delete("/persons/:id", controller.removePerson);

module.exports = router;