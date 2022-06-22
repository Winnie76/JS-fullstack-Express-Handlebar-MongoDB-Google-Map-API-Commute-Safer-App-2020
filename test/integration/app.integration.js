var expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../../app');


describe('integration test', function() {
    describe('Tips', function(){
        context('check if we can render the pages', function(){
            it('homepage', function(done){
                supertest(app)
                .get('/')
                .send({})
                .end(function(err, res) {
                    expect(res.statusCode).to.equal(200);
                    done();
                })
            });
            it('post a tip', function(done){
                supertest(app)
                .get('/tip')
                .send({})
                .end(function(err, res) {
                    expect(res.statusCode).to.equal(200);
                    done();
                })
            });

           })
        })


    describe('addTip', function(){
        context('check if we can add a tip', function(){
            it('post a tip', function(done){
                let newTip = {name:'testing tip'};
                  supertest(app)
                  .post('/tip')
                  .send(newTip)
                  .end(function(err, res) {
                      expect(res.statusCode).to.equal(302);
                      done();
                  })
                }).timeout(10000)
              })
            })

})
