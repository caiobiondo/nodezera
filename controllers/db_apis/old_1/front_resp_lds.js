const database = require ('../../services/database');

const baseQuery =

`SELECT 'FRONT_RESP_LDS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, FRONT_RESP_LDS.* 
from FRONT_RESP_LDS , DADOSPROPOSTADS
 WHERE  FRONT_RESP_LDS.IDS_FRONT_RESP_LDS = DADOSPROPOSTADS.IDS_FRONT_RESP_LDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.client_id = context.id;

    query += `\nwhere client_id = :client_id`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
