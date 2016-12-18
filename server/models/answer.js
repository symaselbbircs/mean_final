var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var AnswerSchema = new Schema({
  answer: {type: String, required:true, minlength:5},
  _question: {type: Schema.Types.ObjectId, ref: "Question"},
  name: {type:String, required:true},
  likes: {type: Number, required:true, default: 0},
  description: {type:String}
},{timestamps:{createdAt:'created_at', updatedAt: 'updated_at'}
});

var Answer = mongoose.model('Answer', AnswerSchema);


console.log("answer model uploaded!")
