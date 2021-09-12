const request = require('supertest');
const server = require('../app');

describe('Server', () => {
  afterAll(() => {
    server.close(() => {
      console.log('\nServer closed');
    });
  });

  describe('GET /romannumeral', () => {
    it('should responds with json when there are valid query params ', (done) => {
      request(server)
        .get('/romannumeral?query=123')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body.result).toEqual('CXXIII');
          expect(response.body.result.error).toBeUndefined();
          done();
        })
        .catch(err => done(err))
    });

    it('should respond with error message when there is no query params', (done) => {
      request(server)
        .get('/romannumeral')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body.result.error).toBeDefined();
          expect(response.body.result.error).toEqual('Enter an integer from 1 to 2,200,000,000.');
          done();
        })
        .catch(err => done(err))
    });
  });

  it('should handle bad requests', (done) => {
    request(server)
      .get('/invalid-page')
      .expect(400, done)
  });
})
