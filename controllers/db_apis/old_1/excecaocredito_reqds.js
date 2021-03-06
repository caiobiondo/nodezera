const database = require ('../../services/database');

const baseQuery =

`SELECT 'EXCECAOCREDITO_REQDS' TABELA, 'INSERT' OPERACAO, 
EXCECAOCREDITO_REQDS.IDS_EXCECAOCREDITO_REQDS ,
EXCECAOCREDITO_REQDS.DESCRICAO ,
EXCECAOCREDITO_REQDS.DOCUMENTO ,
EXCECAOCREDITO_REQDS.NUMEROCASO ,
EXCECAOCREDITO_REQDS.SYS_CREATEDATE ,
EXCECAOCREDITO_REQDS.TIPODOCUMENTO from EXCECAOCREDITO_REQDS INNER JOIN DADOSPROPOSTADS ON EXCECAOCREDITO_REQDS.IDS_EXCECAOCREDITO_REQDS = DADOSPROPOSTADS.IDS_EXCECAOCREDITO_REQDS `;


/*
`SELECT 'EXCECAOCREDITO_RESPDS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, EXCECAOCREDITO_RESPDS.* 
from EXCECAOCREDITO_RESPDS , DADOSPROPOSTADS 
WHERE  EXCECAOCREDITO_RESPDS.IDS_EXCECAOCREDITO_RESPDS = DADOSPROPOSTADS.IDS_EXCECAOCREDITO_RESPDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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

