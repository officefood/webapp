window.setTimeout(function () {
    var navigationElement = document.getElementsByTagName('nav')[0],
        originalHeight = navigationElement.offsetHeight;
    
    document.getElementById('navigationToggler').addEventListener(
        'click',
        function (event) {
            
            event.preventDefault();
            if (navigationElement.className !== 'open') {
                navigationElement.className = 'open';
                navigationElement.style.height = originalHeight + 'px';
            } else {
                navigationElement.className = 'closed';
                navigationElement.style.height = 0 + 'px';
            }
        }
    );
        
    var uploadLinks = document.querySelectorAll('.uploadImage'),
        i = 0;

    for (;i < uploadLinks.length; i += 1) {
            element = uploadLinks[i];
            
            element.addEventListener(
                'click',
                function(event) {
                    event.preventDefault();
                    
                    if (typeof MozActivity  === "function") {
                     var pick = new MozActivity({
                        name: "pick",
                        data: {
                            type: ["image/png", "image/jpg", "image/jpeg"]
                         }
                    });
                            
                    pick.onsuccess(function () {
                        var placeHolder = document.querySelector('.imagePlaceHolder'),
                            img;
                           
                        alert('Yeehaaa');
                        if (this.result.blob.type.indexOf('image') !== -1) {
                            img = document.createElement('img');
                            img.src = window.URL.createObjectURL(this.result.blob);

                            placeHolder.appendChild(img);
                        }
                    }); 
                    
                    pick.onerror(function () {
                        alert('Yey, how cool error it is!');
                    });

                    
                    }
                }

            );
        
    }
            
                

        
    (function () {
    function distanceFrom(points) {
        var lat1 = points.lat1;
        var radianLat1 = lat1 * (Math.PI / 180);
        var lng1 = points.lng1;
        var radianLng1 = lng1 * (Math.PI / 180);
        var lat2 = points.lat2;
        var radianLat2 = lat2 * (Math.PI / 180);
        var lng2 = points.lng2;
        var radianLng2 = lng2 * (Math.PI / 180);
        var earth_radius = 6371;
        var diffLat = (radianLat1 - radianLat2);
        var diffLng = (radianLng1 - radianLng2);
        var sinLat = Math.sin(diffLat / 2);
        var sinLng = Math.sin(diffLng / 2);
        var a = Math.pow(sinLat, 2.0) + Math.cos(radianLat1) * Math.cos(radianLat2) * Math.pow(sinLng, 2.0);
        var distance = earth_radius * 2 * Math.asin(Math.min(1, Math.sqrt(a)));
        return distance.toFixed(3);
    }
    
    addDistances = function (longitude, latitude) {
        var elements = document.querySelectorAll('.distance'),
            length = elements.length,
            i = 0,
            element,
            parts,
            distance;
    
        for (;i < length; i += 1) {
            element = elements[i];
            
            parts = element.innerHTML.split('|');
            if (parts.length === 2) {
                distance = distanceFrom(
                    {
                        lat1: parts[0],
                        lng1: parts[1],
                        lat2: latitude,
                        lng2: longitude
                    }
                );

                element.innerHTML = distance + ' km';
            }
        }
    };
    
    
    locationSuccess = function (position) {
        addDistances(position.coords.longitude, position.coords.latitude);
    };

    locationFailure = function (error) {
        
    };

    if (navigator && navigator.geolocation) {
        navigator.geolocation.watchPosition(locationSuccess, locationFailure);
    }
}());
    
}, 1000);