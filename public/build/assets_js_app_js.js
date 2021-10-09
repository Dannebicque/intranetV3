(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["assets_js_app_js"],{

/***/ "./assets/components/DatePicker.js":
/*!*****************************************!*\
  !*** ./assets/components/DatePicker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DatePicker)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! flatpickr/dist/l10n/fr.js */ "./node_modules/flatpickr/dist/l10n/fr.js");
/* harmony import */ var flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_18__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/DatePicker.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2021 20:59



var DatePicker = /*#__PURE__*/function (_HTMLInputElement) {
  _inherits(DatePicker, _HTMLInputElement);

  var _super = _createSuper(DatePicker);

  function DatePicker() {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this);

    if (_this.dataset.options) {
      _this.options = JSON.parse(_this.dataset.options);
    } else {
      _this.options = [];
      _this.options['dateFormat'] = 'd/m/Y';
    }

    _this.options['locale'] = da.LANG;
    return _this;
  }

  _createClass(DatePicker, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.flatpickr = (0,flatpickr__WEBPACK_IMPORTED_MODULE_17__.default)(this, this.options);
    }
  }]);

  return DatePicker;
}( /*#__PURE__*/_wrapNativeSuper(HTMLInputElement));



/***/ }),

/***/ "./assets/components/SelectChangeWidget.js":
/*!*************************************************!*\
  !*** ./assets/components/SelectChangeWidget.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectChangeWidget)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _js_fetch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../js/fetch */ "./assets/js/fetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/SelectChangeWidget.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2021 20:59


var SelectChangeWidget = /*#__PURE__*/function (_HTMLSelectElement) {
  _inherits(SelectChangeWidget, _HTMLSelectElement);

  var _super = _createSuper(SelectChangeWidget);

  function SelectChangeWidget() {
    var _this;

    _classCallCheck(this, SelectChangeWidget);

    _this = _super.call(this);

    _this.addEventListener('change', function (e) {
      _this.route = e.target.dataset.route;
      _this.params = JSON.parse(e.target.dataset.params);
      _this.params.value = e.target.value; //todo: éventuellement field et post?

      _this._update();
    });

    return _this;
  }

  _createClass(SelectChangeWidget, [{
    key: "_update",
    value: function _update() {
      console.log(this.params);
      (0,_js_fetch__WEBPACK_IMPORTED_MODULE_17__.post)(this.route, this.params);
    }
  }]);

  return SelectChangeWidget;
}( /*#__PURE__*/_wrapNativeSuper(HTMLSelectElement));



/***/ }),

/***/ "./assets/components/SelectComplete.js":
/*!*********************************************!*\
  !*** ./assets/components/SelectComplete.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectComplete)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/js/tom-select.complete.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(tom_select__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/SelectComplete.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2021 21:00


var SelectComplete = /*#__PURE__*/function (_HTMLSelectElement) {
  _inherits(SelectComplete, _HTMLSelectElement);

  var _super = _createSuper(SelectComplete);

  function SelectComplete() {
    var _this;

    _classCallCheck(this, SelectComplete);

    var options = {};
    _this = _super.call(this);

    if (_this.dataset.options) {
      options = JSON.parse(_this.dataset.options);
    }

    new (tom_select__WEBPACK_IMPORTED_MODULE_16___default())(_assertThisInitialized(_this), options);
    return _this;
  }

  return SelectComplete;
}( /*#__PURE__*/_wrapNativeSuper(HTMLSelectElement));



/***/ }),

/***/ "./assets/components/table.js":
/*!************************************!*\
  !*** ./assets/components/table.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _js_fetch__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../js/fetch */ "./assets/js/fetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/table.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/10/2021 16:15

var ASC = 'asc';
var DESC = 'desc';
var ICON_ASC = '&#9660;';
var ICON_DESC = '&#9650;';

var Table = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Table, _HTMLElement);

  var _super = _createSuper(Table);

  function Table() {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this);
    _this.div = _assertThisInitialized(_this);
    _this.options = JSON.parse(_this.dataset.options);
    _this.base_url = _this.options.ajax.url;
    _this.table = _this.querySelector('table.datable');
    _this.tableBody = _this.table.querySelector('tbody');
    _this.pageActive = _this.options.pageActive; //par défaut on récupère

    _this.nbElementPerPage = _this.options.pageLength;
    _this.order = [];
    _this.filter = [];
    _this.tableBody.innerHTML = '';

    _this.options.columns.forEach(function (column) {
      if (column.orderable === true) {
        if (column.order != null) {
          _this.order = [{
            column: column.id,
            order: column.order
          }];
        }

        document.getElementById(column.id).style.cursor = 'pointer';
        document.getElementById(column.id).addEventListener('click', function (elem) {
          _this.order = [{
            column: elem.target.id,
            order: elem.target.dataset.order //todo: ordre actuel... a inverser dans la requete? Mettre les deux fleches si pas trié ? si defaultorder = false?

          }]; //todo: mettre à jour le sens de la fleche...

          _this._buildArray();
        });
      }
    });

    _this.form = _this.getElementsByTagName('form'); //ajout des events sur le form

    var inputs = _this.form[0].getElementsByTagName('input');

    var selects = _this.form[0].getElementsByTagName('select');

    inputs.forEach(function (input) {
      if (input.type === 'text') {
        input.addEventListener('keyup', function (event) {
          if (event.target.type === 'text' && event.target.value.length < 3) {
            //on ne déclenche rien si moins de 3 caractères
            return;
          }

          _this._getFilterFromField(event.target);

          _this._buildArray();
        });
      }

      if (input.type === 'radio' || input.type === 'checkbox') {
        input.addEventListener('change', function (elem) {
          _this._getFilterFromField(elem.target);

          _this._filterArray();
        });
      }
    });
    selects.forEach(function (select) {
      select.addEventListener('change', function (elem) {
        _this._getFilterFromField(elem.target);

        _this._filterArray();
      });
    });

    if (_this.options.paging === true) {
      var select = document.getElementById(_this.options.paging_id + '_select');
      select.addEventListener('change', function (e) {
        e.preventDefault();
        _this.nbElementPerPage = e.target.value;

        _this._buildArray();
      });
    }

    _this._updateHeader();

    _this._buildArray();

    return _this;
  }

  _createClass(Table, [{
    key: "_filterArray",
    value: function _filterArray(event) {
      //this._getFilterFromField(event.target)
      console.log(this.filter);

      this._buildArray();
    }
  }, {
    key: "_convertToFetch",
    value: function _convertToFetch(tableau) {
      var obj = {};
      Object.entries(tableau).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
            key = _entry[0],
            item = _entry[1];

        obj[key] = item;
      });
      return obj;
    }
  }, {
    key: "_buildArray",
    value: function _buildArray() {
      var _this2 = this;

      console.log(this.order);
      this.tableBody.innerHTML = '';
      (0,_js_fetch__WEBPACK_IMPORTED_MODULE_28__.post)(this.base_url, {
        paging: {
          pageLength: this.nbElementPerPage,
          pageActive: this.pageActive
        },
        order: this.order,
        filter: this._convertToFetch(this.filter)
      }).then(function (data) {
        if (data.data.length > 0) {
          data.data.forEach(function (item) {
            var html = '<tr>';

            _this2.options.columns.forEach(function (column) {
              html += "<td>".concat(item[column.id], "</td>");
            });

            html += '</tr>';
            _this2.tableBody.innerHTML += html;
          });
        } else {
          var html = '<tr>';
          html += '<td colspan="' + _this2.options.columns.length + '" class="text-center">Pas de données.</td>';
          html += '</tr>';
          _this2.tableBody.innerHTML = html;
        }

        _this2._updatePagination(data.paging);
      });
    }
  }, {
    key: "_updateHeader",
    value: function _updateHeader() {
      this.options.columns.forEach(function (column) {
        var texte = document.getElementById(column.id).innerText;

        if (column.orderable === true) {
          if (column.order === DESC || column.order === '') {
            document.getElementById(column.id).innerHTML = texte + ' ' + ICON_DESC;
            document.getElementById(column.id).dataset.order = DESC;
          } else {
            document.getElementById(column.id).innerHTML = texte + ' ' + ICON_ASC;
            document.getElementById(column.id).dataset.order = ASC;
          }
        }
      });
    }
  }, {
    key: "_updatePagination",
    value: function _updatePagination(paging) {
      var _this3 = this;

      var nav = document.getElementById(this.options.paging_id + '_nav');
      var previousDisabled = paging.firstPage === true ? 'disabled' : '';
      var nextDisabled = paging.lastPage === true ? 'disabled' : '';
      var pageCutLow = paging.numActivePage - 1;
      var pageCutHigh = paging.numActivePage + 1;
      var html = "<ul class=\"pagination justify-content-end\">\n                        <li class=\"page-item ".concat(previousDisabled, "\">\n                            <a class=\"page-link\" href=\"#\">\n                                <span class=\"fas fa-arrow-left\"></span>\n                            </a>\n                        </li>"); // 10 pages, on affiche tout

      if (paging.nbPages <= 10) {
        for (var i = 1; i <= paging.nbPages; i++) {
          var pageActive = i === paging.numActivePage ? 'active' : '';
          html += "<li class=\"page-item ".concat(pageActive, "\">\n                  <a class=\"page-link\" href=\"#\">").concat(i, "</a>\n               </li>");
        }
      } else {
        // Show the very first page followed by a "..." at the beginning of the
        // pagination section (after the Previous button)
        if (paging.numActivePage > 2) {
          html += '<li class="page-item"><a class="page-link" href="#">1</a></li>';

          if (paging.numActivePage > 3) {
            var pag = paging.numActivePage - 2;
            html += '<li class="page-item"><a class="page-link" href="#" data-page="' + pag + '">...</a></li>';
          }
        } // Determine how many pages to show after the current page index


        if (paging.numActivePage === 1) {
          pageCutHigh += 2;
        } else if (paging.numActivePage === 2) {
          pageCutHigh += 1;
        } // Determine how many pages to show before the current page index


        if (paging.numActivePage === paging.nbPages) {
          pageCutLow -= 2;
        } else if (paging.numActivePage === paging.nbPages - 1) {
          pageCutLow -= 1;
        } // Output the indexes for pages that fall inside the range of pageCutLow
        // and pageCutHigh


        for (var p = pageCutLow; p <= pageCutHigh; p++) {
          if (p === 0) {
            p += 1;
          }

          if (p > paging.nbPages) {
            continue;
          }

          var _pageActive = p === paging.numActivePage ? 'active' : '';

          html += '<li class="page-item ' + _pageActive + '"><a class="page-link" href="#">' + p + '</a></li>';
        } // Show the very last page preceded by a "..." at the end of the pagination
        // section (before the Next button)


        if (paging.numActivePage < paging.nbPages - 1) {
          if (paging.numActivePage < paging.nbPages - 2) {
            var _pag = 0;

            if (paging.numActivePage === 1) {
              _pag = paging.numActivePage + 4;
            } else {
              _pag = paging.numActivePage + 2;
            }

            html += '<li class="page-item"><a class="page-link" href="#" data-page="' + _pag + '">...</a></li>';
          }

          html += '<li class="page-item"><a class="page-link" href="#">' + paging.nbPages + '</a></li>';
        }
      }

      html += "<li class=\"page-item ".concat(nextDisabled, "\">\n                  <a class=\"page-link\" href=\"#\">\n                      <span class=\"fas fa-arrow-right\"></span>\n                  </a>\n              </li>\n          </ul>");
      nav.innerHTML = html;
      this.div.querySelectorAll('.page-link').forEach(function (element) {
        element.addEventListener('click', function (e) {
          var page = e.target.innerText;

          if (page === '...') {
            page = e.target.dataset.page;
          }

          _this3.pageActive = page;

          _this3._buildArray();
        });
      });
    }
  }, {
    key: "_extractNameFromForm",
    value: function _extractNameFromForm(name) {
      console.log(name);
      var t = name.split('[');
      return t[1].substr(0, t[1].length - 1);
    }
  }, {
    key: "_getFilterFromField",
    value: function _getFilterFromField(input) {
      console.log(input);

      var name = this._extractNameFromForm(input.name);

      switch (input.type) {
        case 'text':
        case 'select-one':
        case 'radio':
          this.filter[name] = input.value;
          break;

        case 'checkbox':
          if (input.checked === true) {
            if (!(name in this.filter)) {
              this.filter[name] = [];
            }

            this.filter[name].push(input.value);
          }

          break;
      }
    }
  }]);

  return Table;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));



/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LANG": () => (/* binding */ LANG),
/* harmony export */   "default": () => (/* binding */ reloadQv)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/fontawesome.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss");
/* harmony import */ var _fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/solid.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/solid.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _validator_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validator-bs4 */ "./assets/js/validator-bs4.js");
/* harmony import */ var _validator_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_validator_bs4__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util */ "./assets/js/util.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material */ "./assets/js/material.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search */ "./assets/js/search.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modaler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modaler */ "./assets/js/modaler.js");
/* harmony import */ var _modaler__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modaler__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/table */ "./assets/components/table.js");
/* harmony import */ var _components_SelectComplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/SelectComplete */ "./assets/components/SelectComplete.js");
/* harmony import */ var _components_SelectChangeWidget__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/SelectChangeWidget */ "./assets/components/SelectChangeWidget.js");
/* harmony import */ var _components_DatePicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/DatePicker */ "./assets/components/DatePicker.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fetch */ "./assets/js/fetch.js");






// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/app.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/09/2021 12:40










__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");


var lookup = {};





var LANG = document.querySelector('html').getAttribute('lang');
window.da = {
  LANG: LANG
};
customElements.define('my-table', _components_table__WEBPACK_IMPORTED_MODULE_16__.default);
customElements.define('select-complete', _components_SelectComplete__WEBPACK_IMPORTED_MODULE_17__.default, {
  "extends": 'select'
});
customElements.define('select-live-update', _components_SelectChangeWidget__WEBPACK_IMPORTED_MODULE_18__.default, {
  "extends": 'select'
});
customElements.define('my-datepicker', _components_DatePicker__WEBPACK_IMPORTED_MODULE_19__.default, {
  "extends": 'input'
});
jquery__WEBPACK_IMPORTED_MODULE_8___default()('input[type="file"]').on('change', function (e) {
  var filename = e.target.files[0].name;
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('.custom-file-label').html(filename);
});
window.addEventListener('load', function () {
  //le dom est chargé
  var currentTheme = localStorage.getItem('theme');
  var menuDarkTheme = document.getElementById('darkMode'); //Regarde si des boutons ont un data-confirm = true

  var elements = document.querySelectorAll("[data-confirm='true']");
  elements.forEach(function (el) {
    console.log(el);
  });
  menuDarkTheme.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme'); // Let's say the theme is equal to light

    var theme = 'light'; // If the body contains the .dark-theme class...

    if (document.body.classList.contains('dark-theme')) {
      // ...then let's make the theme dark
      theme = 'dark';
      menuDarkTheme.innerHTML = '<i class="fas fa-adjust"></i> Dark Mode Off';
    } else {
      menuDarkTheme.innerHTML = '<i class="fas fa-adjust"></i> Dark Mode On';
    } // Then save the choice in localStorage


    localStorage.setItem('theme', theme);
  });
  document.querySelectorAll('.changeAnneeUniversitaire').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      console.log("coucou");
      console.log(e.target.dataset.annee);
      var el = (0,_util__WEBPACK_IMPORTED_MODULE_11__.getParentByTagName)(e.target, 'a');
      (0,_fetch__WEBPACK_IMPORTED_MODULE_20__.post)(Routing.generate('settings_change_annee_universitaire'), {
        'annee_universitaire': el.dataset.annee
      });
    });
  }); // If the current theme in localStorage is "dark"...

  if (currentTheme === 'dark') {
    // ...then use the .dark-theme class
    document.body.classList.add('dark-theme');
    menuDarkTheme.innerHTML = '<i class="fas fa-adjust"></i> Dark Mode Off';
  } else {
    menuDarkTheme.innerHTML = '<i class="fas fa-adjust"></i> Dark Mode On';
  }
}, false);
jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).ready(function () {
  // script pour afficher le fichier selectionné avec bootstrap4
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('.custom-file input').change(function () {
    var files = [];

    for (var i = 0; i < jquery__WEBPACK_IMPORTED_MODULE_8___default()(this)[0].files.length; i++) {
      files.push(jquery__WEBPACK_IMPORTED_MODULE_8___default()(this)[0].files[i].name);
    }

    jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).next('.custom-file-label').html(files.join(', '));
  });
  var preloader = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.preloader');

  if (preloader.length) {
    var speed = preloader.dataAttr('hide-spped', 600);
    preloader.fadeOut(speed);
  }

  jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('focus', '.topbar-search input', function () {
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).closest('.topbar-search').find('.lookup-placeholder span').css('opacity', '0');
  });
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('blur', '.topbar-search input', function () {
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).closest('.topbar-search').find('.lookup-placeholder span').css('opacity', '1');
  });
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '#lookup', function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_8___default()('#lookup-full');

    if (target !== false) {
      lookup.toggle(target);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '#lookup-close', function () {
    lookup.toggle(jquery__WEBPACK_IMPORTED_MODULE_8___default()('#lookup-full'));
  }); //tooltip

  updateInterface();
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-provide="validation"]').validator();
});
jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).ajaxComplete(function () {
  updateInterface();
}); // Fullscreen
//

jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '.card-btn-fullscreen', function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).closest('.card').toggleClass('card-fullscreen').removeClass('card-maximize');
}); // Slide up/down

jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '.card-btn-slide', function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).toggleClass('rotate-180').closest('.card').find('.card-content').slideToggle();
});
jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '.card-btn-slide-text', function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).closest('.card').find('.card-content').slideToggle();
}); //modaler

jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '[data-provide~="modaler"]', function () {
  modaler((0,_util__WEBPACK_IMPORTED_MODULE_11__.getDataOptions)(jquery__WEBPACK_IMPORTED_MODULE_8___default()(this)));
});

function updateInterface() {
  // $('.callout').delay(5000).slideUp('slow')
  if (document.getElementsByClassName('datepicker-range').length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.datepicker-range').flatpickr({
      mode: 'range',
      'locale': 'fr',
      format: 'd/M/Y'
    });
  } //notifications


  jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '#marquerNotificationsRead', function (e) {
    e.preventDefault();
    e.stopPropagation();
    jquery__WEBPACK_IMPORTED_MODULE_8___default().ajax({
      url: Routing.generate('notification_marquer_lu'),
      success: function success() {
        jquery__WEBPACK_IMPORTED_MODULE_8___default()('.notification').removeClass('media-new');
      }
    });
  }); //tooltip

  jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-provide~="tooltip"]').each(function () {
    var color = '';

    if (jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).hasDataAttr('tooltip-color')) {
      color = ' tooltip-' + jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).data('tooltip-color');
    }

    jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).tooltip({
      container: 'body',
      trigger: 'hover',
      template: '<div class="tooltip' + color + '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
  });
} // Open fullscreen lookup
//


lookup.toggle = function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).hasClass('reveal')) {
    lookup.close(e);
  } else {
    lookup.open(e);
  }
}; // Close fullscreen lookup
//


lookup.close = function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).removeClass('reveal');
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').removeClass('no-scroll');
}; // Close fullscreen lookup
//


lookup.open = function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).addClass('reveal');
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).find('.lookup-form input').focus();
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').addClass('no-scroll');
}; // =====================
// Sidebar
// =====================


var sidebar = {}; // Scrollable

if (document.getElementsByClassName('sidebar-navigation').length > 0) {
  var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.default('.sidebar-navigation');
} // Handle sidebar openner
//


jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '.sidebar-toggler', function () {
  sidebar.open();
}); // Close sidebar when backdrop touches
//

jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '.backdrop-sidebar', function () {
  sidebar.close();
}); // Slide up/down menu item on click
//

jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '.sidebar .menu-link', function () {
  var $submenu = jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).next('.menu-submenu');
  if ($submenu.length < 1) return;

  if ($submenu.is(':visible')) {
    $submenu.slideUp(function () {
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('.sidebar .menu-item.open').removeClass('open');
    });
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).removeClass('open');
    return;
  }

  jquery__WEBPACK_IMPORTED_MODULE_8___default()('.sidebar .menu-submenu:visible').slideUp();
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('.sidebar .menu-link').removeClass('open');
  $submenu.slideToggle(function () {
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.sidebar .menu-item.open').removeClass('open');
  });
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).addClass('open');
}); // Handle fold toggler
//

jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '.sidebar-toggle-fold', function () {
  sidebar.toggleFold();
}); //}

sidebar.toggleFold = function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').toggleClass('sidebar-folded');
  app.toggleState('sidebar.folded');
};

sidebar.fold = function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').addClass('sidebar-folded');
  app.state('sidebar.folded', true);
};

sidebar.unfold = function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').removeClass('sidebar-folded');
  app.state('sidebar.folded', false);
};

sidebar.toggleHide = function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').toggleClass('sidebar-hidden');
  app.toggleState('sidebar.hidden');
};

sidebar.hide = function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').addClass('sidebar-hidden');
  app.state('sidebar.hidden', true);
};

sidebar.show = function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').removeClass('sidebar-hidden');
  app.state('sidebar.hidden', false);
};

sidebar.open = function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').addClass('sidebar-open').prepend('<div class="app-backdrop backdrop-sidebar"></div>');
};

sidebar.close = function () {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').removeClass('sidebar-open');
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('.backdrop-sidebar').remove();
}; // =====================
// Quickview
// =====================
// todo: déplacer dans une classe seule... pour l'import.


var quickview = {};
var qps = null; // Update scrollbar on tab change
//

jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('shown.bs.tab', '.quickview-header a[data-toggle="tab"]', function () {
  qps.update();
});
function reloadQv() {
  qps.destroy();
  qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.default('.quickview');
} // Quickview closer
//

jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '[data-dismiss="quickview"]', function () {
  quickview.close(jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).closest('.quickview'));
}); // Handle quickview openner
//

jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '[data-toggle="quickview"]', function (e) {
  e.preventDefault();
  var target = app.getTarget(jquery__WEBPACK_IMPORTED_MODULE_8___default()(this));

  if (target === false) {
    quickview.close(jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).closest('.quickview'));
  } else {
    var url = '';

    if (jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).hasDataAttr('url')) {
      url = jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).data('url');
    }

    if (url !== 'no-url' && url !== '') {
      quickview.toggle(target, url);
    } else {
      quickview.toggle(target, Routing.generate('quick_view'));
    }
  }
}); // Close quickview when backdrop touches
//

jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '.backdrop-quickview', function () {
  var qv = jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).attr('data-target');

  if (!jquery__WEBPACK_IMPORTED_MODULE_8___default()(qv).is('[data-disable-backdrop-click]')) {
    quickview.close(qv);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '.quickview .close, [data-dismiss="quickview"]', function () {
  var qv = jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).closest('.quickview');
  quickview.close(qv);
}); // Toggle open/close state
//

quickview.toggle = function (e, url) {
  if (jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).hasClass('reveal')) {
    quickview.close(e);
  } else {
    if (url !== '') {
      jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).html('<div class="spinner-linear"><div class="line"></div></div>');
      jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).load(url, function () {
        qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.default('.quickview');
      });
    }

    jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).addClass('reveal').not('.backdrop-remove').after('<div class="app-backdrop backdrop-quickview" data-target="' + e + '"></div>');
  }
}; // Open quickview
//


quickview.open = function (e) {
  var quickview = jquery__WEBPACK_IMPORTED_MODULE_8___default()(e);
  var url = ''; // Load content from URL if required

  if (quickview.hasDataAttr('url') && 'true' !== quickview.data('url-has-loaded')) {
    if (quickview.data('url') === 'no-url') {
      url = Routing.generate('quick_view');
    } else {
      url = quickview.data('url');
    }

    quickview.load(url, function () {
      qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.default('.quickview'); // Don't load it next time, if don't need to

      if (quickview.hasDataAttr('always-reload') && 'true' === quickview.data('always-reload')) {} else {
        quickview.data('url-has-loaded', 'true');
      }
    });
  } // Open it


  quickview.addClass('reveal').not('.backdrop-remove').after('<div class="app-backdrop backdrop-quickview" data-target="' + e + '"></div>');
}; // Close quickview
//


quickview.close = function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).removeClass('reveal');
  jquery__WEBPACK_IMPORTED_MODULE_8___default()('.backdrop-quickview').remove();
};

var app = {};

app.getTarget = function (e) {
  var target;

  if (e.hasDataAttr('target')) {
    target = e.data('target');
  } else {
    target = e.attr('href');
  }

  if (target === 'next') {
    target = jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).next();
  } else if (target === 'prev') {
    target = jquery__WEBPACK_IMPORTED_MODULE_8___default()(e).prev();
  }

  if (target === undefined) {
    return false;
  }

  return target;
};

function getColonneActive(colonnes) {
  var index = -1;
  jquery__WEBPACK_IMPORTED_MODULE_8___default().each(colonnes, function (key, colonne) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonne).hasClass('col-edt-hide')) {
      index = key;
    }
  });
  return index;
} //navigation EDT


jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '#jourPrecedent', function (e) {
  e.stopPropagation();
  e.preventDefault();
  var colonnes = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.jour');
  var index = getColonneActive(colonnes);

  if (index > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonnes[index]).addClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonnes[index - 1]).removeClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.edt-jour-' + index).addClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.edt-jour-' + (index - 1)).removeClass('col-edt-hide');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonnes[index]).addClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonnes[4]).removeClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.edt-jour-' + index).addClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.edt-jour-4').removeClass('col-edt-hide');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '#jourSuivant', function (e) {
  e.stopPropagation();
  e.preventDefault();
  var colonnes = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.jour');
  var index = getColonneActive(colonnes);

  if (index < 4) {
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonnes[index]).addClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonnes[index + 1]).removeClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.edt-jour-' + index).addClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.edt-jour-' + (index + 1)).removeClass('col-edt-hide');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonnes[index]).addClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonnes[0]).removeClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.edt-jour-' + index).addClass('col-edt-hide');
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.edt-jour-0').removeClass('col-edt-hide');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).on('click', '#jourCourant', function (e) {
  e.stopPropagation();
  e.preventDefault();
  var now = new Date();
  var colonnes = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.jour');
  var index = getColonneActive(colonnes);
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonnes[index]).addClass('col-edt-hide');
  jquery__WEBPACK_IMPORTED_MODULE_8___default()(colonnes[now.getDay() - 1]).removeClass('col-edt-hide');
});

/***/ }),

/***/ "./assets/js/fetch.js":
/*!****************************!*\
  !*** ./assets/js/fetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "load": () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);









// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/fetch.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 09:01
var request = function request(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var options = {
    method: method
  };

  if ('GET' === method) {
    url += '?' + new URLSearchParams(params).toString();
  } else {
    options.body = JSON.stringify(params);
    options.headers = {
      'Content-Type': 'application/json;charset=utf-8'
    };
  }

  return fetch(url, options).then(function (response) {
    return response.json();
  });
};

var get = function get(url, params) {
  return request(url, params, 'GET');
};
var post = function post(url, params) {
  return request(url, params, 'POST');
};
var load = function load(url, params, objet) {
  //loader?window.umbrella.Spinner.show()
  objet.innerHTML = '';
  fetch(Routing.generate(url, params)).then(function (response) {
    return response.text();
  }).then(function (body) {
    objet.innerHTML = body; //loader?window.umbrella.Spinner.hide()
  });
};

/***/ }),

/***/ "./assets/js/material.js":
/*!*******************************!*\
  !*** ./assets/js/material.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/material.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:40
// Material input
//
$(document).on('focus', '.form-type-material .form-control:not(.bootstrap-select)', function () {
  materialDoFloat($(this));
});
$(document).on('focusout', '.form-type-material .form-control:not(.bootstrap-select)', function () {
  if ($(this).val() === '') {
    materialNoFloat($(this));
  }
}); // Auto focus inputs

materialDoFloat($('.form-type-material .form-control[autofocus="true"]'));

function materialDoFloat(e) {
  if (e.parent('.input-group-input').length) {
    e.parent('.input-group-input').addClass('do-float');
  } else {
    e.closest('.form-group').addClass('do-float');
  }
}

function materialNoFloat(e) {
  if (e.parent('.input-group-input').length) {
    e.parent('.input-group-input').removeClass('do-float');
  } else {
    e.closest('.form-group').removeClass('do-float');
  }
}

$('.form-type-material .form-control').each(function () {
  if ($(this).val().length > 0) {
    //if ($(this).is('[data-provide~="selectpicker"]')) {
    //  return
    //}
    materialDoFloat($(this));
  }
});

/***/ }),

/***/ "./assets/js/modaler.js":
/*!******************************!*\
  !*** ./assets/js/modaler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/modaler.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/03/2021 14:29
// =====================
// Modaler
// =====================
//
+function ($) {
  var configModaler = {
    url: '',
    isModal: false,
    html: '',
    target: '',
    type: '',
    size: '',
    title: '',
    backdrop: true,
    headerVisible: true,
    footerVisible: true,
    confirmVisible: true,
    confirmText: 'Ok',
    confirmClass: 'btn btn-w-sm btn-primary',
    cancelVisible: false,
    cancelText: 'Cancel',
    cancelClass: 'btn btn-w-sm btn-secondary',
    bodyExtraClass: '',
    spinner: '<div class="h-200 center-vh"><svg class="spinner-circle-material-svg" viewBox="0 0 50 50"><circle class="circle" cx="25" cy="25" r="20"></svg></div>',
    autoDestroy: true,
    // Events
    onShow: null,
    onShown: null,
    onHide: null,
    onHidden: null,
    onConfirm: null,
    onCancel: null,
    // Private options
    modalId: null
  };

  function guid(len) {
    if (len == undefined) {
      len = 5;
    }

    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, len);
  }

  modaler = function modaler(options) {
    var setting = $.extend({}, configModaler, options);

    if (setting.modalId) {
      $('#' + setting.modalId).modal('show');
      return;
    }

    var id = 'modal-' + guid();

    var handleCallback = function handleCallback(id) {
      // Bootstrap modal events
      //
      if (setting.onShow) {
        $('#' + id).on('show.bs.modal', function (e) {//setting.onShow();
        });
      }

      if (setting.onShown) {
        $('#' + id).on('shown.bs.modal', function (e) {//setting.onShown();
        });
      }

      if (setting.onHide) {
        $('#' + id).on('hide.bs.modal', function (e) {
          setting.onHide();
        });
      }

      if (setting.onHidden) {
        $('#' + id).on('hidden.bs.modal', function (e) {
          setting.onHidden();
        });
      } // Handle confirm callback
      //


      $('#' + id).find('[data-perform="confirm"]').on('click', function () {
        // Hasn't set
        if (setting.onConfirm == null) {
          return;
        } // Is a function


        if ($.isFunction(setting.onConfirm)) {
          setting.onConfirm($('#' + id));
          return;
        } // Is string value, so call it


        if (setting.onConfirm.substring) {
          app.call(setting.onConfirm, $('#' + id));
        }
      }); // Handle cancel callback
      //

      $('#' + id).find('[data-perform="cancel"]').on('click', function () {
        // Hasn't set
        if (setting.onCancel == null) {
          return;
        } // Is a function


        if ($.isFunction(setting.onCancel)) {
          setting.onCancel($('#' + id));
          return;
        } // Is string value, so call it


        if (setting.onCancel.substring) {
          app.call(setting.onCancel, $('#' + id));
        }
      });
    }; //----------------------------------
    // We recieve modal markup from url
    //


    if (setting.isModal) {
      $('<div>').load(setting.url, function () {
        $('body').append($(this).find('.modal').attr('id', id).outerHTML());
        $('#' + id).modal('show');
        $('#' + id).one('shown.bs.modal', function (e) {//todo: a confirmer $('#'+ id).find('.modal-body').perfectScrollbar('update');
        }); // Destroy after close
        //

        if (setting.autoDestroy) {
          $('#' + id).on('hidden.bs.modal', function () {
            $('#' + id).remove();
          });
        } else {
          $(setting["this"]).attr('data-modal-id', id);
        }

        handleCallback(id);
      });
    } ////----------------------------------
    // We should design the modal
    //
    else {
        switch (setting.size) {
          case 'sm':
            setting.size = 'modal-sm';
            break;

          case 'lg':
            setting.size = 'modal-lg';
            break;

          default: //setting.size = '';

        }

        if (setting.type) {
          setting.type = 'modal-' + setting.type;
        } // Header code
        //


        var html_header = '';

        if (setting.headerVisible) {
          html_header += '<div class="modal-header"> \
            <h5 class="modal-title">' + setting.title + '</h5> \
            <button type="button" class="close myClose" data-dismiss="modal"><span aria-hidden="true">&times;</span></button> \
          </div>';
        } // Footer code
        //


        var html_footer = '';

        if (setting.footerVisible) {
          html_footer += '<div class="modal-footer">';

          if (setting.cancelVisible) {
            html_footer += '<button class="' + setting.cancelClass + '" data-dismiss="modal" data-perform="cancel">' + setting.cancelText + '</button>';
          }

          if (setting.confirmVisible) {
            html_footer += '<button class="' + setting.confirmClass + '" data-dismiss="modal" data-perform="confirm">' + setting.confirmText + '</button>';
          }

          html_footer += '</div>';
        } // Modal code
        //


        var modal_html = '<div class="modal fade ' + setting.type + '" id="' + id + '" tabindex="-1"' + (!setting.backdrop ? ' data-backdrop="false"' : '') + '> \
            <div class="modal-dialog ' + setting.size + '"> \
              <div class="modal-content"> \
                ' + html_header + ' \
                <div class="modal-body ' + setting.bodyExtraClass + '"> \
                  ' + setting.spinner + ' \
                </div> \
                ' + html_footer + ' \
              </div> \
            </div> \
          </div>'; // Show modal

        $('body').append(modal_html);
        $('#' + id).modal('show'); // Destroy after close
        //

        if (setting.autoDestroy) {
          $('#' + id).on('hidden.bs.modal', function () {
            $('#' + id).remove();
          });
        } else {
          $(setting["this"]).attr('data-modal-id', id);
        } // Load data into the modal
        //


        if (setting.url) {
          $('#' + id).find('.modal-body').load(setting.url, function () {
            //todo: a confirmer $(this).perfectScrollbar('update');
            handleCallback(id);
          });
        } else if (setting.html) {
          $('#' + id).find('.modal-body').html(setting.html);
          handleCallback(id);
        } else if (setting.target) {
          $('#' + id).find('.modal-body').html($(setting.target).html());
          handleCallback(id);
        }
      }
  };
}(jQuery);

/***/ }),

/***/ "./assets/js/search.js":
/*!*****************************!*\
  !*** ./assets/js/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/search.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 18:18
$(document).on('keyup', '#search', function (e) {
  var keyword = $(this).val();
  var search_reponse_etudiant = $('#search_reponse_etudiant');
  var search_reponse_personnel = $('#search_reponse_personnel');
  var search_reponse_autre = $('#search_reponse_autre');

  if (keyword.length > 2) {
    $.ajax({
      url: Routing.generate('recherche', {
        keyword: keyword
      }),
      dataType: 'json',
      success: function success(data) {
        var html = '';

        if (data.etudiants.length > 0) {
          jQuery.each(data.etudiants, function (index, etudiant) {
            html = html + '<a class="media" href="' + Routing.generate('user_profil', {
              type: 'etudiant',
              slug: etudiant.slug
            }) + '" target="_blank">\n';

            if (etudiant.photo === 'noimage.png' || etudiant.photo == null) {
              html = html + '<div class="avatar-circle-sm">\n' + '    <span class="initials">' + etudiant.avatarInitiales + '</span>\n' + '</div>';
            } else {
              html = html + '<img class="avatar avatar-sm" src="' + data.basepath + 'etudiants/' + etudiant.photo + '" alt="Photo de profil de ' + etudiant.displayPr + '">\n';
            }

            html = html + '                        <div class="media-body">\n' + '                            <p><strong>' + etudiant.displayPr + ' (' + etudiant.semestre + ')</strong>\n' + '                                <time class="float-right">' + etudiant.groupes + '</time>\n' + '                            </p>\n' + '                        </div>\n' + '                    </a>';
          });
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre recherche <strong>"' + keyword + '"</strong></div>';
        }

        search_reponse_etudiant.empty().append(html);
        html = '';

        if (data.personnels.length > 0) {
          jQuery.each(data.personnels, function (index, personnel) {
            html = html + '<a class="media items-center" href="' + Routing.generate('user_profil', {
              type: 'personnel',
              slug: personnel.slug
            }) + '" target="_blank">\n';

            if (personnel.photo === 'noimage.png' || personnel.photo == null) {
              html = html + '<div class="avatar-circle-sm">\n' + '    <span class="initials">' + personnel.avatarInitiales + '</span>\n' + '</div>';
            } else {
              html = html + '<img class="avatar avatar-sm" src="' + data.basepath + 'personnels/' + personnel.photo + '" alt="Photo de profil de ' + personnel.displayPr + '">\n';
            }

            html = html + '                        <p>' + personnel.displayPr + '</p>\n' + '</a>';
          });
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre recherche <strong>"' + keyword + '"</strong></div>';
        }

        search_reponse_personnel.empty().append(html);
        html = '';

        if (data.autres.length > 0) {
          jQuery.each(data.autres, function (index, autre) {
            html = html + '<a class="media items-center" href="">\n' + '                        <img class="avatar avatar-sm" src="../assets/img/avatar/1.jpg" alt="...">\n' + '                        <p>' + autre + '</p>\n' + '                    </a>';
          });
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre recherche <strong>"' + keyword + '"</strong></div>';
        }

        search_reponse_autre.empty().append(html);
      }
    });
  } else {
    var html = '<div class="alert alert-info">Saisir au moins 3 caractères</div>';
    search_reponse_autre.empty().append(html);
    search_reponse_personnel.empty().append(html);
    search_reponse_etudiant.empty().append(html);
  }
});

/***/ }),

/***/ "./assets/js/validator-bs4.js":
/*!************************************!*\
  !*** ./assets/js/validator-bs4.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/validator-bs4.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:40
+function ($) {
  'use strict'; // VALIDATOR CLASS DEFINITION
  // ==========================

  function getValue($el) {
    return $el.is('[type="checkbox"]') ? $el.prop('checked') : $el.is('[type="radio"]') ? !!$('[name="' + $el.attr('name') + '"]:checked').length : $el.is('select[multiple]') ? ($el.val() || []).length : $el.val();
  }

  var Validator = function Validator(element, options) {
    this.options = options;
    this.validators = $.extend({}, Validator.VALIDATORS, options.custom);
    this.$element = $(element);
    this.$btn = $('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr('id') + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
    this.update();
    this.$element.on('input.bs.validator change.bs.validator focusout.bs.validator', $.proxy(this.onInput, this));
    this.$element.on('submit.bs.validator', $.proxy(this.onSubmit, this));
    this.$element.on('reset.bs.validator', $.proxy(this.reset, this));
    this.$element.find('[data-match]').each(function () {
      var $this = $(this);
      var target = $this.attr('data-match');
      $(target).on('input.bs.validator', function (e) {
        getValue($this) && $this.trigger('input.bs.validator');
      });
    }); // run validators for fields with values, but don't clobber server-side errors

    this.$inputs.filter(function () {
      return getValue($(this)) && !$(this).closest('.has-error').length;
    }).trigger('focusout');
    this.$element.attr('novalidate', true); // disable automatic native validation
  };

  Validator.VERSION = '0.11.9';
  Validator.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)';
  Validator.FOCUS_OFFSET = 20;
  Validator.DEFAULTS = {
    delay: 500,
    html: false,
    disable: true,
    focus: true,
    custom: {},
    errors: {
      match: 'Does not match',
      minlength: 'Not long enough'
    },
    feedback: {
      success: 'glyphicon-ok',
      error: 'glyphicon-remove'
    }
  };
  Validator.VALIDATORS = {
    'native': function native($el) {
      var el = $el[0];

      if (el.checkValidity) {
        return !el.checkValidity() && !el.validity.valid && (el.validationMessage || "error!");
      }
    },
    'match': function match($el) {
      var target = $el.attr('data-match');
      return $el.val() !== $(target).val() && Validator.DEFAULTS.errors.match;
    },
    'minlength': function minlength($el) {
      var minlength = $el.attr('data-minlength');
      return $el.val().length < minlength && Validator.DEFAULTS.errors.minlength;
    }
  };

  Validator.prototype.update = function () {
    var self = this;
    this.$inputs = this.$element.find(Validator.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function () {
      self.clearErrors($(this));
    }));
    this.toggleSubmit();
    return this;
  };

  Validator.prototype.onInput = function (e) {
    var self = this;
    var $el = $(e.target);
    var deferErrors = e.type !== 'focusout';
    if (!this.$inputs.is($el)) return;
    this.validateInput($el, deferErrors).done(function () {
      self.toggleSubmit();
    });
  };

  Validator.prototype.validateInput = function ($el, deferErrors) {
    var value = getValue($el);
    var prevErrors = $el.data('bs.validator.errors');
    if ($el.is('[type="radio"]')) $el = this.$element.find('input[name="' + $el.attr('name') + '"]');
    var e = $.Event('validate.bs.validator', {
      relatedTarget: $el[0]
    });
    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    var self = this;
    return this.runValidators($el).done(function (errors) {
      $el.data('bs.validator.errors', errors);
      errors.length ? deferErrors ? self.defer($el, self.showErrors) : self.showErrors($el) : self.clearErrors($el);

      if (!prevErrors || errors.toString() !== prevErrors.toString()) {
        e = errors.length ? $.Event('invalid.bs.validator', {
          relatedTarget: $el[0],
          detail: errors
        }) : $.Event('valid.bs.validator', {
          relatedTarget: $el[0],
          detail: prevErrors
        });
        self.$element.trigger(e);
      }

      self.toggleSubmit();
      self.$element.trigger($.Event('validated.bs.validator', {
        relatedTarget: $el[0]
      }));
    });
  };

  Validator.prototype.runValidators = function ($el) {
    var errors = [];
    var deferred = $.Deferred();
    $el.data('bs.validator.deferred') && $el.data('bs.validator.deferred').reject();
    $el.data('bs.validator.deferred', deferred);

    function getValidatorSpecificError(key) {
      return $el.attr('data-' + key + '-error');
    }

    function getValidityStateError() {
      var validity = $el[0].validity;
      return validity.typeMismatch ? $el.attr('data-type-error') : validity.patternMismatch ? $el.attr('data-pattern-error') : validity.stepMismatch ? $el.attr('data-step-error') : validity.rangeOverflow ? $el.attr('data-max-error') : validity.rangeUnderflow ? $el.attr('data-min-error') : validity.valueMissing ? $el.attr('data-required-error') : null;
    }

    function getGenericError() {
      return $el.attr('data-error');
    }

    function getErrorMessage(key) {
      return getValidatorSpecificError(key) || getValidityStateError() || getGenericError();
    }

    $.each(this.validators, $.proxy(function (key, validator) {
      var error = null;

      if ((getValue($el) || $el.attr('required')) && ($el.attr('data-' + key) !== undefined || key == 'native') && (error = validator.call(this, $el))) {
        error = getErrorMessage(key) || error;
        !~errors.indexOf(error) && errors.push(error);
      }
    }, this));

    if (!errors.length && getValue($el) && $el.attr('data-remote')) {
      this.defer($el, function () {
        var data = {};
        data[$el.attr('name')] = getValue($el);
        $.get($el.attr('data-remote'), data).fail(function (jqXHR, textStatus, error) {
          errors.push(getErrorMessage('remote') || error);
        }).always(function () {
          deferred.resolve(errors);
        });
      });
    } else deferred.resolve(errors);

    return deferred.promise();
  };

  Validator.prototype.validate = function () {
    var self = this;
    $.when(this.$inputs.map(function (el) {
      return self.validateInput($(this), false);
    })).then(function () {
      self.toggleSubmit();
      self.focusError();
    });
    return this;
  };

  Validator.prototype.focusError = function () {
    if (!this.options.focus) return;
    var $input = this.$element.find(".has-error:first :input");
    if ($input.length === 0) return;
    $('html, body').animate({
      scrollTop: $input.offset().top - Validator.FOCUS_OFFSET
    }, 250);
    $input.focus();
  };

  Validator.prototype.showErrors = function ($el) {
    var method = this.options.html ? 'html' : 'text';
    var errors = $el.data('bs.validator.errors');
    var $group = $el.closest('.form-group');
    var $block = $group.find('.invalid-feedback');
    var $feedback = $group.find('.invalid-feedback');
    if (!errors.length) return;
    $el.addClass('is-invalid');
    errors = $('<ul/>').addClass('list-unstyled').append($.map(errors, function (error) {
      return $('<li/>')[method](error);
    }));
    $block.data('bs.validator.originalContent') === undefined && $block.data('bs.validator.originalContent', $block.html());
    $block.empty().append(errors);
    $group.addClass('has-error has-danger');
    $group.hasClass('has-feedback') && $feedback.removeClass(this.options.feedback.success) && $feedback.addClass(this.options.feedback.error) && $group.removeClass('has-success');
  };

  Validator.prototype.clearErrors = function ($el) {
    var $group = $el.closest('.form-group');
    var $block = $group.find('.invalid-feedback');
    var $feedback = $group.find('.invalid-feedback');
    $el.removeClass('is-invalid');
    $block.html($block.data('bs.validator.originalContent'));
    $group.removeClass('has-error has-danger has-success');
    $group.hasClass('has-feedback') && $feedback.removeClass(this.options.feedback.error) && $feedback.removeClass(this.options.feedback.success) && getValue($el) && $feedback.addClass(this.options.feedback.success) && $group.addClass('has-success');
  };

  Validator.prototype.hasErrors = function () {
    function fieldErrors() {
      return !!($(this).data('bs.validator.errors') || []).length;
    }

    return !!this.$inputs.filter(fieldErrors).length;
  };

  Validator.prototype.isIncomplete = function () {
    function fieldIncomplete() {
      var value = getValue($(this));
      return !(typeof value == "string" ? $.trim(value) : value);
    }

    return !!this.$inputs.filter('[required]').filter(fieldIncomplete).length;
  };

  Validator.prototype.onSubmit = function (e) {
    this.validate();
    if (this.isIncomplete() || this.hasErrors()) e.preventDefault();
  };

  Validator.prototype.toggleSubmit = function () {
    if (!this.options.disable) return;
    this.$btn.toggleClass('disabled', this.isIncomplete() || this.hasErrors());
  };

  Validator.prototype.defer = function ($el, callback) {
    callback = $.proxy(callback, this, $el);
    if (!this.options.delay) return callback();
    window.clearTimeout($el.data('bs.validator.timeout'));
    $el.data('bs.validator.timeout', window.setTimeout(callback, this.options.delay));
  };

  Validator.prototype.reset = function () {
    this.$element.find('.invalid-feedback').removeClass(this.options.feedback.error).removeClass(this.options.feedback.success);
    this.$inputs.removeData(['bs.validator.errors', 'bs.validator.deferred']).removeClass('is-invalid').each(function () {
      var $this = $(this);
      var timeout = $this.data('bs.validator.timeout');
      window.clearTimeout(timeout) && $this.removeData('bs.validator.timeout');
    });
    this.$element.find('.invalid-feedback').each(function () {
      var $this = $(this);
      var originalContent = $this.data('bs.validator.originalContent');
      $this.removeData('bs.validator.originalContent').html(originalContent);
    });
    this.$btn.removeClass('disabled');
    this.$element.find('.has-error, .has-danger, .has-success').removeClass('has-error has-danger has-success');
    return this;
  };

  Validator.prototype.destroy = function () {
    this.reset();
    this.$element.removeAttr('novalidate').removeData('bs.validator').off('.bs.validator');
    this.$inputs.off('.bs.validator');
    this.options = null;
    this.validators = null;
    this.$element = null;
    this.$btn = null;
    this.$inputs = null;
    return this;
  }; // VALIDATOR PLUGIN DEFINITION
  // ===========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = $.extend({}, Validator.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      var data = $this.data('bs.validator');
      if (!data && option == 'destroy') return;
      if (!data) $this.data('bs.validator', data = new Validator(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.validator;
  $.fn.validator = Plugin;
  $.fn.validator.Constructor = Validator; // VALIDATOR NO CONFLICT
  // =====================

  $.fn.validator.noConflict = function () {
    $.fn.validator = old;
    return this;
  }; // VALIDATOR DATA-API
  // ==================


  $(window).on('load', function () {
    $('form[data-toggle="validator"]').each(function () {
      var $form = $(this);
      Plugin.call($form, $form.data());
    });
  });
}(jQuery);

/***/ }),

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2NvbXBvbmVudHMvRGF0ZVBpY2tlci5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VsZWN0Q2hhbmdlV2lkZ2V0LmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9hc3NldHMvY29tcG9uZW50cy9TZWxlY3RDb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2NvbXBvbmVudHMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL2Fzc2V0cy9qcy9mZXRjaC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL21hdGVyaWFsLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9hc3NldHMvanMvbW9kYWxlci5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3ZhbGlkYXRvci1iczQuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL2Fzc2V0cy9jc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsImRhdGFzZXQiLCJvcHRpb25zIiwiSlNPTiIsInBhcnNlIiwiZGEiLCJMQU5HIiwiZmxhdHBpY2tyIiwiSFRNTElucHV0RWxlbWVudCIsIlNlbGVjdENoYW5nZVdpZGdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicm91dGUiLCJ0YXJnZXQiLCJwYXJhbXMiLCJ2YWx1ZSIsIl91cGRhdGUiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiU2VsZWN0Q29tcGxldGUiLCJUb21TZWxlY3QiLCJBU0MiLCJERVNDIiwiSUNPTl9BU0MiLCJJQ09OX0RFU0MiLCJUYWJsZSIsImRpdiIsImJhc2VfdXJsIiwiYWpheCIsInVybCIsInRhYmxlIiwicXVlcnlTZWxlY3RvciIsInRhYmxlQm9keSIsInBhZ2VBY3RpdmUiLCJuYkVsZW1lbnRQZXJQYWdlIiwicGFnZUxlbmd0aCIsIm9yZGVyIiwiZmlsdGVyIiwiaW5uZXJIVE1MIiwiY29sdW1ucyIsImZvckVhY2giLCJjb2x1bW4iLCJvcmRlcmFibGUiLCJpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImN1cnNvciIsImVsZW0iLCJfYnVpbGRBcnJheSIsImZvcm0iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlucHV0cyIsInNlbGVjdHMiLCJpbnB1dCIsInR5cGUiLCJldmVudCIsImxlbmd0aCIsIl9nZXRGaWx0ZXJGcm9tRmllbGQiLCJfZmlsdGVyQXJyYXkiLCJzZWxlY3QiLCJwYWdpbmciLCJwYWdpbmdfaWQiLCJwcmV2ZW50RGVmYXVsdCIsIl91cGRhdGVIZWFkZXIiLCJ0YWJsZWF1Iiwib2JqIiwiT2JqZWN0IiwiZW50cmllcyIsImVudHJ5Iiwia2V5IiwiaXRlbSIsIl9jb252ZXJ0VG9GZXRjaCIsInRoZW4iLCJkYXRhIiwiaHRtbCIsIl91cGRhdGVQYWdpbmF0aW9uIiwidGV4dGUiLCJpbm5lclRleHQiLCJuYXYiLCJwcmV2aW91c0Rpc2FibGVkIiwiZmlyc3RQYWdlIiwibmV4dERpc2FibGVkIiwibGFzdFBhZ2UiLCJwYWdlQ3V0TG93IiwibnVtQWN0aXZlUGFnZSIsInBhZ2VDdXRIaWdoIiwibmJQYWdlcyIsImkiLCJwYWciLCJwIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJwYWdlIiwibmFtZSIsInQiLCJzcGxpdCIsInN1YnN0ciIsIl9leHRyYWN0TmFtZUZyb21Gb3JtIiwiY2hlY2tlZCIsInB1c2giLCJIVE1MRWxlbWVudCIsInJlcXVpcmUiLCJsb29rdXAiLCJnZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIiQiLCJvbiIsImZpbGVuYW1lIiwiZmlsZXMiLCJjdXJyZW50VGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWVudURhcmtUaGVtZSIsImVsZW1lbnRzIiwiZWwiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGhlbWUiLCJjb250YWlucyIsInNldEl0ZW0iLCJhbm5lZSIsImdldFBhcmVudEJ5VGFnTmFtZSIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImFkZCIsInJlYWR5IiwiY2hhbmdlIiwibmV4dCIsImpvaW4iLCJwcmVsb2FkZXIiLCJzcGVlZCIsImRhdGFBdHRyIiwiZmFkZU91dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3NzIiwidXBkYXRlSW50ZXJmYWNlIiwidmFsaWRhdG9yIiwiYWpheENvbXBsZXRlIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlVG9nZ2xlIiwibW9kYWxlciIsImdldERhdGFPcHRpb25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGUiLCJmb3JtYXQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdWNjZXNzIiwiZWFjaCIsImNvbG9yIiwiaGFzRGF0YUF0dHIiLCJ0b29sdGlwIiwiY29udGFpbmVyIiwidHJpZ2dlciIsInRlbXBsYXRlIiwiaGFzQ2xhc3MiLCJjbG9zZSIsIm9wZW4iLCJhZGRDbGFzcyIsImZvY3VzIiwic2lkZWJhciIsInBzIiwiUGVyZmVjdFNjcm9sbGJhciIsIiRzdWJtZW51IiwiaXMiLCJzbGlkZVVwIiwidG9nZ2xlRm9sZCIsImFwcCIsInRvZ2dsZVN0YXRlIiwiZm9sZCIsInN0YXRlIiwidW5mb2xkIiwidG9nZ2xlSGlkZSIsImhpZGUiLCJzaG93IiwicHJlcGVuZCIsInJlbW92ZSIsInF1aWNrdmlldyIsInFwcyIsInVwZGF0ZSIsInJlbG9hZFF2IiwiZGVzdHJveSIsImdldFRhcmdldCIsInF2IiwiYXR0ciIsImxvYWQiLCJub3QiLCJhZnRlciIsInByZXYiLCJ1bmRlZmluZWQiLCJnZXRDb2xvbm5lQWN0aXZlIiwiY29sb25uZXMiLCJpbmRleCIsImNvbG9ubmUiLCJub3ciLCJEYXRlIiwiZ2V0RGF5IiwicmVxdWVzdCIsIm1ldGhvZCIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0Iiwib2JqZXQiLCJ0ZXh0IiwibWF0ZXJpYWxEb0Zsb2F0IiwidmFsIiwibWF0ZXJpYWxOb0Zsb2F0IiwicGFyZW50IiwiY29uZmlnTW9kYWxlciIsImlzTW9kYWwiLCJzaXplIiwidGl0bGUiLCJiYWNrZHJvcCIsImhlYWRlclZpc2libGUiLCJmb290ZXJWaXNpYmxlIiwiY29uZmlybVZpc2libGUiLCJjb25maXJtVGV4dCIsImNvbmZpcm1DbGFzcyIsImNhbmNlbFZpc2libGUiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ2xhc3MiLCJib2R5RXh0cmFDbGFzcyIsInNwaW5uZXIiLCJhdXRvRGVzdHJveSIsIm9uU2hvdyIsIm9uU2hvd24iLCJvbkhpZGUiLCJvbkhpZGRlbiIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwibW9kYWxJZCIsImd1aWQiLCJsZW4iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsInNldHRpbmciLCJleHRlbmQiLCJtb2RhbCIsImhhbmRsZUNhbGxiYWNrIiwiaXNGdW5jdGlvbiIsInN1YnN0cmluZyIsImNhbGwiLCJhcHBlbmQiLCJvdXRlckhUTUwiLCJvbmUiLCJodG1sX2hlYWRlciIsImh0bWxfZm9vdGVyIiwibW9kYWxfaHRtbCIsImpRdWVyeSIsImtleXdvcmQiLCJzZWFyY2hfcmVwb25zZV9ldHVkaWFudCIsInNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCIsInNlYXJjaF9yZXBvbnNlX2F1dHJlIiwiZGF0YVR5cGUiLCJldHVkaWFudHMiLCJldHVkaWFudCIsInNsdWciLCJwaG90byIsImF2YXRhckluaXRpYWxlcyIsImJhc2VwYXRoIiwiZGlzcGxheVByIiwic2VtZXN0cmUiLCJncm91cGVzIiwiZW1wdHkiLCJwZXJzb25uZWxzIiwicGVyc29ubmVsIiwiYXV0cmVzIiwiYXV0cmUiLCJnZXRWYWx1ZSIsIiRlbCIsInByb3AiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwiVkFMSURBVE9SUyIsImN1c3RvbSIsIiRlbGVtZW50IiwiJGJ0biIsInByb3h5Iiwib25JbnB1dCIsIm9uU3VibWl0IiwicmVzZXQiLCIkdGhpcyIsIiRpbnB1dHMiLCJWRVJTSU9OIiwiSU5QVVRfU0VMRUNUT1IiLCJGT0NVU19PRkZTRVQiLCJERUZBVUxUUyIsImRlbGF5IiwiZGlzYWJsZSIsImVycm9ycyIsIm1hdGNoIiwibWlubGVuZ3RoIiwiZmVlZGJhY2siLCJlcnJvciIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJwcm90b3R5cGUiLCJzZWxmIiwiY2xlYXJFcnJvcnMiLCJ0b2dnbGVTdWJtaXQiLCJkZWZlckVycm9ycyIsInZhbGlkYXRlSW5wdXQiLCJkb25lIiwicHJldkVycm9ycyIsIkV2ZW50IiwicmVsYXRlZFRhcmdldCIsImlzRGVmYXVsdFByZXZlbnRlZCIsInJ1blZhbGlkYXRvcnMiLCJkZWZlciIsInNob3dFcnJvcnMiLCJkZXRhaWwiLCJkZWZlcnJlZCIsIkRlZmVycmVkIiwicmVqZWN0IiwiZ2V0VmFsaWRhdG9yU3BlY2lmaWNFcnJvciIsImdldFZhbGlkaXR5U3RhdGVFcnJvciIsInR5cGVNaXNtYXRjaCIsInBhdHRlcm5NaXNtYXRjaCIsInN0ZXBNaXNtYXRjaCIsInJhbmdlT3ZlcmZsb3ciLCJyYW5nZVVuZGVyZmxvdyIsInZhbHVlTWlzc2luZyIsImdldEdlbmVyaWNFcnJvciIsImdldEVycm9yTWVzc2FnZSIsImluZGV4T2YiLCJmYWlsIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiYWx3YXlzIiwicmVzb2x2ZSIsInByb21pc2UiLCJ2YWxpZGF0ZSIsIndoZW4iLCJtYXAiLCJmb2N1c0Vycm9yIiwiJGlucHV0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIiRncm91cCIsIiRibG9jayIsIiRmZWVkYmFjayIsImhhc0Vycm9ycyIsImZpZWxkRXJyb3JzIiwiaXNJbmNvbXBsZXRlIiwiZmllbGRJbmNvbXBsZXRlIiwidHJpbSIsImNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZURhdGEiLCJ0aW1lb3V0Iiwib3JpZ2luYWxDb250ZW50IiwicmVtb3ZlQXR0ciIsIm9mZiIsIlBsdWdpbiIsIm9wdGlvbiIsIm9sZCIsImZuIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwiJGZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztJQUVxQkEsVTs7Ozs7QUFFakIsd0JBQWU7QUFBQTs7QUFBQTs7QUFDWDs7QUFDQSxRQUFJLE1BQUtDLE9BQUwsQ0FBYUMsT0FBakIsRUFBMEI7QUFDdEIsWUFBS0EsT0FBTCxHQUFlQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxNQUFLSCxPQUFMLENBQWFDLE9BQXhCLENBQWY7QUFDSCxLQUZELE1BRU87QUFDSCxZQUFLQSxPQUFMLEdBQWUsRUFBZjtBQUNBLFlBQUtBLE9BQUwsQ0FBYSxZQUFiLElBQTZCLE9BQTdCO0FBQ0g7O0FBQ0QsVUFBS0EsT0FBTCxDQUFhLFFBQWIsSUFBeUJHLEVBQUUsQ0FBQ0MsSUFBNUI7QUFSVztBQVNkOzs7O1dBRUQsNkJBQXFCO0FBQ2pCLFdBQUtDLFNBQUwsR0FBaUJBLG1EQUFTLENBQUMsSUFBRCxFQUFPLEtBQUtMLE9BQVosQ0FBMUI7QUFDSDs7OztpQ0FmbUNNLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R4QztBQUNBO0FBQ0E7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OUssR0FBQyxDQUFDd1EsRUFBRixDQUFLdk8sU0FBTCxDQUFleU8sVUFBZixHQUE0QixZQUFZO0FBQ3RDMVEsS0FBQyxDQUFDd1EsRUFBRixDQUFLdk8sU0FBTCxHQUFpQnNPLEdBQWpCO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FIRCxDQXRYWSxDQTRYWjtBQUNBOzs7QUFFQXZRLEdBQUMsQ0FBQ0gsTUFBRCxDQUFELENBQVVJLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLFlBQVk7QUFDL0JELEtBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DNkMsSUFBbkMsQ0FBd0MsWUFBWTtBQUNsRCxVQUFJOE4sS0FBSyxHQUFHM1EsQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUNBcVEsWUFBTSxDQUFDckgsSUFBUCxDQUFZMkgsS0FBWixFQUFtQkEsS0FBSyxDQUFDN1MsSUFBTixFQUFuQjtBQUNELEtBSEQ7QUFJRCxHQUxEO0FBT0QsQ0F0WUEsQ0FzWUN5TCxNQXRZRCxDQUFELEM7Ozs7Ozs7Ozs7OztBQ05BIiwiZmlsZSI6ImFzc2V0c19qc19hcHBfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvY29tcG9uZW50cy9EYXRlUGlja2VyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTMvMDkvMjAyMSAyMDo1OVxuXG5pbXBvcnQgZmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcidcbmltcG9ydCAnZmxhdHBpY2tyL2Rpc3QvbDEwbi9mci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIEhUTUxJbnB1dEVsZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIGlmICh0aGlzLmRhdGFzZXQub3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZSh0aGlzLmRhdGFzZXQub3B0aW9ucylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IFtdXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbJ2RhdGVGb3JtYXQnXSA9ICdkL20vWSdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnNbJ2xvY2FsZSddID0gZGEuTEFOR1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3IgPSBmbGF0cGlja3IodGhpcywgdGhpcy5vcHRpb25zKVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9jb21wb25lbnRzL1NlbGVjdENoYW5nZVdpZGdldC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDEzLzA5LzIwMjEgMjA6NTlcblxuaW1wb3J0IHtwb3N0fSBmcm9tICcuLi9qcy9mZXRjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0Q2hhbmdlV2lkZ2V0IGV4dGVuZHMgSFRNTFNlbGVjdEVsZW1lbnQge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIHN1cGVyKClcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlID0gZS50YXJnZXQuZGF0YXNldC5yb3V0ZVxuICAgICAgdGhpcy5wYXJhbXMgPSBKU09OLnBhcnNlKGUudGFyZ2V0LmRhdGFzZXQucGFyYW1zKVxuICAgICAgdGhpcy5wYXJhbXMudmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgLy90b2RvOiDDqXZlbnR1ZWxsZW1lbnQgZmllbGQgZXQgcG9zdD9cbiAgICAgIHRoaXMuX3VwZGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIF91cGRhdGUgKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucGFyYW1zKVxuICAgIHBvc3QoXG4gICAgICB0aGlzLnJvdXRlLFxuICAgICAgdGhpcy5wYXJhbXNcbiAgICApXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9jb21wb25lbnRzL1NlbGVjdENvbXBsZXRlLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTMvMDkvMjAyMSAyMTowMFxuXG5pbXBvcnQgVG9tU2VsZWN0IGZyb20gJ3RvbS1zZWxlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdENvbXBsZXRlIGV4dGVuZHMgSFRNTFNlbGVjdEVsZW1lbnQge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHt9XG4gICAgc3VwZXIoKVxuICAgIGlmICh0aGlzLmRhdGFzZXQub3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IEpTT04ucGFyc2UodGhpcy5kYXRhc2V0Lm9wdGlvbnMpXG4gICAgfVxuICAgIG5ldyBUb21TZWxlY3QodGhpcywgb3B0aW9ucylcblxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvY29tcG9uZW50cy90YWJsZS5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA4LzEwLzIwMjEgMTY6MTVcblxuaW1wb3J0IHtwb3N0fSBmcm9tICcuLi9qcy9mZXRjaCdcblxuY29uc3QgQVNDID0gJ2FzYydcbmNvbnN0IERFU0MgPSAnZGVzYydcblxuY29uc3QgSUNPTl9BU0MgPSAnJiM5NjYwOydcbmNvbnN0IElDT05fREVTQyA9ICcmIzk2NTA7J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5kaXYgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBKU09OLnBhcnNlKHRoaXMuZGF0YXNldC5vcHRpb25zKVxuICAgIHRoaXMuYmFzZV91cmwgPSB0aGlzLm9wdGlvbnMuYWpheC51cmxcblxuICAgIHRoaXMudGFibGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlLmRhdGFibGUnKVxuICAgIHRoaXMudGFibGVCb2R5ID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCd0Ym9keScpXG4gICAgdGhpcy5wYWdlQWN0aXZlID0gdGhpcy5vcHRpb25zLnBhZ2VBY3RpdmUgLy9wYXIgZMOpZmF1dCBvbiByw6ljdXDDqHJlXG4gICAgdGhpcy5uYkVsZW1lbnRQZXJQYWdlID0gdGhpcy5vcHRpb25zLnBhZ2VMZW5ndGhcbiAgICB0aGlzLm9yZGVyID0gW11cbiAgICB0aGlzLmZpbHRlciA9IFtdXG5cbiAgICB0aGlzLnRhYmxlQm9keS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgdGhpcy5vcHRpb25zLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICBpZiAoY29sdW1uLm9yZGVyYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoY29sdW1uLm9yZGVyICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm9yZGVyID0gW3tcbiAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLmlkLFxuICAgICAgICAgICAgb3JkZXI6IGNvbHVtbi5vcmRlclxuICAgICAgICAgIH1dXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb2x1bW4uaWQpLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb2x1bW4uaWQpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsZW0pID0+IHtcbiAgICAgICAgICB0aGlzLm9yZGVyID0gW3tcbiAgICAgICAgICAgIGNvbHVtbjogZWxlbS50YXJnZXQuaWQsXG4gICAgICAgICAgICBvcmRlcjogZWxlbS50YXJnZXQuZGF0YXNldC5vcmRlci8vdG9kbzogb3JkcmUgYWN0dWVsLi4uIGEgaW52ZXJzZXIgZGFucyBsYSByZXF1ZXRlPyBNZXR0cmUgbGVzIGRldXggZmxlY2hlcyBzaSBwYXMgdHJpw6kgPyBzaSBkZWZhdWx0b3JkZXIgPSBmYWxzZT9cbiAgICAgICAgICB9XVxuICAgICAgICAgIC8vdG9kbzogbWV0dHJlIMOgIGpvdXIgbGUgc2VucyBkZSBsYSBmbGVjaGUuLi5cbiAgICAgICAgICB0aGlzLl9idWlsZEFycmF5KClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpXG5cbiAgICAvL2Fqb3V0IGRlcyBldmVudHMgc3VyIGxlIGZvcm1cbiAgICBsZXQgaW5wdXRzID0gdGhpcy5mb3JtWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpXG4gICAgbGV0IHNlbGVjdHMgPSB0aGlzLmZvcm1bMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXG5cbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlmIChpbnB1dC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnR5cGUgPT09ICd0ZXh0JyAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgLy9vbiBuZSBkw6ljbGVuY2hlIHJpZW4gc2kgbW9pbnMgZGUgMyBjYXJhY3TDqHJlc1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fZ2V0RmlsdGVyRnJvbUZpZWxkKGV2ZW50LnRhcmdldClcbiAgICAgICAgICB0aGlzLl9idWlsZEFycmF5KClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycgfHwgaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZWxlbSkgPT4ge1xuICAgICAgICAgIHRoaXMuX2dldEZpbHRlckZyb21GaWVsZChlbGVtLnRhcmdldClcbiAgICAgICAgICB0aGlzLl9maWx0ZXJBcnJheSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHNlbGVjdHMuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGVsZW0pID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0RmlsdGVyRnJvbUZpZWxkKGVsZW0udGFyZ2V0KVxuICAgICAgICB0aGlzLl9maWx0ZXJBcnJheSgpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBhZ2luZyA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLnBhZ2luZ19pZCArICdfc2VsZWN0JylcbiAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5uYkVsZW1lbnRQZXJQYWdlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgdGhpcy5fYnVpbGRBcnJheSgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZUhlYWRlcigpXG4gICAgdGhpcy5fYnVpbGRBcnJheSgpXG4gIH1cblxuICBfZmlsdGVyQXJyYXkgKGV2ZW50KSB7XG4gICAgLy90aGlzLl9nZXRGaWx0ZXJGcm9tRmllbGQoZXZlbnQudGFyZ2V0KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsdGVyKVxuICAgIHRoaXMuX2J1aWxkQXJyYXkoKVxuICB9XG5cbiAgX2NvbnZlcnRUb0ZldGNoICh0YWJsZWF1KSB7XG4gICAgbGV0IG9iaiA9IHt9XG5cbiAgICBPYmplY3QuZW50cmllcyh0YWJsZWF1KS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGNvbnN0IFtrZXksIGl0ZW1dID0gZW50cnlcbiAgICAgIG9ialtrZXldID0gaXRlbVxuICAgIH0pXG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgX2J1aWxkQXJyYXkgKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMub3JkZXIpXG4gICAgdGhpcy50YWJsZUJvZHkuaW5uZXJIVE1MID0gJydcbiAgICBwb3N0KHRoaXMuYmFzZV91cmwsIHtcbiAgICAgIHBhZ2luZzoge1xuICAgICAgICBwYWdlTGVuZ3RoOiB0aGlzLm5iRWxlbWVudFBlclBhZ2UsXG4gICAgICAgIHBhZ2VBY3RpdmU6IHRoaXMucGFnZUFjdGl2ZVxuICAgICAgfSxcbiAgICAgIG9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgZmlsdGVyOiB0aGlzLl9jb252ZXJ0VG9GZXRjaCh0aGlzLmZpbHRlcilcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGF0YS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBsZXQgaHRtbCA9ICc8dHI+J1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgaHRtbCArPSBgPHRkPiR7aXRlbVtjb2x1bW4uaWRdfTwvdGQ+YFxuICAgICAgICAgIH0pXG4gICAgICAgICAgaHRtbCArPSAnPC90cj4nXG4gICAgICAgICAgdGhpcy50YWJsZUJvZHkuaW5uZXJIVE1MICs9IGh0bWxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBodG1sID0gJzx0cj4nXG4gICAgICAgIGh0bWwgKz0gJzx0ZCBjb2xzcGFuPVwiJyArIHRoaXMub3B0aW9ucy5jb2x1bW5zLmxlbmd0aCArICdcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+UGFzIGRlIGRvbm7DqWVzLjwvdGQ+J1xuICAgICAgICBodG1sICs9ICc8L3RyPidcbiAgICAgICAgdGhpcy50YWJsZUJvZHkuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgfVxuICAgICAgdGhpcy5fdXBkYXRlUGFnaW5hdGlvbihkYXRhLnBhZ2luZylcbiAgICB9KVxuICB9XG5cblxuICBfdXBkYXRlSGVhZGVyICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgIGxldCB0ZXh0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbHVtbi5pZCkuaW5uZXJUZXh0XG4gICAgICBpZiAoY29sdW1uLm9yZGVyYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoY29sdW1uLm9yZGVyID09PSBERVNDIHx8IGNvbHVtbi5vcmRlciA9PT0gJycpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb2x1bW4uaWQpLmlubmVySFRNTCA9IHRleHRlICsgJyAnICsgSUNPTl9ERVNDXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sdW1uLmlkKS5kYXRhc2V0Lm9yZGVyID0gREVTQ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbHVtbi5pZCkuaW5uZXJIVE1MID0gdGV4dGUgKyAnICcgKyBJQ09OX0FTQ1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbHVtbi5pZCkuZGF0YXNldC5vcmRlciA9IEFTQ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF91cGRhdGVQYWdpbmF0aW9uIChwYWdpbmcpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMucGFnaW5nX2lkICsgJ19uYXYnKVxuICAgIGNvbnN0IHByZXZpb3VzRGlzYWJsZWQgPSBwYWdpbmcuZmlyc3RQYWdlID09PSB0cnVlID8gJ2Rpc2FibGVkJyA6ICcnXG4gICAgY29uc3QgbmV4dERpc2FibGVkID0gcGFnaW5nLmxhc3RQYWdlID09PSB0cnVlID8gJ2Rpc2FibGVkJyA6ICcnXG4gICAgbGV0IHBhZ2VDdXRMb3cgPSBwYWdpbmcubnVtQWN0aXZlUGFnZSAtIDFcbiAgICBsZXQgcGFnZUN1dEhpZ2ggPSBwYWdpbmcubnVtQWN0aXZlUGFnZSArIDFcblxuICAgIGxldCBodG1sID0gYDx1bCBjbGFzcz1cInBhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtICR7cHJldmlvdXNEaXNhYmxlZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWFycm93LWxlZnRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gXG4gICAgLy8gMTAgcGFnZXMsIG9uIGFmZmljaGUgdG91dFxuICAgIGlmIChwYWdpbmcubmJQYWdlcyA8PSAxMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGFnaW5nLm5iUGFnZXM7IGkrKykge1xuICAgICAgICBsZXQgcGFnZUFjdGl2ZSA9IGkgPT09IHBhZ2luZy5udW1BY3RpdmVQYWdlID8gJ2FjdGl2ZScgOiAnJ1xuICAgICAgICBodG1sICs9IGA8bGkgY2xhc3M9XCJwYWdlLWl0ZW0gJHtwYWdlQWN0aXZlfVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPiR7aX08L2E+XG4gICAgICAgICAgICAgICA8L2xpPmBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2hvdyB0aGUgdmVyeSBmaXJzdCBwYWdlIGZvbGxvd2VkIGJ5IGEgXCIuLi5cIiBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZVxuICAgICAgLy8gcGFnaW5hdGlvbiBzZWN0aW9uIChhZnRlciB0aGUgUHJldmlvdXMgYnV0dG9uKVxuICAgICAgaWYgKHBhZ2luZy5udW1BY3RpdmVQYWdlID4gMikge1xuICAgICAgICBodG1sICs9ICc8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MTwvYT48L2xpPidcbiAgICAgICAgaWYgKHBhZ2luZy5udW1BY3RpdmVQYWdlID4gMykge1xuICAgICAgICAgIGNvbnN0IHBhZyA9IHBhZ2luZy5udW1BY3RpdmVQYWdlIC0gMlxuICAgICAgICAgIGh0bWwgKz0gJzxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIiBkYXRhLXBhZ2U9XCInICsgcGFnICsgJ1wiPi4uLjwvYT48L2xpPidcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRGV0ZXJtaW5lIGhvdyBtYW55IHBhZ2VzIHRvIHNob3cgYWZ0ZXIgdGhlIGN1cnJlbnQgcGFnZSBpbmRleFxuICAgICAgaWYgKHBhZ2luZy5udW1BY3RpdmVQYWdlID09PSAxKSB7XG4gICAgICAgIHBhZ2VDdXRIaWdoICs9IDJcbiAgICAgIH0gZWxzZSBpZiAocGFnaW5nLm51bUFjdGl2ZVBhZ2UgPT09IDIpIHtcbiAgICAgICAgcGFnZUN1dEhpZ2ggKz0gMVxuICAgICAgfVxuICAgICAgLy8gRGV0ZXJtaW5lIGhvdyBtYW55IHBhZ2VzIHRvIHNob3cgYmVmb3JlIHRoZSBjdXJyZW50IHBhZ2UgaW5kZXhcbiAgICAgIGlmIChwYWdpbmcubnVtQWN0aXZlUGFnZSA9PT0gcGFnaW5nLm5iUGFnZXMpIHtcbiAgICAgICAgcGFnZUN1dExvdyAtPSAyXG4gICAgICB9IGVsc2UgaWYgKHBhZ2luZy5udW1BY3RpdmVQYWdlID09PSBwYWdpbmcubmJQYWdlcyAtIDEpIHtcbiAgICAgICAgcGFnZUN1dExvdyAtPSAxXG4gICAgICB9XG4gICAgICAvLyBPdXRwdXQgdGhlIGluZGV4ZXMgZm9yIHBhZ2VzIHRoYXQgZmFsbCBpbnNpZGUgdGhlIHJhbmdlIG9mIHBhZ2VDdXRMb3dcbiAgICAgIC8vIGFuZCBwYWdlQ3V0SGlnaFxuICAgICAgZm9yIChsZXQgcCA9IHBhZ2VDdXRMb3c7IHAgPD0gcGFnZUN1dEhpZ2g7IHArKykge1xuICAgICAgICBpZiAocCA9PT0gMCkge1xuICAgICAgICAgIHAgKz0gMVxuICAgICAgICB9XG4gICAgICAgIGlmIChwID4gcGFnaW5nLm5iUGFnZXMpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBwYWdlQWN0aXZlID0gcCA9PT0gcGFnaW5nLm51bUFjdGl2ZVBhZ2UgPyAnYWN0aXZlJyA6ICcnXG4gICAgICAgIGh0bWwgKz0gJzxsaSBjbGFzcz1cInBhZ2UtaXRlbSAnICsgcGFnZUFjdGl2ZSArICdcIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+JyArIHAgKyAnPC9hPjwvbGk+J1xuICAgICAgfVxuICAgICAgLy8gU2hvdyB0aGUgdmVyeSBsYXN0IHBhZ2UgcHJlY2VkZWQgYnkgYSBcIi4uLlwiIGF0IHRoZSBlbmQgb2YgdGhlIHBhZ2luYXRpb25cbiAgICAgIC8vIHNlY3Rpb24gKGJlZm9yZSB0aGUgTmV4dCBidXR0b24pXG4gICAgICBpZiAocGFnaW5nLm51bUFjdGl2ZVBhZ2UgPCBwYWdpbmcubmJQYWdlcyAtIDEpIHtcbiAgICAgICAgaWYgKHBhZ2luZy5udW1BY3RpdmVQYWdlIDwgcGFnaW5nLm5iUGFnZXMgLSAyKSB7XG4gICAgICAgICAgbGV0IHBhZyA9IDBcbiAgICAgICAgICBpZiAocGFnaW5nLm51bUFjdGl2ZVBhZ2UgPT09IDEpIHtcbiAgICAgICAgICAgIHBhZyA9IHBhZ2luZy5udW1BY3RpdmVQYWdlICsgNFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYWcgPSBwYWdpbmcubnVtQWN0aXZlUGFnZSArIDJcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCArPSAnPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiIGRhdGEtcGFnZT1cIicgKyBwYWcgKyAnXCI+Li4uPC9hPjwvbGk+J1xuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gJzxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj4nICsgcGFnaW5nLm5iUGFnZXMgKyAnPC9hPjwvbGk+J1xuICAgICAgfVxuICAgIH1cbiAgICBodG1sICs9IGA8bGkgY2xhc3M9XCJwYWdlLWl0ZW0gJHtuZXh0RGlzYWJsZWR9XCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5gXG4gICAgbmF2LmlubmVySFRNTCA9IGh0bWxcblxuICAgIHRoaXMuZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLWxpbmsnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IHBhZ2UgPSBlLnRhcmdldC5pbm5lclRleHRcbiAgICAgICAgaWYgKHBhZ2UgPT09ICcuLi4nKSB7XG4gICAgICAgICAgcGFnZSA9IGUudGFyZ2V0LmRhdGFzZXQucGFnZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYWdlQWN0aXZlID0gcGFnZVxuICAgICAgICB0aGlzLl9idWlsZEFycmF5KClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIF9leHRyYWN0TmFtZUZyb21Gb3JtIChuYW1lKSB7XG4gICAgY29uc29sZS5sb2cobmFtZSlcbiAgICBsZXQgdCA9IG5hbWUuc3BsaXQoJ1snKVxuICAgIHJldHVybiB0WzFdLnN1YnN0cigwLCB0WzFdLmxlbmd0aCAtIDEpXG4gIH1cblxuICBfZ2V0RmlsdGVyRnJvbUZpZWxkIChpbnB1dCkge1xuICAgIGNvbnNvbGUubG9nKGlucHV0KVxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLl9leHRyYWN0TmFtZUZyb21Gb3JtKGlucHV0Lm5hbWUpXG4gICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgIGNhc2UgJ3NlbGVjdC1vbmUnOlxuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICB0aGlzLmZpbHRlcltuYW1lXSA9IGlucHV0LnZhbHVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIGlmIChpbnB1dC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKCEobmFtZSBpbiB0aGlzLmZpbHRlcikpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyW25hbWVdID0gW11cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5maWx0ZXJbbmFtZV0ucHVzaChcbiAgICAgICAgICAgIGlucHV0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvYXBwLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjMvMDkvMjAyMSAxMjo0MFxuXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3MvZm9udGF3ZXNvbWUuc2NzcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9zb2xpZC5zY3NzJ1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3BlcmZlY3Qtc2Nyb2xsYmFyJ1xuaW1wb3J0ICcuL3ZhbGlkYXRvci1iczQnXG5pbXBvcnQge2dldERhdGFPcHRpb25zLCBnZXRQYXJlbnRCeVRhZ05hbWV9IGZyb20gJy4vdXRpbCdcbmltcG9ydCAnLi9tYXRlcmlhbCdcbmltcG9ydCAnLi9zZWFyY2gnXG5pbXBvcnQgJy4vbW9kYWxlcidcblxucmVxdWlyZSgnYm9vdHN0cmFwJylcblxuXG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2NzcydcblxubGV0IGxvb2t1cCA9IHt9XG5cbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlJ1xuaW1wb3J0IFNlbGVjdENvbXBsZXRlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0Q29tcGxldGUnXG5pbXBvcnQgU2VsZWN0Q2hhbmdlV2lkZ2V0IGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0Q2hhbmdlV2lkZ2V0J1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRlUGlja2VyJ1xuaW1wb3J0IHtwb3N0fSBmcm9tICcuL2ZldGNoJ1xuXG5leHBvcnQgY29uc3QgTEFORyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5nZXRBdHRyaWJ1dGUoJ2xhbmcnKVxuXG53aW5kb3cuZGEgPSB7XG4gIExBTkc6IExBTkdcbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS10YWJsZScsIFRhYmxlKVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzZWxlY3QtY29tcGxldGUnLCBTZWxlY3RDb21wbGV0ZSwge2V4dGVuZHM6ICdzZWxlY3QnfSlcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2VsZWN0LWxpdmUtdXBkYXRlJywgU2VsZWN0Q2hhbmdlV2lkZ2V0LCB7ZXh0ZW5kczogJ3NlbGVjdCd9KVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1kYXRlcGlja2VyJywgRGF0ZVBpY2tlciwge2V4dGVuZHM6ICdpbnB1dCd9KVxuXG4kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICBsZXQgZmlsZW5hbWUgPSBlLnRhcmdldC5maWxlc1swXS5uYW1lXG4gICQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLmh0bWwoZmlsZW5hbWUpXG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHsgLy9sZSBkb20gZXN0IGNoYXJnw6lcbiAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcbiAgY29uc3QgbWVudURhcmtUaGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrTW9kZScpXG5cbiAgLy9SZWdhcmRlIHNpIGRlcyBib3V0b25zIG9udCB1biBkYXRhLWNvbmZpcm0gPSB0cnVlXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNvbmZpcm09J3RydWUnXVwiKTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGVsPT57XG4gICAgY29uc29sZS5sb2coZWwpO1xuICB9KVxuXG4gIG1lbnVEYXJrVGhlbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLXRoZW1lJylcbiAgICAvLyBMZXQncyBzYXkgdGhlIHRoZW1lIGlzIGVxdWFsIHRvIGxpZ2h0XG4gICAgbGV0IHRoZW1lID0gJ2xpZ2h0J1xuICAgIC8vIElmIHRoZSBib2R5IGNvbnRhaW5zIHRoZSAuZGFyay10aGVtZSBjbGFzcy4uLlxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay10aGVtZScpKSB7XG4gICAgICAvLyAuLi50aGVuIGxldCdzIG1ha2UgdGhlIHRoZW1lIGRhcmtcbiAgICAgIHRoZW1lID0gJ2RhcmsnXG4gICAgICBtZW51RGFya1RoZW1lLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1hZGp1c3RcIj48L2k+IERhcmsgTW9kZSBPZmYnXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVEYXJrVGhlbWUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWFkanVzdFwiPjwvaT4gRGFyayBNb2RlIE9uJ1xuICAgIH1cbiAgICAvLyBUaGVuIHNhdmUgdGhlIGNob2ljZSBpbiBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZSlcbiAgfSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdlQW5uZWVVbml2ZXJzaXRhaXJlJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zb2xlLmxvZyhcImNvdWNvdVwiKVxuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC5hbm5lZSlcbiAgICAgIGNvbnN0IGVsID0gZ2V0UGFyZW50QnlUYWdOYW1lKGUudGFyZ2V0LCAnYScpXG4gICAgICBwb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ3NldHRpbmdzX2NoYW5nZV9hbm5lZV91bml2ZXJzaXRhaXJlJyksIHsnYW5uZWVfdW5pdmVyc2l0YWlyZScgOiBlbC5kYXRhc2V0LmFubmVlfSlcbiAgICB9KVxuICB9KVxuXG4gIC8vIElmIHRoZSBjdXJyZW50IHRoZW1lIGluIGxvY2FsU3RvcmFnZSBpcyBcImRhcmtcIi4uLlxuICBpZiAoY3VycmVudFRoZW1lID09PSAnZGFyaycpIHtcbiAgICAvLyAuLi50aGVuIHVzZSB0aGUgLmRhcmstdGhlbWUgY2xhc3NcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstdGhlbWUnKVxuICAgIG1lbnVEYXJrVGhlbWUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWFkanVzdFwiPjwvaT4gRGFyayBNb2RlIE9mZidcbiAgfSBlbHNlIHtcbiAgICBtZW51RGFya1RoZW1lLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1hZGp1c3RcIj48L2k+IERhcmsgTW9kZSBPbidcbiAgfVxuXG5cbn0sIGZhbHNlKVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIHNjcmlwdCBwb3VyIGFmZmljaGVyIGxlIGZpY2hpZXIgc2VsZWN0aW9ubsOpIGF2ZWMgYm9vdHN0cmFwNFxuICAkKCcuY3VzdG9tLWZpbGUgaW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZpbGVzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICQodGhpcylbMF0uZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZpbGVzLnB1c2goJCh0aGlzKVswXS5maWxlc1tpXS5uYW1lKVxuICAgIH1cbiAgICAkKHRoaXMpLm5leHQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLmh0bWwoZmlsZXMuam9pbignLCAnKSlcbiAgfSlcblxuICB2YXIgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpXG4gIGlmIChwcmVsb2FkZXIubGVuZ3RoKSB7XG4gICAgdmFyIHNwZWVkID0gcHJlbG9hZGVyLmRhdGFBdHRyKCdoaWRlLXNwcGVkJywgNjAwKVxuICAgIHByZWxvYWRlci5mYWRlT3V0KHNwZWVkKVxuICB9XG5cbiAgJChkb2N1bWVudCkub24oJ2ZvY3VzJywgJy50b3BiYXItc2VhcmNoIGlucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnLnRvcGJhci1zZWFyY2gnKS5maW5kKCcubG9va3VwLXBsYWNlaG9sZGVyIHNwYW4nKS5jc3MoJ29wYWNpdHknLCAnMCcpXG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2JsdXInLCAnLnRvcGJhci1zZWFyY2ggaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcudG9wYmFyLXNlYXJjaCcpLmZpbmQoJy5sb29rdXAtcGxhY2Vob2xkZXIgc3BhbicpLmNzcygnb3BhY2l0eScsICcxJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2xvb2t1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHRhcmdldCA9ICQoJyNsb29rdXAtZnVsbCcpXG5cbiAgICBpZiAodGFyZ2V0ICE9PSBmYWxzZSkge1xuICAgICAgbG9va3VwLnRvZ2dsZSh0YXJnZXQpXG4gICAgfVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbG9va3VwLWNsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGxvb2t1cC50b2dnbGUoJCgnI2xvb2t1cC1mdWxsJykpXG4gIH0pXG5cbiAgLy90b29sdGlwXG4gIHVwZGF0ZUludGVyZmFjZSgpXG5cbiAgJCgnW2RhdGEtcHJvdmlkZT1cInZhbGlkYXRpb25cIl0nKS52YWxpZGF0b3IoKVxufSlcblxuJChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlSW50ZXJmYWNlKClcbn0pXG5cbi8vIEZ1bGxzY3JlZW5cbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhcmQtYnRuLWZ1bGxzY3JlZW4nLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS50b2dnbGVDbGFzcygnY2FyZC1mdWxsc2NyZWVuJykucmVtb3ZlQ2xhc3MoJ2NhcmQtbWF4aW1pemUnKVxufSlcblxuLy8gU2xpZGUgdXAvZG93blxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jYXJkLWJ0bi1zbGlkZScsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygncm90YXRlLTE4MCcpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnLmNhcmQtY29udGVudCcpLnNsaWRlVG9nZ2xlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2FyZC1idG4tc2xpZGUtdGV4dCcsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJy5jYXJkLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpXG59KVxuXG4vL21vZGFsZXJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1wcm92aWRlfj1cIm1vZGFsZXJcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsZXIoZ2V0RGF0YU9wdGlvbnMoJCh0aGlzKSkpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVJbnRlcmZhY2UgKCkge1xuICAvLyAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxuXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlcGlja2VyLXJhbmdlJykubGVuZ3RoID4gMCkge1xuICAgICQoJy5kYXRlcGlja2VyLXJhbmdlJykuZmxhdHBpY2tyKHtcbiAgICAgIG1vZGU6ICdyYW5nZScsXG4gICAgICAnbG9jYWxlJzogJ2ZyJyxcbiAgICAgIGZvcm1hdDogJ2QvTS9ZJ1xuICAgIH0pXG4gIH1cblxuXG4gIC8vbm90aWZpY2F0aW9uc1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21hcnF1ZXJOb3RpZmljYXRpb25zUmVhZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ25vdGlmaWNhdGlvbl9tYXJxdWVyX2x1JyksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5ub3RpZmljYXRpb24nKS5yZW1vdmVDbGFzcygnbWVkaWEtbmV3JylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIC8vdG9vbHRpcFxuICAkKCdbZGF0YS1wcm92aWRlfj1cInRvb2x0aXBcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAnJ1xuXG4gICAgaWYgKCQodGhpcykuaGFzRGF0YUF0dHIoJ3Rvb2x0aXAtY29sb3InKSkge1xuICAgICAgY29sb3IgPSAnIHRvb2x0aXAtJyArICQodGhpcykuZGF0YSgndG9vbHRpcC1jb2xvcicpXG4gICAgfVxuXG4gICAgJCh0aGlzKS50b29sdGlwKHtcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXAnICsgY29sb3IgKyAnXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PidcbiAgICB9KVxuICB9KVxufVxuXG4vLyBPcGVuIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLnRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICgkKGUpLmhhc0NsYXNzKCdyZXZlYWwnKSkge1xuICAgIGxvb2t1cC5jbG9zZShlKVxuICB9IGVsc2Uge1xuICAgIGxvb2t1cC5vcGVuKGUpXG4gIH1cbn1cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLnJlbW92ZUNsYXNzKCdyZXZlYWwnKVxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICQoZSkuYWRkQ2xhc3MoJ3JldmVhbCcpXG4gICQoZSkuZmluZCgnLmxvb2t1cC1mb3JtIGlucHV0JykuZm9jdXMoKVxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gU2lkZWJhclxuLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBzaWRlYmFyID0ge31cblxuLy8gU2Nyb2xsYWJsZVxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXItbmF2aWdhdGlvbicpLmxlbmd0aCA+IDApIHtcbiAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnNpZGViYXItbmF2aWdhdGlvbicpXG59XG5cbi8vIEhhbmRsZSBzaWRlYmFyIG9wZW5uZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNpZGViYXItdG9nZ2xlcicsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci5vcGVuKClcbn0pXG5cblxuLy8gQ2xvc2Ugc2lkZWJhciB3aGVuIGJhY2tkcm9wIHRvdWNoZXNcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJhY2tkcm9wLXNpZGViYXInLCBmdW5jdGlvbiAoKSB7XG4gIHNpZGViYXIuY2xvc2UoKVxufSlcblxuXG4vLyBTbGlkZSB1cC9kb3duIG1lbnUgaXRlbSBvbiBjbGlja1xuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhciAubWVudS1saW5rJywgZnVuY3Rpb24gKCkge1xuICB2YXIgJHN1Ym1lbnUgPSAkKHRoaXMpLm5leHQoJy5tZW51LXN1Ym1lbnUnKVxuICBpZiAoJHN1Ym1lbnUubGVuZ3RoIDwgMSlcbiAgICByZXR1cm5cblxuICBpZiAoJHN1Ym1lbnUuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAkc3VibWVudS5zbGlkZVVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5zaWRlYmFyIC5tZW51LWl0ZW0ub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICB9KVxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIHJldHVyblxuICB9XG5cbiAgJCgnLnNpZGViYXIgLm1lbnUtc3VibWVudTp2aXNpYmxlJykuc2xpZGVVcCgpXG4gICQoJy5zaWRlYmFyIC5tZW51LWxpbmsnKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICRzdWJtZW51LnNsaWRlVG9nZ2xlKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2lkZWJhciAubWVudS1pdGVtLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gIH0pXG4gICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKVxufSlcblxuLy8gSGFuZGxlIGZvbGQgdG9nZ2xlclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhci10b2dnbGUtZm9sZCcsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci50b2dnbGVGb2xkKClcbn0pXG5cbi8vfVxuXG5cbnNpZGViYXIudG9nZ2xlRm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC50b2dnbGVTdGF0ZSgnc2lkZWJhci5mb2xkZWQnKVxufVxuXG5zaWRlYmFyLmZvbGQgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1mb2xkZWQnKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuZm9sZGVkJywgdHJ1ZSlcbn1cblxuXG5zaWRlYmFyLnVuZm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5mb2xkZWQnLCBmYWxzZSlcbn1cblxuXG5zaWRlYmFyLnRvZ2dsZUhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2lkZWJhci1oaWRkZW4nKVxuICBhcHAudG9nZ2xlU3RhdGUoJ3NpZGViYXIuaGlkZGVuJylcbn1cblxuc2lkZWJhci5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItaGlkZGVuJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmhpZGRlbicsIHRydWUpXG59XG5cbnNpZGViYXIuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWhpZGRlbicpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5oaWRkZW4nLCBmYWxzZSlcbn1cblxuXG5zaWRlYmFyLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1vcGVuJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cImFwcC1iYWNrZHJvcCBiYWNrZHJvcC1zaWRlYmFyXCI+PC9kaXY+Jylcbn1cblxuc2lkZWJhci5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW9wZW4nKVxuICAkKCcuYmFja2Ryb3Atc2lkZWJhcicpLnJlbW92ZSgpXG59XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBRdWlja3ZpZXdcbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gdG9kbzogZMOpcGxhY2VyIGRhbnMgdW5lIGNsYXNzZSBzZXVsZS4uLiBwb3VyIGwnaW1wb3J0LlxuXG5sZXQgcXVpY2t2aWV3ID0ge31cbmxldCBxcHMgPSBudWxsXG5cbi8vIFVwZGF0ZSBzY3JvbGxiYXIgb24gdGFiIGNoYW5nZVxuLy9cbiQoZG9jdW1lbnQpLm9uKCdzaG93bi5icy50YWInLCAnLnF1aWNrdmlldy1oZWFkZXIgYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScsIGZ1bmN0aW9uICgpIHtcbiAgcXBzLnVwZGF0ZSgpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxvYWRRdiAoKSB7XG4gIHFwcy5kZXN0cm95KClcbiAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxufVxuXG4vLyBRdWlja3ZpZXcgY2xvc2VyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWRpc21pc3M9XCJxdWlja3ZpZXdcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIHF1aWNrdmlldy5jbG9zZSgkKHRoaXMpLmNsb3Nlc3QoJy5xdWlja3ZpZXcnKSlcbn0pXG5cblxuLy8gSGFuZGxlIHF1aWNrdmlldyBvcGVubmVyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBsZXQgdGFyZ2V0ID0gYXBwLmdldFRhcmdldCgkKHRoaXMpKVxuXG4gIGlmICh0YXJnZXQgPT09IGZhbHNlKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKCQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpKVxuICB9IGVsc2Uge1xuICAgIGxldCB1cmwgPSAnJ1xuICAgIGlmICgkKHRoaXMpLmhhc0RhdGFBdHRyKCd1cmwnKSkge1xuICAgICAgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKVxuICAgIH1cblxuICAgIGlmICh1cmwgIT09ICduby11cmwnICYmIHVybCAhPT0gJycpIHtcbiAgICAgIHF1aWNrdmlldy50b2dnbGUodGFyZ2V0LCB1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1aWNrdmlldy50b2dnbGUodGFyZ2V0LCBSb3V0aW5nLmdlbmVyYXRlKCdxdWlja192aWV3JykpXG4gICAgfVxuICB9XG59KVxuXG5cbi8vIENsb3NlIHF1aWNrdmlldyB3aGVuIGJhY2tkcm9wIHRvdWNoZXNcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJhY2tkcm9wLXF1aWNrdmlldycsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHF2ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhcmdldCcpXG4gIGlmICghJChxdikuaXMoJ1tkYXRhLWRpc2FibGUtYmFja2Ryb3AtY2xpY2tdJykpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UocXYpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucXVpY2t2aWV3IC5jbG9zZSwgW2RhdGEtZGlzbWlzcz1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHF2ID0gJCh0aGlzKS5jbG9zZXN0KCcucXVpY2t2aWV3JylcbiAgcXVpY2t2aWV3LmNsb3NlKHF2KVxufSlcblxuLy8gVG9nZ2xlIG9wZW4vY2xvc2Ugc3RhdGVcbi8vXG5xdWlja3ZpZXcudG9nZ2xlID0gZnVuY3Rpb24gKGUsIHVybCkge1xuICBpZiAoJChlKS5oYXNDbGFzcygncmV2ZWFsJykpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UoZSlcbiAgfSBlbHNlIHtcblxuICAgIGlmICh1cmwgIT09ICcnKSB7XG4gICAgICAkKGUpLmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyLWxpbmVhclwiPjxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+PC9kaXY+JylcbiAgICAgICQoZSkubG9hZCh1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxuICAgICAgfSlcbiAgICB9XG4gICAgJChlKS5hZGRDbGFzcygncmV2ZWFsJykubm90KCcuYmFja2Ryb3AtcmVtb3ZlJykuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJhcHAtYmFja2Ryb3AgYmFja2Ryb3AtcXVpY2t2aWV3XCIgZGF0YS10YXJnZXQ9XCInICsgZSArICdcIj48L2Rpdj4nKVxuICB9XG59XG5cblxuLy8gT3BlbiBxdWlja3ZpZXdcbi8vXG5xdWlja3ZpZXcub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gIGxldCBxdWlja3ZpZXcgPSAkKGUpXG4gIGxldCB1cmwgPSAnJ1xuICAvLyBMb2FkIGNvbnRlbnQgZnJvbSBVUkwgaWYgcmVxdWlyZWRcbiAgaWYgKHF1aWNrdmlldy5oYXNEYXRhQXR0cigndXJsJykgJiYgJ3RydWUnICE9PSBxdWlja3ZpZXcuZGF0YSgndXJsLWhhcy1sb2FkZWQnKSkge1xuICAgIGlmIChxdWlja3ZpZXcuZGF0YSgndXJsJykgPT09ICduby11cmwnKSB7XG4gICAgICB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdxdWlja192aWV3JylcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gcXVpY2t2aWV3LmRhdGEoJ3VybCcpXG4gICAgfVxuICAgIHF1aWNrdmlldy5sb2FkKHVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxuXG4gICAgICAvLyBEb24ndCBsb2FkIGl0IG5leHQgdGltZSwgaWYgZG9uJ3QgbmVlZCB0b1xuICAgICAgaWYgKHF1aWNrdmlldy5oYXNEYXRhQXR0cignYWx3YXlzLXJlbG9hZCcpICYmICd0cnVlJyA9PT0gcXVpY2t2aWV3LmRhdGEoJ2Fsd2F5cy1yZWxvYWQnKSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWlja3ZpZXcuZGF0YSgndXJsLWhhcy1sb2FkZWQnLCAndHJ1ZScpXG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbi8vIE9wZW4gaXRcbiAgcXVpY2t2aWV3LmFkZENsYXNzKCdyZXZlYWwnKS5ub3QoJy5iYWNrZHJvcC1yZW1vdmUnKS5hZnRlcignPGRpdiBjbGFzcz1cImFwcC1iYWNrZHJvcCBiYWNrZHJvcC1xdWlja3ZpZXdcIiBkYXRhLXRhcmdldD1cIicgKyBlICsgJ1wiPjwvZGl2PicpXG59XG5cblxuLy8gQ2xvc2UgcXVpY2t2aWV3XG4vL1xucXVpY2t2aWV3LmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgJChlKS5yZW1vdmVDbGFzcygncmV2ZWFsJylcbiAgJCgnLmJhY2tkcm9wLXF1aWNrdmlldycpLnJlbW92ZSgpXG59XG5cblxubGV0IGFwcCA9IHt9XG5cbmFwcC5nZXRUYXJnZXQgPSBmdW5jdGlvbiAoZSkge1xuICBsZXQgdGFyZ2V0XG4gIGlmIChlLmhhc0RhdGFBdHRyKCd0YXJnZXQnKSkge1xuICAgIHRhcmdldCA9IGUuZGF0YSgndGFyZ2V0JylcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBlLmF0dHIoJ2hyZWYnKVxuICB9XG5cbiAgaWYgKHRhcmdldCA9PT0gJ25leHQnKSB7XG4gICAgdGFyZ2V0ID0gJChlKS5uZXh0KClcbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdwcmV2Jykge1xuICAgIHRhcmdldCA9ICQoZSkucHJldigpXG4gIH1cblxuICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb25uZUFjdGl2ZSAoY29sb25uZXMpIHtcbiAgbGV0IGluZGV4ID0gLTFcblxuICAkLmVhY2goY29sb25uZXMsIGZ1bmN0aW9uIChrZXksIGNvbG9ubmUpIHtcbiAgICBpZiAoISQoY29sb25uZSkuaGFzQ2xhc3MoJ2NvbC1lZHQtaGlkZScpKSB7XG4gICAgICBpbmRleCA9IGtleVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5kZXhcbn1cblxuLy9uYXZpZ2F0aW9uIEVEVFxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNqb3VyUHJlY2VkZW50JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IGNvbG9ubmVzID0gJCgnLmpvdXInKVxuICBsZXQgaW5kZXggPSBnZXRDb2xvbm5lQWN0aXZlKGNvbG9ubmVzKVxuICBpZiAoaW5kZXggPiAwKSB7XG4gICAgJChjb2xvbm5lc1tpbmRleF0pLmFkZENsYXNzKCdjb2wtZWR0LWhpZGUnKVxuICAgICQoY29sb25uZXNbaW5kZXggLSAxXSkucmVtb3ZlQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICAgJCgnLmVkdC1qb3VyLScgKyBpbmRleCkuYWRkQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICAgJCgnLmVkdC1qb3VyLScgKyAoaW5kZXggLSAxKSkucmVtb3ZlQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG5cbiAgfSBlbHNlIHtcbiAgICAkKGNvbG9ubmVzW2luZGV4XSkuYWRkQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICAgJChjb2xvbm5lc1s0XSkucmVtb3ZlQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICAgJCgnLmVkdC1qb3VyLScgKyBpbmRleCkuYWRkQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICAgJCgnLmVkdC1qb3VyLTQnKS5yZW1vdmVDbGFzcygnY29sLWVkdC1oaWRlJylcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNqb3VyU3VpdmFudCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGxldCBjb2xvbm5lcyA9ICQoJy5qb3VyJylcbiAgbGV0IGluZGV4ID0gZ2V0Q29sb25uZUFjdGl2ZShjb2xvbm5lcylcbiAgaWYgKGluZGV4IDwgNCkge1xuICAgICQoY29sb25uZXNbaW5kZXhdKS5hZGRDbGFzcygnY29sLWVkdC1oaWRlJylcbiAgICAkKGNvbG9ubmVzW2luZGV4ICsgMV0pLnJlbW92ZUNsYXNzKCdjb2wtZWR0LWhpZGUnKVxuICAgICQoJy5lZHQtam91ci0nICsgaW5kZXgpLmFkZENsYXNzKCdjb2wtZWR0LWhpZGUnKVxuICAgICQoJy5lZHQtam91ci0nICsgKGluZGV4ICsgMSkpLnJlbW92ZUNsYXNzKCdjb2wtZWR0LWhpZGUnKVxuICB9IGVsc2Uge1xuICAgICQoY29sb25uZXNbaW5kZXhdKS5hZGRDbGFzcygnY29sLWVkdC1oaWRlJylcbiAgICAkKGNvbG9ubmVzWzBdKS5yZW1vdmVDbGFzcygnY29sLWVkdC1oaWRlJylcbiAgICAkKCcuZWR0LWpvdXItJyArIGluZGV4KS5hZGRDbGFzcygnY29sLWVkdC1oaWRlJylcbiAgICAkKCcuZWR0LWpvdXItMCcpLnJlbW92ZUNsYXNzKCdjb2wtZWR0LWhpZGUnKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2pvdXJDb3VyYW50JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IG5vdyA9IG5ldyBEYXRlKClcbiAgbGV0IGNvbG9ubmVzID0gJCgnLmpvdXInKVxuICBsZXQgaW5kZXggPSBnZXRDb2xvbm5lQWN0aXZlKGNvbG9ubmVzKVxuICAkKGNvbG9ubmVzW2luZGV4XSkuYWRkQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICQoY29sb25uZXNbbm93LmdldERheSgpIC0gMV0pLnJlbW92ZUNsYXNzKCdjb2wtZWR0LWhpZGUnKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9mZXRjaC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDEyLzA5LzIwMjEgMDk6MDFcblxuY29uc3QgcmVxdWVzdCA9ICh1cmwsIHBhcmFtcyA9IHt9LCBtZXRob2QgPSAnR0VUJykgPT4ge1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICBtZXRob2RcbiAgfVxuICBpZiAoJ0dFVCcgPT09IG1ldGhvZCkge1xuICAgIHVybCArPSAnPycgKyAobmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKS50b1N0cmluZygpXG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0ID0gKHVybCwgcGFyYW1zKSA9PiByZXF1ZXN0KHVybCwgcGFyYW1zLCAnR0VUJylcbmV4cG9ydCBjb25zdCBwb3N0ID0gKHVybCwgcGFyYW1zKSA9PiByZXF1ZXN0KHVybCwgcGFyYW1zLCAnUE9TVCcpXG5cbmV4cG9ydCBjb25zdCBsb2FkID0gKHVybCwgcGFyYW1zLCBvYmpldCkgPT4ge1xuICAvL2xvYWRlcj93aW5kb3cudW1icmVsbGEuU3Bpbm5lci5zaG93KClcbiAgb2JqZXQuaW5uZXJIVE1MID0gJydcbiAgZmV0Y2goUm91dGluZy5nZW5lcmF0ZSh1cmwsIHBhcmFtcykpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoYm9keSkge1xuICAgICAgb2JqZXQuaW5uZXJIVE1MID0gYm9keVxuICAgICAgLy9sb2FkZXI/d2luZG93LnVtYnJlbGxhLlNwaW5uZXIuaGlkZSgpXG4gICAgfSlcbn1cblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL21hdGVyaWFsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjgvMTEvMjAxOSAxOTo0MFxuXG4vLyBNYXRlcmlhbCBpbnB1dFxuLy9cbiQoZG9jdW1lbnQpLm9uKCdmb2N1cycsICcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2w6bm90KC5ib290c3RyYXAtc2VsZWN0KScsIGZ1bmN0aW9uICgpIHtcbiAgbWF0ZXJpYWxEb0Zsb2F0KCQodGhpcykpXG59KVxuXG4kKGRvY3VtZW50KS5vbignZm9jdXNvdXQnLCAnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sOm5vdCguYm9vdHN0cmFwLXNlbGVjdCknLCBmdW5jdGlvbiAoKSB7XG4gIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xuICAgIG1hdGVyaWFsTm9GbG9hdCgkKHRoaXMpKVxuICB9XG59KVxuXG4vLyBBdXRvIGZvY3VzIGlucHV0c1xubWF0ZXJpYWxEb0Zsb2F0KCQoJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbFthdXRvZm9jdXM9XCJ0cnVlXCJdJykpXG5cblxuZnVuY3Rpb24gbWF0ZXJpYWxEb0Zsb2F0IChlKSB7XG4gIGlmIChlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykubGVuZ3RoKSB7XG4gICAgZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLmFkZENsYXNzKCdkby1mbG9hdCcpXG4gIH0gZWxzZSB7XG4gICAgZS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmFkZENsYXNzKCdkby1mbG9hdCcpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBtYXRlcmlhbE5vRmxvYXQgKGUpIHtcbiAgaWYgKGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5sZW5ndGgpIHtcbiAgICBlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykucmVtb3ZlQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfSBlbHNlIHtcbiAgICBlLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfVxufVxuXG4kKCcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2wnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoID4gMCkge1xuICAgIC8vaWYgKCQodGhpcykuaXMoJ1tkYXRhLXByb3ZpZGV+PVwic2VsZWN0cGlja2VyXCJdJykpIHtcbiAgICAvLyAgcmV0dXJuXG4gICAgLy99XG4gICAgbWF0ZXJpYWxEb0Zsb2F0KCQodGhpcykpXG4gIH1cbn0pXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9tb2RhbGVyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTEvMDMvMjAyMSAxNDoyOVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vZGFsZXJcbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy9cbitmdW5jdGlvbiAoJCkge1xuXG4gIGxldCBjb25maWdNb2RhbGVyID0ge1xuICAgIHVybDogJycsXG4gICAgaXNNb2RhbDogZmFsc2UsXG4gICAgaHRtbDogJycsXG4gICAgdGFyZ2V0OiAnJyxcbiAgICB0eXBlOiAnJyxcbiAgICBzaXplOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAgaGVhZGVyVmlzaWJsZTogdHJ1ZSxcbiAgICBmb290ZXJWaXNpYmxlOiB0cnVlLFxuICAgIGNvbmZpcm1WaXNpYmxlOiB0cnVlLFxuICAgIGNvbmZpcm1UZXh0OiAnT2snLFxuICAgIGNvbmZpcm1DbGFzczogJ2J0biBidG4tdy1zbSBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsVmlzaWJsZTogZmFsc2UsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAgY2FuY2VsQ2xhc3M6ICdidG4gYnRuLXctc20gYnRuLXNlY29uZGFyeScsXG4gICAgYm9keUV4dHJhQ2xhc3M6ICcnLFxuICAgIHNwaW5uZXI6ICc8ZGl2IGNsYXNzPVwiaC0yMDAgY2VudGVyLXZoXCI+PHN2ZyBjbGFzcz1cInNwaW5uZXItY2lyY2xlLW1hdGVyaWFsLXN2Z1wiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIj48Y2lyY2xlIGNsYXNzPVwiY2lyY2xlXCIgY3g9XCIyNVwiIGN5PVwiMjVcIiByPVwiMjBcIj48L3N2Zz48L2Rpdj4nLFxuXG4gICAgYXV0b0Rlc3Ryb3k6IHRydWUsXG5cbiAgICAvLyBFdmVudHNcbiAgICBvblNob3c6IG51bGwsXG4gICAgb25TaG93bjogbnVsbCxcbiAgICBvbkhpZGU6IG51bGwsXG4gICAgb25IaWRkZW46IG51bGwsXG4gICAgb25Db25maXJtOiBudWxsLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuXG4gICAgLy8gUHJpdmF0ZSBvcHRpb25zXG4gICAgbW9kYWxJZDogbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gZ3VpZCAobGVuKSB7XG4gICAgaWYgKGxlbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxlbiA9IDVcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpLnN1YnN0cigwLCBsZW4pXG4gIH1cblxuXG4gIG1vZGFsZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBzZXR0aW5nID0gJC5leHRlbmQoe30sIGNvbmZpZ01vZGFsZXIsIG9wdGlvbnMpXG5cbiAgICBpZiAoc2V0dGluZy5tb2RhbElkKSB7XG4gICAgICAkKCcjJyArIHNldHRpbmcubW9kYWxJZCkubW9kYWwoJ3Nob3cnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG5cbiAgICB2YXIgaWQgPSAnbW9kYWwtJyArIGd1aWQoKVxuXG5cbiAgICB2YXIgaGFuZGxlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaWQpIHtcblxuICAgICAgLy8gQm9vdHN0cmFwIG1vZGFsIGV2ZW50c1xuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLm9uU2hvdykge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9zZXR0aW5nLm9uU2hvdygpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZy5vblNob3duKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9zZXR0aW5nLm9uU2hvd24oKTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmcub25IaWRlKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uSGlkZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5nLm9uSGlkZGVuKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHNldHRpbmcub25IaWRkZW4oKVxuICAgICAgICB9KVxuICAgICAgfVxuXG5cbiAgICAgIC8vIEhhbmRsZSBjb25maXJtIGNhbGxiYWNrXG4gICAgICAvL1xuICAgICAgJCgnIycgKyBpZCkuZmluZCgnW2RhdGEtcGVyZm9ybT1cImNvbmZpcm1cIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gSGFzbid0IHNldFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNvbmZpcm0gPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmcub25Db25maXJtKSkge1xuICAgICAgICAgIHNldHRpbmcub25Db25maXJtKCQoJyMnICsgaWQpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgc3RyaW5nIHZhbHVlLCBzbyBjYWxsIGl0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ29uZmlybS5zdWJzdHJpbmcpIHtcbiAgICAgICAgICBhcHAuY2FsbChzZXR0aW5nLm9uQ29uZmlybSwgJCgnIycgKyBpZCkpXG4gICAgICAgIH1cblxuICAgICAgfSlcblxuXG4gICAgICAvLyBIYW5kbGUgY2FuY2VsIGNhbGxiYWNrXG4gICAgICAvL1xuICAgICAgJCgnIycgKyBpZCkuZmluZCgnW2RhdGEtcGVyZm9ybT1cImNhbmNlbFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBIYXNuJ3Qgc2V0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ2FuY2VsID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5nLm9uQ2FuY2VsKSkge1xuICAgICAgICAgIHNldHRpbmcub25DYW5jZWwoJCgnIycgKyBpZCkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBzdHJpbmcgdmFsdWUsIHNvIGNhbGwgaXRcbiAgICAgICAgaWYgKHNldHRpbmcub25DYW5jZWwuc3Vic3RyaW5nKSB7XG4gICAgICAgICAgYXBwLmNhbGwoc2V0dGluZy5vbkNhbmNlbCwgJCgnIycgKyBpZCkpXG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFdlIHJlY2lldmUgbW9kYWwgbWFya3VwIGZyb20gdXJsXG4gICAgLy9cbiAgICBpZiAoc2V0dGluZy5pc01vZGFsKSB7XG5cbiAgICAgICQoJzxkaXY+JykubG9hZChzZXR0aW5nLnVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCQodGhpcykuZmluZCgnLm1vZGFsJykuYXR0cignaWQnLCBpZCkub3V0ZXJIVE1MKCkpXG5cbiAgICAgICAgJCgnIycgKyBpZCkubW9kYWwoJ3Nob3cnKVxuICAgICAgICAkKCcjJyArIGlkKS5vbmUoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL3RvZG86IGEgY29uZmlybWVyICQoJyMnKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5wZXJmZWN0U2Nyb2xsYmFyKCd1cGRhdGUnKTtcbiAgICAgICAgfSlcblxuXG4gICAgICAgIC8vIERlc3Ryb3kgYWZ0ZXIgY2xvc2VcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHNldHRpbmcuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnIycgKyBpZCkucmVtb3ZlKClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoc2V0dGluZy50aGlzKS5hdHRyKCdkYXRhLW1vZGFsLWlkJywgaWQpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfSlcbiAgICB9XG5cblxuXG5cblxuICAgICAgLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIFdlIHNob3VsZCBkZXNpZ24gdGhlIG1vZGFsXG4gICAgLy9cbiAgICBlbHNlIHtcblxuICAgICAgc3dpdGNoIChzZXR0aW5nLnNpemUpIHtcbiAgICAgICAgY2FzZSAnc20nOlxuICAgICAgICAgIHNldHRpbmcuc2l6ZSA9ICdtb2RhbC1zbSdcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2xnJzpcbiAgICAgICAgICBzZXR0aW5nLnNpemUgPSAnbW9kYWwtbGcnXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAvL3NldHRpbmcuc2l6ZSA9ICcnO1xuICAgICAgfVxuXG5cbiAgICAgIGlmIChzZXR0aW5nLnR5cGUpIHtcbiAgICAgICAgc2V0dGluZy50eXBlID0gJ21vZGFsLScgKyBzZXR0aW5nLnR5cGVcbiAgICAgIH1cblxuXG4gICAgICAvLyBIZWFkZXIgY29kZVxuICAgICAgLy9cbiAgICAgIHZhciBodG1sX2hlYWRlciA9ICcnXG4gICAgICBpZiAoc2V0dGluZy5oZWFkZXJWaXNpYmxlKSB7XG4gICAgICAgIGh0bWxfaGVhZGVyICs9XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4gXFxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JyArIHNldHRpbmcudGl0bGUgKyAnPC9oNT4gXFxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgbXlDbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj4gXFxcbiAgICAgICAgICA8L2Rpdj4nXG4gICAgICB9XG5cblxuICAgICAgLy8gRm9vdGVyIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgaHRtbF9mb290ZXIgPSAnJ1xuICAgICAgaWYgKHNldHRpbmcuZm9vdGVyVmlzaWJsZSkge1xuICAgICAgICBodG1sX2Zvb3RlciArPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPidcblxuICAgICAgICBpZiAoc2V0dGluZy5jYW5jZWxWaXNpYmxlKSB7XG4gICAgICAgICAgaHRtbF9mb290ZXIgKz0gJzxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZy5jYW5jZWxDbGFzcyArICdcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtcGVyZm9ybT1cImNhbmNlbFwiPicgKyBzZXR0aW5nLmNhbmNlbFRleHQgKyAnPC9idXR0b24+J1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmcuY29uZmlybVZpc2libGUpIHtcbiAgICAgICAgICBodG1sX2Zvb3RlciArPSAnPGJ1dHRvbiBjbGFzcz1cIicgKyBzZXR0aW5nLmNvbmZpcm1DbGFzcyArICdcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtcGVyZm9ybT1cImNvbmZpcm1cIj4nICsgc2V0dGluZy5jb25maXJtVGV4dCArICc8L2J1dHRvbj4nXG4gICAgICAgIH1cblxuICAgICAgICBodG1sX2Zvb3RlciArPSAnPC9kaXY+J1xuICAgICAgfVxuXG4gICAgICAvLyBNb2RhbCBjb2RlXG4gICAgICAvL1xuICAgICAgdmFyIG1vZGFsX2h0bWwgPVxuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgJyArIHNldHRpbmcudHlwZSArICdcIiBpZD1cIicgKyBpZCArICdcIiB0YWJpbmRleD1cIi0xXCInICsgKCFzZXR0aW5nLmJhY2tkcm9wID8gJyBkYXRhLWJhY2tkcm9wPVwiZmFsc2VcIicgOiAnJykgKyAnPiBcXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyAnICsgc2V0dGluZy5zaXplICsgJ1wiPiBcXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPiBcXFxuICAgICAgICAgICAgICAgICcgKyBodG1sX2hlYWRlciArICcgXFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSAnICsgc2V0dGluZy5ib2R5RXh0cmFDbGFzcyArICdcIj4gXFxcbiAgICAgICAgICAgICAgICAgICcgKyBzZXR0aW5nLnNwaW5uZXIgKyAnIFxcXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgICAgICAgJyArIGh0bWxfZm9vdGVyICsgJyBcXFxuICAgICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICAgIDwvZGl2PiBcXFxuICAgICAgICAgIDwvZGl2PidcblxuXG4gICAgICAvLyBTaG93IG1vZGFsXG4gICAgICAkKCdib2R5JykuYXBwZW5kKG1vZGFsX2h0bWwpXG4gICAgICAkKCcjJyArIGlkKS5tb2RhbCgnc2hvdycpXG5cblxuICAgICAgLy8gRGVzdHJveSBhZnRlciBjbG9zZVxuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLmF1dG9EZXN0cm95KSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCgnIycgKyBpZCkucmVtb3ZlKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoc2V0dGluZy50aGlzKS5hdHRyKCdkYXRhLW1vZGFsLWlkJywgaWQpXG4gICAgICB9XG5cblxuICAgICAgLy8gTG9hZCBkYXRhIGludG8gdGhlIG1vZGFsXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcudXJsKSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykubG9hZChzZXR0aW5nLnVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vdG9kbzogYSBjb25maXJtZXIgJCh0aGlzKS5wZXJmZWN0U2Nyb2xsYmFyKCd1cGRhdGUnKTtcbiAgICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy5odG1sKSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbChzZXR0aW5nLmh0bWwpXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLnRhcmdldCkge1xuICAgICAgICAkKCcjJyArIGlkKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwoJChzZXR0aW5nLnRhcmdldCkuaHRtbCgpKVxuICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0oalF1ZXJ5KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3NlYXJjaC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI2LzA5LzIwMjAgMTg6MThcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNzZWFyY2gnLCBmdW5jdGlvbiAoZSkge1xuXG4gIGNvbnN0IGtleXdvcmQgPSAkKHRoaXMpLnZhbCgpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX2V0dWRpYW50ID0gJCgnI3NlYXJjaF9yZXBvbnNlX2V0dWRpYW50JylcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsID0gJCgnI3NlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCcpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX2F1dHJlID0gJCgnI3NlYXJjaF9yZXBvbnNlX2F1dHJlJylcblxuICBpZiAoa2V5d29yZC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgncmVjaGVyY2hlJywge2tleXdvcmQ6IGtleXdvcmR9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBsZXQgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhLmV0dWRpYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5ldHVkaWFudHMsIGZ1bmN0aW9uIChpbmRleCwgZXR1ZGlhbnQpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxhIGNsYXNzPVwibWVkaWFcIiBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsJywge1xuICAgICAgICAgICAgICB0eXBlOiAnZXR1ZGlhbnQnLFxuICAgICAgICAgICAgICBzbHVnOiBldHVkaWFudC5zbHVnXG4gICAgICAgICAgICB9KSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cXG4nXG4gICAgICAgICAgICBpZiAoZXR1ZGlhbnQucGhvdG8gPT09ICdub2ltYWdlLnBuZycgfHwgZXR1ZGlhbnQucGhvdG8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8ZGl2IGNsYXNzPVwiYXZhdGFyLWNpcmNsZS1zbVwiPlxcbicgK1xuICAgICAgICAgICAgICAgICcgICAgPHNwYW4gY2xhc3M9XCJpbml0aWFsc1wiPicgKyBldHVkaWFudC5hdmF0YXJJbml0aWFsZXMgKyAnPC9zcGFuPlxcbicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8aW1nIGNsYXNzPVwiYXZhdGFyIGF2YXRhci1zbVwiIHNyYz1cIicgKyBkYXRhLmJhc2VwYXRoICsgJ2V0dWRpYW50cy8nICsgZXR1ZGlhbnQucGhvdG8gKyAnXCIgYWx0PVwiUGhvdG8gZGUgcHJvZmlsIGRlICcgKyBldHVkaWFudC5kaXNwbGF5UHIgKyAnXCI+XFxuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPicgKyBldHVkaWFudC5kaXNwbGF5UHIgKyAnICgnICsgZXR1ZGlhbnQuc2VtZXN0cmUgKyAnKTwvc3Ryb25nPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+JyArIGV0dWRpYW50Lmdyb3VwZXMgKyAnPC90aW1lPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG5cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQuZW1wdHkoKS5hcHBlbmQoaHRtbClcblxuICAgICAgICBodG1sID0gJydcbiAgICAgICAgaWYgKGRhdGEucGVyc29ubmVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5wZXJzb25uZWxzLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnNvbm5lbCkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGEgY2xhc3M9XCJtZWRpYSBpdGVtcy1jZW50ZXJcIiBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsJywge1xuICAgICAgICAgICAgICB0eXBlOiAncGVyc29ubmVsJyxcbiAgICAgICAgICAgICAgc2x1ZzogcGVyc29ubmVsLnNsdWdcbiAgICAgICAgICAgIH0pICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPlxcbidcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWwucGhvdG8gPT09ICdub2ltYWdlLnBuZycgfHwgcGVyc29ubmVsLnBob3RvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGRpdiBjbGFzcz1cImF2YXRhci1jaXJjbGUtc21cIj5cXG4nICtcbiAgICAgICAgICAgICAgICAnICAgIDxzcGFuIGNsYXNzPVwiaW5pdGlhbHNcIj4nICsgcGVyc29ubmVsLmF2YXRhckluaXRpYWxlcyArICc8L3NwYW4+XFxuJyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiJyArIGRhdGEuYmFzZXBhdGggKyAncGVyc29ubmVscy8nICsgcGVyc29ubmVsLnBob3RvICsgJ1wiIGFsdD1cIlBob3RvIGRlIHByb2ZpbCBkZSAnICsgcGVyc29ubmVsLmRpc3BsYXlQciArICdcIj5cXG4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICcgICAgICAgICAgICAgICAgICAgICAgICA8cD4nICsgcGVyc29ubmVsLmRpc3BsYXlQciArICc8L3A+XFxuJyArXG4gICAgICAgICAgICAgICc8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG4gICAgICAgIHNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbC5lbXB0eSgpLmFwcGVuZChodG1sKVxuXG4gICAgICAgIGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YS5hdXRyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEuYXV0cmVzLCBmdW5jdGlvbiAoaW5kZXgsIGF1dHJlKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8YSBjbGFzcz1cIm1lZGlhIGl0ZW1zLWNlbnRlclwiIGhyZWY9XCJcIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9hdmF0YXIvMS5qcGdcIiBhbHQ9XCIuLi5cIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwPicgKyBhdXRyZSArICc8L3A+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfYXV0cmUuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCI+U2Fpc2lyIGF1IG1vaW5zIDMgY2FyYWN0w6hyZXM8L2Rpdj4nXG4gICAgc2VhcmNoX3JlcG9uc2VfYXV0cmUuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICBzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICBzZWFyY2hfcmVwb25zZV9ldHVkaWFudC5lbXB0eSgpLmFwcGVuZChodG1sKVxuICB9XG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdmFsaWRhdG9yLWJzNC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzExLzIwMTkgMTk6NDBcblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBWQUxJREFUT1IgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIGdldFZhbHVlKCRlbCkge1xuICAgIHJldHVybiAkZWwuaXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKSA/ICRlbC5wcm9wKCdjaGVja2VkJykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAkZWwuaXMoJ1t0eXBlPVwicmFkaW9cIl0nKSAgICA/ICEhJCgnW25hbWU9XCInICsgJGVsLmF0dHIoJ25hbWUnKSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aCA6XG4gICAgICAgICAgICRlbC5pcygnc2VsZWN0W211bHRpcGxlXScpICA/ICgkZWwudmFsKCkgfHwgW10pLmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWwudmFsKClcbiAgfVxuXG4gIHZhciBWYWxpZGF0b3IgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyAgICA9IG9wdGlvbnNcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSAkLmV4dGVuZCh7fSwgVmFsaWRhdG9yLlZBTElEQVRPUlMsIG9wdGlvbnMuY3VzdG9tKVxuICAgIHRoaXMuJGVsZW1lbnQgICA9ICQoZWxlbWVudClcbiAgICB0aGlzLiRidG4gICAgICAgPSAkKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCdbZm9ybT1cIicgKyB0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJykgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgdGhpcy4kZWxlbWVudC5vbignaW5wdXQuYnMudmFsaWRhdG9yIGNoYW5nZS5icy52YWxpZGF0b3IgZm9jdXNvdXQuYnMudmFsaWRhdG9yJywgJC5wcm94eSh0aGlzLm9uSW5wdXQsIHRoaXMpKVxuICAgIHRoaXMuJGVsZW1lbnQub24oJ3N1Ym1pdC5icy52YWxpZGF0b3InLCAkLnByb3h5KHRoaXMub25TdWJtaXQsIHRoaXMpKVxuICAgIHRoaXMuJGVsZW1lbnQub24oJ3Jlc2V0LmJzLnZhbGlkYXRvcicsICQucHJveHkodGhpcy5yZXNldCwgdGhpcykpXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLW1hdGNoXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICA9ICQodGhpcylcbiAgICAgIHZhciB0YXJnZXQgPSAkdGhpcy5hdHRyKCdkYXRhLW1hdGNoJylcblxuICAgICAgJCh0YXJnZXQpLm9uKCdpbnB1dC5icy52YWxpZGF0b3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBnZXRWYWx1ZSgkdGhpcykgJiYgJHRoaXMudHJpZ2dlcignaW5wdXQuYnMudmFsaWRhdG9yJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIHJ1biB2YWxpZGF0b3JzIGZvciBmaWVsZHMgd2l0aCB2YWx1ZXMsIGJ1dCBkb24ndCBjbG9iYmVyIHNlcnZlci1zaWRlIGVycm9yc1xuICAgIHRoaXMuJGlucHV0cy5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldFZhbHVlKCQodGhpcykpICYmICEkKHRoaXMpLmNsb3Nlc3QoJy5oYXMtZXJyb3InKS5sZW5ndGhcbiAgICB9KS50cmlnZ2VyKCdmb2N1c291dCcpXG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ25vdmFsaWRhdGUnLCB0cnVlKSAvLyBkaXNhYmxlIGF1dG9tYXRpYyBuYXRpdmUgdmFsaWRhdGlvblxuICB9XG5cbiAgVmFsaWRhdG9yLlZFUlNJT04gPSAnMC4xMS45J1xuXG4gIFZhbGlkYXRvci5JTlBVVF9TRUxFQ1RPUiA9ICc6aW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdLCBbdHlwZT1cInN1Ym1pdFwiXSwgW3R5cGU9XCJyZXNldFwiXSwgYnV0dG9uKSdcblxuICBWYWxpZGF0b3IuRk9DVVNfT0ZGU0VUID0gMjBcblxuICBWYWxpZGF0b3IuREVGQVVMVFMgPSB7XG4gICAgZGVsYXk6IDUwMCxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBkaXNhYmxlOiB0cnVlLFxuICAgIGZvY3VzOiB0cnVlLFxuICAgIGN1c3RvbToge30sXG4gICAgZXJyb3JzOiB7XG4gICAgICBtYXRjaDogJ0RvZXMgbm90IG1hdGNoJyxcbiAgICAgIG1pbmxlbmd0aDogJ05vdCBsb25nIGVub3VnaCdcbiAgICB9LFxuICAgIGZlZWRiYWNrOiB7XG4gICAgICBzdWNjZXNzOiAnZ2x5cGhpY29uLW9rJyxcbiAgICAgIGVycm9yOiAnZ2x5cGhpY29uLXJlbW92ZSdcbiAgICB9XG4gIH1cblxuICBWYWxpZGF0b3IuVkFMSURBVE9SUyA9IHtcbiAgICAnbmF0aXZlJzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgdmFyIGVsID0gJGVsWzBdXG4gICAgICBpZiAoZWwuY2hlY2tWYWxpZGl0eSkge1xuICAgICAgICByZXR1cm4gIWVsLmNoZWNrVmFsaWRpdHkoKSAmJiAhZWwudmFsaWRpdHkudmFsaWQgJiYgKGVsLnZhbGlkYXRpb25NZXNzYWdlIHx8IFwiZXJyb3IhXCIpXG4gICAgICB9XG4gICAgfSxcbiAgICAnbWF0Y2gnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJGVsLmF0dHIoJ2RhdGEtbWF0Y2gnKVxuICAgICAgcmV0dXJuICRlbC52YWwoKSAhPT0gJCh0YXJnZXQpLnZhbCgpICYmIFZhbGlkYXRvci5ERUZBVUxUUy5lcnJvcnMubWF0Y2hcbiAgICB9LFxuICAgICdtaW5sZW5ndGgnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgbWlubGVuZ3RoID0gJGVsLmF0dHIoJ2RhdGEtbWlubGVuZ3RoJylcbiAgICAgIHJldHVybiAkZWwudmFsKCkubGVuZ3RoIDwgbWlubGVuZ3RoICYmIFZhbGlkYXRvci5ERUZBVUxUUy5lcnJvcnMubWlubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICB0aGlzLiRpbnB1dHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoVmFsaWRhdG9yLklOUFVUX1NFTEVDVE9SKVxuICAgICAgLmFkZCh0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXZhbGlkYXRlPVwidHJ1ZVwiXScpKVxuICAgICAgLm5vdCh0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXZhbGlkYXRlPVwiZmFsc2VcIl0nKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7IHNlbGYuY2xlYXJFcnJvcnMoJCh0aGlzKSkgfSlcbiAgICAgIClcblxuICAgIHRoaXMudG9nZ2xlU3VibWl0KClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLm9uSW5wdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzZWxmICAgICAgICA9IHRoaXNcbiAgICB2YXIgJGVsICAgICAgICAgPSAkKGUudGFyZ2V0KVxuICAgIHZhciBkZWZlckVycm9ycyA9IGUudHlwZSAhPT0gJ2ZvY3Vzb3V0J1xuXG4gICAgaWYgKCF0aGlzLiRpbnB1dHMuaXMoJGVsKSkgcmV0dXJuXG5cbiAgICB0aGlzLnZhbGlkYXRlSW5wdXQoJGVsLCBkZWZlckVycm9ycykuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRvZ2dsZVN1Ym1pdCgpXG4gICAgfSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGVJbnB1dCA9IGZ1bmN0aW9uICgkZWwsIGRlZmVyRXJyb3JzKSB7XG4gICAgdmFyIHZhbHVlICAgICAgPSBnZXRWYWx1ZSgkZWwpXG4gICAgdmFyIHByZXZFcnJvcnMgPSAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpXG5cbiAgICBpZiAoJGVsLmlzKCdbdHlwZT1cInJhZGlvXCJdJykpICRlbCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXRbbmFtZT1cIicgKyAkZWwuYXR0cignbmFtZScpICsgJ1wiXScpXG5cbiAgICB2YXIgZSA9ICQuRXZlbnQoJ3ZhbGlkYXRlLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF19KVxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgcmV0dXJuIHRoaXMucnVuVmFsaWRhdG9ycygkZWwpLmRvbmUoZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnLCBlcnJvcnMpXG5cbiAgICAgIGVycm9ycy5sZW5ndGhcbiAgICAgICAgPyBkZWZlckVycm9ycyA/IHNlbGYuZGVmZXIoJGVsLCBzZWxmLnNob3dFcnJvcnMpIDogc2VsZi5zaG93RXJyb3JzKCRlbClcbiAgICAgICAgOiBzZWxmLmNsZWFyRXJyb3JzKCRlbClcblxuICAgICAgaWYgKCFwcmV2RXJyb3JzIHx8IGVycm9ycy50b1N0cmluZygpICE9PSBwcmV2RXJyb3JzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgZSA9IGVycm9ycy5sZW5ndGhcbiAgICAgICAgICA/ICQuRXZlbnQoJ2ludmFsaWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXSwgZGV0YWlsOiBlcnJvcnN9KVxuICAgICAgICAgIDogJC5FdmVudCgndmFsaWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXSwgZGV0YWlsOiBwcmV2RXJyb3JzfSlcblxuICAgICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoZSlcbiAgICAgIH1cblxuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuXG4gICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoJC5FdmVudCgndmFsaWRhdGVkLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF19KSlcbiAgICB9KVxuICB9XG5cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnJ1blZhbGlkYXRvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyIGVycm9ycyAgID0gW11cbiAgICB2YXIgZGVmZXJyZWQgPSAkLkRlZmVycmVkKClcblxuICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZGVmZXJyZWQnKSAmJiAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJykucmVqZWN0KClcbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJywgZGVmZXJyZWQpXG5cbiAgICBmdW5jdGlvbiBnZXRWYWxpZGF0b3JTcGVjaWZpY0Vycm9yKGtleSkge1xuICAgICAgcmV0dXJuICRlbC5hdHRyKCdkYXRhLScgKyBrZXkgKyAnLWVycm9yJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWYWxpZGl0eVN0YXRlRXJyb3IoKSB7XG4gICAgICB2YXIgdmFsaWRpdHkgPSAkZWxbMF0udmFsaWRpdHlcbiAgICAgIHJldHVybiB2YWxpZGl0eS50eXBlTWlzbWF0Y2ggICAgPyAkZWwuYXR0cignZGF0YS10eXBlLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggPyAkZWwuYXR0cignZGF0YS1wYXR0ZXJuLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5zdGVwTWlzbWF0Y2ggICAgPyAkZWwuYXR0cignZGF0YS1zdGVwLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5yYW5nZU92ZXJmbG93ICAgPyAkZWwuYXR0cignZGF0YS1tYXgtZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnJhbmdlVW5kZXJmbG93ICA/ICRlbC5hdHRyKCdkYXRhLW1pbi1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkudmFsdWVNaXNzaW5nICAgID8gJGVsLmF0dHIoJ2RhdGEtcmVxdWlyZWQtZXJyb3InKVxuICAgICAgICAgICA6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHZW5lcmljRXJyb3IoKSB7XG4gICAgICByZXR1cm4gJGVsLmF0dHIoJ2RhdGEtZXJyb3InKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShrZXkpIHtcbiAgICAgIHJldHVybiBnZXRWYWxpZGF0b3JTcGVjaWZpY0Vycm9yKGtleSlcbiAgICAgICAgICB8fCBnZXRWYWxpZGl0eVN0YXRlRXJyb3IoKVxuICAgICAgICAgIHx8IGdldEdlbmVyaWNFcnJvcigpXG4gICAgfVxuXG4gICAgJC5lYWNoKHRoaXMudmFsaWRhdG9ycywgJC5wcm94eShmdW5jdGlvbiAoa2V5LCB2YWxpZGF0b3IpIHtcbiAgICAgIHZhciBlcnJvciA9IG51bGxcbiAgICAgIGlmICgoZ2V0VmFsdWUoJGVsKSB8fCAkZWwuYXR0cigncmVxdWlyZWQnKSkgJiZcbiAgICAgICAgICAoJGVsLmF0dHIoJ2RhdGEtJyArIGtleSkgIT09IHVuZGVmaW5lZCB8fCBrZXkgPT0gJ25hdGl2ZScpICYmXG4gICAgICAgICAgKGVycm9yID0gdmFsaWRhdG9yLmNhbGwodGhpcywgJGVsKSkpIHtcbiAgICAgICAgIGVycm9yID0gZ2V0RXJyb3JNZXNzYWdlKGtleSkgfHwgZXJyb3JcbiAgICAgICAgIX5lcnJvcnMuaW5kZXhPZihlcnJvcikgJiYgZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICB9XG4gICAgfSwgdGhpcykpXG5cbiAgICBpZiAoIWVycm9ycy5sZW5ndGggJiYgZ2V0VmFsdWUoJGVsKSAmJiAkZWwuYXR0cignZGF0YS1yZW1vdGUnKSkge1xuICAgICAgdGhpcy5kZWZlcigkZWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7fVxuICAgICAgICBkYXRhWyRlbC5hdHRyKCduYW1lJyldID0gZ2V0VmFsdWUoJGVsKVxuICAgICAgICAkLmdldCgkZWwuYXR0cignZGF0YS1yZW1vdGUnKSwgZGF0YSlcbiAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yKSB7IGVycm9ycy5wdXNoKGdldEVycm9yTWVzc2FnZSgncmVtb3RlJykgfHwgZXJyb3IpIH0pXG4gICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7IGRlZmVycmVkLnJlc29sdmUoZXJyb3JzKX0pXG4gICAgICB9KVxuICAgIH0gZWxzZSBkZWZlcnJlZC5yZXNvbHZlKGVycm9ycylcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlKClcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICAkLndoZW4odGhpcy4kaW5wdXRzLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBzZWxmLnZhbGlkYXRlSW5wdXQoJCh0aGlzKSwgZmFsc2UpXG4gICAgfSkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuICAgICAgc2VsZi5mb2N1c0Vycm9yKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuZm9jdXNFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5mb2N1cykgcmV0dXJuXG5cbiAgICB2YXIgJGlucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKFwiLmhhcy1lcnJvcjpmaXJzdCA6aW5wdXRcIilcbiAgICBpZiAoJGlucHV0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkaW5wdXQub2Zmc2V0KCkudG9wIC0gVmFsaWRhdG9yLkZPQ1VTX09GRlNFVH0sIDI1MClcbiAgICAkaW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5zaG93RXJyb3JzID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciBtZXRob2QgPSB0aGlzLm9wdGlvbnMuaHRtbCA/ICdodG1sJyA6ICd0ZXh0J1xuICAgIHZhciBlcnJvcnMgPSAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpXG4gICAgdmFyICRncm91cCA9ICRlbC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpXG4gICAgdmFyICRibG9jayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgdmFyICRmZWVkYmFjayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG5cbiAgICBpZiAoIWVycm9ycy5sZW5ndGgpIHJldHVyblxuXG4gICAgJGVsLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG5cbiAgICBlcnJvcnMgPSAkKCc8dWwvPicpXG4gICAgICAuYWRkQ2xhc3MoJ2xpc3QtdW5zdHlsZWQnKVxuICAgICAgLmFwcGVuZCgkLm1hcChlcnJvcnMsIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gJCgnPGxpLz4nKVttZXRob2RdKGVycm9yKSB9KSlcblxuICAgICRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JykgPT09IHVuZGVmaW5lZCAmJiAkYmxvY2suZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcsICRibG9jay5odG1sKCkpXG4gICAgJGJsb2NrLmVtcHR5KCkuYXBwZW5kKGVycm9ycylcbiAgICAkZ3JvdXAuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyJylcblxuICAgICRncm91cC5oYXNDbGFzcygnaGFzLWZlZWRiYWNrJylcbiAgICAgICYmICRmZWVkYmFjay5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcbiAgICAgICYmICRmZWVkYmFjay5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpXG4gICAgICAmJiAkZ3JvdXAucmVtb3ZlQ2xhc3MoJ2hhcy1zdWNjZXNzJylcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuY2xlYXJFcnJvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyICRncm91cCA9ICRlbC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpXG4gICAgdmFyICRibG9jayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgdmFyICRmZWVkYmFjayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG5cbiAgICAkZWwucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgICRibG9jay5odG1sKCRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JykpXG4gICAgJGdyb3VwLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWRhbmdlciBoYXMtc3VjY2VzcycpXG5cbiAgICAkZ3JvdXAuaGFzQ2xhc3MoJ2hhcy1mZWVkYmFjaycpXG4gICAgICAmJiAkZmVlZGJhY2sucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgJiYgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgZ2V0VmFsdWUoJGVsKVxuICAgICAgJiYgJGZlZWRiYWNrLmFkZENsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgJGdyb3VwLmFkZENsYXNzKCdoYXMtc3VjY2VzcycpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmhhc0Vycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBmaWVsZEVycm9ycygpIHtcbiAgICAgIHJldHVybiAhISgkKHRoaXMpLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnKSB8fCBbXSkubGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy4kaW5wdXRzLmZpbHRlcihmaWVsZEVycm9ycykubGVuZ3RoXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmlzSW5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBmaWVsZEluY29tcGxldGUoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRWYWx1ZSgkKHRoaXMpKVxuICAgICAgcmV0dXJuICEodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIgPyAkLnRyaW0odmFsdWUpIDogdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy4kaW5wdXRzLmZpbHRlcignW3JlcXVpcmVkXScpLmZpbHRlcihmaWVsZEluY29tcGxldGUpLmxlbmd0aFxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpXG4gICAgaWYgKHRoaXMuaXNJbmNvbXBsZXRlKCkgfHwgdGhpcy5oYXNFcnJvcnMoKSkgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnRvZ2dsZVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlKSByZXR1cm5cbiAgICB0aGlzLiRidG4udG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdGhpcy5pc0luY29tcGxldGUoKSB8fCB0aGlzLmhhc0Vycm9ycygpKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uICgkZWwsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSAkLnByb3h5KGNhbGxiYWNrLCB0aGlzLCAkZWwpXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGVsYXkpIHJldHVybiBjYWxsYmFjaygpXG4gICAgd2luZG93LmNsZWFyVGltZW91dCgkZWwuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKSlcbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnLCB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgdGhpcy5vcHRpb25zLmRlbGF5KSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuXG4gICAgdGhpcy4kaW5wdXRzXG4gICAgICAucmVtb3ZlRGF0YShbJ2JzLnZhbGlkYXRvci5lcnJvcnMnLCAnYnMudmFsaWRhdG9yLmRlZmVycmVkJ10pXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgIHZhciB0aW1lb3V0ID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpICYmICR0aGlzLnJlbW92ZURhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0JylcbiAgICAgIH0pXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICB2YXIgb3JpZ2luYWxDb250ZW50ID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpXG5cbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpXG4gICAgICAgICAgLmh0bWwob3JpZ2luYWxDb250ZW50KVxuICAgICAgfSlcblxuICAgIHRoaXMuJGJ0bi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKVxuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaGFzLWVycm9yLCAuaGFzLWRhbmdlciwgLmhhcy1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyIGhhcy1zdWNjZXNzJylcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAucmVtb3ZlQXR0cignbm92YWxpZGF0ZScpXG4gICAgICAucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yJylcbiAgICAgIC5vZmYoJy5icy52YWxpZGF0b3InKVxuXG4gICAgdGhpcy4kaW5wdXRzXG4gICAgICAub2ZmKCcuYnMudmFsaWRhdG9yJylcblxuICAgIHRoaXMub3B0aW9ucyAgICA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBudWxsXG4gICAgdGhpcy4kZWxlbWVudCAgID0gbnVsbFxuICAgIHRoaXMuJGJ0biAgICAgICA9IG51bGxcbiAgICB0aGlzLiRpbnB1dHMgICAgPSBudWxsXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gVkFMSURBVE9SIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBWYWxpZGF0b3IuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvcicpXG5cbiAgICAgIGlmICghZGF0YSAmJiBvcHRpb24gPT0gJ2Rlc3Ryb3knKSByZXR1cm5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yJywgKGRhdGEgPSBuZXcgVmFsaWRhdG9yKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi52YWxpZGF0b3JcblxuICAkLmZuLnZhbGlkYXRvciAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLnZhbGlkYXRvci5Db25zdHJ1Y3RvciA9IFZhbGlkYXRvclxuXG5cbiAgLy8gVkFMSURBVE9SIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4udmFsaWRhdG9yLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi52YWxpZGF0b3IgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBWQUxJREFUT1IgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT09PT09XG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ2Zvcm1bZGF0YS10b2dnbGU9XCJ2YWxpZGF0b3JcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkZm9ybSA9ICQodGhpcylcbiAgICAgIFBsdWdpbi5jYWxsKCRmb3JtLCAkZm9ybS5kYXRhKCkpXG4gICAgfSlcbiAgfSlcblxufShqUXVlcnkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==