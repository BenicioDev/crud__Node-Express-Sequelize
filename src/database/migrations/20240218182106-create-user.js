'use strict';

// npx sequelize db:migrate (migra para o banco de dados após alteração)

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
      senha : {
        type: Sequelize.STRING,
        allowNull: false,
      },


      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    
    
    
    });
     
  },

  down : (queryInterface, Sequelize) => {
     return queryInterface.dropTable('users');
  }
};
