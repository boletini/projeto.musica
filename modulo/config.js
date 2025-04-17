/******************************
 * Objetivo: Arquivo de configuração do projeto, onde teremos mensagens padronizadas, variaveis
 * Data: 13/02/2025
 * Autor:Beatriz Boletini
 * Versão: 1.0
 ********************************************/

/********************************MENSAGENS DE STATUS CODE PARA API************************************************
/********************************MENSAGENS DE ERRO*****************************************************************/

const ERROR_REQUIRE_FIEDLS = { status: false, status_code: 400, message: 'Existem campos com preenchimento obrigatorio que não foram encaminhados'}
const ERROR_INTERNAL_SEVER_MODEL = {status: false, status_code: 500, message: 'deivo a um erro interno no servidor de modelagem de dados, não foi possivel processar a requisição'}
const ERROR_INTERNAL_SEVER_CONTROLLER = {status: false, status_code: 500, message: 'devido a um erro interno no servidor, não foi possivel processar a requisição'}
const ERROR_CONTENT_TYPE = {status: false,status_code: 415, menssage:'Não foi possivel pois o tipo de dado encaminhado não foi aceito na API. Você deve encaminhar apenas JSON'}
const ERROR_NOT_FOUND = {status: false,status_code: 404, menssage:'Não foram encontrados itens para retorno'}
/********************************** MENSAGENS DE SUCESSO ********************************************************** */

const SUCESS_CREATED_ITEM = {status: true, status_code: 201, massage:'Item criado com sucesso'}
const SUCESS_DELETED_ITEM = {status: true, status_code: 200, massage:'Item excluido com sucesso'}
const SUCESS_UPDATE_ITEM = {status: true, status_code: 200, massage:'Item atulizado com sucesso'}

module.exports = {
    ERROR_REQUIRE_FIEDLS,
    ERROR_INTERNAL_SEVER_MODEL,
    ERROR_INTERNAL_SEVER_CONTROLLER,
    ERROR_NOT_FOUND, 
    SUCESS_CREATED_ITEM,
    ERROR_CONTENT_TYPE,
    SUCESS_DELETED_ITEM,
    SUCESS_UPDATE_ITEM 
}
    