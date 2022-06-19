(function(){
    "use strict";

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.dishes = "";
        $scope.message = "";
        $scope.checkIfTooMuch = function() {
            if($scope.dishes) {
                var dishesArray = $scope.dishes.split(",");
                dishesArray = dishesArray.filter(n => n.trim());
                if(dishesArray.length == 0) {
                    $scope.message = "Please enter data first"
                } else if(dishesArray.length <=3) {
                    $scope.message = "Enjoy!"
                } else if(dishesArray.length > 3) {
                    $scope.message = "Too much!"
                }
            } else {
                $scope.message = "Please enter data first"
            }
        }
    }
})();