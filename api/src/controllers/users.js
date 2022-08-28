const { getOneUser, getAllUsers, createUser } = require("../services/users");
const bcryptjs = require("bcryptjs");
//user register
async function registerUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(304).json({
        message: "error",
        error: "Missing parameters",
      });
    }
    const search = await getOneUser({ email });
    if (search === null) {
      const user = await createUser({ email, password });
      res.status(201).json({
        message: "OK",
        data: {
          id: user._id,
          email: user.email,
        },
      });
    } else {
      res.status(304).json({
        message: "error",
        error: "User already exists",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
}

//user login
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await getOneUser({ email });
    if (user !== null) {
      if (bcryptjs.compareSync(password, user.password)) {
        res.status(200).json({
          message: "OK",
          data: {
            id: user._id,
            email: user.email,
          },
        });
      } else {
        res.status(400).json({
          message: "error",
          error: "Password is incorrect",
        });
      }
    } else {
      res.status(400).json({
        message: "error",
        error: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
}

//get all users
async function searchAllUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      message: "OK",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
}

module.exports = {
  registerUser,
  loginUser,
  searchAllUsers,
};
