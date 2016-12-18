var Wctrl = function($scope, $location, masterFactory, $cookies){
  if(!$cookies.get('name')){
    $location('/')
  } else{
    $scope.name = $cookies.get('name')
  }

  var index = function(){
    masterFactory.getQuestions(function(all_questions){
      console.log(all_questions)
      console.log("Controller received Questions!")
      $scope.questions = all_questions
    })
  }
  index();


}


app.controller('WelcomeController', ['$scope','$location','masterFactory', '$cookies', Wctrl])
