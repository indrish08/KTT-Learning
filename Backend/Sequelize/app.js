const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/userModel');
// require('./initDatabase');  

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Register route for user login
app.get('/login', async (req, res) => {
//   var { username, password } = req.body;
  var username = 'indrish'
  var password = 'pass'

  try {
    const user = await User.findByUsername(username);
    
    if (!user) {
        return res.status(401).json({ message: 'Invalid username' });
    }
    console.log(user.dataValues.password);

    const isPasswordValid = user.dataValues.password === password;

    if (isPasswordValid) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
