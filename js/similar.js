'use strict';
(function () {
  var wizards = [];
  var coatColor;
  var eyesColor;
  var setupBlock = document.querySelector('.setup');
  var wizardCoat = setupBlock.querySelector('.wizard-coat');
  var wizardEyes = setupBlock.querySelector('.wizard-eyes');

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.render(wizards.slice().
      sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
        }
        return rankDiff;
      }));
  };

  var onWizardCoatClick = function () {
    var playerWizardCoatColor = window.data.getArrRandomElement(window.data.coatColorArr);
    wizardCoat.style.fill = playerWizardCoatColor;
    setupBlock.querySelector('.setup-player').querySelector('input[name="coat-color"]').value = playerWizardCoatColor;
    coatColor = playerWizardCoatColor;
    window.debounce(updateWizards);
  };

  var onWizardEyesClick = function () {
    var playerWizardEyesColor = window.data.getArrRandomElement(window.data.eyesColorArr);
    wizardEyes.style.fill = playerWizardEyesColor;
    setupBlock.querySelector('.setup-player').querySelector('input[name="eyes-color"]').value = playerWizardEyesColor;
    eyesColor = playerWizardEyesColor;
    window.debounce(updateWizards);
  };

  var successHandler = function (data) {
    wizards = data;
    window.render(data);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: goldenrod;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '35px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  window.similar = {
    errorHandler: errorHandler,
    onWizardCoatClick: onWizardCoatClick,
    onWizardEyesClick: onWizardEyesClick,
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
  };
})();
