const router = require("express").Router();

const postsController = require("../controllers/PostsController")


router.post("/", postsController.addPost)
router.get("/", postsController.getPosts)
router.get("/:id", postsController.getPost)
router.put("/:id", postsController.updatePost)
router.delete("/:id", postsController.deletePost)


module.exports = router