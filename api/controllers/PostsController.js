const Post = require("../models/Post")


class PostsController {
    async getPosts(req, res) {
        try {
            console.log(req.body.username)
            const posts = await Post.find({});
            res.status(200).json(posts);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async addPost(req, res) {
        try {
            const newPost = new Post({
                title: req.body.title,
                desc: req.body.description,
                photo: req.body.photo,
                username: req.body.username,
                category: req.body.category

            });
            const post = await newPost.save();
            res.status(200).json(post);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    async updatePost(req, res) {
        try {
            const updatePost = await Post.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json(updatePost);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    async deletePost(req, res) {
        if (req.params.id === req.body.id) {
            try {
                const deletePost = await Post.deleteOne({ id: req.params.id })
                res.status(200).json(deletePost);
            } catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        }
    }
}

module.exports = new PostsController;