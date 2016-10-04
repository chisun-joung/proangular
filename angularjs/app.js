/**
 * Created by csjoung on 2016. 10. 4..
 */
angular.module("exampleAppTest", [])
    .controller("defaultCtrl", function ($scope) {
        $scope.counter = 0;
        $scope.incrementCounter = function () {
            $scope.counter++;
        }
    });