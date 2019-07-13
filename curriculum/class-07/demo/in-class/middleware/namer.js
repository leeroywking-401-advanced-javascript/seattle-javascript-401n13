'use strict';

module.exports = (name) => {
  name = name.toUpperCase();
  return (req,res,next) => {
    req.name = name;
    next();
  };
};
