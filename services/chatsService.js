const {Chat} = require('../models/index.js');

const getChatsbyUserId = async (userId) => {
    const chats = await Chat.findAll({where: {createdBy: userId}});
    return chats;
}


module.exports = {
    getChatsbyUserId
}