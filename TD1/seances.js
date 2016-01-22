/**
 * Created by julien on 1/8/16.
 */

var menuApp = angular.module('menuApp', []);
    menuApp.controller('menuController', function($scope, $http) {

        $http.get("menu.json")
            .then(function(response) {$scope.menuList = response.data.Navigation;})

    });

var app = angular.module('app', []);
    app.controller('seancesCtrl', function($scope, $http, $sce) {
        $http.get("seances.json").then(function(response) {
            $scope.seances = angular.forEach(response.data, function (seance, index, tableau) {
                tableau[index] = angular.forEach(seance, function(valeur, cle, tableau) {
                    tableau[cle] = $sce.trustAsHtml(valeur);
                });
            });
        });
    });
