const database = require ('../../services/database');

const baseQuery =

`SELECT 'BW_LIST_ARQUIVOS' TABELA,
SYSDATE OPERACAO,
BW_LIST_ARQUIVOS.IDS_BW_LIST_ARQUIVOS ,
BW_LIST_ARQUIVOS.ARRIDX_DADOSPROPOSTADS ,
BW_LIST_ARQUIVOS.DSC_LOG ,
BW_LIST_ARQUIVOS.DT_LOG ,
BW_LIST_ARQUIVOS.SYS_CREATEDATE ,
BW_LIST_ARQUIVOS.IDS_DADOSPROPOSTADS from
BW_LIST_ARQUIVOS `;



/*
`SELECT 'BW_LIST_ARQUIVOS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, BW_LIST_ARQUIVOS.* 
from BW_LIST_ARQUIVOS , DADOSPROPOSTADS 
WHERE  BW_LIST_ARQUIVOS.IDS_DADOSPROPOSTADS = DADOSPROPOSTADS.IDS_DADOSPROPOSTADS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
