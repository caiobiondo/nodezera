const database = require ('../../services/database');

const baseQuery =

`SELECT 'INTERNALCHECK_RESPDS' TABELA, 'INSERT' OPERACAO, 
INTERNALCHECK_RESPDS.IDS_INTERNALCHECK_RESPDS ,
INTERNALCHECK_RESPDS.RESPONSE_CODIGORESULTADO ,
INTERNALCHECK_RESPDS.RESPONSE_DATAPRODUTOMAISANTIGO ,
INTERNALCHECK_RESPDS.RESPONSE_DESCRICAORESULTADO ,
INTERNALCHECK_RESPDS.RESPONSE_IDADEDEBITOMAISANTIGO ,
INTERNALCHECK_RESPDS.RESPONSE_INDICAFALHASPARCIAIS ,
INTERNALCHECK_RESPDS.RESPONSE_INDICAPARCELAMENTOFAT ,
INTERNALCHECK_RESPDS.RESPONSE_QTDECONTASEMCOBRANCA ,
INTERNALCHECK_RESPDS.RESPONSE_QTDEFATURASPAGAS ,
INTERNALCHECK_RESPDS.RESPONSE_QTDEPRODUTOS ,
INTERNALCHECK_RESPDS.RESPONSE_VALORTOTALDEBITOS ,
INTERNALCHECK_RESPDS.SYS_CREATEDATE ,
INTERNALCHECK_RESPDS.RESPONSE_DATAHORAPRODUTOMAISAN from INTERNALCHECK_RESPDS  INNER JOIN DADOSPROPOSTADS ON  INTERNALCHECK_RESPDS.IDS_INTERNALCHECK_RESPDS = DADOSPROPOSTADS.IDS_INTERNALCHECK_RESPDS  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;

/*
`SELECT 'INTERNALCHECK_RESPDS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, INTERNALCHECK_RESPDS.* 
from INTERNALCHECK_RESPDS , DADOSPROPOSTADS 
WHERE  INTERNALCHECK_RESPDS.IDS_INTERNALCHECK_RESPDS = DADOSPROPOSTADS.IDS_INTERNALCHECK_RESPDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
