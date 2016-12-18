var mongoose = require('mongoose');
    Answer = mongoose.model("Answer"),
    Question = mongoose.model("Question");


function AnswerController(){

  this.create = function(req,res){
    console.log(req.params.id)
    Question.findOne({_id:req.params.id}, function(err,question){
      var answer = new Answer(req.body)
      answer._question = question._id
      console.log(question.answers)
      console.log(question)
      console.log("from server")
      question.answers.push(answer);
      answer.save(function(err){
        question.save(function(err){
          if(err){
            console.log(err)
            console.log("error pushing answer")
            res.json(err)
          } else{
            console.log("Answer saved!")
            res.json(true)
          }
        })
      })
    })
  }

  this.addLike = function(req,res){
    console.log(req.body)
    console.log("^^^From server^^")
    Answer.update({_id:req.params.id}, {likes:req.body.like}, function(err){
      if(err){
        console.log(err)
        console.log("Could not add like")
        res.json(err)
      } else{
        console.log("Like added!")
        res.json(true)
      }
    })
  }

}

module.exports = new AnswerController();
