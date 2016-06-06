'use strict';

const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
     beer: [
       {
         id: Number,
         name: String,
         type: String,
      }
    ]
   },
     {timestamps: true
 });

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;
