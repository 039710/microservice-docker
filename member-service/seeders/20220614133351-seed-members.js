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
    const members = []
    for (let i = 0; i < 30; i++) {
      members.push({
        orgName: `xendit`,
        avatar_url: `https://i.pravatar.cc/150?img=${i+1}`,
        followers: Math.floor(Math.random() * 100),
        followings: Math.floor(Math.random() * 100),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Members', members, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Members', null, {});
  }
};
