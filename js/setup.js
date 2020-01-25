'use strict';
var namesArr = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnamesArr = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColorArr = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColorArr = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizardTemplate = document.querySelector('#similar-wizard-template').content;

// Функция выбора случайного элемента массива
var getArrRandomElement = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// Функция выбора случайного имени и фамилии
var generateName = function (names, surnames) {
  var randomName = getArrRandomElement(names);
  var randomSurname = getArrRandomElement(surnames);
  return randomName + ' ' + randomSurname;
};

// Функция создания массива из 4х случайных волшебников
var createWizardsArr = function () {
  var array = [];
  for (var i = 0; i < 4; i++) {
    var wizardObj = {
      name: generateName(namesArr, surnamesArr),
      coatColor: getArrRandomElement(coatColorArr),
      eyesColor: getArrRandomElement(eyesColorArr)
    };
    array[i] = wizardObj;
  }
  return array;
};

// Функция подготовки шаблона и вставки волшебников в canvas
var renderWizardsList = function (array) {
  // Переменные для создания шаблона и его подготовки к отрисовке
  var wizardTemplateObject = wizardTemplate.querySelector('.setup-similar-item');

  for (var i = 0; i < array.length; i++) {
    // Создание ноды
    var wizardNew = wizardTemplateObject.cloneNode(true);
    // Заполнение ноды нужной информацией из массива
    wizardNew.querySelector('.setup-similar-label').textContent = array[i].name;
    wizardNew.querySelector('.wizard-coat').setAttribute('fill', array[i].coatColor);
    wizardNew.querySelector('.wizard-eyes').setAttribute('fill', array[i].coatColor);

    // Вставка волшебника(ноды)
    wizardSimilarList.appendChild(wizardNew);
  }
};

// Создает массив волшебников
var wizardsArr = createWizardsArr();

// Показывает блок настроек setup Игры
var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

// Переменные для вставки волшебников
var setupSimilar = document.querySelector('.setup-similar');
var wizardSimilarList = setupSimilar.querySelector('.setup-similar-list');

// Отрисовка волшебников
renderWizardsList(wizardsArr);

// Показывает блок похожих персонажей
setupSimilar.classList.remove('hidden');
