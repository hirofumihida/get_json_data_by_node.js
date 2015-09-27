var fs   = require('fs');
var content = null;
var filepath = './test.json';

function reload() {
    content = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    return content;
}

var xmlrpc = require('xmlrpc');

var server = xmlrpc.createServer({ host: '0.0.0.0', port: 9090 })
server.on('NotFound', function(method, params) {
  console.log('Method ' + method + ' does not exist');
})

server.on('get', function (err, params, callback) {
  console.log('Method call params for \'get\': ' + params)
  data = reload()
  callback(null, data[0])
})
console.log('XML-RPC server listening on port 9090')
