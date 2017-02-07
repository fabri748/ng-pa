var pressione = angular.module('pressione',[] );

pressione.controller('pressioneController', function($scope,$http){ 
        var vm = this;
            vm.init=function (){
                $http.get("../ng-pa/elenco.php")
                        .then(function(response){
                            $scope.table =response.data;
                    });
                };
                vm.init();
        });