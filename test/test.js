var supertest = require('supertest')
var should = require('should')

var server = supertest.agent('localhost:3000')

describe('unit test', function() {

  it('should show home page', function(done) {
    server.get('/')
    .expect(200)
    done()
  })

  it('should return about page', function(done) {
    server.get('/about')
    done()
  })

})
