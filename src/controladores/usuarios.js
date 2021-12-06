const knex = require('../conexao')
const bcrypt = require('bcrypt')

const cadastrarUsuarios = async (req, res) =>{
    console.log('entrou')
    const {username, senha} = req.body

    if(!username){
        return res.status(404).json("O Campo username é obrigatório")
    }
    if(!senha){
        return res.status(404).json("O Campo senha é obrigatório")
    }

    if(senha.length < 5){
        return res.status(404).json('A senha deve conter, no mínimo, 5 caracteres')
    }

    try {
        const quantidadeUsuarios = await knex('usuarios').where({username}).first()

        if(quantidadeUsuarios){
             return res.status(400).json("O username informado já existe");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const usuario = await knex('usuarios').insert({username, senha:senhaCriptografada})

        if(!usuario){
               return res.status(400).json("Não foi possível cadastrar o usuário");
        }

        return res.status(201).json("usuario cadastrado com sucesso");


    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const obterPerfil = async (req,res) =>{
    console.log(req.usuario)
    return res.status(200).json(req.usuario)
}

const atualizarPerfil = async (req,res) =>{
    
    let {nome, email, senha, imagem, username, site, bio, telefone, genero} = req.body

    const {id, email: email_usuario, username:username_usuario} = req.usuario
    
    
    if ((!nome && !email && !senha && !imagem && !username && !site && !bio && !telefone && !genero)){
        console.log('entrou no if')
        return res.status(404).json('É obrigatório informar ao menos um campo para atualização')
    }

    try {

        if(senha){
            if (senha.length < 5) {
            return res
            .status(404)
            .json("A senha deve conter, no mínimo, 5 caracteres");
            }
            senha = await bcrypt.hash(senha,10)
         }
        

        if(email){
            if(email !== email_usuario){
                const usuarioExiste = await knex('usuarios').where({email}).first()
                console.log("entrou 2");

                if(usuarioExiste){
                    return res.status(404).json('O email já existe')
                }
            }
        }

        if(username !== username_usuario){
            const usernameExiste = await knex('usuarios').where({username}).first()

            if(usernameExiste){
                return res.status(404).json("O username já existe");
            }
        }

        const usuarioAtualizado = await knex("usuarios").where({ id }).update({
          nome,
          email,
          senha,
          imagem,
          username,
          site,
          bio,
          telefone,
          genero
        });

        if(!usuarioAtualizado){
            return res.status(404).json("Não foi possível atualizar o usuário");
        }

        return res.status(200).json('Usuário atualizado com sucesso')

    } catch (error) {
        return res.status(404).json(error.message);
    }

}
  module.exports = {
    cadastrarUsuarios,
    obterPerfil,
    atualizarPerfil
  };

