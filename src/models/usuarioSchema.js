const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true        
    },
    dataColeta: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);