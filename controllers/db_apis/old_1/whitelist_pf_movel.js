const database = require ('../../services/database');

const baseQuery =

`SELECT 'WHITELIST_PF_MOVEL' TABELA, 'INSERT' OPERACAO, 
WHITELIST_PF_MOVEL.IDS_WHITELIST_PF_MOVEL ,
WHITELIST_PF_MOVEL.COD_ARQ_PROCESSAR ,
WHITELIST_PF_MOVEL.CODIGOERRO ,
WHITELIST_PF_MOVEL.CPF ,
WHITELIST_PF_MOVEL.DATA_WL ,
WHITELIST_PF_MOVEL.DESCRICAOERRO ,
WHITELIST_PF_MOVEL.MOTIVO ,
WHITELIST_PF_MOVEL.PLANO ,
WHITELIST_PF_MOVEL.SYS_CREATEDATE ,
WHITELIST_PF_MOVEL.NOMECLIENTE from WHITELIST_PF_MOVEL  INNER JOIN DADOSPROPOSTADS ON  WHITELIST_PF_MOVEL.IDS_WHITELIST_PF_MOVEL = DADOSPROPOSTADS.IDS_WHITELIST_PF_MOVEL  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;

/*
`SELECT 'WHITELIST_PF_MOVEL' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, WHITELIST_PF_MOVEL.* 
from WHITELIST_PF_MOVEL , DADOSPROPOSTADS 
WHERE  WHITELIST_PF_MOVEL.IDS_WHITELIST_PF_MOVEL = DADOSPROPOSTADS.IDS_WHITELIST_PF_MOVEL and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
