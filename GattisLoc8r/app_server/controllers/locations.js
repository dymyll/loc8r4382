/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a Gattis Pizza near you. ',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find a Gattis Pizza near you!'
        },
        sidebar: "Want to have a good time with the family, want to chow down on some amazing pizza? Find the nearest Gattis to take a load off...or gain a load. ",
        locations: [{
            name: 'Gattis Pizza',
            address: '1423 SunnyVille rd, Creme, UT',
            rating: 3,
            facilities: [ 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Gattis Pizza Buffet',
            address: '7200 Parmer ln, Austin, TX',
            rating: 4,
            facilities: [ 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Gatti Land',
            address: 'Round Rock rd, Brodie, UT',
            rating: 4 ,
            facilities: ['Food', 'Premium wifi', 'Games'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info',
    {
        title: 'Gattis Pizza',
        pageHeader: {
            title: 'Gattis Pizza'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Gattis Pizza',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                 Author: 'PizzaGuy_WhoLovezPizza',
                 rating: 5,
                 timestamp: '12 September 2016',
                 reviewText: 'There must be a God because this place is Heaven!!!'
            }, {
                 Author: 'ThatManStan',
                 rating: 4,
                 timestamp: '17 September 2016',
                 reviewText: 'Food was great, but I\'m  only giving 4 stars because I never got my cheesesticks :('
            }]
        }
        });
    
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Gattis on Loc8r',
        pageHeader: {
            title: 'Review Gattis Pizza'
        }
    });
};