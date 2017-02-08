pressione.controller('pressioneController',  function ($scope, $http) {
        var vm = this;
        vm.init = function () {
            vm.resetMisurazione();
            $http.get("../ng-pa/elenco.php").then(function (response) {
                        $scope.table = response.data;
                    });
                    
        };
        vm.delete = function (id) {
            $http.get("../ng-pa/elenco.php?act=del&id=" + id)
                    .then(function (response) {
                        $scope.table = response.data;

                    });
        };
        vm.addMisurazione = function () {
            $http.post("../ng-pa/elenco.php", vm.newMisurazione).then(function (response) {
                        $scope.table = response.data;
                    });
                    vm.resetMisurazione();
        };
        vm.resetMisurazione = function () {
            vm.newMisurazione = {peso: null, datamisurazione: null, sistolica: null, diastolica: null};
        };
        vm.init();

    });