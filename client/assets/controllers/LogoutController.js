var lctrl = function($scope, $location, $cookies){
  $cookies.remove('name')
  $location.path('/')
}



app.controller('LogoutController', ['$scope','$location', '$cookies', lctrl])
