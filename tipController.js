function TipController($scope, $http) {
    var CLIENT_ID = 'FXC12MK3TRQTCQIN5XF4LXPN4IZA3VGELNCSGSAGO140TKYW',
        CLIENT_SECRET = '01ZWAIGUHEQMROF2XIHIBJJOD1UW4BWH4C0U2CRNGPABZTAN',
        VENUE_ID = '4d551ea816a6b60cf2fa46f8';

    $http.get(
        'http://api.foursquare.com/v2/venues/' + VENUE_ID + '/tips',
        {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET
        }
    ).success(
        function (data) {
            console.log(data);
            $scope.tips = data.response;
        }
    );
};