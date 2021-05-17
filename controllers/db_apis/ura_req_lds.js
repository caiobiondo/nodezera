const database = require ('../../services/database');

const baseQuery =

`SELECT 'URA_REQ_LDS' TABELA, SYSDATE OPERACAO, 
URA_REQ_LDS.IDS_URA_REQ_LDS ,
URA_REQ_LDS.DOCUMENTO ,
URA_REQ_LDS.SYS_CREATEDATE ,
URA_REQ_LDS.USUARIO from URA_REQ_LDS  
INNER JOIN DADOSPROPOSTADS ON  URA_REQ_LDS.IDS_URA_REQ_LDS = DADOSPROPOSTADS.IDS_URA_REQ_LDS  and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA `;

/*
`SELECT 'URA_REQ_LDS' TABELA, SYSDATE OPERACAO, SYSDATE DATA_STREAM, URA_REQ_LDS.* 
from URA_REQ_LDS , DADOSPROPOSTADS 
WHERE  URA_REQ_LDS.IDS_URA_REQ_LDS = DADOSPROPOSTADS.IDS_URA_REQ_LDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
