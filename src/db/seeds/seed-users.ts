const mongoose = require("mongoose")
const {UserModel} = require("./models/users")

const dotenv = require("dotenv");
dotenv.config();

// establish mongodb connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
}).catch((err) => {
    console.log(err)
})

const seedUsers = [
    {
        email: "hello@hello.com",
        username: "hello",
        password: "password"
    }
]

const seedDB = async () => {
    await UserModel.deleteMany({})
    await UserModel.insertMany(seedUsers)
}

seedDB().then(() => {
    mongoose.connection.close()
})
