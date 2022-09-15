const User = require("../models/User.model");

module.exports.userController = {
  addUser: async (req, res) => {
    try {
      const { name } = req.body;
      await User.create({ name });
      res.json("Пользователь создан");
    } catch (error) {
      res.json(`${error.message}: Ошибка при добавлении пользователя`);
    }
  },
  saved: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user.saved.includes(req.body.postId)) {
        await user.updateOne({ $pull: { saved: req.body.postId } });
        res.json("Пост был удален");
      } else {
        await user.updateOne({ $push: { saved: req.body.postId } });
        res.json("Пост был сохранен");
      }
    } catch (err) {
      res.json(err);
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json(`${error.meessage}: Ошибка при выводе всех пользователей`);
    }
  },
  patchUser: async (req, res) => {
    const { name } = req.body;
    try {
      await User.findByAndUpdate(req.params.id, {
        $set: { name },
      });
      res.json("Пользователь изменен");
    } catch (error) {
      res.json(`${error.message}: Ошибка при изменении пользователя`);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findOneAndRemove(req.params.id);
      res.json("Пользователь удален");
    } catch (error) {
      res.json(`${error.message}: Ошибка при удалении пользователя`);
    }
  },
};
