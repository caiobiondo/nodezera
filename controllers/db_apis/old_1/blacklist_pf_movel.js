const database = require ('../../services/database');

const baseQuery =

`SELECT 'BLACKLIST_PF_MOVEL' TABELA, 'INSERT' OPERACAO, 
TELEFONICA.BLACKLIST_PF_MOVEL.IDS_BLACKLIST_PF_MOVEL ,
TELEFONICA.BLACKLIST_PF_MOVEL.COD_ARQ_PROCESSAR ,
TELEFONICA.BLACKLIST_PF_MOVEL.CODIGOERRO ,
TELEFONICA.BLACKLIST_PF_MOVEL.CPF ,
TELEFONICA.BLACKLIST_PF_MOVEL.DATA_BLK ,
TELEFONICA.BLACKLIST_PF_MOVEL.DESCRICAOERRO ,
TELEFONICA.BLACKLIST_PF_MOVEL.HORA ,
TELEFONICA.BLACKLIST_PF_MOVEL.MOTIVO ,
TELEFONICA.BLACKLIST_PF_MOVEL.PLANO ,
TELEFONICA.BLACKLIST_PF_MOVEL.SYS_CREATEDATE ,
TELEFONICA.BLACKLIST_PF_MOVEL.UF ,
TELEFONICA.BLACKLIST_PF_MOVEL.AGING ,
TELEFONICA.BLACKLIST_PF_MOVEL.SALDO ,
TELEFONICA.BLACKLIST_PF_MOVEL.OFERTA from BLACKLIST_PF_MOVEL INNER JOIN DADOSPROPOSTADS ON  BLACKLIST_PF_MOVEL.IDS_BLACKLIST_PF_MOVEL = DADOSPROPOSTADS.IDS_BLACKLIST_PF_MOVEL  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;

/**
`SELECT 'BLACKLIST_PF_MOVEL' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, BLACKLIST_PF_MOVEL.* 
from BLACKLIST_PF_MOVEL , DADOSPROPOSTADS 
WHERE  BLACKLIST_PF_MOVEL.IDS_BLACKLIST_PF_MOVEL = DADOSPROPOSTADS.IDS_BLACKLIST_PF_MOVEL and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
*/


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
