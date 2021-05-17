const database = require ('../../services/database');

const baseQuery =

`SELECT 'ARMARIODS' TABELA, 'INSERT' OPERACAO, 
TELEFONICA.ARMARIODS.IDS_ARMARIODS ,
TELEFONICA.ARMARIODS.REQUEST_CNL ,
TELEFONICA.ARMARIODS.REQUEST_CODIGO ,
TELEFONICA.ARMARIODS.RESPONSE_NOME ,
TELEFONICA.ARMARIODS.RESPONSE_STARTDATETIME ,
TELEFONICA.ARMARIODS.SYS_CREATEDATE from ARMARIODS inner join DADOSPROPOSTADS on ARMARIODS.IDS_ARMARIODS = DADOSPROPOSTADS.IDS_ARMARIODS  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS`;




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
