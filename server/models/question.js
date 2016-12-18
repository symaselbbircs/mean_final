var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var QuestionsSchema = new Schema({
  question: {type:String, required: true, minlength: 10},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
  description: {type:String, minlength:2}
},{timestamps:{
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}});

var QuestionsSchema = mongoose.model('Question', QuestionsSchema);


console.log("question model uploaded!")
