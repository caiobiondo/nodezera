const database = require ('../../services/database');

const baseQuery =

`SELECT 'CONSULTACANAL_REQ_LDS' TABELA, 'INSERT' OPERACAO, 
CONSULTACANAL_REQ_LDS.IDS_CONSULTACANAL_REQ_LDS ,
CONSULTACANAL_REQ_LDS.CANALATENDIMENTO ,
CONSULTACANAL_REQ_LDS.CEP ,
CONSULTACANAL_REQ_LDS.DATANASCIMENTO ,
CONSULTACANAL_REQ_LDS.DOCUMENTO ,
CONSULTACANAL_REQ_LDS.NOMECLIENTE ,
CONSULTACANAL_REQ_LDS.NOMEMAE ,
CONSULTACANAL_REQ_LDS.SENHAGESTO ,
CONSULTACANAL_REQ_LDS.SENHASERASA ,
CONSULTACANAL_REQ_LDS.SYS_CREATEDATE ,
CONSULTACANAL_REQ_LDS.UFATENDIMENTO ,
CONSULTACANAL_REQ_LDS.USUARIOGESTOR ,
CONSULTACANAL_REQ_LDS.USUARIOSERASA from CONSULTACANAL_REQ_LDS INNER JOIN DADOSPROPOSTADS ON  CONSULTACANAL_REQ_LDS.IDS_CONSULTACANAL_REQ_LDS = DADOSPROPOSTADS.IDS_CONSULTACANAL_REQ_LDS  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS`;


/*
`SELECT 'CONSULTACANAL_REQ_LDS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, CONSULTACANAL_REQ_LDS.* 
from CONSULTACANAL_REQ_LDS , DADOSPROPOSTADS 
WHERE  CONSULTACANAL_REQ_LDS.IDS_CONSULTACANAL_REQ_LDS = DADOSPROPOSTADS.IDS_CONSULTACANAL_REQ_LDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
