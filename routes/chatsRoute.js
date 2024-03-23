const express = require('express');
const router = express.Router();
const authenticateUser = require('../middlewares/authenticate');
const chatsController = require('../controllers/chatsController');


router.get('/', authenticateUser, chatsController.getAllChats)
router.post('/new',authenticateUser,chatsController.newChat)


module.exports = router;