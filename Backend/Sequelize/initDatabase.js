const sequelize = require('./config/database');
const User = require('./models/userModel');

sequelize.sync()
  .then(() => {
    console.log('Database and tables synchronized.');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  })
  .finally(() => {
    // Close the Sequelize connection
    // sequelize.close();
  });