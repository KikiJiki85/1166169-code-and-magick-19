'use strict';
(function () {
  var MAX_SIMILAR_WIZARDS = 4;
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var setupSimilar = document.querySelector('.setup-similar');
  var wizardSimilarList = setupSimilar.querySelector('.setup-similar-list');
  var userDialog = document.querySelector('.setup');

  // Функция подготовки шаблона и вставки волшебников в canvas
  var renderWizard = function (wizard) {
    var wizardTemplateObject = wizardTemplate.querySelector('.setup-similar-item');
    var wizardNew = wizardTemplateObject.cloneNode(true);
    wizardNew.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardNew.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardNew.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardNew;
  };

  window.render = function (data) {
    var fragment = document.createDocumentFragment();
    wizardSimilarList.innerHTML = ''; // очистка рендера перед Обновлением
    for (var i = 0; i < MAX_SIMILAR_WIZARDS; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    wizardSimilarList.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
