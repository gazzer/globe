"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseReset = baseReset;
exports.rootReset = rootReset;
var viewResetStyle = "display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;overflow:hidden;-webkit-overflow-scrolling:touch;align-self:stretch;flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-shrink:0;max-width:100%;box-sizing:border-box";
var textResetStyle = "";
var rootResetStyle = "".concat(viewResetStyle, ";max-height:100vh");

function baseReset(generateClassName) {
  var viewClassName = generateClassName('view');
  var textClassName = generateClassName('text');
  return ".".concat(viewClassName, "{").concat(viewResetStyle, "}.").concat(textClassName, "{").concat(textResetStyle, "}");
}

function rootReset() {
  var rootNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
  return "".concat(rootNode, "{").concat(rootResetStyle, "}");
}