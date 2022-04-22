const router = require("express").Router();

const postsController = require("../controllers/PostsController")


router.post("/add", postsController.addPost)
router.put("/:id", postsController.updatePost)
router.delete("/:id", postsController.deletePost)
router.get("/", postsController.getPosts)


module.exports = router