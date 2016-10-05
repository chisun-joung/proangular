/**
 * Created by csjoung on 2016. 10. 4..
 */
angular.module("exampleAppTest", [])
    .controller("defaultCtrl", function ($scope, $http, $interval, $timeout, $log) {

        $scope.intervalCounter = 0;
        $scope.timerCounter = 0;

        $interval(function() {
            $scope.intervalCounter++;
        }, 5, 10);

        $timeout(function () {
            $scope.timerCounter++;
        }, 5);

        $http.get("productData.json").success(function (data) {
            $scope.products = data;
            $scope.received = true;
        })

        $scope.counter = 0;
        $scope.incrementCounter = function () {
            $scope.counter++;
        }
    });