var mainModule = angular.module("mainModule", []);

mainModule.controller("mainController", function ($scope, $http, $timeout, $log) {
    $scope.loadingData = false;
    $scope.rawData = [];
    $scope.dividedData = [];

    $scope.splitThemUp = function () {
        var ctr = 0;
        var current = [];
        for (var i = 0; i < $scope.rawData.length; i++) {
            current.push($scope.rawData[i]);
            ctr++;

            if (ctr === 3 || i === ($scope.rawData.length - 1)) {
                $scope.dividedData.push(current);
                ctr = 0;
                current = [];
            }
        }
    };

    $scope.getThings = function () {
        $scope.loadingData = true;
        $http({
            method: 'get',
            url: '_data/movie-list.json'
        }).success(function (data) {
            $scope.rawData = data;
            $scope.splitThemUp();
            $scope.loadingData = false;
            $timeout(function () {
                new WOW().init();
            });
        }).error(function (err) {

        });
    };

    $scope.getThings();
});
