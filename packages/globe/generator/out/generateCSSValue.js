"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateCSSValue;

var _cssInJsUtils = require("css-in-js-utils");

var math = {
  add: true,
  sub: true,
  mul: true,
  div: true
};
var stringFn = {
  rgba: true,
  rgb: true,
  hsl: true,
  hsla: true,
  percentage: true
};

function resolveMath(value) {
  if (value.callee === 'add') {
    return value.params.reduce(function (sum, param) {
      return sum + resolveMath(param);
    }, 0);
  }

  if (value.callee === 'sub') {
    return value.params.reduce(function (sum, param) {
      return sum - resolveMath(param);
    }, resolveMath(value.params[0]) * 2);
  }

  if (value.callee === 'mul') {
    return value.params.reduce(function (sum, param) {
      return sum * resolveMath(param);
    }, 1);
  } // if (value.callee === 'add') {
  //   return value.params.reduce((sum, param) => sum + resolveMath(param), 0)
  // }


  return value.value;
}

function generateFunction(value, property, unit) {
  var floatingPercentage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (value.callee === 'raw') {
    return generateCSSValue(value.params[0], property, false);
  }

  if (value.callee === 'percentage') {
    if (floatingPercentage || property === 'opacity') {
      return parseFloat(generateCSSValue(value.params[0], property, false)) / 100;
    }

    return generateCSSValue(value.params[0], property, false) + '%';
  }

  if (math[value.callee]) {
    return generateCSSValue({
      type: 'Integer',
      value: resolveMath(value)
    }, property, unit);
  }

  if (stringFn[value.callee]) {
    return value.callee + '(' + value.params.map(function (param) {
      return generateCSSValue(param, property, false, true);
    }).join(', ') + ')';
  }
}

function generateCSSValue(value, property) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var floatingPercentage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (value.type === 'Integer') {
    return (value.negative ? '-' : '') + value.value + (unit && !(0, _cssInJsUtils.isUnitlessProperty)(property) ? 'px' : '');
  }

  if (value.type === 'FunctionExpression') {
    return generateFunction(value, property, unit, floatingPercentage);
  }

  if (value.type === 'String') {
    return value.value;
  }

  if (value.type === 'Float') {
    return (value.negative ? '-' : '') + value.integer + '.' + value.fractional + (unit && !(0, _cssInJsUtils.isUnitlessProperty)(property) ? 'px' : '');
  }

  if (value.type === 'Identifier') {
    return (0, _cssInJsUtils.hyphenateProperty)(value.value);
  }

  return value.value;
}