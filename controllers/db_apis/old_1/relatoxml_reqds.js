const database = require ('../../services/database');

const baseQuery =

`SELECT 'RELATOXML_REQDS' TABELA, 'INSERT' OPERACAO, 
RELATOXML_REQDS.IDS_RELATOXML_REQDS ,
RELATOXML_REQDS.REQUEST_CNPJ_BASE ,
RELATOXML_REQDS.REQUEST_CNPJ_FILIAL ,
RELATOXML_REQDS.REQUEST_CNPJ_INDEX_SEGMENTO ,
RELATOXML_REQDS.REQUEST_CREDENCIAL_LOGIN ,
RELATOXML_REQDS.REQUEST_CREDENCIAL_PASSWORD ,
RELATOXML_REQDS.REQUEST_CREDENCIAL_SERVICE ,
RELATOXML_REQDS.REQUEST_FEATURES_ALERTSCORING ,
RELATOXML_REQDS.REQUEST_FEATURES_ANOTACOESSPC ,
RELATOXML_REQDS.REQUEST_FEATURES_COLLECTIONSCO ,
RELATOXML_REQDS.REQUEST_FEATURES_CREDITRISKSCO ,
RELATOXML_REQDS.REQUEST_FEATURES_FATURAMENTOPR ,
RELATOXML_REQDS.REQUEST_FEATURES_IRM ,
RELATOXML_REQDS.REQUEST_FEATURES_LIMITECREDITO ,
RELATOXML_REQDS.REQUEST_FEATURES_MODELOFATURAM ,
RELATOXML_REQDS.REQUEST_FEATURES_MODELORISKSCO ,
RELATOXML_REQDS.REQUEST_FEATURES_PARTICIPANTES ,
RELATOXML_REQDS.REQUEST_FEATURES_QUADROSOCI001 ,
RELATOXML_REQDS.REQUEST_FEATURES_QUADROSOCI002 ,
RELATOXML_REQDS.REQUEST_FEATURES_REGISTROCONSU ,
RELATOXML_REQDS.REQUEST_FEATURES_RISCOCREDITOS ,
RELATOXML_REQDS.REQUEST_SEGMENTOCONSOLIDADO001 ,
RELATOXML_REQDS.REQUEST_SEGMENTOCONSOLIDADO002 ,
RELATOXML_REQDS.REQUEST_SEGMENTOCONSOLIDADO003 ,
RELATOXML_REQDS.REQUEST_SEGMENTOCONSOLIDADO004 ,
RELATOXML_REQDS.REQUEST_SEGMENTOCONSOLIDADO005 ,
RELATOXML_REQDS.SYS_CREATEDATE from RELATOXML_REQDS  INNER JOIN DADOSPROPOSTADS ON  RELATOXML_REQDS.IDS_RELATOXML_REQDS = DADOSPROPOSTADS.IDS_RELATOXML_REQDS  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;

/*
`SELECT 'RELATOXML_REQDS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, RELATOXML_REQDS.* 
from RELATOXML_REQDS , DADOSPROPOSTADS 
WHERE  RELATOXML_REQDS.IDS_RELATOXML_REQDS = DADOSPROPOSTADS.IDS_RELATOXML_REQDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
