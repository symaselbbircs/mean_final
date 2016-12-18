var mongoose = require('mongoose');
    questions = require('./../controllers/questions'),
    answers = require('./../controllers/answers');
    // orders = require('./../controllers/orders');


module.exports = function(app){

  //ROUTES FOR Question CONTROLLER
  app.get('/question', function(req,res){
    questions.show(req,res);
  })
  app.get('/question/:id', function(req,res){
    questions.index(req,res)
  })
  app.post('/question', function(req,res){
    questions.create(req,res)
  })

  //ROUTES FOR Answer CONTROLLER
  app.post('/question/:id/new_answer', function(req,res){
    answers.create(req,res)
  })
  app.post('/answer/:id', function(req,res){
    answers.addLike(req,res)
  })
}
console.log('Routes loaded!');
