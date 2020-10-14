(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.stage"],{

/***/ "./assets/js/pages/adm.stage.js":
/*!**************************************!*\
  !*** ./assets/js/pages/adm.stage.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var _vendor_jquery_collection_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vendor/jquery.collection.min */ "./assets/vendor/jquery.collection.min.js");
/* harmony import */ var _vendor_jquery_collection_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_collection_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2020 08:04



jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('change', '.changetuteur', function () {
  jquery__WEBPACK_IMPORTED_MODULE_3___default.a.ajax({
    url: Routing.generate('administration_stage_etudiant_change_tuteur', {
      stageEtudiant: jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).data('stage'),
      tuteur: jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).val()
    }),
    success: function success() {
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Tuteur universitaire modifié !', 'success');
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(function () {
  var stagePeriodeSoutenances = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.selector-stagePeriodeSoutenances');

  if (stagePeriodeSoutenances.length > 0) {
    stagePeriodeSoutenances.collection();
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('click', '.stage_periode_stagePeriodeSoutenances-collection-action', function () {
      updateDatePicker();
    });
  }

  var stagePeriodeInterruptions = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.selector-stagePeriodeInterruptions');

  if (stagePeriodeInterruptions.length > 0) {
    stagePeriodeInterruptions.collection();
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('click', '.stage_periode_stagePeriodeInterruptions-collection-action', function () {
      updateDatePicker();
    });
  }
});

function updateDatePicker() {
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-provide~="datepicker"]').each(function () {
    var options = {
      multidateSeparator: ', ',
      language: 'fr',
      daysOfWeekHighlighted: '06'
    };

    if (jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).prop('tagName') != 'INPUT') {
      //si ce n'est pas un input => donc un date range
      options.inputs = [jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).find('input:first'), jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).find('input:last')];
    }

    jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).datepicker(options);
  });
}

/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/*! exports provided: addCallout, getDataOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCallout", function() { return addCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataOptions", function() { return getDataOptions; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2020 08:04



function readUrlMenu($url) {
  var $elt = $url.split('/');
  var $firstElt = 2;

  if ($elt[1] === 'index.php') {
    if ($elt.length > 1) {
      $firstElt = 3;
    }
  }

  if ($elt[$firstElt] === 'super-administration') {
    $firstElt = $firstElt + 1;
  }

  if ($elt[$elt.length - 1] === '') {
    $elt.pop();
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.menu-item').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#menu-' + $elt[$firstElt]).addClass('active');
} //colorise le bon menu


readUrlMenu(jquery__WEBPACK_IMPORTED_MODULE_5___default()(location).attr('pathname'));
sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary'
  },
  buttonsStyling: false
}); //pop up de confirmation de suppression

jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.supprimer', function (e) {
  e.preventDefault();
  var url = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('href');
  var csrf = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('csrf');
  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
    title: 'Confirmer la suppression ?',
    text: 'L\'opération ne pourra pas être annulée.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, je confirme',
    cancelButtonText: 'Non, Annuler',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-secondary'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.value) {
      jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
        url: url,
        type: 'DELETE',
        data: {
          _token: csrf
        },
        success: function success(id) {
          if (id.hasOwnProperty('redirect') && id.hasOwnProperty('url')) {
            document.location.href = id.url;
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('#ligne_' + id).closest('tr').remove();
            addCallout('Suppression effectuée avec succès', 'success');
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
              title: 'Supprimé!',
              text: 'L\'enregistrement a été supprimé.',
              icon: 'success',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secondary'
              },
              buttonsStyling: false
            });
          }
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Erreur lors de la suppression!',
            text: 'Merci de renouveler l\'opération',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          addCallout('Erreur lors de la tentative de suppression', 'danger');
        }
      });
    } else if ( // Read more about handling dismissals
    result.dismiss === 'cancel') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
        title: 'Cancelled',
        text: 'OK! Tout est comme avant !',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-secondary'
        },
        buttonsStyling: false
      });
    }
  });
});
function addCallout(message, label) {
  console.log('callout');
  var translate = new Array();
  translate['success'] = 'Succès';
  translate['danger'] = 'Erreur';
  translate['warning'] = 'Attention';
  var html = '<div class="callout callout-' + label + '" role="alert">\n' + '                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n' + '                        <span>&times;</span>\n' + '                    </button>\n' + '                    <h5>' + translate[label] + '</h5>\n' + '                    <p>' + message + '</p>\n' + '                </div>';
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#mainContent').prepend(html).slideDown('slow');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.callout').delay(5000).slideUp('slow');
} //Editable

var myEditInitialContent = '';
var type = 'text';
var EditOnLine = false;
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.myedit', function (e) {
  e.preventDefault();
  myEditInitialContent = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this);
  var html = '';
  EditOnLine = true;

  if (typeof jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') !== 'undefined') {
    type = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type');
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'select') {//todo: A finaliser
  } else {
    html = genereInput(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).replaceWith(html);
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').focus();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keyup', '#myedit-input', function (e) {
  if (e.keyCode === 13) {
    updateData();
  } else if (e.keyCode === 27) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-valide', function (e) {
  e.preventDefault();
  updateData();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keypress', function (e) {
  if (EditOnLine === true && e.which === 13) {
    e.preventDefault();
    updateData();
  }

  if (EditOnLine === true && e.which === 27) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-annule', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
});

function updateData() {
  var val = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').val();
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
    url: myEditInitialContent.attr('href'),
    data: {
      field: myEditInitialContent.data('field'),
      value: val,
      type: type
    },
    method: 'POST',
    success: function success() {
      myEditInitialContent.html(val);
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
      EditOnLine = false;
    }
  });
}

function genereInput($obj) {
  var $html = '<div id="myEdit-zone"><input type="text" value="' + $obj.html().trim() + '" id="myedit-input" />';
  $html = $html + '<button class="btn btn-square btn-sm btn-success btn-outline" id="myedit-valide"><i class="fas fa-check"></i></button>';
  $html = $html + '<button class="btn btn-square btn-sm btn-danger btn-outline" id="myedit-annule"><i class="fas fa-times"></i></button></div>';
  return $html;
}

jQuery.fn.dataAttr = function (name, def) {
  return jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].getAttribute('data-' + name) || def;
};

jQuery.fn.hasDataAttr = function (name) {
  return jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].hasAttribute('data-' + name);
};

function dataToOption(name) {
  return name.replace(/-([a-z])/g, function (x) {
    return x[1].toUpperCase();
  });
}

function getDataOptions(el, castList) {
  var options = {};
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.each(jquery__WEBPACK_IMPORTED_MODULE_5___default()(el).data(), function (key, value) {
    key = dataToOption(key); // Escape data-provide

    if (key == 'provide') {
      return;
    }

    if (castList != undefined) {
      var type = castList[key];

      switch (type) {
        case 'bool':
          value = Boolean(value);
          break;

        case 'num':
          value = Number(value);
          break;

        case 'array':
          value = value.split(',');
          break;

        default:
      }
    }

    options[key] = value;
  });
  return options;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/vendor/jquery.collection.min.js":
/*!************************************************!*\
  !*** ./assets/vendor/jquery.collection.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/jquery.collection.min.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/08/2020 14:20
!function (e) {
  e.fn.collection = function (t) {
    var n = {
      container: "body",
      allow_up: !0,
      up: '<a href="#">&#x25B2;</a>',
      before_up: function before_up(e, t) {
        return !0;
      },
      after_up: function after_up(e, t) {
        return !0;
      },
      allow_down: !0,
      down: '<a href="#">&#x25BC;</a>',
      before_down: function before_down(e, t) {
        return !0;
      },
      after_down: function after_down(e, t) {
        return !0;
      },
      allow_add: !0,
      add: '<a href="#">[ + ]</a>',
      before_add: function before_add(e, t) {
        return !0;
      },
      after_add: function after_add(e, t) {
        return !0;
      },
      allow_remove: !0,
      remove: '<a href="#">[ - ]</a>',
      before_remove: function before_remove(e, t) {
        return !0;
      },
      after_remove: function after_remove(e, t) {
        return !0;
      },
      allow_duplicate: !1,
      duplicate: '<a href="#">[ # ]</a>',
      before_duplicate: function before_duplicate(e, t) {
        return !0;
      },
      after_duplicate: function after_duplicate(e, t) {
        return !0;
      },
      before_init: function before_init(e) {},
      after_init: function after_init(e) {},
      min: 0,
      max: 100,
      add_at_the_end: !1,
      prefix: "collection",
      prototype_name: "__name__",
      name_prefix: null,
      elements_selector: "> div, > fieldset",
      elements_parent_selector: "%id%",
      children: null,
      init_with_n_elements: 0,
      hide_useless_buttons: !0,
      drag_drop: !0,
      drag_drop_options: {
        placeholder: "ui-state-highlight"
      },
      drag_drop_start: function drag_drop_start(e, t) {
        return !0;
      },
      drag_drop_update: function drag_drop_update(e, t) {
        return !0;
      },
      custom_add_location: !1,
      action_container_tag: "div",
      fade_in: !0,
      fade_out: !0,
      position_field_selector: null,
      preserve_names: !1
    },
        i = function i(t, n) {
      if (!n.attr("id")) {
        var i;

        do {
          i = t + "_" + ("" + 1e3 * Math.random() * new Date().getTime()).replace(".", "").split("").sort(function () {
            return .5 - Math.random();
          }).join("");
        } while (e("#" + i).length > 0);

        n.attr("id", i);
      }

      return n.attr("id");
    },
        o = function o(t) {
      try {
        var n = e(t);
      } catch (e) {
        return null;
      }

      return 0 === n.length ? null : n.is('input[type="checkbox"]') ? !0 === n.prop("checked") : n.is('input[type="radio"]') && void 0 !== n.attr("name") ? e('input[name="' + n.attr("name") + '"]:checked').val() : void 0 !== n.prop("value") ? n.val() : n.html();
    },
        a = function a(t, n, i) {
      try {
        var o = e(t);
      } catch (e) {
        return;
      }

      0 !== o.length && (o.is('input[type="checkbox"]') ? n ? o.attr("checked", !0) : o.removeAttr("checked") : void 0 !== o.prop("value") ? i ? o.attr("value", n) : o.val(n) : o.html(n));
    },
        r = function r(e) {
      return void 0 === e || e;
    },
        l = function l(e) {
      return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    },
        d = function d(t, n, i, o) {
      var a = function a(t) {
        var n = e(t);
        "object" == _typeof(t) && "attributes" in t && e.each(t.attributes, function (t, a) {
          "string" === e.type(a.value) && n.attr(a.name.replace(i, o), a.value.replace(i, o));
        }), n.length > 0 && e.each(n.data(), function (t, a) {
          "string" === e.type(a) && n.data(t.replace(i, o), a.replace(i, o));
        });
      },
          r = t.eq(n);

      a(r[0]), r.find("*").each(function () {
        a(this);
      });
    },
        c = function c(t, n, i, o, a, r) {
      var c = new RegExp(l(i.name_prefix + "[" + a + "]"), "g"),
          s = i.name_prefix + "[" + r + "]";
      i.children && e.each(i.children, function (e, n) {
        var i = t.find(n.selector).eq(o),
            a = i.data("collection-settings");
        a && (a.name_prefix = a.name_prefix.replace(c, s), i.data("collection-settings", a));
      }), d(n, o, c, s), c = new RegExp(l(t.attr("id") + "_" + a), "g"), s = t.attr("id") + "_" + r, i.children && e.each(i.children, function (e, n) {
        var i = t.find(n.selector).eq(o),
            a = i.data("collection-settings");
        a && (a.elements_parent_selector = a.elements_parent_selector.replace(c, s), a.elements_selector = a.elements_selector.replace(c, s), a.prefix = a.prefix.replace(c, s), i.data("collection-settings", a));
      }), d(n, o, c, s);
    },
        s = function s(e, t, n, i) {
      var o = e.data("collection-settings");
      return o.position_field_selector || o.preserve_names || (c(e, t, o, n, n, "__swap__"), c(e, t, o, i, i, n), c(e, t, o, n, "__swap__", i)), t.eq(n).insertBefore(t.eq(i)), i > n ? t.eq(i).insertBefore(t.eq(n)) : t.eq(i).insertAfter(t.eq(n)), e.find(o.elements_selector);
    },
        f = function f(e, t, n, i, o) {
      for (var a = i + 1; a <= o; a++) {
        t = s(e, t, a, a - 1);
      }

      return e.find(n.elements_selector);
    },
        _ = function _(e, t, n, i, o) {
      for (var a = i - 1; a >= o; a--) {
        t = s(e, t, a, a + 1);
      }

      return e.find(n.elements_selector);
    },
        p = function p(e, t, n, i) {
      for (var o = i + 1; o < t.length; o++) {
        t = s(e, t, o - 1, o);
      }

      return e.find(n.elements_selector);
    },
        u = function u(t, n, o, a) {
      var r = e(n.elements_parent_selector),
          l = 0 === r.find("." + n.prefix + "-tmp").length,
          d = t.find(n.elements_selector);

      if (n.allow_add && l && (r.append('<span class="' + n.prefix + '-tmp"></span>'), n.add && r.append(e(n.add).addClass(n.prefix + "-action " + n.prefix + "-rescue-add").data("collection", t.attr("id")))), o) {
        t.data("collection-offset", d.length);

        for (var c = e(n.container), s = t.find("." + n.prefix + "-add, ." + n.prefix + "-rescue-add, ." + n.prefix + "-duplicate").first(), f = 0; d.length < n.init_with_n_elements;) {
          f++;

          var _ = d.length > 0 ? d.last() : void 0,
              p = d.length - 1;

          if (d = m(c, s, t, n, d, _, p, !1), f > n.init_with_n_elements) {
            console.error("Infinite loop, element selector (" + n.elements_selector + ") not found !");
            break;
          }
        }

        t.data("collection-offset", d.length);
      }

      if (d.each(function (r) {
        var l = e(this);
        o && l.data("index", r);
        var c = l.find("." + n.prefix + "-actions").addBack().filter("." + n.prefix + "-actions");
        0 === c.length && (c = e("<" + n.action_container_tag + ' class="' + n.prefix + '-actions"></' + n.action_container_tag + ">"), l.append(c));
        var s = 0;
        "remove" === a && n.fade_out && (s = 1);
        var f = [{
          enabled: n.allow_remove,
          selector: n.prefix + "-remove",
          html: n.remove,
          condition: d.length - s > n.min
        }, {
          enabled: n.allow_up,
          selector: n.prefix + "-up",
          html: n.up,
          condition: d.length - s > 1 && d.index(l) - s > 0
        }, {
          enabled: n.allow_down,
          selector: n.prefix + "-down",
          html: n.down,
          condition: d.length - s > 1 && d.index(l) !== d.length - 1
        }, {
          enabled: n.allow_add && !n.add_at_the_end && !n.custom_add_location,
          selector: n.prefix + "-add",
          html: n.add,
          condition: d.length - s < n.max
        }, {
          enabled: n.allow_duplicate,
          selector: n.prefix + "-duplicate",
          html: n.duplicate,
          condition: d.length - s < n.max
        }];
        e.each(f, function (o, a) {
          if (a.enabled) {
            var d = l.find("." + a.selector);
            0 === d.length && a.html && (d = e(a.html).appendTo(c).addClass(a.selector)), a.condition ? (d.removeClass(n.prefix + "-action-disabled"), n.hide_useless_buttons && d.css("display", "")) : (d.addClass(n.prefix + "-action-disabled"), n.hide_useless_buttons && d.css("display", "none")), d.addClass(n.prefix + "-action").data("collection", t.attr("id")).data("element", i(t.attr("id") + "_" + r, l));
          } else l.find("." + a.selector).css("display", "none");
        });
      }), n.allow_add) {
        var u = 0;
        "remove" === a && n.fade_out && (u = 1);
        var h = t.find("." + n.prefix + "-rescue-add").css("display", "").removeClass(n.prefix + "-action-disabled"),
            v = t.find("." + n.prefix + "-add");
        !n.add_at_the_end && v.length > u || n.custom_add_location ? h.css("display", "none") : "remove" === a && n.fade_out && (h.css("display", "none"), h.fadeIn("fast")), d.length - u >= n.max && (h.addClass(n.prefix + "-action-disabled"), n.hide_useless_buttons && t.find("." + n.prefix + "-add, ." + n.prefix + "-rescue-add, ." + n.prefix + "-duplicate").css("display", "none"));
      }
    },
        h = function h(t, n, i) {
      i.children && e.each(i.children, function (e, i) {
        if (!i.selector) return console.log("jquery.collection.js: given collection " + t.attr("id") + " has children collections, but children's root selector is undefined."), !0;
        null !== n ? n.find(i.selector).collection(i) : t.find(i.selector).collection(i);
      });
    },
        m = function m(t, n, i, d, c, s, f, _) {
      if (c.length < d.max && (_ && r(d.before_duplicate(i, s)) || r(d.before_add(i, s)))) {
        var m = i.data("prototype"),
            v = i.data("collection-offset");
        i.data("collection-offset", v + 1), -1 === f && (f = c.length - 1);
        var j = new RegExp(l(d.prototype_name), "g"),
            q = v;
        d.preserve_names && (void 0 === (q = i.data("collection-free-key")) && (q = b(d, c)), i.data("collection-free-key", q + 1));
        var C = e(m.replace(j, q)).data("index", v);
        y(d, C);
        var k = e(d.elements_parent_selector).find("> ." + d.prefix + "-tmp");
        e(C).find("[id]").first().attr("id");

        if (_) {
          var E = c.eq(f);
          !function (t) {
            e(t).find(":input").each(function (e, t) {
              a(t, o(t), !0);
            });
          }(E);

          var B = e("<div/>").append(E.clone()).html(),
              Q = d.preserve_names || d.position_field_selector ? E.data("index") : f,
              R = d.preserve_names ? w(d, E) : Q,
              A = function (e, t, n, i, o, a, r) {
            var d = new RegExp(l(t.name_prefix + "[" + a + "]"), "g"),
                c = t.name_prefix + "[" + r + "]";
            return n = n.replace(d, c), d = new RegExp(l(e.attr("id") + "_" + i), "g"), c = e.attr("id") + "_" + o, n = n.replace(d, c);
          }(i, d, B, Q, v, R, q);

          C = e("<div/>").html(A).contents().data("index", v), d.fade_in && C.hide(), k.before(C).find(d.prefix + "-actions").remove();
        } else d.fade_in && C.hide(), k.before(C);

        c = i.find(d.elements_selector);
        var D = C.find("." + d.prefix + "-add, ." + d.prefix + "-duplicate");
        D.length > 0 && D.addClass(d.prefix + "-action").data("collection", i.attr("id")), d.add_at_the_end || f + 1 === v ? u(i, d, !1) : c = x(i, d, c, C, v, f + 1), h(i, C, d), (_ && !r(d.after_duplicate(i, C)) || !r(d.after_add(i, C))) && (-1 !== f && (c = p(i, c, d, f + 1)), C.remove());
      }

      if (void 0 !== C && d.fade_in) C.fadeIn("fast", function () {
        d.position_field_selector && g(d, c);
      });else if (d.position_field_selector) return g(d, c);
      return c;
    },
        v = function v(t, n, i, o, a) {
      if (i.length > n.min && r(n.before_remove(t, o))) {
        var l = function l() {
          var l = o;
          n.preserve_names || (l = (i = p(t, i, n, a)).last());
          var d = l.clone({
            withDataAndEvents: !0
          }).show();
          (l.remove(), r(n.after_remove(t, d))) || (e(n.elements_parent_selector).find("> ." + n.prefix + "-tmp").before(d), i = t.find(n.elements_selector), i = function (e, t, n, i) {
            for (var o = t.length - 2; o > i; o--) {
              t = s(e, t, o + 1, o);
            }

            return e.find(n.elements_selector);
          }(t, i, n, a - 1));
          n.position_field_selector && g(n, i);
        };

        n.fade_out ? o.fadeOut("fast", function () {
          l();
        }) : l();
      }

      return i;
    },
        x = function x(e, t, n, i, o, a) {
      return 1 === Math.abs(a - o) ? (n = s(e, n, o, a), r(a - o > 0 ? t.after_up(e, i) : t.after_down(e, i)) || (n = s(e, n, a, o))) : o < a ? (n = f(e, n, t, o, a), r(a - o > 0 ? t.after_up(e, i) : t.after_down(e, i)) || (n = _(e, n, t, a, o))) : (n = _(e, n, t, o, a), r(a - o > 0 ? t.after_up(e, i) : t.after_down(e, i)) || (n = f(e, n, t, a, o))), u(e, t, !1), t.position_field_selector ? g(t, n) : n;
    },
        g = function g(t, n) {
      return e(n).each(function () {
        var i = e(this);
        a(i.find(t.position_field_selector), n.index(i));
      }), n;
    },
        w = function w(e, t) {
      return t.find(':input[name^="' + e.name_prefix + '["]').attr("name").slice(e.name_prefix.length + 1).split("]", 1)[0];
    },
        b = function b(t, n) {
      var i = 0;
      return n.each(function () {
        var n = w(t, e(this));
        /^0|[1-9]\d*$/.test(n) && n >= i && (i = Number(n) + 1);
      }), i;
    },
        y = function y(t, n) {
      e.each(["-action", "-action-disabled", "-actions", "-add", "-down", "-duplicate", "-remove", "-rescue-add", "-tmp", "-up"], function () {
        var i = this;
        n.each(function () {
          var n = e(this);
          n.hasClass(t.user_prefix + i) && n.addClass(t.prefix + i), n.find("*").each(function () {
            var n = e(this);
            n.hasClass(t.user_prefix + i) && n.addClass(t.prefix + i);
          });
        });
      });
    },
        j = e(this);

    return 0 === j.length ? (console.log("jquery.collection.js: given collection selector does not exist."), !1) : (j.each(function () {
      var l = e.extend(!0, {}, n, t);
      if (0 === e(l.container).length) return console.log("jquery.collection.js: a container should exist to handle events (basically, a <body> tag)."), !1;
      var d,
          c,
          f = e(this);

      if (void 0 !== f.data("collection")) {
        var _ = e("#" + f.data("collection"));

        if (0 === _.length) return console.log("jquery.collection.js: given collection id does not exist."), !0;
      } else _ = f;

      if (_ = e(_), l.elements_parent_selector = l.elements_parent_selector.replace("%id%", "#" + i("", _)), !l.elements_parent_selector && (l.elements_parent_selector = "#" + i("", _), 0 === e(l.elements_parent_selector).length)) return console.log("jquery.collection.js: given elements parent selector does not return any object."), !0;
      if (l.user_prefix = l.prefix, l.prefix = _.attr("id") + "-" + l.user_prefix, y(l, _), l.allow_add || (l.allow_duplicate = !1, l.add_at_the_end = !1), l.init_with_n_elements > l.max && (l.init_with_n_elements = l.max), l.min && (!l.init_with_n_elements || l.init_with_n_elements < l.min) && (l.init_with_n_elements = l.min), !l.action_container_tag) return console.log("jquery.collection.js: action_container_tag needs to be set."), !0;
      if (l.before_init(_), null === _.data("prototype")) return console.log("jquery.collection.js: given collection field has no prototype, check that your field has the prototype option set to true."), !0;
      if (void 0 !== _.data("prototype-name") && (l.prototype_name = _.data("prototype-name")), void 0 !== _.data("allow-add") && (l.allow_add = _.data("allow-add"), l.allow_duplicate = !!_.data("allow-add") && l.allow_duplicate), void 0 !== _.data("allow-remove") && (l.allow_remove = _.data("allow-remove")), void 0 !== _.data("name-prefix") && (l.name_prefix = _.data("name-prefix")), !l.name_prefix) return console.log("jquery.collection.js: the prefix used in descendant field names is mandatory, you can set it using 2 ways:"), console.log("jquery.collection.js: - use the form theme given with this plugin source"), console.log("jquery.collection.js: - set name_prefix option to  '{{ formView.myCollectionField.vars.full_name }}'"), !0;
      (l.preserve_names && (l.allow_up = !1, l.allow_down = !1, l.drag_drop = !1, l.add_at_the_end = !0), void 0 !== jQuery.ui && void 0 !== jQuery.ui.sortable && _.data("sortable") && _.sortable("disable"), l.drag_drop && l.allow_up && l.allow_down) && (void 0 === jQuery.ui || void 0 === jQuery.ui.sortable ? l.drag_drop = !1 : _.sortable(e.extend(!0, {}, {
        start: function start(t, n) {
          var i = _.find(l.elements_selector),
              o = n.item,
              a = e(this);

          r(l.drag_drop_start(t, n, i, o)) ? (n.placeholder.height(n.item.height()), n.placeholder.width(n.item.width()), d = i.index(o)) : a.sortable("cancel");
        },
        update: function update(t, n) {
          var i = _.find(l.elements_selector),
              o = n.item;

          e(this).sortable("cancel"), !1 !== l.drag_drop_update(t, n, i, o) && r(c - d > 0 ? l.before_up(_, o) : l.before_down(_, o)) && (c = i.index(o), i = _.find(l.elements_selector), x(_, l, i, o, d, c));
        }
      }, l.drag_drop_options)));

      _.data("collection-settings", l);

      var p = e(l.container);

      if (p.off("click", "." + l.prefix + "-action").on("click", "." + l.prefix + "-action", function (t) {
        var n,
            i,
            o = e(this);
        if (void 0 === (i = (n = e("#" + o.data("collection"))).data("collection-settings")) && void 0 === (i = (n = e("#" + o.data("collection")).find("." + o.data("collection") + "-collection")).data("collection-settings"))) throw "Can't find collection: " + o.data("collection");
        var a = n.find(i.elements_selector),
            l = o.data("element") ? e("#" + o.data("element")) : void 0,
            d = l && l.length ? a.index(l) : -1,
            c = null,
            f = o.is("." + i.prefix + "-duplicate");
        (o.is("." + i.prefix + "-add") || o.is("." + i.prefix + "-rescue-add") || f) && i.allow_add && (c = "add", a = m(p, o, n, i, a, l, d, f)), o.is("." + i.prefix + "-remove") && i.allow_remove && (c = "remove", a = v(n, i, a, l, d)), o.is("." + i.prefix + "-up") && i.allow_up && (c = "up", a = function (e, t, n, i, o) {
          return 0 !== o && r(t.before_up(e, i)) && (n = s(e, n, o, o - 1), r(t.after_up(e, i)) || (n = s(e, n, o - 1, o))), t.position_field_selector ? g(t, n) : n;
        }(n, i, a, l, d)), o.is("." + i.prefix + "-down") && i.allow_down && (c = "down", a = function (e, t, n, i, o) {
          return o !== n.length - 1 && r(t.before_down(e, i)) && (n = s(e, n, o, o + 1), r(t.after_down(e, n)) || (n = s(e, n, o + 1, o))), t.position_field_selector ? g(t, n) : n;
        }(n, i, a, l, d)), u(n, i, !1, c), t.preventDefault();
      }), u(_, l, !0), h(_, null, l), l.position_field_selector) {
        var w = [],
            b = _.find(l.elements_selector);

        b.each(function (t) {
          var n = e(this);
          w.push({
            position: parseFloat(o(n.find(l.position_field_selector))),
            element: n
          });
        });
        w.sort(function (e, t) {
          return e.position < t.position ? -1 : e.position > t.position ? 1 : 0;
        }), e.each(w, function (t, n) {
          var i = [];
          e(b).each(function (t) {
            i.push(e(this).attr("id"));
          });
          var o = n.element,
              r = e.inArray(o.attr("id"), i);
          t !== r && (b = x(_, l, b, o, r, t), a(o.find(l.position_field_selector), b.index(o)));
        });
      }

      l.after_init(_);
    }), !0);
  };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ })

},[["./assets/js/pages/adm.stage.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~datatable~sa~a52fa8c5"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy92ZW5kb3IvanF1ZXJ5LmNvbGxlY3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtZmxvYXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwic3RhZ2VFdHVkaWFudCIsImRhdGEiLCJ0dXRldXIiLCJ2YWwiLCJzdWNjZXNzIiwiYWRkQ2FsbG91dCIsInJlYWR5Iiwic3RhZ2VQZXJpb2RlU291dGVuYW5jZXMiLCJsZW5ndGgiLCJjb2xsZWN0aW9uIiwidXBkYXRlRGF0ZVBpY2tlciIsInN0YWdlUGVyaW9kZUludGVycnVwdGlvbnMiLCJlYWNoIiwib3B0aW9ucyIsIm11bHRpZGF0ZVNlcGFyYXRvciIsImxhbmd1YWdlIiwiZGF5c09mV2Vla0hpZ2hsaWdodGVkIiwicHJvcCIsImlucHV0cyIsImZpbmQiLCJkYXRlcGlja2VyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwicG9wIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvY2F0aW9uIiwiYXR0ciIsIlN3YWwiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3NyZiIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwidHlwZSIsIl90b2tlbiIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIm1ldGhvZCIsIiRvYmoiLCIkaHRtbCIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiLCJ0IiwibiIsImNvbnRhaW5lciIsImFsbG93X3VwIiwidXAiLCJiZWZvcmVfdXAiLCJhZnRlcl91cCIsImFsbG93X2Rvd24iLCJkb3duIiwiYmVmb3JlX2Rvd24iLCJhZnRlcl9kb3duIiwiYWxsb3dfYWRkIiwiYWRkIiwiYmVmb3JlX2FkZCIsImFmdGVyX2FkZCIsImFsbG93X3JlbW92ZSIsImJlZm9yZV9yZW1vdmUiLCJhZnRlcl9yZW1vdmUiLCJhbGxvd19kdXBsaWNhdGUiLCJkdXBsaWNhdGUiLCJiZWZvcmVfZHVwbGljYXRlIiwiYWZ0ZXJfZHVwbGljYXRlIiwiYmVmb3JlX2luaXQiLCJhZnRlcl9pbml0IiwibWluIiwibWF4IiwiYWRkX2F0X3RoZV9lbmQiLCJwcmVmaXgiLCJwcm90b3R5cGVfbmFtZSIsIm5hbWVfcHJlZml4IiwiZWxlbWVudHNfc2VsZWN0b3IiLCJlbGVtZW50c19wYXJlbnRfc2VsZWN0b3IiLCJjaGlsZHJlbiIsImluaXRfd2l0aF9uX2VsZW1lbnRzIiwiaGlkZV91c2VsZXNzX2J1dHRvbnMiLCJkcmFnX2Ryb3AiLCJkcmFnX2Ryb3Bfb3B0aW9ucyIsInBsYWNlaG9sZGVyIiwiZHJhZ19kcm9wX3N0YXJ0IiwiZHJhZ19kcm9wX3VwZGF0ZSIsImN1c3RvbV9hZGRfbG9jYXRpb24iLCJhY3Rpb25fY29udGFpbmVyX3RhZyIsImZhZGVfaW4iLCJmYWRlX291dCIsInBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yIiwicHJlc2VydmVfbmFtZXMiLCJpIiwiTWF0aCIsInJhbmRvbSIsIkRhdGUiLCJnZXRUaW1lIiwic29ydCIsImpvaW4iLCJvIiwiaXMiLCJhIiwicmVtb3ZlQXR0ciIsInIiLCJsIiwiZCIsImF0dHJpYnV0ZXMiLCJlcSIsImMiLCJSZWdFeHAiLCJzIiwic2VsZWN0b3IiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnRBZnRlciIsImYiLCJfIiwicCIsInUiLCJhcHBlbmQiLCJmaXJzdCIsImxhc3QiLCJtIiwiYWRkQmFjayIsImZpbHRlciIsImVuYWJsZWQiLCJjb25kaXRpb24iLCJpbmRleCIsImFwcGVuZFRvIiwiY3NzIiwiaCIsInYiLCJmYWRlSW4iLCJqIiwicSIsImIiLCJDIiwieSIsImsiLCJFIiwiQiIsImNsb25lIiwiUSIsIlIiLCJ3IiwiQSIsImNvbnRlbnRzIiwiaGlkZSIsImJlZm9yZSIsIkQiLCJnIiwid2l0aERhdGFBbmRFdmVudHMiLCJzaG93IiwiZmFkZU91dCIsImFicyIsInNsaWNlIiwidGVzdCIsImhhc0NsYXNzIiwidXNlcl9wcmVmaXgiLCJleHRlbmQiLCJ1aSIsInNvcnRhYmxlIiwic3RhcnQiLCJpdGVtIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1cGRhdGUiLCJvZmYiLCJwdXNoIiwicG9zaXRpb24iLCJwYXJzZUZsb2F0IiwiZWxlbWVudCIsImluQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixlQUF6QixFQUEwQyxZQUFZO0FBQ3BERiwrQ0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsNkNBQWpCLEVBQWdFO0FBQ25FQyxtQkFBYSxFQUFFUCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsT0FBYixDQURvRDtBQUVuRUMsWUFBTSxFQUFFVCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxHQUFSO0FBRjJELEtBQWhFLENBREE7QUFLTEMsV0FBTyxFQUFFLG1CQUFZO0FBQ25CQyw4REFBVSxDQUFDLGdDQUFELEVBQW1DLFNBQW5DLENBQVY7QUFDRDtBQVBJLEdBQVA7QUFTRCxDQVZEO0FBWUFaLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZWSxLQUFaLENBQWtCLFlBQVk7QUFDNUIsTUFBSUMsdUJBQXVCLEdBQUdkLDZDQUFDLENBQUMsbUNBQUQsQ0FBL0I7O0FBQ0EsTUFBSWMsdUJBQXVCLENBQUNDLE1BQXhCLEdBQWlDLENBQXJDLEVBQXdDO0FBQ3RDRCwyQkFBdUIsQ0FBQ0UsVUFBeEI7QUFDQWhCLGlEQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QiwwREFBeEIsRUFBb0YsWUFBWTtBQUM5RmUsc0JBQWdCO0FBQ2pCLEtBRkQ7QUFHRDs7QUFDRCxNQUFJQyx5QkFBeUIsR0FBR2xCLDZDQUFDLENBQUMscUNBQUQs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QWE4QyxDQUFiO0FBQWdCLEtBQWozSSxHQUFtM0ksQ0FBQyxDQUF0OUksQ0FBUDtBQUFnK0ksR0FBcDRiO0FBQXE0YixDQUFqNWIsQ0FBazVieEYsTUFBbDViLENBQUQsQzs7Ozs7Ozs7Ozs7O0FDTkEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxXQUFXLG1CQUFPLENBQUMsaUZBQTBCO0FBQzdDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDYlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRywrQ0FBK0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQy9CRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLCtCQUErQixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFeEU7QUFDQTtBQUNBLEdBQUcsK0RBQStEO0FBQ2xFO0FBQ0EsQ0FBQyIsImZpbGUiOiJhZG0uc3RhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTEvMTAvMjAyMCAwODowNFxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICcuLi8uLi92ZW5kb3IvanF1ZXJ5LmNvbGxlY3Rpb24ubWluJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2V0dXRldXInLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9zdGFnZV9ldHVkaWFudF9jaGFuZ2VfdHV0ZXVyJywge1xuICAgICAgc3RhZ2VFdHVkaWFudDogJCh0aGlzKS5kYXRhKCdzdGFnZScpLFxuICAgICAgdHV0ZXVyOiAkKHRoaXMpLnZhbCgpXG4gICAgfSksXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnVHV0ZXVyIHVuaXZlcnNpdGFpcmUgbW9kaWZpw6kgIScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGxldCBzdGFnZVBlcmlvZGVTb3V0ZW5hbmNlcyA9ICQoJy5zZWxlY3Rvci1zdGFnZVBlcmlvZGVTb3V0ZW5hbmNlcycpXG4gIGlmIChzdGFnZVBlcmlvZGVTb3V0ZW5hbmNlcy5sZW5ndGggPiAwKSB7XG4gICAgc3RhZ2VQZXJpb2RlU291dGVuYW5jZXMuY29sbGVjdGlvbigpXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdGFnZV9wZXJpb2RlX3N0YWdlUGVyaW9kZVNvdXRlbmFuY2VzLWNvbGxlY3Rpb24tYWN0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlRGF0ZVBpY2tlcigpXG4gICAgfSlcbiAgfVxuICBsZXQgc3RhZ2VQZXJpb2RlSW50ZXJydXB0aW9ucyA9ICQoJy5zZWxlY3Rvci1zdGFnZVBlcmlvZGVJbnRlcnJ1cHRpb25zJylcbiAgaWYgKHN0YWdlUGVyaW9kZUludGVycnVwdGlvbnMubGVuZ3RoID4gMCkge1xuICAgIHN0YWdlUGVyaW9kZUludGVycnVwdGlvbnMuY29sbGVjdGlvbigpXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdGFnZV9wZXJpb2RlX3N0YWdlUGVyaW9kZUludGVycnVwdGlvbnMtY29sbGVjdGlvbi1hY3Rpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICB1cGRhdGVEYXRlUGlja2VyKClcbiAgICB9KVxuICB9XG5cblxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0ZVBpY2tlciAoKSB7XG4gICQoJ1tkYXRhLXByb3ZpZGV+PVwiZGF0ZXBpY2tlclwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgbXVsdGlkYXRlU2VwYXJhdG9yOiAnLCAnLFxuICAgICAgbGFuZ3VhZ2U6ICdmcicsXG4gICAgICBkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6ICcwNidcbiAgICB9XG5cbiAgICBpZiAoJCh0aGlzKS5wcm9wKCd0YWdOYW1lJykgIT0gJ0lOUFVUJykge1xuICAgICAgLy9zaSBjZSBuJ2VzdCBwYXMgdW4gaW5wdXQgPT4gZG9uYyB1biBkYXRlIHJhbmdlXG4gICAgICBvcHRpb25zLmlucHV0cyA9IFskKHRoaXMpLmZpbmQoJ2lucHV0OmZpcnN0JyksICQodGhpcykuZmluZCgnaW5wdXQ6bGFzdCcpXVxuICAgIH1cbiAgICAkKHRoaXMpLmRhdGVwaWNrZXIob3B0aW9ucylcbiAgfSlcbn1cblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMS8xMC8yMDIwIDA4OjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL3ZlbmRvci9qcXVlcnkuY29sbGVjdGlvbi5taW4uanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNy8wOC8yMDIwIDE0OjIwXG5cbiFmdW5jdGlvbihlKXtlLmZuLmNvbGxlY3Rpb249ZnVuY3Rpb24odCl7dmFyIG49e2NvbnRhaW5lcjpcImJvZHlcIixhbGxvd191cDohMCx1cDonPGEgaHJlZj1cIiNcIj4mI3gyNUIyOzwvYT4nLGJlZm9yZV91cDpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhZnRlcl91cDpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhbGxvd19kb3duOiEwLGRvd246JzxhIGhyZWY9XCIjXCI+JiN4MjVCQzs8L2E+JyxiZWZvcmVfZG93bjpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhZnRlcl9kb3duOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFsbG93X2FkZDohMCxhZGQ6JzxhIGhyZWY9XCIjXCI+WyArIF08L2E+JyxiZWZvcmVfYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFmdGVyX2FkZDpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhbGxvd19yZW1vdmU6ITAscmVtb3ZlOic8YSBocmVmPVwiI1wiPlsgLSBdPC9hPicsYmVmb3JlX3JlbW92ZTpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhZnRlcl9yZW1vdmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sYWxsb3dfZHVwbGljYXRlOiExLGR1cGxpY2F0ZTonPGEgaHJlZj1cIiNcIj5bICMgXTwvYT4nLGJlZm9yZV9kdXBsaWNhdGU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sYWZ0ZXJfZHVwbGljYXRlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGJlZm9yZV9pbml0OmZ1bmN0aW9uKGUpe30sYWZ0ZXJfaW5pdDpmdW5jdGlvbihlKXt9LG1pbjowLG1heDoxMDAsYWRkX2F0X3RoZV9lbmQ6ITEscHJlZml4OlwiY29sbGVjdGlvblwiLHByb3RvdHlwZV9uYW1lOlwiX19uYW1lX19cIixuYW1lX3ByZWZpeDpudWxsLGVsZW1lbnRzX3NlbGVjdG9yOlwiPiBkaXYsID4gZmllbGRzZXRcIixlbGVtZW50c19wYXJlbnRfc2VsZWN0b3I6XCIlaWQlXCIsY2hpbGRyZW46bnVsbCxpbml0X3dpdGhfbl9lbGVtZW50czowLGhpZGVfdXNlbGVzc19idXR0b25zOiEwLGRyYWdfZHJvcDohMCxkcmFnX2Ryb3Bfb3B0aW9uczp7cGxhY2Vob2xkZXI6XCJ1aS1zdGF0ZS1oaWdobGlnaHRcIn0sZHJhZ19kcm9wX3N0YXJ0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGRyYWdfZHJvcF91cGRhdGU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sY3VzdG9tX2FkZF9sb2NhdGlvbjohMSxhY3Rpb25fY29udGFpbmVyX3RhZzpcImRpdlwiLGZhZGVfaW46ITAsZmFkZV9vdXQ6ITAscG9zaXRpb25fZmllbGRfc2VsZWN0b3I6bnVsbCxwcmVzZXJ2ZV9uYW1lczohMX0saT1mdW5jdGlvbih0LG4pe2lmKCFuLmF0dHIoXCJpZFwiKSl7dmFyIGk7ZG97aT10K1wiX1wiKyhcIlwiKzFlMypNYXRoLnJhbmRvbSgpKihuZXcgRGF0ZSkuZ2V0VGltZSgpKS5yZXBsYWNlKFwiLlwiLFwiXCIpLnNwbGl0KFwiXCIpLnNvcnQoZnVuY3Rpb24oKXtyZXR1cm4uNS1NYXRoLnJhbmRvbSgpfSkuam9pbihcIlwiKX13aGlsZShlKFwiI1wiK2kpLmxlbmd0aD4wKTtuLmF0dHIoXCJpZFwiLGkpfXJldHVybiBuLmF0dHIoXCJpZFwiKX0sbz1mdW5jdGlvbih0KXt0cnl7dmFyIG49ZSh0KX1jYXRjaChlKXtyZXR1cm4gbnVsbH1yZXR1cm4gMD09PW4ubGVuZ3RoP251bGw6bi5pcygnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk/ITA9PT1uLnByb3AoXCJjaGVja2VkXCIpOm4uaXMoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpJiZ2b2lkIDAhPT1uLmF0dHIoXCJuYW1lXCIpP2UoJ2lucHV0W25hbWU9XCInK24uYXR0cihcIm5hbWVcIikrJ1wiXTpjaGVja2VkJykudmFsKCk6dm9pZCAwIT09bi5wcm9wKFwidmFsdWVcIik/bi52YWwoKTpuLmh0bWwoKX0sYT1mdW5jdGlvbih0LG4saSl7dHJ5e3ZhciBvPWUodCl9Y2F0Y2goZSl7cmV0dXJufTAhPT1vLmxlbmd0aCYmKG8uaXMoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpP24/by5hdHRyKFwiY2hlY2tlZFwiLCEwKTpvLnJlbW92ZUF0dHIoXCJjaGVja2VkXCIpOnZvaWQgMCE9PW8ucHJvcChcInZhbHVlXCIpP2k/by5hdHRyKFwidmFsdWVcIixuKTpvLnZhbChuKTpvLmh0bWwobikpfSxyPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lfHxlfSxsPWZ1bmN0aW9uKGUpe3JldHVybihlK1wiXCIpLnJlcGxhY2UoL1suPyorXiRbXFxdXFxcXCgpe318LV0vZyxcIlxcXFwkJlwiKX0sZD1mdW5jdGlvbih0LG4saSxvKXt2YXIgYT1mdW5jdGlvbih0KXt2YXIgbj1lKHQpO1wib2JqZWN0XCI9PXR5cGVvZiB0JiZcImF0dHJpYnV0ZXNcImluIHQmJmUuZWFjaCh0LmF0dHJpYnV0ZXMsZnVuY3Rpb24odCxhKXtcInN0cmluZ1wiPT09ZS50eXBlKGEudmFsdWUpJiZuLmF0dHIoYS5uYW1lLnJlcGxhY2UoaSxvKSxhLnZhbHVlLnJlcGxhY2UoaSxvKSl9KSxuLmxlbmd0aD4wJiZlLmVhY2gobi5kYXRhKCksZnVuY3Rpb24odCxhKXtcInN0cmluZ1wiPT09ZS50eXBlKGEpJiZuLmRhdGEodC5yZXBsYWNlKGksbyksYS5yZXBsYWNlKGksbykpfSl9LHI9dC5lcShuKTthKHJbMF0pLHIuZmluZChcIipcIikuZWFjaChmdW5jdGlvbigpe2EodGhpcyl9KX0sYz1mdW5jdGlvbih0LG4saSxvLGEscil7dmFyIGM9bmV3IFJlZ0V4cChsKGkubmFtZV9wcmVmaXgrXCJbXCIrYStcIl1cIiksXCJnXCIpLHM9aS5uYW1lX3ByZWZpeCtcIltcIityK1wiXVwiO2kuY2hpbGRyZW4mJmUuZWFjaChpLmNoaWxkcmVuLGZ1bmN0aW9uKGUsbil7dmFyIGk9dC5maW5kKG4uc2VsZWN0b3IpLmVxKG8pLGE9aS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiKTthJiYoYS5uYW1lX3ByZWZpeD1hLm5hbWVfcHJlZml4LnJlcGxhY2UoYyxzKSxpLmRhdGEoXCJjb2xsZWN0aW9uLXNldHRpbmdzXCIsYSkpfSksZChuLG8sYyxzKSxjPW5ldyBSZWdFeHAobCh0LmF0dHIoXCJpZFwiKStcIl9cIithKSxcImdcIikscz10LmF0dHIoXCJpZFwiKStcIl9cIityLGkuY2hpbGRyZW4mJmUuZWFjaChpLmNoaWxkcmVuLGZ1bmN0aW9uKGUsbil7dmFyIGk9dC5maW5kKG4uc2VsZWN0b3IpLmVxKG8pLGE9aS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiKTthJiYoYS5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3I9YS5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IucmVwbGFjZShjLHMpLGEuZWxlbWVudHNfc2VsZWN0b3I9YS5lbGVtZW50c19zZWxlY3Rvci5yZXBsYWNlKGMscyksYS5wcmVmaXg9YS5wcmVmaXgucmVwbGFjZShjLHMpLGkuZGF0YShcImNvbGxlY3Rpb24tc2V0dGluZ3NcIixhKSl9KSxkKG4sbyxjLHMpfSxzPWZ1bmN0aW9uKGUsdCxuLGkpe3ZhciBvPWUuZGF0YShcImNvbGxlY3Rpb24tc2V0dGluZ3NcIik7cmV0dXJuIG8ucG9zaXRpb25fZmllbGRfc2VsZWN0b3J8fG8ucHJlc2VydmVfbmFtZXN8fChjKGUsdCxvLG4sbixcIl9fc3dhcF9fXCIpLGMoZSx0LG8saSxpLG4pLGMoZSx0LG8sbixcIl9fc3dhcF9fXCIsaSkpLHQuZXEobikuaW5zZXJ0QmVmb3JlKHQuZXEoaSkpLGk+bj90LmVxKGkpLmluc2VydEJlZm9yZSh0LmVxKG4pKTp0LmVxKGkpLmluc2VydEFmdGVyKHQuZXEobikpLGUuZmluZChvLmVsZW1lbnRzX3NlbGVjdG9yKX0sZj1mdW5jdGlvbihlLHQsbixpLG8pe2Zvcih2YXIgYT1pKzE7YTw9bzthKyspdD1zKGUsdCxhLGEtMSk7cmV0dXJuIGUuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKX0sXz1mdW5jdGlvbihlLHQsbixpLG8pe2Zvcih2YXIgYT1pLTE7YT49bzthLS0pdD1zKGUsdCxhLGErMSk7cmV0dXJuIGUuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKX0scD1mdW5jdGlvbihlLHQsbixpKXtmb3IodmFyIG89aSsxO288dC5sZW5ndGg7bysrKXQ9cyhlLHQsby0xLG8pO3JldHVybiBlLmZpbmQobi5lbGVtZW50c19zZWxlY3Rvcil9LHU9ZnVuY3Rpb24odCxuLG8sYSl7dmFyIHI9ZShuLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvciksbD0wPT09ci5maW5kKFwiLlwiK24ucHJlZml4K1wiLXRtcFwiKS5sZW5ndGgsZD10LmZpbmQobi5lbGVtZW50c19zZWxlY3Rvcik7aWYobi5hbGxvd19hZGQmJmwmJihyLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCInK24ucHJlZml4KyctdG1wXCI+PC9zcGFuPicpLG4uYWRkJiZyLmFwcGVuZChlKG4uYWRkKS5hZGRDbGFzcyhuLnByZWZpeCtcIi1hY3Rpb24gXCIrbi5wcmVmaXgrXCItcmVzY3VlLWFkZFwiKS5kYXRhKFwiY29sbGVjdGlvblwiLHQuYXR0cihcImlkXCIpKSkpLG8pe3QuZGF0YShcImNvbGxlY3Rpb24tb2Zmc2V0XCIsZC5sZW5ndGgpO2Zvcih2YXIgYz1lKG4uY29udGFpbmVyKSxzPXQuZmluZChcIi5cIituLnByZWZpeCtcIi1hZGQsIC5cIituLnByZWZpeCtcIi1yZXNjdWUtYWRkLCAuXCIrbi5wcmVmaXgrXCItZHVwbGljYXRlXCIpLmZpcnN0KCksZj0wO2QubGVuZ3RoPG4uaW5pdF93aXRoX25fZWxlbWVudHM7KXtmKys7dmFyIF89ZC5sZW5ndGg+MD9kLmxhc3QoKTp2b2lkIDAscD1kLmxlbmd0aC0xO2lmKGQ9bShjLHMsdCxuLGQsXyxwLCExKSxmPm4uaW5pdF93aXRoX25fZWxlbWVudHMpe2NvbnNvbGUuZXJyb3IoXCJJbmZpbml0ZSBsb29wLCBlbGVtZW50IHNlbGVjdG9yIChcIituLmVsZW1lbnRzX3NlbGVjdG9yK1wiKSBub3QgZm91bmQgIVwiKTticmVha319dC5kYXRhKFwiY29sbGVjdGlvbi1vZmZzZXRcIixkLmxlbmd0aCl9aWYoZC5lYWNoKGZ1bmN0aW9uKHIpe3ZhciBsPWUodGhpcyk7byYmbC5kYXRhKFwiaW5kZXhcIixyKTt2YXIgYz1sLmZpbmQoXCIuXCIrbi5wcmVmaXgrXCItYWN0aW9uc1wiKS5hZGRCYWNrKCkuZmlsdGVyKFwiLlwiK24ucHJlZml4K1wiLWFjdGlvbnNcIik7MD09PWMubGVuZ3RoJiYoYz1lKFwiPFwiK24uYWN0aW9uX2NvbnRhaW5lcl90YWcrJyBjbGFzcz1cIicrbi5wcmVmaXgrJy1hY3Rpb25zXCI+PC8nK24uYWN0aW9uX2NvbnRhaW5lcl90YWcrXCI+XCIpLGwuYXBwZW5kKGMpKTt2YXIgcz0wO1wicmVtb3ZlXCI9PT1hJiZuLmZhZGVfb3V0JiYocz0xKTt2YXIgZj1be2VuYWJsZWQ6bi5hbGxvd19yZW1vdmUsc2VsZWN0b3I6bi5wcmVmaXgrXCItcmVtb3ZlXCIsaHRtbDpuLnJlbW92ZSxjb25kaXRpb246ZC5sZW5ndGgtcz5uLm1pbn0se2VuYWJsZWQ6bi5hbGxvd191cCxzZWxlY3RvcjpuLnByZWZpeCtcIi11cFwiLGh0bWw6bi51cCxjb25kaXRpb246ZC5sZW5ndGgtcz4xJiZkLmluZGV4KGwpLXM+MH0se2VuYWJsZWQ6bi5hbGxvd19kb3duLHNlbGVjdG9yOm4ucHJlZml4K1wiLWRvd25cIixodG1sOm4uZG93bixjb25kaXRpb246ZC5sZW5ndGgtcz4xJiZkLmluZGV4KGwpIT09ZC5sZW5ndGgtMX0se2VuYWJsZWQ6bi5hbGxvd19hZGQmJiFuLmFkZF9hdF90aGVfZW5kJiYhbi5jdXN0b21fYWRkX2xvY2F0aW9uLHNlbGVjdG9yOm4ucHJlZml4K1wiLWFkZFwiLGh0bWw6bi5hZGQsY29uZGl0aW9uOmQubGVuZ3RoLXM8bi5tYXh9LHtlbmFibGVkOm4uYWxsb3dfZHVwbGljYXRlLHNlbGVjdG9yOm4ucHJlZml4K1wiLWR1cGxpY2F0ZVwiLGh0bWw6bi5kdXBsaWNhdGUsY29uZGl0aW9uOmQubGVuZ3RoLXM8bi5tYXh9XTtlLmVhY2goZixmdW5jdGlvbihvLGEpe2lmKGEuZW5hYmxlZCl7dmFyIGQ9bC5maW5kKFwiLlwiK2Euc2VsZWN0b3IpOzA9PT1kLmxlbmd0aCYmYS5odG1sJiYoZD1lKGEuaHRtbCkuYXBwZW5kVG8oYykuYWRkQ2xhc3MoYS5zZWxlY3RvcikpLGEuY29uZGl0aW9uPyhkLnJlbW92ZUNsYXNzKG4ucHJlZml4K1wiLWFjdGlvbi1kaXNhYmxlZFwiKSxuLmhpZGVfdXNlbGVzc19idXR0b25zJiZkLmNzcyhcImRpc3BsYXlcIixcIlwiKSk6KGQuYWRkQ2xhc3Mobi5wcmVmaXgrXCItYWN0aW9uLWRpc2FibGVkXCIpLG4uaGlkZV91c2VsZXNzX2J1dHRvbnMmJmQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKSksZC5hZGRDbGFzcyhuLnByZWZpeCtcIi1hY3Rpb25cIikuZGF0YShcImNvbGxlY3Rpb25cIix0LmF0dHIoXCJpZFwiKSkuZGF0YShcImVsZW1lbnRcIixpKHQuYXR0cihcImlkXCIpK1wiX1wiK3IsbCkpfWVsc2UgbC5maW5kKFwiLlwiK2Euc2VsZWN0b3IpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIil9KX0pLG4uYWxsb3dfYWRkKXt2YXIgdT0wO1wicmVtb3ZlXCI9PT1hJiZuLmZhZGVfb3V0JiYodT0xKTt2YXIgaD10LmZpbmQoXCIuXCIrbi5wcmVmaXgrXCItcmVzY3VlLWFkZFwiKS5jc3MoXCJkaXNwbGF5XCIsXCJcIikucmVtb3ZlQ2xhc3Mobi5wcmVmaXgrXCItYWN0aW9uLWRpc2FibGVkXCIpLHY9dC5maW5kKFwiLlwiK24ucHJlZml4K1wiLWFkZFwiKTshbi5hZGRfYXRfdGhlX2VuZCYmdi5sZW5ndGg+dXx8bi5jdXN0b21fYWRkX2xvY2F0aW9uP2guY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTpcInJlbW92ZVwiPT09YSYmbi5mYWRlX291dCYmKGguY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKSxoLmZhZGVJbihcImZhc3RcIikpLGQubGVuZ3RoLXU+PW4ubWF4JiYoaC5hZGRDbGFzcyhuLnByZWZpeCtcIi1hY3Rpb24tZGlzYWJsZWRcIiksbi5oaWRlX3VzZWxlc3NfYnV0dG9ucyYmdC5maW5kKFwiLlwiK24ucHJlZml4K1wiLWFkZCwgLlwiK24ucHJlZml4K1wiLXJlc2N1ZS1hZGQsIC5cIituLnByZWZpeCtcIi1kdXBsaWNhdGVcIikuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKSl9fSxoPWZ1bmN0aW9uKHQsbixpKXtpLmNoaWxkcmVuJiZlLmVhY2goaS5jaGlsZHJlbixmdW5jdGlvbihlLGkpe2lmKCFpLnNlbGVjdG9yKXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiBnaXZlbiBjb2xsZWN0aW9uIFwiK3QuYXR0cihcImlkXCIpK1wiIGhhcyBjaGlsZHJlbiBjb2xsZWN0aW9ucywgYnV0IGNoaWxkcmVuJ3Mgcm9vdCBzZWxlY3RvciBpcyB1bmRlZmluZWQuXCIpLCEwO251bGwhPT1uP24uZmluZChpLnNlbGVjdG9yKS5jb2xsZWN0aW9uKGkpOnQuZmluZChpLnNlbGVjdG9yKS5jb2xsZWN0aW9uKGkpfSl9LG09ZnVuY3Rpb24odCxuLGksZCxjLHMsZixfKXtpZihjLmxlbmd0aDxkLm1heCYmKF8mJnIoZC5iZWZvcmVfZHVwbGljYXRlKGkscykpfHxyKGQuYmVmb3JlX2FkZChpLHMpKSkpe3ZhciBtPWkuZGF0YShcInByb3RvdHlwZVwiKSx2PWkuZGF0YShcImNvbGxlY3Rpb24tb2Zmc2V0XCIpO2kuZGF0YShcImNvbGxlY3Rpb24tb2Zmc2V0XCIsdisxKSwtMT09PWYmJihmPWMubGVuZ3RoLTEpO3ZhciBqPW5ldyBSZWdFeHAobChkLnByb3RvdHlwZV9uYW1lKSxcImdcIikscT12O2QucHJlc2VydmVfbmFtZXMmJih2b2lkIDA9PT0ocT1pLmRhdGEoXCJjb2xsZWN0aW9uLWZyZWUta2V5XCIpKSYmKHE9YihkLGMpKSxpLmRhdGEoXCJjb2xsZWN0aW9uLWZyZWUta2V5XCIscSsxKSk7dmFyIEM9ZShtLnJlcGxhY2UoaixxKSkuZGF0YShcImluZGV4XCIsdik7eShkLEMpO3ZhciBrPWUoZC5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpLmZpbmQoXCI+IC5cIitkLnByZWZpeCtcIi10bXBcIik7ZShDKS5maW5kKFwiW2lkXVwiKS5maXJzdCgpLmF0dHIoXCJpZFwiKTtpZihfKXt2YXIgRT1jLmVxKGYpOyFmdW5jdGlvbih0KXtlKHQpLmZpbmQoXCI6aW5wdXRcIikuZWFjaChmdW5jdGlvbihlLHQpe2EodCxvKHQpLCEwKX0pfShFKTt2YXIgQj1lKFwiPGRpdi8+XCIpLmFwcGVuZChFLmNsb25lKCkpLmh0bWwoKSxRPWQucHJlc2VydmVfbmFtZXN8fGQucG9zaXRpb25fZmllbGRfc2VsZWN0b3I/RS5kYXRhKFwiaW5kZXhcIik6ZixSPWQucHJlc2VydmVfbmFtZXM/dyhkLEUpOlEsQT1mdW5jdGlvbihlLHQsbixpLG8sYSxyKXt2YXIgZD1uZXcgUmVnRXhwKGwodC5uYW1lX3ByZWZpeCtcIltcIithK1wiXVwiKSxcImdcIiksYz10Lm5hbWVfcHJlZml4K1wiW1wiK3IrXCJdXCI7cmV0dXJuIG49bi5yZXBsYWNlKGQsYyksZD1uZXcgUmVnRXhwKGwoZS5hdHRyKFwiaWRcIikrXCJfXCIraSksXCJnXCIpLGM9ZS5hdHRyKFwiaWRcIikrXCJfXCIrbyxuPW4ucmVwbGFjZShkLGMpfShpLGQsQixRLHYsUixxKTtDPWUoXCI8ZGl2Lz5cIikuaHRtbChBKS5jb250ZW50cygpLmRhdGEoXCJpbmRleFwiLHYpLGQuZmFkZV9pbiYmQy5oaWRlKCksay5iZWZvcmUoQykuZmluZChkLnByZWZpeCtcIi1hY3Rpb25zXCIpLnJlbW92ZSgpfWVsc2UgZC5mYWRlX2luJiZDLmhpZGUoKSxrLmJlZm9yZShDKTtjPWkuZmluZChkLmVsZW1lbnRzX3NlbGVjdG9yKTt2YXIgRD1DLmZpbmQoXCIuXCIrZC5wcmVmaXgrXCItYWRkLCAuXCIrZC5wcmVmaXgrXCItZHVwbGljYXRlXCIpO0QubGVuZ3RoPjAmJkQuYWRkQ2xhc3MoZC5wcmVmaXgrXCItYWN0aW9uXCIpLmRhdGEoXCJjb2xsZWN0aW9uXCIsaS5hdHRyKFwiaWRcIikpLGQuYWRkX2F0X3RoZV9lbmR8fGYrMT09PXY/dShpLGQsITEpOmM9eChpLGQsYyxDLHYsZisxKSxoKGksQyxkKSwoXyYmIXIoZC5hZnRlcl9kdXBsaWNhdGUoaSxDKSl8fCFyKGQuYWZ0ZXJfYWRkKGksQykpKSYmKC0xIT09ZiYmKGM9cChpLGMsZCxmKzEpKSxDLnJlbW92ZSgpKX1pZih2b2lkIDAhPT1DJiZkLmZhZGVfaW4pQy5mYWRlSW4oXCJmYXN0XCIsZnVuY3Rpb24oKXtkLnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yJiZnKGQsYyl9KTtlbHNlIGlmKGQucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpcmV0dXJuIGcoZCxjKTtyZXR1cm4gY30sdj1mdW5jdGlvbih0LG4saSxvLGEpe2lmKGkubGVuZ3RoPm4ubWluJiZyKG4uYmVmb3JlX3JlbW92ZSh0LG8pKSl7dmFyIGw9ZnVuY3Rpb24oKXt2YXIgbD1vO24ucHJlc2VydmVfbmFtZXN8fChsPShpPXAodCxpLG4sYSkpLmxhc3QoKSk7dmFyIGQ9bC5jbG9uZSh7d2l0aERhdGFBbmRFdmVudHM6ITB9KS5zaG93KCk7KGwucmVtb3ZlKCkscihuLmFmdGVyX3JlbW92ZSh0LGQpKSl8fChlKG4uZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yKS5maW5kKFwiPiAuXCIrbi5wcmVmaXgrXCItdG1wXCIpLmJlZm9yZShkKSxpPXQuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKSxpPWZ1bmN0aW9uKGUsdCxuLGkpe2Zvcih2YXIgbz10Lmxlbmd0aC0yO28+aTtvLS0pdD1zKGUsdCxvKzEsbyk7cmV0dXJuIGUuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKX0odCxpLG4sYS0xKSk7bi5wb3NpdGlvbl9maWVsZF9zZWxlY3RvciYmZyhuLGkpfTtuLmZhZGVfb3V0P28uZmFkZU91dChcImZhc3RcIixmdW5jdGlvbigpe2woKX0pOmwoKX1yZXR1cm4gaX0seD1mdW5jdGlvbihlLHQsbixpLG8sYSl7cmV0dXJuIDE9PT1NYXRoLmFicyhhLW8pPyhuPXMoZSxuLG8sYSkscihhLW8+MD90LmFmdGVyX3VwKGUsaSk6dC5hZnRlcl9kb3duKGUsaSkpfHwobj1zKGUsbixhLG8pKSk6bzxhPyhuPWYoZSxuLHQsbyxhKSxyKGEtbz4wP3QuYWZ0ZXJfdXAoZSxpKTp0LmFmdGVyX2Rvd24oZSxpKSl8fChuPV8oZSxuLHQsYSxvKSkpOihuPV8oZSxuLHQsbyxhKSxyKGEtbz4wP3QuYWZ0ZXJfdXAoZSxpKTp0LmFmdGVyX2Rvd24oZSxpKSl8fChuPWYoZSxuLHQsYSxvKSkpLHUoZSx0LCExKSx0LnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yP2codCxuKTpufSxnPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUobikuZWFjaChmdW5jdGlvbigpe3ZhciBpPWUodGhpcyk7YShpLmZpbmQodC5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvciksbi5pbmRleChpKSl9KSxufSx3PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQuZmluZCgnOmlucHV0W25hbWVePVwiJytlLm5hbWVfcHJlZml4KydbXCJdJykuYXR0cihcIm5hbWVcIikuc2xpY2UoZS5uYW1lX3ByZWZpeC5sZW5ndGgrMSkuc3BsaXQoXCJdXCIsMSlbMF19LGI9ZnVuY3Rpb24odCxuKXt2YXIgaT0wO3JldHVybiBuLmVhY2goZnVuY3Rpb24oKXt2YXIgbj13KHQsZSh0aGlzKSk7L14wfFsxLTldXFxkKiQvLnRlc3QobikmJm4+PWkmJihpPU51bWJlcihuKSsxKX0pLGl9LHk9ZnVuY3Rpb24odCxuKXtlLmVhY2goW1wiLWFjdGlvblwiLFwiLWFjdGlvbi1kaXNhYmxlZFwiLFwiLWFjdGlvbnNcIixcIi1hZGRcIixcIi1kb3duXCIsXCItZHVwbGljYXRlXCIsXCItcmVtb3ZlXCIsXCItcmVzY3VlLWFkZFwiLFwiLXRtcFwiLFwiLXVwXCJdLGZ1bmN0aW9uKCl7dmFyIGk9dGhpcztuLmVhY2goZnVuY3Rpb24oKXt2YXIgbj1lKHRoaXMpO24uaGFzQ2xhc3ModC51c2VyX3ByZWZpeCtpKSYmbi5hZGRDbGFzcyh0LnByZWZpeCtpKSxuLmZpbmQoXCIqXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgbj1lKHRoaXMpO24uaGFzQ2xhc3ModC51c2VyX3ByZWZpeCtpKSYmbi5hZGRDbGFzcyh0LnByZWZpeCtpKX0pfSl9KX0saj1lKHRoaXMpO3JldHVybiAwPT09ai5sZW5ndGg/KGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IGdpdmVuIGNvbGxlY3Rpb24gc2VsZWN0b3IgZG9lcyBub3QgZXhpc3QuXCIpLCExKTooai5lYWNoKGZ1bmN0aW9uKCl7dmFyIGw9ZS5leHRlbmQoITAse30sbix0KTtpZigwPT09ZShsLmNvbnRhaW5lcikubGVuZ3RoKXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiBhIGNvbnRhaW5lciBzaG91bGQgZXhpc3QgdG8gaGFuZGxlIGV2ZW50cyAoYmFzaWNhbGx5LCBhIDxib2R5PiB0YWcpLlwiKSwhMTt2YXIgZCxjLGY9ZSh0aGlzKTtpZih2b2lkIDAhPT1mLmRhdGEoXCJjb2xsZWN0aW9uXCIpKXt2YXIgXz1lKFwiI1wiK2YuZGF0YShcImNvbGxlY3Rpb25cIikpO2lmKDA9PT1fLmxlbmd0aClyZXR1cm4gY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gY29sbGVjdGlvbiBpZCBkb2VzIG5vdCBleGlzdC5cIiksITB9ZWxzZSBfPWY7aWYoXz1lKF8pLGwuZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yPWwuZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yLnJlcGxhY2UoXCIlaWQlXCIsXCIjXCIraShcIlwiLF8pKSwhbC5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3ImJihsLmVsZW1lbnRzX3BhcmVudF9zZWxlY3Rvcj1cIiNcIitpKFwiXCIsXyksMD09PWUobC5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpLmxlbmd0aCkpcmV0dXJuIGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IGdpdmVuIGVsZW1lbnRzIHBhcmVudCBzZWxlY3RvciBkb2VzIG5vdCByZXR1cm4gYW55IG9iamVjdC5cIiksITA7aWYobC51c2VyX3ByZWZpeD1sLnByZWZpeCxsLnByZWZpeD1fLmF0dHIoXCJpZFwiKStcIi1cIitsLnVzZXJfcHJlZml4LHkobCxfKSxsLmFsbG93X2FkZHx8KGwuYWxsb3dfZHVwbGljYXRlPSExLGwuYWRkX2F0X3RoZV9lbmQ9ITEpLGwuaW5pdF93aXRoX25fZWxlbWVudHM+bC5tYXgmJihsLmluaXRfd2l0aF9uX2VsZW1lbnRzPWwubWF4KSxsLm1pbiYmKCFsLmluaXRfd2l0aF9uX2VsZW1lbnRzfHxsLmluaXRfd2l0aF9uX2VsZW1lbnRzPGwubWluKSYmKGwuaW5pdF93aXRoX25fZWxlbWVudHM9bC5taW4pLCFsLmFjdGlvbl9jb250YWluZXJfdGFnKXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiBhY3Rpb25fY29udGFpbmVyX3RhZyBuZWVkcyB0byBiZSBzZXQuXCIpLCEwO2lmKGwuYmVmb3JlX2luaXQoXyksbnVsbD09PV8uZGF0YShcInByb3RvdHlwZVwiKSlyZXR1cm4gY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gY29sbGVjdGlvbiBmaWVsZCBoYXMgbm8gcHJvdG90eXBlLCBjaGVjayB0aGF0IHlvdXIgZmllbGQgaGFzIHRoZSBwcm90b3R5cGUgb3B0aW9uIHNldCB0byB0cnVlLlwiKSwhMDtpZih2b2lkIDAhPT1fLmRhdGEoXCJwcm90b3R5cGUtbmFtZVwiKSYmKGwucHJvdG90eXBlX25hbWU9Xy5kYXRhKFwicHJvdG90eXBlLW5hbWVcIikpLHZvaWQgMCE9PV8uZGF0YShcImFsbG93LWFkZFwiKSYmKGwuYWxsb3dfYWRkPV8uZGF0YShcImFsbG93LWFkZFwiKSxsLmFsbG93X2R1cGxpY2F0ZT0hIV8uZGF0YShcImFsbG93LWFkZFwiKSYmbC5hbGxvd19kdXBsaWNhdGUpLHZvaWQgMCE9PV8uZGF0YShcImFsbG93LXJlbW92ZVwiKSYmKGwuYWxsb3dfcmVtb3ZlPV8uZGF0YShcImFsbG93LXJlbW92ZVwiKSksdm9pZCAwIT09Xy5kYXRhKFwibmFtZS1wcmVmaXhcIikmJihsLm5hbWVfcHJlZml4PV8uZGF0YShcIm5hbWUtcHJlZml4XCIpKSwhbC5uYW1lX3ByZWZpeClyZXR1cm4gY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogdGhlIHByZWZpeCB1c2VkIGluIGRlc2NlbmRhbnQgZmllbGQgbmFtZXMgaXMgbWFuZGF0b3J5LCB5b3UgY2FuIHNldCBpdCB1c2luZyAyIHdheXM6XCIpLGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IC0gdXNlIHRoZSBmb3JtIHRoZW1lIGdpdmVuIHdpdGggdGhpcyBwbHVnaW4gc291cmNlXCIpLGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IC0gc2V0IG5hbWVfcHJlZml4IG9wdGlvbiB0byAgJ3t7IGZvcm1WaWV3Lm15Q29sbGVjdGlvbkZpZWxkLnZhcnMuZnVsbF9uYW1lIH19J1wiKSwhMDsobC5wcmVzZXJ2ZV9uYW1lcyYmKGwuYWxsb3dfdXA9ITEsbC5hbGxvd19kb3duPSExLGwuZHJhZ19kcm9wPSExLGwuYWRkX2F0X3RoZV9lbmQ9ITApLHZvaWQgMCE9PWpRdWVyeS51aSYmdm9pZCAwIT09alF1ZXJ5LnVpLnNvcnRhYmxlJiZfLmRhdGEoXCJzb3J0YWJsZVwiKSYmXy5zb3J0YWJsZShcImRpc2FibGVcIiksbC5kcmFnX2Ryb3AmJmwuYWxsb3dfdXAmJmwuYWxsb3dfZG93bikmJih2b2lkIDA9PT1qUXVlcnkudWl8fHZvaWQgMD09PWpRdWVyeS51aS5zb3J0YWJsZT9sLmRyYWdfZHJvcD0hMTpfLnNvcnRhYmxlKGUuZXh0ZW5kKCEwLHt9LHtzdGFydDpmdW5jdGlvbih0LG4pe3ZhciBpPV8uZmluZChsLmVsZW1lbnRzX3NlbGVjdG9yKSxvPW4uaXRlbSxhPWUodGhpcyk7cihsLmRyYWdfZHJvcF9zdGFydCh0LG4saSxvKSk/KG4ucGxhY2Vob2xkZXIuaGVpZ2h0KG4uaXRlbS5oZWlnaHQoKSksbi5wbGFjZWhvbGRlci53aWR0aChuLml0ZW0ud2lkdGgoKSksZD1pLmluZGV4KG8pKTphLnNvcnRhYmxlKFwiY2FuY2VsXCIpfSx1cGRhdGU6ZnVuY3Rpb24odCxuKXt2YXIgaT1fLmZpbmQobC5lbGVtZW50c19zZWxlY3Rvciksbz1uLml0ZW07ZSh0aGlzKS5zb3J0YWJsZShcImNhbmNlbFwiKSwhMSE9PWwuZHJhZ19kcm9wX3VwZGF0ZSh0LG4saSxvKSYmcihjLWQ+MD9sLmJlZm9yZV91cChfLG8pOmwuYmVmb3JlX2Rvd24oXyxvKSkmJihjPWkuaW5kZXgobyksaT1fLmZpbmQobC5lbGVtZW50c19zZWxlY3RvcikseChfLGwsaSxvLGQsYykpfX0sbC5kcmFnX2Ryb3Bfb3B0aW9ucykpKTtfLmRhdGEoXCJjb2xsZWN0aW9uLXNldHRpbmdzXCIsbCk7dmFyIHA9ZShsLmNvbnRhaW5lcik7aWYocC5vZmYoXCJjbGlja1wiLFwiLlwiK2wucHJlZml4K1wiLWFjdGlvblwiKS5vbihcImNsaWNrXCIsXCIuXCIrbC5wcmVmaXgrXCItYWN0aW9uXCIsZnVuY3Rpb24odCl7dmFyIG4saSxvPWUodGhpcyk7aWYodm9pZCAwPT09KGk9KG49ZShcIiNcIitvLmRhdGEoXCJjb2xsZWN0aW9uXCIpKSkuZGF0YShcImNvbGxlY3Rpb24tc2V0dGluZ3NcIikpJiZ2b2lkIDA9PT0oaT0obj1lKFwiI1wiK28uZGF0YShcImNvbGxlY3Rpb25cIikpLmZpbmQoXCIuXCIrby5kYXRhKFwiY29sbGVjdGlvblwiKStcIi1jb2xsZWN0aW9uXCIpKS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiKSkpdGhyb3dcIkNhbid0IGZpbmQgY29sbGVjdGlvbjogXCIrby5kYXRhKFwiY29sbGVjdGlvblwiKTt2YXIgYT1uLmZpbmQoaS5lbGVtZW50c19zZWxlY3RvciksbD1vLmRhdGEoXCJlbGVtZW50XCIpP2UoXCIjXCIrby5kYXRhKFwiZWxlbWVudFwiKSk6dm9pZCAwLGQ9bCYmbC5sZW5ndGg/YS5pbmRleChsKTotMSxjPW51bGwsZj1vLmlzKFwiLlwiK2kucHJlZml4K1wiLWR1cGxpY2F0ZVwiKTsoby5pcyhcIi5cIitpLnByZWZpeCtcIi1hZGRcIil8fG8uaXMoXCIuXCIraS5wcmVmaXgrXCItcmVzY3VlLWFkZFwiKXx8ZikmJmkuYWxsb3dfYWRkJiYoYz1cImFkZFwiLGE9bShwLG8sbixpLGEsbCxkLGYpKSxvLmlzKFwiLlwiK2kucHJlZml4K1wiLXJlbW92ZVwiKSYmaS5hbGxvd19yZW1vdmUmJihjPVwicmVtb3ZlXCIsYT12KG4saSxhLGwsZCkpLG8uaXMoXCIuXCIraS5wcmVmaXgrXCItdXBcIikmJmkuYWxsb3dfdXAmJihjPVwidXBcIixhPWZ1bmN0aW9uKGUsdCxuLGksbyl7cmV0dXJuIDAhPT1vJiZyKHQuYmVmb3JlX3VwKGUsaSkpJiYobj1zKGUsbixvLG8tMSkscih0LmFmdGVyX3VwKGUsaSkpfHwobj1zKGUsbixvLTEsbykpKSx0LnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yP2codCxuKTpufShuLGksYSxsLGQpKSxvLmlzKFwiLlwiK2kucHJlZml4K1wiLWRvd25cIikmJmkuYWxsb3dfZG93biYmKGM9XCJkb3duXCIsYT1mdW5jdGlvbihlLHQsbixpLG8pe3JldHVybiBvIT09bi5sZW5ndGgtMSYmcih0LmJlZm9yZV9kb3duKGUsaSkpJiYobj1zKGUsbixvLG8rMSkscih0LmFmdGVyX2Rvd24oZSxuKSl8fChuPXMoZSxuLG8rMSxvKSkpLHQucG9zaXRpb25fZmllbGRfc2VsZWN0b3I/Zyh0LG4pOm59KG4saSxhLGwsZCkpLHUobixpLCExLGMpLHQucHJldmVudERlZmF1bHQoKX0pLHUoXyxsLCEwKSxoKF8sbnVsbCxsKSxsLnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yKXt2YXIgdz1bXSxiPV8uZmluZChsLmVsZW1lbnRzX3NlbGVjdG9yKTtiLmVhY2goZnVuY3Rpb24odCl7dmFyIG49ZSh0aGlzKTt3LnB1c2goe3Bvc2l0aW9uOnBhcnNlRmxvYXQobyhuLmZpbmQobC5wb3NpdGlvbl9maWVsZF9zZWxlY3RvcikpKSxlbGVtZW50Om59KX0pO3cuc29ydChmdW5jdGlvbihlLHQpe3JldHVybiBlLnBvc2l0aW9uPHQucG9zaXRpb24/LTE6ZS5wb3NpdGlvbj50LnBvc2l0aW9uPzE6MH0pLGUuZWFjaCh3LGZ1bmN0aW9uKHQsbil7dmFyIGk9W107ZShiKS5lYWNoKGZ1bmN0aW9uKHQpe2kucHVzaChlKHRoaXMpLmF0dHIoXCJpZFwiKSl9KTt2YXIgbz1uLmVsZW1lbnQscj1lLmluQXJyYXkoby5hdHRyKFwiaWRcIiksaSk7dCE9PXImJihiPXgoXyxsLGIsbyxyLHQpLGEoby5maW5kKGwucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpLGIuaW5kZXgobykpKX0pfWwuYWZ0ZXJfaW5pdChfKX0pLCEwKX19KGpRdWVyeSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbC5wYXJzZUZsb2F0O1xudmFyIEZPUkNFRCA9IDEgLyAkcGFyc2VGbG9hdCh3aGl0ZXNwYWNlcyArICctMCcpICE9PSAtSW5maW5pdHk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyaW5nKSB7XG4gIHZhciB0cmltbWVkU3RyaW5nID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdCh0cmltbWVkU3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiB0cmltbWVkU3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiAkcGFyc2VGbG9hdDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIHRlc3QgPSBbXTtcbnZhciBuYXRpdmVTb3J0ID0gdGVzdC5zb3J0O1xuXG4vLyBJRTgtXG52YXIgRkFJTFNfT05fVU5ERUZJTkVEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pO1xuLy8gVjggYnVnXG52YXIgRkFJTFNfT05fTlVMTCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KG51bGwpO1xufSk7XG4vLyBPbGQgV2ViS2l0XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ3NvcnQnKTtcblxudmFyIEZPUkNFRCA9IEZBSUxTX09OX1VOREVGSU5FRCB8fCAhRkFJTFNfT05fTlVMTCB8fCAhU1RSSUNUX01FVEhPRDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb3J0XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbikge1xuICAgIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZFxuICAgICAgPyBuYXRpdmVTb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSwgYUZ1bmN0aW9uKGNvbXBhcmVmbikpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQnKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VGbG9hdCAhPSBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUZsb2F0OiBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==