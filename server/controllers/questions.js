var mongoose = require('mongoose');
    Question = mongoose.model("Question");


function QuestionController(){

  this.show = function(req,res){
    Question.find({})
    .populate('answers')
    .exec(function(err,questions){
      if(err){
        console.log(err)
        res.json(err)
      } else{
        console.log(questions)
        console.log("Retrieved questions")
        res.json(questions)
      }
    })
  }

  this.index = function(req,res){
    Question.findOne({_id:req.params.id})
    .populate('answers')
    .exec(function(err,question){
      if(err){
        console.log(err)
        res.json({err:err})
      } else{
        console.log(question)
        console.log("Found Question!")
        res.json(question)
      }
    })
  }

  this.create = function(req,res){
    var question = new Question(req.body)
    question.save(function(err){
      if(err){
        console.log(err)
        res.json({err:err})
      } else {
        console.log("Saved Question!")
        res.json(true)
      }
    })
  }

}

module.exports = new QuestionController();
