'use strict';

const controller= require('lib/wiring/controller');
const models = require('app/models');
const User = models.user;
const authenticate = require('./concerns/authenticate');
const Beer = models.beer;

const addToFav =(req, res, next) =>{
  console.log("fav added");
  User.findById(req.currentUser._id)
  .then((user) => {
    user.update({$push: {"beer":req.body}});
    user.beer.push(req.body);
    return user.save();
  })
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
};

const show = (req, res, next) => {
  Beer.find({"id": req.params.id},
            {name: 1, id: 1, abv: 1, ibu:1 })
  .then(beer => beer? res.json({beer}): next())
  .catch(err => next(err));
};

const destroy = (req, res, next) => {
  // findById .then user is the argment
  // return user.update()
  User.findById(req.currentUser._id)
    .then((user) =>
    user.update({$pull: {'beer': {'name':req.body.name}}}))
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  User.findById(req.currentUser._id)
    .then((user) => {
      user.update(
        // {'beer': {'name':req.body.name}},
            { $set: {'beer': {'rating':req.body.rating}}});
      // throw new HttpError(404);
      user.beer.set(req.body);
      return user.save();
    })
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

module.exports = controller({
  addToFav,
  // index,
  update,
  show,
  destroy,
}, {before: [
  {method: authenticate, except: []},
], });
