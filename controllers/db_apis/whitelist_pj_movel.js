const database = require ('../../services/database');

const baseQuery =

`SELECT 'WHITELIST_PJ_MOVEL' TABELA, SYSDATE OPERACAO, 
WHITELIST_PJ_MOVEL.IDS_WHITELIST_PJ_MOVEL ,
WHITELIST_PJ_MOVEL.CNPJ ,
WHITELIST_PJ_MOVEL.COD_ARQ_PROCESSAR ,
WHITELIST_PJ_MOVEL.CODIGOERRO ,
WHITELIST_PJ_MOVEL.DATA_BLK ,
WHITELIST_PJ_MOVEL.DESCRICAOERRO ,
WHITELIST_PJ_MOVEL.MOTIVO ,
WHITELIST_PJ_MOVEL.PLANO ,
WHITELIST_PJ_MOVEL.SYS_CREATEDATE ,
WHITELIST_PJ_MOVEL.NOMECLIENTE from WHITELIST_PJ_MOVEL  INNER JOIN DADOSPROPOSTADS ON  WHITELIST_PJ_MOVEL.IDS_WHITELIST_PJ_MOVEL = DADOSPROPOSTADS.IDS_WHITELIST_PJ_MOVEL  and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA `;





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
