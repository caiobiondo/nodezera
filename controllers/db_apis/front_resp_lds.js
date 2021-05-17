const database = require ('../../services/database');

const baseQuery =


`SELECT 'FRONT_RESP_LDS' TABELA,
SYSDATE OPERACAO, SYSDATE DATA_STREAM,
FRONT_RESP_LDS.IDS_FRONT_RESP_LDS ,
FRONT_RESP_LDS.CODIGO_RETORNO ,
FRONT_RESP_LDS.COR ,
FRONT_RESP_LDS.MENSAGEM ,
FRONT_RESP_LDS.NOME ,
FRONT_RESP_LDS.SCORE ,
FRONT_RESP_LDS.SYS_CREATEDATE from FRONT_RESP_LDS INNER JOIN DADOSPROPOSTADS ON  FRONT_RESP_LDS.IDS_FRONT_RESP_LDS = DADOSPROPOSTADS.IDS_FRONT_RESP_LDS  and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA `;







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
