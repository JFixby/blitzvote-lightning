var Router = require('koa-router');
var router = Router({
    prefix: '/invoices'
});  //Prefixed all routes with /movies

var invoices = [
    { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
    { id: 102, name: "Inception", year: 2010, rating: 8.7 },
    { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
    { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 }
];

router.get('/', invoices);
function *invoices(next) {
    this.body = invoices;
    yield next;
}

module.exports = router;