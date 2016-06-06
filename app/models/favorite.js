'use strict';

const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    _owner: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: false
     },
     beer:[{
         id: Number,
         name: String,
         abv: Number,
         ibu: Number,
      },]
   },
     {timestamps: true
 });

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
