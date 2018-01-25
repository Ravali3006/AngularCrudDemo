var myApp = angular.module("Demo", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when("/Home", {
        templateUrl: "views/Home.html",
        controller: "homecontroller"
    })
        .when("/Add", {
            templateUrl: "views/Add.html",
            controller: "addcontroller"
        })
        .when("/Edit", {
            templateUrl: "views/Edit.html",
            controller: "editcontroller"
        })
        .when("/Delete", {
            templateUrl: "views/Delete.html",
            controller: "deletecontroller"
        })

    $locationProvider.html5Mode(true);
})
    .controller("homecontroller", function ($scope, $http) {
        $http.get("http://localhost:61268/api/Customers").then(function (response) {
            $scope.Customer = response.data;
        });
           
        $scope.selected = {};
        $scope.gettemplate = function (c) {
            if (c.CustomerId === $scope.selected.CustomerId) {
                return 'edittemp';
            }
            else return 'hometemp';
        };
        $scope.editcus = function (c) {
            $scope.selected = angular.copy(c);
        };
        $scope.deletecus = function (c) {
            var index = $scope.Customer.indexOf(c);
            $scope.Customer.splice(index, 1);
        };
        $scope.reset = function () {
            $scope.selected = {};
        };
        $scope.savecustdetails = function (index) {
            $scope.Customer[index] = angular.copy($scope.selected);
            $scope.reset();
        };
        $scope.addcust = function (index) {
            $scope.Customer[index] = angular.copy($scope.selected);
            $scope.reset();
        }


    })

    .controller("addcontroller", function ($scope) {

    })
    .controller("editcontroller", function ($scope) {

    })
    .controller("deletecontroller", function ($scope) {
        $scope.message = "delete page";
    });
