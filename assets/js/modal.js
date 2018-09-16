(function() {
    "use strict";

    var modalClose = document.getElementById('close-login-btn');
    var loginBtn = document.getElementById('login-btn');

    modalClose.addEventListener('click', function(e) {
        var elementNode = e.target; 

        while(elementNode !== null && !elementNode.classList.contains('overlay')) {
            elementNode = elementNode.parentNode;
        }

        if (elementNode.classList.contains('overlay')) {
            elementNode.classList.toggle('hide');
        }
    });

    loginBtn.addEventListener('click', function(e) {
        var targetElement = document.getElementById(e.target.getAttribute('data-target'));
        
        targetElement.classList.toggle('active');
    });
})();