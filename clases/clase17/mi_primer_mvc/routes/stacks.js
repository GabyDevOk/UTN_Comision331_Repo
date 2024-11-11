var express = require("express");
var router = express.Router();
const stackController = require("../controllers/stacks.controller");

/* GET users listing. */
router.get("/", stackController.getStacks);

module.exports = router;
