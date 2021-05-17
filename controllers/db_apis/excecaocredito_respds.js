const database = require ('../../services/database');

const baseQuery =


`SELECT 'EXCECAOCREDITO_RESPDS' TABELA, SYSDATE OPERACAO, 
EXCECAOCREDITO_RESPDS.IDS_EXCECAOCREDITO_RESPDS ,
EXCECAOCREDITO_RESPDS.RETORNO ,
EXCECAOCREDITO_RESPDS.SYS_CREATEDATE from EXCECAOCREDITO_RESPDS INNER JOIN DADOSPROPOSTADS ON  EXCECAOCREDITO_RESPDS.IDS_EXCECAOCREDITO_RESPDS = DADOSPROPOSTADS.IDS_EXCECAOCREDITO_RESPDS  and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA `;





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

