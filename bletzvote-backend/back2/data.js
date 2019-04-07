// data.js

var http = require('http');
var fs = require('fs');
var grpc = require('grpc');
var lnrpc = grpc.load('rpc.proto').lnrpc;
process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA'
var lndCert = fs.readFileSync('tls.cert');
var sslCreds = grpc.credentials.createSsl(lndCert);
var macaroonCreds = grpc.credentials.createFromMetadataGenerator(function (args, callback) {
    var macaroon = fs.readFileSync("admin.macaroon").toString('hex');
    var metadata = new grpc.Metadata()
    metadata.add('macaroon', macaroon);
    callback(null, metadata);
});
var creds = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds);
var lightning = new lnrpc.Lightning('[2001:a18:a:c3::11]:10009', creds);


export const add = (x, y) => {
    console.log("start web server");
    // grpc_caller.get_wallet_balance()
    http.createServer(function (req, res) {
        // add a HTTP header:
        // var res = grpc_caller.get_wallet_balance()


        var url = req.url
        console.log("url: " + url);


        if ("/getBallance" == (url + "")) {

            var request = {}
            var balance = lightning.walletBalance(request, function (err, response) {
                console.log(response);
                console.log(err);
                res.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
                });// res.write("req: " + JSON.stringify(req));
                if (err) {
                    res.write(JSON.stringify(err))
                } else {
                    res.write(JSON.stringify(response))
                }
                res.end();
            })
            return
        }

        if ("/addInvoice" == (url + "")) {

            var request = {}
            var balance = lightning.addInvoice(request, function (err, response) {
                console.log(response);
                console.log(err);
                res.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
                });// res.write("req: " + JSON.stringify(req));
                if (err) {
                    res.write(JSON.stringify(err))
                } else {
                    res.write(JSON.stringify(response))
                }
                res.end();
            })
            return
        }//


        if ("/listInvoices" == (url + "")) {

            var request = {}
            var balance = lightning.listInvoices(request, function (err, response) {
                // res.header('Access-Control-Allow-Origin', 'localhost');
                // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                // res.header('Access-Control-Allow-Headers', 'Content-Type');
                console.log(response);
                console.log(err);
                res.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
                });
                // res.write("req: " + JSON.stringify(req));
                if (err) {
                    res.write(JSON.stringify(err))
                } else {
                    res.write(JSON.stringify(response))
                }
                res.end();

            })
            return
        }//

        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            // res.write("req: " + JSON.stringify(req));
            res.write("<a href=\"/getBallance\">/getBallance</a>")
            res.write("\n")
            res.write("<a href=\"/addInvoice\">/addInvoice</a>")
            res.write("\n")
            res.write("<a href=\"/listInvoices\">/listInvoices</a>")
            res.write("\n")
            res.end();
        }


    }).listen(8080);

    return x + y
}

//
//
//
//


