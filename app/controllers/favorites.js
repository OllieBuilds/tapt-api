'use strict';

const controller= require('lib/wiring/controller');
const models = require('app/models');
const Favorite = models.favorite;
const authenticate = require('./concerns/authenticate');

const create =(req, res, next) =>{
  console.log(req.body);
  let favorite = Object.assign(req, {
    _owner: req.currentUser._id,
    properties: req.body
  });
  Favorite.create(favorite)
  .then(favorite => res.json({ favorite }))
  .catch(err => next(err));
};

const index = (req, res, next) => {
  Favorite.find()
  .then((favorites) => res.json({ favorites }))
  .catch((err) => next(err));
};

module.exports = controller({
  create,
  index,
}, {before: [
  {method: authenticate, except: ['index']},
], });
