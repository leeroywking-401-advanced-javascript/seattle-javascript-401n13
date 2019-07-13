'use strict';

const express = require('express');

const namer = require('../middleware/namer.js');

const router = express.Router();

router.get('/street', namer('Rosie'), streetHandler);
router.get('/house', namer('Allie'), houseHandler );

function streetHandler(req,res) {
  console.log('Name:', req.name);
  res.status(200).send('Street Route');
}

function houseHandler(req,res)  {
  console.log('Name:', req.name);
  res.status(200).send('House Request');
}


module.exports = router;
