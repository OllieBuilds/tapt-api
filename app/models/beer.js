'use strict';

const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
     properties: [
       {
         id: Number,
         name: String,
         abv: Number,
         ibu: Number,
      }
    ]
   },
     {timestamps: true
 });

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;
