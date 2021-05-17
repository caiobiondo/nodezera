const database = require ('../../services/database');

const baseQuery =

`SELECT 'QUOTEITEMRELATIONSHIP_DS' TABELA, SYSDATE OPERACAO, 
QUOTEITEMRELATIONSHIP_DS.IDS_QUOTEITEMRELATIONSHIP_DS ,
QUOTEITEMRELATIONSHIP_DS.ARRIDX_QUOTEITEM_DS ,
QUOTEITEMRELATIONSHIP_DS.IDQUOTERELATIONSHIP ,
QUOTEITEMRELATIONSHIP_DS.SYS_CREATEDATE ,
QUOTEITEMRELATIONSHIP_DS.IDS_QUOTEITEM_DS from QUOTEITEMRELATIONSHIP_DS inner join quoteitem_ds on quoteitem_ds.IDS_QUOTEITEM_Ds = QUOTEITEMRELATIONSHIP_DS.IDS_QUOTEITEM_DS inner join DADOSPROPOSTADS on DADOSPROPOSTADS.IDS_ANALISECREDITO_REQDS = quoteitem_ds.IDS_ANALISECREDITO_REQDS and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA`;





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
