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
// @lastUpdate 06/08/2020 08:26



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
jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('click', '.enregistreModeleMail', function () {
  var etat = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).data('type');
  jquery__WEBPACK_IMPORTED_MODULE_3___default.a.ajax({
    url: Routing.generate('administration_stage_periode_courrier_sauvegarde_modele', {
      uuid: jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).data('periode'),
      mail: etat
    }),
    data: {
      message: ed2.root.innerHTML,
      sujet: jquery__WEBPACK_IMPORTED_MODULE_3___default()('#sujet_' + etat).val()
    },
    success: function success() {
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Modèle enregistré !', 'success');
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('.selector-stagePeriodeSoutenances').collection();
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('.selector-stagePeriodeInterruptions').collection();
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('click', '.stage_periode_stagePeriodeInterruptions-collection-action', function () {
    updateDatePicker();
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('click', '.stage_periode_stagePeriodeSoutenances-collection-action', function () {
    updateDatePicker();
  });
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
// @lastUpdate 30/07/2020 11:18



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
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.myedit', function (e) {
  e.preventDefault();
  myEditInitialContent = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this);
  var html = '';

  if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'select') {//todo: A finaliser
  } else {
    console.log('toto');
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
      value: val
    },
    method: 'POST',
    success: function success() {
      myEditInitialContent.html(val);
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
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

},[["./assets/js/pages/adm.stage.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~cf684355","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~865432e1","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~86470384","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~2e82efb8","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~6edbcb60","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~app~datatable~sadm.personnels"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy92ZW5kb3IvanF1ZXJ5LmNvbGxlY3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtZmxvYXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwic3RhZ2VFdHVkaWFudCIsImRhdGEiLCJ0dXRldXIiLCJ2YWwiLCJzdWNjZXNzIiwiYWRkQ2FsbG91dCIsImV0YXQiLCJ1dWlkIiwibWFpbCIsIm1lc3NhZ2UiLCJlZDIiLCJyb290IiwiaW5uZXJIVE1MIiwic3VqZXQiLCJyZWFkeSIsImNvbGxlY3Rpb24iLCJ1cGRhdGVEYXRlUGlja2VyIiwiZWFjaCIsIm9wdGlvbnMiLCJtdWx0aWRhdGVTZXBhcmF0b3IiLCJsYW5ndWFnZSIsImRheXNPZldlZWtIaWdobGlnaHRlZCIsInByb3AiLCJpbnB1dHMiLCJmaW5kIiwiZGF0ZXBpY2tlciIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsImxlbmd0aCIsInBvcCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsb2NhdGlvbiIsImF0dHIiLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInR5cGUiLCJfdG9rZW4iLCJpZCIsImhhc093blByb3BlcnR5IiwiaHJlZiIsImNsb3Nlc3QiLCJyZW1vdmUiLCJlcnJvciIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJmaWVsZCIsIm1ldGhvZCIsIiRvYmoiLCIkaHRtbCIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiLCJ0IiwibiIsImNvbnRhaW5lciIsImFsbG93X3VwIiwidXAiLCJiZWZvcmVfdXAiLCJhZnRlcl91cCIsImFsbG93X2Rvd24iLCJkb3duIiwiYmVmb3JlX2Rvd24iLCJhZnRlcl9kb3duIiwiYWxsb3dfYWRkIiwiYWRkIiwiYmVmb3JlX2FkZCIsImFmdGVyX2FkZCIsImFsbG93X3JlbW92ZSIsImJlZm9yZV9yZW1vdmUiLCJhZnRlcl9yZW1vdmUiLCJhbGxvd19kdXBsaWNhdGUiLCJkdXBsaWNhdGUiLCJiZWZvcmVfZHVwbGljYXRlIiwiYWZ0ZXJfZHVwbGljYXRlIiwiYmVmb3JlX2luaXQiLCJhZnRlcl9pbml0IiwibWluIiwibWF4IiwiYWRkX2F0X3RoZV9lbmQiLCJwcmVmaXgiLCJwcm90b3R5cGVfbmFtZSIsIm5hbWVfcHJlZml4IiwiZWxlbWVudHNfc2VsZWN0b3IiLCJlbGVtZW50c19wYXJlbnRfc2VsZWN0b3IiLCJjaGlsZHJlbiIsImluaXRfd2l0aF9uX2VsZW1lbnRzIiwiaGlkZV91c2VsZXNzX2J1dHRvbnMiLCJkcmFnX2Ryb3AiLCJkcmFnX2Ryb3Bfb3B0aW9ucyIsInBsYWNlaG9sZGVyIiwiZHJhZ19kcm9wX3N0YXJ0IiwiZHJhZ19kcm9wX3VwZGF0ZSIsImN1c3RvbV9hZGRfbG9jYXRpb24iLCJhY3Rpb25fY29udGFpbmVyX3RhZyIsImZhZGVfaW4iLCJmYWRlX291dCIsInBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yIiwicHJlc2VydmVfbmFtZXMiLCJpIiwiTWF0aCIsInJhbmRvbSIsIkRhdGUiLCJnZXRUaW1lIiwic29ydCIsImpvaW4iLCJvIiwiaXMiLCJhIiwicmVtb3ZlQXR0ciIsInIiLCJsIiwiZCIsImF0dHJpYnV0ZXMiLCJlcSIsImMiLCJSZWdFeHAiLCJzIiwic2VsZWN0b3IiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnRBZnRlciIsImYiLCJfIiwicCIsInUiLCJhcHBlbmQiLCJmaXJzdCIsImxhc3QiLCJtIiwiYWRkQmFjayIsImZpbHRlciIsImVuYWJsZWQiLCJjb25kaXRpb24iLCJpbmRleCIsImFwcGVuZFRvIiwiY3NzIiwiaCIsInYiLCJmYWRlSW4iLCJqIiwicSIsImIiLCJDIiwieSIsImsiLCJFIiwiQiIsImNsb25lIiwiUSIsIlIiLCJ3IiwiQSIsImNvbnRlbnRzIiwiaGlkZSIsImJlZm9yZSIsIkQiLCJnIiwid2l0aERhdGFBbmRFdmVudHMiLCJzaG93IiwiZmFkZU91dCIsImFicyIsInNsaWNlIiwidGVzdCIsImhhc0NsYXNzIiwidXNlcl9wcmVmaXgiLCJleHRlbmQiLCJ1aSIsInNvcnRhYmxlIiwic3RhcnQiLCJpdGVtIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1cGRhdGUiLCJvZmYiLCJwdXNoIiwicG9zaXRpb24iLCJwYXJzZUZsb2F0IiwiZWxlbWVudCIsImluQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixlQUF6QixFQUEwQyxZQUFZO0FBQ3BERiwrQ0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsNkNBQWpCLEVBQWdFO0FBQ25FQyxtQkFBYSxFQUFFUCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsT0FBYixDQURvRDtBQUVuRUMsWUFBTSxFQUFFVCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxHQUFSO0FBRjJELEtBQWhFLENBREE7QUFLTEMsV0FBTyxFQUFFLG1CQUFZO0FBQ25CQyw4REFBVSxDQUFDLGdDQUFELEVBQW1DLFNBQW5DLENBQVY7QUFDRDtBQVBJLEdBQVA7QUFTRCxDQVZEO0FBWUFaLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3Qix1QkFBeEIsRUFBaUQsWUFBWTtBQUMzRCxNQUFNVyxJQUFJLEdBQUdiLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxNQUFiLENBQWI7QUFDQVIsK0NBQUMsQ0FBQ0csSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHlEQUFqQixFQUE0RTtBQUMvRVEsVUFBSSxFQUFFZCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsU0FBYixDQUR5RTtBQUUvRU8sVUFBSSxFQUFFRjtBQUZ5RSxLQUE1RSxDQURBO0FBS0xMLFFBQUksRUFBRTtB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QUFDOzs7Ozs7Ozs7Ozs7O0FDYlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRywrQ0FBK0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQy9CRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLCtCQUErQixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFeEU7QUFDQTtBQUNBLEdBQUcsK0RBQStEO0FBQ2xFO0FBQ0EsQ0FBQyIsImZpbGUiOiJhZG0uc3RhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDYvMDgvMjAyMCAwODoyNlxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICcuLi8uLi92ZW5kb3IvanF1ZXJ5LmNvbGxlY3Rpb24ubWluJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2V0dXRldXInLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9zdGFnZV9ldHVkaWFudF9jaGFuZ2VfdHV0ZXVyJywge1xuICAgICAgc3RhZ2VFdHVkaWFudDogJCh0aGlzKS5kYXRhKCdzdGFnZScpLFxuICAgICAgdHV0ZXVyOiAkKHRoaXMpLnZhbCgpXG4gICAgfSksXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnVHV0ZXVyIHVuaXZlcnNpdGFpcmUgbW9kaWZpw6kgIScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmVucmVnaXN0cmVNb2RlbGVNYWlsJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBldGF0ID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3N0YWdlX3BlcmlvZGVfY291cnJpZXJfc2F1dmVnYXJkZV9tb2RlbGUnLCB7XG4gICAgICB1dWlkOiAkKHRoaXMpLmRhdGEoJ3BlcmlvZGUnKSxcbiAgICAgIG1haWw6IGV0YXRcbiAgICB9KSxcbiAgICBkYXRhOiB7XG4gICAgICBtZXNzYWdlOiBlZDIucm9vdC5pbm5lckhUTUwsXG4gICAgICBzdWpldDogJCgnI3N1amV0XycgKyBldGF0KS52YWwoKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnTW9kw6hsZSBlbnJlZ2lzdHLDqSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJCgnLnNlbGVjdG9yLXN0YWdlUGVyaW9kZVNvdXRlbmFuY2VzJykuY29sbGVjdGlvbigpXG4gICQoJy5zZWxlY3Rvci1zdGFnZVBlcmlvZGVJbnRlcnJ1cHRpb25zJykuY29sbGVjdGlvbigpXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3RhZ2VfcGVyaW9kZV9zdGFnZVBlcmlvZGVJbnRlcnJ1cHRpb25zLWNvbGxlY3Rpb24tYWN0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgIHVwZGF0ZURhdGVQaWNrZXIoKVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3RhZ2VfcGVyaW9kZV9zdGFnZVBlcmlvZGVTb3V0ZW5hbmNlcy1jb2xsZWN0aW9uLWFjdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVEYXRlUGlja2VyKClcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGVQaWNrZXIgKCkge1xuICAkKCdbZGF0YS1wcm92aWRlfj1cImRhdGVwaWNrZXJcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIG11bHRpZGF0ZVNlcGFyYXRvcjogJywgJyxcbiAgICAgIGxhbmd1YWdlOiAnZnInLFxuICAgICAgZGF5c09mV2Vla0hpZ2hsaWdodGVkOiAnMDYnXG4gICAgfVxuXG4gICAgaWYgKCQodGhpcykucHJvcCgndGFnTmFtZScpICE9ICdJTlBVVCcpIHtcbiAgICAgIC8vc2kgY2Ugbidlc3QgcGFzIHVuIGlucHV0ID0+IGRvbmMgdW4gZGF0ZSByYW5nZVxuICAgICAgb3B0aW9ucy5pbnB1dHMgPSBbJCh0aGlzKS5maW5kKCdpbnB1dDpmaXJzdCcpLCAkKHRoaXMpLmZpbmQoJ2lucHV0Omxhc3QnKV1cbiAgICB9XG4gICAgJCh0aGlzKS5kYXRlcGlja2VyKG9wdGlvbnMpXG4gIH0pXG59XG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMzAvMDcvMjAyMCAxMToxOFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xuXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3RvdG8nKVxuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcbiAgbGV0ICRodG1sID0gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIC8+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+PC9kaXY+J1xuICByZXR1cm4gJGh0bWxcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2pxdWVyeS5jb2xsZWN0aW9uLm1pbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE3LzA4LzIwMjAgMTQ6MjBcblxuIWZ1bmN0aW9uKGUpe2UuZm4uY29sbGVjdGlvbj1mdW5jdGlvbih0KXt2YXIgbj17Y29udGFpbmVyOlwiYm9keVwiLGFsbG93X3VwOiEwLHVwOic8YSBocmVmPVwiI1wiPiYjeDI1QjI7PC9hPicsYmVmb3JlX3VwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFmdGVyX3VwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFsbG93X2Rvd246ITAsZG93bjonPGEgaHJlZj1cIiNcIj4mI3gyNUJDOzwvYT4nLGJlZm9yZV9kb3duOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFmdGVyX2Rvd246ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sYWxsb3dfYWRkOiEwLGFkZDonPGEgaHJlZj1cIiNcIj5bICsgXTwvYT4nLGJlZm9yZV9hZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sYWZ0ZXJfYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFsbG93X3JlbW92ZTohMCxyZW1vdmU6JzxhIGhyZWY9XCIjXCI+WyAtIF08L2E+JyxiZWZvcmVfcmVtb3ZlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFmdGVyX3JlbW92ZTpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhbGxvd19kdXBsaWNhdGU6ITEsZHVwbGljYXRlOic8YSBocmVmPVwiI1wiPlsgIyBdPC9hPicsYmVmb3JlX2R1cGxpY2F0ZTpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhZnRlcl9kdXBsaWNhdGU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sYmVmb3JlX2luaXQ6ZnVuY3Rpb24oZSl7fSxhZnRlcl9pbml0OmZ1bmN0aW9uKGUpe30sbWluOjAsbWF4OjEwMCxhZGRfYXRfdGhlX2VuZDohMSxwcmVmaXg6XCJjb2xsZWN0aW9uXCIscHJvdG90eXBlX25hbWU6XCJfX25hbWVfX1wiLG5hbWVfcHJlZml4Om51bGwsZWxlbWVudHNfc2VsZWN0b3I6XCI+IGRpdiwgPiBmaWVsZHNldFwiLGVsZW1lbnRzX3BhcmVudF9zZWxlY3RvcjpcIiVpZCVcIixjaGlsZHJlbjpudWxsLGluaXRfd2l0aF9uX2VsZW1lbnRzOjAsaGlkZV91c2VsZXNzX2J1dHRvbnM6ITAsZHJhZ19kcm9wOiEwLGRyYWdfZHJvcF9vcHRpb25zOntwbGFjZWhvbGRlcjpcInVpLXN0YXRlLWhpZ2hsaWdodFwifSxkcmFnX2Ryb3Bfc3RhcnQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sZHJhZ19kcm9wX3VwZGF0ZTpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxjdXN0b21fYWRkX2xvY2F0aW9uOiExLGFjdGlvbl9jb250YWluZXJfdGFnOlwiZGl2XCIsZmFkZV9pbjohMCxmYWRlX291dDohMCxwb3NpdGlvbl9maWVsZF9zZWxlY3RvcjpudWxsLHByZXNlcnZlX25hbWVzOiExfSxpPWZ1bmN0aW9uKHQsbil7aWYoIW4uYXR0cihcImlkXCIpKXt2YXIgaTtkb3tpPXQrXCJfXCIrKFwiXCIrMWUzKk1hdGgucmFuZG9tKCkqKG5ldyBEYXRlKS5nZXRUaW1lKCkpLnJlcGxhY2UoXCIuXCIsXCJcIikuc3BsaXQoXCJcIikuc29ydChmdW5jdGlvbigpe3JldHVybi41LU1hdGgucmFuZG9tKCl9KS5qb2luKFwiXCIpfXdoaWxlKGUoXCIjXCIraSkubGVuZ3RoPjApO24uYXR0cihcImlkXCIsaSl9cmV0dXJuIG4uYXR0cihcImlkXCIpfSxvPWZ1bmN0aW9uKHQpe3RyeXt2YXIgbj1lKHQpfWNhdGNoKGUpe3JldHVybiBudWxsfXJldHVybiAwPT09bi5sZW5ndGg/bnVsbDpuLmlzKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKT8hMD09PW4ucHJvcChcImNoZWNrZWRcIik6bi5pcygnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykmJnZvaWQgMCE9PW4uYXR0cihcIm5hbWVcIik/ZSgnaW5wdXRbbmFtZT1cIicrbi5hdHRyKFwibmFtZVwiKSsnXCJdOmNoZWNrZWQnKS52YWwoKTp2b2lkIDAhPT1uLnByb3AoXCJ2YWx1ZVwiKT9uLnZhbCgpOm4uaHRtbCgpfSxhPWZ1bmN0aW9uKHQsbixpKXt0cnl7dmFyIG89ZSh0KX1jYXRjaChlKXtyZXR1cm59MCE9PW8ubGVuZ3RoJiYoby5pcygnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk/bj9vLmF0dHIoXCJjaGVja2VkXCIsITApOm8ucmVtb3ZlQXR0cihcImNoZWNrZWRcIik6dm9pZCAwIT09by5wcm9wKFwidmFsdWVcIik/aT9vLmF0dHIoXCJ2YWx1ZVwiLG4pOm8udmFsKG4pOm8uaHRtbChuKSl9LHI9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWV8fGV9LGw9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZSgvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nLFwiXFxcXCQmXCIpfSxkPWZ1bmN0aW9uKHQsbixpLG8pe3ZhciBhPWZ1bmN0aW9uKHQpe3ZhciBuPWUodCk7XCJvYmplY3RcIj09dHlwZW9mIHQmJlwiYXR0cmlidXRlc1wiaW4gdCYmZS5lYWNoKHQuYXR0cmlidXRlcyxmdW5jdGlvbih0LGEpe1wic3RyaW5nXCI9PT1lLnR5cGUoYS52YWx1ZSkmJm4uYXR0cihhLm5hbWUucmVwbGFjZShpLG8pLGEudmFsdWUucmVwbGFjZShpLG8pKX0pLG4ubGVuZ3RoPjAmJmUuZWFjaChuLmRhdGEoKSxmdW5jdGlvbih0LGEpe1wic3RyaW5nXCI9PT1lLnR5cGUoYSkmJm4uZGF0YSh0LnJlcGxhY2UoaSxvKSxhLnJlcGxhY2UoaSxvKSl9KX0scj10LmVxKG4pO2EoclswXSksci5maW5kKFwiKlwiKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKX0pfSxjPWZ1bmN0aW9uKHQsbixpLG8sYSxyKXt2YXIgYz1uZXcgUmVnRXhwKGwoaS5uYW1lX3ByZWZpeCtcIltcIithK1wiXVwiKSxcImdcIikscz1pLm5hbWVfcHJlZml4K1wiW1wiK3IrXCJdXCI7aS5jaGlsZHJlbiYmZS5lYWNoKGkuY2hpbGRyZW4sZnVuY3Rpb24oZSxuKXt2YXIgaT10LmZpbmQobi5zZWxlY3RvcikuZXEobyksYT1pLmRhdGEoXCJjb2xsZWN0aW9uLXNldHRpbmdzXCIpO2EmJihhLm5hbWVfcHJlZml4PWEubmFtZV9wcmVmaXgucmVwbGFjZShjLHMpLGkuZGF0YShcImNvbGxlY3Rpb24tc2V0dGluZ3NcIixhKSl9KSxkKG4sbyxjLHMpLGM9bmV3IFJlZ0V4cChsKHQuYXR0cihcImlkXCIpK1wiX1wiK2EpLFwiZ1wiKSxzPXQuYXR0cihcImlkXCIpK1wiX1wiK3IsaS5jaGlsZHJlbiYmZS5lYWNoKGkuY2hpbGRyZW4sZnVuY3Rpb24oZSxuKXt2YXIgaT10LmZpbmQobi5zZWxlY3RvcikuZXEobyksYT1pLmRhdGEoXCJjb2xsZWN0aW9uLXNldHRpbmdzXCIpO2EmJihhLmVsZW1lbnRzX3BhcmVudF9zZWxlY3Rvcj1hLmVsZW1lbnRzX3BhcmVudF9zZWxlY3Rvci5yZXBsYWNlKGMscyksYS5lbGVtZW50c19zZWxlY3Rvcj1hLmVsZW1lbnRzX3NlbGVjdG9yLnJlcGxhY2UoYyxzKSxhLnByZWZpeD1hLnByZWZpeC5yZXBsYWNlKGMscyksaS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiLGEpKX0pLGQobixvLGMscyl9LHM9ZnVuY3Rpb24oZSx0LG4saSl7dmFyIG89ZS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiKTtyZXR1cm4gby5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcnx8by5wcmVzZXJ2ZV9uYW1lc3x8KGMoZSx0LG8sbixuLFwiX19zd2FwX19cIiksYyhlLHQsbyxpLGksbiksYyhlLHQsbyxuLFwiX19zd2FwX19cIixpKSksdC5lcShuKS5pbnNlcnRCZWZvcmUodC5lcShpKSksaT5uP3QuZXEoaSkuaW5zZXJ0QmVmb3JlKHQuZXEobikpOnQuZXEoaSkuaW5zZXJ0QWZ0ZXIodC5lcShuKSksZS5maW5kKG8uZWxlbWVudHNfc2VsZWN0b3IpfSxmPWZ1bmN0aW9uKGUsdCxuLGksbyl7Zm9yKHZhciBhPWkrMTthPD1vO2ErKyl0PXMoZSx0LGEsYS0xKTtyZXR1cm4gZS5maW5kKG4uZWxlbWVudHNfc2VsZWN0b3IpfSxfPWZ1bmN0aW9uKGUsdCxuLGksbyl7Zm9yKHZhciBhPWktMTthPj1vO2EtLSl0PXMoZSx0LGEsYSsxKTtyZXR1cm4gZS5maW5kKG4uZWxlbWVudHNfc2VsZWN0b3IpfSxwPWZ1bmN0aW9uKGUsdCxuLGkpe2Zvcih2YXIgbz1pKzE7bzx0Lmxlbmd0aDtvKyspdD1zKGUsdCxvLTEsbyk7cmV0dXJuIGUuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKX0sdT1mdW5jdGlvbih0LG4sbyxhKXt2YXIgcj1lKG4uZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yKSxsPTA9PT1yLmZpbmQoXCIuXCIrbi5wcmVmaXgrXCItdG1wXCIpLmxlbmd0aCxkPXQuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKTtpZihuLmFsbG93X2FkZCYmbCYmKHIuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIicrbi5wcmVmaXgrJy10bXBcIj48L3NwYW4+Jyksbi5hZGQmJnIuYXBwZW5kKGUobi5hZGQpLmFkZENsYXNzKG4ucHJlZml4K1wiLWFjdGlvbiBcIituLnByZWZpeCtcIi1yZXNjdWUtYWRkXCIpLmRhdGEoXCJjb2xsZWN0aW9uXCIsdC5hdHRyKFwiaWRcIikpKSksbyl7dC5kYXRhKFwiY29sbGVjdGlvbi1vZmZzZXRcIixkLmxlbmd0aCk7Zm9yKHZhciBjPWUobi5jb250YWluZXIpLHM9dC5maW5kKFwiLlwiK24ucHJlZml4K1wiLWFkZCwgLlwiK24ucHJlZml4K1wiLXJlc2N1ZS1hZGQsIC5cIituLnByZWZpeCtcIi1kdXBsaWNhdGVcIikuZmlyc3QoKSxmPTA7ZC5sZW5ndGg8bi5pbml0X3dpdGhfbl9lbGVtZW50czspe2YrKzt2YXIgXz1kLmxlbmd0aD4wP2QubGFzdCgpOnZvaWQgMCxwPWQubGVuZ3RoLTE7aWYoZD1tKGMscyx0LG4sZCxfLHAsITEpLGY+bi5pbml0X3dpdGhfbl9lbGVtZW50cyl7Y29uc29sZS5lcnJvcihcIkluZmluaXRlIGxvb3AsIGVsZW1lbnQgc2VsZWN0b3IgKFwiK24uZWxlbWVudHNfc2VsZWN0b3IrXCIpIG5vdCBmb3VuZCAhXCIpO2JyZWFrfX10LmRhdGEoXCJjb2xsZWN0aW9uLW9mZnNldFwiLGQubGVuZ3RoKX1pZihkLmVhY2goZnVuY3Rpb24ocil7dmFyIGw9ZSh0aGlzKTtvJiZsLmRhdGEoXCJpbmRleFwiLHIpO3ZhciBjPWwuZmluZChcIi5cIituLnByZWZpeCtcIi1hY3Rpb25zXCIpLmFkZEJhY2soKS5maWx0ZXIoXCIuXCIrbi5wcmVmaXgrXCItYWN0aW9uc1wiKTswPT09Yy5sZW5ndGgmJihjPWUoXCI8XCIrbi5hY3Rpb25fY29udGFpbmVyX3RhZysnIGNsYXNzPVwiJytuLnByZWZpeCsnLWFjdGlvbnNcIj48Lycrbi5hY3Rpb25fY29udGFpbmVyX3RhZytcIj5cIiksbC5hcHBlbmQoYykpO3ZhciBzPTA7XCJyZW1vdmVcIj09PWEmJm4uZmFkZV9vdXQmJihzPTEpO3ZhciBmPVt7ZW5hYmxlZDpuLmFsbG93X3JlbW92ZSxzZWxlY3RvcjpuLnByZWZpeCtcIi1yZW1vdmVcIixodG1sOm4ucmVtb3ZlLGNvbmRpdGlvbjpkLmxlbmd0aC1zPm4ubWlufSx7ZW5hYmxlZDpuLmFsbG93X3VwLHNlbGVjdG9yOm4ucHJlZml4K1wiLXVwXCIsaHRtbDpuLnVwLGNvbmRpdGlvbjpkLmxlbmd0aC1zPjEmJmQuaW5kZXgobCktcz4wfSx7ZW5hYmxlZDpuLmFsbG93X2Rvd24sc2VsZWN0b3I6bi5wcmVmaXgrXCItZG93blwiLGh0bWw6bi5kb3duLGNvbmRpdGlvbjpkLmxlbmd0aC1zPjEmJmQuaW5kZXgobCkhPT1kLmxlbmd0aC0xfSx7ZW5hYmxlZDpuLmFsbG93X2FkZCYmIW4uYWRkX2F0X3RoZV9lbmQmJiFuLmN1c3RvbV9hZGRfbG9jYXRpb24sc2VsZWN0b3I6bi5wcmVmaXgrXCItYWRkXCIsaHRtbDpuLmFkZCxjb25kaXRpb246ZC5sZW5ndGgtczxuLm1heH0se2VuYWJsZWQ6bi5hbGxvd19kdXBsaWNhdGUsc2VsZWN0b3I6bi5wcmVmaXgrXCItZHVwbGljYXRlXCIsaHRtbDpuLmR1cGxpY2F0ZSxjb25kaXRpb246ZC5sZW5ndGgtczxuLm1heH1dO2UuZWFjaChmLGZ1bmN0aW9uKG8sYSl7aWYoYS5lbmFibGVkKXt2YXIgZD1sLmZpbmQoXCIuXCIrYS5zZWxlY3Rvcik7MD09PWQubGVuZ3RoJiZhLmh0bWwmJihkPWUoYS5odG1sKS5hcHBlbmRUbyhjKS5hZGRDbGFzcyhhLnNlbGVjdG9yKSksYS5jb25kaXRpb24/KGQucmVtb3ZlQ2xhc3Mobi5wcmVmaXgrXCItYWN0aW9uLWRpc2FibGVkXCIpLG4uaGlkZV91c2VsZXNzX2J1dHRvbnMmJmQuY3NzKFwiZGlzcGxheVwiLFwiXCIpKTooZC5hZGRDbGFzcyhuLnByZWZpeCtcIi1hY3Rpb24tZGlzYWJsZWRcIiksbi5oaWRlX3VzZWxlc3NfYnV0dG9ucyYmZC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpKSxkLmFkZENsYXNzKG4ucHJlZml4K1wiLWFjdGlvblwiKS5kYXRhKFwiY29sbGVjdGlvblwiLHQuYXR0cihcImlkXCIpKS5kYXRhKFwiZWxlbWVudFwiLGkodC5hdHRyKFwiaWRcIikrXCJfXCIrcixsKSl9ZWxzZSBsLmZpbmQoXCIuXCIrYS5zZWxlY3RvcikuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKX0pfSksbi5hbGxvd19hZGQpe3ZhciB1PTA7XCJyZW1vdmVcIj09PWEmJm4uZmFkZV9vdXQmJih1PTEpO3ZhciBoPXQuZmluZChcIi5cIituLnByZWZpeCtcIi1yZXNjdWUtYWRkXCIpLmNzcyhcImRpc3BsYXlcIixcIlwiKS5yZW1vdmVDbGFzcyhuLnByZWZpeCtcIi1hY3Rpb24tZGlzYWJsZWRcIiksdj10LmZpbmQoXCIuXCIrbi5wcmVmaXgrXCItYWRkXCIpOyFuLmFkZF9hdF90aGVfZW5kJiZ2Lmxlbmd0aD51fHxuLmN1c3RvbV9hZGRfbG9jYXRpb24/aC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpOlwicmVtb3ZlXCI9PT1hJiZuLmZhZGVfb3V0JiYoaC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpLGguZmFkZUluKFwiZmFzdFwiKSksZC5sZW5ndGgtdT49bi5tYXgmJihoLmFkZENsYXNzKG4ucHJlZml4K1wiLWFjdGlvbi1kaXNhYmxlZFwiKSxuLmhpZGVfdXNlbGVzc19idXR0b25zJiZ0LmZpbmQoXCIuXCIrbi5wcmVmaXgrXCItYWRkLCAuXCIrbi5wcmVmaXgrXCItcmVzY3VlLWFkZCwgLlwiK24ucHJlZml4K1wiLWR1cGxpY2F0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpKX19LGg9ZnVuY3Rpb24odCxuLGkpe2kuY2hpbGRyZW4mJmUuZWFjaChpLmNoaWxkcmVuLGZ1bmN0aW9uKGUsaSl7aWYoIWkuc2VsZWN0b3IpcmV0dXJuIGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IGdpdmVuIGNvbGxlY3Rpb24gXCIrdC5hdHRyKFwiaWRcIikrXCIgaGFzIGNoaWxkcmVuIGNvbGxlY3Rpb25zLCBidXQgY2hpbGRyZW4ncyByb290IHNlbGVjdG9yIGlzIHVuZGVmaW5lZC5cIiksITA7bnVsbCE9PW4/bi5maW5kKGkuc2VsZWN0b3IpLmNvbGxlY3Rpb24oaSk6dC5maW5kKGkuc2VsZWN0b3IpLmNvbGxlY3Rpb24oaSl9KX0sbT1mdW5jdGlvbih0LG4saSxkLGMscyxmLF8pe2lmKGMubGVuZ3RoPGQubWF4JiYoXyYmcihkLmJlZm9yZV9kdXBsaWNhdGUoaSxzKSl8fHIoZC5iZWZvcmVfYWRkKGkscykpKSl7dmFyIG09aS5kYXRhKFwicHJvdG90eXBlXCIpLHY9aS5kYXRhKFwiY29sbGVjdGlvbi1vZmZzZXRcIik7aS5kYXRhKFwiY29sbGVjdGlvbi1vZmZzZXRcIix2KzEpLC0xPT09ZiYmKGY9Yy5sZW5ndGgtMSk7dmFyIGo9bmV3IFJlZ0V4cChsKGQucHJvdG90eXBlX25hbWUpLFwiZ1wiKSxxPXY7ZC5wcmVzZXJ2ZV9uYW1lcyYmKHZvaWQgMD09PShxPWkuZGF0YShcImNvbGxlY3Rpb24tZnJlZS1rZXlcIikpJiYocT1iKGQsYykpLGkuZGF0YShcImNvbGxlY3Rpb24tZnJlZS1rZXlcIixxKzEpKTt2YXIgQz1lKG0ucmVwbGFjZShqLHEpKS5kYXRhKFwiaW5kZXhcIix2KTt5KGQsQyk7dmFyIGs9ZShkLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvcikuZmluZChcIj4gLlwiK2QucHJlZml4K1wiLXRtcFwiKTtlKEMpLmZpbmQoXCJbaWRdXCIpLmZpcnN0KCkuYXR0cihcImlkXCIpO2lmKF8pe3ZhciBFPWMuZXEoZik7IWZ1bmN0aW9uKHQpe2UodCkuZmluZChcIjppbnB1dFwiKS5lYWNoKGZ1bmN0aW9uKGUsdCl7YSh0LG8odCksITApfSl9KEUpO3ZhciBCPWUoXCI8ZGl2Lz5cIikuYXBwZW5kKEUuY2xvbmUoKSkuaHRtbCgpLFE9ZC5wcmVzZXJ2ZV9uYW1lc3x8ZC5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcj9FLmRhdGEoXCJpbmRleFwiKTpmLFI9ZC5wcmVzZXJ2ZV9uYW1lcz93KGQsRSk6USxBPWZ1bmN0aW9uKGUsdCxuLGksbyxhLHIpe3ZhciBkPW5ldyBSZWdFeHAobCh0Lm5hbWVfcHJlZml4K1wiW1wiK2ErXCJdXCIpLFwiZ1wiKSxjPXQubmFtZV9wcmVmaXgrXCJbXCIrcitcIl1cIjtyZXR1cm4gbj1uLnJlcGxhY2UoZCxjKSxkPW5ldyBSZWdFeHAobChlLmF0dHIoXCJpZFwiKStcIl9cIitpKSxcImdcIiksYz1lLmF0dHIoXCJpZFwiKStcIl9cIitvLG49bi5yZXBsYWNlKGQsYyl9KGksZCxCLFEsdixSLHEpO0M9ZShcIjxkaXYvPlwiKS5odG1sKEEpLmNvbnRlbnRzKCkuZGF0YShcImluZGV4XCIsdiksZC5mYWRlX2luJiZDLmhpZGUoKSxrLmJlZm9yZShDKS5maW5kKGQucHJlZml4K1wiLWFjdGlvbnNcIikucmVtb3ZlKCl9ZWxzZSBkLmZhZGVfaW4mJkMuaGlkZSgpLGsuYmVmb3JlKEMpO2M9aS5maW5kKGQuZWxlbWVudHNfc2VsZWN0b3IpO3ZhciBEPUMuZmluZChcIi5cIitkLnByZWZpeCtcIi1hZGQsIC5cIitkLnByZWZpeCtcIi1kdXBsaWNhdGVcIik7RC5sZW5ndGg+MCYmRC5hZGRDbGFzcyhkLnByZWZpeCtcIi1hY3Rpb25cIikuZGF0YShcImNvbGxlY3Rpb25cIixpLmF0dHIoXCJpZFwiKSksZC5hZGRfYXRfdGhlX2VuZHx8ZisxPT09dj91KGksZCwhMSk6Yz14KGksZCxjLEMsdixmKzEpLGgoaSxDLGQpLChfJiYhcihkLmFmdGVyX2R1cGxpY2F0ZShpLEMpKXx8IXIoZC5hZnRlcl9hZGQoaSxDKSkpJiYoLTEhPT1mJiYoYz1wKGksYyxkLGYrMSkpLEMucmVtb3ZlKCkpfWlmKHZvaWQgMCE9PUMmJmQuZmFkZV9pbilDLmZhZGVJbihcImZhc3RcIixmdW5jdGlvbigpe2QucG9zaXRpb25fZmllbGRfc2VsZWN0b3ImJmcoZCxjKX0pO2Vsc2UgaWYoZC5wb3NpdGlvbl9maWVsZF9zZWxlY3RvcilyZXR1cm4gZyhkLGMpO3JldHVybiBjfSx2PWZ1bmN0aW9uKHQsbixpLG8sYSl7aWYoaS5sZW5ndGg+bi5taW4mJnIobi5iZWZvcmVfcmVtb3ZlKHQsbykpKXt2YXIgbD1mdW5jdGlvbigpe3ZhciBsPW87bi5wcmVzZXJ2ZV9uYW1lc3x8KGw9KGk9cCh0LGksbixhKSkubGFzdCgpKTt2YXIgZD1sLmNsb25lKHt3aXRoRGF0YUFuZEV2ZW50czohMH0pLnNob3coKTsobC5yZW1vdmUoKSxyKG4uYWZ0ZXJfcmVtb3ZlKHQsZCkpKXx8KGUobi5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpLmZpbmQoXCI+IC5cIituLnByZWZpeCtcIi10bXBcIikuYmVmb3JlKGQpLGk9dC5maW5kKG4uZWxlbWVudHNfc2VsZWN0b3IpLGk9ZnVuY3Rpb24oZSx0LG4saSl7Zm9yKHZhciBvPXQubGVuZ3RoLTI7bz5pO28tLSl0PXMoZSx0LG8rMSxvKTtyZXR1cm4gZS5maW5kKG4uZWxlbWVudHNfc2VsZWN0b3IpfSh0LGksbixhLTEpKTtuLnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yJiZnKG4saSl9O24uZmFkZV9vdXQ/by5mYWRlT3V0KFwiZmFzdFwiLGZ1bmN0aW9uKCl7bCgpfSk6bCgpfXJldHVybiBpfSx4PWZ1bmN0aW9uKGUsdCxuLGksbyxhKXtyZXR1cm4gMT09PU1hdGguYWJzKGEtbyk/KG49cyhlLG4sbyxhKSxyKGEtbz4wP3QuYWZ0ZXJfdXAoZSxpKTp0LmFmdGVyX2Rvd24oZSxpKSl8fChuPXMoZSxuLGEsbykpKTpvPGE/KG49ZihlLG4sdCxvLGEpLHIoYS1vPjA/dC5hZnRlcl91cChlLGkpOnQuYWZ0ZXJfZG93bihlLGkpKXx8KG49XyhlLG4sdCxhLG8pKSk6KG49XyhlLG4sdCxvLGEpLHIoYS1vPjA/dC5hZnRlcl91cChlLGkpOnQuYWZ0ZXJfZG93bihlLGkpKXx8KG49ZihlLG4sdCxhLG8pKSksdShlLHQsITEpLHQucG9zaXRpb25fZmllbGRfc2VsZWN0b3I/Zyh0LG4pOm59LGc9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZShuKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9ZSh0aGlzKTthKGkuZmluZCh0LnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yKSxuLmluZGV4KGkpKX0pLG59LHc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5maW5kKCc6aW5wdXRbbmFtZV49XCInK2UubmFtZV9wcmVmaXgrJ1tcIl0nKS5hdHRyKFwibmFtZVwiKS5zbGljZShlLm5hbWVfcHJlZml4Lmxlbmd0aCsxKS5zcGxpdChcIl1cIiwxKVswXX0sYj1mdW5jdGlvbih0LG4pe3ZhciBpPTA7cmV0dXJuIG4uZWFjaChmdW5jdGlvbigpe3ZhciBuPXcodCxlKHRoaXMpKTsvXjB8WzEtOV1cXGQqJC8udGVzdChuKSYmbj49aSYmKGk9TnVtYmVyKG4pKzEpfSksaX0seT1mdW5jdGlvbih0LG4pe2UuZWFjaChbXCItYWN0aW9uXCIsXCItYWN0aW9uLWRpc2FibGVkXCIsXCItYWN0aW9uc1wiLFwiLWFkZFwiLFwiLWRvd25cIixcIi1kdXBsaWNhdGVcIixcIi1yZW1vdmVcIixcIi1yZXNjdWUtYWRkXCIsXCItdG1wXCIsXCItdXBcIl0sZnVuY3Rpb24oKXt2YXIgaT10aGlzO24uZWFjaChmdW5jdGlvbigpe3ZhciBuPWUodGhpcyk7bi5oYXNDbGFzcyh0LnVzZXJfcHJlZml4K2kpJiZuLmFkZENsYXNzKHQucHJlZml4K2kpLG4uZmluZChcIipcIikuZWFjaChmdW5jdGlvbigpe3ZhciBuPWUodGhpcyk7bi5oYXNDbGFzcyh0LnVzZXJfcHJlZml4K2kpJiZuLmFkZENsYXNzKHQucHJlZml4K2kpfSl9KX0pfSxqPWUodGhpcyk7cmV0dXJuIDA9PT1qLmxlbmd0aD8oY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gY29sbGVjdGlvbiBzZWxlY3RvciBkb2VzIG5vdCBleGlzdC5cIiksITEpOihqLmVhY2goZnVuY3Rpb24oKXt2YXIgbD1lLmV4dGVuZCghMCx7fSxuLHQpO2lmKDA9PT1lKGwuY29udGFpbmVyKS5sZW5ndGgpcmV0dXJuIGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IGEgY29udGFpbmVyIHNob3VsZCBleGlzdCB0byBoYW5kbGUgZXZlbnRzIChiYXNpY2FsbHksIGEgPGJvZHk+IHRhZykuXCIpLCExO3ZhciBkLGMsZj1lKHRoaXMpO2lmKHZvaWQgMCE9PWYuZGF0YShcImNvbGxlY3Rpb25cIikpe3ZhciBfPWUoXCIjXCIrZi5kYXRhKFwiY29sbGVjdGlvblwiKSk7aWYoMD09PV8ubGVuZ3RoKXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiBnaXZlbiBjb2xsZWN0aW9uIGlkIGRvZXMgbm90IGV4aXN0LlwiKSwhMH1lbHNlIF89ZjtpZihfPWUoXyksbC5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3I9bC5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IucmVwbGFjZShcIiVpZCVcIixcIiNcIitpKFwiXCIsXykpLCFsLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvciYmKGwuZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yPVwiI1wiK2koXCJcIixfKSwwPT09ZShsLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvcikubGVuZ3RoKSlyZXR1cm4gY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gZWxlbWVudHMgcGFyZW50IHNlbGVjdG9yIGRvZXMgbm90IHJldHVybiBhbnkgb2JqZWN0LlwiKSwhMDtpZihsLnVzZXJfcHJlZml4PWwucHJlZml4LGwucHJlZml4PV8uYXR0cihcImlkXCIpK1wiLVwiK2wudXNlcl9wcmVmaXgseShsLF8pLGwuYWxsb3dfYWRkfHwobC5hbGxvd19kdXBsaWNhdGU9ITEsbC5hZGRfYXRfdGhlX2VuZD0hMSksbC5pbml0X3dpdGhfbl9lbGVtZW50cz5sLm1heCYmKGwuaW5pdF93aXRoX25fZWxlbWVudHM9bC5tYXgpLGwubWluJiYoIWwuaW5pdF93aXRoX25fZWxlbWVudHN8fGwuaW5pdF93aXRoX25fZWxlbWVudHM8bC5taW4pJiYobC5pbml0X3dpdGhfbl9lbGVtZW50cz1sLm1pbiksIWwuYWN0aW9uX2NvbnRhaW5lcl90YWcpcmV0dXJuIGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IGFjdGlvbl9jb250YWluZXJfdGFnIG5lZWRzIHRvIGJlIHNldC5cIiksITA7aWYobC5iZWZvcmVfaW5pdChfKSxudWxsPT09Xy5kYXRhKFwicHJvdG90eXBlXCIpKXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiBnaXZlbiBjb2xsZWN0aW9uIGZpZWxkIGhhcyBubyBwcm90b3R5cGUsIGNoZWNrIHRoYXQgeW91ciBmaWVsZCBoYXMgdGhlIHByb3RvdHlwZSBvcHRpb24gc2V0IHRvIHRydWUuXCIpLCEwO2lmKHZvaWQgMCE9PV8uZGF0YShcInByb3RvdHlwZS1uYW1lXCIpJiYobC5wcm90b3R5cGVfbmFtZT1fLmRhdGEoXCJwcm90b3R5cGUtbmFtZVwiKSksdm9pZCAwIT09Xy5kYXRhKFwiYWxsb3ctYWRkXCIpJiYobC5hbGxvd19hZGQ9Xy5kYXRhKFwiYWxsb3ctYWRkXCIpLGwuYWxsb3dfZHVwbGljYXRlPSEhXy5kYXRhKFwiYWxsb3ctYWRkXCIpJiZsLmFsbG93X2R1cGxpY2F0ZSksdm9pZCAwIT09Xy5kYXRhKFwiYWxsb3ctcmVtb3ZlXCIpJiYobC5hbGxvd19yZW1vdmU9Xy5kYXRhKFwiYWxsb3ctcmVtb3ZlXCIpKSx2b2lkIDAhPT1fLmRhdGEoXCJuYW1lLXByZWZpeFwiKSYmKGwubmFtZV9wcmVmaXg9Xy5kYXRhKFwibmFtZS1wcmVmaXhcIikpLCFsLm5hbWVfcHJlZml4KXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiB0aGUgcHJlZml4IHVzZWQgaW4gZGVzY2VuZGFudCBmaWVsZCBuYW1lcyBpcyBtYW5kYXRvcnksIHlvdSBjYW4gc2V0IGl0IHVzaW5nIDIgd2F5czpcIiksY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogLSB1c2UgdGhlIGZvcm0gdGhlbWUgZ2l2ZW4gd2l0aCB0aGlzIHBsdWdpbiBzb3VyY2VcIiksY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogLSBzZXQgbmFtZV9wcmVmaXggb3B0aW9uIHRvICAne3sgZm9ybVZpZXcubXlDb2xsZWN0aW9uRmllbGQudmFycy5mdWxsX25hbWUgfX0nXCIpLCEwOyhsLnByZXNlcnZlX25hbWVzJiYobC5hbGxvd191cD0hMSxsLmFsbG93X2Rvd249ITEsbC5kcmFnX2Ryb3A9ITEsbC5hZGRfYXRfdGhlX2VuZD0hMCksdm9pZCAwIT09alF1ZXJ5LnVpJiZ2b2lkIDAhPT1qUXVlcnkudWkuc29ydGFibGUmJl8uZGF0YShcInNvcnRhYmxlXCIpJiZfLnNvcnRhYmxlKFwiZGlzYWJsZVwiKSxsLmRyYWdfZHJvcCYmbC5hbGxvd191cCYmbC5hbGxvd19kb3duKSYmKHZvaWQgMD09PWpRdWVyeS51aXx8dm9pZCAwPT09alF1ZXJ5LnVpLnNvcnRhYmxlP2wuZHJhZ19kcm9wPSExOl8uc29ydGFibGUoZS5leHRlbmQoITAse30se3N0YXJ0OmZ1bmN0aW9uKHQsbil7dmFyIGk9Xy5maW5kKGwuZWxlbWVudHNfc2VsZWN0b3IpLG89bi5pdGVtLGE9ZSh0aGlzKTtyKGwuZHJhZ19kcm9wX3N0YXJ0KHQsbixpLG8pKT8obi5wbGFjZWhvbGRlci5oZWlnaHQobi5pdGVtLmhlaWdodCgpKSxuLnBsYWNlaG9sZGVyLndpZHRoKG4uaXRlbS53aWR0aCgpKSxkPWkuaW5kZXgobykpOmEuc29ydGFibGUoXCJjYW5jZWxcIil9LHVwZGF0ZTpmdW5jdGlvbih0LG4pe3ZhciBpPV8uZmluZChsLmVsZW1lbnRzX3NlbGVjdG9yKSxvPW4uaXRlbTtlKHRoaXMpLnNvcnRhYmxlKFwiY2FuY2VsXCIpLCExIT09bC5kcmFnX2Ryb3BfdXBkYXRlKHQsbixpLG8pJiZyKGMtZD4wP2wuYmVmb3JlX3VwKF8sbyk6bC5iZWZvcmVfZG93bihfLG8pKSYmKGM9aS5pbmRleChvKSxpPV8uZmluZChsLmVsZW1lbnRzX3NlbGVjdG9yKSx4KF8sbCxpLG8sZCxjKSl9fSxsLmRyYWdfZHJvcF9vcHRpb25zKSkpO18uZGF0YShcImNvbGxlY3Rpb24tc2V0dGluZ3NcIixsKTt2YXIgcD1lKGwuY29udGFpbmVyKTtpZihwLm9mZihcImNsaWNrXCIsXCIuXCIrbC5wcmVmaXgrXCItYWN0aW9uXCIpLm9uKFwiY2xpY2tcIixcIi5cIitsLnByZWZpeCtcIi1hY3Rpb25cIixmdW5jdGlvbih0KXt2YXIgbixpLG89ZSh0aGlzKTtpZih2b2lkIDA9PT0oaT0obj1lKFwiI1wiK28uZGF0YShcImNvbGxlY3Rpb25cIikpKS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiKSkmJnZvaWQgMD09PShpPShuPWUoXCIjXCIrby5kYXRhKFwiY29sbGVjdGlvblwiKSkuZmluZChcIi5cIitvLmRhdGEoXCJjb2xsZWN0aW9uXCIpK1wiLWNvbGxlY3Rpb25cIikpLmRhdGEoXCJjb2xsZWN0aW9uLXNldHRpbmdzXCIpKSl0aHJvd1wiQ2FuJ3QgZmluZCBjb2xsZWN0aW9uOiBcIitvLmRhdGEoXCJjb2xsZWN0aW9uXCIpO3ZhciBhPW4uZmluZChpLmVsZW1lbnRzX3NlbGVjdG9yKSxsPW8uZGF0YShcImVsZW1lbnRcIik/ZShcIiNcIitvLmRhdGEoXCJlbGVtZW50XCIpKTp2b2lkIDAsZD1sJiZsLmxlbmd0aD9hLmluZGV4KGwpOi0xLGM9bnVsbCxmPW8uaXMoXCIuXCIraS5wcmVmaXgrXCItZHVwbGljYXRlXCIpOyhvLmlzKFwiLlwiK2kucHJlZml4K1wiLWFkZFwiKXx8by5pcyhcIi5cIitpLnByZWZpeCtcIi1yZXNjdWUtYWRkXCIpfHxmKSYmaS5hbGxvd19hZGQmJihjPVwiYWRkXCIsYT1tKHAsbyxuLGksYSxsLGQsZikpLG8uaXMoXCIuXCIraS5wcmVmaXgrXCItcmVtb3ZlXCIpJiZpLmFsbG93X3JlbW92ZSYmKGM9XCJyZW1vdmVcIixhPXYobixpLGEsbCxkKSksby5pcyhcIi5cIitpLnByZWZpeCtcIi11cFwiKSYmaS5hbGxvd191cCYmKGM9XCJ1cFwiLGE9ZnVuY3Rpb24oZSx0LG4saSxvKXtyZXR1cm4gMCE9PW8mJnIodC5iZWZvcmVfdXAoZSxpKSkmJihuPXMoZSxuLG8sby0xKSxyKHQuYWZ0ZXJfdXAoZSxpKSl8fChuPXMoZSxuLG8tMSxvKSkpLHQucG9zaXRpb25fZmllbGRfc2VsZWN0b3I/Zyh0LG4pOm59KG4saSxhLGwsZCkpLG8uaXMoXCIuXCIraS5wcmVmaXgrXCItZG93blwiKSYmaS5hbGxvd19kb3duJiYoYz1cImRvd25cIixhPWZ1bmN0aW9uKGUsdCxuLGksbyl7cmV0dXJuIG8hPT1uLmxlbmd0aC0xJiZyKHQuYmVmb3JlX2Rvd24oZSxpKSkmJihuPXMoZSxuLG8sbysxKSxyKHQuYWZ0ZXJfZG93bihlLG4pKXx8KG49cyhlLG4sbysxLG8pKSksdC5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcj9nKHQsbik6bn0obixpLGEsbCxkKSksdShuLGksITEsYyksdC5wcmV2ZW50RGVmYXVsdCgpfSksdShfLGwsITApLGgoXyxudWxsLGwpLGwucG9zaXRpb25fZmllbGRfc2VsZWN0b3Ipe3ZhciB3PVtdLGI9Xy5maW5kKGwuZWxlbWVudHNfc2VsZWN0b3IpO2IuZWFjaChmdW5jdGlvbih0KXt2YXIgbj1lKHRoaXMpO3cucHVzaCh7cG9zaXRpb246cGFyc2VGbG9hdChvKG4uZmluZChsLnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yKSkpLGVsZW1lbnQ6bn0pfSk7dy5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUucG9zaXRpb248dC5wb3NpdGlvbj8tMTplLnBvc2l0aW9uPnQucG9zaXRpb24/MTowfSksZS5lYWNoKHcsZnVuY3Rpb24odCxuKXt2YXIgaT1bXTtlKGIpLmVhY2goZnVuY3Rpb24odCl7aS5wdXNoKGUodGhpcykuYXR0cihcImlkXCIpKX0pO3ZhciBvPW4uZWxlbWVudCxyPWUuaW5BcnJheShvLmF0dHIoXCJpZFwiKSxpKTt0IT09ciYmKGI9eChfLGwsYixvLHIsdCksYShvLmZpbmQobC5wb3NpdGlvbl9maWVsZF9zZWxlY3RvciksYi5pbmRleChvKSkpfSl9bC5hZnRlcl9pbml0KF8pfSksITApfX0oalF1ZXJ5KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUZsb2F0ID0gZ2xvYmFsLnBhcnNlRmxvYXQ7XG52YXIgRk9SQ0VEID0gMSAvICRwYXJzZUZsb2F0KHdoaXRlc3BhY2VzICsgJy0wJykgIT09IC1JbmZpbml0eTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHJpbmcpIHtcbiAgdmFyIHRyaW1tZWRTdHJpbmcgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgdmFyIHJlc3VsdCA9ICRwYXJzZUZsb2F0KHRyaW1tZWRTdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIHRyaW1tZWRTdHJpbmcuY2hhckF0KDApID09ICctJyA/IC0wIDogcmVzdWx0O1xufSA6ICRwYXJzZUZsb2F0O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgdGVzdCA9IFtdO1xudmFyIG5hdGl2ZVNvcnQgPSB0ZXN0LnNvcnQ7XG5cbi8vIElFOC1cbnZhciBGQUlMU19PTl9VTkRFRklORUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSk7XG4vLyBWOCBidWdcbnZhciBGQUlMU19PTl9OVUxMID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQobnVsbCk7XG59KTtcbi8vIE9sZCBXZWJLaXRcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnc29ydCcpO1xuXG52YXIgRk9SQ0VEID0gRkFJTFNfT05fVU5ERUZJTkVEIHx8ICFGQUlMU19PTl9OVUxMIHx8ICFTVFJJQ1RfTUVUSE9EO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvcnRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSlcbiAgICAgIDogbmF0aXZlU29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlRmxvYXQ6IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9