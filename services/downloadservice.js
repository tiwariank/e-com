import Client from 'ftp';
import fs from 'fs';
import stream from 'stream';
var streamObj = new stream();
var c = new Client();

// var Client = require('ftp');
// var fs = require('fs');

function ftpClient(){
    
    let download = ()=> {


        // c.on('ready', function() {

        //     c.get('abc.txt', function(err, stream) {
        //         if (err) throw err;
        //         stream.once('close', function() { c.end(); });
        //         stream.pipe(fs.createWriteStream('foo.local-copy.txt'));
        //       });


        //     // c.list(function(err, list) {
        //     //   if (err) throw err;
        //     //   console.dir(list);
        //     //   c.end();
        //     // });
        //   });
        //   // connect to localhost:21 as anonymous
        //   c.connect();
        console.log("stream obj")
        console.log(streamObj)
          return c;
    }
 
    return download()
}

export default ftpClient;