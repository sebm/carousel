(function(window, undefined) {
  window.Carousel = function(id) {
    var wrapper = document.createElement('div');
    var outer = document.getElementById(id)

    var init = function() {
      initWrapper();
      makeButtons();
    };

    var initWrapper = function () {

      wrapper.id = 'imgWrapper'

      var nodes = outer.childNodes;
      var elementsWidth = 0;
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeType === Node.ELEMENT_NODE
          && nodes[i].tagName === 'IMG'
        ) {
          elementsWidth += nodes[i].width;
          wrapper.appendChild(nodes[i]);
        }
      }
      outer.appendChild(wrapper);
      wrapper.style.width = elementsWidth + 'px';
      outer.style.overflow = 'hidden';
    };

    var makeButtons = function () {

    }

    return {
      init: init
    }

  };
})(window, undefined);
