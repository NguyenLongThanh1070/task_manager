require("dotenv").config();
const port = process.env.PORT || 3000;
const connectDB = require("./connectDB");

const listeningPort = async (app) => {
    try {
        await connectDB();
        app.listen(port, () => console.log(`Server is listening on port: ${port}`));
    } catch (error) {}
};

module.exports = listeningPort;
