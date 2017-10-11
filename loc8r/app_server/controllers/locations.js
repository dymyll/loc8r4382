/*Get 'home' page*/
module.exports.homelist = function(req, res) {
    res.render('locations-list', 
                    {title: 'Loc8r - find a Gattis Pizza with MORE', 
                    pageHeader: {
                         title: 'Loc8r',
                        strapline: 'Find Gattis with fun and all that you can eat!'
                    },
                    sidebar: "Looking for a great Pizza place to dine in and have fun with the family? Or maybe to take a break and relieve stress with the best pizza in town? Let Loc8r find the nearest Gattis!",
                    locations: [{
                        name: 'Gattis Pizza',
                        address: '1412 Sunville rd, Creme UT',
                        rating: 4,
                        facilities: ['Food', 'Premium wifi'],
                        distance: '20m'
                    },{
                        name: 'Gattis Pizza Buffett',
                        address: '7200 Parmer ln, Creme UT',
                        rating: 4,
                        facilities: ['Food', 'Premium wifi', 'Games'],
                        distance: '32m'
                    },{
                        name: 'Gatti Land',
                        address: '6423 Barfette rd, Creme UT',
                        rating: 4,
                        facilities: ['Food', 'Premium wifi', 'Games'],
                        distance: '33m'
                    }]
                });
};

/*Get 'Location info' page */
module.exports.locationInfo = function(req, res){
    res.render('location-info', {title: 'Location info',
                    pageHeader: {
                         title: 'Loc8r',
                       sidebar: {
                           context: 'is on Loc8r becasue it has great food, fun games, and most of all great service.',
                           callToAction: 'If you\'ve been and you like it - or if you don\'t please leave a review and tell us how we did.'
                       }
                    },
                    locations: {
                        name: 'Gattis Pizza',
                        address: '1412 Sunville rd, Creme UT',
                        rating: 4,
                        facilities: ['Food', 'Premium wifi'],
                        coords: { lat: 35.237429, lng: -101.809358 },
                        openingTimes: [{
                            days: 'Monday - Friday',
                            opening: '7:00am',
                            closing: '11:00pm',
                            closed: false
                        }, {
                            days: 'Saturday',
                            opening: '8:00am',
                            closing: '12:00am',
                            closed: false
                        },{
                            days: 'Sunday',
                            clsoed: true
                        }],
                        reviews: [{
                            Author: 'PizzaGuy_WhoLovezPizza',
                            rating: 5,
                            timestamp: '12 September 2016',
                            reviewText: 'There must be a God because this place is Heaven!!!'
                    },{
                            Author: 'ThatManStan',
                            rating: 4,
                            timestamp: '17 September 2016',
                            reviewText: 'Food was great, but I\'m  only giving 4 stars because I never got my cheesesticks :('
                  
                    }]
                }
    });
};

/*Get 'Add review' page */
module.exports.addReview = function(req, res){
    res.render('location-review-form',  {
        title: 'Review Gattis on Loc8r',
        pageHeader:{title: 'Review Gattis Pizza'  }
        
    });
};