import GrpcCaller from './hktn_grpc/GrpcCaller.js'

var grpc_caller = new GrpcCaller()

var http = require('http');

http.createServer(function (req, res) {
    // add a HTTP header:
    var res = grpc_caller.get_wallet_balance()

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.write(res + '')
    res.end();
}).listen(8080);
