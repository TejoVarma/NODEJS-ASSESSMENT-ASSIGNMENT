const express = require('express');
const userRoutes = require('../controllers/user.controller');
const router = express.Router();

router.post('/add', userRoutes.postUser);
router.get('/show', userRoutes.getUser);

module.exports = router;