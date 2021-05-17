const database = require ('../../services/database');

const baseQuery =

`SELECT 'CONSULTAFRAUDE_RESP_LDS' TABELA, 'INSERT' OPERACAO, 
CONSULTAFRAUDE_RESP_LDS.IDS_CONSULTAFRAUDE_RESP_LDS ,
CONSULTAFRAUDE_RESP_LDS.CODIGO ,
CONSULTAFRAUDE_RESP_LDS.CODIGOPLANO ,
CONSULTAFRAUDE_RESP_LDS.COR ,
CONSULTAFRAUDE_RESP_LDS.DATAHORA ,
CONSULTAFRAUDE_RESP_LDS.NOMECLIENTE ,
CONSULTAFRAUDE_RESP_LDS.NOMEMAE ,
CONSULTAFRAUDE_RESP_LDS.RECOMENDACAO ,
CONSULTAFRAUDE_RESP_LDS.RESTRITIVO ,
CONSULTAFRAUDE_RESP_LDS.SCORE ,
CONSULTAFRAUDE_RESP_LDS.SITUACAO_CPF ,
CONSULTAFRAUDE_RESP_LDS.STATUS ,
CONSULTAFRAUDE_RESP_LDS.SYS_CREATEDATE from CONSULTAFRAUDE_RESP_LDS INNER JOIN DADOSPROPOSTADS ON  CONSULTAFRAUDE_RESP_LDS.IDS_CONSULTAFRAUDE_RESP_LDS = DADOSPROPOSTADS.IDS_CONSULTAFRAUDE_RESP_LDS  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;





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