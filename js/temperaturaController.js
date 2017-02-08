pressione.controller('temperaturaController',  function ($scope, $http) {
        var vm = this;
        vm.init = function () {
            vm.resetTemp();
            $http.get("../ng-pa/temperatura.php").then(function (response) {
                        $scope.table = response.data;
                    });
                    
        };
        vm.cancTemp = function (id) {
            $http.get("../ng-pa/temperatura.php?act=del&id=" + id)
                    .then(function (response) {
                        $scope.table = response.data;
                    });
        };
        vm.addTemp = function () {
            $http.post("../ng-pa/temperatura.php", vm.newMisurazione).then(function (response) {
                        $scope.table = response.data;
                    });
                    vm.resetTemp();
        };
        vm.resetTemp = function () {
            vm.newMisurazione = {datamisurazione: null, valore: null};
        };
        vm.init();
    });