const userService = require("../services/userService");

const getAllUsers =  (req, res) => {
    const allUsers = userService.getAllUsers();
    res.send({status: 'OK', data: allUsers});
};

const getOneUser = (req, res) => {
    const oneUser = userService.getOneUser(req.params.userId);
    res.send(`Get user ${req.params.userId}`);
};

const createNewUser = (req, res) => { 
    const { body } = req;
    if(!body.name || !body.password || body.Level1){
        return;

};  
const newUser =  {
    name: body.name,
    password: body.password,
    Level1: body.Level1,
};


const createdUser = userService.createNewUser(newUser);
    res.status(201).send({status: "ok", data: createdUser});
};

const deleteOneUser = (req, res) => {
    userService.deleteOneUser(userId);
    res.send(`Delete User ${req.params.userId}`);
};

const updateOneUser = (req, res) => {
    const updateUser = userService.updateOneUser(req.params.userId);
    res.send (`Update User ${req.params.userId}`);
};

module.exports ={
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,

};