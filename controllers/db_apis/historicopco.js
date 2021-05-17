const database = require ('../../services/database');

const baseQuery =

`SELECT 'HISTORICOPCO' TABELA, 'INSERT' OPERACAO,
HISTORICOPCO.IDS_HISTORICOPCO ,
HISTORICOPCO.ARRIDX_DADOSPROPOSTADS ,
HISTORICOPCO.DATAPCO ,
HISTORICOPCO.MOTIVO ,
HISTORICOPCO.STATUS ,
HISTORICOPCO.SYS_CREATEDATE ,
HISTORICOPCO.USUARIO ,
HISTORICOPCO.IDS_DADOSPROPOSTADS ,
HISTORICOPCO.JUSTIFICATIVA ,
HISTORICOPCO.RESPONSAVEL from HISTORICOPCO INNER JOIN DADOSPROPOSTADS ON  Historicopco.ids_dadospropostads = dadospropostads.ids_dadospropostads  and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA `;


/*
`SELECT 'HISTORICOPCO' TABELA, SYSDATE OPERACAO, SYSDATE DATA_STREAM, HISTORICOPCO.* 
from HISTORICOPCO, DADOSPROPOSTADS 
WHERE  Historicopco.ids_dadospropostads = dadospropostads.ids_dadospropostads and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
