const mongoose = require("mongoose")

const localDescarteSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true,
    }, 
    endereco: {
        type: String,
        required: true,
    },
    numero: {
        type: Number,
        required: false
    }, 
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model("localDescarte", localDescarteSchema)
