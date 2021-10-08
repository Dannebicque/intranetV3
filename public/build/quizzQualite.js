(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["quizzQualite"],{

/***/ "./assets/js/pages/quizzQualite.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/quizzQualite.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wizard */ "./assets/js/wizard.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
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

/***/ }),

/***/ "./assets/js/wizard.js":
/*!*****************************!*\
  !*** ./assets/js/wizard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_bootstrap_wizard_bootstrap_wizard_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/bootstrap-wizard/bootstrap-wizard.min */ "./assets/vendor/bootstrap-wizard/bootstrap-wizard.min.js");
/* harmony import */ var _vendor_bootstrap_wizard_bootstrap_wizard_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_wizard_bootstrap_wizard_min__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/wizard.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/06/2021 08:24
 // import $ from 'jquery'

$('[data-provide~="wizard"]').each(function () {
  initWizard($(this));
});

function initWizard(obj) {
  if (!$.fn.bootstrapWizard) {
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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_s-342931"], () => (__webpack_exec__("./assets/js/pages/quizzQualite.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL3F1aXp6UXVhbGl0ZS5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3dpemFyZC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtd2l6YXJkL2Jvb3RzdHJhcC13aXphcmQubWluLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInF1ZXN0aW9ubmFpcmUiLCJ2YWwiLCJ0eXBlUXVlc3Rpb25uYWlyZSIsImRhdGEiLCJtZXRob2QiLCJjbGVSZXBvbnNlIiwiYXR0ciIsImNsZVF1ZXN0aW9uIiwiZXR1ZGlhbnQiLCJzdWNjZXNzIiwidmFsdWUiLCJlYWNoIiwiaW5pdFdpemFyZCIsIm9iaiIsImZuIiwiYm9vdHN0cmFwV2l6YXJkIiwid2l6YXJkIiwibmF2X2l0ZW0iLCJmaW5kIiwidGFiX3BhbmUiLCJ0YWJDbGFzcyIsIm5leHRTZWxlY3RvciIsInByZXZpb3VzU2VsZWN0b3IiLCJmaXJzdFNlbGVjdG9yIiwibGFzdFNlbGVjdG9yIiwiZmluaXNoU2VsZWN0b3IiLCJiYWNrU2VsZWN0b3IiLCJvblRhYkNsaWNrIiwidGFiIiwibmF2aWdhdGlvbiIsImluZGV4IiwiaXMiLCJvbk5leHQiLCJjdXJyZW50X2luZGV4IiwiY3Vycl90YWIiLCJlcSIsInZhbGlkYXRvcl9zZWxlY3RvciIsInZhbGlkYXRvciIsImFkZEJhY2siLCJsZW5ndGgiLCJoYXNEYXRhQXR0ciIsImFwcCIsImNhbGwiLCJvbkJhY2siLCJvblByZXZpb3VzIiwib25UYWJTaG93IiwibmF2IiwibWF4IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNoaWxkcmVuIiwibG9hZCIsIm9uRmluaXNoIiwiY2xvc2VzdCIsIm9uZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm4iLCJ0IiwiaSIsIm8iLCJhIiwiciIsImV4dGVuZCIsImRlZmF1bHRzIiwicyIsImwiLCJyZWJpbmRDbGljayIsInVuYmluZCIsImJpbmQiLCJmaXhOYXZpZ2F0aW9uQnV0dG9ucyIsInRvZ2dsZUNsYXNzIiwiZmlyc3RJbmRleCIsImN1cnJlbnRJbmRleCIsIm5hdmlnYXRpb25MZW5ndGgiLCJuZXh0IiwicHJldmlvdXMiLCJsYXN0IiwiZmlyc3QiLCJmaW5pc2giLCJiYWNrIiwiaGFzQ2xhc3MiLCJuZXh0SW5kZXgiLCJkIiwicHVzaCIsIndpdGhWaXNpYmxlIiwicHJldmlvdXNJbmRleCIsIm9uRmlyc3QiLCJvbkxhc3QiLCJsYXN0SW5kZXgiLCJwb3AiLCJnZXRJbmRleCIsImFjdGl2ZVRhYiIsIm5leHRUYWIiLCJwcmV2aW91c1RhYiIsInBhcnNlSW50Iiwic2hvdyIsImlzTmFOIiwiZGlzYWJsZSIsImVuYWJsZSIsImhpZGUiLCJkaXNwbGF5IiwicmVtb3ZlIiwiY3VycmVudFRhcmdldCIsInBhcmVudCIsInUiLCJ0YXJnZXQiLCJvblRhYkNoYW5nZSIsInJlc2V0V2l6YXJkIiwib2ZmIiwib25Jbml0Iiwib25TaG93IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImFyZ3VtZW50cyIsInRvU3RyaW5nIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsa0JBQXpCLEVBQTZDLFlBQVk7QUFDdkRGLEdBQUMsQ0FBQ0csSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLG1DQUFqQixFQUFzRDtBQUN6REMsbUJBQWEsRUFBRVAsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JRLEdBQXBCLEVBRDBDO0FBRXpEQyx1QkFBaUIsRUFBRVQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxJQUFSLENBQWEsbUJBQWI7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LFFBQXJCLEdBQThCO0FBQUNxQixlQUFXLEVBQUMsQ0FBQyxDQUFkO0FBQWdCakUsWUFBUSxFQUFDLGVBQXpCO0FBQXlDQyxnQkFBWSxFQUFDLGlCQUF0RDtBQUF3RUMsb0JBQWdCLEVBQUMscUJBQXpGO0FBQStHQyxpQkFBYSxFQUFDLGtCQUE3SDtBQUFnSkMsZ0JBQVksRUFBQyxpQkFBN0o7QUFBK0tDLGtCQUFjLEVBQUMsbUJBQTlMO0FBQWtOQyxnQkFBWSxFQUFDLGlCQUEvTjtBQUFpUHFGLFVBQU0sRUFBQyxJQUF4UDtBQUE2UEQsVUFBTSxFQUFDLElBQXBRO0FBQXlROUUsVUFBTSxFQUFDLElBQWhSO0FBQXFSWSxjQUFVLEVBQUMsSUFBaFM7QUFBcVM0QyxVQUFNLEVBQUMsSUFBNVM7QUFBaVRELFdBQU8sRUFBQyxJQUF6VDtBQUE4VG5DLFlBQVEsRUFBQyxJQUF2VTtBQUE0VVQsVUFBTSxFQUFDLElBQW5WO0FBQXdWZ0UsZUFBVyxFQUFDLElBQXBXO0FBQXlXaEYsY0FBVSxFQUFDLElBQXBYO0FBQXlYa0IsYUFBUyxFQUFDO0FBQW5ZLEdBQTdWO0FBQXN1QixDQUFwOEssQ0FBcThLd0UsTUFBcjhLLENBQUQsQyIsImZpbGUiOiJxdWl6elF1YWxpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvcXVpenpRdWFsaXRlLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjQvMTEvMjAyMCAxMjo1NFxuXG5pbXBvcnQgJy4uL3dpemFyZCdcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcucXVlc3Rpb25RdWFsaXRlJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX2V0dWRpYW50X3F1YWxpdGVfYWpheF9yZXBvbnNlJywge1xuICAgICAgcXVlc3Rpb25uYWlyZTogJCgnI3F1ZXN0aW9ubmFpcmUnKS52YWwoKSxcbiAgICAgIHR5cGVRdWVzdGlvbm5haXJlOiAkKHRoaXMpLmRhdGEoJ3R5cGVxdWVzdGlvbm5haXJlJylcbiAgICB9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBjbGVSZXBvbnNlOiAkKHRoaXMpLmF0dHIoJ2lkJyksXG4gICAgICBjbGVRdWVzdGlvbjogJCh0aGlzKS5hdHRyKCduYW1lJyksXG4gICAgICBldHVkaWFudDogJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignYmx1cicsICcucXVlc3Rpb25RdWFsaXRlVGV4dEFyZWEnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZXR1ZGlhbnRfcXVhbGl0ZV9hamF4X3JlcG9uc2VfdHh0Jywge1xuICAgICAgcXVlc3Rpb25uYWlyZTogJCgnI3F1ZXN0aW9ubmFpcmUnKS52YWwoKSxcbiAgICAgIHR5cGVRdWVzdGlvbm5haXJlOiAkKHRoaXMpLmRhdGEoJ3R5cGVxdWVzdGlvbm5haXJlJylcbiAgICB9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBjbGVRdWVzdGlvbjogJCh0aGlzKS5hdHRyKCduYW1lJyksXG4gICAgICB2YWx1ZTogJCh0aGlzKS52YWwoKSxcbiAgICAgIGV0dWRpYW50OiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JylcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcblxuICAgIH1cbiAgfSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvd2l6YXJkLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDgvMDYvMjAyMSAwODoyNFxuXG5pbXBvcnQgJy4uL3ZlbmRvci9ib290c3RyYXAtd2l6YXJkL2Jvb3RzdHJhcC13aXphcmQubWluJ1xuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKCdbZGF0YS1wcm92aWRlfj1cIndpemFyZFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICBpbml0V2l6YXJkKCQodGhpcykpXG59KVxuXG5mdW5jdGlvbiBpbml0V2l6YXJkIChvYmopIHtcbiAgaWYgKCEkLmZuLmJvb3RzdHJhcFdpemFyZCkge1xuICAgIHJldHVyblxuICB9XG5cblxuICB2YXIgd2l6YXJkID0gb2JqXG4gIHZhciBuYXZfaXRlbSA9IG9iai5maW5kKCcubmF2LWl0ZW0nKVxuICB2YXIgdGFiX3BhbmUgPSBvYmouZmluZCgnLnRhYi1wYW5lJylcblxuICB3aXphcmQuYm9vdHN0cmFwV2l6YXJkKHtcbiAgICB0YWJDbGFzczogJ25hdi1wcm9jZXNzJyxcbiAgICBuZXh0U2VsZWN0b3I6ICdbZGF0YS13aXphcmQ9XCJuZXh0XCJdJyxcbiAgICBwcmV2aW91c1NlbGVjdG9yOiAnW2RhdGEtd2l6YXJkPVwicHJldlwiXScsXG4gICAgZmlyc3RTZWxlY3RvcjogJ1tkYXRhLXdpemFyZD1cImZpcnN0XCJdJyxcbiAgICBsYXN0U2VsZWN0b3I6ICdbZGF0YS13aXphcmQ9XCJsYXN0XCJdJyxcbiAgICBmaW5pc2hTZWxlY3RvcjogJ1tkYXRhLXdpemFyZD1cImZpbmlzaFwiXScsXG4gICAgYmFja1NlbGVjdG9yOiAnW2RhdGEtd2l6YXJkPVwiYmFja1wiXScsXG5cbiAgICBvblRhYkNsaWNrOiBmdW5jdGlvbiAodGFiLCBuYXZpZ2F0aW9uLCBpbmRleCkge1xuICAgICAgaWYgKCF3aXphcmQuaXMoJ1tkYXRhLW5hdmlnYXRlYWJsZT1cInRydWVcIl0nKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBvbk5leHQ6IGZ1bmN0aW9uICh0YWIsIG5hdmlnYXRpb24sIGluZGV4KSB7XG5cbiAgICAgIHZhciBjdXJyZW50X2luZGV4ID0gd2l6YXJkLmJvb3RzdHJhcFdpemFyZCgnY3VycmVudEluZGV4JylcbiAgICAgIHZhciBjdXJyX3RhYiA9IHRhYl9wYW5lLmVxKGN1cnJlbnRfaW5kZXgpXG4gICAgICB2YXIgdGFiID0gdGFiX3BhbmUuZXEoaW5kZXgpXG5cbiAgICAgIC8vIFZhbGlkYXRvclxuICAgICAgdmFyIHZhbGlkYXRvcl9zZWxlY3RvciA9ICdbZGF0YS1wcm92aWRlPVwidmFsaWRhdGlvblwiXSdcbiAgICAgIHZhciB2YWxpZGF0b3IgPSBjdXJyX3RhYi5maW5kKHZhbGlkYXRvcl9zZWxlY3RvcikuYWRkQmFjayh2YWxpZGF0b3Jfc2VsZWN0b3IpXG4gICAgICBpZiAodmFsaWRhdG9yLmxlbmd0aCkge1xuICAgICAgICB2YWxpZGF0b3IudmFsaWRhdG9yKCd2YWxpZGF0ZScpXG4gICAgICAgIGlmICh2YWxpZGF0b3IuZmluZCgnLmhhcy1lcnJvcicpLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgIC8vXG4gICAgICBpZiAod2l6YXJkLmhhc0RhdGFBdHRyKCdvbi1uZXh0JykpIHtcbiAgICAgICAgYXBwLmNhbGwod2l6YXJkLmRhdGEoJ29uLW5leHQnKSwgdGFiLCBuYXZpZ2F0aW9uLCBpbmRleClcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBvbkJhY2s6IGZ1bmN0aW9uICh0YWIsIG5hdmlnYXRpb24sIGluZGV4KSB7XG5cbiAgICAgIC8vIENhbGxiYWNrXG4gICAgICAvL1xuICAgICAgaWYgKHdpemFyZC5oYXNEYXRhQXR0cignb24tYmFjaycpKSB7XG4gICAgICAgIGFwcC5jYWxsKHdpemFyZC5kYXRhKCdvbi1iYWNrJyksIHRhYiwgbmF2aWdhdGlvbiwgaW5kZXgpXG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgb25QcmV2aW91czogZnVuY3Rpb24gKHRhYiwgbmF2aWdhdGlvbiwgaW5kZXgpIHtcblxuICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgIC8vXG4gICAgICBpZiAod2l6YXJkLmhhc0RhdGFBdHRyKCdvbi1wcmV2aW91cycpKSB7XG4gICAgICAgIGFwcC5jYWxsKHdpemFyZC5kYXRhKCdvbi1wcmV2aW91cycpLCB0YWIsIG5hdmlnYXRpb24sIGluZGV4KVxuICAgICAgfVxuICAgIH0sXG5cblxuICAgIG9uVGFiU2hvdzogZnVuY3Rpb24gKHRhYiwgbmF2aWdhdGlvbiwgaW5kZXgpIHtcblxuICAgICAgdmFyIHRhYiA9IHRhYl9wYW5lLmVxKGluZGV4KVxuICAgICAgdmFyIG5hdiA9IG5hdl9pdGVtLmVxKGluZGV4KVxuICAgICAgdmFyIG1heCA9IHdpemFyZC5ib290c3RyYXBXaXphcmQoJ25hdmlnYXRpb25MZW5ndGgnKVxuXG4gICAgICAvLyBGaW5pc2ggYnV0dG9uXG4gICAgICBpZiAoaW5kZXggPT0gbWF4KSB7XG4gICAgICAgIHdpemFyZC5maW5kKCdbZGF0YS13aXphcmQ9XCJuZXh0XCJdJykuYWRkQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICAgIHdpemFyZC5maW5kKCdbZGF0YS13aXphcmQ9XCJmaW5pc2hcIl0nKS5yZW1vdmVDbGFzcygnZC1ub25lJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpemFyZC5maW5kKCdbZGF0YS13aXphcmQ9XCJuZXh0XCJdJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICAgIHdpemFyZC5maW5kKCdbZGF0YS13aXphcmQ9XCJmaW5pc2hcIl0nKS5hZGRDbGFzcygnZC1ub25lJylcbiAgICAgIH1cblxuICAgICAgLy8gTmF2IGNsYXNzZXNcbiAgICAgIG5hdmlnYXRpb24uY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygncHJvY2Vzc2luZycpXG4gICAgICBuYXZpZ2F0aW9uLmNoaWxkcmVuKCc6bHQoJyArIGluZGV4ICsgJyk6bm90KC5jb21wbGV0ZSknKS5hZGRDbGFzcygnY29tcGxldGUnKVxuICAgICAgbmF2LmFkZENsYXNzKCdwcm9jZXNzaW5nJylcblxuICAgICAgaWYgKCF3aXphcmQuaXMoJ1tkYXRhLXN0YXktY29tcGxldGU9XCJ0cnVlXCJdJykpIHtcbiAgICAgICAgbmF2aWdhdGlvbi5jaGlsZHJlbignOmd0KCcgKyBpbmRleCArICcpLmNvbXBsZXRlJykucmVtb3ZlQ2xhc3MoJ2NvbXBsZXRlJylcbiAgICAgIH1cblxuICAgICAgLy8gQWpheCBsb2FkXG4gICAgICBpZiAodGFiLmhhc0RhdGFBdHRyKCd1cmwnKSkge1xuICAgICAgICB0YWIubG9hZCh0YWIuZGF0YSgndXJsJykpXG4gICAgICB9XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciB0YWJcbiAgICAgIGlmICh0YWIuaGFzRGF0YUF0dHIoJ2NhbGxiYWNrJykpIHtcbiAgICAgICAgYXBwLmNhbGwodGFiLmRhdGEoJ2NhbGxiYWNrJyksIHRhYilcbiAgICAgIH1cblxuICAgICAgLy8gQ2FsbGJhY2sgZm9yIHdpemFyZFxuICAgICAgLy9cbiAgICAgIGlmICh3aXphcmQuaGFzRGF0YUF0dHIoJ29uLXRhYi1zaG93JykpIHtcbiAgICAgICAgYXBwLmNhbGwod2l6YXJkLmRhdGEoJ29uLXRhYi1zaG93JyksIHRhYiwgbmF2aWdhdGlvbiwgaW5kZXgpXG4gICAgICB9XG5cbiAgICB9LFxuXG5cbiAgICBvbkZpbmlzaDogZnVuY3Rpb24gKHRhYiwgbmF2aWdhdGlvbiwgaW5kZXgpIHtcblxuICAgICAgdmFyIGN1cnJfdGFiID0gdGFiX3BhbmUuZXEoaW5kZXgpXG5cbiAgICAgIC8vIFZhbGlkYXRvclxuICAgICAgdmFyIHZhbGlkYXRvcl9zZWxlY3RvciA9ICdbZGF0YS1wcm92aWRlPVwidmFsaWRhdGlvblwiXSdcbiAgICAgIHZhciB2YWxpZGF0b3IgPSBjdXJyX3RhYi5maW5kKHZhbGlkYXRvcl9zZWxlY3RvcikuYWRkQmFjayh2YWxpZGF0b3Jfc2VsZWN0b3IpXG4gICAgICBpZiAodmFsaWRhdG9yLmxlbmd0aCkge1xuICAgICAgICB2YWxpZGF0b3IudmFsaWRhdG9yKCd2YWxpZGF0ZScpXG4gICAgICAgIGlmICh2YWxpZGF0b3IuZmluZCgnLmhhcy1lcnJvcicpLmxlbmd0aCkge1xuICAgICAgICAgIHZhbGlkYXRvci5jbG9zZXN0KCdmb3JtJykub25lKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBOYXZpZ2F0aW9uXG4gICAgICB2YXIgbmF2ID0gbmF2X2l0ZW0uZXEoaW5kZXgpXG4gICAgICBuYXYuYWRkQ2xhc3MoJ2NvbXBsZXRlJykucmVtb3ZlQ2xhc3MoJ3Byb2Nlc3NpbmcnKVxuXG4gICAgICAvLyBDYWxsYmFja1xuICAgICAgLy9cbiAgICAgIGlmICh3aXphcmQuaGFzRGF0YUF0dHIoJ29uLWZpbmlzaCcpKSB7XG4gICAgICAgIGFwcC5jYWxsKHdpemFyZC5kYXRhKCdvbi1maW5pc2gnKSwgdGFiLCBuYXZpZ2F0aW9uLCBpbmRleClcbiAgICAgIH1cblxuICAgIH1cblxuXG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC13aXphcmQvYm9vdHN0cmFwLXdpemFyZC5taW4uanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyOC8xMS8yMDE5IDE5OjM4XG5cbi8qIVxuICogalF1ZXJ5IHR3aXR0ZXIgYm9vdHN0cmFwIHdpemFyZCBwbHVnaW5cbiAqIEV4YW1wbGVzIGFuZCBkb2N1bWVudGF0aW9uIGF0OiBodHRwOi8vZ2l0aHViLmNvbS9WaW5jZUcvdHdpdHRlci1ib290c3RyYXAtd2l6YXJkXG4gKiB2ZXJzaW9uIDEuMFxuICogUmVxdWlyZXMgalF1ZXJ5IHYxLjMuMiBvciBsYXRlclxuICogU3VwcG9ydHMgQm9vdHN0cmFwIDIuMi54LCAyLjMueCwgMy4wXG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgYW5kIEdQTCBsaWNlbnNlczpcbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLmh0bWxcbiAqIEF1dGhvcnM6IFZhZGltIFZpbmNlbnQgR2FicmllbCAoaHR0cDovL3ZhZGltZy5jb20pLCBKYXNvbiBHaWxsICh3d3cuZ2lsbHVtaW5hdGUuY29tKVxuICovXG4hZnVuY3Rpb24obil7dmFyIHQ9ZnVuY3Rpb24odCxpKXt2YXIgdD1uKHQpLGU9dGhpcyxvPSdsaTpoYXMoW2RhdGEtdG9nZ2xlPVwidGFiXCJdKScsYT1bXSxyPW4uZXh0ZW5kKHt9LG4uZm4uYm9vdHN0cmFwV2l6YXJkLmRlZmF1bHRzLGkpLHM9bnVsbCxsPW51bGw7dGhpcy5yZWJpbmRDbGljaz1mdW5jdGlvbihuLHQpe24udW5iaW5kKFwiY2xpY2tcIix0KS5iaW5kKFwiY2xpY2tcIix0KX0sdGhpcy5maXhOYXZpZ2F0aW9uQnV0dG9ucz1mdW5jdGlvbigpe3JldHVybiBzLmxlbmd0aHx8KGwuZmluZChcImE6Zmlyc3RcIikudGFiKFwic2hvd1wiKSxzPWwuZmluZChvK1wiOmZpcnN0XCIpKSxuKHIucHJldmlvdXNTZWxlY3Rvcix0KS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsZS5maXJzdEluZGV4KCk+PWUuY3VycmVudEluZGV4KCkpLG4oci5uZXh0U2VsZWN0b3IsdCkudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLGUuY3VycmVudEluZGV4KCk+PWUubmF2aWdhdGlvbkxlbmd0aCgpKSxuKHIubmV4dFNlbGVjdG9yLHQpLnRvZ2dsZUNsYXNzKFwiaGlkZGVuXCIsZS5jdXJyZW50SW5kZXgoKT49ZS5uYXZpZ2F0aW9uTGVuZ3RoKCkmJm4oci5maW5pc2hTZWxlY3Rvcix0KS5sZW5ndGg+MCksbihyLmxhc3RTZWxlY3Rvcix0KS50b2dnbGVDbGFzcyhcImhpZGRlblwiLGUuY3VycmVudEluZGV4KCk+PWUubmF2aWdhdGlvbkxlbmd0aCgpJiZuKHIuZmluaXNoU2VsZWN0b3IsdCkubGVuZ3RoPjApLG4oci5maW5pc2hTZWxlY3Rvcix0KS50b2dnbGVDbGFzcyhcImhpZGRlblwiLGUuY3VycmVudEluZGV4KCk8ZS5uYXZpZ2F0aW9uTGVuZ3RoKCkpLG4oci5iYWNrU2VsZWN0b3IsdCkudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLDA9PWEubGVuZ3RoKSxuKHIuYmFja1NlbGVjdG9yLHQpLnRvZ2dsZUNsYXNzKFwiaGlkZGVuXCIsZS5jdXJyZW50SW5kZXgoKT49ZS5uYXZpZ2F0aW9uTGVuZ3RoKCkmJm4oci5maW5pc2hTZWxlY3Rvcix0KS5sZW5ndGg+MCksZS5yZWJpbmRDbGljayhuKHIubmV4dFNlbGVjdG9yLHQpLGUubmV4dCksZS5yZWJpbmRDbGljayhuKHIucHJldmlvdXNTZWxlY3Rvcix0KSxlLnByZXZpb3VzKSxlLnJlYmluZENsaWNrKG4oci5sYXN0U2VsZWN0b3IsdCksZS5sYXN0KSxlLnJlYmluZENsaWNrKG4oci5maXJzdFNlbGVjdG9yLHQpLGUuZmlyc3QpLGUucmViaW5kQ2xpY2sobihyLmZpbmlzaFNlbGVjdG9yLHQpLGUuZmluaXNoKSxlLnJlYmluZENsaWNrKG4oci5iYWNrU2VsZWN0b3IsdCksZS5iYWNrKSxyLm9uVGFiU2hvdyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci5vblRhYlNob3cmJnIub25UYWJTaG93KHMsbCxlLmN1cnJlbnRJbmRleCgpKT09PSExPyExOnZvaWQgMH0sdGhpcy5uZXh0PWZ1bmN0aW9uKG4pe2lmKHQuaGFzQ2xhc3MoXCJsYXN0XCIpKXJldHVybiExO2lmKHIub25OZXh0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLm9uTmV4dCYmci5vbk5leHQocyxsLGUubmV4dEluZGV4KCkpPT09ITEpcmV0dXJuITE7dmFyIGk9ZS5jdXJyZW50SW5kZXgoKSxkPWUubmV4dEluZGV4KCk7ZD5lLm5hdmlnYXRpb25MZW5ndGgoKXx8KGEucHVzaChpKSxsLmZpbmQobysoci53aXRoVmlzaWJsZT9cIjp2aXNpYmxlXCI6XCJcIikrXCI6ZXEoXCIrZCtcIikgYVwiKS50YWIoXCJzaG93XCIpKX0sdGhpcy5wcmV2aW91cz1mdW5jdGlvbihuKXtpZih0Lmhhc0NsYXNzKFwiZmlyc3RcIikpcmV0dXJuITE7aWYoci5vblByZXZpb3VzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLm9uUHJldmlvdXMmJnIub25QcmV2aW91cyhzLGwsZS5wcmV2aW91c0luZGV4KCkpPT09ITEpcmV0dXJuITE7dmFyIGk9ZS5jdXJyZW50SW5kZXgoKSxkPWUucHJldmlvdXNJbmRleCgpOzA+ZHx8KGEucHVzaChpKSxsLmZpbmQobysoci53aXRoVmlzaWJsZT9cIjp2aXNpYmxlXCI6XCJcIikrXCI6ZXEoXCIrZCtcIikgYVwiKS50YWIoXCJzaG93XCIpKX0sdGhpcy5maXJzdD1mdW5jdGlvbihuKXtyZXR1cm4gci5vbkZpcnN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLm9uRmlyc3QmJnIub25GaXJzdChzLGwsZS5maXJzdEluZGV4KCkpPT09ITE/ITE6dC5oYXNDbGFzcyhcImRpc2FibGVkXCIpPyExOihhLnB1c2goZS5jdXJyZW50SW5kZXgoKSksdm9pZCBsLmZpbmQobytcIjplcSgwKSBhXCIpLnRhYihcInNob3dcIikpfSx0aGlzLmxhc3Q9ZnVuY3Rpb24obil7cmV0dXJuIHIub25MYXN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLm9uTGFzdCYmci5vbkxhc3QocyxsLGUubGFzdEluZGV4KCkpPT09ITE/ITE6dC5oYXNDbGFzcyhcImRpc2FibGVkXCIpPyExOihhLnB1c2goZS5jdXJyZW50SW5kZXgoKSksdm9pZCBsLmZpbmQobytcIjplcShcIitlLm5hdmlnYXRpb25MZW5ndGgoKStcIikgYVwiKS50YWIoXCJzaG93XCIpKX0sdGhpcy5maW5pc2g9ZnVuY3Rpb24obil7ci5vbkZpbmlzaCYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci5vbkZpbmlzaCYmci5vbkZpbmlzaChzLGwsZS5sYXN0SW5kZXgoKSl9LHRoaXMuYmFjaz1mdW5jdGlvbigpe2lmKDA9PWEubGVuZ3RoKXJldHVybiBudWxsO3ZhciBuPWEucG9wKCk7cmV0dXJuIHIub25CYWNrJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLm9uQmFjayYmci5vbkJhY2socyxsLG4pPT09ITE/KGEucHVzaChuKSwhMSk6dm9pZCB0LmZpbmQobytcIjplcShcIituK1wiKSBhXCIpLnRhYihcInNob3dcIil9LHRoaXMuY3VycmVudEluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIGwuZmluZChvKS5pbmRleChzKX0sdGhpcy5maXJzdEluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIDB9LHRoaXMubGFzdEluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIGUubmF2aWdhdGlvbkxlbmd0aCgpfSx0aGlzLmdldEluZGV4PWZ1bmN0aW9uKG4pe3JldHVybiBsLmZpbmQobykuaW5kZXgobil9LHRoaXMubmV4dEluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIGwuZmluZChvKS5pbmRleChzKSsxfSx0aGlzLnByZXZpb3VzSW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gbC5maW5kKG8pLmluZGV4KHMpLTF9LHRoaXMubmF2aWdhdGlvbkxlbmd0aD1mdW5jdGlvbigpe3JldHVybiBsLmZpbmQobykubGVuZ3RoLTF9LHRoaXMuYWN0aXZlVGFiPWZ1bmN0aW9uKCl7cmV0dXJuIHN9LHRoaXMubmV4dFRhYj1mdW5jdGlvbigpe3JldHVybiBsLmZpbmQobytcIjplcShcIisoZS5jdXJyZW50SW5kZXgoKSsxKStcIilcIikubGVuZ3RoP2wuZmluZChvK1wiOmVxKFwiKyhlLmN1cnJlbnRJbmRleCgpKzEpK1wiKVwiKTpudWxsfSx0aGlzLnByZXZpb3VzVGFiPWZ1bmN0aW9uKCl7cmV0dXJuIGUuY3VycmVudEluZGV4KCk8PTA/bnVsbDpsLmZpbmQobytcIjplcShcIitwYXJzZUludChlLmN1cnJlbnRJbmRleCgpLTEpK1wiKVwiKX0sdGhpcy5zaG93PWZ1bmN0aW9uKG4pe3ZhciBpPWlzTmFOKG4pP3QuZmluZChvK1wiIGFbaHJlZj0jXCIrbitcIl1cIik6dC5maW5kKG8rXCI6ZXEoXCIrbitcIikgYVwiKTtpLmxlbmd0aD4wJiYoYS5wdXNoKGUuY3VycmVudEluZGV4KCkpLGkudGFiKFwic2hvd1wiKSl9LHRoaXMuZGlzYWJsZT1mdW5jdGlvbihuKXtsLmZpbmQobytcIjplcShcIituK1wiKVwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpfSx0aGlzLmVuYWJsZT1mdW5jdGlvbihuKXtsLmZpbmQobytcIjplcShcIituK1wiKVwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpfSx0aGlzLmhpZGU9ZnVuY3Rpb24obil7bC5maW5kKG8rXCI6ZXEoXCIrbitcIilcIikuaGlkZSgpfSx0aGlzLmRpc3BsYXk9ZnVuY3Rpb24obil7bC5maW5kKG8rXCI6ZXEoXCIrbitcIilcIikuc2hvdygpfSx0aGlzLnJlbW92ZT1mdW5jdGlvbih0KXt2YXIgaT10WzBdLGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHRbMV0/dFsxXTohMSxhPWwuZmluZChvK1wiOmVxKFwiK2krXCIpXCIpO2lmKGUpe3ZhciByPWEuZmluZChcImFcIikuYXR0cihcImhyZWZcIik7bihyKS5yZW1vdmUoKX1hLnJlbW92ZSgpfTt2YXIgZD1mdW5jdGlvbih0KXt2YXIgaT1sLmZpbmQobyksYT1pLmluZGV4KG4odC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQobykpLGQ9bihpW2FdKTtyZXR1cm4gci5vblRhYkNsaWNrJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLm9uVGFiQ2xpY2smJnIub25UYWJDbGljayhzLGwsZS5jdXJyZW50SW5kZXgoKSxhLGQpPT09ITE/ITE6dm9pZCAwfSx1PWZ1bmN0aW9uKHQpe3ZhciBpPW4odC50YXJnZXQpLnBhcmVudCgpLGE9bC5maW5kKG8pLmluZGV4KGkpO3JldHVybiBpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIik/ITE6ci5vblRhYkNoYW5nZSYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci5vblRhYkNoYW5nZSYmci5vblRhYkNoYW5nZShzLGwsZS5jdXJyZW50SW5kZXgoKSxhKT09PSExPyExOihzPWksdm9pZCBlLmZpeE5hdmlnYXRpb25CdXR0b25zKCkpfTt0aGlzLnJlc2V0V2l6YXJkPWZ1bmN0aW9uKCl7bignYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScsbCkub2ZmKFwiY2xpY2tcIixkKSxuKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJyxsKS5vZmYoXCJzaG93biBzaG93bi5icy50YWJcIix1KSxsPXQuZmluZChcInVsOmZpcnN0XCIsdCkscz1sLmZpbmQobytcIi5hY3RpdmVcIix0KSxuKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJyxsKS5vbihcImNsaWNrXCIsZCksbignYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScsbCkub24oXCJzaG93biBzaG93bi5icy50YWJcIix1KSxlLmZpeE5hdmlnYXRpb25CdXR0b25zKCl9LGw9dC5maW5kKFwidWw6Zmlyc3RcIix0KSxzPWwuZmluZChvK1wiLmFjdGl2ZVwiLHQpLGwuaGFzQ2xhc3Moci50YWJDbGFzcyl8fGwuYWRkQ2xhc3Moci50YWJDbGFzcyksci5vbkluaXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIub25Jbml0JiZyLm9uSW5pdChzLGwsMCksci5vblNob3cmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIub25TaG93JiZyLm9uU2hvdyhzLGwsZS5uZXh0SW5kZXgoKSksbignYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScsbCkub24oXCJjbGlja1wiLGQpLG4oJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLGwpLm9uKFwic2hvd24gc2hvd24uYnMudGFiXCIsdSl9O24uZm4uYm9vdHN0cmFwV2l6YXJkPWZ1bmN0aW9uKGkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpKXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIDE9PT1lLmxlbmd0aCYmZS50b1N0cmluZygpLHRoaXMuZGF0YShcImJvb3RzdHJhcFdpemFyZFwiKVtpXShlKX1yZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBvPW4odGhpcyk7aWYoIW8uZGF0YShcImJvb3RzdHJhcFdpemFyZFwiKSl7dmFyIGE9bmV3IHQobyxpKTtvLmRhdGEoXCJib290c3RyYXBXaXphcmRcIixhKSxhLmZpeE5hdmlnYXRpb25CdXR0b25zKCl9fSl9LG4uZm4uYm9vdHN0cmFwV2l6YXJkLmRlZmF1bHRzPXt3aXRoVmlzaWJsZTohMCx0YWJDbGFzczpcIm5hdiBuYXYtcGlsbHNcIixuZXh0U2VsZWN0b3I6XCIud2l6YXJkIGxpLm5leHRcIixwcmV2aW91c1NlbGVjdG9yOlwiLndpemFyZCBsaS5wcmV2aW91c1wiLGZpcnN0U2VsZWN0b3I6XCIud2l6YXJkIGxpLmZpcnN0XCIsbGFzdFNlbGVjdG9yOlwiLndpemFyZCBsaS5sYXN0XCIsZmluaXNoU2VsZWN0b3I6XCIud2l6YXJkIGxpLmZpbmlzaFwiLGJhY2tTZWxlY3RvcjpcIi53aXphcmQgbGkuYmFja1wiLG9uU2hvdzpudWxsLG9uSW5pdDpudWxsLG9uTmV4dDpudWxsLG9uUHJldmlvdXM6bnVsbCxvbkxhc3Q6bnVsbCxvbkZpcnN0Om51bGwsb25GaW5pc2g6bnVsbCxvbkJhY2s6bnVsbCxvblRhYkNoYW5nZTpudWxsLG9uVGFiQ2xpY2s6bnVsbCxvblRhYlNob3c6bnVsbH19KGpRdWVyeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9