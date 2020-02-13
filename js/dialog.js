'use strict';
(function () {
  var ESC_KEY = 'Escape';

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var userNameInput = setupDialogElement.querySelector('.setup-user-name');
  var setupSimilar = document.querySelector('.setup-similar');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupDialogElement.querySelector('.setup-close');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var onFormEscKeydown = function (evt) {
    if (evt.key === ESC_KEY && !(userNameInput === document.activeElement)) {
      closePopup();
    }
  };
  // Функция показа окна персонажа
  var openPopup = function () {
    setupDialogElement.classList.remove('hidden');
    document.addEventListener('keydown', onFormEscKeydown);
    window.colorize.wizardCoat.addEventListener('click', window.colorize.onWizardCoatClick);
    window.colorize.wizardEyes.addEventListener('click', window.colorize.onWizardEyesClick);
    window.colorize.setupFireball.addEventListener('click', window.colorize.onFireballClick);
  };

  // Функция скрытия окна персонажа
  var closePopup = function () {
    setupDialogElement.classList.add('hidden');
    document.removeEventListener('keydown', onFormEscKeydown);
    window.colorize.wizardCoat.removeEventListener('click', window.colorize.onWizardCoatClick);
    window.colorize.wizardEyes.removeEventListener('click', window.colorize.onWizardEyesClick);
    window.colorize.setupFireball.removeEventListener('click', window.colorize.onFireballClick);
    resetDialogPosition();
  };

  var resetDialogPosition = function () {
    setupDialogElement.style.top = '';
    setupDialogElement.style.left = '';
  };

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

  setupSimilar.classList.remove('hidden');

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

})();
