const database = require ('../../services/database');

const baseQuery =

`SELECT 'FRONT_REQ_LDS' TABELA, SYSDATE OPERACAO, 
FRONT_REQ_LDS.IDS_FRONT_REQ_LDS ,
FRONT_REQ_LDS.CEP ,
FRONT_REQ_LDS.DOCUMENTO ,
FRONT_REQ_LDS.DTNASC ,
FRONT_REQ_LDS.SYS_CREATEDATE ,
FRONT_REQ_LDS.USUARIO from FRONT_REQ_LDS INNER JOIN DADOSPROPOSTADS ON  FRONT_REQ_LDS.IDS_FRONT_REQ_LDS = DADOSPROPOSTADS.IDS_FRONT_REQ_LDS  and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA `;


/*
`SELECT 'FRONT_REQ_LDS' TABELA, SYSDATE OPERACAO, SYSDATE DATA_STREAM, FRONT_REQ_LDS.*
 from FRONT_REQ_LDS , DADOSPROPOSTADS 
WHERE  FRONT_REQ_LDS.IDS_FRONT_REQ_LDS = DADOSPROPOSTADS.IDS_FRONT_REQ_LDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
