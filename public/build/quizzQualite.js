(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quizzQualite"],{

/***/ "./assets/js/pages/quizzQualite.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/quizzQualite.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wizard */ "./assets/js/wizard.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/quizzQualite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/11/2020 12:54

$(document).on('change', '.questionQualite', function () {
  $.ajax({
    url: Routing.generate('app_etudiant_qualite_ajax_reponse', {
      questionnaire: $('#questionnaire').val(),
      typeQuestionnaire: $(this).data('typequestionnaire')
    }),
    method: 'POST',
    data: {
      cleReponse: $(this).attr('id'),
      cleQuestion: $(this).attr('name'),
      etudiant: $(this).data('etudiant')
    },
    success: function success() {}
  });
});
$(document).on('blur', '.questionQualiteTextArea', function () {
  $.ajax({
    url: Routing.generate('app_etudiant_qualite_ajax_reponse_txt', {
      questionnaire: $('#questionnaire').val(),
      typeQuestionnaire: $(this).data('typequestionnaire')
    }),
    method: 'POST',
    data: {
      cleQuestion: $(this).attr('name'),
      value: $(this).val(),
      etudiant: $(this).data('etudiant')
    },
    success: function success() {}
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/wizard.js":
/*!*****************************!*\
  !*** ./assets/js/wizard.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_bootstrap_wizard_bootstrap_wizard_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/bootstrap-wizard/bootstrap-wizard.min */ "./assets/vendor/bootstrap-wizard/bootstrap-wizard.min.js");
/* harmony import */ var _vendor_bootstrap_wizard_bootstrap_wizard_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_wizard_bootstrap_wizard_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/wizard.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/11/2020 17:55


jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-provide~="wizard"]').each(function () {
  initWizard(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this));
});

function initWizard(obj) {
  if (!jquery__WEBPACK_IMPORTED_MODULE_2___default.a.fn.bootstrapWizard) {
    return;
  }

  var wizard = obj;
  var nav_item = obj.find('.nav-item');
  var tab_pane = obj.find('.tab-pane');
  wizard.bootstrapWizard({
    tabClass: 'nav-process',
    nextSelector: '[data-wizard="next"]',
    previousSelector: '[data-wizard="prev"]',
    firstSelector: '[data-wizard="first"]',
    lastSelector: '[data-wizard="last"]',
    finishSelector: '[data-wizard="finish"]',
    backSelector: '[data-wizard="back"]',
    onTabClick: function onTabClick(tab, navigation, index) {
      if (!wizard.is('[data-navigateable="true"]')) {
        return false;
      }
    },
    onNext: function onNext(tab, navigation, index) {
      var current_index = wizard.bootstrapWizard('currentIndex');
      var curr_tab = tab_pane.eq(current_index);
      var tab = tab_pane.eq(index); // Validator

      var validator_selector = '[data-provide="validation"]';
      var validator = curr_tab.find(validator_selector).addBack(validator_selector);

      if (validator.length) {
        validator.validator('validate');

        if (validator.find('.has-error').length) {
          return false;
        }
      } // Callback
      //


      if (wizard.hasDataAttr('on-next')) {
        app.call(wizard.data('on-next'), tab, navigation, index);
      }
    },
    onBack: function onBack(tab, navigation, index) {
      // Callback
      //
      if (wizard.hasDataAttr('on-back')) {
        app.call(wizard.data('on-back'), tab, navigation, index);
      }
    },
    onPrevious: function onPrevious(tab, navigation, index) {
      // Callback
      //
      if (wizard.hasDataAttr('on-previous')) {
        app.call(wizard.data('on-previous'), tab, navigation, index);
      }
    },
    onTabShow: function onTabShow(tab, navigation, index) {
      var tab = tab_pane.eq(index);
      var nav = nav_item.eq(index);
      var max = wizard.bootstrapWizard('navigationLength'); // Finish button

      if (index == max) {
        wizard.find('[data-wizard="next"]').addClass('d-none');
        wizard.find('[data-wizard="finish"]').removeClass('d-none');
      } else {
        wizard.find('[data-wizard="next"]').removeClass('d-none');
        wizard.find('[data-wizard="finish"]').addClass('d-none');
      } // Nav classes


      navigation.children().removeClass('processing');
      navigation.children(':lt(' + index + '):not(.complete)').addClass('complete');
      nav.addClass('processing');

      if (!wizard.is('[data-stay-complete="true"]')) {
        navigation.children(':gt(' + index + ').complete').removeClass('complete');
      } // Ajax load


      if (tab.hasDataAttr('url')) {
        tab.load(tab.data('url'));
      } // Callback for tab


      if (tab.hasDataAttr('callback')) {
        app.call(tab.data('callback'), tab);
      } // Callback for wizard
      //


      if (wizard.hasDataAttr('on-tab-show')) {
        app.call(wizard.data('on-tab-show'), tab, navigation, index);
      }
    },
    onFinish: function onFinish(tab, navigation, index) {
      var curr_tab = tab_pane.eq(index); // Validator

      var validator_selector = '[data-provide="validation"]';
      var validator = curr_tab.find(validator_selector).addBack(validator_selector);

      if (validator.length) {
        validator.validator('validate');

        if (validator.find('.has-error').length) {
          validator.closest('form').one('submit', function (e) {
            e.preventDefault();
          });
          return false;
        }
      } // Navigation


      var nav = nav_item.eq(index);
      nav.addClass('complete').removeClass('processing'); // Callback
      //

      if (wizard.hasDataAttr('on-finish')) {
        app.call(wizard.data('on-finish'), tab, navigation, index);
      }
    }
  });
}

/***/ }),

/***/ "./assets/vendor/bootstrap-wizard/bootstrap-wizard.min.js":
/*!****************************************************************!*\
  !*** ./assets/vendor/bootstrap-wizard/bootstrap-wizard.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/bootstrap-wizard/bootstrap-wizard.min.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:38

/*!
 * jQuery twitter bootstrap wizard plugin
 * Examples and documentation at: http://github.com/VinceG/twitter-bootstrap-wizard
 * version 1.0
 * Requires jQuery v1.3.2 or later
 * Supports Bootstrap 2.2.x, 2.3.x, 3.0
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: Vadim Vincent Gabriel (http://vadimg.com), Jason Gill (www.gilluminate.com)
 */
!function (n) {
  var t = function t(_t, i) {
    var _t = n(_t),
        e = this,
        o = 'li:has([data-toggle="tab"])',
        a = [],
        r = n.extend({}, n.fn.bootstrapWizard.defaults, i),
        s = null,
        l = null;

    this.rebindClick = function (n, t) {
      n.unbind("click", t).bind("click", t);
    }, this.fixNavigationButtons = function () {
      return s.length || (l.find("a:first").tab("show"), s = l.find(o + ":first")), n(r.previousSelector, _t).toggleClass("disabled", e.firstIndex() >= e.currentIndex()), n(r.nextSelector, _t).toggleClass("disabled", e.currentIndex() >= e.navigationLength()), n(r.nextSelector, _t).toggleClass("hidden", e.currentIndex() >= e.navigationLength() && n(r.finishSelector, _t).length > 0), n(r.lastSelector, _t).toggleClass("hidden", e.currentIndex() >= e.navigationLength() && n(r.finishSelector, _t).length > 0), n(r.finishSelector, _t).toggleClass("hidden", e.currentIndex() < e.navigationLength()), n(r.backSelector, _t).toggleClass("disabled", 0 == a.length), n(r.backSelector, _t).toggleClass("hidden", e.currentIndex() >= e.navigationLength() && n(r.finishSelector, _t).length > 0), e.rebindClick(n(r.nextSelector, _t), e.next), e.rebindClick(n(r.previousSelector, _t), e.previous), e.rebindClick(n(r.lastSelector, _t), e.last), e.rebindClick(n(r.firstSelector, _t), e.first), e.rebindClick(n(r.finishSelector, _t), e.finish), e.rebindClick(n(r.backSelector, _t), e.back), r.onTabShow && "function" == typeof r.onTabShow && r.onTabShow(s, l, e.currentIndex()) === !1 ? !1 : void 0;
    }, this.next = function (n) {
      if (_t.hasClass("last")) return !1;
      if (r.onNext && "function" == typeof r.onNext && r.onNext(s, l, e.nextIndex()) === !1) return !1;
      var i = e.currentIndex(),
          d = e.nextIndex();
      d > e.navigationLength() || (a.push(i), l.find(o + (r.withVisible ? ":visible" : "") + ":eq(" + d + ") a").tab("show"));
    }, this.previous = function (n) {
      if (_t.hasClass("first")) return !1;
      if (r.onPrevious && "function" == typeof r.onPrevious && r.onPrevious(s, l, e.previousIndex()) === !1) return !1;
      var i = e.currentIndex(),
          d = e.previousIndex();
      0 > d || (a.push(i), l.find(o + (r.withVisible ? ":visible" : "") + ":eq(" + d + ") a").tab("show"));
    }, this.first = function (n) {
      return r.onFirst && "function" == typeof r.onFirst && r.onFirst(s, l, e.firstIndex()) === !1 ? !1 : _t.hasClass("disabled") ? !1 : (a.push(e.currentIndex()), void l.find(o + ":eq(0) a").tab("show"));
    }, this.last = function (n) {
      return r.onLast && "function" == typeof r.onLast && r.onLast(s, l, e.lastIndex()) === !1 ? !1 : _t.hasClass("disabled") ? !1 : (a.push(e.currentIndex()), void l.find(o + ":eq(" + e.navigationLength() + ") a").tab("show"));
    }, this.finish = function (n) {
      r.onFinish && "function" == typeof r.onFinish && r.onFinish(s, l, e.lastIndex());
    }, this.back = function () {
      if (0 == a.length) return null;
      var n = a.pop();
      return r.onBack && "function" == typeof r.onBack && r.onBack(s, l, n) === !1 ? (a.push(n), !1) : void _t.find(o + ":eq(" + n + ") a").tab("show");
    }, this.currentIndex = function () {
      return l.find(o).index(s);
    }, this.firstIndex = function () {
      return 0;
    }, this.lastIndex = function () {
      return e.navigationLength();
    }, this.getIndex = function (n) {
      return l.find(o).index(n);
    }, this.nextIndex = function () {
      return l.find(o).index(s) + 1;
    }, this.previousIndex = function () {
      return l.find(o).index(s) - 1;
    }, this.navigationLength = function () {
      return l.find(o).length - 1;
    }, this.activeTab = function () {
      return s;
    }, this.nextTab = function () {
      return l.find(o + ":eq(" + (e.currentIndex() + 1) + ")").length ? l.find(o + ":eq(" + (e.currentIndex() + 1) + ")") : null;
    }, this.previousTab = function () {
      return e.currentIndex() <= 0 ? null : l.find(o + ":eq(" + parseInt(e.currentIndex() - 1) + ")");
    }, this.show = function (n) {
      var i = isNaN(n) ? _t.find(o + " a[href=#" + n + "]") : _t.find(o + ":eq(" + n + ") a");
      i.length > 0 && (a.push(e.currentIndex()), i.tab("show"));
    }, this.disable = function (n) {
      l.find(o + ":eq(" + n + ")").addClass("disabled");
    }, this.enable = function (n) {
      l.find(o + ":eq(" + n + ")").removeClass("disabled");
    }, this.hide = function (n) {
      l.find(o + ":eq(" + n + ")").hide();
    }, this.display = function (n) {
      l.find(o + ":eq(" + n + ")").show();
    }, this.remove = function (t) {
      var i = t[0],
          e = "undefined" != typeof t[1] ? t[1] : !1,
          a = l.find(o + ":eq(" + i + ")");

      if (e) {
        var r = a.find("a").attr("href");
        n(r).remove();
      }

      a.remove();
    };

    var d = function d(t) {
      var i = l.find(o),
          a = i.index(n(t.currentTarget).parent(o)),
          d = n(i[a]);
      return r.onTabClick && "function" == typeof r.onTabClick && r.onTabClick(s, l, e.currentIndex(), a, d) === !1 ? !1 : void 0;
    },
        u = function u(t) {
      var i = n(t.target).parent(),
          a = l.find(o).index(i);
      return i.hasClass("disabled") ? !1 : r.onTabChange && "function" == typeof r.onTabChange && r.onTabChange(s, l, e.currentIndex(), a) === !1 ? !1 : (s = i, void e.fixNavigationButtons());
    };

    this.resetWizard = function () {
      n('a[data-toggle="tab"]', l).off("click", d), n('a[data-toggle="tab"]', l).off("shown shown.bs.tab", u), l = _t.find("ul:first", _t), s = l.find(o + ".active", _t), n('a[data-toggle="tab"]', l).on("click", d), n('a[data-toggle="tab"]', l).on("shown shown.bs.tab", u), e.fixNavigationButtons();
    }, l = _t.find("ul:first", _t), s = l.find(o + ".active", _t), l.hasClass(r.tabClass) || l.addClass(r.tabClass), r.onInit && "function" == typeof r.onInit && r.onInit(s, l, 0), r.onShow && "function" == typeof r.onShow && r.onShow(s, l, e.nextIndex()), n('a[data-toggle="tab"]', l).on("click", d), n('a[data-toggle="tab"]', l).on("shown shown.bs.tab", u);
  };

  n.fn.bootstrapWizard = function (i) {
    if ("string" == typeof i) {
      var e = Array.prototype.slice.call(arguments, 1);
      return 1 === e.length && e.toString(), this.data("bootstrapWizard")[i](e);
    }

    return this.each(function (e) {
      var o = n(this);

      if (!o.data("bootstrapWizard")) {
        var a = new t(o, i);
        o.data("bootstrapWizard", a), a.fixNavigationButtons();
      }
    });
  }, n.fn.bootstrapWizard.defaults = {
    withVisible: !0,
    tabClass: "nav nav-pills",
    nextSelector: ".wizard li.next",
    previousSelector: ".wizard li.previous",
    firstSelector: ".wizard li.first",
    lastSelector: ".wizard li.last",
    finishSelector: ".wizard li.finish",
    backSelector: ".wizard li.back",
    onShow: null,
    onInit: null,
    onNext: null,
    onPrevious: null,
    onLast: null,
    onFirst: null,
    onFinish: null,
    onBack: null,
    onTabChange: null,
    onTabClick: null,
    onTabShow: null
  };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ })

},[["./assets/js/pages/quizzQualite.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~covid~datata~8156d9a8"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvcXVpenpRdWFsaXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy93aXphcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtd2l6YXJkL2Jvb3RzdHJhcC13aXphcmQubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInF1ZXN0aW9ubmFpcmUiLCJ2YWwiLCJ0eXBlUXVlc3Rpb25uYWlyZSIsImRhdGEiLCJtZXRob2QiLCJjbGVSZXBvbnNlIiwiYXR0ciIsImNsZVF1ZXN0aW9uIiwiZXR1ZGlhbnQiLCJzdWNjZXNzIiwidmFsdWUiLCJlYWNoIiwiaW5pdFdpemFyZCIsIm9iaiIsImZuIiwiYm9vdHN0cmFwV2l6YXJkIiwid2l6YXJkIiwibmF2X2l0ZW0iLCJmaW5kIiwidGFiX3BhbmUiLCJ0YWJDbGFzcyIsIm5leHRTZWxlY3RvciIsInByZXZpb3VzU2VsZWN0b3IiLCJmaXJzdFNlbGVjdG9yIiwibGFzdFNlbGVjdG9yIiwiZmluaXNoU2VsZWN0b3IiLCJiYWNrU2VsZWN0b3IiLCJvblRhYkNsaWNrIiwidGFiIiwibmF2aWdhdGlvbiIsImluZGV4IiwiaXMiLCJvbk5leHQiLCJjdXJyZW50X2luZGV4IiwiY3Vycl90YWIiLCJlcSIsInZhbGlkYXRvcl9zZWxlY3RvciIsInZhbGlkYXRvciIsImFkZEJhY2siLCJsZW5ndGgiLCJoYXNEYXRhQXR0ciIsImFwcCIsImNhbGwiLCJvbkJhY2siLCJvblByZXZpb3VzIiwib25UYWJTaG93IiwibmF2IiwibWF4IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNoaWxkcmVuIiwibG9hZCIsIm9uRmluaXNoIiwiY2xvc2VzdCIsIm9uZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm4iLCJ0IiwiaSIsIm8iLCJhIiwiciIsImV4dGVuZCIsImRlZmF1bHRzIiwicyIsImwiLCJyZWJpbmRDbGljayIsInVuYmluZCIsImJpbmQiLCJmaXhOYXZpZ2F0aW9uQnV0dG9ucyIsInRvZ2dsZUNsYXNzIiwiZmlyc3RJbmRleCIsImN1cnJlbnRJbmRleCIsIm5hdmlnYXRpb25MZW5ndGgiLCJuZXh0IiwicHJldmlvdXMiLCJsYXN0IiwiZmlyc3QiLCJmaW5pc2giLCJiYWNrIiwiaGFzQ2xhc3MiLCJuZXh0SW5kZXgiLCJkIiwicHVzaCIsIndpdGhWaXNpYmxlIiwicHJldmlvdXNJbmRleCIsIm9uRmlyc3QiLCJvbkxhc3QiLCJsYXN0SW5kZXgiLCJwb3AiLCJnZXRJbmRleCIsImFjdGl2ZVRhYiIsIm5leHRUYWIiLCJwcmV2aW91c1RhYiIsInBhcnNlSW50Iiwic2hvdyIsImlzTmFOIiwiZGlzYWJsZSIsImVuYWJsZSIsImhpZGUiLCJkaXNwbGF5IiwicmVtb3ZlIiwiY3VycmVudFRhcmdldCIsInBhcmVudCIsInUiLCJ0YXJnZXQiLCJvblRhYkNoYW5nZSIsInJlc2V0V2l6YXJkIiwib2ZmIiwib25Jbml0Iiwib25TaG93IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImFyZ3VtZW50cyIsInRvU3RyaW5nIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixrQkFBekIsRUFBNkMsWUFBWTtBQUN2REYsR0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsbUNBQWpCLEVBQXNEO0FBQ3pEQyxtQkFBYSxFQUFFUCxDQUFDLENBQUMsZ0JBQUQsQ0FB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QkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7O0FBRS9DO0FBQ0E7QUFDQSxHQUFHLGtDQUFrQztBQUNyQztBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1BELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsMkZBQStCOztBQUVwRTtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDIiwiZmlsZSI6InF1aXp6UXVhbGl0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9xdWl6elF1YWxpdGUuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyNC8xMS8yMDIwIDEyOjU0XG5cbmltcG9ydCAnLi4vd2l6YXJkJ1xuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5xdWVzdGlvblF1YWxpdGUnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZXR1ZGlhbnRfcXVhbGl0ZV9hamF4X3JlcG9uc2UnLCB7XG4gICAgICBxdWVzdGlvbm5haXJlOiAkKCcjcXVlc3Rpb25uYWlyZScpLnZhbCgpLFxuICAgICAgdHlwZVF1ZXN0aW9ubmFpcmU6ICQodGhpcykuZGF0YSgndHlwZXF1ZXN0aW9ubmFpcmUnKVxuICAgIH0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIGNsZVJlcG9uc2U6ICQodGhpcykuYXR0cignaWQnKSxcbiAgICAgIGNsZVF1ZXN0aW9uOiAkKHRoaXMpLmF0dHIoJ25hbWUnKSxcbiAgICAgIGV0dWRpYW50OiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JylcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcblxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdibHVyJywgJy5xdWVzdGlvblF1YWxpdGVUZXh0QXJlYScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9ldHVkaWFudF9xdWFsaXRlX2FqYXhfcmVwb25zZV90eHQnLCB7XG4gICAgICBxdWVzdGlvbm5haXJlOiAkKCcjcXVlc3Rpb25uYWlyZScpLnZhbCgpLFxuICAgICAgdHlwZVF1ZXN0aW9ubmFpcmU6ICQodGhpcykuZGF0YSgndHlwZXF1ZXN0aW9ubmFpcmUnKVxuICAgIH0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIGNsZVF1ZXN0aW9uOiAkKHRoaXMpLmF0dHIoJ25hbWUnKSxcbiAgICAgIHZhbHVlOiAkKHRoaXMpLnZhbCgpLFxuICAgICAgZXR1ZGlhbnQ6ICQodGhpcykuZGF0YSgnZXR1ZGlhbnQnKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgfVxuICB9KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy93aXphcmQuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyMy8xMS8yMDIwIDE3OjU1XG5cbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC13aXphcmQvYm9vdHN0cmFwLXdpemFyZC5taW4nXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoJ1tkYXRhLXByb3ZpZGV+PVwid2l6YXJkXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gIGluaXRXaXphcmQoJCh0aGlzKSlcbn0pXG5cbmZ1bmN0aW9uIGluaXRXaXphcmQgKG9iaikge1xuICBpZiAoISQuZm4uYm9vdHN0cmFwV2l6YXJkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuXG4gIHZhciB3aXphcmQgPSBvYmpcbiAgdmFyIG5hdl9pdGVtID0gb2JqLmZpbmQoJy5uYXYtaXRlbScpXG4gIHZhciB0YWJfcGFuZSA9IG9iai5maW5kKCcudGFiLXBhbmUnKVxuXG4gIHdpemFyZC5ib290c3RyYXBXaXphcmQoe1xuICAgIHRhYkNsYXNzOiAnbmF2LXByb2Nlc3MnLFxuICAgIG5leHRTZWxlY3RvcjogJ1tkYXRhLXdpemFyZD1cIm5leHRcIl0nLFxuICAgIHByZXZpb3VzU2VsZWN0b3I6ICdbZGF0YS13aXphcmQ9XCJwcmV2XCJdJyxcbiAgICBmaXJzdFNlbGVjdG9yOiAnW2RhdGEtd2l6YXJkPVwiZmlyc3RcIl0nLFxuICAgIGxhc3RTZWxlY3RvcjogJ1tkYXRhLXdpemFyZD1cImxhc3RcIl0nLFxuICAgIGZpbmlzaFNlbGVjdG9yOiAnW2RhdGEtd2l6YXJkPVwiZmluaXNoXCJdJyxcbiAgICBiYWNrU2VsZWN0b3I6ICdbZGF0YS13aXphcmQ9XCJiYWNrXCJdJyxcblxuICAgIG9uVGFiQ2xpY2s6IGZ1bmN0aW9uICh0YWIsIG5hdmlnYXRpb24sIGluZGV4KSB7XG4gICAgICBpZiAoIXdpemFyZC5pcygnW2RhdGEtbmF2aWdhdGVhYmxlPVwidHJ1ZVwiXScpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cblxuICAgIG9uTmV4dDogZnVuY3Rpb24gKHRhYiwgbmF2aWdhdGlvbiwgaW5kZXgpIHtcblxuICAgICAgdmFyIGN1cnJlbnRfaW5kZXggPSB3aXphcmQuYm9vdHN0cmFwV2l6YXJkKCdjdXJyZW50SW5kZXgnKVxuICAgICAgdmFyIGN1cnJfdGFiID0gdGFiX3BhbmUuZXEoY3VycmVudF9pbmRleClcbiAgICAgIHZhciB0YWIgPSB0YWJfcGFuZS5lcShpbmRleClcblxuICAgICAgLy8gVmFsaWRhdG9yXG4gICAgICB2YXIgdmFsaWRhdG9yX3NlbGVjdG9yID0gJ1tkYXRhLXByb3ZpZGU9XCJ2YWxpZGF0aW9uXCJdJ1xuICAgICAgdmFyIHZhbGlkYXRvciA9IGN1cnJfdGFiLmZpbmQodmFsaWRhdG9yX3NlbGVjdG9yKS5hZGRCYWNrKHZhbGlkYXRvcl9zZWxlY3RvcilcbiAgICAgIGlmICh2YWxpZGF0b3IubGVuZ3RoKSB7XG4gICAgICAgIHZhbGlkYXRvci52YWxpZGF0b3IoJ3ZhbGlkYXRlJylcbiAgICAgICAgaWYgKHZhbGlkYXRvci5maW5kKCcuaGFzLWVycm9yJykubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBDYWxsYmFja1xuICAgICAgLy9cbiAgICAgIGlmICh3aXphcmQuaGFzRGF0YUF0dHIoJ29uLW5leHQnKSkge1xuICAgICAgICBhcHAuY2FsbCh3aXphcmQuZGF0YSgnb24tbmV4dCcpLCB0YWIsIG5hdmlnYXRpb24sIGluZGV4KVxuICAgICAgfVxuICAgIH0sXG5cblxuICAgIG9uQmFjazogZnVuY3Rpb24gKHRhYiwgbmF2aWdhdGlvbiwgaW5kZXgpIHtcblxuICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgIC8vXG4gICAgICBpZiAod2l6YXJkLmhhc0RhdGFBdHRyKCdvbi1iYWNrJykpIHtcbiAgICAgICAgYXBwLmNhbGwod2l6YXJkLmRhdGEoJ29uLWJhY2snKSwgdGFiLCBuYXZpZ2F0aW9uLCBpbmRleClcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBvblByZXZpb3VzOiBmdW5jdGlvbiAodGFiLCBuYXZpZ2F0aW9uLCBpbmRleCkge1xuXG4gICAgICAvLyBDYWxsYmFja1xuICAgICAgLy9cbiAgICAgIGlmICh3aXphcmQuaGFzRGF0YUF0dHIoJ29uLXByZXZpb3VzJykpIHtcbiAgICAgICAgYXBwLmNhbGwod2l6YXJkLmRhdGEoJ29uLXByZXZpb3VzJyksIHRhYiwgbmF2aWdhdGlvbiwgaW5kZXgpXG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgb25UYWJTaG93OiBmdW5jdGlvbiAodGFiLCBuYXZpZ2F0aW9uLCBpbmRleCkge1xuXG4gICAgICB2YXIgdGFiID0gdGFiX3BhbmUuZXEoaW5kZXgpXG4gICAgICB2YXIgbmF2ID0gbmF2X2l0ZW0uZXEoaW5kZXgpXG4gICAgICB2YXIgbWF4ID0gd2l6YXJkLmJvb3RzdHJhcFdpemFyZCgnbmF2aWdhdGlvbkxlbmd0aCcpXG5cbiAgICAgIC8vIEZpbmlzaCBidXR0b25cbiAgICAgIGlmIChpbmRleCA9PSBtYXgpIHtcbiAgICAgICAgd2l6YXJkLmZpbmQoJ1tkYXRhLXdpemFyZD1cIm5leHRcIl0nKS5hZGRDbGFzcygnZC1ub25lJylcbiAgICAgICAgd2l6YXJkLmZpbmQoJ1tkYXRhLXdpemFyZD1cImZpbmlzaFwiXScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2l6YXJkLmZpbmQoJ1tkYXRhLXdpemFyZD1cIm5leHRcIl0nKS5yZW1vdmVDbGFzcygnZC1ub25lJylcbiAgICAgICAgd2l6YXJkLmZpbmQoJ1tkYXRhLXdpemFyZD1cImZpbmlzaFwiXScpLmFkZENsYXNzKCdkLW5vbmUnKVxuICAgICAgfVxuXG4gICAgICAvLyBOYXYgY2xhc3Nlc1xuICAgICAgbmF2aWdhdGlvbi5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdwcm9jZXNzaW5nJylcbiAgICAgIG5hdmlnYXRpb24uY2hpbGRyZW4oJzpsdCgnICsgaW5kZXggKyAnKTpub3QoLmNvbXBsZXRlKScpLmFkZENsYXNzKCdjb21wbGV0ZScpXG4gICAgICBuYXYuYWRkQ2xhc3MoJ3Byb2Nlc3NpbmcnKVxuXG4gICAgICBpZiAoIXdpemFyZC5pcygnW2RhdGEtc3RheS1jb21wbGV0ZT1cInRydWVcIl0nKSkge1xuICAgICAgICBuYXZpZ2F0aW9uLmNoaWxkcmVuKCc6Z3QoJyArIGluZGV4ICsgJykuY29tcGxldGUnKS5yZW1vdmVDbGFzcygnY29tcGxldGUnKVxuICAgICAgfVxuXG4gICAgICAvLyBBamF4IGxvYWRcbiAgICAgIGlmICh0YWIuaGFzRGF0YUF0dHIoJ3VybCcpKSB7XG4gICAgICAgIHRhYi5sb2FkKHRhYi5kYXRhKCd1cmwnKSlcbiAgICAgIH1cblxuICAgICAgLy8gQ2FsbGJhY2sgZm9yIHRhYlxuICAgICAgaWYgKHRhYi5oYXNEYXRhQXR0cignY2FsbGJhY2snKSkge1xuICAgICAgICBhcHAuY2FsbCh0YWIuZGF0YSgnY2FsbGJhY2snKSwgdGFiKVxuICAgICAgfVxuXG4gICAgICAvLyBDYWxsYmFjayBmb3Igd2l6YXJkXG4gICAgICAvL1xuICAgICAgaWYgKHdpemFyZC5oYXNEYXRhQXR0cignb24tdGFiLXNob3cnKSkge1xuICAgICAgICBhcHAuY2FsbCh3aXphcmQuZGF0YSgnb24tdGFiLXNob3cnKSwgdGFiLCBuYXZpZ2F0aW9uLCBpbmRleClcbiAgICAgIH1cblxuICAgIH0sXG5cblxuICAgIG9uRmluaXNoOiBmdW5jdGlvbiAodGFiLCBuYXZpZ2F0aW9uLCBpbmRleCkge1xuXG4gICAgICB2YXIgY3Vycl90YWIgPSB0YWJfcGFuZS5lcShpbmRleClcblxuICAgICAgLy8gVmFsaWRhdG9yXG4gICAgICB2YXIgdmFsaWRhdG9yX3NlbGVjdG9yID0gJ1tkYXRhLXByb3ZpZGU9XCJ2YWxpZGF0aW9uXCJdJ1xuICAgICAgdmFyIHZhbGlkYXRvciA9IGN1cnJfdGFiLmZpbmQodmFsaWRhdG9yX3NlbGVjdG9yKS5hZGRCYWNrKHZhbGlkYXRvcl9zZWxlY3RvcilcbiAgICAgIGlmICh2YWxpZGF0b3IubGVuZ3RoKSB7XG4gICAgICAgIHZhbGlkYXRvci52YWxpZGF0b3IoJ3ZhbGlkYXRlJylcbiAgICAgICAgaWYgKHZhbGlkYXRvci5maW5kKCcuaGFzLWVycm9yJykubGVuZ3RoKSB7XG4gICAgICAgICAgdmFsaWRhdG9yLmNsb3Nlc3QoJ2Zvcm0nKS5vbmUoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE5hdmlnYXRpb25cbiAgICAgIHZhciBuYXYgPSBuYXZfaXRlbS5lcShpbmRleClcbiAgICAgIG5hdi5hZGRDbGFzcygnY29tcGxldGUnKS5yZW1vdmVDbGFzcygncHJvY2Vzc2luZycpXG5cbiAgICAgIC8vIENhbGxiYWNrXG4gICAgICAvL1xuICAgICAgaWYgKHdpemFyZC5oYXNEYXRhQXR0cignb24tZmluaXNoJykpIHtcbiAgICAgICAgYXBwLmNhbGwod2l6YXJkLmRhdGEoJ29uLWZpbmlzaCcpLCB0YWIsIG5hdmlnYXRpb24sIGluZGV4KVxuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgfSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLXdpemFyZC9ib290c3RyYXAtd2l6YXJkLm1pbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzExLzIwMTkgMTk6MzhcblxuLyohXG4gKiBqUXVlcnkgdHdpdHRlciBib290c3RyYXAgd2l6YXJkIHBsdWdpblxuICogRXhhbXBsZXMgYW5kIGRvY3VtZW50YXRpb24gYXQ6IGh0dHA6Ly9naXRodWIuY29tL1ZpbmNlRy90d2l0dGVyLWJvb3RzdHJhcC13aXphcmRcbiAqIHZlcnNpb24gMS4wXG4gKiBSZXF1aXJlcyBqUXVlcnkgdjEuMy4yIG9yIGxhdGVyXG4gKiBTdXBwb3J0cyBCb290c3RyYXAgMi4yLngsIDIuMy54LCAzLjBcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBhbmQgR1BMIGxpY2Vuc2VzOlxuICogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwuaHRtbFxuICogQXV0aG9yczogVmFkaW0gVmluY2VudCBHYWJyaWVsIChodHRwOi8vdmFkaW1nLmNvbSksIEphc29uIEdpbGwgKHd3dy5naWxsdW1pbmF0ZS5jb20pXG4gKi9cbiFmdW5jdGlvbihuKXt2YXIgdD1mdW5jdGlvbih0LGkpe3ZhciB0PW4odCksZT10aGlzLG89J2xpOmhhcyhbZGF0YS10b2dnbGU9XCJ0YWJcIl0pJyxhPVtdLHI9bi5leHRlbmQoe30sbi5mbi5ib290c3RyYXBXaXphcmQuZGVmYXVsdHMsaSkscz1udWxsLGw9bnVsbDt0aGlzLnJlYmluZENsaWNrPWZ1bmN0aW9uKG4sdCl7bi51bmJpbmQoXCJjbGlja1wiLHQpLmJpbmQoXCJjbGlja1wiLHQpfSx0aGlzLmZpeE5hdmlnYXRpb25CdXR0b25zPWZ1bmN0aW9uKCl7cmV0dXJuIHMubGVuZ3RofHwobC5maW5kKFwiYTpmaXJzdFwiKS50YWIoXCJzaG93XCIpLHM9bC5maW5kKG8rXCI6Zmlyc3RcIikpLG4oci5wcmV2aW91c1NlbGVjdG9yLHQpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIixlLmZpcnN0SW5kZXgoKT49ZS5jdXJyZW50SW5kZXgoKSksbihyLm5leHRTZWxlY3Rvcix0KS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsZS5jdXJyZW50SW5kZXgoKT49ZS5uYXZpZ2F0aW9uTGVuZ3RoKCkpLG4oci5uZXh0U2VsZWN0b3IsdCkudG9nZ2xlQ2xhc3MoXCJoaWRkZW5cIixlLmN1cnJlbnRJbmRleCgpPj1lLm5hdmlnYXRpb25MZW5ndGgoKSYmbihyLmZpbmlzaFNlbGVjdG9yLHQpLmxlbmd0aD4wKSxuKHIubGFzdFNlbGVjdG9yLHQpLnRvZ2dsZUNsYXNzKFwiaGlkZGVuXCIsZS5jdXJyZW50SW5kZXgoKT49ZS5uYXZpZ2F0aW9uTGVuZ3RoKCkmJm4oci5maW5pc2hTZWxlY3Rvcix0KS5sZW5ndGg+MCksbihyLmZpbmlzaFNlbGVjdG9yLHQpLnRvZ2dsZUNsYXNzKFwiaGlkZGVuXCIsZS5jdXJyZW50SW5kZXgoKTxlLm5hdmlnYXRpb25MZW5ndGgoKSksbihyLmJhY2tTZWxlY3Rvcix0KS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsMD09YS5sZW5ndGgpLG4oci5iYWNrU2VsZWN0b3IsdCkudG9nZ2xlQ2xhc3MoXCJoaWRkZW5cIixlLmN1cnJlbnRJbmRleCgpPj1lLm5hdmlnYXRpb25MZW5ndGgoKSYmbihyLmZpbmlzaFNlbGVjdG9yLHQpLmxlbmd0aD4wKSxlLnJlYmluZENsaWNrKG4oci5uZXh0U2VsZWN0b3IsdCksZS5uZXh0KSxlLnJlYmluZENsaWNrKG4oci5wcmV2aW91c1NlbGVjdG9yLHQpLGUucHJldmlvdXMpLGUucmViaW5kQ2xpY2sobihyLmxhc3RTZWxlY3Rvcix0KSxlLmxhc3QpLGUucmViaW5kQ2xpY2sobihyLmZpcnN0U2VsZWN0b3IsdCksZS5maXJzdCksZS5yZWJpbmRDbGljayhuKHIuZmluaXNoU2VsZWN0b3IsdCksZS5maW5pc2gpLGUucmViaW5kQ2xpY2sobihyLmJhY2tTZWxlY3Rvcix0KSxlLmJhY2spLHIub25UYWJTaG93JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLm9uVGFiU2hvdyYmci5vblRhYlNob3cocyxsLGUuY3VycmVudEluZGV4KCkpPT09ITE/ITE6dm9pZCAwfSx0aGlzLm5leHQ9ZnVuY3Rpb24obil7aWYodC5oYXNDbGFzcyhcImxhc3RcIikpcmV0dXJuITE7aWYoci5vbk5leHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIub25OZXh0JiZyLm9uTmV4dChzLGwsZS5uZXh0SW5kZXgoKSk9PT0hMSlyZXR1cm4hMTt2YXIgaT1lLmN1cnJlbnRJbmRleCgpLGQ9ZS5uZXh0SW5kZXgoKTtkPmUubmF2aWdhdGlvbkxlbmd0aCgpfHwoYS5wdXNoKGkpLGwuZmluZChvKyhyLndpdGhWaXNpYmxlP1wiOnZpc2libGVcIjpcIlwiKStcIjplcShcIitkK1wiKSBhXCIpLnRhYihcInNob3dcIikpfSx0aGlzLnByZXZpb3VzPWZ1bmN0aW9uKG4pe2lmKHQuaGFzQ2xhc3MoXCJmaXJzdFwiKSlyZXR1cm4hMTtpZihyLm9uUHJldmlvdXMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIub25QcmV2aW91cyYmci5vblByZXZpb3VzKHMsbCxlLnByZXZpb3VzSW5kZXgoKSk9PT0hMSlyZXR1cm4hMTt2YXIgaT1lLmN1cnJlbnRJbmRleCgpLGQ9ZS5wcmV2aW91c0luZGV4KCk7MD5kfHwoYS5wdXNoKGkpLGwuZmluZChvKyhyLndpdGhWaXNpYmxlP1wiOnZpc2libGVcIjpcIlwiKStcIjplcShcIitkK1wiKSBhXCIpLnRhYihcInNob3dcIikpfSx0aGlzLmZpcnN0PWZ1bmN0aW9uKG4pe3JldHVybiByLm9uRmlyc3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIub25GaXJzdCYmci5vbkZpcnN0KHMsbCxlLmZpcnN0SW5kZXgoKSk9PT0hMT8hMTp0Lmhhc0NsYXNzKFwiZGlzYWJsZWRcIik/ITE6KGEucHVzaChlLmN1cnJlbnRJbmRleCgpKSx2b2lkIGwuZmluZChvK1wiOmVxKDApIGFcIikudGFiKFwic2hvd1wiKSl9LHRoaXMubGFzdD1mdW5jdGlvbihuKXtyZXR1cm4gci5vbkxhc3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIub25MYXN0JiZyLm9uTGFzdChzLGwsZS5sYXN0SW5kZXgoKSk9PT0hMT8hMTp0Lmhhc0NsYXNzKFwiZGlzYWJsZWRcIik/ITE6KGEucHVzaChlLmN1cnJlbnRJbmRleCgpKSx2b2lkIGwuZmluZChvK1wiOmVxKFwiK2UubmF2aWdhdGlvbkxlbmd0aCgpK1wiKSBhXCIpLnRhYihcInNob3dcIikpfSx0aGlzLmZpbmlzaD1mdW5jdGlvbihuKXtyLm9uRmluaXNoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLm9uRmluaXNoJiZyLm9uRmluaXNoKHMsbCxlLmxhc3RJbmRleCgpKX0sdGhpcy5iYWNrPWZ1bmN0aW9uKCl7aWYoMD09YS5sZW5ndGgpcmV0dXJuIG51bGw7dmFyIG49YS5wb3AoKTtyZXR1cm4gci5vbkJhY2smJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIub25CYWNrJiZyLm9uQmFjayhzLGwsbik9PT0hMT8oYS5wdXNoKG4pLCExKTp2b2lkIHQuZmluZChvK1wiOmVxKFwiK24rXCIpIGFcIikudGFiKFwic2hvd1wiKX0sdGhpcy5jdXJyZW50SW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gbC5maW5kKG8pLmluZGV4KHMpfSx0aGlzLmZpcnN0SW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gMH0sdGhpcy5sYXN0SW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gZS5uYXZpZ2F0aW9uTGVuZ3RoKCl9LHRoaXMuZ2V0SW5kZXg9ZnVuY3Rpb24obil7cmV0dXJuIGwuZmluZChvKS5pbmRleChuKX0sdGhpcy5uZXh0SW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gbC5maW5kKG8pLmluZGV4KHMpKzF9LHRoaXMucHJldmlvdXNJbmRleD1mdW5jdGlvbigpe3JldHVybiBsLmZpbmQobykuaW5kZXgocyktMX0sdGhpcy5uYXZpZ2F0aW9uTGVuZ3RoPWZ1bmN0aW9uKCl7cmV0dXJuIGwuZmluZChvKS5sZW5ndGgtMX0sdGhpcy5hY3RpdmVUYWI9ZnVuY3Rpb24oKXtyZXR1cm4gc30sdGhpcy5uZXh0VGFiPWZ1bmN0aW9uKCl7cmV0dXJuIGwuZmluZChvK1wiOmVxKFwiKyhlLmN1cnJlbnRJbmRleCgpKzEpK1wiKVwiKS5sZW5ndGg/bC5maW5kKG8rXCI6ZXEoXCIrKGUuY3VycmVudEluZGV4KCkrMSkrXCIpXCIpOm51bGx9LHRoaXMucHJldmlvdXNUYWI9ZnVuY3Rpb24oKXtyZXR1cm4gZS5jdXJyZW50SW5kZXgoKTw9MD9udWxsOmwuZmluZChvK1wiOmVxKFwiK3BhcnNlSW50KGUuY3VycmVudEluZGV4KCktMSkrXCIpXCIpfSx0aGlzLnNob3c9ZnVuY3Rpb24obil7dmFyIGk9aXNOYU4obik/dC5maW5kKG8rXCIgYVtocmVmPSNcIituK1wiXVwiKTp0LmZpbmQobytcIjplcShcIituK1wiKSBhXCIpO2kubGVuZ3RoPjAmJihhLnB1c2goZS5jdXJyZW50SW5kZXgoKSksaS50YWIoXCJzaG93XCIpKX0sdGhpcy5kaXNhYmxlPWZ1bmN0aW9uKG4pe2wuZmluZChvK1wiOmVxKFwiK24rXCIpXCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIil9LHRoaXMuZW5hYmxlPWZ1bmN0aW9uKG4pe2wuZmluZChvK1wiOmVxKFwiK24rXCIpXCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIil9LHRoaXMuaGlkZT1mdW5jdGlvbihuKXtsLmZpbmQobytcIjplcShcIituK1wiKVwiKS5oaWRlKCl9LHRoaXMuZGlzcGxheT1mdW5jdGlvbihuKXtsLmZpbmQobytcIjplcShcIituK1wiKVwiKS5zaG93KCl9LHRoaXMucmVtb3ZlPWZ1bmN0aW9uKHQpe3ZhciBpPXRbMF0sZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgdFsxXT90WzFdOiExLGE9bC5maW5kKG8rXCI6ZXEoXCIraStcIilcIik7aWYoZSl7dmFyIHI9YS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtuKHIpLnJlbW92ZSgpfWEucmVtb3ZlKCl9O3ZhciBkPWZ1bmN0aW9uKHQpe3ZhciBpPWwuZmluZChvKSxhPWkuaW5kZXgobih0LmN1cnJlbnRUYXJnZXQpLnBhcmVudChvKSksZD1uKGlbYV0pO3JldHVybiByLm9uVGFiQ2xpY2smJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIub25UYWJDbGljayYmci5vblRhYkNsaWNrKHMsbCxlLmN1cnJlbnRJbmRleCgpLGEsZCk9PT0hMT8hMTp2b2lkIDB9LHU9ZnVuY3Rpb24odCl7dmFyIGk9bih0LnRhcmdldCkucGFyZW50KCksYT1sLmZpbmQobykuaW5kZXgoaSk7cmV0dXJuIGkuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKT8hMTpyLm9uVGFiQ2hhbmdlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLm9uVGFiQ2hhbmdlJiZyLm9uVGFiQ2hhbmdlKHMsbCxlLmN1cnJlbnRJbmRleCgpLGEpPT09ITE/ITE6KHM9aSx2b2lkIGUuZml4TmF2aWdhdGlvbkJ1dHRvbnMoKSl9O3RoaXMucmVzZXRXaXphcmQ9ZnVuY3Rpb24oKXtuKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJyxsKS5vZmYoXCJjbGlja1wiLGQpLG4oJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLGwpLm9mZihcInNob3duIHNob3duLmJzLnRhYlwiLHUpLGw9dC5maW5kKFwidWw6Zmlyc3RcIix0KSxzPWwuZmluZChvK1wiLmFjdGl2ZVwiLHQpLG4oJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLGwpLm9uKFwiY2xpY2tcIixkKSxuKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJyxsKS5vbihcInNob3duIHNob3duLmJzLnRhYlwiLHUpLGUuZml4TmF2aWdhdGlvbkJ1dHRvbnMoKX0sbD10LmZpbmQoXCJ1bDpmaXJzdFwiLHQpLHM9bC5maW5kKG8rXCIuYWN0aXZlXCIsdCksbC5oYXNDbGFzcyhyLnRhYkNsYXNzKXx8bC5hZGRDbGFzcyhyLnRhYkNsYXNzKSxyLm9uSW5pdCYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci5vbkluaXQmJnIub25Jbml0KHMsbCwwKSxyLm9uU2hvdyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci5vblNob3cmJnIub25TaG93KHMsbCxlLm5leHRJbmRleCgpKSxuKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJyxsKS5vbihcImNsaWNrXCIsZCksbignYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScsbCkub24oXCJzaG93biBzaG93bi5icy50YWJcIix1KX07bi5mbi5ib290c3RyYXBXaXphcmQ9ZnVuY3Rpb24oaSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm4gMT09PWUubGVuZ3RoJiZlLnRvU3RyaW5nKCksdGhpcy5kYXRhKFwiYm9vdHN0cmFwV2l6YXJkXCIpW2ldKGUpfXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7dmFyIG89bih0aGlzKTtpZighby5kYXRhKFwiYm9vdHN0cmFwV2l6YXJkXCIpKXt2YXIgYT1uZXcgdChvLGkpO28uZGF0YShcImJvb3RzdHJhcFdpemFyZFwiLGEpLGEuZml4TmF2aWdhdGlvbkJ1dHRvbnMoKX19KX0sbi5mbi5ib290c3RyYXBXaXphcmQuZGVmYXVsdHM9e3dpdGhWaXNpYmxlOiEwLHRhYkNsYXNzOlwibmF2IG5hdi1waWxsc1wiLG5leHRTZWxlY3RvcjpcIi53aXphcmQgbGkubmV4dFwiLHByZXZpb3VzU2VsZWN0b3I6XCIud2l6YXJkIGxpLnByZXZpb3VzXCIsZmlyc3RTZWxlY3RvcjpcIi53aXphcmQgbGkuZmlyc3RcIixsYXN0U2VsZWN0b3I6XCIud2l6YXJkIGxpLmxhc3RcIixmaW5pc2hTZWxlY3RvcjpcIi53aXphcmQgbGkuZmluaXNoXCIsYmFja1NlbGVjdG9yOlwiLndpemFyZCBsaS5iYWNrXCIsb25TaG93Om51bGwsb25Jbml0Om51bGwsb25OZXh0Om51bGwsb25QcmV2aW91czpudWxsLG9uTGFzdDpudWxsLG9uRmlyc3Q6bnVsbCxvbkZpbmlzaDpudWxsLG9uQmFjazpudWxsLG9uVGFiQ2hhbmdlOm51bGwsb25UYWJDbGljazpudWxsLG9uVGFiU2hvdzpudWxsfX0oalF1ZXJ5KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIShhcmdzTGVuZ3RoIGluIGZhY3RvcmllcykpIHtcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZmFjdG9yaWVzW2FyZ3NMZW5ndGhdID0gRnVuY3Rpb24oJ0MsYScsICdyZXR1cm4gbmV3IEMoJyArIGxpc3Quam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gIHZhciBwYXJ0QXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKSB7XG4gICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoZm4ucHJvdG90eXBlKSkgYm91bmRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG4gIHJldHVybiBib3VuZEZ1bmN0aW9uO1xufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICByZXR1cm4gIVN0cmluZyhTeW1ib2woKSk7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBoZXggPSAvXlsrLV0/MFtYeF0vO1xudmFyIEZPUkNFRCA9ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgKi9cbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBkb2N1bWVudC5kb21haW4gJiYgbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IGFjdGl2ZVhEb2N1bWVudCA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpO1xuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmICFTeW1ib2wuc2hhbVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXMoV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIGlmIChOQVRJVkVfU1lNQk9MICYmIGhhcyhTeW1ib2wsIG5hbWUpKSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBTeW1ib2xbbmFtZV07XG4gICAgZWxzZSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kJyk7XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuJCh7IHRhcmdldDogJ0Z1bmN0aW9uJywgcHJvdG86IHRydWUgfSwge1xuICBiaW5kOiBiaW5kXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9