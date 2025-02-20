/***********************************************
 * Objetivo: Controller responsavel pela manipulação do CRUD de da dados 
 * Data: 13/02/2025
 * Autor: Beatriz Boletini
 * Versão: 1.0
 ***************************************************/
// import do arquivo de configurações de mensagens de status 
const MENSAGE = require('../../model/.config.js')

// Função para inserir uma musica
const inserirMusica =       async function(musica){
    if (musica.nome            ==       undefined    ||    musica.nome              == '' || musica.nome               == null      || musica.nome.length             > 80  ||
        musica.link            ==       undefined    ||    musica.link              == '' || musica.link               == null      || musica.link.length             > 200 ||
        musica.duracao         ==       undefined    ||    musica.duracao           == '' || musica.duracao            == null      || musica.duracao.length          > 5   ||
        musica.data_lancamento ==       undefined    ||    musica.data_lancamento   == '' || musica.data_lancamento    == null      || musica.data_lancamento.length  > 10  ||
        musica.foto_capa       ==       undefined    ||    musica.foto_capa.length  > 200 ||
        musica.letra           ==       undefined    
     ){
        return MENSAGE.ERROR_REQUIRE_FIEDLS
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
    
}
// Função para retornar uma musica pelo ID
const buscarMusica = async function(){
    
}