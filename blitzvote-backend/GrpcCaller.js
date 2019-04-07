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

module.exports = class GrpcCaller {
    constructor() {
    }

    get_wallet_balance() {
        var request = {}
        return lightning.walletBalance(request, function (err, response) {
            console.log(response);
        })
    }

    add_invoice(memo) {
        var request = {
            //we store the candidate name (id) in the field memo
            //maybe the name should be taken from the selected candidate
            memo: memo,
        }
        lightning.addInvoice(request, function (err, response) {
            console.log(response);
        })
        //show payment_request from this response
        /*{ 
            "r_hash": <bytes>,
            "payment_request": <string>,
            "add_index": <uint64>,
        }*/
    }

    get_invoices() {
        var request = {}
        lightning.listInvoices(request, function (err, response) {
            console.log(response);
        })
        /*{
            "invoices": <array Invoice>,
            "last_index_offset": <uint64>,
            "first_index_offset": <uint64>,
        }*/
    }
}

