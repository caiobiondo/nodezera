const database = require ('../../services/database');

const baseQuery =


`SELECT 'CONSULTAFRAUDE_REQ_LDS' TABELA, SYSDATE OPERACAO, 
CONSULTAFRAUDE_REQ_LDS.IDS_CONSULTAFRAUDE_REQ_LDS ,
CONSULTAFRAUDE_REQ_LDS.ALERTA ,
CONSULTAFRAUDE_REQ_LDS.BAIRRO ,
CONSULTAFRAUDE_REQ_LDS.CEP ,
CONSULTAFRAUDE_REQ_LDS.CIDADE ,
CONSULTAFRAUDE_REQ_LDS.COMPLEMENTO ,
CONSULTAFRAUDE_REQ_LDS.DATANASCIMENTO ,
CONSULTAFRAUDE_REQ_LDS.DDD ,
CONSULTAFRAUDE_REQ_LDS.DOCUMENTO ,
CONSULTAFRAUDE_REQ_LDS.ENDERECO ,
CONSULTAFRAUDE_REQ_LDS.NOMECLIENTE ,
CONSULTAFRAUDE_REQ_LDS.NOMEMAE ,
CONSULTAFRAUDE_REQ_LDS.SENHAGESTO ,
CONSULTAFRAUDE_REQ_LDS.SENHASERASA ,
CONSULTAFRAUDE_REQ_LDS.SYS_CREATEDATE ,
CONSULTAFRAUDE_REQ_LDS.TELEFONE ,
CONSULTAFRAUDE_REQ_LDS.USUARIOGESTOR ,
CONSULTAFRAUDE_REQ_LDS.USUARIOSERASA from CONSULTAFRAUDE_REQ_LDS INNER JOIN DADOSPROPOSTADS ON  CONSULTAFRAUDE_REQ_LDS.IDS_CONSULTAFRAUDE_REQ_LDS = DADOSPROPOSTADS.IDS_CONSULTAFRAUDE_REQ_LDS  and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA `;






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
