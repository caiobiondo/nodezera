const database = require ('../../services/database');

const baseQuery =

`SELECT 'URA_RESP_LDS' TABELA, 'INSERT' OPERACAO, 
URA_RESP_LDS.IDS_URA_RESP_LDS ,
URA_RESP_LDS.CODIGO_RETORNO ,
URA_RESP_LDS.MENSAGEM ,
URA_RESP_LDS.NOME ,
URA_RESP_LDS.SCORE ,
URA_RESP_LDS.SYS_CREATEDATE from URA_RESP_LDS  
INNER JOIN DADOSPROPOSTADS ON  URA_RESP_LDS.IDS_URA_RESP_LDS = DADOSPROPOSTADS.IDS_URA_RESP_LDS  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;


/*
`SELECT 'URA_RESP_LDS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, URA_RESP_LDS.*
 from URA_RESP_LDS , DADOSPROPOSTADS
 WHERE  URA_RESP_LDS.IDS_URA_RESP_LDS = DADOSPROPOSTADS.IDS_URA_RESP_LDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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