import request from 'supertest';

import api from '../core/api';

describe('GET api/v1/main', () => {
  it('should be json', (done) => {
    request(api)
      .get('/api/v1/main/')
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).toEqual(200);
        expect(res.type).toEqual('application/json');
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).not.toBeNull();
        done();
      });
  });

  it('should have a content', (done) => {
    request(api)
      .get('/api/v1/main/')
      .end((err, res) => {
        if (err) done(err);
        expect(res.body).toHaveProperty('version');
        expect(res.body.version).toEqual('0.0.0');
        expect(res.body).toHaveProperty('status');
        expect(res.body.status).toEqual('OK');
        done();
      });
  });
});
