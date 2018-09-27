var toggleModal = function(className) {
    var toggleButtons = document.getElementsByClassName(className);

    Array.prototype.forEach.call(toggleButtons, function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.getElementById(e.target.dataset.target); 
            target.classList.toggle('is-active');
        });
    });
};

export default toggleModal;