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
}, 1000);