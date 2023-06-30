const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController")

router
    .get("/", userController.getAllUsers) 
    .get("/:userId", userController.getOneUser) 
    .post("/", userController.createNewUser) 
    .delete("/userId", userController.deleteOneUser)  
    .patch("/userId", userController.updateOneUser);

module.exports = router;