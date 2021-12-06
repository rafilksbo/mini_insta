const express = require('express')
const usuarios = require('./controladores/usuarios')
const login = require('./controladores/login')
const postagens = require('./controladores/postagens')
const verificaLogin = require('./filtros/authentication')


const rotas = express()

//Cadastro de Usuários
rotas.post('/cadastrar', usuarios.cadastrarUsuarios)


//Login

rotas.post('/login', login.login)

//Autenticação
rotas.use(verificaLogin)

//Manejo

rotas.get('/perfil', usuarios.obterPerfil)
rotas.put('/perfil', usuarios.atualizarPerfil)

rotas.post('/postagens', postagens.novaPostagem)
rotas.post('/postagens/:postagemId/curtir', postagens.curtir)
rotas.post("/postagens/:postagemId/comentar", postagens.comentar);
rotas.get('/postagens', postagens.feed)


module.exports = rotas