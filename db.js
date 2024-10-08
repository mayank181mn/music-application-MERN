const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://mayanknarang23:9899209619Mn@cluster0.48rju.mongodb.net/musicDBmusicapp?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;

