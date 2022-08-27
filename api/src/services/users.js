const users = require("../models/users");
const bcrypt = require('bcryptjs');

async function createUser(objet) {
  const user = new users({
    email: objet.email,
    password: bcrypt.hashSync(objet.password, 10)
  });
  return user.save();
}

async function getOneUser(filter) {
  return await users.findOne(filter);
}

async function getAllUsers() {
    return await users.find();
}

async function updateUser(filter, update) {
    return await users.findOneAndUpdate(filter, update);
}

module.exports = {
    createUser,
    getOneUser,
    getAllUsers,
    updateUser,
};