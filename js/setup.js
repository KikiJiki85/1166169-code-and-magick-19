
'use strict';
(function () {
  var MAX_SIMILAR_WIZARDS = 4;

  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var setupSimilar = document.querySelector('.setup-similar');
  var wizardSimilarList = setupSimilar.querySelector('.setup-similar-list');
  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  // Функция подготовки шаблона и вставки волшебников в canvas
  var renderWizard = function (wizard) {
    // Переменные для создания шаблона и его подготовки к отрисовке
    var wizardTemplateObject = wizardTemplate.querySelector('.setup-similar-item');
    // Создание ноды
    var wizardNew = wizardTemplateObject.cloneNode(true);
    // Заполнение ноды нужной информацией из массива
    wizardNew.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardNew.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardNew.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    // Вставка волшебника(ноды)
    // wizardSimilarList.appendChild(wizardNew);
    return wizardNew;
  };

  // Создает массив волшебников
  // var wizardsArr = window.data.createWizardsArr();
  // Отрисовка волшебников
  // renderWizardsList(wizardsArr);

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < MAX_SIMILAR_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    wizardSimilarList.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
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

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });

})();
