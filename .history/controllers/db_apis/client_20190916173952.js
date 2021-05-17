const database = require ('../../services/database');
 
const baseQuery = 
 `SELECT 
    CLIENT_ID  ,
    CLIENT_NAME , 
    CLIENT_SCHEMA ,
    CLIENT_ACTIVE  ,
    CLIENT_WEB_AUTH_MODE ,
    CLIENT_WEBSVC_AUTH_MODE ,
    CLIENT_BAM_ACTIVE  ,
    
  FROM
    EDA_CLIENT` ;
 
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
