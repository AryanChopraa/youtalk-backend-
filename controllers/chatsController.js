const chatsService = require('../services/chatsService');


const getAllChats = async (req, res) => {
    const user =  req.user;
    console.log('user', user);
    const chatsArr = await chatsService.getChatsbyUserId(req.user);
    return res.status(200).send({chatsArr});
}

const newChat = async (req, res) => {
    console.log(req.body);
    const url = req.body.url
    console.log('url', url);
    // console.log('type', type);
    return res.status(200).send({url});
}

module.exports = {getAllChats,newChat}