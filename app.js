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

//EndPoint para inserir uma música 
app.post('/v1/controle-musicas/musica', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    // Recebe os dados do body da requisição 
    let dadosBody = request.body 

    // Chama a função da controller para inserir os dados e aguarda o retorno da função 
    let resultMusica = await controllerMusicas.inserirMusica(dadosBody, contentType)

    // Resposta e status code 
    response.status(resultMusica.status_code)
    response.json(resultMusica)

})

// Endpoint para listar todas as musicas
app.get('/v1/controle-musicas/musicas', cors(), async function(request, response){

    let resultMusica = await controllerMusicas.listarMusica()

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

// Endpoint para buscar música pelo ID
app.get('/v1/controle-musicas/musica/:id', cors(), async function(request, response){

    let id = request.params.id 

    let resultMusica = await controllerMusicas.buscarMusica(id)

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

// Endpoint para deletar música pelo ID
app.delete('/v1/controle-musicas/musica/:id', cors(), async function(request, response){
    
    //Sempre que for buscar pelo ID é por params 
    let id= request.params.id

    let resultMusica = await controllerMusicas.excluirMusica(id)

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

// Endpoint para atualizar música pelo ID
app.put('/v1/controle-musicas/musica/:id', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    // Recebe o ID da música
    let idMusica = request.params.id

    // Recebe os dados da requisição 
    let dadosBody = request.body

    // Chama a função e encaminha os argumentos: ID, Body e ContentType
    let resultMusica = await controllerMusicas.atualizarMusica(idMusica, dadosBody, contentType)

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})


////////////////////////////////CRUD Usuario/////////////////////////////////////////////////////////
// Import das Controller do projeto 
const controllerUsuarios = require('./controller/usuario/controllerUsuario')

//EndPoint para inserir um usuário 
app.post('/v1/controle-musicas/usuario', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    // Recebe os dados do body da requisição 
    let dadosBody = request.body 

    // Chama a função da controller para inserir os dados e aguarda o retorno da função 
    let resultUsuario = await controllerUsuarios.inserirUsuario(dadosBody, contentType)

    // Resposta e status code 
    response.status(resultUsuario.status_code)
    response.json(resultUsuario)

})

//Endpoint para listar todos os usuários
app.get('/v1/controle-musicas/usuarios', cors(), async function(request, response){
    
    let resultUsuario = await controllerUsuarios.listarUsuario()
    
    response.status(resultUsuario.status_code)
    response.json(resultUsuario)
})

//Endpoint buscar pelo ID
app.get('/v1/controle-musicas/usuario/:id', cors(), async function(request, response){

    //Pegando o ID via params
    let id = request.params.id

    // Chama a função e manda o id
    let resultUsuario = await controllerUsuarios.buscarUsuario(id)

    response.status(resultUsuario.status_code)
    response.json(resultUsuario)
})

// Endpoint para deletar usuário pelo ID
app.delete('/v1/controle-musicas/usuario/:id', cors(), async function(request, response){
    
    //Sempre que for buscar pelo ID é por params 
    let id= request.params.id

    let resultUsuario = await controllerUsuarios.excluirUsuario(id)

    response.status(resultUsuario.status_code)
    response.json(resultUsuario)
})

//Endpoint para atualizar usuário pelo ID
app.put('/v1/controle-musicas/usuario/:id', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    // Recebe o ID do usuário
    let idUser = request.params.id

    // Recebe os dados da requisição 
    let dadosBody = request.body

    // Chama a função e encaminha os argumentos: ID, Body e ContentType
    let resultUsuario = await controllerUsuarios.atualizarUsuario(idUser, dadosBody, contentType)

    response.status(resultUsuario.status_code)
    response.json(resultUsuario)
})
////////////////////////////////////////CRUD Banda//////////////////////////////////////////////////////////////////

// Import das Controller do projeto 
const controllerBanda = require('./controller/Banda/controllerBanda')

//EndPoint para inserir uma banda  
app.post('/v1/controle-musicas/banda', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    let dadosBody = request.body 

    // Chama a função da controller para inserir os dados e aguarda o retorno da função 
    let resultBanda = await controllerBanda.inserirBanda(dadosBody, contentType)

    // Resposta e status code 
    response.status(resultBanda.status_code)
    response.json(resultBanda)
})

// Endpoint para listar todas as bandas
app.get('/v1/controle-musicas/bandas', cors(), async function(request, response){

    let resultBanda = await controllerBanda.listarBanda()

    response.status(resultBanda.status_code)
    response.json(resultBanda)
})

// Endpoint para buscar banda pelo id
app.get('/v1/controle-musicas/banda/:id', cors(), async function(request, response){

    let id = request.params.id

    let resultBanda = await controllerBanda.buscarBanda(id)

    response.status(resultBanda.status_code)
    response.json(resultBanda)
})

// Endpoint para deletar genero pelo ID
app.delete('/v1/controle-musicas/banda/:id', cors(), async function(request, response){

    let id= request.params.id

    let resultBanda = await controllerBanda.excluirBanda(id)

    response.status(resultBanda.status_code)
    response.json(resultBanda)
})

//Endpoint para atualizar banda pelo ID
app.put('/v1/controle-musicas/banda/:id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    let idBanda = request.params.id

    let dadosBody = request.body

    // Chama a função e encaminha os argumentos: ID, Body e ContentType
    let resultBanda = await controllerBanda.atualizarBanda(idBanda, dadosBody, contentType)

    response.status(resultBanda.status_code)
    response.json(resultBanda)
})

///////////////////////////////////CRUD Genero/////////////////////////////////////////////////////////////////

// Import das Controller do projeto 
const controllerGenero = require('./controller/Genero/controllerGenero')

//EndPoint para inserir um genero  
app.post('/v1/controle-musicas/genero', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    // Recebe os dados do body da requisição 
    let dadosBody = request.body 

    // Chama a função da controller para inserir os dados e aguarda o retorno da função 
    let resultGenero = await controllerGenero.inserirGenero(dadosBody, contentType)

    // Resposta e status code 
    response.status(resultGenero.status_code)
    response.json(resultGenero)
})

// Endpoint para listar todos os gêneros
app.get('/v1/controle-musicas/generos', cors(), async function(request, response){

    let resultGenero = await controllerGenero.listarGenero()

    response.status(resultGenero.status_code)
    response.json(resultGenero)
})

// Endpoint para buscar genero pelo id
app.get('/v1/controle-musicas/genero/:id', cors(), async function(request, response){

    //Pegando o ID via params
    let id = request.params.id

    // Chama a função e manda o id
    let resultGenero = await controllerGenero.buscarGenero(id)

    response.status(resultGenero.status_code)
    response.json(resultGenero)
})

// Endpoint para deletar genero pelo ID
app.delete('/v1/controle-musicas/genero/:id', cors(), async function(request, response){

    let id= request.params.id

    let resultGenero = await controllerGenero.excluirGenero(id)

    response.status(resultGenero.status_code)
    response.json(resultGenero)
})

//Endpoint para atualizar genero pelo ID
app.put('/v1/controle-musicas/genero/:id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    let idGenero = request.params.id

    let dadosBody = request.body

    // Chama a função e encaminha os argumentos: ID, Body e ContentType
    let resultGenero = await controllerGenero.atualizarGenero(idGenero, dadosBody, contentType)

    response.status(resultGenero.status_code)
    response.json(resultGenero)
})

app.listen(8080, function(){
    console.log('API aguardando requisições ...')
})