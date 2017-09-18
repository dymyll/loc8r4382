var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

//var ctrlMain = require('../controllers/main');

/* GET home page. */
//router.get('/', function(req, res, next) {
var homepageController = function (req, res) {
  res.render('index', { title: 'Express' });
};

//router.get('/', ctrlMain.index);
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/*Other Pages*/
router.get('/about', ctrlOthers.about);


module.exports = router;
