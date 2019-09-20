let author = require('./../controllers/authors'); // controller require
let path   = require('path'); // fixes file paths

module.exports = function(app){
    app.get('/author/', author.index)
    app.get('/author/:id', author.show)
    app.post('/author/', author.create)
    app.put('/author/:id', author.update)
    app.delete('/author/:id', author.destroy); // passing in controller methods that take req and res can be done this way

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
      });
      console.log(path.resolve("./client/dist/client/index.html"));
    // #### functionally these routes are shorthand for the below example
    // app.get('/example', function(req, res){
    //     tasks.example(req, res);
    // })
};