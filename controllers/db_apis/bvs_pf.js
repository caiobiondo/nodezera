const database = require ('../../services/database');

const baseQuery =

`SELECT 'BVS_PF' TABELA, SYSDATE OPERACAO, 
BVS_PF.IDS_BVS_PF ,
BVS_PF.CODIGOERRO ,
BVS_PF.DESCRICAOERRO ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT001 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT002 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT003 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT004 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT005 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT006 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT007 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT008 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT009 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT010 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT011 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT012 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT013 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT014 ,
BVS_PF.INFOCREDITO_DETALHE_CONSULT015 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS001 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS002 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS003 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS004 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS005 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS006 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS007 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS008 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS009 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS010 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS011 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS012 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS013 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS014 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS015 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS016 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS017 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS018 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS019 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS020 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS021 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS022 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS023 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS024 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS025 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS026 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS027 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS028 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS029 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS030 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS031 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS032 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS033 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS034 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS035 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS036 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS037 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS038 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS039 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS040 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS041 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS042 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS043 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS044 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS045 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS046 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS047 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS048 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS049 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS050 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS051 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS052 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS053 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS054 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS055 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS056 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS057 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS058 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS059 ,
BVS_PF.INFOCREDITO_DETALHE_DEBITOS060 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO001 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO002 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO003 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO004 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO005 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO006 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO007 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO008 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO009 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO010 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO011 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO012 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO013 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO014 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO015 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO016 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO017 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO018 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO019 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO020 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO021 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO022 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO023 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO024 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO025 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO026 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO027 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO028 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO029 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO030 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO031 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO032 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO033 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO034 ,
BVS_PF.INFOCREDITO_DETALHES_TITULO035 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO001 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO002 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO003 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO004 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO005 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO006 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO007 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO008 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO009 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO010 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO011 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO012 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO013 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO014 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO015 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO016 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO017 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO018 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO019 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO020 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO021 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO022 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO023 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO024 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO025 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO026 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO027 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO028 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO029 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO030 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO031 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO032 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO033 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO034 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO035 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO036 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO037 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO038 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO039 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO040 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO041 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO042 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO043 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO044 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO045 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO046 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO047 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO048 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO049 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO050 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO051 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO052 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO053 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO054 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO055 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO056 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO057 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO058 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO059 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO060 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO061 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO062 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO063 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO064 ,
BVS_PF.INFOCREDITO_DEVOLUCOES_INFO065 ,
BVS_PF.INFOCREDITO_ERRO_MENSAGEM ,
BVS_PF.INFOCREDITO_RESUMO_CONSULTA001 ,
BVS_PF.INFOCREDITO_RESUMO_CONSULTA002 ,
BVS_PF.INFOCREDITO_RESUMO_CONSULTA003 ,
BVS_PF.INFOCREDITO_RESUMO_TITULOS_001 ,
BVS_PF.INFOCREDITO_RESUMO_TITULOS_002 ,
BVS_PF.INFOCREDITO_RESUMO_TITULOS_003 ,
BVS_PF.INFOCREDITO_RESUMO_TITULOS_004 ,
BVS_PF.INFOCREDITO_RESUMO_TITULOS_005 ,
BVS_PF.INFOCREDITO_TOTAL_CHEQUES_D001 ,
BVS_PF.INFOCREDITO_TOTAL_CHEQUES_D002 ,
BVS_PF.INFOCREDITO_TOTAL_CHEQUES_D003 ,
BVS_PF.INFOCREDITO_TOTAL_CHEQUES_D004 ,
BVS_PF.INFOCREDITO_TOTAL_CHEQUES_D005 ,
BVS_PF.INFOCREDITO_TOTAL_REGISTROS001 ,
BVS_PF.INFOCREDITO_TOTAL_REGISTROS002 ,
BVS_PF.INFOCREDITO_TOTAL_REGISTROS003 ,
BVS_PF.INFOCREDITO_TOTAL_REGISTROS004 ,
BVS_PF.INFOCREDITO_TOTAL_REGISTROS005 ,
BVS_PF.SINTESE_CONDICAO ,
BVS_PF.SINTESE_CPF ,
BVS_PF.SINTESE_DATA_CONSULTA ,
BVS_PF.SINTESE_DATA_NASCIMENTO ,
BVS_PF.SINTESE_HORA_CONSULTA ,
BVS_PF.SINTESE_NOME ,
BVS_PF.SINTESE_NOME_MAE ,
BVS_PF.SINTESE_PROTOCOLO ,
BVS_PF.SINTESE_TITULO_ELEITOR ,
BVS_PF.SYS_CREATEDATE ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO001 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO002 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO003 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO004 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO005 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO006 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO007 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO008 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO009 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO010 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO011 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO012 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO013 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO014 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO015 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO016 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO017 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO018 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO019 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO020 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO021 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO022 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO023 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO024 ,
BVS_PF.TELEFONES_CONSULTAS_ANTERIO025 ,
BVS_PF.TELEFONES_MAIS_TELEFONES_CO001 ,
BVS_PF.TELEFONES_MAIS_TELEFONES_CO002 ,
BVS_PF.TELEFONES_MAIS_TELEFONES_CO003 ,
BVS_PF.TELEFONES_MAIS_TELEFONES_CO004 ,
BVS_PF.TELEFONES_MAIS_TELEFONES_CO005 ,
BVS_PF.TELEFONES_NADA_CONSTA_CPF_I001 ,
BVS_PF.TELEFONES_NADA_CONSTA_CPF_I002 ,
BVS_PF.TELEFONES_NADA_CONSTA_CPF_I003 from BVS_PF INNER JOIN DADOSPROPOSTADS ON  BVS_PF.IDS_BVS_PF = DADOSPROPOSTADS.IDS_BVS_PF  and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA`;

/*
`SELECT 'BVS_PF' TABELA, SYSDATE OPERACAO, SYSDATE DATA_STREAM, BVS_PF.* 
from BVS_PF , DADOSPROPOSTADS 
WHERE  BVS_PF.IDS_BVS_PF = DADOSPROPOSTADS.IDS_BVS_PF and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
**/

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.NUMPROPOSTA = context.id;

    query += `\nwhere NUMPROPOSTA = :NUMPROPOSTA`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
