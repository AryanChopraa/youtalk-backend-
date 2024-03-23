const {User} = require('./models/index.js');
const Obj = require('./models');

const testCRUD = async () => {
    try {

     const user2 = await User.findOne({where: {id: 1}});
     console.log('Users:', user2);

    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

testCRUD()