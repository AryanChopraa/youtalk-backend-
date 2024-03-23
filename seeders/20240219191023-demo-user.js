module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        Name: 'John Doe',
        Password: '123',
        email: 'john@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Name: 'Aryan',
        Password: '123',
        email: 'aryan@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Name: 'Kabir',
        Password: '123',
        email: 'Kabir@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};