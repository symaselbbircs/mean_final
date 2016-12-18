var xctrl = function($scope, $location, masterFactory, $cookies){
  if(!$cookies.get('name')){
    console.log("You do not have a name! Please log in")
    $location('/')
  }
  this.addQuestion = function(question){
    console.log(question)
    console.log("From question controller")
    masterFactory.createQuestion(question, function(res){
      if(res.err){
        console.log(res.err)
        console.log("from Question controller")
        $scope.success = false
        $scope.error = res.err.errors.question.message
      } else{
        $scope.error = false
        $location.path('/welcome')
      }
    })
  }
}


app.controller('QuestionController', ['$scope','$location','masterFactory','$cookies', xctrl])
