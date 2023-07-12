const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
};

const connectDBLocal = () => {
    return mongoose.connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
