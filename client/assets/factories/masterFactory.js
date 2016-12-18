app.factory('masterFactory', ['$http', function($http){
  var users = [];

  function MasterFactory(){
    var _this = this;

    this.getQuestions = function(callback){
      $http.get('/question').then(function(response){
        if(response.data.err){
          console.log(response.data)
          console.log("and error occured trying to get all questions")
        } else{
          if(typeof(callback) === "function"){
            callback(response.data)
          }
        }
      })
    }

    this.createQuestion = function(question, callback){
      $http.post('/question', question).then(function(response){
        if(response.data.err){
          console.log(response.data)
          console.log("An error occured trying to post a question")
          if(typeof(callback) === 'function'){
            callback(response.data)
          }
        } else{
          if(typeof(callback) === 'function'){
            callback(response.data)
          }
        }
      })
    }

    this.getOneQ = function(id, callback){
      $http.get(`/question/${id}`).then(function(response){
        if(response.data.err){
          console.log(response.data)
          console.log("An error occured trying to grab specific data")
          callback({err:resposne.data})
        } else{
          if(typeof(callback) === 'function'){
            callback(response.data)
          }
        }
      })
    }

    this.addA = function(id,answer,callback){
      $http.post(`/question/${id}/new_answer`,answer).then(function(response){
        if(response.data.err){
          console.log(response.data)
          console.log("An error occured trying to post an answer")
          callback({err:response.data.err})
        } else{
          callback(response.data)
        }
      })
    }

    this.like = function(id,like_no,callback){
      console.log(like_no+1)
      var data = {like:like_no + 1}
      $http.post(`/answer/${id}`, data).then(function(response){
        if(response.data.err){
          console.log(response.data)
          console.log("An error occured trying to post an answer")
          callback({err:response.data.err})
        } else{
          callback(response.data)
        }
      })
    }
  }
  return new MasterFactory();
}])
