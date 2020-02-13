'use strict';
(function () {
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

  var fireballColorArr = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
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

  window.data = {
    coatColorArr: coatColorArr,
    eyesColorArr: eyesColorArr,
    fireballColorArr: fireballColorArr,
    createWizardsArr: createWizardsArr,
    getArrRandomElement: getArrRandomElement,
  };
})();
