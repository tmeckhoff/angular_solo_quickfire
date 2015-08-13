var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){
    $scope.note = {};

    $scope.heading = "Here is your message: ";

    $scope.getData = function(res){
        //GET
        $http.get('/data').then(function(res){
            console.log(res);
            $scope.kittyFooFoo = res.data
        });
        //lines 10-12 resemble what we did with an ajax call
    };

    $scope.updateMessage = function(note){
        //POST
        console.log(note);
        $scope.hello = "Hello "
        $http.post('/data', note).then($scope.getData());

    };
    $scope.getData();
}]);


