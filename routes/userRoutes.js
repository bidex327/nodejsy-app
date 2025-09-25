const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/userController");
const { protect } = require ("../middleware/authMiddleware")

router.post("/create-user", createUser);
router.post("/login-user", loginUser);
router.get('/users', protect                                                     )

module.exports = router;