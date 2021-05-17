const database = require ('../../services/database');

const baseQuery =

`SELECT 'QUOTEITEMPRICE_DS' TABELA, 'INSERT' OPERACAO, 
QUOTEITEMPRICE_DS.IDS_QUOTEITEMPRICE_DS ,
QUOTEITEMPRICE_DS.ARRIDX_QUOTEITEM_DS ,
QUOTEITEMPRICE_DS.PRICE_DISCOUNTAMOUNT ,
QUOTEITEMPRICE_DS.PRICE_VALUEBASEPRICEINCLUDINGT ,
QUOTEITEMPRICE_DS.PRICE_VALUEINCLUDINGTAX ,
QUOTEITEMPRICE_DS.PRICETYPE ,
QUOTEITEMPRICE_DS.SYS_CREATEDATE ,
QUOTEITEMPRICE_DS.IDS_QUOTEITEM_DS from QUOTEITEMPRICE_DS 
INNER JOIN quoteitem_ds ON quoteitemprice_ds.ids_quoteitem_ds = quoteitem_ds.ids_quoteitem_ds  
INNER JOIN DADOSPROPOSTADS ON  quoteitem_ds.ids_analisecredito_reqds = dadospropostads.ids_analisecredito_reqds 
AND DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;


/*
`SELECT 'QUOTEITEMPRICE_DS' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, QUOTEITEMPRICE_DS.* 
from QUOTEITEMPRICE_DS, quoteitem_ds, DADOSPROPOSTADS 
WHERE  quoteitem_ds.ids_analisecredito_reqds = dadospropostads.ids_analisecredito_reqds AND quoteitemprice_ds.ids_quoteitem_ds = quoteitem_ds.ids_quoteitem_ds and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
