const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  searchAllUsers,
} = require("../../controllers/users");

router.post("/sing-up", registerUser);
router.post("/login", loginUser);
router.get("/search-all-users", searchAllUsers);

module.exports = router;
