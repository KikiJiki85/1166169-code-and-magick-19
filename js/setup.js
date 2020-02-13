
'use strict';
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupSimilar = document.querySelector('.setup-similar');
var wizardSimilarList = setupSimilar.querySelector('.setup-similar-list');

// Функция подготовки шаблона и вставки волшебников в canvas
var renderWizardsList = function (array) {
  // Переменные для создания шаблона и его подготовки к отрисовке
  var wizardTemplateObject = wizardTemplate.querySelector('.setup-similar-item');

  for (var i = 0; i < array.length; i++) {
    // Создание ноды
    var wizardNew = wizardTemplateObject.cloneNode(true);
    // Заполнение ноды нужной информацией из массива
    wizardNew.querySelector('.setup-similar-label').textContent = array[i].name;
    wizardNew.querySelector('.wizard-coat').style.fill = array[i].coatColor;
    wizardNew.querySelector('.wizard-eyes').style.fill = array[i].eyesColor;
    // Вставка волшебника(ноды)
    wizardSimilarList.appendChild(wizardNew);
  }
};

// Создает массив волшебников
var wizardsArr = window.data.createWizardsArr();

// Отрисовка волшебников
renderWizardsList(wizardsArr);
