const db = require('./models/index')

const testConnection = async()=>{
    try {
        console.log('Testing connection...');
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      finally{
        await db.sequelize.close();
      }
}

module.exports = { testConnection };

