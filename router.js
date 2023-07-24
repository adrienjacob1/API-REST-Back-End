const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.post("/persons", controller.addPerson(req.body));

router.get("/persons", controller.getAllPersons);

router.get("/persons:id", controller.getOnePerson(req.params.id));

router.put("/persons", controller.updateOnePerson(req.body));

router.delete("/persons/:id", controller.removePerson(req.params.id));

module.exports = router;