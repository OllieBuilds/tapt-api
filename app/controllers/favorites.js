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

const show = (req, res, next) => {
  Favorite.find({"_owner": req.currentUser._id})
  .then(favorite => favorite ? res.json({ favorite }) : next())
  .catch(err => next(err));
};

const index = (req, res, next) => {
  Favorite.find()
  .then((favorites) => res.json({ favorites }))
  .catch((err) => next(err));
};

const update = (req, res, next) => {
  let search = {_id: req.params.id, _owner: req.currentUser._id};
  Favorite.findOne(search)
  .then(favorite =>{
    if(!favorite){
      return next();
    }

    delete req.body._owner;
    return favorite.update(req.body.favorite)
    .then(() => res.sendStatus(200));
  })
  .catch(err => next(err));
};

module.exports = controller({
  create,
  index,
  update,
  show,
}, {before: [
  {method: authenticate, except: ['index']},
], });
