var Ictrl = function($scope, $location, $cookies){

  this.login = function(name){
    $cookies.put('name', name)
    $location.path('/welcome')
  }

}


app.controller('IndexController', ['$scope','$location', '$cookies', Ictrl])
