function MenuController($scope, $http) {
    $http.get('dailymenu.json').success(
        function (data) {
            $scope.menu = data;
        }
    );
};