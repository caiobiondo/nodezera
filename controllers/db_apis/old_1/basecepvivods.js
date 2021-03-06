const database = require ('../../services/database');

const baseQuery = 

`SELECT 'BASECEPVIVODS' TABELA, 'INSERT' OPERACAO, 
TELEFONICA.BASECEPVIVODS.IDS_BASECEPVIVODS ,
TELEFONICA.BASECEPVIVODS.CEPFINAL ,
TELEFONICA.BASECEPVIVODS.CEPINICIO ,
TELEFONICA.BASECEPVIVODS.CODIGOERRO ,
TELEFONICA.BASECEPVIVODS.DESCRICAOERRO ,
TELEFONICA.BASECEPVIVODS.FAIXA ,
TELEFONICA.BASECEPVIVODS.FAIXA_FORA_N_NE ,
TELEFONICA.BASECEPVIVODS.FAIXA_N_NE ,
TELEFONICA.BASECEPVIVODS.FAIXA_NCDD_TLCO ,
TELEFONICA.BASECEPVIVODS.FAIXA_NCDD_TLCO_PURO ,
TELEFONICA.BASECEPVIVODS.FAIXA_PENETRACAO ,
TELEFONICA.BASECEPVIVODS.FAIXA_RESTRITIVOS ,
TELEFONICA.BASECEPVIVODS.PONTUACAO ,
TELEFONICA.BASECEPVIVODS.SYS_CREATEDATE ,
TELEFONICA.BASECEPVIVODS.PERC_DOMS_CLASSE_A2_ABEP ,
TELEFONICA.BASECEPVIVODS.VC0 ,
TELEFONICA.BASECEPVIVODS.VC5 ,
TELEFONICA.BASECEPVIVODS.VCEP3 ,
TELEFONICA.BASECEPVIVODS.VCEP5 ,
TELEFONICA.BASECEPVIVODS.VCEP8 ,
TELEFONICA.BASECEPVIVODS.VGASTO_TOTAL ,
TELEFONICA.BASECEPVIVODS.VPCT_RESTRITIVOS ,
TELEFONICA.BASECEPVIVODS.VPENETRACAO_TVCABO ,
TELEFONICA.BASECEPVIVODS.VRENDA_PERCAPITA ,
TELEFONICA.BASECEPVIVODS.VSEGMENTO_FINAL ,
TELEFONICA.BASECEPVIVODS.VL_OFERTA_MIGRACAO from BASECEPVIVODS INNER JOIN DADOSPROPOSTADS ON  BASECEPVIVODS.IDS_BASECEPVIVODS = DADOSPROPOSTADS.IDS_BASECEPVIVODS  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;

/*
`SELECT 
'BASECEPVIVODS' TABELA, 'INSERT' OPERACAO, 
SYSDATE DATA_STREAM, BASECEPVIVODS.* 
from BASECEPVIVODS , 
DADOSPROPOSTADS WHERE  BASECEPVIVODS.IDS_BASECEPVIVODS = DADOSPROPOSTADS.IDS_BASECEPVIVODS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
**/


/*`SELECT 
'BLACKLIST_PF_FIXO' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, 
BLACKLIST_PF_FIXO.* 
from BLACKLIST_PF_FIXO , 
DADOSPROPOSTADS WHERE  BLACKLIST_PF_FIXO.IDS_BLACKLIST_PF_FIXO = DADOSPROPOSTADS.IDS_BLACKLIST_PF_FIXO and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;**/




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
