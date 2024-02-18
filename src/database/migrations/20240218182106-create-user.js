'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone : {
        type: Sequelize.STRING,
        allowNull: false,
      },

      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    
    
    
    });
     
  },

  down : (queryInterface, Sequelize) => {
     return queryInterface.dropTable('users');
  }
};
