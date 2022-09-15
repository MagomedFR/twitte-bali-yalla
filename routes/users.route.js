const { Router } = require("express");
const { userController } = require("../controllers/users.controller");
const route = Router();

route.post("/users", userController.addUser);
route.patch("/users/:id", userController.saved);
route.get("/users", userController.getUsers);
route.patch("/users/name/:id", userController.patchUser);
route.delete("/users/:id", userController.deleteUser);

module.exports = route;
