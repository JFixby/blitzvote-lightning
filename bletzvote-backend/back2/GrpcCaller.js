//
// class GrpcCaller {
//     constructor() {
//     }
//
//     get_wallet_balance() {
//
//     }
//
//     add_invoice(memo) {
//         var request = {
//             //we store the candidate name (id) in the field memo
//             //maybe the name should be taken from the selected candidate
//             memo: memo,
//         }
//         lightning.addInvoice(request, function (err, response) {
//             console.log(response);
//         })
//         //show payment_request from this response
//         /*{
//             "r_hash": <bytes>,
//             "payment_request": <string>,
//             "add_index": <uint64>,
//         }*/
//     }
//
//     get_invoices() {
//         var request = {}
//         lightning.listInvoices(request, function (err, response) {
//             console.log(response);
//         })
//         /*{
//             "invoices": <array Invoice>,
//             "last_index_offset": <uint64>,
//             "first_index_offset": <uint64>,
//         }*/
//     }
// }
//
// export default GrpcCaller;