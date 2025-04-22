/************************************************************
 * Objetivo: Api responsavel pela reposições de projeto de musica 
 * Data: 13/02/2025
 * Autor: Beatriz Boletini
 * Versão: 1.0
 ************Obsrvações: Para criar a api precisamos instalar:
 * express               npm install express --save 
 * cors                  npm install cors --save   
 * body-parser           npm install body-parser --save
 
 ************Para criar a conexão com o banco de dados Mysql precisamos instalar :
 * prisma              npm install prisma --save 
 * prisma/cliente      npm install @prisma/client --save
 * 
 * 
 * apos a instalação é nessario inicializar o prisma 
   npx prisma init

 * para sincronizar o prisma com o banco de dados com o banco podemos utlizar o 
   npx prisma migrate dev  
**************************************************************************/
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//import das controllers do projeto
const controllerMusica = require('./controller/Musica/controllerMusica')

//criando formato de dados que será recebido no body da requisição (POST/PUT)
const bodyParserJSON = bodyParser.json()

//criando o objeto app para criar a API
const app = express()

//configuração do CORS
app.use(cors())
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
})

//endpoint para inserir uma música
app.post('/v1/controle-musicas/musica', bodyParserJSON, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let result = await controllerMusica.inserirMusica(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

//endpoint para retornar lista de musicas
app.get('/v1/controle-musicas/musica', async function(request, response){
    let result = await controllerMusica.listarMusica()
    response.status(result.status_code)
    response.json(result)
})

//endpoint para buscar uma música pelo id
app.get('/v1/controle-musicas/musica/:id', async function(request, response){
    let idMusica = request.params.id
    let result = await controllerMusica.buscarMusica(idMusica)
    response.status(result.status_code)
    response.json(result)
})

// endpoint para deletar uma musica
app.delete('/v1/controle-musicas/musica/:id', async function(request, response){
    let idMusica = request.params.id
    let result = await controllerMusica.excluirMusica(idMusica)
    response.status(result.status_code)
    response.json(result)
})

//endpoint pr atualizar uma musica
app.put('/v1/controle-musicas/musica/:id', bodyParserJSON, async function(request, response){
    let contentType = request.headers['content-type']
    let idMusica = request.params.id
    let dadosBody = request.body
    let result = await controllerMusica.atualizarMusica(dadosBody, idMusica, contentType)
    response.status(result.status_code)
    response.json(result)
})

// inicia o servidor
app.listen(8080, () => {
    console.log('Servidor aguardando requisições na porta 8080...')
})