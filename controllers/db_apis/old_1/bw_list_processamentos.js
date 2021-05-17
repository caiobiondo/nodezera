const database = require ('../../services/database');

const baseQuery =

`SELECT 'BW_LIST_PROCESSAMENTOS' TABELA, 'INSERT' OPERACAO, 
BW_LIST_PROCESSAMENTOS.IDS_BW_LIST_PROCESSAMENTOS ,
BW_LIST_PROCESSAMENTOS.ARRIDX_DADOSPROPOSTADS ,
BW_LIST_PROCESSAMENTOS.CD_PROCESSAMENTO ,
BW_LIST_PROCESSAMENTOS.DAT_FIM_PROCESSAMENTO ,
BW_LIST_PROCESSAMENTOS.DAT_INI_PROCESSAMENTO ,
BW_LIST_PROCESSAMENTOS.QTD_ARQS_PROCESSADOS ,
BW_LIST_PROCESSAMENTOS.SYS_CREATEDATE ,
BW_LIST_PROCESSAMENTOS.IDS_DADOSPROPOSTADS from BW_LIST_PROCESSAMENTOS `;


/*
`SELECT 'BW_LIST_PROCESSAMENTOS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, BW_LIST_PROCESSAMENTOS.* 
from BW_LIST_PROCESSAMENTOS , DADOSPROPOSTADS 
WHERE  BW_LIST_PROCESSAMENTOS.IDS_DADOSPROPOSTADS = DADOSPROPOSTADS.IDS_DADOSPROPOSTADS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
