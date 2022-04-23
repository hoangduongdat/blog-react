const router = require("express").Router();

const categoryController = require("../controllers/CategoryController")


router.post("/", categoryController.addCategory)
router.put("/:id", categoryController.updateCategory)
router.delete("/:id", categoryController.deleteCategory)
router.get("/", categoryController.getCategory)


module.exports = router