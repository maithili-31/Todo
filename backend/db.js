const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/todo';

const connectDB = () => {
    mongoose.connect(mongoURI);
};

module.exports = connectDB;
