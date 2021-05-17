const database = require ('../../services/database');

const baseQuery =


`SELECT 'EXCECAOCREDITO_RESPDS' TABELA, 'INSERT' OPERACAO, 
EXCECAOCREDITO_RESPDS.IDS_EXCECAOCREDITO_RESPDS ,
EXCECAOCREDITO_RESPDS.RETORNO ,
EXCECAOCREDITO_RESPDS.SYS_CREATEDATE from EXCECAOCREDITO_RESPDS INNER JOIN DADOSPROPOSTADS ON  EXCECAOCREDITO_RESPDS.IDS_EXCECAOCREDITO_RESPDS = DADOSPROPOSTADS.IDS_EXCECAOCREDITO_RESPDS  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;





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

