const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");
const route = Router();

route.post("/comments", commentsController.addComment);
route.delete("/comments/id", commentsController.deleteComment);
route.get("/comments", commentsController.getComments);
route.patch("/comments/id", commentsController.patchComments);

module.exports = route;
