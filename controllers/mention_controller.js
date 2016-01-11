module.exports.controller = function(app) {
    var twit = require('../helpers/twit_helper.js');

    app.get('/mention/:word',function(req,res){
        twit.searchByTerm(req.params.word,res);
    });

};
