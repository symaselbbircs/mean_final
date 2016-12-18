var vctrl = function($scope, masterFactory, $cookies, $routeParams, $location){
  if(!$cookies.get('name')){
    console.log("You do not have a name! Please log in")
    $location('/')
  }

  var view = function(){
    masterFactory.getOneQ($routeParams.id, function(response){
      if(response.err){
        console.log(response.err)
        console.log("view controller could not get data from question")
      } else{
        console.log("Received specific question")
        $scope.question = response
      }
    })
  }

  view();

  this.addAnswer = function(answer){
    answer.name = $cookies.get('name')
    masterFactory.addA($routeParams.id, answer, function(response){
      if(response.err){
        console.log(response.err)
        console.log("View Controller received an error when trying to add new answer")
        $scope.error = response.err
      } else{
        console.log(response)
        $location.path('/welcome')
      }
    })
  }

  this.addLike = function(id, like){
    console.log(like)
    masterFactory.like(id,like, function(response){
      if(response.err){
        console.log(response.err)
        console.log("View Controller received an error when trying to add a like")
        $scope.error = response.err
      } else{
        console.log(response)
        view()
      }
    })
  }

}


app.controller('ViewController', ['$scope','masterFactory','$cookies', '$routeParams','$location', vctrl])
