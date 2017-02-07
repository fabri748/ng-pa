pressione.controller('pressioneController',["$scope", "$http", function ($scope, $http) {
    var vm = this;
    vm.init = function () {
        $http.get("../ng-pa/elenco.php")
                .then(function (response) {
                    $scope.table = response.data;
                });
    };
    vm.delete = function (id) {
        $http.get("../ng-pa/elenco.php?act=del&id="+id)
                .then(function (response) {
                    $scope.table = response.data;
        
    });
    };
    vm.init();
    
}]);