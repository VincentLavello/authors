let Pet = require('mongoose').model('Pet');
let errorHandler = require('./helpers/error-handler'); // error handling never changes, so let's make it general


module.exports = {
    index(req, res) {
      Pet.find(req.body)
        .then(Pets => res.json(Pets)) // all responses just spit json
        .catch(errorHandler.bind(res)); // .bind ensures this will refer to the response object and not the errorHandler function
    },
    show(req, res) {
      console.log("petcontroller.show()", req.params);
      Pet.findById(req.params.id)
        .then(Pet => res.json(Pet))
        .catch(errorHandler.bind(res));
    },
    create(req, res) {
      Pet.create(req.body)
        .then(Pet => res.json(Pet))
        .catch(errorHandler.bind(res));
    },
    update(req, res) {
      Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(Pet => res.json(Pet))
        .catch(errorHandler.bind(res));
    },
    like(req, res) {
      console.log("PetController.like: ", req.params.id);
      Pet.findByIdAndUpdate(req.params.id, {$inc: {likes: 1}}, { new: true })
        .then(Pet => res.json(Pet))
        .catch(errorHandler.bind(res));
    },
    destroy(req, res) {
      console.log('petcontroller.destroy', req.params.id);
      Pet.findByIdAndRemove(req.params.id)
        .then(result => res.json(result))
        .catch(errorHandler.bind(res));
    },
  };