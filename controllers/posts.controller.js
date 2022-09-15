const Post = require("../models/Post.model");

module.exports.postsController = {
  addPost: async (req, res) => {
    try {
      const { title, text, _userId } = req.body;
      await Post.create({ title, text, _userId });
      res.json("Пост добавлен");
    } catch (error) {
      res.json(`${error.message}: Ошибка при добавлении поста`);
    }
  },
  likeAndDislikePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.likes.includes(req.body.userId)) {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.json("the post has been disliked");
      } else {
        await post.updateOne({ $push: { likes: req.body.userId } });
        res.json("the post has been liked!");
      }
    } catch (err) {
      res.json(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findOneAndRemove(req.params.id);
      res.json("Пост удален");
    } catch (error) {
      res.json(`${error.message}: Ошибка при удалении поста`);
    }
  },
  patchPost: async (req, res) => {
    const { title, text } = req.body;
    try {
      await Book.findByAndUpdate(req.params.id, {
        $set: { title, text },
      });
      res.json("Пост изменен");
    } catch (error) {
      res.json(`${error.message}: Ошибка при изменении поста`);
    }
  },
  getPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.json(`${error.meessage}: Ошибка при выводе всех постов`);
    }
  },
};
