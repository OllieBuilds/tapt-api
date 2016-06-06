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
    .catch((err) => next(err));
};


module.exports = controller({
  index,
});
