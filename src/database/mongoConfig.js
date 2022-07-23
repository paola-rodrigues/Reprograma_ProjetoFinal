const mongoose = require("mongoose");

// const MONGODB_URI = process.env.MONGODB_URI || 8080

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Muito Feliz, Banco de dado conectado!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connect
}
