const database = require ('../../services/database');

const baseQuery =

`SELECT 'CONSULTACREDITO_RESP' TABELA, SYSDATE OPERACAO, 
CONSULTACREDITO_RESP.IDS_CONSULTACREDITO_RESP ,
CONSULTACREDITO_RESP.CODIGO ,
CONSULTACREDITO_RESP.CODIGOPLANO ,
CONSULTACREDITO_RESP.COR ,
CONSULTACREDITO_RESP.DATAHORA ,
CONSULTACREDITO_RESP.NOMECLIENTE ,
CONSULTACREDITO_RESP.NOMEMAE ,
CONSULTACREDITO_RESP.QTDE_PROTESTOS_ATE_DATA ,
CONSULTACREDITO_RESP.RECOMENDACAO ,
CONSULTACREDITO_RESP.RESTRITIVO ,
CONSULTACREDITO_RESP.SCORE ,
CONSULTACREDITO_RESP.STATUS ,
CONSULTACREDITO_RESP.SYS_CREATEDATE from CONSULTACREDITO_RESP INNER JOIN DADOSPROPOSTADS ON  CONSULTACREDITO_RESP.IDS_CONSULTACREDITO_RESP = DADOSPROPOSTADS.IDS_CONSULTACREDITO_RESP and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA`;


/*
`SELECT 'CONSULTAFRAUDE_REQ_LDS' TABELA, SYSDATE OPERACAO, SYSDATE DATA_STREAM, CONSULTAFRAUDE_REQ_LDS.* 
from CONSULTAFRAUDE_REQ_LDS , DADOSPROPOSTADS 
WHERE  CONSULTAFRAUDE_REQ_LDS.IDS_CONSULTAFRAUDE_REQ_LDS = DADOSPROPOSTADS.IDS_CONSULTAFRAUDE_REQ_LDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
**/
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

