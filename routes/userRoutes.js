const express = require("express");
const router = express.Router();
const { signupUser, loginUser } = require("../controllers/userController");
const { protect } = require ("../middleware/authMiddleware")

router.post("/create-user", signupUser);
router.post("/login-user", loginUser);
router.get('/users', protect);

module.exports = router;