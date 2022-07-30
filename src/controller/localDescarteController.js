const mongoose = require("mongoose");
const LocalDescarteSchema = require("../models/localDescarteSchema");


const getAll = async (req, res) => {
  try {
    const allLocal= await LocalDescarteSchema.find();
    res.status(200).send(allLocal);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  };

};

const localById = async (req, res) => {
    try {
      const { id } = req.params  
      const idLocal = await LocalDescarteSchema.findById(req.params.id);
  
      if (!idLocal ) throw new Error(`desculpa, não foi possivel encontrar o local de descarte com o id ${id}`); 
  
      res.status(200).json(idLocal);
  
    } catch (error) {
      res.status(500).json({
        message: "Poxa, desculpa, foi mal, ainda não foi cadastro esse local com essa id.",
        details: error.message,
  
      });
  
    };
  
  };

const createLocal = async (req, res) => {
  try {
    const newLocal = new LocalDescarteSchema({
      nome: req.body.nome,
      endereco: req.body.endereco,
      numero: req.body.numero,
      bairro: req.body.bairro,      
      cidade: req.body.cidade,
      telefone: req.body.telefone,
      _id: new mongoose.Types.ObjectId()
    });

    const localSaved = await newLocal.save()
    res.status(201).send(localSaved);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  };
};

const updateLocalById = async (req, res) => {
  try {
    const localDescarte = await LocalDescarteSchema.findById(req.params.id);
    // let bodyRequest = req.body;
    if (localDescarte) {
        localDescarte.nome = req.body.nome || localDescarte.nome;
        localDescarte.endereco = req.body.endereco || localDescarte.endereco;
        localDescarte.numero = req.body.numero || localDescarte.numero
        localDescarte.bairro = req.body.bairro || localDescarte.bairro
        localDescarte.cidade = req.body.cidade || localDescarte.cidade
        localDescarte.telefone = req.body.telefone || localDescarte.telefone

      const savedlocal= await localDescarte.save();

      return res.status(200).send({
        message: "Local atualizado com sucesso!",
        savedlocal
       });
    };
      return res.status(400).json({
        mensagem: "Local não encontrado!"
      });
    } catch (error) {
        return res.status(404).send({
        message: error.message
        });
    };
};

const deleteLocalById  = async (req, res) => {
  try {
    const requestedLocal = await LocalDescarteSchema.findByIdAndDelete(req.params.id);
    if(requestedLocal == null) {
      return res.status(404).send({message: "Id informada não encontrada!"})
    };
    return res.status(200).send({message: "Local deletado com sucesso!"});

  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  };
};

module.exports = {
  getAll,
  localById,
  createLocal,
  updateLocalById,
  deleteLocalById 
};
