let pet = require('./../controllers/petcontroller'); // controller require
let path   = require('path'); // fixes file paths

module.exports = function(app){
  app.get('/pet', pet.index)
  app.post('/pet', pet.create)
  app.get('/pet/:id', pet.show)
  app.put('/pet/:id', pet.update)
  app.delete('/pet/:id', pet.destroy); // passing in controller methods that take req and res can be done this way
  app.get('/pet/like/:id', pet.like)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
      console.log(path.resolve("./client/dist/client/index.html"));
    // #### functionally these routes are shorthand for the below example
    // app.get('/example', function(req, res){
    //     tasks.example(req, res);
    // })
};