'use strict';

module.exports = (req,res,next) => {
  console.log('you asked for', req.path) ;
  next();
};
