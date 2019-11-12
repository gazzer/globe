"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGenerator;

var _utils = require("@elodin/utils");

var _cssInJsUtils = require("css-in-js-utils");

var _keywords = _interopRequireDefault(require("./keywords"));

var _getReset = require("./getReset");

var _generateCSSValue = _interopRequireDefault(require("./generateCSSValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultConfig = {
  devMode: false,
  dynamicImport: false,
  extractCss: true,
  generateFileName: function generateFileName(fileName, moduleName) {
    return (0, _utils.capitalizeString)(fileName) + moduleName + 'Style';
  }
};

function createGenerator() {
  var customConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var config = _objectSpread({}, defaultConfig, {}, customConfig);

  function generate(ast) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var fileName = path.split('/').pop().replace(/[.]elo/gi, '').split('.').map(_utils.capitalizeString).join('');
    var escapedAst = (0, _utils.escapeKeywords)(ast, _keywords.default);
    var css = config.extractCss ? generateCSSFiles(escapedAst, config, fileName) : {};
    var reason = generateReasonFile(escapedAst, config, fileName);
    return _objectSpread({}, css, {}, reason);
  }

  generate.filePattern = [config.generateFileName('*', '') + '.re', config.generateFileName('*', '') + '.bs.js', '*.elo.css'];
  generate.ignorePattern = ['node_modules'];
  return generate;
}

function generateReasonFile(ast, config, fileName) {
  var devMode = config.devMode,
      generateFileName = config.generateFileName,
      dynamicImport = config.dynamicImport,
      extractCss = config.extractCss;
  var moduleName = generateFileName(fileName, ''); // TODO: include fragments

  var styles = ast.body.filter(function (node) {
    return node.type === 'Style';
  });
  var variants = ast.body.filter(function (node) {
    return node.type === 'Variant';
  });
  var imports = extractCss ? styles.reduce(function (imports, module) {
    imports.push('require("./' + moduleName + module.name + '.elo.css")');
    return imports;
  }, []) : [];
  var modules = generateModules(ast, config, moduleName);
  var variantMap = variants.reduce(function (flatVariants, variant) {
    flatVariants[variant.name] = variant.body.map(function (variation) {
      return variation.value;
    });
    return flatVariants;
  }, {});
  var allVariables = (0, _utils.getVariablesFromAST)(ast);
  var variantTypes = Object.keys(variantMap).map(function (variant) {
    return '[@bs.deriving jsConverter]\n' + "type " + variant.toLowerCase() + " =\n  " + variantMap[variant].map(function (val) {
      return '| ' + val;
    }).join('\n  ') + ';';
  }).join('\n\n');
  return _defineProperty({}, moduleName + '.re', 'open Fela;\n\n' + "type extend;\nexternal extend: Js.t('a) => extend = \"%identity\";\n\n" + (!dynamicImport && imports.length > 0 ? imports.map(function (file) {
    return '[%bs.raw {| ' + file + ' |}];';
  }).join('\n') + '\n\n' : '') + (variantTypes ? variantTypes + '\n\n' : '') + modules.join('\n\n'));
}

function generateCSSFiles(ast, _ref2, fileName) {
  var devMode = _ref2.devMode,
      generateFileName = _ref2.generateFileName;
  // TODO: include fragments
  var styles = ast.body.filter(function (node) {
    return node.type === 'Style';
  });
  var variants = ast.body.filter(function (node) {
    return node.type === 'Variant';
  });
  var generatedFileName = generateFileName(fileName, '');
  return styles.reduce(function (files, module) {
    var usedVariants = (0, _utils.getVariantsFromAST)(module);
    var variantMap = variants.reduce(function (flatVariants, variant) {
      if (usedVariants[variant.name]) {
        flatVariants[variant.name] = variant.body.map(function (variation) {
          return variation.value;
        });
      }

      return flatVariants;
    }, {});
    var classes = (0, _utils.generateCSSClasses)(module.body, variantMap, devMode);
    files[generatedFileName + module.name + '.elo.css'] = classes.filter(function (selector) {
      return selector.declarations.length > 0;
    }).map(function (selector) {
      var css = (0, _utils.stringifyCSSRule)(selector.declarations, (0, _utils.getModuleName)(module, devMode) + selector.modifier + selector.pseudo, selector.media ? '  ' : '');

      if (selector.media) {
        return '@media ' + selector.media + ' {\n' + css + '\n}';
      }

      return css;
    }).join('\n\n');
    return files;
  }, {});
}

function generateModules(ast, _ref3, moduleName) {
  var devMode = _ref3.devMode,
      dynamicImport = _ref3.dynamicImport,
      extractCss = _ref3.extractCss,
      viewBaseClassName = _ref3.viewBaseClassName,
      textBaseClassName = _ref3.textBaseClassName;
  // TODO: include fragments
  var styles = ast.body.filter(function (node) {
    return node.type === 'Style';
  });
  var variants = ast.body.filter(function (node) {
    return node.type === 'Variant';
  });
  var variantMap = variants.reduce(function (flatVariants, variant) {
    flatVariants[variant.name] = variant.body.map(function (variation) {
      return variation.value;
    });
    return flatVariants;
  }, {});
  var variantOrder = Object.keys(variantMap);
  return styles.reduce(function (rules, module) {
    var out = generateStyle(module.body, extractCss, {});
    var variables = (0, _utils.getVariablesFromAST)(module);
    var variantStyleMap = generateVariantStyleMap(module.body, variants, extractCss);
    var usedVariants = (0, _utils.getVariantsFromAST)(module);
    var variantNames = Object.keys(usedVariants).sort(function (x, y) {
      return variantOrder.indexOf(x) > variantOrder.indexOf(y) ? 1 : -1;
    });
    var params = [].concat(_toConsumableArray(variables), _toConsumableArray(variantNames));
    var baseClassName = module.format === 'view' && viewBaseClassName || module.format === 'text' && textBaseClassName;
    var className = (baseClassName ? baseClassName + ' ' : '') + (extractCss ? (0, _utils.getModuleName)(module, devMode) : '');
    var variantSwitch = '';

    if (variantNames.length > 0) {
      var combinations = _utils.getArrayCombinations.apply(void 0, _toConsumableArray(variantNames.map(function (variant) {
        return [].concat(_toConsumableArray(variantMap[variant]), ['None']);
      })));

      var combis = combinations.reduce(function (matches, combination) {
        var vari = variantStyleMap.map(function (vari) {
          if (Object.keys(vari.variants).reduce(function (match, variant) {
            var index = variantNames.indexOf(variant);
            return match && combination[index] === vari.variants[variant];
          }, true)) {
            return vari;
          }
        }).filter(Boolean);

        if (vari) {
          matches.push({
            combination: combination,
            style: vari.map(function (vari) {
              return Object.keys(vari.variants).map(function (variant) {
                return vari.variants[variant];
              }).join('');
            })
          });
        }

        return matches;
      }, []);
      variantSwitch = "let get".concat(module.name, "Variants = (").concat(variantNames.map(function (variant) {
        return '~' + variant.toLowerCase();
      }).join(', '), ", ()) => {\n  switch (").concat(variantNames.map(function (v) {
        return v.toLowerCase();
      }).join(', '), ") {\n    ").concat(combinations // .filter(combination => combination.find(comp => comp !== 'None'))
      .map(function (combination) {
        return '| (' + combination.map(function (comb) {
          return comb === 'None' ? 'None' : 'Some(' + comb + ')';
        }).join(', ') + ') => "' + (combination.find(function (val) {
          return val !== 'None';
        }) && combination.reduce(function (hasCombination, value, index) {
          return value === 'None' || usedVariants[variantNames[index]].indexOf(value) !== -1 || hasCombination;
        }, false) ? ' ' + (0, _utils.getModuleName)(module, devMode) + _utils.getValueCombinations.apply(void 0, _toConsumableArray(combination.map(function (comb, index) {
          return comb === 'None' ? '' : devMode ? '__' + variantNames[index] + '-' + comb : '_' + index + '-' + variantMap[variantNames[index]].indexOf(comb);
        }).filter(function (val) {
          return val !== '';
        }))).filter(function (set) {
          return set.length > 0;
        }).map(function (set) {
          return set.join('');
        }).join(' ' + (0, _utils.getModuleName)(module, devMode)) : '') + '"';
      }).join('\n    '), "\n  }\n};");
    }

    var style = '  style({\n' + '    "_className": ' + '"' + className + '"' + (variantSwitch ? ' ++ get' + module.name + 'Variants(' + variantNames.map(function (n) {
      return '~' + (0, _utils.uncapitalizeString)(n);
    }).join(', ') + ', ())' : '') + ',\n' + stringifyStyle(out) + '  })';
    var rule = 'let ' + (0, _utils.uncapitalizeString)(module.name) + ' = (' + (params.length > 0 ? params.map(function (name) {
      return '~' + (0, _utils.uncapitalizeString)(name) + '=?';
    }).join(', ') + ', ()' : '') + ') => {\n' + (dynamicImport && extractCss ? '  [%bs.raw {| import("./' + moduleName + module.name + '.elo.css") |}];\n\n' : '') + style + '\n};';
    rules.push((variantSwitch ? variantSwitch + '\n\n' : '') + rule);
    return rules;
  }, []);
}

function stringifyStyle(style) {
  var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  Object.keys(style).map(function (property) {
    var value = style[property];

    if (_typeof(value) === 'object') {
      // handle extend
      if (Array.isArray(value)) {
        out += '  '.repeat(level) + wrapInString(property) + ': ' + '[|' + value.map(function (extension) {
          return '{\n' + stringifyStyle(extension, '', level + 1) + '  '.repeat(level) + '}';
        }).join(',') + '|],' + '\n';
      } else {
        if (property === 'style') {
          out += '  '.repeat(level) + wrapInString(property) + ': ' + 'extend({\n' + stringifyStyle(value, '', level + 1) + '  '.repeat(level) + '}),\n';
        } else {
          out += '  '.repeat(level) + wrapInString(property) + ': ' + '{\n' + stringifyStyle(value, '', level + 1) + '  '.repeat(level) + '},\n';
        }
      }
    } else {
      out += '  '.repeat(level) + wrapInString(property) + ': ' + value + ',\n';
    }
  });
  return out;
}

function generateStyle(nodes, extractCss) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  nodes.map(function (node) {
    if (node.type === 'Declaration' && (node.dynamic || !extractCss)) {
      style[node.property] = generateValue(node.value, node.property, node.dynamic);
    }

    if (node.type === 'Conditional') {
      if (node.property.type === 'Variable' && node.property.environment) {
        if (node.boolean && ((0, _utils.isPseudoClass)(node.property.value) || (0, _utils.isPseudoElement)(node.property.value))) {
          var nested = generateStyle(node.body, extractCss);

          if (Object.keys(nested).length > 0) {
            style[':' + (0, _cssInJsUtils.hyphenateProperty)(node.property.value)] = nested;
          }
        }

        if ((0, _utils.isMediaQuery)(node.property.value)) {
          var _nested = generateStyle(node.body, extractCss);

          if (Object.keys(_nested).length > 0) {
            style['@media ' + (0, _utils.generateCSSMediaQueryFromNode)(node.boolean ? undefined : node.value.value, node.property.value, node.operator)] = _nested;
          }
        }
      } else {
        if (node.property.type === 'Identifier' && node.value.type === 'Identifier' && node.operator === '=') {
          if (!style.extend) {
            style.extend = [];
          }

          var _nested2 = generateStyle(node.body, extractCss);

          if (Object.keys(_nested2).length > 0) {
            style.extend.push({
              condition: (0, _utils.uncapitalizeString)(node.property.value) + ' === Some(' + node.value.value + ')',
              style: _nested2
            });
          }

          if (style.extend.length === 0) {
            delete style.extend;
          }
        }
      }
    }
  });
  return style;
}

function generateVariantStyleMap(nodes, variants, extractCss) {
  var styles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var modifier = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var nesting = nodes.filter(function (node) {
    return node.type !== 'Declaration';
  });
  var variantOrder = variants.map(function (variant) {
    return variant.name;
  });

  if (style.length > 0) {
    styles.push({
      style: style,
      variants: modifier
    });
  }

  nesting.forEach(function (nest) {
    if (nest.property.type === 'Identifier') {
      var variant = variants.find(function (variant) {
        return variant.name === nest.property.value;
      });

      if (variant) {
        if (nest.value.type === 'Identifier') {
          var variation = variant.body.find(function (variant) {
            return variant.value === nest.value.value;
          });

          if (variation) {
            generateVariantStyleMap(nest.body, variants, extractCss, styles, generateStyle(nest.body, extractCss), _objectSpread({}, modifier, _defineProperty({}, variant.name, variation.value)));
          }
        }
      } else {// TODO: throw
      }
    }
  });
  return styles;
}

function wrapInString(value) {
  return '"' + value + '"';
}

function wrapInParens(value) {
  return '(' + value + ')';
}

var inlineFns = {
  add: ' + ',
  sub: ' - ',
  mul: ' * ',
  div: ' / ',
  percentage: true
};
var stringFns = {
  rgb: true,
  rgba: true,
  hsl: true,
  hsla: true
};

function generateFunction(node) {
  var floatingPercentage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (stringFns[node.callee]) {
    return wrapInString(node.callee + '(' + node.params.map(function (param) {
      if (param.type === 'Variable' || param.type === 'FunctionExpression' && inlineFns[param.callee]) {
        return '" ++ string_of_int(' + generateValue(param, true) + ') ++ "';
      }

      return generateValue(param, true);
    }).join(', ') + ')');
  }

  if (node.callee === 'percentage') {
    if (floatingPercentage) {
      return 'string_of_int((' + generateValue(node.params[0], floatingPercentage) + ') / 100)';
    }

    return 'string_of_int(' + generateValue(node.params[0], floatingPercentage) + ') ++ "%"';
  }

  if (node.callee === 'raw') {
    return generateValue(node.params[0], floatingPercentage);
  }

  if (inlineFns[node.callee]) {
    return wrapInParens(node.params.map(function (value) {
      return generateValue(value, floatingPercentage);
    }).join(inlineFns[node.callee]));
  } // if (math[node.callee]) {
  //   return generateValue({
  //     type: 'Integer',
  //     value: resolveMath(value),
  //   })
  // }

}

function generateValue(node, property, dynamic) {
  var floatingPercentage = property === 'opacity';

  if (!dynamic) {
    return wrapInString((0, _generateCSSValue.default)(node, property));
  }

  if (node.type === 'FunctionExpression') {
    return generateFunction(node, floatingPercentage);
  }

  if (node.type === 'Integer') {
    return (node.negative ? '-' : '') + node.value;
  }

  if (node.type === 'Float') {
    return (node.negative ? '-' : '') + node.integer + '.' + node.fractional;
  }

  if (node.type === 'Identifier') {
    return (0, _cssInJsUtils.hyphenateProperty)(node.value);
  }

  return node.value;
}