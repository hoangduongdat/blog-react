const router = require("express").Router();
const userController = require("../controllers/UserController");

router.get("/:id", userController.getUser);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

module.exports = router;
