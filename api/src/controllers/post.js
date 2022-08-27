const {
  createPost,
  getOnePost,
  getAllPosts,
  updatePost,
  deletePost,
} = require("../services/posts");

const { getOneUser } = require("../services/users");

//create post
async function createPostController(req, res) {
  try {
    const { description, image, userId } = req.body;
    if (!description || !userId) {
      res.status(400).json({
        message: "error",
        error: "Missing parameters",
      });
    } else {
      const post = await createPost({ description, image, userId });
      res.status(201).json({
        message: "OK",
        post: post,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
}

//get one post
async function searchOnePost(req, res) {
  try {
    const { id } = req.params;
    const post = await getOnePost({ _id: id });
    post.userId;
    if (post !== null) {
      res.status(200).json({
        message: "OK",
        data: post,
      });
    } else {
      res.status(400).json({
        message: "error",
        error: "Post not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
}

//get all posts order by karma
async function searchAllPost(req, res) {
  try {
    const posts = await getAllPosts();
    if (posts !== null) {
      const response = [];
      for (let i = 0; i < posts.length; i++) {
        const user = await getOneUser({ _id: posts[i].userId });
        response.push({
          id: posts[i]._id,
          description: posts[i].description,
          image: posts[i].image,
          user: { email: user.email, id: user._id },
          karma: posts[i].karma,
          likes: posts[i].likes,
          dislikes: posts[i].dislikes,
        });
      }
      const sortedPosts = await Promise.all(response).then((posts) => {
        return posts.sort((a, b) => b.karma - a.karma);
      });
      res.status(200).json({
        message: "OK",
        data: sortedPosts,
      });
    } else {
      res.status(400).json({
        message: "OK",
        posts: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
}

//sumar likes y dislikes y actualizar karma
async function updateLike(req, res) {
  try {
    const { id } = req.params;
    const post = await updatePost(
      { _id: id },
      { $inc: { likes: 1, karma: 1 } }
    );
    if (post !== null) {
      res.status(200).json({
        message: "OK",
      });
    } else {
      res.status(400).json({
        message: "error",
        error: "Post not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
}

//restar likes y actualizar karma
async function updateDislike(req, res) {
  try {
    const { id } = req.params;
    const search = await getOnePost({ _id: id });
    if (search !== null) {
      if (search.karma > 0) {
        const post = await updatePost(
          { _id: id },
          { $inc: { dislikes: 1, karma: -1 } }
        );
        res.status(200).json({
          message: "OK",
        });
      } else {
        const post = await updatePost({ _id: id }, { $inc: { dislikes: 1 } });
        res.status(200).json({
          message: "OK",
        });
      }
    } else {
      res.status(400).json({
        message: "error",
        error: "Post not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
}

//delete post
async function deletePostController(req, res) {
  try {
    const { id } = req.params;
    const post = await deletePost({ _id: id });
    if (post !== null) {
      res.status(200).json({
        message: "OK",
      });
    } else {
      res.status(400).json({
        message: "error",
        error: "Post not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
}

module.exports = {
  createPostController,
  searchOnePost,
  searchAllPost,
  updateLike,
  updateDislike,
  deletePostController,
};