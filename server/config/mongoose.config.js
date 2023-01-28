require("dotenv").config();

const mongoose = require('mongoose');
console.log(process.env.DB_NAME)
mongoose.connect(`mongodb://localhost:27017/articleDB`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

module.exports = mongoose.connection;
