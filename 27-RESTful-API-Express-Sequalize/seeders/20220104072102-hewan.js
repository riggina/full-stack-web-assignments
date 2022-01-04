'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('hewans', [
      {
        nama : "buddy",
        namaspesies : "anjing" ,
        umur : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : "molly",
        namaspesies : "kucing" ,
        umur : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : "frog",
        namaspesies : "katak" ,
        umur : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : "bobby",
        namaspesies : "anjing" ,
        umur : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : "cloud",
        namaspesies : "iguana" ,
        umur : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('hewans', null, {});
  }
};
