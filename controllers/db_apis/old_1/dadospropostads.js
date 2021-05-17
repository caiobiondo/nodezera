const database = require ('../../services/database');

const baseQuery =

`SELECT 'DADOSPROPOSTADS' TABELA, 'INSERT' OPERACAO,
DADOSPROPOSTADS.IDS_DADOSPROPOSTADS ,
DADOSPROPOSTADS.ANALISEINTERNA_DECISAO ,
DADOSPROPOSTADS.ANALISEINTERNA_MOTIVODECISAO ,
DADOSPROPOSTADS.ANALISEINTERNA_OBSERVACAO ,
DADOSPROPOSTADS.ANALISEINTERNA_SCORE ,
DADOSPROPOSTADS.ANALISEINTERNA_SCOREAMDOCS ,
DADOSPROPOSTADS.ANALISEMANUAL_DECISAO ,
DADOSPROPOSTADS.ANALISEMANUAL_MOTIVODECISAO ,
DADOSPROPOSTADS.ANALISEMANUAL_OBSERVACAO ,
DADOSPROPOSTADS.ANALISEMANUAL_SCORE ,
DADOSPROPOSTADS.ANALISEMANUAL_SCOREAMDOCS ,
DADOSPROPOSTADS.CNPJ ,
DADOSPROPOSTADS.CPF ,
DADOSPROPOSTADS.DATAATUALIZACAO ,
DADOSPROPOSTADS.DATAPROPOSTA ,
DADOSPROPOSTADS.DECISAOFINAL_DECISAO ,
DADOSPROPOSTADS.DECISAOFINAL_MOTIVODECISAO ,
DADOSPROPOSTADS.DECISAOFINAL_OBSERVACAO ,
DADOSPROPOSTADS.DECISAOFINAL_SCORE ,
DADOSPROPOSTADS.DECISAOFINAL_SCOREAMDOCS ,
DADOSPROPOSTADS.FLUXOATUAL ,
DADOSPROPOSTADS.IDGEDOC ,
DADOSPROPOSTADS.NUMPROPOSTA ,
DADOSPROPOSTADS.ORIGEM ,
DADOSPROPOSTADS.STATUSPROPOSTA ,
DADOSPROPOSTADS.SYS_CREATEDATE ,
DADOSPROPOSTADS.WORKLIST ,
DADOSPROPOSTADS.IDS_ANALISECREDITO_REQDS ,
DADOSPROPOSTADS.IDS_ANALISECREDITO_RESPDS ,
DADOSPROPOSTADS.IDS_ATLYS_REQ_LDS ,
DADOSPROPOSTADS.IDS_ATLYS_RESP_LDS ,
DADOSPROPOSTADS.IDS_AUDITORIA ,
DADOSPROPOSTADS.IDS_AUDITORIAPOLITICA ,
DADOSPROPOSTADS.IDS_BASECEPVIVODS ,
DADOSPROPOSTADS.IDS_BLACKLIST_PF_MOVEL ,
DADOSPROPOSTADS.IDS_BLACKLIST_PJ_MOVEL ,
DADOSPROPOSTADS.IDS_BLACKLIST_PF_FIXO ,
DADOSPROPOSTADS.IDS_BLACKLIST_PJ_FIXO ,
DADOSPROPOSTADS.IDS_BVS_PF ,
DADOSPROPOSTADS.IDS_CALLCENTER_REQ_LDS ,
DADOSPROPOSTADS.IDS_CALLCENTER_RESP_LDS ,
DADOSPROPOSTADS.IDS_CONSULTACANAL_REQ_LDS ,
DADOSPROPOSTADS.IDS_CONSULTACANAL_RESP_LDS ,
DADOSPROPOSTADS.IDS_CONSULTACREDITO_REQ ,
DADOSPROPOSTADS.IDS_CONSULTACREDITO_RESP ,
DADOSPROPOSTADS.IDS_CONSULTAFRAUDE_REQ_LDS ,
DADOSPROPOSTADS.IDS_CONSULTAFRAUDE_RESP_LDS ,
DADOSPROPOSTADS.IDS_CONTROLE ,
DADOSPROPOSTADS.IDS_EXCECAOCREDITO_REQDS ,
DADOSPROPOSTADS.IDS_EXCECAOCREDITO_RESPDS ,
DADOSPROPOSTADS.IDS_FRONT_REQ_LDS ,
DADOSPROPOSTADS.IDS_FRONT_RESP_LDS ,
DADOSPROPOSTADS.IDS_INTERMEDIARIASDA ,
DADOSPROPOSTADS.IDS_INTERNALCHECK_RESPDS ,
DADOSPROPOSTADS.IDS_PARAMETROS ,
DADOSPROPOSTADS.IDS_RELATO ,
DADOSPROPOSTADS.IDS_REQUESTBASECEPVIVODS ,
DADOSPROPOSTADS.IDS_SERA11_PF ,
DADOSPROPOSTADS.IDS_SERASAB49PF ,
DADOSPROPOSTADS.IDS_URA_REQ_LDS ,
DADOSPROPOSTADS.IDS_URA_RESP_LDS ,
DADOSPROPOSTADS.IDS_WHITELIST_PF_FIXO ,
DADOSPROPOSTADS.IDS_WHITELIST_PF_MOVEL ,
DADOSPROPOSTADS.IDS_WHITELIST_PF ,
DADOSPROPOSTADS.IDS_WHITELIST_PJ_MOVEL ,
DADOSPROPOSTADS.IDS_CONSULTASIEBELREQ ,
DADOSPROPOSTADS.IDS_CONSULTASIEBELRESP ,
DADOSPROPOSTADS.IDS_RELATOXML_REQDS ,
DADOSPROPOSTADS.IDS_WHITELIST_PJ_FIXO ,
DADOSPROPOSTADS.IDS_RELATO2 ,
DADOSPROPOSTADS.IDS_RELATO3 ,
DADOSPROPOSTADS.ANALISEINTERNA_MAXIMOPRODUTOS ,
DADOSPROPOSTADS.ANALISEMANUAL_MAXIMOPRODUTOS ,
DADOSPROPOSTADS.DECISAOFINAL_MAXIMOPRODUTOS ,
DADOSPROPOSTADS.HORAPROPOSTA ,
DADOSPROPOSTADS.IDS_BVSPF ,
DADOSPROPOSTADS.IDS_BVSPF3 ,
DADOSPROPOSTADS.IDS_BVSPJ ,
DADOSPROPOSTADS.IDS_BVSPJ2 ,
DADOSPROPOSTADS.SCOREFRAUDE ,
DADOSPROPOSTADS.ANALISEANTERIOR_DECISAO ,
DADOSPROPOSTADS.ANALISEANTERIOR_MAXIMOPRODUTOS ,
DADOSPROPOSTADS.ANALISEANTERIOR_MOTIVODECISAO ,
DADOSPROPOSTADS.ANALISEANTERIOR_OBSERVACAO ,
DADOSPROPOSTADS.ANALISEANTERIOR_SCORE ,
DADOSPROPOSTADS.ANALISEANTERIOR_SCOREAMDOCS ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_1_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_10_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_11_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_12_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_13_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_14_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_15_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_16_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_17_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_18_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_19_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_2_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_20_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_3_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_4_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_5_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_6_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_7_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_8_ ,
DADOSPROPOSTADS.DECISAO_DESC_MOTIVODECISAO_9_ ,
DADOSPROPOSTADS.DECISAO_LIMITEPOTENCIAL ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_1_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_10_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_11_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_12_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_13_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_14_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_15_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_16_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_17_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_18_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_19_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_2_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_20_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_3_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_4_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_5_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_6_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_7_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_8_ ,
DADOSPROPOSTADS.DECISAO_MOTIVODECISAO_9_ ,
DADOSPROPOSTADS.DECISAO_SALDODISPONIVEL ,
DADOSPROPOSTADS.DECISAO_VALORCONSUMIDO ,
DADOSPROPOSTADS.DECISAO_FATORLIMITE ,
DADOSPROPOSTADS.DECISAO_PERCCOMPRENDA ,
DADOSPROPOSTADS.HOSTNAME ,
DADOSPROPOSTADS.DECISAO_SCOREBEHAVIOUR ,
DADOSPROPOSTADS.DECISAO_VALORCONSUMIDOCRM ,
DADOSPROPOSTADS.DECISAO_VALORCONSUMIDOLEGADOS ,
DADOSPROPOSTADS.IDS_UPDATENC_REQDS ,
DADOSPROPOSTADS.IDS_UPDATENC_RESPDS ,
DADOSPROPOSTADS.DECISAO_FATORLIMITECNAE ,
DADOSPROPOSTADS.DECISAO_FATORLIMITENATJURIDICA ,
DADOSPROPOSTADS.DATAHORA ,
DADOSPROPOSTADS.OVERRRIDE_DATA ,
DADOSPROPOSTADS.OVERRRIDE_DATAULTCONSULTABUREA ,
DADOSPROPOSTADS.OVERRRIDE_DECISAO ,
DADOSPROPOSTADS.OVERRRIDE_REASONCODE ,
DADOSPROPOSTADS.ULTDECISAO_DATA ,
DADOSPROPOSTADS.ULTDECISAO_DATAULTCONSULTABURE ,
DADOSPROPOSTADS.ULTDECISAO_DECISAO ,
DADOSPROPOSTADS.ULTDECISAO_REASONCODE ,
DADOSPROPOSTADS.IDS_ARMARIODS ,
DADOSPROPOSTADS.IDS_GETDEBTSINF_REQ ,
DADOSPROPOSTADS.IDS_HP_FS_DS ,
DADOSPROPOSTADS.DOCUMENTOPARCEIRO ,
DADOSPROPOSTADS.MODSCOREFRAUDE ,
DADOSPROPOSTADS.QUOTATION_IDMSA ,
DADOSPROPOSTADS.QUOTATION_IDSSA ,
DADOSPROPOSTADS.QUOTATION_ISDESCENTRALIZADO ,
DADOSPROPOSTADS.QUOTATION_ISMULTIFILIAIS ,
DADOSPROPOSTADS.QUOTATION_MAINDOCUMENTNUMBER ,
DADOSPROPOSTADS.RAZAOSOCIALPARCEIRO ,
DADOSPROPOSTADS.IDS_GETDEBTSINFORMATIONS_REQDS from DADOSPROPOSTADS `;

/*
`SELECT 'DADOSPROPOSTADS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, NUMPROPOSTA, IDS_DADOSPROPOSTADS 
 from DADOSPROPOSTADS `; 
//WHERE  DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
**/

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.IDS_DADOSPROPOSTADS = context.id;

    query += `\nwhere IDS_DADOSPROPOSTADS = :IDS_DADOSPROPOSTADS`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
