'use strict';
(function () {
  var setupBlock = document.querySelector('.setup');
  var wizardCoat = setupBlock.querySelector('.wizard-coat');
  var wizardEyes = setupBlock.querySelector('.wizard-eyes');
  var setupFireball = setupBlock.querySelector('.setup-fireball-wrap');

  var onWizardCoatClick = function () {
    var playerWizardCoatColor = window.data.getArrRandomElement(window.data.coatColorArr);
    wizardCoat.style.fill = playerWizardCoatColor;
    setupBlock.querySelector('.setup-player').querySelector('input[name="coat-color"]').value = playerWizardCoatColor;
  };

  var onWizardEyesClick = function () {
    var playerWizardEyesColor = window.data.getArrRandomElement(window.data.eyesColorArr);
    wizardEyes.style.fill = playerWizardEyesColor;
    setupBlock.querySelector('.setup-player').querySelector('input[name="eyes-color"]').value = playerWizardEyesColor;

  };

  var onFireballClick = function () {
    var playerFireballColor = window.data.getArrRandomElement(window.data.fireballColorArr);
    setupFireball.style.background = playerFireballColor;
    setupFireball.querySelector('input').value = playerFireballColor;
  };

  window.colorize = {
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
    setupFireball: setupFireball,
    onWizardCoatClick: onWizardCoatClick,
    onWizardEyesClick: onWizardEyesClick,
    onFireballClick: onFireballClick
  };

})();
