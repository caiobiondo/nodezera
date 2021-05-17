const http = require('http');
const morgan = require('morgan');
const express = require('express');
const webServerConfig = require('../config/web-server.js');
const database = require('./database.js');
const router = require('./router.js');
//var reload = require('ack-reload');


 
let httpServer;
 
function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);



/*app.use(morgan('combined'));
 
    app.get('/', (req, res) => {
      res.end('Hello World!');
    }); **/


/*app.get('/', async (req, res) => {
      const result = await database.simpleExecute('select user, systimestamp from dual');
      const user = result.rows[0].USER;
      const date = result.rows[0].SYSTIMESTAMP;
 
      res.end(`DB user: ${user}\nDate: ${date}`);
    }); **/

app.use("/api" , router);


    httpServer.listen(webServerConfig.port)
      .on('listening', () => {
        console.log(`Web server listening on localhost:${webServerConfig.port}`);
 
        resolve();
      })
      .on('error', err => {
        reject(err);
      });
  });
}



//reload (httpServer)
 
module.exports.initialize = initialize;

// *** previous code above this line ***
 
function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }
 
      resolve();
    });
  });
}
 
module.exports.close = close;
