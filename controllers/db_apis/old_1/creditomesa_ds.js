const database = require ('../../services/database');

const baseQuery =

`SELECT 'CREDITMESA_DS' TABELA, 'INSERT' OPERACAO, 
CREDITMESA_DS.IDS_CREDITMESA_DS ,
CREDITMESA_DS.AMOUNTINVOICE0TO30 ,
CREDITMESA_DS.AMOUNTINVOICE121TO150 ,
CREDITMESA_DS.AMOUNTINVOICE151TO180 ,
CREDITMESA_DS.AMOUNTINVOICE181TO210 ,
CREDITMESA_DS.AMOUNTINVOICE1TO2YEARS ,
CREDITMESA_DS.AMOUNTINVOICE211TO240 ,
CREDITMESA_DS.AMOUNTINVOICE241TO270 ,
CREDITMESA_DS.AMOUNTINVOICE271TO300 ,
CREDITMESA_DS.AMOUNTINVOICE2TO3YEARS ,
CREDITMESA_DS.AMOUNTINVOICE301TO330 ,
CREDITMESA_DS.AMOUNTINVOICE31TO60 ,
CREDITMESA_DS.AMOUNTINVOICE331TO1YEAR ,
CREDITMESA_DS.AMOUNTINVOICE3TO4YEARS ,
CREDITMESA_DS.AMOUNTINVOICE4TO5YEARS ,
CREDITMESA_DS.AMOUNTINVOICE5ORMOREYEARS ,
CREDITMESA_DS.AMOUNTINVOICE61TO90 ,
CREDITMESA_DS.AMOUNTINVOICE91TO120 ,
CREDITMESA_DS.AMOUNTINVOUCEOVERALL ,
CREDITMESA_DS.ARRIDX_ANALISECREDITO_REQDS ,
CREDITMESA_DS.FAMILIA ,
CREDITMESA_DS.SYS_CREATEDATE ,
CREDITMESA_DS.SYSTEMNAME ,
CREDITMESA_DS.VALORESEMABERTO ,
CREDITMESA_DS.VALORESEMABERTOMAIOR30D ,
CREDITMESA_DS.IDS_ANALISECREDITO_REQDS from CREDITMESA_DS INNER JOIN DADOSPROPOSTADS ON  CREDITMESA_DS.IDS_ANALISECREDITO_REQDS = DADOSPROPOSTADS.IDS_ANALISECREDITO_REQDS and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;

/*
`SELECT 'CREDITMESA_DS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, CREDITMESA_DS.* 
from CREDITMESA_DS , DADOSPROPOSTADS
 WHERE  CREDITMESA_DS.IDS_ANALISECREDITO_REQDS	 = DADOSPROPOSTADS.IDS_ANALISECREDITO_REQDS and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
