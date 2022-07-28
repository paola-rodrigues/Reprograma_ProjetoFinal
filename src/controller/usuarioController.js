const UsuarioSchema = require("../models/usuarioSchema");

const getAll = async (req, res) => {
  UsuarioSchema .find(function (error, users) {
    if (error) {
      return res.status(500).send({
        message: error.message
      })
    }
    return res.status(200).json(users)
  })
};

const createUser = async (req, res) => {
  try {
    if(!req.body.nome || !req.body.email || !req.body.bairro) {
      res.status(404).send({
        "message": "Os campos obrigatórios precisam ser enviados",
        "statusCode": 404
      })
    }
  
    const newUsuario = new UsuarioSchema({
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password,
      bairro: req.body.bairro,
      dataColeta: new Date()
    });
  
    const saveUsuario = await newUsuario.save();
  
    if(saveUsuario) {
      res.status(201).send({
        "message": "Usuário criado com sucesso",
         saveUsuario
      })
    }

  } catch(error) {
    console.error(error);
  }
  };

const updateUserById = async (req, res) => {
  try {
    const findUser = await UsuarioSchema.findById(req.params.id)

    if (findUser) {
      findUser.name = req.body.name || findUser.name
      findUser.email = req.body.email || findUser.email
      findUser.password = req.body.password || findUser.password
      findUser.bairro = req.body.bairro || findUser.bairro
    }

    const savedUser = await findUser.save();

    return res.status(200).send({
      message: "Usuário atualizada com sucesso!",
      savedUser
    })

  } catch (error) {
    console.error(error)
  };
};

const deleteUserById = async (req, res) => {
  try {
    const userFound = await UsuarioSchema.findById(req.params.id)

    await userFound.delete()

    return res.status(200).send({
      "mensagem": `Usuário '${userFound.email}' deletada com sucesso!`,
      userFound
    })

  } catch (error) {
    return res.status(400).send({
      "mensagem": error.message
    });
  };
};

module.exports = {
  getAll,
  createUser,
  updateUserById,
  deleteUserById
};