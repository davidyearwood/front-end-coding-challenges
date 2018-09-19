(function() {
    "use strict";
    var toggleButtons = document.getElementsByClassName('js-urbank-toggle');

    Array.prototype.forEach.call(toggleButtons, function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.getElementById(e.target.dataset.target); 
            target.classList.toggle('is-active');
        });
    });

})();