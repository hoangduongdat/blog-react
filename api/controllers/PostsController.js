const Post = require("../models/Post")
const User = require("../models/User")


class PostsController {
    //get all post
    async getPosts(req, res) {
        const username = req.query.user;
        const catName = req.query.cat
        console.log(catName)
        try {
            let posts;

            if (username) {
                posts = await Post.find({ username: username });
            } else if (catName) {
                posts = await Post.find({
                    categories: {
                        $in: [catName],
                    }
                });
            } else {
                posts = await Post.find({})
            }
            res.status(200).json(posts);

        } catch (err) {
            res.status(500).json(err);
        }
    }
    // get post by id
    async getPost(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            res.status(200).json(post);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async addPost(req, res) {
        try {
            const newPost = new Post(req.body);
            const post = await newPost.save();
            res.status(200).json(post);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    async updatePost(req, res) {

        if (req.body.postId === req.params.id) {
            try {
                const post = await Post.findById(req.params.id);
                if (post.username === req.body.username) {
                    try {
                        const updatePost = await Post.findByIdAndUpdate(req.params.id, {
                            $set: req.body,
                        }, { new: true });
                        res.status(200).json(updatePost);
                    } catch (err) {
                        res.status(500).json(err);
                    }
                }
                else {
                    res.status(401).json("you can update only your post!");
                }
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("not found post");
        }
    }

    async deletePost(req, res) {
        if (req.params.id === req.body.postId) {
            try {
                const post = await Post.findById(req.params.id);
                if (post.username === req.body.username) {
                    try {
                        // const deletePost = await Post.deleteOne({ id: req.params.id })
                        await post.delete();
                        res.status(200).json("post has been deleted");
                    } catch (err) {
                        res.status(500).json(err);
                    }
                } else {
                    res.status(401).json("you can delete only your post!");
                }
            } catch (err) {
                res.status(500).json(err);
            }

        }
    }
}

module.exports = new PostsController;