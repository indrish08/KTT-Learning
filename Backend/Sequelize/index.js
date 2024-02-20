// const { Sequelize, DataTypes } = require("sequelize");
const User = require('./models/User')

// const sequelize = new Sequelize(
//   "postgres://postgres:indrish@localhost:5432/pulsebeat"
// );

// const sequelize = new Sequelize('pulsebeat', 'postgres', 'indrish', {
//     host: 'localhost',
//     dialect: 'postgres',
// });

const connectToDatabase = async () => {
  try {
    // Attempt to authenticate the connection
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    // Close the Sequelize connection
    await sequelize.close();
  }
};

// Run the function
// connectToDatabase();

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User);

// User.sync()

User.createUser("john_doe_3", "john@2")

const authenticateUser = async (inputUsername, inputPassword) => {
  try {
    const user = await User.findOne({
      where: { username: inputUsername },
    });

    if (user) {
      if (user.password === inputPassword) {
        console.log("Authentication successful. User:", user.toJSON());
      } else {
        console.log("Authentication failed. Incorrect password.");
      }
    } else {
      console.log("Authentication failed. User not found.");
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
  }
};

// authenticateUser("john_doe", "john@2");

// sequelize.sync().then(() => {
//     console.log('Model synced successfully.');
// });
