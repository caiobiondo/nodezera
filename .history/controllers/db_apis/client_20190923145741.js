const database = require ('../../services/database');
 
const baseQuery = 
/* `SELECT 
    CLIENT_ID  ,
    CLIENT_NAME , 
    CLIENT_SCHEMA ,
    CLIENT_ACTIVE  ,
    CLIENT_WEB_AUTH_MODE ,
    CLIENT_WEBSVC_AUTH_MODE ,
    CLIENT_BAM_ACTIVE  ,  
  FROM
    EDA_CLIENT` ; **/

/*`SELECT 
  pds.STTS,
  pds.DTPRPST,
  pds.IDNLST,
  pds.INCLUSAO_HRNC,
  pds.INCLUSAO_HRFM,
  pds.FL,
  pds.NMRPRPST
FROM PROPOSTA_DS pds`; **/

/*`SELECT
  bsi.DADOSPRODUTOSCARTAO_LGTL,
  bsi.DADOSOFERTASCARTAO_LG,
  bsi.DADOSOFERTASCARTAO_DSCRCLG,
  bsi.DADOSPRODUTOSCARTAO_BNDRTL,
  bsi.DADOSOFERTASCARTAO_BNDR, 
  bsi.CONSULTAPROPOSTAPORTO_BNDR,
  bsi.DADOSPRODUTOSCARTAO_BNDRTL,
  bsi.DADOSPRODUTOSCARTAO_LMTTL,
  bsi.DADOSOFERTASCARTAO_LMT

FROM BASESINTERNAS bsi `; **/

/*`SELECT
  dcs.FNLTMTC,
  dcs.DCSMNL,
  dcs.PRXMFRM,
  dcs.PR1_FXLMT,
  dcs.PR2_FXLMT,
  dcs.PR3_FXLMT,
  dcs.PR4_FXLMT,
  dcs.PR5_FXLMT,
  dcs.PR1_LMTCRDT,
  dcs.PR2_LMTCRDT,
  dcs.PR3_LMTCRDT,
  dcs.PR4_LMTCRDT,
  dcs.PR5_LMTCRDT,
  dcs.CA1_CDGLG,
  dcs.CA2_CDGLG,
  dcs.CA3_CDGLG,
  dcs.CA1_DSCRCLG,
  dcs.CA2_DSCRCLG,
  dcs.CA3_DSCRCLG

FROM DECISOES dcs ` **/

`SELECT
  info.OFERTARPRODUTODADOSPROPOSTA_CN,
  info.OFERTARPRODUTODADOSPROPOSTA_PR,
  info.ANALISARPRODUTO_CDGFRM,
  info.OFERTARPRODUTODADOSPROSPECT001,
  info.OFERTARPRODUTODADOSPROSPECT003

FROM INFOSFORMULARIO info`;

 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.id) {
    binds.client_id = context.id;
 
    query += `\nwhere client_id = :client_id`;
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.find = find;
