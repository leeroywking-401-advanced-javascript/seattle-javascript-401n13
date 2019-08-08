'use strict';

const superagent = require('superagent');

const Users = require('../users-model.js');

module.exports = exports = {}

let googleTokenServer = "https://www.googleapis.com/oauth2/v4/token";
let plusServer = "https://www.googleapis.com/plus/v1/people/me/openIdConnect";

exports.authorize = (req) => {

  let code = req.query.code;
  console.log({code});

  return superagent.post(googleTokenServer)
  .type('form')
  .send({
    code: code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: 'http://localhost:3000/oauth',
    grant_type: 'authorization_code'
  })
  .then( response => {
    console.log(response.body.access_token);
    return response.body.access_token;
  })
  .then( token => {
    return superagent.get(plusServer)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return response.body;
    })
  })
  .then(user => {
    return Users.createFromOauth(user.email);
  })
  .then( user => {
    return user.generateToken();
  })

};
