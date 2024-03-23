'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Chats', [ {
      sourceType: 'Type A',
      sourceUrl: 'https://example.com/a',
      sourcePicture: 'https://example.com/a/picture.jpg',
      createdBy: 14,
      Topic: 'Topic A',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sourceType: 'Type B',
      sourceUrl: 'https://example.com/b',
      sourcePicture: 'https://example.com/b/picture.jpg',
      createdBy: 15,
      Topic: 'Topic B',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sourceType: 'Type B',
      sourceUrl: 'https://example.com/b',
      sourcePicture: 'https://example.com/b/picture.jpg',
      createdBy: 16,
      Topic: 'Topic B',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sourceType: 'Type B',
      sourceUrl: 'https://example.com/b',
      sourcePicture: 'https://example.com/b/picture.jpg',
      createdBy: 14,
      Topic: 'Topic B',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sourceType: 'Type B',
      sourceUrl: 'https://example.com/b',
      sourcePicture: 'https://example.com/b/picture.jpg',
      createdBy: 14,
      Topic: 'Topic B',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sourceType: 'Type B',
      sourceUrl: 'https://example.com/b',
      sourcePicture: 'https://example.com/b/picture.jpg',
      createdBy: 15,
      Topic: 'Topic B',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chats', null, {});
  }
};
