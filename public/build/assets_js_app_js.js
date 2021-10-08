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
// @lastUpdate 01/10/2021 10:59

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
          _this._getFilterFromField(elem);

          _this._filterArray();
        });
      }
    });
    selects.forEach(function (select) {
      select.addEventListener('change', function (elem) {
        _this._getFilterFromField(elem);

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
      var t = name.split('[');
      return t[1].substr(0, t[1].length - 1);
    }
  }, {
    key: "_getFilterFromField",
    value: function _getFilterFromField(input) {
      var name = this._extractNameFromForm(input.name);

      switch (input.type) {
        case 'text':
        case 'select-one':
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2NvbXBvbmVudHMvRGF0ZVBpY2tlci5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VsZWN0Q2hhbmdlV2lkZ2V0LmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9hc3NldHMvY29tcG9uZW50cy9TZWxlY3RDb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2NvbXBvbmVudHMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL2Fzc2V0cy9qcy9mZXRjaC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL21hdGVyaWFsLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9hc3NldHMvanMvbW9kYWxlci5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3ZhbGlkYXRvci1iczQuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL2Fzc2V0cy9jc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsImRhdGFzZXQiLCJvcHRpb25zIiwiSlNPTiIsInBhcnNlIiwiZGEiLCJMQU5HIiwiZmxhdHBpY2tyIiwiSFRNTElucHV0RWxlbWVudCIsIlNlbGVjdENoYW5nZVdpZGdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicm91dGUiLCJ0YXJnZXQiLCJwYXJhbXMiLCJ2YWx1ZSIsIl91cGRhdGUiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiU2VsZWN0Q29tcGxldGUiLCJUb21TZWxlY3QiLCJBU0MiLCJERVNDIiwiSUNPTl9BU0MiLCJJQ09OX0RFU0MiLCJUYWJsZSIsImRpdiIsImJhc2VfdXJsIiwiYWpheCIsInVybCIsInRhYmxlIiwicXVlcnlTZWxlY3RvciIsInRhYmxlQm9keSIsInBhZ2VBY3RpdmUiLCJuYkVsZW1lbnRQZXJQYWdlIiwicGFnZUxlbmd0aCIsIm9yZGVyIiwiZmlsdGVyIiwiaW5uZXJIVE1MIiwiY29sdW1ucyIsImZvckVhY2giLCJjb2x1bW4iLCJvcmRlcmFibGUiLCJpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImN1cnNvciIsImVsZW0iLCJfYnVpbGRBcnJheSIsImZvcm0iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlucHV0cyIsInNlbGVjdHMiLCJpbnB1dCIsInR5cGUiLCJldmVudCIsImxlbmd0aCIsIl9nZXRGaWx0ZXJGcm9tRmllbGQiLCJfZmlsdGVyQXJyYXkiLCJzZWxlY3QiLCJwYWdpbmciLCJwYWdpbmdfaWQiLCJwcmV2ZW50RGVmYXVsdCIsIl91cGRhdGVIZWFkZXIiLCJ0YWJsZWF1Iiwib2JqIiwiT2JqZWN0IiwiZW50cmllcyIsImVudHJ5Iiwia2V5IiwiaXRlbSIsIl9jb252ZXJ0VG9GZXRjaCIsInRoZW4iLCJkYXRhIiwiaHRtbCIsIl91cGRhdGVQYWdpbmF0aW9uIiwidGV4dGUiLCJpbm5lclRleHQiLCJuYXYiLCJwcmV2aW91c0Rpc2FibGVkIiwiZmlyc3RQYWdlIiwibmV4dERpc2FibGVkIiwibGFzdFBhZ2UiLCJwYWdlQ3V0TG93IiwibnVtQWN0aXZlUGFnZSIsInBhZ2VDdXRIaWdoIiwibmJQYWdlcyIsImkiLCJwYWciLCJwIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJwYWdlIiwibmFtZSIsInQiLCJzcGxpdCIsInN1YnN0ciIsIl9leHRyYWN0TmFtZUZyb21Gb3JtIiwiY2hlY2tlZCIsInB1c2giLCJIVE1MRWxlbWVudCIsInJlcXVpcmUiLCJsb29rdXAiLCJnZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIiQiLCJvbiIsImZpbGVuYW1lIiwiZmlsZXMiLCJjdXJyZW50VGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWVudURhcmtUaGVtZSIsImVsZW1lbnRzIiwiZWwiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGhlbWUiLCJjb250YWlucyIsInNldEl0ZW0iLCJhbm5lZSIsImdldFBhcmVudEJ5VGFnTmFtZSIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImFkZCIsInJlYWR5IiwiY2hhbmdlIiwibmV4dCIsImpvaW4iLCJwcmVsb2FkZXIiLCJzcGVlZCIsImRhdGFBdHRyIiwiZmFkZU91dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3NzIiwidXBkYXRlSW50ZXJmYWNlIiwidmFsaWRhdG9yIiwiYWpheENvbXBsZXRlIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlVG9nZ2xlIiwibW9kYWxlciIsImdldERhdGFPcHRpb25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGUiLCJmb3JtYXQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdWNjZXNzIiwiZWFjaCIsImNvbG9yIiwiaGFzRGF0YUF0dHIiLCJ0b29sdGlwIiwiY29udGFpbmVyIiwidHJpZ2dlciIsInRlbXBsYXRlIiwiaGFzQ2xhc3MiLCJjbG9zZSIsIm9wZW4iLCJhZGRDbGFzcyIsImZvY3VzIiwic2lkZWJhciIsInBzIiwiUGVyZmVjdFNjcm9sbGJhciIsIiRzdWJtZW51IiwiaXMiLCJzbGlkZVVwIiwidG9nZ2xlRm9sZCIsImFwcCIsInRvZ2dsZVN0YXRlIiwiZm9sZCIsInN0YXRlIiwidW5mb2xkIiwidG9nZ2xlSGlkZSIsImhpZGUiLCJzaG93IiwicHJlcGVuZCIsInJlbW92ZSIsInF1aWNrdmlldyIsInFwcyIsInVwZGF0ZSIsInJlbG9hZFF2IiwiZGVzdHJveSIsImdldFRhcmdldCIsInF2IiwiYXR0ciIsImxvYWQiLCJub3QiLCJhZnRlciIsInByZXYiLCJ1bmRlZmluZWQiLCJnZXRDb2xvbm5lQWN0aXZlIiwiY29sb25uZXMiLCJpbmRleCIsImNvbG9ubmUiLCJub3ciLCJEYXRlIiwiZ2V0RGF5IiwicmVxdWVzdCIsIm1ldGhvZCIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0Iiwib2JqZXQiLCJ0ZXh0IiwibWF0ZXJpYWxEb0Zsb2F0IiwidmFsIiwibWF0ZXJpYWxOb0Zsb2F0IiwicGFyZW50IiwiY29uZmlnTW9kYWxlciIsImlzTW9kYWwiLCJzaXplIiwidGl0bGUiLCJiYWNrZHJvcCIsImhlYWRlclZpc2libGUiLCJmb290ZXJWaXNpYmxlIiwiY29uZmlybVZpc2libGUiLCJjb25maXJtVGV4dCIsImNvbmZpcm1DbGFzcyIsImNhbmNlbFZpc2libGUiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ2xhc3MiLCJib2R5RXh0cmFDbGFzcyIsInNwaW5uZXIiLCJhdXRvRGVzdHJveSIsIm9uU2hvdyIsIm9uU2hvd24iLCJvbkhpZGUiLCJvbkhpZGRlbiIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwibW9kYWxJZCIsImd1aWQiLCJsZW4iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsInNldHRpbmciLCJleHRlbmQiLCJtb2RhbCIsImhhbmRsZUNhbGxiYWNrIiwiaXNGdW5jdGlvbiIsInN1YnN0cmluZyIsImNhbGwiLCJhcHBlbmQiLCJvdXRlckhUTUwiLCJvbmUiLCJodG1sX2hlYWRlciIsImh0bWxfZm9vdGVyIiwibW9kYWxfaHRtbCIsImpRdWVyeSIsImtleXdvcmQiLCJzZWFyY2hfcmVwb25zZV9ldHVkaWFudCIsInNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCIsInNlYXJjaF9yZXBvbnNlX2F1dHJlIiwiZGF0YVR5cGUiLCJldHVkaWFudHMiLCJldHVkaWFudCIsInNsdWciLCJwaG90byIsImF2YXRhckluaXRpYWxlcyIsImJhc2VwYXRoIiwiZGlzcGxheVByIiwic2VtZXN0cmUiLCJncm91cGVzIiwiZW1wdHkiLCJwZXJzb25uZWxzIiwicGVyc29ubmVsIiwiYXV0cmVzIiwiYXV0cmUiLCJnZXRWYWx1ZSIsIiRlbCIsInByb3AiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwiVkFMSURBVE9SUyIsImN1c3RvbSIsIiRlbGVtZW50IiwiJGJ0biIsInByb3h5Iiwib25JbnB1dCIsIm9uU3VibWl0IiwicmVzZXQiLCIkdGhpcyIsIiRpbnB1dHMiLCJWRVJTSU9OIiwiSU5QVVRfU0VMRUNUT1IiLCJGT0NVU19PRkZTRVQiLCJERUZBVUxUUyIsImRlbGF5IiwiZGlzYWJsZSIsImVycm9ycyIsIm1hdGNoIiwibWlubGVuZ3RoIiwiZmVlZGJhY2siLCJlcnJvciIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJwcm90b3R5cGUiLCJzZWxmIiwiY2xlYXJFcnJvcnMiLCJ0b2dnbGVTdWJtaXQiLCJkZWZlckVycm9ycyIsInZhbGlkYXRlSW5wdXQiLCJkb25lIiwicHJldkVycm9ycyIsIkV2ZW50IiwicmVsYXRlZFRhcmdldCIsImlzRGVmYXVsdFByZXZlbnRlZCIsInJ1blZhbGlkYXRvcnMiLCJkZWZlciIsInNob3dFcnJvcnMiLCJkZXRhaWwiLCJkZWZlcnJlZCIsIkRlZmVycmVkIiwicmVqZWN0IiwiZ2V0VmFsaWRhdG9yU3BlY2lmaWNFcnJvciIsImdldFZhbGlkaXR5U3RhdGVFcnJvciIsInR5cGVNaXNtYXRjaCIsInBhdHRlcm5NaXNtYXRjaCIsInN0ZXBNaXNtYXRjaCIsInJhbmdlT3ZlcmZsb3ciLCJyYW5nZVVuZGVyZmxvdyIsInZhbHVlTWlzc2luZyIsImdldEdlbmVyaWNFcnJvciIsImdldEVycm9yTWVzc2FnZSIsImluZGV4T2YiLCJmYWlsIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiYWx3YXlzIiwicmVzb2x2ZSIsInByb21pc2UiLCJ2YWxpZGF0ZSIsIndoZW4iLCJtYXAiLCJmb2N1c0Vycm9yIiwiJGlucHV0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIiRncm91cCIsIiRibG9jayIsIiRmZWVkYmFjayIsImhhc0Vycm9ycyIsImZpZWxkRXJyb3JzIiwiaXNJbmNvbXBsZXRlIiwiZmllbGRJbmNvbXBsZXRlIiwidHJpbSIsImNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZURhdGEiLCJ0aW1lb3V0Iiwib3JpZ2luYWxDb250ZW50IiwicmVtb3ZlQXR0ciIsIm9mZiIsIlBsdWdpbiIsIm9wdGlvbiIsIm9sZCIsImZuIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwiJGZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztJQUVxQkEsVTs7Ozs7QUFFakIsd0JBQWU7QUFBQTs7QUFBQTs7QUFDWDs7QUFDQSxRQUFJLE1BQUtDLE9BQUwsQ0FBYUMsT0FBakIsRUFBMEI7QUFDdEIsWUFBS0EsT0FBTCxHQUFlQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxNQUFLSCxPQUFMLENBQWFDLE9BQXhCLENBQWY7QUFDSCxLQUZELE1BRU87QUFDSCxZQUFLQSxPQUFMLEdBQWUsRUFBZjtBQUNBLFlBQUtBLE9BQUwsQ0FBYSxZQUFiLElBQTZCLE9BQTdCO0FBQ0g7O0FBQ0QsVUFBS0EsT0FBTCxDQUFhLFFBQWIsSUFBeUJHLEVBQUUsQ0FBQ0MsSUFBNUI7QUFSVztBQVNkOzs7O1dBRUQsNkJBQXFCO0FBQ2pCLFdBQUtDLFNBQUwsR0FBaUJBLG1EQUFTLENBQUMsSUFBRCxFQUFPLEtBQUtMLE9BQVosQ0FBMUI7QUFDSDs7OztpQ0FmbUNNLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R4QztBQUNBO0FBQ0E7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QU8sSUFBUDtBQUNELEdBSEQsQ0F0WFksQ0E0WFo7QUFDQTs7O0FBRUF2USxHQUFDLENBQUNILE1BQUQsQ0FBRCxDQUFVSSxFQUFWLENBQWEsTUFBYixFQUFxQixZQUFZO0FBQy9CRCxLQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQzZDLElBQW5DLENBQXdDLFlBQVk7QUFDbEQsVUFBSThOLEtBQUssR0FBRzNRLENBQUMsQ0FBQyxJQUFELENBQWI7QUFDQXFRLFlBQU0sQ0FBQ3JILElBQVAsQ0FBWTJILEtBQVosRUFBbUJBLEtBQUssQ0FBQzdTLElBQU4sRUFBbkI7QUFDRCxLQUhEO0FBSUQsR0FMRDtBQU9ELENBdFlBLENBc1lDeUwsTUF0WUQsQ0FBRCxDOzs7Ozs7Ozs7Ozs7QUNOQSIsImZpbGUiOiJhc3NldHNfanNfYXBwX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2NvbXBvbmVudHMvRGF0ZVBpY2tlci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDEzLzA5LzIwMjEgMjA6NTlcblxuaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InXG5pbXBvcnQgJ2ZsYXRwaWNrci9kaXN0L2wxMG4vZnIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBIVE1MSW5wdXRFbGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBpZiAodGhpcy5kYXRhc2V0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IEpTT04ucGFyc2UodGhpcy5kYXRhc2V0Lm9wdGlvbnMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zWydkYXRlRm9ybWF0J10gPSAnZC9tL1knXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zWydsb2NhbGUnXSA9IGRhLkxBTkdcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyID0gZmxhdHBpY2tyKHRoaXMsIHRoaXMub3B0aW9ucylcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvY29tcG9uZW50cy9TZWxlY3RDaGFuZ2VXaWRnZXQuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMy8wOS8yMDIxIDIwOjU5XG5cbmltcG9ydCB7cG9zdH0gZnJvbSAnLi4vanMvZmV0Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdENoYW5nZVdpZGdldCBleHRlbmRzIEhUTUxTZWxlY3RFbGVtZW50IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICBzdXBlcigpXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZSA9IGUudGFyZ2V0LmRhdGFzZXQucm91dGVcbiAgICAgIHRoaXMucGFyYW1zID0gSlNPTi5wYXJzZShlLnRhcmdldC5kYXRhc2V0LnBhcmFtcylcbiAgICAgIHRoaXMucGFyYW1zLnZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgIC8vdG9kbzogw6l2ZW50dWVsbGVtZW50IGZpZWxkIGV0IHBvc3Q/XG4gICAgICB0aGlzLl91cGRhdGUoKVxuICAgIH0pXG4gIH1cblxuICBfdXBkYXRlICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBhcmFtcylcbiAgICBwb3N0KFxuICAgICAgdGhpcy5yb3V0ZSxcbiAgICAgIHRoaXMucGFyYW1zXG4gICAgKVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvY29tcG9uZW50cy9TZWxlY3RDb21wbGV0ZS5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDEzLzA5LzIwMjEgMjE6MDBcblxuaW1wb3J0IFRvbVNlbGVjdCBmcm9tICd0b20tc2VsZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RDb21wbGV0ZSBleHRlbmRzIEhUTUxTZWxlY3RFbGVtZW50IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7fVxuICAgIHN1cGVyKClcbiAgICBpZiAodGhpcy5kYXRhc2V0Lm9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBKU09OLnBhcnNlKHRoaXMuZGF0YXNldC5vcHRpb25zKVxuICAgIH1cbiAgICBuZXcgVG9tU2VsZWN0KHRoaXMsIG9wdGlvbnMpXG5cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIxLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2NvbXBvbmVudHMvdGFibGUuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwMS8xMC8yMDIxIDEwOjU5XG5cbmltcG9ydCB7cG9zdH0gZnJvbSAnLi4vanMvZmV0Y2gnXG5cbmNvbnN0IEFTQyA9ICdhc2MnXG5jb25zdCBERVNDID0gJ2Rlc2MnXG5cbmNvbnN0IElDT05fQVNDID0gJyYjOTY2MDsnXG5jb25zdCBJQ09OX0RFU0MgPSAnJiM5NjUwOydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuZGl2ID0gdGhpc1xuXG4gICAgdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZSh0aGlzLmRhdGFzZXQub3B0aW9ucylcbiAgICB0aGlzLmJhc2VfdXJsID0gdGhpcy5vcHRpb25zLmFqYXgudXJsXG5cbiAgICB0aGlzLnRhYmxlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCd0YWJsZS5kYXRhYmxlJylcbiAgICB0aGlzLnRhYmxlQm9keSA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcigndGJvZHknKVxuICAgIHRoaXMucGFnZUFjdGl2ZSA9IHRoaXMub3B0aW9ucy5wYWdlQWN0aXZlIC8vcGFyIGTDqWZhdXQgb24gcsOpY3Vww6hyZVxuICAgIHRoaXMubmJFbGVtZW50UGVyUGFnZSA9IHRoaXMub3B0aW9ucy5wYWdlTGVuZ3RoXG4gICAgdGhpcy5vcmRlciA9IFtdXG4gICAgdGhpcy5maWx0ZXIgPSBbXVxuXG4gICAgdGhpcy50YWJsZUJvZHkuaW5uZXJIVE1MID0gJydcblxuICAgIHRoaXMub3B0aW9ucy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgaWYgKGNvbHVtbi5vcmRlcmFibGUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGNvbHVtbi5vcmRlciAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vcmRlciA9IFt7XG4gICAgICAgICAgICBjb2x1bW46IGNvbHVtbi5pZCxcbiAgICAgICAgICAgIG9yZGVyOiBjb2x1bW4ub3JkZXJcbiAgICAgICAgICB9XVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sdW1uLmlkKS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcidcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sdW1uLmlkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbGVtKSA9PiB7XG4gICAgICAgICAgdGhpcy5vcmRlciA9IFt7XG4gICAgICAgICAgICBjb2x1bW46IGVsZW0udGFyZ2V0LmlkLFxuICAgICAgICAgICAgb3JkZXI6IGVsZW0udGFyZ2V0LmRhdGFzZXQub3JkZXIvL3RvZG86IG9yZHJlIGFjdHVlbC4uLiBhIGludmVyc2VyIGRhbnMgbGEgcmVxdWV0ZT8gTWV0dHJlIGxlcyBkZXV4IGZsZWNoZXMgc2kgcGFzIHRyacOpID8gc2kgZGVmYXVsdG9yZGVyID0gZmFsc2U/XG4gICAgICAgICAgfV1cbiAgICAgICAgICAvL3RvZG86IG1ldHRyZSDDoCBqb3VyIGxlIHNlbnMgZGUgbGEgZmxlY2hlLi4uXG4gICAgICAgICAgdGhpcy5fYnVpbGRBcnJheSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVxuXG4gICAgLy9ham91dCBkZXMgZXZlbnRzIHN1ciBsZSBmb3JtXG4gICAgbGV0IGlucHV0cyA9IHRoaXMuZm9ybVswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVxuICAgIGxldCBzZWxlY3RzID0gdGhpcy5mb3JtWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKVxuXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAndGV4dCcgJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIC8vb24gbmUgZMOpY2xlbmNoZSByaWVuIHNpIG1vaW5zIGRlIDMgY2FyYWN0w6hyZXNcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2dldEZpbHRlckZyb21GaWVsZChldmVudC50YXJnZXQpXG4gICAgICAgICAgdGhpcy5fYnVpbGRBcnJheSgpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nIHx8IGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGVsZW0pID0+IHtcbiAgICAgICAgICB0aGlzLl9nZXRGaWx0ZXJGcm9tRmllbGQoZWxlbSlcbiAgICAgICAgICB0aGlzLl9maWx0ZXJBcnJheSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHNlbGVjdHMuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGVsZW0pID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0RmlsdGVyRnJvbUZpZWxkKGVsZW0pXG4gICAgICAgIHRoaXMuX2ZpbHRlckFycmF5KClcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFnaW5nID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMucGFnaW5nX2lkICsgJ19zZWxlY3QnKVxuICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLm5iRWxlbWVudFBlclBhZ2UgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICB0aGlzLl9idWlsZEFycmF5KClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlSGVhZGVyKClcbiAgICB0aGlzLl9idWlsZEFycmF5KClcbiAgfVxuXG4gIF9maWx0ZXJBcnJheSAoZXZlbnQpIHtcbiAgICAvL3RoaXMuX2dldEZpbHRlckZyb21GaWVsZChldmVudC50YXJnZXQpXG4gICAgY29uc29sZS5sb2codGhpcy5maWx0ZXIpXG4gICAgdGhpcy5fYnVpbGRBcnJheSgpXG4gIH1cblxuICBfY29udmVydFRvRmV0Y2ggKHRhYmxlYXUpIHtcbiAgICBsZXQgb2JqID0ge31cblxuICAgIE9iamVjdC5lbnRyaWVzKHRhYmxlYXUpLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgY29uc3QgW2tleSwgaXRlbV0gPSBlbnRyeVxuICAgICAgb2JqW2tleV0gPSBpdGVtXG4gICAgfSlcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICBfYnVpbGRBcnJheSAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5vcmRlcilcbiAgICB0aGlzLnRhYmxlQm9keS5pbm5lckhUTUwgPSAnJ1xuICAgIHBvc3QodGhpcy5iYXNlX3VybCwge1xuICAgICAgcGFnaW5nOiB7XG4gICAgICAgIHBhZ2VMZW5ndGg6IHRoaXMubmJFbGVtZW50UGVyUGFnZSxcbiAgICAgICAgcGFnZUFjdGl2ZTogdGhpcy5wYWdlQWN0aXZlXG4gICAgICB9LFxuICAgICAgb3JkZXI6IHRoaXMub3JkZXIsXG4gICAgICBmaWx0ZXI6IHRoaXMuX2NvbnZlcnRUb0ZldGNoKHRoaXMuZmlsdGVyKVxuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXRhLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGxldCBodG1sID0gJzx0cj4nXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICBodG1sICs9IGA8dGQ+JHtpdGVtW2NvbHVtbi5pZF19PC90ZD5gXG4gICAgICAgICAgfSlcbiAgICAgICAgICBodG1sICs9ICc8L3RyPidcbiAgICAgICAgICB0aGlzLnRhYmxlQm9keS5pbm5lckhUTUwgKz0gaHRtbFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGh0bWwgPSAnPHRyPidcbiAgICAgICAgaHRtbCArPSAnPHRkIGNvbHNwYW49XCInICsgdGhpcy5vcHRpb25zLmNvbHVtbnMubGVuZ3RoICsgJ1wiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5QYXMgZGUgZG9ubsOpZXMuPC90ZD4nXG4gICAgICAgIGh0bWwgKz0gJzwvdHI+J1xuICAgICAgICB0aGlzLnRhYmxlQm9keS5pbm5lckhUTUwgPSBodG1sXG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGVQYWdpbmF0aW9uKGRhdGEucGFnaW5nKVxuICAgIH0pXG4gIH1cblxuXG4gIF91cGRhdGVIZWFkZXIgKCkge1xuICAgIHRoaXMub3B0aW9ucy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgbGV0IHRleHRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sdW1uLmlkKS5pbm5lclRleHRcbiAgICAgIGlmIChjb2x1bW4ub3JkZXJhYmxlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChjb2x1bW4ub3JkZXIgPT09IERFU0MgfHwgY29sdW1uLm9yZGVyID09PSAnJykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbHVtbi5pZCkuaW5uZXJIVE1MID0gdGV4dGUgKyAnICcgKyBJQ09OX0RFU0NcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb2x1bW4uaWQpLmRhdGFzZXQub3JkZXIgPSBERVNDXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sdW1uLmlkKS5pbm5lckhUTUwgPSB0ZXh0ZSArICcgJyArIElDT05fQVNDXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sdW1uLmlkKS5kYXRhc2V0Lm9yZGVyID0gQVNDXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX3VwZGF0ZVBhZ2luYXRpb24gKHBhZ2luZykge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5wYWdpbmdfaWQgKyAnX25hdicpXG4gICAgY29uc3QgcHJldmlvdXNEaXNhYmxlZCA9IHBhZ2luZy5maXJzdFBhZ2UgPT09IHRydWUgPyAnZGlzYWJsZWQnIDogJydcbiAgICBjb25zdCBuZXh0RGlzYWJsZWQgPSBwYWdpbmcubGFzdFBhZ2UgPT09IHRydWUgPyAnZGlzYWJsZWQnIDogJydcbiAgICBsZXQgcGFnZUN1dExvdyA9IHBhZ2luZy5udW1BY3RpdmVQYWdlIC0gMVxuICAgIGxldCBwYWdlQ3V0SGlnaCA9IHBhZ2luZy5udW1BY3RpdmVQYWdlICsgMVxuXG4gICAgbGV0IGh0bWwgPSBgPHVsIGNsYXNzPVwicGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW0gJHtwcmV2aW91c0Rpc2FibGVkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtYXJyb3ctbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmBcbiAgICAvLyAxMCBwYWdlcywgb24gYWZmaWNoZSB0b3V0XG4gICAgaWYgKHBhZ2luZy5uYlBhZ2VzIDw9IDEwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwYWdpbmcubmJQYWdlczsgaSsrKSB7XG4gICAgICAgIGxldCBwYWdlQWN0aXZlID0gaSA9PT0gcGFnaW5nLm51bUFjdGl2ZVBhZ2UgPyAnYWN0aXZlJyA6ICcnXG4gICAgICAgIGh0bWwgKz0gYDxsaSBjbGFzcz1cInBhZ2UtaXRlbSAke3BhZ2VBY3RpdmV9XCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+JHtpfTwvYT5cbiAgICAgICAgICAgICAgIDwvbGk+YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaG93IHRoZSB2ZXJ5IGZpcnN0IHBhZ2UgZm9sbG93ZWQgYnkgYSBcIi4uLlwiIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlXG4gICAgICAvLyBwYWdpbmF0aW9uIHNlY3Rpb24gKGFmdGVyIHRoZSBQcmV2aW91cyBidXR0b24pXG4gICAgICBpZiAocGFnaW5nLm51bUFjdGl2ZVBhZ2UgPiAyKSB7XG4gICAgICAgIGh0bWwgKz0gJzxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj4xPC9hPjwvbGk+J1xuICAgICAgICBpZiAocGFnaW5nLm51bUFjdGl2ZVBhZ2UgPiAzKSB7XG4gICAgICAgICAgY29uc3QgcGFnID0gcGFnaW5nLm51bUFjdGl2ZVBhZ2UgLSAyXG4gICAgICAgICAgaHRtbCArPSAnPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiIGRhdGEtcGFnZT1cIicgKyBwYWcgKyAnXCI+Li4uPC9hPjwvbGk+J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgcGFnZXMgdG8gc2hvdyBhZnRlciB0aGUgY3VycmVudCBwYWdlIGluZGV4XG4gICAgICBpZiAocGFnaW5nLm51bUFjdGl2ZVBhZ2UgPT09IDEpIHtcbiAgICAgICAgcGFnZUN1dEhpZ2ggKz0gMlxuICAgICAgfSBlbHNlIGlmIChwYWdpbmcubnVtQWN0aXZlUGFnZSA9PT0gMikge1xuICAgICAgICBwYWdlQ3V0SGlnaCArPSAxXG4gICAgICB9XG4gICAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgcGFnZXMgdG8gc2hvdyBiZWZvcmUgdGhlIGN1cnJlbnQgcGFnZSBpbmRleFxuICAgICAgaWYgKHBhZ2luZy5udW1BY3RpdmVQYWdlID09PSBwYWdpbmcubmJQYWdlcykge1xuICAgICAgICBwYWdlQ3V0TG93IC09IDJcbiAgICAgIH0gZWxzZSBpZiAocGFnaW5nLm51bUFjdGl2ZVBhZ2UgPT09IHBhZ2luZy5uYlBhZ2VzIC0gMSkge1xuICAgICAgICBwYWdlQ3V0TG93IC09IDFcbiAgICAgIH1cbiAgICAgIC8vIE91dHB1dCB0aGUgaW5kZXhlcyBmb3IgcGFnZXMgdGhhdCBmYWxsIGluc2lkZSB0aGUgcmFuZ2Ugb2YgcGFnZUN1dExvd1xuICAgICAgLy8gYW5kIHBhZ2VDdXRIaWdoXG4gICAgICBmb3IgKGxldCBwID0gcGFnZUN1dExvdzsgcCA8PSBwYWdlQ3V0SGlnaDsgcCsrKSB7XG4gICAgICAgIGlmIChwID09PSAwKSB7XG4gICAgICAgICAgcCArPSAxXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAgPiBwYWdpbmcubmJQYWdlcykge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhZ2VBY3RpdmUgPSBwID09PSBwYWdpbmcubnVtQWN0aXZlUGFnZSA/ICdhY3RpdmUnIDogJydcbiAgICAgICAgaHRtbCArPSAnPGxpIGNsYXNzPVwicGFnZS1pdGVtICcgKyBwYWdlQWN0aXZlICsgJ1wiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj4nICsgcCArICc8L2E+PC9saT4nXG4gICAgICB9XG4gICAgICAvLyBTaG93IHRoZSB2ZXJ5IGxhc3QgcGFnZSBwcmVjZWRlZCBieSBhIFwiLi4uXCIgYXQgdGhlIGVuZCBvZiB0aGUgcGFnaW5hdGlvblxuICAgICAgLy8gc2VjdGlvbiAoYmVmb3JlIHRoZSBOZXh0IGJ1dHRvbilcbiAgICAgIGlmIChwYWdpbmcubnVtQWN0aXZlUGFnZSA8IHBhZ2luZy5uYlBhZ2VzIC0gMSkge1xuICAgICAgICBpZiAocGFnaW5nLm51bUFjdGl2ZVBhZ2UgPCBwYWdpbmcubmJQYWdlcyAtIDIpIHtcbiAgICAgICAgICBsZXQgcGFnID0gMFxuICAgICAgICAgIGlmIChwYWdpbmcubnVtQWN0aXZlUGFnZSA9PT0gMSkge1xuICAgICAgICAgICAgcGFnID0gcGFnaW5nLm51bUFjdGl2ZVBhZ2UgKyA0XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhZyA9IHBhZ2luZy5udW1BY3RpdmVQYWdlICsgMlxuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sICs9ICc8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCIgZGF0YS1wYWdlPVwiJyArIHBhZyArICdcIj4uLi48L2E+PC9saT4nXG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSAnPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPicgKyBwYWdpbmcubmJQYWdlcyArICc8L2E+PC9saT4nXG4gICAgICB9XG4gICAgfVxuICAgIGh0bWwgKz0gYDxsaSBjbGFzcz1cInBhZ2UtaXRlbSAke25leHREaXNhYmxlZH1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1hcnJvdy1yaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPmBcbiAgICBuYXYuaW5uZXJIVE1MID0gaHRtbFxuXG4gICAgdGhpcy5kaXYucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UtbGluaycpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgcGFnZSA9IGUudGFyZ2V0LmlubmVyVGV4dFxuICAgICAgICBpZiAocGFnZSA9PT0gJy4uLicpIHtcbiAgICAgICAgICBwYWdlID0gZS50YXJnZXQuZGF0YXNldC5wYWdlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhZ2VBY3RpdmUgPSBwYWdlXG4gICAgICAgIHRoaXMuX2J1aWxkQXJyYXkoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgX2V4dHJhY3ROYW1lRnJvbUZvcm0gKG5hbWUpIHtcbiAgICBsZXQgdCA9IG5hbWUuc3BsaXQoJ1snKVxuICAgIHJldHVybiB0WzFdLnN1YnN0cigwLCB0WzFdLmxlbmd0aCAtIDEpXG4gIH1cblxuICBfZ2V0RmlsdGVyRnJvbUZpZWxkIChpbnB1dCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLl9leHRyYWN0TmFtZUZyb21Gb3JtKGlucHV0Lm5hbWUpXG4gICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgIGNhc2UgJ3NlbGVjdC1vbmUnOlxuICAgICAgICB0aGlzLmZpbHRlcltuYW1lXSA9IGlucHV0LnZhbHVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIGlmIChpbnB1dC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKCEobmFtZSBpbiB0aGlzLmZpbHRlcikpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyW25hbWVdID0gW11cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5maWx0ZXJbbmFtZV0ucHVzaChcbiAgICAgICAgICAgIGlucHV0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvYXBwLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjMvMDkvMjAyMSAxMjo0MFxuXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3MvZm9udGF3ZXNvbWUuc2NzcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9zb2xpZC5zY3NzJ1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3BlcmZlY3Qtc2Nyb2xsYmFyJ1xuaW1wb3J0ICcuL3ZhbGlkYXRvci1iczQnXG5pbXBvcnQge2dldERhdGFPcHRpb25zLCBnZXRQYXJlbnRCeVRhZ05hbWV9IGZyb20gJy4vdXRpbCdcbmltcG9ydCAnLi9tYXRlcmlhbCdcbmltcG9ydCAnLi9zZWFyY2gnXG5pbXBvcnQgJy4vbW9kYWxlcidcblxucmVxdWlyZSgnYm9vdHN0cmFwJylcblxuXG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2NzcydcblxubGV0IGxvb2t1cCA9IHt9XG5cbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlJ1xuaW1wb3J0IFNlbGVjdENvbXBsZXRlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0Q29tcGxldGUnXG5pbXBvcnQgU2VsZWN0Q2hhbmdlV2lkZ2V0IGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0Q2hhbmdlV2lkZ2V0J1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRlUGlja2VyJ1xuaW1wb3J0IHtwb3N0fSBmcm9tICcuL2ZldGNoJ1xuXG5leHBvcnQgY29uc3QgTEFORyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5nZXRBdHRyaWJ1dGUoJ2xhbmcnKVxuXG53aW5kb3cuZGEgPSB7XG4gIExBTkc6IExBTkdcbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS10YWJsZScsIFRhYmxlKVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzZWxlY3QtY29tcGxldGUnLCBTZWxlY3RDb21wbGV0ZSwge2V4dGVuZHM6ICdzZWxlY3QnfSlcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2VsZWN0LWxpdmUtdXBkYXRlJywgU2VsZWN0Q2hhbmdlV2lkZ2V0LCB7ZXh0ZW5kczogJ3NlbGVjdCd9KVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1kYXRlcGlja2VyJywgRGF0ZVBpY2tlciwge2V4dGVuZHM6ICdpbnB1dCd9KVxuXG4kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICBsZXQgZmlsZW5hbWUgPSBlLnRhcmdldC5maWxlc1swXS5uYW1lXG4gICQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLmh0bWwoZmlsZW5hbWUpXG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHsgLy9sZSBkb20gZXN0IGNoYXJnw6lcbiAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcbiAgY29uc3QgbWVudURhcmtUaGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrTW9kZScpXG5cbiAgLy9SZWdhcmRlIHNpIGRlcyBib3V0b25zIG9udCB1biBkYXRhLWNvbmZpcm0gPSB0cnVlXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNvbmZpcm09J3RydWUnXVwiKTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGVsPT57XG4gICAgY29uc29sZS5sb2coZWwpO1xuICB9KVxuXG4gIG1lbnVEYXJrVGhlbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLXRoZW1lJylcbiAgICAvLyBMZXQncyBzYXkgdGhlIHRoZW1lIGlzIGVxdWFsIHRvIGxpZ2h0XG4gICAgbGV0IHRoZW1lID0gJ2xpZ2h0J1xuICAgIC8vIElmIHRoZSBib2R5IGNvbnRhaW5zIHRoZSAuZGFyay10aGVtZSBjbGFzcy4uLlxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay10aGVtZScpKSB7XG4gICAgICAvLyAuLi50aGVuIGxldCdzIG1ha2UgdGhlIHRoZW1lIGRhcmtcbiAgICAgIHRoZW1lID0gJ2RhcmsnXG4gICAgICBtZW51RGFya1RoZW1lLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1hZGp1c3RcIj48L2k+IERhcmsgTW9kZSBPZmYnXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVEYXJrVGhlbWUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWFkanVzdFwiPjwvaT4gRGFyayBNb2RlIE9uJ1xuICAgIH1cbiAgICAvLyBUaGVuIHNhdmUgdGhlIGNob2ljZSBpbiBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZSlcbiAgfSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdlQW5uZWVVbml2ZXJzaXRhaXJlJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zb2xlLmxvZyhcImNvdWNvdVwiKVxuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC5hbm5lZSlcbiAgICAgIGNvbnN0IGVsID0gZ2V0UGFyZW50QnlUYWdOYW1lKGUudGFyZ2V0LCAnYScpXG4gICAgICBwb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ3NldHRpbmdzX2NoYW5nZV9hbm5lZV91bml2ZXJzaXRhaXJlJyksIHsnYW5uZWVfdW5pdmVyc2l0YWlyZScgOiBlbC5kYXRhc2V0LmFubmVlfSlcbiAgICB9KVxuICB9KVxuXG4gIC8vIElmIHRoZSBjdXJyZW50IHRoZW1lIGluIGxvY2FsU3RvcmFnZSBpcyBcImRhcmtcIi4uLlxuICBpZiAoY3VycmVudFRoZW1lID09PSAnZGFyaycpIHtcbiAgICAvLyAuLi50aGVuIHVzZSB0aGUgLmRhcmstdGhlbWUgY2xhc3NcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstdGhlbWUnKVxuICAgIG1lbnVEYXJrVGhlbWUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWFkanVzdFwiPjwvaT4gRGFyayBNb2RlIE9mZidcbiAgfSBlbHNlIHtcbiAgICBtZW51RGFya1RoZW1lLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1hZGp1c3RcIj48L2k+IERhcmsgTW9kZSBPbidcbiAgfVxuXG5cbn0sIGZhbHNlKVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIHNjcmlwdCBwb3VyIGFmZmljaGVyIGxlIGZpY2hpZXIgc2VsZWN0aW9ubsOpIGF2ZWMgYm9vdHN0cmFwNFxuICAkKCcuY3VzdG9tLWZpbGUgaW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZpbGVzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICQodGhpcylbMF0uZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZpbGVzLnB1c2goJCh0aGlzKVswXS5maWxlc1tpXS5uYW1lKVxuICAgIH1cbiAgICAkKHRoaXMpLm5leHQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLmh0bWwoZmlsZXMuam9pbignLCAnKSlcbiAgfSlcblxuICB2YXIgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpXG4gIGlmIChwcmVsb2FkZXIubGVuZ3RoKSB7XG4gICAgdmFyIHNwZWVkID0gcHJlbG9hZGVyLmRhdGFBdHRyKCdoaWRlLXNwcGVkJywgNjAwKVxuICAgIHByZWxvYWRlci5mYWRlT3V0KHNwZWVkKVxuICB9XG5cbiAgJChkb2N1bWVudCkub24oJ2ZvY3VzJywgJy50b3BiYXItc2VhcmNoIGlucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnLnRvcGJhci1zZWFyY2gnKS5maW5kKCcubG9va3VwLXBsYWNlaG9sZGVyIHNwYW4nKS5jc3MoJ29wYWNpdHknLCAnMCcpXG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2JsdXInLCAnLnRvcGJhci1zZWFyY2ggaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcudG9wYmFyLXNlYXJjaCcpLmZpbmQoJy5sb29rdXAtcGxhY2Vob2xkZXIgc3BhbicpLmNzcygnb3BhY2l0eScsICcxJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2xvb2t1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHRhcmdldCA9ICQoJyNsb29rdXAtZnVsbCcpXG5cbiAgICBpZiAodGFyZ2V0ICE9PSBmYWxzZSkge1xuICAgICAgbG9va3VwLnRvZ2dsZSh0YXJnZXQpXG4gICAgfVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbG9va3VwLWNsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGxvb2t1cC50b2dnbGUoJCgnI2xvb2t1cC1mdWxsJykpXG4gIH0pXG5cbiAgLy90b29sdGlwXG4gIHVwZGF0ZUludGVyZmFjZSgpXG5cbiAgJCgnW2RhdGEtcHJvdmlkZT1cInZhbGlkYXRpb25cIl0nKS52YWxpZGF0b3IoKVxufSlcblxuJChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlSW50ZXJmYWNlKClcbn0pXG5cbi8vIEZ1bGxzY3JlZW5cbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhcmQtYnRuLWZ1bGxzY3JlZW4nLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS50b2dnbGVDbGFzcygnY2FyZC1mdWxsc2NyZWVuJykucmVtb3ZlQ2xhc3MoJ2NhcmQtbWF4aW1pemUnKVxufSlcblxuLy8gU2xpZGUgdXAvZG93blxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jYXJkLWJ0bi1zbGlkZScsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygncm90YXRlLTE4MCcpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnLmNhcmQtY29udGVudCcpLnNsaWRlVG9nZ2xlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2FyZC1idG4tc2xpZGUtdGV4dCcsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJy5jYXJkLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpXG59KVxuXG4vL21vZGFsZXJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1wcm92aWRlfj1cIm1vZGFsZXJcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsZXIoZ2V0RGF0YU9wdGlvbnMoJCh0aGlzKSkpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVJbnRlcmZhY2UgKCkge1xuICAvLyAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxuXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlcGlja2VyLXJhbmdlJykubGVuZ3RoID4gMCkge1xuICAgICQoJy5kYXRlcGlja2VyLXJhbmdlJykuZmxhdHBpY2tyKHtcbiAgICAgIG1vZGU6ICdyYW5nZScsXG4gICAgICAnbG9jYWxlJzogJ2ZyJyxcbiAgICAgIGZvcm1hdDogJ2QvTS9ZJ1xuICAgIH0pXG4gIH1cblxuXG4gIC8vbm90aWZpY2F0aW9uc1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21hcnF1ZXJOb3RpZmljYXRpb25zUmVhZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ25vdGlmaWNhdGlvbl9tYXJxdWVyX2x1JyksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5ub3RpZmljYXRpb24nKS5yZW1vdmVDbGFzcygnbWVkaWEtbmV3JylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIC8vdG9vbHRpcFxuICAkKCdbZGF0YS1wcm92aWRlfj1cInRvb2x0aXBcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAnJ1xuXG4gICAgaWYgKCQodGhpcykuaGFzRGF0YUF0dHIoJ3Rvb2x0aXAtY29sb3InKSkge1xuICAgICAgY29sb3IgPSAnIHRvb2x0aXAtJyArICQodGhpcykuZGF0YSgndG9vbHRpcC1jb2xvcicpXG4gICAgfVxuXG4gICAgJCh0aGlzKS50b29sdGlwKHtcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXAnICsgY29sb3IgKyAnXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PidcbiAgICB9KVxuICB9KVxufVxuXG4vLyBPcGVuIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLnRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICgkKGUpLmhhc0NsYXNzKCdyZXZlYWwnKSkge1xuICAgIGxvb2t1cC5jbG9zZShlKVxuICB9IGVsc2Uge1xuICAgIGxvb2t1cC5vcGVuKGUpXG4gIH1cbn1cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLnJlbW92ZUNsYXNzKCdyZXZlYWwnKVxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICQoZSkuYWRkQ2xhc3MoJ3JldmVhbCcpXG4gICQoZSkuZmluZCgnLmxvb2t1cC1mb3JtIGlucHV0JykuZm9jdXMoKVxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gU2lkZWJhclxuLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBzaWRlYmFyID0ge31cblxuLy8gU2Nyb2xsYWJsZVxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXItbmF2aWdhdGlvbicpLmxlbmd0aCA+IDApIHtcbiAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnNpZGViYXItbmF2aWdhdGlvbicpXG59XG5cbi8vIEhhbmRsZSBzaWRlYmFyIG9wZW5uZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNpZGViYXItdG9nZ2xlcicsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci5vcGVuKClcbn0pXG5cblxuLy8gQ2xvc2Ugc2lkZWJhciB3aGVuIGJhY2tkcm9wIHRvdWNoZXNcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJhY2tkcm9wLXNpZGViYXInLCBmdW5jdGlvbiAoKSB7XG4gIHNpZGViYXIuY2xvc2UoKVxufSlcblxuXG4vLyBTbGlkZSB1cC9kb3duIG1lbnUgaXRlbSBvbiBjbGlja1xuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhciAubWVudS1saW5rJywgZnVuY3Rpb24gKCkge1xuICB2YXIgJHN1Ym1lbnUgPSAkKHRoaXMpLm5leHQoJy5tZW51LXN1Ym1lbnUnKVxuICBpZiAoJHN1Ym1lbnUubGVuZ3RoIDwgMSlcbiAgICByZXR1cm5cblxuICBpZiAoJHN1Ym1lbnUuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAkc3VibWVudS5zbGlkZVVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5zaWRlYmFyIC5tZW51LWl0ZW0ub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICB9KVxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIHJldHVyblxuICB9XG5cbiAgJCgnLnNpZGViYXIgLm1lbnUtc3VibWVudTp2aXNpYmxlJykuc2xpZGVVcCgpXG4gICQoJy5zaWRlYmFyIC5tZW51LWxpbmsnKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICRzdWJtZW51LnNsaWRlVG9nZ2xlKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2lkZWJhciAubWVudS1pdGVtLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gIH0pXG4gICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKVxufSlcblxuLy8gSGFuZGxlIGZvbGQgdG9nZ2xlclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhci10b2dnbGUtZm9sZCcsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci50b2dnbGVGb2xkKClcbn0pXG5cbi8vfVxuXG5cbnNpZGViYXIudG9nZ2xlRm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC50b2dnbGVTdGF0ZSgnc2lkZWJhci5mb2xkZWQnKVxufVxuXG5zaWRlYmFyLmZvbGQgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1mb2xkZWQnKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuZm9sZGVkJywgdHJ1ZSlcbn1cblxuXG5zaWRlYmFyLnVuZm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5mb2xkZWQnLCBmYWxzZSlcbn1cblxuXG5zaWRlYmFyLnRvZ2dsZUhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2lkZWJhci1oaWRkZW4nKVxuICBhcHAudG9nZ2xlU3RhdGUoJ3NpZGViYXIuaGlkZGVuJylcbn1cblxuc2lkZWJhci5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItaGlkZGVuJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmhpZGRlbicsIHRydWUpXG59XG5cbnNpZGViYXIuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWhpZGRlbicpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5oaWRkZW4nLCBmYWxzZSlcbn1cblxuXG5zaWRlYmFyLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1vcGVuJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cImFwcC1iYWNrZHJvcCBiYWNrZHJvcC1zaWRlYmFyXCI+PC9kaXY+Jylcbn1cblxuc2lkZWJhci5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW9wZW4nKVxuICAkKCcuYmFja2Ryb3Atc2lkZWJhcicpLnJlbW92ZSgpXG59XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBRdWlja3ZpZXdcbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gdG9kbzogZMOpcGxhY2VyIGRhbnMgdW5lIGNsYXNzZSBzZXVsZS4uLiBwb3VyIGwnaW1wb3J0LlxuXG5sZXQgcXVpY2t2aWV3ID0ge31cbmxldCBxcHMgPSBudWxsXG5cbi8vIFVwZGF0ZSBzY3JvbGxiYXIgb24gdGFiIGNoYW5nZVxuLy9cbiQoZG9jdW1lbnQpLm9uKCdzaG93bi5icy50YWInLCAnLnF1aWNrdmlldy1oZWFkZXIgYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScsIGZ1bmN0aW9uICgpIHtcbiAgcXBzLnVwZGF0ZSgpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxvYWRRdiAoKSB7XG4gIHFwcy5kZXN0cm95KClcbiAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxufVxuXG4vLyBRdWlja3ZpZXcgY2xvc2VyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWRpc21pc3M9XCJxdWlja3ZpZXdcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIHF1aWNrdmlldy5jbG9zZSgkKHRoaXMpLmNsb3Nlc3QoJy5xdWlja3ZpZXcnKSlcbn0pXG5cblxuLy8gSGFuZGxlIHF1aWNrdmlldyBvcGVubmVyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBsZXQgdGFyZ2V0ID0gYXBwLmdldFRhcmdldCgkKHRoaXMpKVxuXG4gIGlmICh0YXJnZXQgPT09IGZhbHNlKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKCQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpKVxuICB9IGVsc2Uge1xuICAgIGxldCB1cmwgPSAnJ1xuICAgIGlmICgkKHRoaXMpLmhhc0RhdGFBdHRyKCd1cmwnKSkge1xuICAgICAgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKVxuICAgIH1cblxuICAgIGlmICh1cmwgIT09ICduby11cmwnICYmIHVybCAhPT0gJycpIHtcbiAgICAgIHF1aWNrdmlldy50b2dnbGUodGFyZ2V0LCB1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1aWNrdmlldy50b2dnbGUodGFyZ2V0LCBSb3V0aW5nLmdlbmVyYXRlKCdxdWlja192aWV3JykpXG4gICAgfVxuICB9XG59KVxuXG5cbi8vIENsb3NlIHF1aWNrdmlldyB3aGVuIGJhY2tkcm9wIHRvdWNoZXNcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJhY2tkcm9wLXF1aWNrdmlldycsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHF2ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhcmdldCcpXG4gIGlmICghJChxdikuaXMoJ1tkYXRhLWRpc2FibGUtYmFja2Ryb3AtY2xpY2tdJykpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UocXYpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucXVpY2t2aWV3IC5jbG9zZSwgW2RhdGEtZGlzbWlzcz1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHF2ID0gJCh0aGlzKS5jbG9zZXN0KCcucXVpY2t2aWV3JylcbiAgcXVpY2t2aWV3LmNsb3NlKHF2KVxufSlcblxuLy8gVG9nZ2xlIG9wZW4vY2xvc2Ugc3RhdGVcbi8vXG5xdWlja3ZpZXcudG9nZ2xlID0gZnVuY3Rpb24gKGUsIHVybCkge1xuICBpZiAoJChlKS5oYXNDbGFzcygncmV2ZWFsJykpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UoZSlcbiAgfSBlbHNlIHtcblxuICAgIGlmICh1cmwgIT09ICcnKSB7XG4gICAgICAkKGUpLmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyLWxpbmVhclwiPjxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+PC9kaXY+JylcbiAgICAgICQoZSkubG9hZCh1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxuICAgICAgfSlcbiAgICB9XG4gICAgJChlKS5hZGRDbGFzcygncmV2ZWFsJykubm90KCcuYmFja2Ryb3AtcmVtb3ZlJykuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJhcHAtYmFja2Ryb3AgYmFja2Ryb3AtcXVpY2t2aWV3XCIgZGF0YS10YXJnZXQ9XCInICsgZSArICdcIj48L2Rpdj4nKVxuICB9XG59XG5cblxuLy8gT3BlbiBxdWlja3ZpZXdcbi8vXG5xdWlja3ZpZXcub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gIGxldCBxdWlja3ZpZXcgPSAkKGUpXG4gIGxldCB1cmwgPSAnJ1xuICAvLyBMb2FkIGNvbnRlbnQgZnJvbSBVUkwgaWYgcmVxdWlyZWRcbiAgaWYgKHF1aWNrdmlldy5oYXNEYXRhQXR0cigndXJsJykgJiYgJ3RydWUnICE9PSBxdWlja3ZpZXcuZGF0YSgndXJsLWhhcy1sb2FkZWQnKSkge1xuICAgIGlmIChxdWlja3ZpZXcuZGF0YSgndXJsJykgPT09ICduby11cmwnKSB7XG4gICAgICB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdxdWlja192aWV3JylcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gcXVpY2t2aWV3LmRhdGEoJ3VybCcpXG4gICAgfVxuICAgIHF1aWNrdmlldy5sb2FkKHVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxuXG4gICAgICAvLyBEb24ndCBsb2FkIGl0IG5leHQgdGltZSwgaWYgZG9uJ3QgbmVlZCB0b1xuICAgICAgaWYgKHF1aWNrdmlldy5oYXNEYXRhQXR0cignYWx3YXlzLXJlbG9hZCcpICYmICd0cnVlJyA9PT0gcXVpY2t2aWV3LmRhdGEoJ2Fsd2F5cy1yZWxvYWQnKSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWlja3ZpZXcuZGF0YSgndXJsLWhhcy1sb2FkZWQnLCAndHJ1ZScpXG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbi8vIE9wZW4gaXRcbiAgcXVpY2t2aWV3LmFkZENsYXNzKCdyZXZlYWwnKS5ub3QoJy5iYWNrZHJvcC1yZW1vdmUnKS5hZnRlcignPGRpdiBjbGFzcz1cImFwcC1iYWNrZHJvcCBiYWNrZHJvcC1xdWlja3ZpZXdcIiBkYXRhLXRhcmdldD1cIicgKyBlICsgJ1wiPjwvZGl2PicpXG59XG5cblxuLy8gQ2xvc2UgcXVpY2t2aWV3XG4vL1xucXVpY2t2aWV3LmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgJChlKS5yZW1vdmVDbGFzcygncmV2ZWFsJylcbiAgJCgnLmJhY2tkcm9wLXF1aWNrdmlldycpLnJlbW92ZSgpXG59XG5cblxubGV0IGFwcCA9IHt9XG5cbmFwcC5nZXRUYXJnZXQgPSBmdW5jdGlvbiAoZSkge1xuICBsZXQgdGFyZ2V0XG4gIGlmIChlLmhhc0RhdGFBdHRyKCd0YXJnZXQnKSkge1xuICAgIHRhcmdldCA9IGUuZGF0YSgndGFyZ2V0JylcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBlLmF0dHIoJ2hyZWYnKVxuICB9XG5cbiAgaWYgKHRhcmdldCA9PT0gJ25leHQnKSB7XG4gICAgdGFyZ2V0ID0gJChlKS5uZXh0KClcbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdwcmV2Jykge1xuICAgIHRhcmdldCA9ICQoZSkucHJldigpXG4gIH1cblxuICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb25uZUFjdGl2ZSAoY29sb25uZXMpIHtcbiAgbGV0IGluZGV4ID0gLTFcblxuICAkLmVhY2goY29sb25uZXMsIGZ1bmN0aW9uIChrZXksIGNvbG9ubmUpIHtcbiAgICBpZiAoISQoY29sb25uZSkuaGFzQ2xhc3MoJ2NvbC1lZHQtaGlkZScpKSB7XG4gICAgICBpbmRleCA9IGtleVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5kZXhcbn1cblxuLy9uYXZpZ2F0aW9uIEVEVFxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNqb3VyUHJlY2VkZW50JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IGNvbG9ubmVzID0gJCgnLmpvdXInKVxuICBsZXQgaW5kZXggPSBnZXRDb2xvbm5lQWN0aXZlKGNvbG9ubmVzKVxuICBpZiAoaW5kZXggPiAwKSB7XG4gICAgJChjb2xvbm5lc1tpbmRleF0pLmFkZENsYXNzKCdjb2wtZWR0LWhpZGUnKVxuICAgICQoY29sb25uZXNbaW5kZXggLSAxXSkucmVtb3ZlQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICAgJCgnLmVkdC1qb3VyLScgKyBpbmRleCkuYWRkQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICAgJCgnLmVkdC1qb3VyLScgKyAoaW5kZXggLSAxKSkucmVtb3ZlQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG5cbiAgfSBlbHNlIHtcbiAgICAkKGNvbG9ubmVzW2luZGV4XSkuYWRkQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICAgJChjb2xvbm5lc1s0XSkucmVtb3ZlQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICAgJCgnLmVkdC1qb3VyLScgKyBpbmRleCkuYWRkQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICAgJCgnLmVkdC1qb3VyLTQnKS5yZW1vdmVDbGFzcygnY29sLWVkdC1oaWRlJylcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNqb3VyU3VpdmFudCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGxldCBjb2xvbm5lcyA9ICQoJy5qb3VyJylcbiAgbGV0IGluZGV4ID0gZ2V0Q29sb25uZUFjdGl2ZShjb2xvbm5lcylcbiAgaWYgKGluZGV4IDwgNCkge1xuICAgICQoY29sb25uZXNbaW5kZXhdKS5hZGRDbGFzcygnY29sLWVkdC1oaWRlJylcbiAgICAkKGNvbG9ubmVzW2luZGV4ICsgMV0pLnJlbW92ZUNsYXNzKCdjb2wtZWR0LWhpZGUnKVxuICAgICQoJy5lZHQtam91ci0nICsgaW5kZXgpLmFkZENsYXNzKCdjb2wtZWR0LWhpZGUnKVxuICAgICQoJy5lZHQtam91ci0nICsgKGluZGV4ICsgMSkpLnJlbW92ZUNsYXNzKCdjb2wtZWR0LWhpZGUnKVxuICB9IGVsc2Uge1xuICAgICQoY29sb25uZXNbaW5kZXhdKS5hZGRDbGFzcygnY29sLWVkdC1oaWRlJylcbiAgICAkKGNvbG9ubmVzWzBdKS5yZW1vdmVDbGFzcygnY29sLWVkdC1oaWRlJylcbiAgICAkKCcuZWR0LWpvdXItJyArIGluZGV4KS5hZGRDbGFzcygnY29sLWVkdC1oaWRlJylcbiAgICAkKCcuZWR0LWpvdXItMCcpLnJlbW92ZUNsYXNzKCdjb2wtZWR0LWhpZGUnKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2pvdXJDb3VyYW50JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IG5vdyA9IG5ldyBEYXRlKClcbiAgbGV0IGNvbG9ubmVzID0gJCgnLmpvdXInKVxuICBsZXQgaW5kZXggPSBnZXRDb2xvbm5lQWN0aXZlKGNvbG9ubmVzKVxuICAkKGNvbG9ubmVzW2luZGV4XSkuYWRkQ2xhc3MoJ2NvbC1lZHQtaGlkZScpXG4gICQoY29sb25uZXNbbm93LmdldERheSgpIC0gMV0pLnJlbW92ZUNsYXNzKCdjb2wtZWR0LWhpZGUnKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9mZXRjaC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDEyLzA5LzIwMjEgMDk6MDFcblxuY29uc3QgcmVxdWVzdCA9ICh1cmwsIHBhcmFtcyA9IHt9LCBtZXRob2QgPSAnR0VUJykgPT4ge1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICBtZXRob2RcbiAgfVxuICBpZiAoJ0dFVCcgPT09IG1ldGhvZCkge1xuICAgIHVybCArPSAnPycgKyAobmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKS50b1N0cmluZygpXG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0ID0gKHVybCwgcGFyYW1zKSA9PiByZXF1ZXN0KHVybCwgcGFyYW1zLCAnR0VUJylcbmV4cG9ydCBjb25zdCBwb3N0ID0gKHVybCwgcGFyYW1zKSA9PiByZXF1ZXN0KHVybCwgcGFyYW1zLCAnUE9TVCcpXG5cbmV4cG9ydCBjb25zdCBsb2FkID0gKHVybCwgcGFyYW1zLCBvYmpldCkgPT4ge1xuICAvL2xvYWRlcj93aW5kb3cudW1icmVsbGEuU3Bpbm5lci5zaG93KClcbiAgb2JqZXQuaW5uZXJIVE1MID0gJydcbiAgZmV0Y2goUm91dGluZy5nZW5lcmF0ZSh1cmwsIHBhcmFtcykpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoYm9keSkge1xuICAgICAgb2JqZXQuaW5uZXJIVE1MID0gYm9keVxuICAgICAgLy9sb2FkZXI/d2luZG93LnVtYnJlbGxhLlNwaW5uZXIuaGlkZSgpXG4gICAgfSlcbn1cblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL21hdGVyaWFsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjgvMTEvMjAxOSAxOTo0MFxuXG4vLyBNYXRlcmlhbCBpbnB1dFxuLy9cbiQoZG9jdW1lbnQpLm9uKCdmb2N1cycsICcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2w6bm90KC5ib290c3RyYXAtc2VsZWN0KScsIGZ1bmN0aW9uICgpIHtcbiAgbWF0ZXJpYWxEb0Zsb2F0KCQodGhpcykpXG59KVxuXG4kKGRvY3VtZW50KS5vbignZm9jdXNvdXQnLCAnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sOm5vdCguYm9vdHN0cmFwLXNlbGVjdCknLCBmdW5jdGlvbiAoKSB7XG4gIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xuICAgIG1hdGVyaWFsTm9GbG9hdCgkKHRoaXMpKVxuICB9XG59KVxuXG4vLyBBdXRvIGZvY3VzIGlucHV0c1xubWF0ZXJpYWxEb0Zsb2F0KCQoJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbFthdXRvZm9jdXM9XCJ0cnVlXCJdJykpXG5cblxuZnVuY3Rpb24gbWF0ZXJpYWxEb0Zsb2F0IChlKSB7XG4gIGlmIChlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykubGVuZ3RoKSB7XG4gICAgZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLmFkZENsYXNzKCdkby1mbG9hdCcpXG4gIH0gZWxzZSB7XG4gICAgZS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmFkZENsYXNzKCdkby1mbG9hdCcpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBtYXRlcmlhbE5vRmxvYXQgKGUpIHtcbiAgaWYgKGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5sZW5ndGgpIHtcbiAgICBlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykucmVtb3ZlQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfSBlbHNlIHtcbiAgICBlLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfVxufVxuXG4kKCcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2wnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoID4gMCkge1xuICAgIC8vaWYgKCQodGhpcykuaXMoJ1tkYXRhLXByb3ZpZGV+PVwic2VsZWN0cGlja2VyXCJdJykpIHtcbiAgICAvLyAgcmV0dXJuXG4gICAgLy99XG4gICAgbWF0ZXJpYWxEb0Zsb2F0KCQodGhpcykpXG4gIH1cbn0pXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9tb2RhbGVyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTEvMDMvMjAyMSAxNDoyOVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vZGFsZXJcbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy9cbitmdW5jdGlvbiAoJCkge1xuXG4gIGxldCBjb25maWdNb2RhbGVyID0ge1xuICAgIHVybDogJycsXG4gICAgaXNNb2RhbDogZmFsc2UsXG4gICAgaHRtbDogJycsXG4gICAgdGFyZ2V0OiAnJyxcbiAgICB0eXBlOiAnJyxcbiAgICBzaXplOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAgaGVhZGVyVmlzaWJsZTogdHJ1ZSxcbiAgICBmb290ZXJWaXNpYmxlOiB0cnVlLFxuICAgIGNvbmZpcm1WaXNpYmxlOiB0cnVlLFxuICAgIGNvbmZpcm1UZXh0OiAnT2snLFxuICAgIGNvbmZpcm1DbGFzczogJ2J0biBidG4tdy1zbSBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsVmlzaWJsZTogZmFsc2UsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAgY2FuY2VsQ2xhc3M6ICdidG4gYnRuLXctc20gYnRuLXNlY29uZGFyeScsXG4gICAgYm9keUV4dHJhQ2xhc3M6ICcnLFxuICAgIHNwaW5uZXI6ICc8ZGl2IGNsYXNzPVwiaC0yMDAgY2VudGVyLXZoXCI+PHN2ZyBjbGFzcz1cInNwaW5uZXItY2lyY2xlLW1hdGVyaWFsLXN2Z1wiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIj48Y2lyY2xlIGNsYXNzPVwiY2lyY2xlXCIgY3g9XCIyNVwiIGN5PVwiMjVcIiByPVwiMjBcIj48L3N2Zz48L2Rpdj4nLFxuXG4gICAgYXV0b0Rlc3Ryb3k6IHRydWUsXG5cbiAgICAvLyBFdmVudHNcbiAgICBvblNob3c6IG51bGwsXG4gICAgb25TaG93bjogbnVsbCxcbiAgICBvbkhpZGU6IG51bGwsXG4gICAgb25IaWRkZW46IG51bGwsXG4gICAgb25Db25maXJtOiBudWxsLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuXG4gICAgLy8gUHJpdmF0ZSBvcHRpb25zXG4gICAgbW9kYWxJZDogbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gZ3VpZCAobGVuKSB7XG4gICAgaWYgKGxlbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxlbiA9IDVcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpLnN1YnN0cigwLCBsZW4pXG4gIH1cblxuXG4gIG1vZGFsZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBzZXR0aW5nID0gJC5leHRlbmQoe30sIGNvbmZpZ01vZGFsZXIsIG9wdGlvbnMpXG5cbiAgICBpZiAoc2V0dGluZy5tb2RhbElkKSB7XG4gICAgICAkKCcjJyArIHNldHRpbmcubW9kYWxJZCkubW9kYWwoJ3Nob3cnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG5cbiAgICB2YXIgaWQgPSAnbW9kYWwtJyArIGd1aWQoKVxuXG5cbiAgICB2YXIgaGFuZGxlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaWQpIHtcblxuICAgICAgLy8gQm9vdHN0cmFwIG1vZGFsIGV2ZW50c1xuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLm9uU2hvdykge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9zZXR0aW5nLm9uU2hvdygpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZy5vblNob3duKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9zZXR0aW5nLm9uU2hvd24oKTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmcub25IaWRlKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uSGlkZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5nLm9uSGlkZGVuKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHNldHRpbmcub25IaWRkZW4oKVxuICAgICAgICB9KVxuICAgICAgfVxuXG5cbiAgICAgIC8vIEhhbmRsZSBjb25maXJtIGNhbGxiYWNrXG4gICAgICAvL1xuICAgICAgJCgnIycgKyBpZCkuZmluZCgnW2RhdGEtcGVyZm9ybT1cImNvbmZpcm1cIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gSGFzbid0IHNldFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNvbmZpcm0gPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmcub25Db25maXJtKSkge1xuICAgICAgICAgIHNldHRpbmcub25Db25maXJtKCQoJyMnICsgaWQpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgc3RyaW5nIHZhbHVlLCBzbyBjYWxsIGl0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ29uZmlybS5zdWJzdHJpbmcpIHtcbiAgICAgICAgICBhcHAuY2FsbChzZXR0aW5nLm9uQ29uZmlybSwgJCgnIycgKyBpZCkpXG4gICAgICAgIH1cblxuICAgICAgfSlcblxuXG4gICAgICAvLyBIYW5kbGUgY2FuY2VsIGNhbGxiYWNrXG4gICAgICAvL1xuICAgICAgJCgnIycgKyBpZCkuZmluZCgnW2RhdGEtcGVyZm9ybT1cImNhbmNlbFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBIYXNuJ3Qgc2V0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ2FuY2VsID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5nLm9uQ2FuY2VsKSkge1xuICAgICAgICAgIHNldHRpbmcub25DYW5jZWwoJCgnIycgKyBpZCkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBzdHJpbmcgdmFsdWUsIHNvIGNhbGwgaXRcbiAgICAgICAgaWYgKHNldHRpbmcub25DYW5jZWwuc3Vic3RyaW5nKSB7XG4gICAgICAgICAgYXBwLmNhbGwoc2V0dGluZy5vbkNhbmNlbCwgJCgnIycgKyBpZCkpXG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFdlIHJlY2lldmUgbW9kYWwgbWFya3VwIGZyb20gdXJsXG4gICAgLy9cbiAgICBpZiAoc2V0dGluZy5pc01vZGFsKSB7XG5cbiAgICAgICQoJzxkaXY+JykubG9hZChzZXR0aW5nLnVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCQodGhpcykuZmluZCgnLm1vZGFsJykuYXR0cignaWQnLCBpZCkub3V0ZXJIVE1MKCkpXG5cbiAgICAgICAgJCgnIycgKyBpZCkubW9kYWwoJ3Nob3cnKVxuICAgICAgICAkKCcjJyArIGlkKS5vbmUoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL3RvZG86IGEgY29uZmlybWVyICQoJyMnKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5wZXJmZWN0U2Nyb2xsYmFyKCd1cGRhdGUnKTtcbiAgICAgICAgfSlcblxuXG4gICAgICAgIC8vIERlc3Ryb3kgYWZ0ZXIgY2xvc2VcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHNldHRpbmcuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnIycgKyBpZCkucmVtb3ZlKClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoc2V0dGluZy50aGlzKS5hdHRyKCdkYXRhLW1vZGFsLWlkJywgaWQpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfSlcbiAgICB9XG5cblxuXG5cblxuICAgICAgLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIFdlIHNob3VsZCBkZXNpZ24gdGhlIG1vZGFsXG4gICAgLy9cbiAgICBlbHNlIHtcblxuICAgICAgc3dpdGNoIChzZXR0aW5nLnNpemUpIHtcbiAgICAgICAgY2FzZSAnc20nOlxuICAgICAgICAgIHNldHRpbmcuc2l6ZSA9ICdtb2RhbC1zbSdcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2xnJzpcbiAgICAgICAgICBzZXR0aW5nLnNpemUgPSAnbW9kYWwtbGcnXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAvL3NldHRpbmcuc2l6ZSA9ICcnO1xuICAgICAgfVxuXG5cbiAgICAgIGlmIChzZXR0aW5nLnR5cGUpIHtcbiAgICAgICAgc2V0dGluZy50eXBlID0gJ21vZGFsLScgKyBzZXR0aW5nLnR5cGVcbiAgICAgIH1cblxuXG4gICAgICAvLyBIZWFkZXIgY29kZVxuICAgICAgLy9cbiAgICAgIHZhciBodG1sX2hlYWRlciA9ICcnXG4gICAgICBpZiAoc2V0dGluZy5oZWFkZXJWaXNpYmxlKSB7XG4gICAgICAgIGh0bWxfaGVhZGVyICs9XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4gXFxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JyArIHNldHRpbmcudGl0bGUgKyAnPC9oNT4gXFxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgbXlDbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj4gXFxcbiAgICAgICAgICA8L2Rpdj4nXG4gICAgICB9XG5cblxuICAgICAgLy8gRm9vdGVyIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgaHRtbF9mb290ZXIgPSAnJ1xuICAgICAgaWYgKHNldHRpbmcuZm9vdGVyVmlzaWJsZSkge1xuICAgICAgICBodG1sX2Zvb3RlciArPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPidcblxuICAgICAgICBpZiAoc2V0dGluZy5jYW5jZWxWaXNpYmxlKSB7XG4gICAgICAgICAgaHRtbF9mb290ZXIgKz0gJzxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZy5jYW5jZWxDbGFzcyArICdcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtcGVyZm9ybT1cImNhbmNlbFwiPicgKyBzZXR0aW5nLmNhbmNlbFRleHQgKyAnPC9idXR0b24+J1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmcuY29uZmlybVZpc2libGUpIHtcbiAgICAgICAgICBodG1sX2Zvb3RlciArPSAnPGJ1dHRvbiBjbGFzcz1cIicgKyBzZXR0aW5nLmNvbmZpcm1DbGFzcyArICdcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtcGVyZm9ybT1cImNvbmZpcm1cIj4nICsgc2V0dGluZy5jb25maXJtVGV4dCArICc8L2J1dHRvbj4nXG4gICAgICAgIH1cblxuICAgICAgICBodG1sX2Zvb3RlciArPSAnPC9kaXY+J1xuICAgICAgfVxuXG4gICAgICAvLyBNb2RhbCBjb2RlXG4gICAgICAvL1xuICAgICAgdmFyIG1vZGFsX2h0bWwgPVxuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgJyArIHNldHRpbmcudHlwZSArICdcIiBpZD1cIicgKyBpZCArICdcIiB0YWJpbmRleD1cIi0xXCInICsgKCFzZXR0aW5nLmJhY2tkcm9wID8gJyBkYXRhLWJhY2tkcm9wPVwiZmFsc2VcIicgOiAnJykgKyAnPiBcXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyAnICsgc2V0dGluZy5zaXplICsgJ1wiPiBcXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPiBcXFxuICAgICAgICAgICAgICAgICcgKyBodG1sX2hlYWRlciArICcgXFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSAnICsgc2V0dGluZy5ib2R5RXh0cmFDbGFzcyArICdcIj4gXFxcbiAgICAgICAgICAgICAgICAgICcgKyBzZXR0aW5nLnNwaW5uZXIgKyAnIFxcXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgICAgICAgJyArIGh0bWxfZm9vdGVyICsgJyBcXFxuICAgICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICAgIDwvZGl2PiBcXFxuICAgICAgICAgIDwvZGl2PidcblxuXG4gICAgICAvLyBTaG93IG1vZGFsXG4gICAgICAkKCdib2R5JykuYXBwZW5kKG1vZGFsX2h0bWwpXG4gICAgICAkKCcjJyArIGlkKS5tb2RhbCgnc2hvdycpXG5cblxuICAgICAgLy8gRGVzdHJveSBhZnRlciBjbG9zZVxuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLmF1dG9EZXN0cm95KSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCgnIycgKyBpZCkucmVtb3ZlKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoc2V0dGluZy50aGlzKS5hdHRyKCdkYXRhLW1vZGFsLWlkJywgaWQpXG4gICAgICB9XG5cblxuICAgICAgLy8gTG9hZCBkYXRhIGludG8gdGhlIG1vZGFsXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcudXJsKSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykubG9hZChzZXR0aW5nLnVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vdG9kbzogYSBjb25maXJtZXIgJCh0aGlzKS5wZXJmZWN0U2Nyb2xsYmFyKCd1cGRhdGUnKTtcbiAgICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy5odG1sKSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbChzZXR0aW5nLmh0bWwpXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLnRhcmdldCkge1xuICAgICAgICAkKCcjJyArIGlkKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwoJChzZXR0aW5nLnRhcmdldCkuaHRtbCgpKVxuICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0oalF1ZXJ5KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3NlYXJjaC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI2LzA5LzIwMjAgMTg6MThcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNzZWFyY2gnLCBmdW5jdGlvbiAoZSkge1xuXG4gIGNvbnN0IGtleXdvcmQgPSAkKHRoaXMpLnZhbCgpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX2V0dWRpYW50ID0gJCgnI3NlYXJjaF9yZXBvbnNlX2V0dWRpYW50JylcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsID0gJCgnI3NlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCcpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX2F1dHJlID0gJCgnI3NlYXJjaF9yZXBvbnNlX2F1dHJlJylcblxuICBpZiAoa2V5d29yZC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgncmVjaGVyY2hlJywge2tleXdvcmQ6IGtleXdvcmR9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBsZXQgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhLmV0dWRpYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5ldHVkaWFudHMsIGZ1bmN0aW9uIChpbmRleCwgZXR1ZGlhbnQpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxhIGNsYXNzPVwibWVkaWFcIiBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsJywge1xuICAgICAgICAgICAgICB0eXBlOiAnZXR1ZGlhbnQnLFxuICAgICAgICAgICAgICBzbHVnOiBldHVkaWFudC5zbHVnXG4gICAgICAgICAgICB9KSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cXG4nXG4gICAgICAgICAgICBpZiAoZXR1ZGlhbnQucGhvdG8gPT09ICdub2ltYWdlLnBuZycgfHwgZXR1ZGlhbnQucGhvdG8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8ZGl2IGNsYXNzPVwiYXZhdGFyLWNpcmNsZS1zbVwiPlxcbicgK1xuICAgICAgICAgICAgICAgICcgICAgPHNwYW4gY2xhc3M9XCJpbml0aWFsc1wiPicgKyBldHVkaWFudC5hdmF0YXJJbml0aWFsZXMgKyAnPC9zcGFuPlxcbicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8aW1nIGNsYXNzPVwiYXZhdGFyIGF2YXRhci1zbVwiIHNyYz1cIicgKyBkYXRhLmJhc2VwYXRoICsgJ2V0dWRpYW50cy8nICsgZXR1ZGlhbnQucGhvdG8gKyAnXCIgYWx0PVwiUGhvdG8gZGUgcHJvZmlsIGRlICcgKyBldHVkaWFudC5kaXNwbGF5UHIgKyAnXCI+XFxuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPicgKyBldHVkaWFudC5kaXNwbGF5UHIgKyAnICgnICsgZXR1ZGlhbnQuc2VtZXN0cmUgKyAnKTwvc3Ryb25nPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+JyArIGV0dWRpYW50Lmdyb3VwZXMgKyAnPC90aW1lPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG5cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQuZW1wdHkoKS5hcHBlbmQoaHRtbClcblxuICAgICAgICBodG1sID0gJydcbiAgICAgICAgaWYgKGRhdGEucGVyc29ubmVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5wZXJzb25uZWxzLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnNvbm5lbCkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGEgY2xhc3M9XCJtZWRpYSBpdGVtcy1jZW50ZXJcIiBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsJywge1xuICAgICAgICAgICAgICB0eXBlOiAncGVyc29ubmVsJyxcbiAgICAgICAgICAgICAgc2x1ZzogcGVyc29ubmVsLnNsdWdcbiAgICAgICAgICAgIH0pICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPlxcbidcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWwucGhvdG8gPT09ICdub2ltYWdlLnBuZycgfHwgcGVyc29ubmVsLnBob3RvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGRpdiBjbGFzcz1cImF2YXRhci1jaXJjbGUtc21cIj5cXG4nICtcbiAgICAgICAgICAgICAgICAnICAgIDxzcGFuIGNsYXNzPVwiaW5pdGlhbHNcIj4nICsgcGVyc29ubmVsLmF2YXRhckluaXRpYWxlcyArICc8L3NwYW4+XFxuJyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiJyArIGRhdGEuYmFzZXBhdGggKyAncGVyc29ubmVscy8nICsgcGVyc29ubmVsLnBob3RvICsgJ1wiIGFsdD1cIlBob3RvIGRlIHByb2ZpbCBkZSAnICsgcGVyc29ubmVsLmRpc3BsYXlQciArICdcIj5cXG4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICcgICAgICAgICAgICAgICAgICAgICAgICA8cD4nICsgcGVyc29ubmVsLmRpc3BsYXlQciArICc8L3A+XFxuJyArXG4gICAgICAgICAgICAgICc8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG4gICAgICAgIHNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbC5lbXB0eSgpLmFwcGVuZChodG1sKVxuXG4gICAgICAgIGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YS5hdXRyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEuYXV0cmVzLCBmdW5jdGlvbiAoaW5kZXgsIGF1dHJlKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8YSBjbGFzcz1cIm1lZGlhIGl0ZW1zLWNlbnRlclwiIGhyZWY9XCJcIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9hdmF0YXIvMS5qcGdcIiBhbHQ9XCIuLi5cIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwPicgKyBhdXRyZSArICc8L3A+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfYXV0cmUuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCI+U2Fpc2lyIGF1IG1vaW5zIDMgY2FyYWN0w6hyZXM8L2Rpdj4nXG4gICAgc2VhcmNoX3JlcG9uc2VfYXV0cmUuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICBzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICBzZWFyY2hfcmVwb25zZV9ldHVkaWFudC5lbXB0eSgpLmFwcGVuZChodG1sKVxuICB9XG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdmFsaWRhdG9yLWJzNC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzExLzIwMTkgMTk6NDBcblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBWQUxJREFUT1IgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIGdldFZhbHVlKCRlbCkge1xuICAgIHJldHVybiAkZWwuaXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKSA/ICRlbC5wcm9wKCdjaGVja2VkJykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAkZWwuaXMoJ1t0eXBlPVwicmFkaW9cIl0nKSAgICA/ICEhJCgnW25hbWU9XCInICsgJGVsLmF0dHIoJ25hbWUnKSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aCA6XG4gICAgICAgICAgICRlbC5pcygnc2VsZWN0W211bHRpcGxlXScpICA/ICgkZWwudmFsKCkgfHwgW10pLmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWwudmFsKClcbiAgfVxuXG4gIHZhciBWYWxpZGF0b3IgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyAgICA9IG9wdGlvbnNcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSAkLmV4dGVuZCh7fSwgVmFsaWRhdG9yLlZBTElEQVRPUlMsIG9wdGlvbnMuY3VzdG9tKVxuICAgIHRoaXMuJGVsZW1lbnQgICA9ICQoZWxlbWVudClcbiAgICB0aGlzLiRidG4gICAgICAgPSAkKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCdbZm9ybT1cIicgKyB0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJykgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgdGhpcy4kZWxlbWVudC5vbignaW5wdXQuYnMudmFsaWRhdG9yIGNoYW5nZS5icy52YWxpZGF0b3IgZm9jdXNvdXQuYnMudmFsaWRhdG9yJywgJC5wcm94eSh0aGlzLm9uSW5wdXQsIHRoaXMpKVxuICAgIHRoaXMuJGVsZW1lbnQub24oJ3N1Ym1pdC5icy52YWxpZGF0b3InLCAkLnByb3h5KHRoaXMub25TdWJtaXQsIHRoaXMpKVxuICAgIHRoaXMuJGVsZW1lbnQub24oJ3Jlc2V0LmJzLnZhbGlkYXRvcicsICQucHJveHkodGhpcy5yZXNldCwgdGhpcykpXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLW1hdGNoXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICA9ICQodGhpcylcbiAgICAgIHZhciB0YXJnZXQgPSAkdGhpcy5hdHRyKCdkYXRhLW1hdGNoJylcblxuICAgICAgJCh0YXJnZXQpLm9uKCdpbnB1dC5icy52YWxpZGF0b3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBnZXRWYWx1ZSgkdGhpcykgJiYgJHRoaXMudHJpZ2dlcignaW5wdXQuYnMudmFsaWRhdG9yJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIHJ1biB2YWxpZGF0b3JzIGZvciBmaWVsZHMgd2l0aCB2YWx1ZXMsIGJ1dCBkb24ndCBjbG9iYmVyIHNlcnZlci1zaWRlIGVycm9yc1xuICAgIHRoaXMuJGlucHV0cy5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldFZhbHVlKCQodGhpcykpICYmICEkKHRoaXMpLmNsb3Nlc3QoJy5oYXMtZXJyb3InKS5sZW5ndGhcbiAgICB9KS50cmlnZ2VyKCdmb2N1c291dCcpXG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ25vdmFsaWRhdGUnLCB0cnVlKSAvLyBkaXNhYmxlIGF1dG9tYXRpYyBuYXRpdmUgdmFsaWRhdGlvblxuICB9XG5cbiAgVmFsaWRhdG9yLlZFUlNJT04gPSAnMC4xMS45J1xuXG4gIFZhbGlkYXRvci5JTlBVVF9TRUxFQ1RPUiA9ICc6aW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdLCBbdHlwZT1cInN1Ym1pdFwiXSwgW3R5cGU9XCJyZXNldFwiXSwgYnV0dG9uKSdcblxuICBWYWxpZGF0b3IuRk9DVVNfT0ZGU0VUID0gMjBcblxuICBWYWxpZGF0b3IuREVGQVVMVFMgPSB7XG4gICAgZGVsYXk6IDUwMCxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBkaXNhYmxlOiB0cnVlLFxuICAgIGZvY3VzOiB0cnVlLFxuICAgIGN1c3RvbToge30sXG4gICAgZXJyb3JzOiB7XG4gICAgICBtYXRjaDogJ0RvZXMgbm90IG1hdGNoJyxcbiAgICAgIG1pbmxlbmd0aDogJ05vdCBsb25nIGVub3VnaCdcbiAgICB9LFxuICAgIGZlZWRiYWNrOiB7XG4gICAgICBzdWNjZXNzOiAnZ2x5cGhpY29uLW9rJyxcbiAgICAgIGVycm9yOiAnZ2x5cGhpY29uLXJlbW92ZSdcbiAgICB9XG4gIH1cblxuICBWYWxpZGF0b3IuVkFMSURBVE9SUyA9IHtcbiAgICAnbmF0aXZlJzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgdmFyIGVsID0gJGVsWzBdXG4gICAgICBpZiAoZWwuY2hlY2tWYWxpZGl0eSkge1xuICAgICAgICByZXR1cm4gIWVsLmNoZWNrVmFsaWRpdHkoKSAmJiAhZWwudmFsaWRpdHkudmFsaWQgJiYgKGVsLnZhbGlkYXRpb25NZXNzYWdlIHx8IFwiZXJyb3IhXCIpXG4gICAgICB9XG4gICAgfSxcbiAgICAnbWF0Y2gnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJGVsLmF0dHIoJ2RhdGEtbWF0Y2gnKVxuICAgICAgcmV0dXJuICRlbC52YWwoKSAhPT0gJCh0YXJnZXQpLnZhbCgpICYmIFZhbGlkYXRvci5ERUZBVUxUUy5lcnJvcnMubWF0Y2hcbiAgICB9LFxuICAgICdtaW5sZW5ndGgnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgbWlubGVuZ3RoID0gJGVsLmF0dHIoJ2RhdGEtbWlubGVuZ3RoJylcbiAgICAgIHJldHVybiAkZWwudmFsKCkubGVuZ3RoIDwgbWlubGVuZ3RoICYmIFZhbGlkYXRvci5ERUZBVUxUUy5lcnJvcnMubWlubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICB0aGlzLiRpbnB1dHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoVmFsaWRhdG9yLklOUFVUX1NFTEVDVE9SKVxuICAgICAgLmFkZCh0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXZhbGlkYXRlPVwidHJ1ZVwiXScpKVxuICAgICAgLm5vdCh0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXZhbGlkYXRlPVwiZmFsc2VcIl0nKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7IHNlbGYuY2xlYXJFcnJvcnMoJCh0aGlzKSkgfSlcbiAgICAgIClcblxuICAgIHRoaXMudG9nZ2xlU3VibWl0KClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLm9uSW5wdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzZWxmICAgICAgICA9IHRoaXNcbiAgICB2YXIgJGVsICAgICAgICAgPSAkKGUudGFyZ2V0KVxuICAgIHZhciBkZWZlckVycm9ycyA9IGUudHlwZSAhPT0gJ2ZvY3Vzb3V0J1xuXG4gICAgaWYgKCF0aGlzLiRpbnB1dHMuaXMoJGVsKSkgcmV0dXJuXG5cbiAgICB0aGlzLnZhbGlkYXRlSW5wdXQoJGVsLCBkZWZlckVycm9ycykuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRvZ2dsZVN1Ym1pdCgpXG4gICAgfSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGVJbnB1dCA9IGZ1bmN0aW9uICgkZWwsIGRlZmVyRXJyb3JzKSB7XG4gICAgdmFyIHZhbHVlICAgICAgPSBnZXRWYWx1ZSgkZWwpXG4gICAgdmFyIHByZXZFcnJvcnMgPSAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpXG5cbiAgICBpZiAoJGVsLmlzKCdbdHlwZT1cInJhZGlvXCJdJykpICRlbCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXRbbmFtZT1cIicgKyAkZWwuYXR0cignbmFtZScpICsgJ1wiXScpXG5cbiAgICB2YXIgZSA9ICQuRXZlbnQoJ3ZhbGlkYXRlLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF19KVxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgcmV0dXJuIHRoaXMucnVuVmFsaWRhdG9ycygkZWwpLmRvbmUoZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnLCBlcnJvcnMpXG5cbiAgICAgIGVycm9ycy5sZW5ndGhcbiAgICAgICAgPyBkZWZlckVycm9ycyA/IHNlbGYuZGVmZXIoJGVsLCBzZWxmLnNob3dFcnJvcnMpIDogc2VsZi5zaG93RXJyb3JzKCRlbClcbiAgICAgICAgOiBzZWxmLmNsZWFyRXJyb3JzKCRlbClcblxuICAgICAgaWYgKCFwcmV2RXJyb3JzIHx8IGVycm9ycy50b1N0cmluZygpICE9PSBwcmV2RXJyb3JzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgZSA9IGVycm9ycy5sZW5ndGhcbiAgICAgICAgICA/ICQuRXZlbnQoJ2ludmFsaWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXSwgZGV0YWlsOiBlcnJvcnN9KVxuICAgICAgICAgIDogJC5FdmVudCgndmFsaWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXSwgZGV0YWlsOiBwcmV2RXJyb3JzfSlcblxuICAgICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoZSlcbiAgICAgIH1cblxuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuXG4gICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoJC5FdmVudCgndmFsaWRhdGVkLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF19KSlcbiAgICB9KVxuICB9XG5cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnJ1blZhbGlkYXRvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyIGVycm9ycyAgID0gW11cbiAgICB2YXIgZGVmZXJyZWQgPSAkLkRlZmVycmVkKClcblxuICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZGVmZXJyZWQnKSAmJiAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJykucmVqZWN0KClcbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJywgZGVmZXJyZWQpXG5cbiAgICBmdW5jdGlvbiBnZXRWYWxpZGF0b3JTcGVjaWZpY0Vycm9yKGtleSkge1xuICAgICAgcmV0dXJuICRlbC5hdHRyKCdkYXRhLScgKyBrZXkgKyAnLWVycm9yJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWYWxpZGl0eVN0YXRlRXJyb3IoKSB7XG4gICAgICB2YXIgdmFsaWRpdHkgPSAkZWxbMF0udmFsaWRpdHlcbiAgICAgIHJldHVybiB2YWxpZGl0eS50eXBlTWlzbWF0Y2ggICAgPyAkZWwuYXR0cignZGF0YS10eXBlLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggPyAkZWwuYXR0cignZGF0YS1wYXR0ZXJuLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5zdGVwTWlzbWF0Y2ggICAgPyAkZWwuYXR0cignZGF0YS1zdGVwLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5yYW5nZU92ZXJmbG93ICAgPyAkZWwuYXR0cignZGF0YS1tYXgtZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnJhbmdlVW5kZXJmbG93ICA/ICRlbC5hdHRyKCdkYXRhLW1pbi1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkudmFsdWVNaXNzaW5nICAgID8gJGVsLmF0dHIoJ2RhdGEtcmVxdWlyZWQtZXJyb3InKVxuICAgICAgICAgICA6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHZW5lcmljRXJyb3IoKSB7XG4gICAgICByZXR1cm4gJGVsLmF0dHIoJ2RhdGEtZXJyb3InKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShrZXkpIHtcbiAgICAgIHJldHVybiBnZXRWYWxpZGF0b3JTcGVjaWZpY0Vycm9yKGtleSlcbiAgICAgICAgICB8fCBnZXRWYWxpZGl0eVN0YXRlRXJyb3IoKVxuICAgICAgICAgIHx8IGdldEdlbmVyaWNFcnJvcigpXG4gICAgfVxuXG4gICAgJC5lYWNoKHRoaXMudmFsaWRhdG9ycywgJC5wcm94eShmdW5jdGlvbiAoa2V5LCB2YWxpZGF0b3IpIHtcbiAgICAgIHZhciBlcnJvciA9IG51bGxcbiAgICAgIGlmICgoZ2V0VmFsdWUoJGVsKSB8fCAkZWwuYXR0cigncmVxdWlyZWQnKSkgJiZcbiAgICAgICAgICAoJGVsLmF0dHIoJ2RhdGEtJyArIGtleSkgIT09IHVuZGVmaW5lZCB8fCBrZXkgPT0gJ25hdGl2ZScpICYmXG4gICAgICAgICAgKGVycm9yID0gdmFsaWRhdG9yLmNhbGwodGhpcywgJGVsKSkpIHtcbiAgICAgICAgIGVycm9yID0gZ2V0RXJyb3JNZXNzYWdlKGtleSkgfHwgZXJyb3JcbiAgICAgICAgIX5lcnJvcnMuaW5kZXhPZihlcnJvcikgJiYgZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICB9XG4gICAgfSwgdGhpcykpXG5cbiAgICBpZiAoIWVycm9ycy5sZW5ndGggJiYgZ2V0VmFsdWUoJGVsKSAmJiAkZWwuYXR0cignZGF0YS1yZW1vdGUnKSkge1xuICAgICAgdGhpcy5kZWZlcigkZWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7fVxuICAgICAgICBkYXRhWyRlbC5hdHRyKCduYW1lJyldID0gZ2V0VmFsdWUoJGVsKVxuICAgICAgICAkLmdldCgkZWwuYXR0cignZGF0YS1yZW1vdGUnKSwgZGF0YSlcbiAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yKSB7IGVycm9ycy5wdXNoKGdldEVycm9yTWVzc2FnZSgncmVtb3RlJykgfHwgZXJyb3IpIH0pXG4gICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7IGRlZmVycmVkLnJlc29sdmUoZXJyb3JzKX0pXG4gICAgICB9KVxuICAgIH0gZWxzZSBkZWZlcnJlZC5yZXNvbHZlKGVycm9ycylcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlKClcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICAkLndoZW4odGhpcy4kaW5wdXRzLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBzZWxmLnZhbGlkYXRlSW5wdXQoJCh0aGlzKSwgZmFsc2UpXG4gICAgfSkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuICAgICAgc2VsZi5mb2N1c0Vycm9yKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuZm9jdXNFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5mb2N1cykgcmV0dXJuXG5cbiAgICB2YXIgJGlucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKFwiLmhhcy1lcnJvcjpmaXJzdCA6aW5wdXRcIilcbiAgICBpZiAoJGlucHV0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkaW5wdXQub2Zmc2V0KCkudG9wIC0gVmFsaWRhdG9yLkZPQ1VTX09GRlNFVH0sIDI1MClcbiAgICAkaW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5zaG93RXJyb3JzID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciBtZXRob2QgPSB0aGlzLm9wdGlvbnMuaHRtbCA/ICdodG1sJyA6ICd0ZXh0J1xuICAgIHZhciBlcnJvcnMgPSAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpXG4gICAgdmFyICRncm91cCA9ICRlbC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpXG4gICAgdmFyICRibG9jayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgdmFyICRmZWVkYmFjayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG5cbiAgICBpZiAoIWVycm9ycy5sZW5ndGgpIHJldHVyblxuXG4gICAgJGVsLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG5cbiAgICBlcnJvcnMgPSAkKCc8dWwvPicpXG4gICAgICAuYWRkQ2xhc3MoJ2xpc3QtdW5zdHlsZWQnKVxuICAgICAgLmFwcGVuZCgkLm1hcChlcnJvcnMsIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gJCgnPGxpLz4nKVttZXRob2RdKGVycm9yKSB9KSlcblxuICAgICRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JykgPT09IHVuZGVmaW5lZCAmJiAkYmxvY2suZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcsICRibG9jay5odG1sKCkpXG4gICAgJGJsb2NrLmVtcHR5KCkuYXBwZW5kKGVycm9ycylcbiAgICAkZ3JvdXAuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyJylcblxuICAgICRncm91cC5oYXNDbGFzcygnaGFzLWZlZWRiYWNrJylcbiAgICAgICYmICRmZWVkYmFjay5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcbiAgICAgICYmICRmZWVkYmFjay5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpXG4gICAgICAmJiAkZ3JvdXAucmVtb3ZlQ2xhc3MoJ2hhcy1zdWNjZXNzJylcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuY2xlYXJFcnJvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyICRncm91cCA9ICRlbC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpXG4gICAgdmFyICRibG9jayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgdmFyICRmZWVkYmFjayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG5cbiAgICAkZWwucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgICRibG9jay5odG1sKCRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JykpXG4gICAgJGdyb3VwLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWRhbmdlciBoYXMtc3VjY2VzcycpXG5cbiAgICAkZ3JvdXAuaGFzQ2xhc3MoJ2hhcy1mZWVkYmFjaycpXG4gICAgICAmJiAkZmVlZGJhY2sucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgJiYgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgZ2V0VmFsdWUoJGVsKVxuICAgICAgJiYgJGZlZWRiYWNrLmFkZENsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgJGdyb3VwLmFkZENsYXNzKCdoYXMtc3VjY2VzcycpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmhhc0Vycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBmaWVsZEVycm9ycygpIHtcbiAgICAgIHJldHVybiAhISgkKHRoaXMpLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnKSB8fCBbXSkubGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy4kaW5wdXRzLmZpbHRlcihmaWVsZEVycm9ycykubGVuZ3RoXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmlzSW5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBmaWVsZEluY29tcGxldGUoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRWYWx1ZSgkKHRoaXMpKVxuICAgICAgcmV0dXJuICEodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIgPyAkLnRyaW0odmFsdWUpIDogdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy4kaW5wdXRzLmZpbHRlcignW3JlcXVpcmVkXScpLmZpbHRlcihmaWVsZEluY29tcGxldGUpLmxlbmd0aFxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpXG4gICAgaWYgKHRoaXMuaXNJbmNvbXBsZXRlKCkgfHwgdGhpcy5oYXNFcnJvcnMoKSkgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnRvZ2dsZVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlKSByZXR1cm5cbiAgICB0aGlzLiRidG4udG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdGhpcy5pc0luY29tcGxldGUoKSB8fCB0aGlzLmhhc0Vycm9ycygpKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uICgkZWwsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSAkLnByb3h5KGNhbGxiYWNrLCB0aGlzLCAkZWwpXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGVsYXkpIHJldHVybiBjYWxsYmFjaygpXG4gICAgd2luZG93LmNsZWFyVGltZW91dCgkZWwuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKSlcbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnLCB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgdGhpcy5vcHRpb25zLmRlbGF5KSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuXG4gICAgdGhpcy4kaW5wdXRzXG4gICAgICAucmVtb3ZlRGF0YShbJ2JzLnZhbGlkYXRvci5lcnJvcnMnLCAnYnMudmFsaWRhdG9yLmRlZmVycmVkJ10pXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgIHZhciB0aW1lb3V0ID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpICYmICR0aGlzLnJlbW92ZURhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0JylcbiAgICAgIH0pXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICB2YXIgb3JpZ2luYWxDb250ZW50ID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpXG5cbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpXG4gICAgICAgICAgLmh0bWwob3JpZ2luYWxDb250ZW50KVxuICAgICAgfSlcblxuICAgIHRoaXMuJGJ0bi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKVxuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaGFzLWVycm9yLCAuaGFzLWRhbmdlciwgLmhhcy1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyIGhhcy1zdWNjZXNzJylcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAucmVtb3ZlQXR0cignbm92YWxpZGF0ZScpXG4gICAgICAucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yJylcbiAgICAgIC5vZmYoJy5icy52YWxpZGF0b3InKVxuXG4gICAgdGhpcy4kaW5wdXRzXG4gICAgICAub2ZmKCcuYnMudmFsaWRhdG9yJylcblxuICAgIHRoaXMub3B0aW9ucyAgICA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBudWxsXG4gICAgdGhpcy4kZWxlbWVudCAgID0gbnVsbFxuICAgIHRoaXMuJGJ0biAgICAgICA9IG51bGxcbiAgICB0aGlzLiRpbnB1dHMgICAgPSBudWxsXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gVkFMSURBVE9SIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBWYWxpZGF0b3IuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvcicpXG5cbiAgICAgIGlmICghZGF0YSAmJiBvcHRpb24gPT0gJ2Rlc3Ryb3knKSByZXR1cm5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yJywgKGRhdGEgPSBuZXcgVmFsaWRhdG9yKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi52YWxpZGF0b3JcblxuICAkLmZuLnZhbGlkYXRvciAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLnZhbGlkYXRvci5Db25zdHJ1Y3RvciA9IFZhbGlkYXRvclxuXG5cbiAgLy8gVkFMSURBVE9SIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4udmFsaWRhdG9yLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi52YWxpZGF0b3IgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBWQUxJREFUT1IgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT09PT09XG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ2Zvcm1bZGF0YS10b2dnbGU9XCJ2YWxpZGF0b3JcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkZm9ybSA9ICQodGhpcylcbiAgICAgIFBsdWdpbi5jYWxsKCRmb3JtLCAkZm9ybS5kYXRhKCkpXG4gICAgfSlcbiAgfSlcblxufShqUXVlcnkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==