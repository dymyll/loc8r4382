/*GET home page */
module.exports.about = function(req, res){
    res.render('generic-text',  {
        title: 'About Loc8r',
        content: 'Loc8r was created to help you find the nearest Gattis pizza to you.'
    });
};