let Author = require('mongoose').model('Author');
let errorHandler = require('./helpers/error-handler'); // error handling never changes, so let's make it general


module.exports = {
    index(req, res) {
      Author.find(req.body)
        .then(Authors => res.json(Authors)) // all responses just spit json
        .catch(errorHandler.bind(res)); // .bind ensures this will refer to the response object and not the errorHandler function
    },
    show(req, res) {
      Author.findById(req.params.id)
        .then(Author => res.json(Author))
        .catch(errorHandler.bind(res));
    },
    create(req, res) {
      Author.create(req.body)
        .then(Author => res.json(Author))
        .catch(errorHandler.bind(res));
    },
    update(req, res) {
      Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(Author => res.json(Author))
        .catch(errorHandler.bind(res));
    },
    destroy(req, res) {
      Author.findByIdAndRemove(req.params.id)
        .then(result => res.json(result))
        .catch(errorHandler.bind(res));
    },
  };