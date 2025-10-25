const mongoose = require('mongoose');


const connectDB = async () => {
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/expense_db';
return mongoose.connect(uri, {
serverSelectionTimeoutMS: 5000
});
};


module.exports = connectDB;