(function(window, undefined) {
  window.Carousel = function(id) {
    var wrapper = document.createElement('div');
    var outer = document.getElementById(id)
    var currentPage;
    var numberPages;

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

      currentPage = 1;
      var outerWidth = parseInt(window.getComputedStyle(outer).width, 10);

      numberPages = Math.ceil(elementsWidth / outerWidth);
    };

    var makeButtons = function () {
      var prevButton = document.createElement('button');
      var nextButton = document.createElement('button');

      prevButton.innerHTML = 'prev';
      nextButton.innerHTML = 'next';

      outer.appendChild(prevButton);
      outer.appendChild(nextButton);

      prevButton.addEventListener('click', function () {
        alert('prev!');
        prevTrigger();
      });

      nextButton.addEventListener('click', function () {
        alert('next!');
        nextTrigger();
      });
    };

    var nextTrigger = function() {
    };

    var prevTrigger = function() {
    };

    return {
      init: init,
      prevTrigger: prevTrigger,
      nextTrigger: nextTrigger
    }

  };
})(window, undefined);
