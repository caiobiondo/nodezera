const database = require ('../../services/database');

const baseQuery =

`SELECT 'URA_REQ_LDS' TABELA, 'INSERT' OPERACAO, 
URA_REQ_LDS.IDS_URA_REQ_LDS ,
URA_REQ_LDS.DOCUMENTO ,
URA_REQ_LDS.SYS_CREATEDATE ,
URA_REQ_LDS.USUARIO from URA_REQ_LDS  
INNER JOIN DADOSPROPOSTADS ON  URA_REQ_LDS.IDS_URA_REQ_LDS = DADOSPROPOSTADS.IDS_URA_REQ_LDS  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;

/*
`SELECT 'URA_REQ_LDS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, URA_REQ_LDS.* 
from URA_REQ_LDS , DADOSPROPOSTADS 
WHERE  URA_REQ_LDS.IDS_URA_REQ_LDS = DADOSPROPOSTADS.IDS_URA_REQ_LDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
