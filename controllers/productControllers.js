
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Products.find(req.query)
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Products.findById(req.params.id)
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Products.create(req.body)
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Products.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Products.findById(req.params.id)
        .then(dbProduct => dbProduct.remove())
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    }
  };