(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-editor-commons"] = factory();
	else
		root["vue-editor-commons"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_option_vue__ = __webpack_require__(9);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_option_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "mixins/option.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fe3a806", Component.options)
  } else {
    hotAPI.reload("data-v-6fe3a806", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_jsonOption_vue__ = __webpack_require__(22);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_jsonOption_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "mixins/jsonOption.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77ec0a8e", Component.options)
  } else {
    hotAPI.reload("data-v-77ec0a8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_waitForIt_vue__ = __webpack_require__(23);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_waitForIt_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "mixins/waitForIt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30c5845e", Component.options)
  } else {
    hotAPI.reload("data-v-30c5845e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = ({

  /**
   * Transform a raw string in json
   *
   * The content of the step workflow is a wrong json containing for example twig strings
   * which prevent the string to be parsed in json. This function makes it parse-able
   */
  toJson: function (raw) {

    /**
     * "{{ ... }}"
     */
    var twigStatementRegex = /{{(.*)?}}/g;

    /**
     * [\s\S]*? matches new lines between zero and unlimited times, as few times as possible
     */
    var twigOperationArrayRegex = /\[(\s*?){%([\s\S]*?)%}(\s*?)\]/g;

    /**
     * "key1.key2": [ ... ]
     * [\s\S]* matches new lines
     */
    var twigOperationArrayNotInStatementRegex = /("([\w.|]*)"): (\[(\s*?){%([\s\S]*?)%}(\s*?)\])/g;

    /**
     * Format twig statements
     */
    function formatTwigStatement (twigStatement) {
      return twigStatement
        // \ -> \\
        .replace(/\\/g, '\\\\')

        //" -> \"
        .replace(/"/g, '\\"');
    }

    /**
     * Format the twig operation array
     *
     * Ex:
     *     "history": [{% for b in bs %}
     *     {
     *         "id": "{{ b.position }}",
     *     }{% if not loop.last %},{% endif %}
     *     {% endfor %}]
     *
     *     ->
     *
     *     "history": "[{% for b in bs %}{\"id\": \"{{ b.position }}\",}{% if not loop.last %},{% endif %}{% endfor %}]"
     */
    function formatTwigOperationArray (twigOperationArray) {
      var jsonLine = twigOperationArray
        .removeLineBreaksAnsExtraSpaces()

        // [^\\] means everything except \
        .replace(/([^\\])"/g, '$1\\"');

      // Save the raw json

      localStorage.setItem(Object(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* hashCode */])(jsonLine), twigOperationArray);

      return jsonLine;
    }

    /**
     * Add "" around twig arrays not in twig statement
     *
     * @param twigOperationArrayNotInStatement
     * @param group1
     * @param group2
     * @param group3
     *
     * @returns {string}
     */
    function formatTwigOperationArrayNotInStatement (twigOperationArrayNotInStatement, group1, group2, group3) {
      return group1 + ': "' + group3 + '"';
    }

    return raw
      .replace(twigStatementRegex, formatTwigStatement)
      .replace(twigOperationArrayRegex, formatTwigOperationArray)
      .replace(twigOperationArrayNotInStatementRegex, formatTwigOperationArrayNotInStatement);
  },

  /**
   * Reverse transform json to raw content
   *
   * @param json
   * @returns {*}
   */
  toRaw: function (json) {

    /**
     * "{{ ... }}"
     */
    var twigStatementRegex = /{{(.*)?}}/g;

    var twigOperationArrayRegex = /"\[( {0,1}){%(.*)?%}( {0,1})\]"/g;

    /**
     * Format twig statements
     *
     * Ex: {{ raw_benefit|json_encode|trim(\\'\\\"\\')|raw }} -> {{ raw_benefit|json_encode|trim(\\'\\"\\')|raw }}
     */
    function formatTwigStatement (twigStatement) {
      return twigStatement
        // \\ -> \
        .replace(/\\\\/g, '\\')
        // \"  -> "
        .replace(/\\"/g, '"');
    }

    /**
     * Format the twig operations array
     *
     * Ex:
     *     "history": "[{% for b in bs %}{\"id\": \"{{ b.position }}\",}{% if not loop.last %},{% endif %}{% endfor %}]"
     *     ->
     *     "history": [{% for b in bs %} {"id": "{{ b.position }}",}{% if not loop.last %},{% endif %}{% endfor %}]
     */
    function formatTwigOperationArray (twigOperationsArray) {
      var jsonLine = twigOperationsArray.substring(1, twigOperationsArray.length - 1);

      // Retrieve the saved raw json
      if (localStorage.getItem(Object(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* hashCode */])(jsonLine)) !== null) {
        return localStorage.getItem(Object(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* hashCode */])(jsonLine));
      }

      return jsonLine
        .replace(/\\"/g, '"')
        .replace(/\\\\'/g, '\\\'');
    }

    return json
      .replace(twigOperationArrayRegex, formatTwigOperationArray)
      .replace(twigStatementRegex, formatTwigStatement);
  }

});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return sortObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return generateUniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hashCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createBootstrapModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAttributeMapObject; });
/**
 * Remove all lines breaks and "extra" spaces, when there are more than 1 spaces in a row
 *
 * @returns {string}
 */
String.prototype.removeLineBreaksAnsExtraSpaces = function () {
  return this
    // Replace line breaks by spaces
    .replace(/\r?\n|\r/g, ' ')
    // Replace 2 or more spaces by only one
    .replace(/ {2,}/g, ' ');
};

/**
 * Create and return an object which contains all elements for which the callback returns true
 *
 * @param {object} object
 * @param {function} callable
 *
 * @return {object}
 */
function filterObject (object, callable) {
  var filteredObject = {};

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      if (callable(object[property])) {
        filteredObject[property] = object[property];
      }
    }
  }

  return filteredObject;
}

/**
 * Sort an object by keys
 *
 *
 * @param {object} object
 * @param {[]} [firstKeys] : if the firstKeys param is set, set them at the beginning of the object
 * @param {boolean} [sortAll] : if false, only sort by first keys
 *
 * @returns {{}}
 */
function sortObject (object, firstKeys, sortAll) {
  var ordered = {};

  if ('undefined' === typeof sortAll) {
    sortAll = true;
  }

  if ('undefined' === typeof firstKeys) {
    firstKeys = [];
  }

  for (var i = 0, len = firstKeys.length; i < len; i++) {
    var k = firstKeys[i];

    ordered[k] = object[k];
  }

  if (sortAll) {
    Object
      .keys(object)
      .sort()
      .forEach(function (key) {
        if (-1 === firstKeys.indexOf(key)) {
          ordered[key] = object[key];
        }
      });
  } else {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        if (-1 === firstKeys.indexOf(key)) {
          ordered[key] = object[key];
        }
      }
    }
  }

  return ordered;
}

/**
 * Generate a unique id for the fields default names
 *
 * @returns {string}
 */
function generateUniqueId () {
  return Math
    .random()
    .toString(36)
    .substr(2, 9)
    ;
}

/**
 * Hash a string to a 32 bit integer
 *
 * @param {string} string
 * @returns {string}
 */
function hashCode (string) {
  var hash = 0;

  if (0 === string.length) {
    return hash.toString();
  }

  for (var i = 0; i < string.length; i++) {
    var chr = string.charCodeAt(i);

    hash = (hash << 5) - hash + chr;
    // Convert to 32bit integer
    hash |= 0;
  }

  return hash.toString();
}

/**
 * Create a javascript object to get the map all the attribute of the given element, as well as the value
 *
 * @param element
 *
 * @return {object}
 */
function createAttributeMapObject (element) {
  var attributes = element.attributes;
  var object = {};

  for (var attribute, i = 0, length = attributes.length; i < length; i++) {
    attribute = attributes[i];
    object[attribute.nodeName] = attribute.nodeValue;
  }

  object.value = element.value;

  return object;
}

/**
 * Create the html for a bootstrap modal
 *
 * @param id
 * @param name
 * @param extraClasses
 * @param title
 * @param body
 * @param [modalFooter]
 *
 * @returns {string}
 */
function createBootstrapModal (id, name, extraClasses, title, body, modalFooter) {
  var footer = modalFooter ? modalFooter : '';

  return '' +
    '<div id="' + name + '-' + id + '" class="editor-modal modal fade ' + extraClasses + ' ' + name + '">' +
      '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
          '<div class="modal-header">' +
            '<button type="button" class="close" aria-label="Close">' +
              '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '<h4 class="modal-title">' + title + '</h4>' +
          '</div>' +
          '<div class="modal-body">' +
            body +
          '</div>' +
          '<div class="modal-footer">' +
            footer +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>'
    ;
}




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_options_checkbox_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_options_choice_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_options_integer_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_options_number_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_options_text_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_options_textarea_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_modal_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_http_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_jsonOption_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mixins_option_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mixins_waitForIt_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_actions_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_getters_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_mutations_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_JsonToTwigTransformer_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_utils_js__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "checkBoxComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__components_options_checkbox_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "choiceComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__components_options_choice_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "integerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__components_options_integer_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "numberComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__components_options_number_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "textComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__components_options_text_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "textareaComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__components_options_textarea_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "modalComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__components_modal_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "httpMixin", function() { return __WEBPACK_IMPORTED_MODULE_7__mixins_http_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "jsonOptionMixin", function() { return __WEBPACK_IMPORTED_MODULE_8__mixins_jsonOption_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "optionMixin", function() { return __WEBPACK_IMPORTED_MODULE_9__mixins_option_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "waitForItMixin", function() { return __WEBPACK_IMPORTED_MODULE_10__mixins_waitForIt_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return __WEBPACK_IMPORTED_MODULE_11__store_actions_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return __WEBPACK_IMPORTED_MODULE_12__store_getters_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return __WEBPACK_IMPORTED_MODULE_13__store_mutations_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToTwigTransformer", function() { return __WEBPACK_IMPORTED_MODULE_14__utils_JsonToTwigTransformer_js__["a"]; });

















const utils = {
  filterObject: __WEBPACK_IMPORTED_MODULE_15__utils_utils_js__["c" /* filterObject */],
  sortObject: __WEBPACK_IMPORTED_MODULE_15__utils_utils_js__["f" /* sortObject */],
  generateUniqueId: __WEBPACK_IMPORTED_MODULE_15__utils_utils_js__["d" /* generateUniqueId */],
  hashCode: __WEBPACK_IMPORTED_MODULE_15__utils_utils_js__["e" /* hashCode */],
  createBootstrapModal: __WEBPACK_IMPORTED_MODULE_15__utils_utils_js__["b" /* createBootstrapModal */],
  createAttributeMapObject: __WEBPACK_IMPORTED_MODULE_15__utils_utils_js__["a" /* createAttributeMapObject */]
}




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f94ba61_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(10);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f94ba61_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/options/checkbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checkbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f94ba61", Component.options)
  } else {
    hotAPI.reload("data-v-5f94ba61", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_option_vue__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_option_vue__["a" /* default */]]
});



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Base component for a field option
 */

/* harmony default export */ __webpack_exports__["a"] = ({

  props: ['option', 'name', 'value'],

  data: function () {
    return {
      // Default value from the api
      data: this.option.options.data
    };
  },

  /**
   * Update the value on component creation
   */
  created: function () {
    if (typeof this.value !== 'undefined') {
      this.data = this.value;
      if ('object' === typeof this.value) {
        this.data = JSON.stringify(this.value);
      }
    }
  },

  /**
   * Update the value on component update
   */
  watch: {
    value: {
      handler: function (value) {
        if (typeof value !== 'undefined') {
          this.data = value;
          if ('object' === typeof value) {
            this.data = JSON.stringify(value);
          }
        }
      }
    }
  },

  methods: {

    /**
     * Update an option value for the raw
     *
     * @param value
     */
    updateOption: function (value) {
      if (typeof value !== 'undefined') {
        this.data = value;
        this.$emit('changed', {
          name: this.name,
          value: value
        });
      }
    }
  }

});



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-wrapper"
  }, [(_vm.option.options.help) ? _c('span', [_vm._v(_vm._s(_vm.option.options.help))]) : _vm._e(), _vm._v(" "), _c('input', {
    attrs: {
      "required": _vm.option.options.required,
      "type": "checkbox",
      "name": _vm.name
    },
    domProps: {
      "checked": _vm.data
    },
    on: {
      "click": function($event) {
        _vm.updateOption($event.target.checked)
      }
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f94ba61", esExports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_choice_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_105686bf_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_choice_vue__ = __webpack_require__(13);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_choice_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_105686bf_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_choice_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/options/choice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] choice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-105686bf", Component.options)
  } else {
    hotAPI.reload("data-v-105686bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_option_vue__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_option_vue__["a" /* default */]],

  /**
   * Update the selected value when the value updates
   */
  watch: {
    value: {
      handler: function (newValue) {
        this.data = newValue;
      },
      deep: true
    },
    data: {
      handler: function (newValue) {
        this.updateOption(newValue);
      },
      deep: true
    }
  }

});



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": _vm.name
    }
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-wrapper"
  }, [(_vm.option.options.help) ? _c('span', [_vm._v(_vm._s(_vm.option.options.help))]) : _vm._e(), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data),
      expression: "data"
    }],
    staticClass: "form-control",
    attrs: {
      "required": _vm.option.options.required,
      "name": _vm.name
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.data = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.option.options.choices), function(choice, key) {
    return _c('option', {
      domProps: {
        "value": key
      }
    }, [_vm._v(_vm._s(choice))])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-105686bf", esExports)
  }
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_integer_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e971690_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_integer_vue__ = __webpack_require__(16);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_integer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e971690_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_integer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/options/integer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] integer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e971690", Component.options)
  } else {
    hotAPI.reload("data-v-4e971690", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_option_vue__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_option_vue__["a" /* default */]]
});



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": _vm.name
    }
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-wrapper"
  }, [(_vm.option.options.help) ? _c('span', [_vm._v(_vm._s(_vm.option.options.help))]) : _vm._e(), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "required": _vm.option.options.required,
      "type": "number",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.data
    },
    on: {
      "input": function($event) {
        _vm.updateOption($event.target.value)
      }
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e971690", esExports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_number_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4dea1f32_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_number_vue__ = __webpack_require__(19);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_number_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4dea1f32_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_number_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/options/number.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] number.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dea1f32", Component.options)
  } else {
    hotAPI.reload("data-v-4dea1f32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_option_vue__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_option_vue__["a" /* default */]]
});



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": _vm.name
    }
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-wrapper"
  }, [(_vm.option.options.help) ? _c('span', [_vm._v(_vm._s(_vm.option.options.help))]) : _vm._e(), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "required": _vm.option.options.required,
      "type": "text",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.data
    },
    on: {
      "input": function($event) {
        _vm.updateOption($event.target.value)
      }
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dea1f32", esExports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_text_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dc4d1cb_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_text_vue__ = __webpack_require__(24);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_text_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dc4d1cb_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_text_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/options/text.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] text.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dc4d1cb", Component.options)
  } else {
    hotAPI.reload("data-v-7dc4d1cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_jsonOption_vue__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_jsonOption_vue__["a" /* default */]]
});



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waitForIt_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_JsonToTwigTransformer_js__ = __webpack_require__(4);






/**
 * Option where we can put json in (input type text and textareas)
 */

/* harmony default export */ __webpack_exports__["a"] = ({

  mixins: [__WEBPACK_IMPORTED_MODULE_0__option_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__waitForIt_vue__["a" /* default */]],

  data: function () {
    return {
      classes: ''
    };
  },

  /**
   * Update the value on component creation
   */
  created: function () {
    if ('object' === typeof this.value) {
      this.data = __WEBPACK_IMPORTED_MODULE_2__utils_JsonToTwigTransformer_js__["a" /* default */].toRaw(JSON.stringify(this.value, null, 4));
      this.setJsonAttemptClass(this.data);
    }
  },

  /**
   * Update the value on component update
   */
  watch: {
    value: {
      handler: function (value) {
        if ('object' === typeof value) {
          this.data = __WEBPACK_IMPORTED_MODULE_2__utils_JsonToTwigTransformer_js__["a" /* default */].toRaw(JSON.stringify(value, null, 4));
          this.setJsonAttemptClass(this.data);
        }
      }
    }
  },

  methods: {
    onOptionValueChanged: function (value) {
      var self = this;

      return new Promise(function (resolve) {
        self.waitForIt(function () {
          self.updateOption(value);
          self.setJsonAttemptClass(value);
          resolve();
        }, 300);
      });

    },

    /**
     * Set a class on the input or textarea to add an icon indicating if the json is valid
     * A json attempt is considered id '{' or '[' are typed first
     *
     * @param value
     */
    setJsonAttemptClass: function (value) {
      if (
        0 !== value.indexOf('{{') &&
        (0 === value.indexOf('{') || 0 === value.indexOf('['))
      ) {
        try {
          JSON.parse(__WEBPACK_IMPORTED_MODULE_2__utils_JsonToTwigTransformer_js__["a" /* default */].toJson(value));
          this.classes = 'fa fa-check success feedback';
        } catch (e) {
          this.classes = 'fa fa-exclamation-circle warning feedback';
        }
      } else {
        this.classes = '';
      }
    }
  }
});



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Mixin adding a method allowing to avoid calling a function too many times
 * For example, when a user press a key, wait for the user to do a pause before triggering some process
 */
/* harmony default export */ __webpack_exports__["a"] = ({

  data: function () {
    return {
      timeout: null
    };
  },

  methods: {

    /**
     * Delay the trigger of a callback until this function is not called for a given time
     *
     * @param callback
     * @param time
     */
    waitForIt: function (callback, time) {
      if ('undefined' === typeof time) {
        time = 500;
      }

      clearTimeout(this.timeout);

      this.timeout = setTimeout(callback, time);
    }
  }
});



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": _vm.name
    }
  }, [_vm._v("\n    " + _vm._s(_vm.name) + "\n    "), _c('i', {
    class: _vm.classes,
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-control-wrapper"
  }, [(_vm.option.options.help) ? _c('span', [_vm._v(_vm._s(_vm.option.options.help))]) : _vm._e(), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "required": _vm.option.options.required,
      "type": "text",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.data
    },
    on: {
      "input": function($event) {
        _vm.onOptionValueChanged($event.target.value)
      }
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7dc4d1cb", esExports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4af4c258_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_textarea_vue__ = __webpack_require__(26);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4af4c258_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_textarea_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/options/textarea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] textarea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4af4c258", Component.options)
  } else {
    hotAPI.reload("data-v-4af4c258", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": _vm.name
    }
  }, [_vm._v("\n    " + _vm._s(_vm.name) + "\n    "), _c('i', {
    class: _vm.classes,
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-control-wrapper"
  }, [(_vm.option.options.help) ? _c('span', [_vm._v(_vm._s(_vm.option.options.help))]) : _vm._e(), _vm._v(" "), _c('textarea', {
    staticClass: "form-control",
    attrs: {
      "required": _vm.option.options.required,
      "name": _vm.name
    },
    domProps: {
      "value": _vm.data
    },
    on: {
      "input": function($event) {
        _vm.onOptionValueChanged($event.target.value)
      }
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4af4c258", esExports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe1837a0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_modal_vue__ = __webpack_require__(28);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe1837a0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_modal_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe1837a0", Component.options)
  } else {
    hotAPI.reload("data-v-fe1837a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "modal"
    }
  }, [_c('div', {
    staticClass: "vue-modal-mask"
  }, [_c('div', {
    staticClass: "vue-modal-container"
  }, [_c('div', {
    staticClass: "vue-modal-header"
  }, [_vm._t("header")], 2), _vm._v(" "), _c('div', {
    staticClass: "vue-modal-body"
  }, [_vm._t("body")], 2), _vm._v(" "), _c('div', {
    staticClass: "vue-modal-footer"
  }, [_vm._t("footer")], 2)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fe1837a0", esExports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_http_vue__ = __webpack_require__(30);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_http_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "mixins/http.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-407d70d9", Component.options)
  } else {
    hotAPI.reload("data-v-407d70d9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Global methods used to perform http requests in components
 */

/* harmony default export */ __webpack_exports__["a"] = ({

  methods: {

    /**
     * Handle a get request : perform an http request and cache the json response body in the store
     *
     * @param url : string
     * @param callback : function with the json as parameter
     *
     * @returns Object : the json response
     */
    handleGetRequest: function (url, callback) {
      var self = this;
      var cachedResource = this.$store.getters.getCachedResource(url);

      if (cachedResource) {
        return callback(cachedResource);
      }

      this.$http
        .get(url)
        .then(
          function (response) {
            return response.json();
          },
          function () {
            return null;
          }
        )
        .then(function (json) {
          self.$store.commit({
            type: 'cache',
            api_url: url,
            api_response: json
          });

          return callback(json);
        })
      ;
    }
  }

});



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var actions = {

  /**
   * Handle a get request : perform an http request and cache the json response body in the store
   *
   * @param url
   * @param $store
   * @param $http
   * @param callback : function with the json as parameter
   *
   * @returns Object : the json response
   */
  handleGetRequest: function (url, $store, $http, callback) {
    var cachedResource = $store.getters.getCachedResource(url);

    if (cachedResource) {
      return callback(cachedResource);
    }

    $http
      .get(url)
      .then(
        function (response) {
          return response.json();
        },
        function () {
          return null;
        }
      )
      .then(
        function (json) {
          $store.commit({
            type: 'cache',
            api_url: url,
            api_response: json
          });

          return callback(json);
        }, function () {
          return callback();
        }
      )
    ;
  }

};

/* harmony default export */ __webpack_exports__["a"] = (actions);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

  editorId: function (state) {
    return state.configuration.editorId;
  },

  getCachedResource: function (state) {
    return function (url) {
      return state.apiCache[url];
    };
  },

});


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

  cache: function (state, payload) {
    state.apiCache[payload.api_url] = payload.api_response;
  },

});


/***/ })
/******/ ]);
});