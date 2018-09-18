(function (window) {
    "use strict";
    var tablist = document.getElementById('tablist'),
        tablistButtons = toArray(tablist.children),
        tabContents = toArray(document.getElementsByClassName('tab-widget__content'));

    
    tablist.addEventListener("click", function (e) {
        if (e.target.nodeName !== "BUTTON") {
            return false;
        }

        e.preventDefault();
        activateTab(e.target);
        displayTabContent(getAriaControls(e.target)); 
    });

    function displayTabContent(tabContent) {
        tabContents.forEach(function(content) {
            content.setAttribute('hidden', true);
        });

        var activeContent = document.getElementById(tabContent); 
        activeContent.removeAttribute('hidden');
    }

    function activateTab(el) {
        tablistButtons.forEach(function(tablistButton) {
            if (el.id === tablistButton.id) {
                tablistButton.setAttribute("aria-selected", true);
                tablistButton.classList.add('tablist__tab--active');
            } else {
                tablistButton.setAttribute("aria-selected", false);
                tablistButton.classList.remove('tablist__tab--active');
            }
        });
    }

    function getAriaControls(el) {
        return el.getAttribute("aria-controls");
    }

    function toggleAriaSelected(el) {
        var isAriaSelected = !JSON.parse(el.getAttribute("aria-selected"));

        el.setAttribute("aria-selected", isAriaSelected);
        return isAriaSelected;
    }

    function toArray(obj) {
        var array = [];
        // iterate backwards ensuring that length is an UInt32
        for (var i = obj.length >>> 0; i--;) {
            array[i] = obj[i];
        }
        return array;
    }

})(window || {});