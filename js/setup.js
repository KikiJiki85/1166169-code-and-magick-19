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

var wizardsArr = createWizardsArr();

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardTemplateObject = wizardTemplate.querySelector('.setup-similar-item');
var wizardName = wizardTemplate.querySelector('.setup-similar-label');
var wizardCoatColor = wizardTemplate.querySelector('.wizard-coat');
var wizardEyesColor = wizardTemplate.querySelector('.wizard-eyes');


wizardName.textContent = wizardsArr[0].name;
wizardCoatColor.setAttribute('fill', wizardsArr[0].coatColor);
wizardEyesColor.setAttribute('fill', wizardsArr[0].eyesColor);
var wizardNew = wizardTemplateObject.cloneNode(true);

var setupSimilar = document.querySelector('.setup-similar');
var wizardSimilarList = setupSimilar.querySelector('.setup-similar-list');
wizardSimilarList.appendChild(wizardNew);

setupSimilar.classList.remove('hidden');
