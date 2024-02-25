import Sequelize from 'sequelize';

// Create a new Sequelize instance
const sequelize = new Sequelize('db_acciones', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3320,
}, {
  define: {
    timestamps: false
  }
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Export the sequelize instance
export default sequelize;
