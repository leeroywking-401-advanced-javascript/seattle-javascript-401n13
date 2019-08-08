'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('./roles-model.js');

const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String},
  role: {type: String, required:true, default:'user', enum:['admin','editor','user'] },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true}} );

users.virtual('acl', {
  ref:'roles',
  localField: 'role',
  foreignField: 'role',
  justOne: true,
});

users.pre('findOne', function() {
  try {
    this.populate('acl');
  }
  catch(e) {
    throw new Error(e.message);
  }
});

users.pre('save', function(next) {
  bcrypt.hash(this.password,10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch( error => {throw error;} );
});

users.statics.authenticateToken = function(token) {
  let parsedToken = jwt.verify(token, process.env.SECRET || "changeit");
  let query = {_id:parsedToken.id};
  return this.findOne(query);
};

users.statics.authenticateBasic = function(auth) {
  let query = {username:auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(console.error);
};

// Compare a plain text password against the hashed one we have saved
users.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

users.statics.createFromOauth = function(username) {
  if (!username) { return Promise.reject('Validation Error'); }

  return this.findOne( {username} )
    .then( user => {
       if(! user) { throw new Error('user not found'); }
       else {
         return user;
       }
    })
    .catch( e => {
      let username = username;
      let password = 'nasdlfjasdlfjsadflkjsadflfjksd';
      return this.create({username,password});
    });

};

users.methods.can = function(capability) {
  return true;
  return capabilities[this.role].includes(capability);
};

// Generate a JWT from the user id and a secret
users.methods.generateToken = function() {
  let tokenData = {
    id:this._id,
  };
  return jwt.sign(tokenData, process.env.SECRET || 'changeit' );
};

module.exports = mongoose.model('users', users);
