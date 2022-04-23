const Category = require("../models/Category")


class CategoryController {
    async getCategory(req, res) {
        try {
            const categories = await Category.find({});
            res.status(200).json(categories);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async addCategory(req, res) {
        try {
            const newCategory = new Category(req.body);
            const category = await newCategory.save();
            res.status(200).json(category);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    async updateCategory(req, res) {
        if (req.body.categoryId === req.params.id) {
            try {
                const updateCategory = await Category.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });
                res.status(200).json(updateCategory);
            } catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        }
        else {
            res.status(401).json("category khong khop")
        }
    }

    async deleteCategory(req, res) {
        if (req.params.id === req.body.id) {
            try {
                const deleteCategory = await Category.deleteOne({ id: req.params.id })
                res.status(200).json(deleteCategory);
            } catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        }
    }
}

module.exports = new CategoryController;