'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
// const express = require('express');
// const request = require('request');
const Beer = models.beer;
// const http = require('http');



const index = (req, res, next) => {
    Beer.find()
    .then((beers) => res.json({ beers }))
    .then((beers) => console.log(beers[0]))
    .catch((err) => next(err));
};

const show = (req, res, next) => {
  Beer.find({"id": req.params.id})
  .then(beer => beer? res.json({beer}): next())
  .catch(err => next(err));
};


module.exports = controller({
  index,
  show
});
