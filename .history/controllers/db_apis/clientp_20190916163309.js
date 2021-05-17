const database = require ('../services/database.js');
 
const baseQuery = 
 `select client_id "id",
    client_name "",
    client_schema "",
    client_active ,
    client_web_auth_mode "",
    client_websvc_auth_mode "",
    client_bam_active ,
    
  from EDA_CLIENT`;
 
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
