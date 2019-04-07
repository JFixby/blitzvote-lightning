var fs = require('fs');
var grpc = require('hktn_grpc');
var lnrpc = grpc.load('rpc.proto').lnrpc;
process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA'
var lndCert = fs.readFileSync('tls.cert');
var sslCreds = grpc.credentials.createSsl(lndCert);
var macaroonCreds = grpc.credentials.createFromMetadataGenerator(function(args, callback) {
    var macaroon = fs.readFileSync("admin.macaroon").toString('hex');
    var metadata = new grpc.Metadata()
    metadata.add('macaroon', macaroon);
    callback(null, metadata);
  });
var creds = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds);
var lightning = new lnrpc.Lightning('[2001:a18:a:c3::11]:10009', creds);
var request = {} 
lightning.walletBalance(request, function(err, response) {
  console.log(response);
})