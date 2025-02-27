/***********************************************
 * Objetivo: Controller responsavel pela manipulação do CRUD de da dados 
 * Data: 13/02/2025
 * Autor: Beatriz Boletini
 * Versão: 1.0
 ***************************************************/
// import do arquivo de configurações de mensagens de status 
const MENSAGE = require('../../modulo/config.js')

const musicaDAO = require('../../model/DAO/musica.js')
//Importar do arquivo DAO musica para manipular o

// Função para inserir uma musica para manipular o Bd
const inserirMusica = async function(musica, contentType){
    console.log(musica)
    try {
        
        if (String(contentType).toLowerCase() == 'application/json'){   
    
        if (musica.nome            ==       undefined    ||    musica.nome              == '' || musica.nome               == null      || musica.nome.length             > 80  ||
            musica.link            ==       undefined    ||    musica.link              == '' || musica.link               == null      || musica.link.length             > 200 ||
            musica.duracao         ==       undefined    ||    musica.duracao           == '' || musica.duracao            == null      || musica.duracao.length          > 5   ||
            musica.data_lancamento ==       undefined    ||    musica.data_lancamento   == '' || musica.data_lancamento    == null      || musica.data_lancamento.length  > 10  ||
            musica.foto_capa       ==       undefined    ||    musica.foto_capa.length  > 200 ||
            musica.letra           ==       undefined    
        ){
            return MENSAGE.ERROR_REQUIRE_FIEDLS
        }else{
            let resultMusica = await musicaDAO.insertMusica(musica)

            if(resultMusica)
                return MENSAGE.SUCESS_CREATED_ITEM//201
            else 
                return MENSAGE.ERROR_INTERNAL_SEVER_MODEL//500
            }
        }else{
            return MENSAGE.ERROR_CONTENT //415
        }
        
    } catch (error) {
        return MENSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
        
    }
}
// Função para atualizar uma musica
const atualizarMusica = async function(){
    
}
// Função para excluir uma musica   
const excluirMusica = async function(){
    
}
// Função para retornar todas as musica
const listarMusica = async function(){
   try{
    let dadosMusicas = {}
    //Chamar a função que retorna todas as musica
    let resultMusica = await musicaDAO.selectAllMusica()

    if(resultMusica != false || typeof(resultMusica) == 'object'){

  

        if(resultMusica.length > 0){
            //Criando um objeto JSON para retornar a lista de musicas
            dadosMusicas.status = true
            dadosMusicas.status_code = 200
            dadosMusicas.item = resultMusica.length
            dadosMusicas.musics = resultMusica

            return dadosMusicas //200
        }else{
            return  MENSAGE.ERROR_NOT_FOUND  //404
        }
    }else{
        return MENSAGE.ERROR_INTERNAL_SEVER_MODEL//500
    }
   } catch(erro){
    console.log(erro)
    return MENSAGE.ERROR_INTERNAL_SEVER_CONTROLLER

   }
}
// Função para retornar uma musica pelo ID
const buscarMusica = async function(){
    
}
module.exports = {
    inserirMusica,
    atualizarMusica,
    excluirMusica,
    listarMusica,
    buscarMusica
}