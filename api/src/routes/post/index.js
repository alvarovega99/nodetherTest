const express = require("express");
const router = express.Router();
const {
  createPostController,
  searchOnePost,
  searchAllPost,
  updateLike,
  updateDislike,
  deletePostController,
} = require("../../controllers/post");

router.post("/create-post", createPostController);
router.get("/search-one-post/:id", searchOnePost);
router.get("/search-all-post", searchAllPost);
router.get("/update-like/:id", updateLike);
router.get("/update-dislike/:id", updateDislike);
router.delete("/delete-post/:id", deletePostController);

module.exports = router;
