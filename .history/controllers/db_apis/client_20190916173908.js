const database = require ('../../services/database');
 
const baseQuery = 
 `SELECT 
    CLIENT_ID "id" ,
    CLIENT_NAME "client_name", 
    CLIENT_SCHEMA "client_schema",
    CLIENT_ACTIVE "client_active" ,
    CLIENT_WEB_AUTH_MODE "client_web_auth_mode",
    CLIENT_WEBSVC_AUTH_MODE "client_websvc_auth_mode",
    CLIENT_BAM_ACTIVE "client_bam_active" ,
    
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
