const User = require('./models/user')
const UsersData = require("./mockData");
const mongoose = require('mongoose')
require('dotenv').config();

async function seed() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('db connected');

        await User.deleteMany();
        console.log('Users deleted')
        await User.insertMany(UsersData);
        console.log('Users seeded')
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seed();

