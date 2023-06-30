const {v4: uuid }= require("uuid");
const User = require("../database/user");

const getAllUsers = () => {
    const allUsers = User.getAllUsers();
    return allUsers; 
};

const getOneUser = () => {
    return; 
};

const createNewUser = (newUser) => {
    const userToInsert = {
        ...newUser,
        id: uuid(),
    }

    const createdNewUser = User.createNewUser(userToInsert);
    return createdNewUser;
    

};

const updateOneUser = () => {
    return; 
};

const deleteOneUser = () => {
    return; 
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
}