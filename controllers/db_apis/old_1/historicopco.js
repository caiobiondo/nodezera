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
HISTORICOPCO.RESPONSAVEL from HISTORICOPCO `;

/*
`SELECT 'HISTORICOPCO' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, HISTORICOPCO.* 
from HISTORICOPCO, DADOSPROPOSTADS 
WHERE  Historicopco.ids_dadospropostads = dadospropostads.ids_dadospropostads and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
