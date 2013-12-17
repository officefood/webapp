function MenuController($scope, $http) {
    $http.get('//api.officefood.hu/dailymenu.json').success(
        function (data) {
            $scope.menu = data;
        }
    );
};