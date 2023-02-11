const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'lab4'
}).then(() => {
  console.log('Successfully connected to the database mongoDB Atlas Server');  
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

app.post("/users", async (req, res) => {
  try {
      const user = await User.create(req.body);
  
      return res.status(201).json(user);
  } catch (err) {
      return res.status(500).send(err);
  }

});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});