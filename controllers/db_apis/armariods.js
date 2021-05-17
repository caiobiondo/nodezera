const database = require ('../../services/database');

const baseQuery =

`SELECT 'ARMARIODS' TABELA, SYSDATE OPERACAO, 
TELEFONICA.ARMARIODS.IDS_ARMARIODS ,
TELEFONICA.ARMARIODS.REQUEST_CNL ,
TELEFONICA.ARMARIODS.REQUEST_CODIGO ,
TELEFONICA.ARMARIODS.RESPONSE_NOME ,
TELEFONICA.ARMARIODS.RESPONSE_STARTDATETIME ,
TELEFONICA.ARMARIODS.SYS_CREATEDATE from ARMARIODS inner join DADOSPROPOSTADS on ARMARIODS.IDS_ARMARIODS = DADOSPROPOSTADS.IDS_ARMARIODS  and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA`;




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
