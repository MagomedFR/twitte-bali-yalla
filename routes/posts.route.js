const { Router } = require("express");
const { postsController } = require("../controllers/posts.controller");
const route = Router();

route.post("/posts", postsController.addPost);
route.patch("/posts/:id", postsController.likeAndDislikePost);
route.delete("/posts/:id", postsController.deletePost);
route.patch("/posts/text/:id", postsController.patchPost);

module.exports = route;
