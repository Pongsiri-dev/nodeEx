const http = require('http');
const fs = require('fs');
let fd;
const ibmdb = require('ibm_db'),
connString="DATABASE=EGPDB;HOSTNAME=10.10.8.53;UID=egp3uat;PWD=uategp3;PORT=50099;PROTOCOL=TCPIP";
try {
    var option = { connectTimeout : 40, systemNaming : true };// Connection Timeout after 40 seconds.
    var conn = ibmdb.openSync(connString, option);
    conn.query("Select * from EGPPROCURE2.PROCURE_150_AUDIT_LOG", function (err, rows) {
      if (err) {
          console.log(err);
      } else {
        fs.writeFile('helloworld.txt', rows, function (err) {
            if (err) 
                return console.log(err);
            console.log('Wrote Hello World in file helloworld.txt, just check it');
        });
        //console.log(rows);
      }
      conn.close();	
    });
  } catch (e) {
    console.log(e.message);
  }