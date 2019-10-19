const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController")

router.get("/posts", postController.index);
router.get("/posts/new", postController.new);
router.get("/posts/:id", postController.show);
router.post("/posts/create", postController.create);
router.post("/posts/:id/destroy", postController.destroy);

module.exports = router;
