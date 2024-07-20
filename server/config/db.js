// db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;


/*

// db.js
const mongoose = require('mongoose');
//const dotenv = require('dotenv');

//dotenv.config();
async function dbConnect(url){
    mongoose
    .connect(url, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>{
        console.log("Successfully connected to MongoDB");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas! ");
        console.error(error);
    });
}
module.exports = dbConnect;

*/

/* const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;*/