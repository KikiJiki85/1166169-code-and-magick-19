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

var fireballColorArr = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
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
    wizardNew.querySelector('.wizard-coat').style.fill = array[i].coatColor;
    wizardNew.querySelector('.wizard-eyes').style.fill = array[i].eyesColor;
    // wizardNew.querySelector('.wizard-coat').setAttribute('fill', array[i].coatColor);
    // wizardNew.querySelector('.wizard-eyes').setAttribute('fill', array[i].coatColor);

    // Вставка волшебника(ноды)
    wizardSimilarList.appendChild(wizardNew);
  }
};

// Создает массив волшебников
var wizardsArr = createWizardsArr();

// Переменные для вставки волшебников
var setupSimilar = document.querySelector('.setup-similar');
var wizardSimilarList = setupSimilar.querySelector('.setup-similar-list');

// Отрисовка волшебников
renderWizardsList(wizardsArr);

// Показывает блок похожих персонажей
setupSimilar.classList.remove('hidden');

// Работа с событиями
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setupBlock = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupBlock.querySelector('.setup-close');
var userNameInput = setupBlock.querySelector('.setup-user-name');

var popupEscPressHandler = function (evt) {
  if (evt.key === ESC_KEY && !(userNameInput === document.activeElement)) {
    closePopup();
  }
};

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
};

// Показывает блок настроек setup Игры
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

// Перевод ошибок ввода на русский язык - событие invalid
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    // Самое главное при работе с обработчиками валидации — не забыть сбросить значение поля, если это значение стало корректно.
    userNameInput.setCustomValidity('');
  }
});

// Изменения цвета мантии персонажа по нажатию.
var wizardCoat = setupBlock.querySelector('.wizard-coat');
var wizardEyes = setupBlock.querySelector('.wizard-eyes');
var setupFireball = setupBlock.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  var playerWizardCoatColor = getArrRandomElement(coatColorArr);
  wizardCoat.style.fill = playerWizardCoatColor;
  setupBlock.querySelector('.setup-player').querySelector('input[name="coat-color"]').value = playerWizardCoatColor;
});

wizardEyes.addEventListener('click', function () {
  var playerWizardEyesColor = getArrRandomElement(eyesColorArr);
  wizardEyes.style.fill = playerWizardEyesColor;
  setupBlock.querySelector('.setup-player').querySelector('input[name="eyes-color"]').value = playerWizardEyesColor;

});

setupFireball.addEventListener('click', function () {
  var playerFireballColor = getArrRandomElement(fireballColorArr);
  setupFireball.style.background = playerFireballColor;
  setupFireball.querySelector('input').value = playerFireballColor;
});
