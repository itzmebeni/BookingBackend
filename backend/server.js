const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');

dotenv.config();

const app = express();

app.use(express.json());


const PORT = 5000;

const DB_URI = 'mongodb://localhost:27017';

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

  app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});