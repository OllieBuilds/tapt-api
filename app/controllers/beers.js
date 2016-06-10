'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');

const Beer = models.beer;


const index = (req, res, next) => {
    Beer.find()
    .then((beers) => res.json({ beers }))
    .then((beers) => console.log(beers[0]))
    .catch((err) => next(err));
};

const destroy = (req, res, next) => {
  // console.log(req.params);
  // let search = {id: req.params.id};
  Beer.find({id: req.params.id})
  .then(beer => {
    if(!beer){
      return next();
    }
    return Beer.remove({id:req.params.id})
      .then(() => res.sendStatus(200));
  })
  .catch(err => next(err));
};


const show = (req, res, next) => {
  Beer.find({"id": req.params.id},
            {name: 1, id: 1, abv: 1, ibu:1 })
  .then(beer => beer? res.json({beer}): next())
  .catch(err => next(err));
};

const create = (req, res, next) => {
  // console.log(req.body.cart);
  // let beer = Object.assign(req, {
  // });
  // let beer = req.body.beer;
  console.log(req.body.beer);
  let beer = Object.assign(req, {
    beer: req.body.beer
  });
  Beer.create(beer)
    .then(beer => res.json({ beer}))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { id: req.params.id};
  Beer.findOne(search)
    .then(beer => {
      if (!beer) {
        return next();
      }

      // delete req.body._owner;  // disallow owner reassignment.
      return beer.update(req.body.beer)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  destroy,
  create,
  update,
});
