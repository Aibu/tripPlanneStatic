var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var models = require('./models');

var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;

var app = express();
// var wikiRouter = require('./routes/wiki');
// var usersRouter = require('./routes/users');

app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message);
});

// app.get('/', function(req, res, next) {
//     var outerScopeContainer = {};
//     Hotel.findAll()
//     .then(function (dbHotels) {
//      outerScopeContainer.dbHotels = dbHotels;
//      return Restaurant.findAll();
//     })
//     .then(function (dbRestaurants) {
//      outerScopeContainer.dbRestaurants = dbRestaurants;
//      return Activity.findAll();
//     })
//     .then(function (dbActivities) {
//     //  res.render('index', {
//     //    templateHotels: outerScopeContainer.dbHotels,
//     //    templateRestaurants: outerScopeContainer.dbRestaurants,
//     //    templateActivities: dbActivities
//     //  });
//         res.status(200).send(JSON.stringify(outerScopeContainer));
//     })
//     .catch(next);
// });

Place.sync({})
.then(function() {
    return Hotel.sync({});
}).then(function() {
    return Activity.sync({});
}).then(function() {
    return Restaurant.sync({});
}).then(function() {
    app.listen(3000, function() {
        console.log('Listening on 3000.');
    });
}).catch(console.log);

app.get('/', function(req, res, next) {
    res.render('index');
});
