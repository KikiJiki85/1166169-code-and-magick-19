'use strict';
(function () {
  var setupBlock = document.querySelector('.setup');
  var setupFireball = setupBlock.querySelector('.setup-fireball-wrap');

  var onFireballClick = function () {
    var playerFireballColor = window.data.getArrRandomElement(window.data.fireballColorArr);
    setupFireball.style.background = playerFireballColor;
    setupFireball.querySelector('input').value = playerFireballColor;
  };

  window.colorize = {

    setupFireball: setupFireball,
    onFireballClick: onFireballClick
  };

})();
