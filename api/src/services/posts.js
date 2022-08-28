const Post = require("../models/post");


async function createPost(objet) {
  const post = new Post({
    description: objet.description,
    image: objet.image,
    user: objet.user,
  });
  return post.save();
}

async function getOnePost(filter) {
  return await Post.findOne(filter);
}

async function getAllPosts() {
  return await Post.find();
}

async function updatePost(filter, update) {
  return await Post.findOneAndUpdate(filter, update);
}

async function deletePost(filter) {
  return await Post.findOneAndDelete(filter);
}

module.exports = {
  createPost,
  getOnePost,
  getAllPosts,
  updatePost,
  deletePost,
};
