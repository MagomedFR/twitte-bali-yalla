const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  addComment: async (req, res) => {
    try {
      const { text, _userId, _postId } = req.body;
      await Comment.create({ text, _userId, _postId });
      res.json("Комментарий добавлен");
    } catch (error) {
      res.json(`${error.message}: Ошибка при добавлении комментария`);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findOneAndRemove(req.params.id);
      res.json("Комментарий удален");
    } catch (error) {
      res.json(`${error.message}: Ошибка при удалении комментария`);
    }
  },
  getComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (error) {
      res.json(`${error.meessage}: Ошибка при выводе всех комментарий`);
    }
  },
  patchComments: async (req, res) => {
    const { text } = req.body;
    try {
      await Comment.findByAndUpdate(req.params.id, {
        $set: { text },
      });
      res.json("Комментарий изменена");
    } catch (error) {
      res.json(`${error.message}: Ошибка при изменении комментария`);
    }
  },
};
