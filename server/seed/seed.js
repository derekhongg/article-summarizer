const db = require('../config/mongoose.config');
const { User, Summary } = require('../models');
const userSeed = require('./userSeed.json');
const summarySeed = require('./summarySeed.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeed);
    
    await Summary.deleteMany({});
    await Summary.create(summarySeed);
    
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});