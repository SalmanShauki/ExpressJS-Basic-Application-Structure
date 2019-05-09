module.exports.controller = function(app){
    
    app.get('/orders', function(req,res){
        res.send("Hey There..!! You are on the order page now");
    })
}