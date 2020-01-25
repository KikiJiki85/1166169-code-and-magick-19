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
var renderWizardsList = function (array, name, coatColor, eyesColor) {
  for (var i = 0; i < array.length; i++) {
    // Подготовка информации о волшебнике
    name.textContent = array[i].name;
    coatColor.setAttribute('fill', array[i].coatColor);
    eyesColor.setAttribute('fill', array[i].eyesColor);
    // Вставка волшебника
    var wizardNew = wizardTemplateObject.cloneNode(true);
    wizardSimilarList.appendChild(wizardNew);
  }
};

// Создает массив волшебников
var wizardsArr = createWizardsArr();

// Показывает блок настроек setup Игры
var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

// Переменные для создания шаблона и его подготовки к отрисовке
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardTemplateObject = wizardTemplate.querySelector('.setup-similar-item');
var wizardName = wizardTemplate.querySelector('.setup-similar-label');
var wizardCoatColor = wizardTemplate.querySelector('.wizard-coat');
var wizardEyesColor = wizardTemplate.querySelector('.wizard-eyes');

// Переменные для вставки волшебников
var setupSimilar = document.querySelector('.setup-similar');
var wizardSimilarList = setupSimilar.querySelector('.setup-similar-list');

// Отрисовка волшебников
renderWizardsList(wizardsArr, wizardName, wizardCoatColor, wizardEyesColor);

// Показывает блок похожих персонажей
setupSimilar.classList.remove('hidden');
