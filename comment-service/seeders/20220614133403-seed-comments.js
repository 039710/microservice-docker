'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const comments = [
      {
        comment: 'This is a comment',
        orgName : "xendit",
        softDeleted : false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: 'This is a comment',
        orgName: "xendit",
        softDeleted : false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: 'This is a comment',
        orgName: "xendit",
        softDeleted : false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: 'This is a comment',
        orgName: "xendit",
        softDeleted : false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Comments', comments, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
