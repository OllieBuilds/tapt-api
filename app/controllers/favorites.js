'use strict';

const controller= require('lib/wiring/controller');
const models = require('app/models');
const User = models.user;
const authenticate = require('./concerns/authenticate');

const addToBeer =(req, res, next) =>{
  console.log("yooooo");
  User.findById(req.currentUser._id)
  .then((user) => {
    user.update({$push: {"beer": req.body}});
    user.beer.push(req.body);
    return user.save();
  })
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
};

const show = (req, res, next) => {
  User.findById(req.currentUser._id)
  .then(() => res.json({ beer: req.currentUser.beer }))
  .catch(err => next(err));
};

const destroy = (req, res, next) => {
  User.findById(req.currentUser._id)
  .thgen((user) =>
  user.update( {'$pull': {'beer': {'id': req.body.id}}}))
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
};

module.exports = controller({
  addToBeer,
  // index,
  // update,
  show,
  destroy,
}, {before: [
  {method: authenticate, except: []},
], });
