// ctx — канвас на котором рисуется игра.
// names — массив, с именами игроков прошедших уровень. Имя самого игрока — Вы. Массив имён формируется случайным образом.
// times — массив, по длине совпадающий с массивом names. Массив содержит время прохождения уровня соответствующего игрока из массива names. Время прохождения уровня задано в миллисекундах.
'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, font, color, text, x, y) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var renderBar = function (ctx, player, time, i, maxTime) {
  if (player === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl( 235,' + Math.floor(Math.random() * 100) + '%, 50%)';
  }
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - BAR_WIDTH, BAR_WIDTH, -(BAR_HEIGHT * time / maxTime));
};

var getMaxElement = function (arr) {
  if (arr.length) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  } else {
    return 'Вы передали пустой массив';
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, '16px "PT Mono"', '#000', 'Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 30);
  renderText(ctx, '16px "PT Mono"', '#000', 'Список результатов:', CLOUD_X + 20, CLOUD_Y + 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - CLOUD_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, 230 - (BAR_HEIGHT * times[i] / maxTime));
    renderBar(ctx, players[i], times[i], i, maxTime);
  }
};

