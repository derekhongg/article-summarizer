const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

module.exports = mongoose.connection;
