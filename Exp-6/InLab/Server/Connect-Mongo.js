const mongoose = require('mongoose');
const url = "mongodb+srv://Gowtham:abcd1234@gowtham.jz9uure.mongodb.net/users";

const mongoDb = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDb;
