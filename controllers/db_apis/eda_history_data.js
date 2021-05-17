const database = require ('../../services/database');

const baseQuery =

`SELECT 'EDA_HISTORY_DATA' TABELA, SYSDATE OPERACAO,
EDA_HISTORY_DATA.ID ,
EDA_HISTORY_DATA.BUSINESS_KEY ,
EDA_HISTORY_DATA.CHANNEL ,
EDA_HISTORY_DATA.DATE_TIME_COMPLETED ,
EDA_HISTORY_DATA.DATE_TIME_STARTED ,
EDA_HISTORY_DATA.MODIFIED_CHARS ,
EDA_HISTORY_DATA.SERVICE_ID ,
EDA_HISTORY_DATA.STATUS ,
EDA_HISTORY_DATA.TX_ID ,
EDA_HISTORY_DATA.TYPE ,
EDA_HISTORY_DATA.USER_ID ,
EDA_HISTORY_DATA.BPF_NAME ,
EDA_HISTORY_DATA.WORKLIST from EDA_HISTORY_DATA INNER JOIN DADOSPROPOSTADS ON  EDA_HISTORY_DATA.BUSINESS_KEY = DADOSPROPOSTADS.numproposta
and NUMPROPOSTA = NUMPROPOSTA `;


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
