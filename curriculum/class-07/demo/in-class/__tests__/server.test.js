'use strict';

const superGoose = require('./supergoose.js');
const {app} = require('../lib/server.js');

const mockRequest = superGoose(app);

describe('my server', () => {

  it('get /api/v1/house returns 200', () => {

    return mockRequest.get('/api/v1/house')
      .then( results => {
        expect(results.status).toBe(200);
      });

  });

});
