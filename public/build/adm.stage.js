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
// @lastUpdate 16/10/2020 11:50



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
            //t.row("#ligne_"+id).remove().draw(); =< datattable todo: remove ligne si datatable ?? problème dans adm>personnel
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy92ZW5kb3IvanF1ZXJ5LmNvbGxlY3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtZmxvYXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwic3RhZ2VFdHVkaWFudCIsImRhdGEiLCJ0dXRldXIiLCJ2YWwiLCJzdWNjZXNzIiwiYWRkQ2FsbG91dCIsInJlYWR5Iiwic3RhZ2VQZXJpb2RlU291dGVuYW5jZXMiLCJsZW5ndGgiLCJjb2xsZWN0aW9uIiwidXBkYXRlRGF0ZVBpY2tlciIsInN0YWdlUGVyaW9kZUludGVycnVwdGlvbnMiLCJlYWNoIiwib3B0aW9ucyIsIm11bHRpZGF0ZVNlcGFyYXRvciIsImxhbmd1YWdlIiwiZGF5c09mV2Vla0hpZ2hsaWdodGVkIiwicHJvcCIsImlucHV0cyIsImZpbmQiLCJkYXRlcGlja2VyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwicG9wIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvY2F0aW9uIiwiYXR0ciIsIlN3YWwiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3NyZiIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwidHlwZSIsIl90b2tlbiIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIm1ldGhvZCIsIiRvYmoiLCIkaHRtbCIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiLCJ0IiwibiIsImNvbnRhaW5lciIsImFsbG93X3VwIiwidXAiLCJiZWZvcmVfdXAiLCJhZnRlcl91cCIsImFsbG93X2Rvd24iLCJkb3duIiwiYmVmb3JlX2Rvd24iLCJhZnRlcl9kb3duIiwiYWxsb3dfYWRkIiwiYWRkIiwiYmVmb3JlX2FkZCIsImFmdGVyX2FkZCIsImFsbG93X3JlbW92ZSIsImJlZm9yZV9yZW1vdmUiLCJhZnRlcl9yZW1vdmUiLCJhbGxvd19kdXBsaWNhdGUiLCJkdXBsaWNhdGUiLCJiZWZvcmVfZHVwbGljYXRlIiwiYWZ0ZXJfZHVwbGljYXRlIiwiYmVmb3JlX2luaXQiLCJhZnRlcl9pbml0IiwibWluIiwibWF4IiwiYWRkX2F0X3RoZV9lbmQiLCJwcmVmaXgiLCJwcm90b3R5cGVfbmFtZSIsIm5hbWVfcHJlZml4IiwiZWxlbWVudHNfc2VsZWN0b3IiLCJlbGVtZW50c19wYXJlbnRfc2VsZWN0b3IiLCJjaGlsZHJlbiIsImluaXRfd2l0aF9uX2VsZW1lbnRzIiwiaGlkZV91c2VsZXNzX2J1dHRvbnMiLCJkcmFnX2Ryb3AiLCJkcmFnX2Ryb3Bfb3B0aW9ucyIsInBsYWNlaG9sZGVyIiwiZHJhZ19kcm9wX3N0YXJ0IiwiZHJhZ19kcm9wX3VwZGF0ZSIsImN1c3RvbV9hZGRfbG9jYXRpb24iLCJhY3Rpb25fY29udGFpbmVyX3RhZyIsImZhZGVfaW4iLCJmYWRlX291dCIsInBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yIiwicHJlc2VydmVfbmFtZXMiLCJpIiwiTWF0aCIsInJhbmRvbSIsIkRhdGUiLCJnZXRUaW1lIiwic29ydCIsImpvaW4iLCJvIiwiaXMiLCJhIiwicmVtb3ZlQXR0ciIsInIiLCJsIiwiZCIsImF0dHJpYnV0ZXMiLCJlcSIsImMiLCJSZWdFeHAiLCJzIiwic2VsZWN0b3IiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnRBZnRlciIsImYiLCJfIiwicCIsInUiLCJhcHBlbmQiLCJmaXJzdCIsImxhc3QiLCJtIiwiYWRkQmFjayIsImZpbHRlciIsImVuYWJsZWQiLCJjb25kaXRpb24iLCJpbmRleCIsImFwcGVuZFRvIiwiY3NzIiwiaCIsInYiLCJmYWRlSW4iLCJqIiwicSIsImIiLCJDIiwieSIsImsiLCJFIiwiQiIsImNsb25lIiwiUSIsIlIiLCJ3IiwiQSIsImNvbnRlbnRzIiwiaGlkZSIsImJlZm9yZSIsIkQiLCJnIiwid2l0aERhdGFBbmRFdmVudHMiLCJzaG93IiwiZmFkZU91dCIsImFicyIsInNsaWNlIiwidGVzdCIsImhhc0NsYXNzIiwidXNlcl9wcmVmaXgiLCJleHRlbmQiLCJ1aSIsInNvcnRhYmxlIiwic3RhcnQiLCJpdGVtIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1cGRhdGUiLCJvZmYiLCJwdXNoIiwicG9zaXRpb24iLCJwYXJzZUZsb2F0IiwiZWxlbWVudCIsImluQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixlQUF6QixFQUEwQyxZQUFZO0FBQ3BERiwrQ0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsNkNBQWpCLEVBQWdFO0FBQ25FQyxtQkFBYSxFQUFFUCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsT0FBYixDQURvRDtBQUVuRUMsWUFBTSxFQUFFVCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxHQUFSO0FBRjJELEtBQWhFLENBREE7QUFLTEMsV0FBTyxFQUFFLG1CQUFZO0FBQ25CQyw4REFBVSxDQUFDLGdDQUFELEVBQW1DLFNBQW5DLENBQVY7QUFDRDtBQVBJLEdBQVA7QUFTRCxDQVZEO0FBWUFaLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZWSxLQUFaLENBQWtCLFlBQVk7QUFDNUIsTUFBSUMsdUJBQXVCLEdBQUdkLDZDQUFDLENBQUMsbUNBQUQsQ0FBL0I7O0FBQ0EsTUFBSWMsdUJBQXVCLENBQUNDLE1BQXhCLEdBQWlDLENBQXJDLEVBQXdDO0FBQ3RDRCwyQkFBdUIsQ0FBQ0UsVUFBeEI7QUFDQWhCLGlEQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QiwwREFBeEIsRUFBb0YsWUFBWTtBQUM5RmUsc0JBQWdCO0FBQ2pCLEtBRkQ7QUFHRDs7QUFDRCxNQUFJQyx5QkFBeUIsR0FBR2xCLDZDQUFDLENBQUMscUNBQUQs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QUYsQ0FBYThDLENBQWI7QUFBZ0IsS0FBajNJLEdBQW0zSSxDQUFDLENBQXQ5SSxDQUFQO0FBQWcrSSxHQUFwNGI7QUFBcTRiLENBQWo1YixDQUFrNWJ4RixNQUFsNWIsQ0FBRCxDOzs7Ozs7Ozs7Ozs7QUNOQSxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFdBQVcsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDN0Msa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNiWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QywwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLCtDQUErQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL0JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsK0JBQStCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV4RTtBQUNBO0FBQ0EsR0FBRywrREFBK0Q7QUFDbEU7QUFDQSxDQUFDIiwiZmlsZSI6ImFkbS5zdGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uc3RhZ2UuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMS8xMC8yMDIwIDA4OjA0XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9qcXVlcnkuY29sbGVjdGlvbi5taW4nXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZXR1dGV1cicsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3N0YWdlX2V0dWRpYW50X2NoYW5nZV90dXRldXInLCB7XG4gICAgICBzdGFnZUV0dWRpYW50OiAkKHRoaXMpLmRhdGEoJ3N0YWdlJyksXG4gICAgICB0dXRldXI6ICQodGhpcykudmFsKClcbiAgICB9KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdUdXRldXIgdW5pdmVyc2l0YWlyZSBtb2RpZmnDqSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgbGV0IHN0YWdlUGVyaW9kZVNvdXRlbmFuY2VzID0gJCgnLnNlbGVjdG9yLXN0YWdlUGVyaW9kZVNvdXRlbmFuY2VzJylcbiAgaWYgKHN0YWdlUGVyaW9kZVNvdXRlbmFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICBzdGFnZVBlcmlvZGVTb3V0ZW5hbmNlcy5jb2xsZWN0aW9uKClcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN0YWdlX3BlcmlvZGVfc3RhZ2VQZXJpb2RlU291dGVuYW5jZXMtY29sbGVjdGlvbi1hY3Rpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICB1cGRhdGVEYXRlUGlja2VyKClcbiAgICB9KVxuICB9XG4gIGxldCBzdGFnZVBlcmlvZGVJbnRlcnJ1cHRpb25zID0gJCgnLnNlbGVjdG9yLXN0YWdlUGVyaW9kZUludGVycnVwdGlvbnMnKVxuICBpZiAoc3RhZ2VQZXJpb2RlSW50ZXJydXB0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgc3RhZ2VQZXJpb2RlSW50ZXJydXB0aW9ucy5jb2xsZWN0aW9uKClcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN0YWdlX3BlcmlvZGVfc3RhZ2VQZXJpb2RlSW50ZXJydXB0aW9ucy1jb2xsZWN0aW9uLWFjdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVwZGF0ZURhdGVQaWNrZXIoKVxuICAgIH0pXG4gIH1cblxuXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRlUGlja2VyICgpIHtcbiAgJCgnW2RhdGEtcHJvdmlkZX49XCJkYXRlcGlja2VyXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBtdWx0aWRhdGVTZXBhcmF0b3I6ICcsICcsXG4gICAgICBsYW5ndWFnZTogJ2ZyJyxcbiAgICAgIGRheXNPZldlZWtIaWdobGlnaHRlZDogJzA2J1xuICAgIH1cblxuICAgIGlmICgkKHRoaXMpLnByb3AoJ3RhZ05hbWUnKSAhPSAnSU5QVVQnKSB7XG4gICAgICAvL3NpIGNlIG4nZXN0IHBhcyB1biBpbnB1dCA9PiBkb25jIHVuIGRhdGUgcmFuZ2VcbiAgICAgIG9wdGlvbnMuaW5wdXRzID0gWyQodGhpcykuZmluZCgnaW5wdXQ6Zmlyc3QnKSwgJCh0aGlzKS5maW5kKCdpbnB1dDpsYXN0JyldXG4gICAgfVxuICAgICQodGhpcykuZGF0ZXBpY2tlcihvcHRpb25zKVxuICB9KVxufVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE2LzEwLzIwMjAgMTE6NTBcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdC5yb3coXCIjbGlnbmVfXCIraWQpLnJlbW92ZSgpLmRyYXcoKTsgPTwgZGF0YXR0YWJsZSB0b2RvOiByZW1vdmUgbGlnbmUgc2kgZGF0YXRhYmxlID8/IHByb2Jsw6htZSBkYW5zIGFkbT5wZXJzb25uZWxcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcbiAgbGV0ICRodG1sID0gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIC8+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+PC9kaXY+J1xuICByZXR1cm4gJGh0bWxcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2pxdWVyeS5jb2xsZWN0aW9uLm1pbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE3LzA4LzIwMjAgMTQ6MjBcblxuIWZ1bmN0aW9uKGUpe2UuZm4uY29sbGVjdGlvbj1mdW5jdGlvbih0KXt2YXIgbj17Y29udGFpbmVyOlwiYm9keVwiLGFsbG93X3VwOiEwLHVwOic8YSBocmVmPVwiI1wiPiYjeDI1QjI7PC9hPicsYmVmb3JlX3VwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFmdGVyX3VwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFsbG93X2Rvd246ITAsZG93bjonPGEgaHJlZj1cIiNcIj4mI3gyNUJDOzwvYT4nLGJlZm9yZV9kb3duOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFmdGVyX2Rvd246ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sYWxsb3dfYWRkOiEwLGFkZDonPGEgaHJlZj1cIiNcIj5bICsgXTwvYT4nLGJlZm9yZV9hZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sYWZ0ZXJfYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFsbG93X3JlbW92ZTohMCxyZW1vdmU6JzxhIGhyZWY9XCIjXCI+WyAtIF08L2E+JyxiZWZvcmVfcmVtb3ZlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFmdGVyX3JlbW92ZTpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhbGxvd19kdXBsaWNhdGU6ITEsZHVwbGljYXRlOic8YSBocmVmPVwiI1wiPlsgIyBdPC9hPicsYmVmb3JlX2R1cGxpY2F0ZTpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhZnRlcl9kdXBsaWNhdGU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sYmVmb3JlX2luaXQ6ZnVuY3Rpb24oZSl7fSxhZnRlcl9pbml0OmZ1bmN0aW9uKGUpe30sbWluOjAsbWF4OjEwMCxhZGRfYXRfdGhlX2VuZDohMSxwcmVmaXg6XCJjb2xsZWN0aW9uXCIscHJvdG90eXBlX25hbWU6XCJfX25hbWVfX1wiLG5hbWVfcHJlZml4Om51bGwsZWxlbWVudHNfc2VsZWN0b3I6XCI+IGRpdiwgPiBmaWVsZHNldFwiLGVsZW1lbnRzX3BhcmVudF9zZWxlY3RvcjpcIiVpZCVcIixjaGlsZHJlbjpudWxsLGluaXRfd2l0aF9uX2VsZW1lbnRzOjAsaGlkZV91c2VsZXNzX2J1dHRvbnM6ITAsZHJhZ19kcm9wOiEwLGRyYWdfZHJvcF9vcHRpb25zOntwbGFjZWhvbGRlcjpcInVpLXN0YXRlLWhpZ2hsaWdodFwifSxkcmFnX2Ryb3Bfc3RhcnQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sZHJhZ19kcm9wX3VwZGF0ZTpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxjdXN0b21fYWRkX2xvY2F0aW9uOiExLGFjdGlvbl9jb250YWluZXJfdGFnOlwiZGl2XCIsZmFkZV9pbjohMCxmYWRlX291dDohMCxwb3NpdGlvbl9maWVsZF9zZWxlY3RvcjpudWxsLHByZXNlcnZlX25hbWVzOiExfSxpPWZ1bmN0aW9uKHQsbil7aWYoIW4uYXR0cihcImlkXCIpKXt2YXIgaTtkb3tpPXQrXCJfXCIrKFwiXCIrMWUzKk1hdGgucmFuZG9tKCkqKG5ldyBEYXRlKS5nZXRUaW1lKCkpLnJlcGxhY2UoXCIuXCIsXCJcIikuc3BsaXQoXCJcIikuc29ydChmdW5jdGlvbigpe3JldHVybi41LU1hdGgucmFuZG9tKCl9KS5qb2luKFwiXCIpfXdoaWxlKGUoXCIjXCIraSkubGVuZ3RoPjApO24uYXR0cihcImlkXCIsaSl9cmV0dXJuIG4uYXR0cihcImlkXCIpfSxvPWZ1bmN0aW9uKHQpe3RyeXt2YXIgbj1lKHQpfWNhdGNoKGUpe3JldHVybiBudWxsfXJldHVybiAwPT09bi5sZW5ndGg/bnVsbDpuLmlzKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKT8hMD09PW4ucHJvcChcImNoZWNrZWRcIik6bi5pcygnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykmJnZvaWQgMCE9PW4uYXR0cihcIm5hbWVcIik/ZSgnaW5wdXRbbmFtZT1cIicrbi5hdHRyKFwibmFtZVwiKSsnXCJdOmNoZWNrZWQnKS52YWwoKTp2b2lkIDAhPT1uLnByb3AoXCJ2YWx1ZVwiKT9uLnZhbCgpOm4uaHRtbCgpfSxhPWZ1bmN0aW9uKHQsbixpKXt0cnl7dmFyIG89ZSh0KX1jYXRjaChlKXtyZXR1cm59MCE9PW8ubGVuZ3RoJiYoby5pcygnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk/bj9vLmF0dHIoXCJjaGVja2VkXCIsITApOm8ucmVtb3ZlQXR0cihcImNoZWNrZWRcIik6dm9pZCAwIT09by5wcm9wKFwidmFsdWVcIik/aT9vLmF0dHIoXCJ2YWx1ZVwiLG4pOm8udmFsKG4pOm8uaHRtbChuKSl9LHI9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWV8fGV9LGw9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZSgvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nLFwiXFxcXCQmXCIpfSxkPWZ1bmN0aW9uKHQsbixpLG8pe3ZhciBhPWZ1bmN0aW9uKHQpe3ZhciBuPWUodCk7XCJvYmplY3RcIj09dHlwZW9mIHQmJlwiYXR0cmlidXRlc1wiaW4gdCYmZS5lYWNoKHQuYXR0cmlidXRlcyxmdW5jdGlvbih0LGEpe1wic3RyaW5nXCI9PT1lLnR5cGUoYS52YWx1ZSkmJm4uYXR0cihhLm5hbWUucmVwbGFjZShpLG8pLGEudmFsdWUucmVwbGFjZShpLG8pKX0pLG4ubGVuZ3RoPjAmJmUuZWFjaChuLmRhdGEoKSxmdW5jdGlvbih0LGEpe1wic3RyaW5nXCI9PT1lLnR5cGUoYSkmJm4uZGF0YSh0LnJlcGxhY2UoaSxvKSxhLnJlcGxhY2UoaSxvKSl9KX0scj10LmVxKG4pO2EoclswXSksci5maW5kKFwiKlwiKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKX0pfSxjPWZ1bmN0aW9uKHQsbixpLG8sYSxyKXt2YXIgYz1uZXcgUmVnRXhwKGwoaS5uYW1lX3ByZWZpeCtcIltcIithK1wiXVwiKSxcImdcIikscz1pLm5hbWVfcHJlZml4K1wiW1wiK3IrXCJdXCI7aS5jaGlsZHJlbiYmZS5lYWNoKGkuY2hpbGRyZW4sZnVuY3Rpb24oZSxuKXt2YXIgaT10LmZpbmQobi5zZWxlY3RvcikuZXEobyksYT1pLmRhdGEoXCJjb2xsZWN0aW9uLXNldHRpbmdzXCIpO2EmJihhLm5hbWVfcHJlZml4PWEubmFtZV9wcmVmaXgucmVwbGFjZShjLHMpLGkuZGF0YShcImNvbGxlY3Rpb24tc2V0dGluZ3NcIixhKSl9KSxkKG4sbyxjLHMpLGM9bmV3IFJlZ0V4cChsKHQuYXR0cihcImlkXCIpK1wiX1wiK2EpLFwiZ1wiKSxzPXQuYXR0cihcImlkXCIpK1wiX1wiK3IsaS5jaGlsZHJlbiYmZS5lYWNoKGkuY2hpbGRyZW4sZnVuY3Rpb24oZSxuKXt2YXIgaT10LmZpbmQobi5zZWxlY3RvcikuZXEobyksYT1pLmRhdGEoXCJjb2xsZWN0aW9uLXNldHRpbmdzXCIpO2EmJihhLmVsZW1lbnRzX3BhcmVudF9zZWxlY3Rvcj1hLmVsZW1lbnRzX3BhcmVudF9zZWxlY3Rvci5yZXBsYWNlKGMscyksYS5lbGVtZW50c19zZWxlY3Rvcj1hLmVsZW1lbnRzX3NlbGVjdG9yLnJlcGxhY2UoYyxzKSxhLnByZWZpeD1hLnByZWZpeC5yZXBsYWNlKGMscyksaS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiLGEpKX0pLGQobixvLGMscyl9LHM9ZnVuY3Rpb24oZSx0LG4saSl7dmFyIG89ZS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiKTtyZXR1cm4gby5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcnx8by5wcmVzZXJ2ZV9uYW1lc3x8KGMoZSx0LG8sbixuLFwiX19zd2FwX19cIiksYyhlLHQsbyxpLGksbiksYyhlLHQsbyxuLFwiX19zd2FwX19cIixpKSksdC5lcShuKS5pbnNlcnRCZWZvcmUodC5lcShpKSksaT5uP3QuZXEoaSkuaW5zZXJ0QmVmb3JlKHQuZXEobikpOnQuZXEoaSkuaW5zZXJ0QWZ0ZXIodC5lcShuKSksZS5maW5kKG8uZWxlbWVudHNfc2VsZWN0b3IpfSxmPWZ1bmN0aW9uKGUsdCxuLGksbyl7Zm9yKHZhciBhPWkrMTthPD1vO2ErKyl0PXMoZSx0LGEsYS0xKTtyZXR1cm4gZS5maW5kKG4uZWxlbWVudHNfc2VsZWN0b3IpfSxfPWZ1bmN0aW9uKGUsdCxuLGksbyl7Zm9yKHZhciBhPWktMTthPj1vO2EtLSl0PXMoZSx0LGEsYSsxKTtyZXR1cm4gZS5maW5kKG4uZWxlbWVudHNfc2VsZWN0b3IpfSxwPWZ1bmN0aW9uKGUsdCxuLGkpe2Zvcih2YXIgbz1pKzE7bzx0Lmxlbmd0aDtvKyspdD1zKGUsdCxvLTEsbyk7cmV0dXJuIGUuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKX0sdT1mdW5jdGlvbih0LG4sbyxhKXt2YXIgcj1lKG4uZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yKSxsPTA9PT1yLmZpbmQoXCIuXCIrbi5wcmVmaXgrXCItdG1wXCIpLmxlbmd0aCxkPXQuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKTtpZihuLmFsbG93X2FkZCYmbCYmKHIuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIicrbi5wcmVmaXgrJy10bXBcIj48L3NwYW4+Jyksbi5hZGQmJnIuYXBwZW5kKGUobi5hZGQpLmFkZENsYXNzKG4ucHJlZml4K1wiLWFjdGlvbiBcIituLnByZWZpeCtcIi1yZXNjdWUtYWRkXCIpLmRhdGEoXCJjb2xsZWN0aW9uXCIsdC5hdHRyKFwiaWRcIikpKSksbyl7dC5kYXRhKFwiY29sbGVjdGlvbi1vZmZzZXRcIixkLmxlbmd0aCk7Zm9yKHZhciBjPWUobi5jb250YWluZXIpLHM9dC5maW5kKFwiLlwiK24ucHJlZml4K1wiLWFkZCwgLlwiK24ucHJlZml4K1wiLXJlc2N1ZS1hZGQsIC5cIituLnByZWZpeCtcIi1kdXBsaWNhdGVcIikuZmlyc3QoKSxmPTA7ZC5sZW5ndGg8bi5pbml0X3dpdGhfbl9lbGVtZW50czspe2YrKzt2YXIgXz1kLmxlbmd0aD4wP2QubGFzdCgpOnZvaWQgMCxwPWQubGVuZ3RoLTE7aWYoZD1tKGMscyx0LG4sZCxfLHAsITEpLGY+bi5pbml0X3dpdGhfbl9lbGVtZW50cyl7Y29uc29sZS5lcnJvcihcIkluZmluaXRlIGxvb3AsIGVsZW1lbnQgc2VsZWN0b3IgKFwiK24uZWxlbWVudHNfc2VsZWN0b3IrXCIpIG5vdCBmb3VuZCAhXCIpO2JyZWFrfX10LmRhdGEoXCJjb2xsZWN0aW9uLW9mZnNldFwiLGQubGVuZ3RoKX1pZihkLmVhY2goZnVuY3Rpb24ocil7dmFyIGw9ZSh0aGlzKTtvJiZsLmRhdGEoXCJpbmRleFwiLHIpO3ZhciBjPWwuZmluZChcIi5cIituLnByZWZpeCtcIi1hY3Rpb25zXCIpLmFkZEJhY2soKS5maWx0ZXIoXCIuXCIrbi5wcmVmaXgrXCItYWN0aW9uc1wiKTswPT09Yy5sZW5ndGgmJihjPWUoXCI8XCIrbi5hY3Rpb25fY29udGFpbmVyX3RhZysnIGNsYXNzPVwiJytuLnByZWZpeCsnLWFjdGlvbnNcIj48Lycrbi5hY3Rpb25fY29udGFpbmVyX3RhZytcIj5cIiksbC5hcHBlbmQoYykpO3ZhciBzPTA7XCJyZW1vdmVcIj09PWEmJm4uZmFkZV9vdXQmJihzPTEpO3ZhciBmPVt7ZW5hYmxlZDpuLmFsbG93X3JlbW92ZSxzZWxlY3RvcjpuLnByZWZpeCtcIi1yZW1vdmVcIixodG1sOm4ucmVtb3ZlLGNvbmRpdGlvbjpkLmxlbmd0aC1zPm4ubWlufSx7ZW5hYmxlZDpuLmFsbG93X3VwLHNlbGVjdG9yOm4ucHJlZml4K1wiLXVwXCIsaHRtbDpuLnVwLGNvbmRpdGlvbjpkLmxlbmd0aC1zPjEmJmQuaW5kZXgobCktcz4wfSx7ZW5hYmxlZDpuLmFsbG93X2Rvd24sc2VsZWN0b3I6bi5wcmVmaXgrXCItZG93blwiLGh0bWw6bi5kb3duLGNvbmRpdGlvbjpkLmxlbmd0aC1zPjEmJmQuaW5kZXgobCkhPT1kLmxlbmd0aC0xfSx7ZW5hYmxlZDpuLmFsbG93X2FkZCYmIW4uYWRkX2F0X3RoZV9lbmQmJiFuLmN1c3RvbV9hZGRfbG9jYXRpb24sc2VsZWN0b3I6bi5wcmVmaXgrXCItYWRkXCIsaHRtbDpuLmFkZCxjb25kaXRpb246ZC5sZW5ndGgtczxuLm1heH0se2VuYWJsZWQ6bi5hbGxvd19kdXBsaWNhdGUsc2VsZWN0b3I6bi5wcmVmaXgrXCItZHVwbGljYXRlXCIsaHRtbDpuLmR1cGxpY2F0ZSxjb25kaXRpb246ZC5sZW5ndGgtczxuLm1heH1dO2UuZWFjaChmLGZ1bmN0aW9uKG8sYSl7aWYoYS5lbmFibGVkKXt2YXIgZD1sLmZpbmQoXCIuXCIrYS5zZWxlY3Rvcik7MD09PWQubGVuZ3RoJiZhLmh0bWwmJihkPWUoYS5odG1sKS5hcHBlbmRUbyhjKS5hZGRDbGFzcyhhLnNlbGVjdG9yKSksYS5jb25kaXRpb24/KGQucmVtb3ZlQ2xhc3Mobi5wcmVmaXgrXCItYWN0aW9uLWRpc2FibGVkXCIpLG4uaGlkZV91c2VsZXNzX2J1dHRvbnMmJmQuY3NzKFwiZGlzcGxheVwiLFwiXCIpKTooZC5hZGRDbGFzcyhuLnByZWZpeCtcIi1hY3Rpb24tZGlzYWJsZWRcIiksbi5oaWRlX3VzZWxlc3NfYnV0dG9ucyYmZC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpKSxkLmFkZENsYXNzKG4ucHJlZml4K1wiLWFjdGlvblwiKS5kYXRhKFwiY29sbGVjdGlvblwiLHQuYXR0cihcImlkXCIpKS5kYXRhKFwiZWxlbWVudFwiLGkodC5hdHRyKFwiaWRcIikrXCJfXCIrcixsKSl9ZWxzZSBsLmZpbmQoXCIuXCIrYS5zZWxlY3RvcikuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKX0pfSksbi5hbGxvd19hZGQpe3ZhciB1PTA7XCJyZW1vdmVcIj09PWEmJm4uZmFkZV9vdXQmJih1PTEpO3ZhciBoPXQuZmluZChcIi5cIituLnByZWZpeCtcIi1yZXNjdWUtYWRkXCIpLmNzcyhcImRpc3BsYXlcIixcIlwiKS5yZW1vdmVDbGFzcyhuLnByZWZpeCtcIi1hY3Rpb24tZGlzYWJsZWRcIiksdj10LmZpbmQoXCIuXCIrbi5wcmVmaXgrXCItYWRkXCIpOyFuLmFkZF9hdF90aGVfZW5kJiZ2Lmxlbmd0aD51fHxuLmN1c3RvbV9hZGRfbG9jYXRpb24/aC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpOlwicmVtb3ZlXCI9PT1hJiZuLmZhZGVfb3V0JiYoaC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpLGguZmFkZUluKFwiZmFzdFwiKSksZC5sZW5ndGgtdT49bi5tYXgmJihoLmFkZENsYXNzKG4ucHJlZml4K1wiLWFjdGlvbi1kaXNhYmxlZFwiKSxuLmhpZGVfdXNlbGVzc19idXR0b25zJiZ0LmZpbmQoXCIuXCIrbi5wcmVmaXgrXCItYWRkLCAuXCIrbi5wcmVmaXgrXCItcmVzY3VlLWFkZCwgLlwiK24ucHJlZml4K1wiLWR1cGxpY2F0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpKX19LGg9ZnVuY3Rpb24odCxuLGkpe2kuY2hpbGRyZW4mJmUuZWFjaChpLmNoaWxkcmVuLGZ1bmN0aW9uKGUsaSl7aWYoIWkuc2VsZWN0b3IpcmV0dXJuIGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IGdpdmVuIGNvbGxlY3Rpb24gXCIrdC5hdHRyKFwiaWRcIikrXCIgaGFzIGNoaWxkcmVuIGNvbGxlY3Rpb25zLCBidXQgY2hpbGRyZW4ncyByb290IHNlbGVjdG9yIGlzIHVuZGVmaW5lZC5cIiksITA7bnVsbCE9PW4/bi5maW5kKGkuc2VsZWN0b3IpLmNvbGxlY3Rpb24oaSk6dC5maW5kKGkuc2VsZWN0b3IpLmNvbGxlY3Rpb24oaSl9KX0sbT1mdW5jdGlvbih0LG4saSxkLGMscyxmLF8pe2lmKGMubGVuZ3RoPGQubWF4JiYoXyYmcihkLmJlZm9yZV9kdXBsaWNhdGUoaSxzKSl8fHIoZC5iZWZvcmVfYWRkKGkscykpKSl7dmFyIG09aS5kYXRhKFwicHJvdG90eXBlXCIpLHY9aS5kYXRhKFwiY29sbGVjdGlvbi1vZmZzZXRcIik7aS5kYXRhKFwiY29sbGVjdGlvbi1vZmZzZXRcIix2KzEpLC0xPT09ZiYmKGY9Yy5sZW5ndGgtMSk7dmFyIGo9bmV3IFJlZ0V4cChsKGQucHJvdG90eXBlX25hbWUpLFwiZ1wiKSxxPXY7ZC5wcmVzZXJ2ZV9uYW1lcyYmKHZvaWQgMD09PShxPWkuZGF0YShcImNvbGxlY3Rpb24tZnJlZS1rZXlcIikpJiYocT1iKGQsYykpLGkuZGF0YShcImNvbGxlY3Rpb24tZnJlZS1rZXlcIixxKzEpKTt2YXIgQz1lKG0ucmVwbGFjZShqLHEpKS5kYXRhKFwiaW5kZXhcIix2KTt5KGQsQyk7dmFyIGs9ZShkLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvcikuZmluZChcIj4gLlwiK2QucHJlZml4K1wiLXRtcFwiKTtlKEMpLmZpbmQoXCJbaWRdXCIpLmZpcnN0KCkuYXR0cihcImlkXCIpO2lmKF8pe3ZhciBFPWMuZXEoZik7IWZ1bmN0aW9uKHQpe2UodCkuZmluZChcIjppbnB1dFwiKS5lYWNoKGZ1bmN0aW9uKGUsdCl7YSh0LG8odCksITApfSl9KEUpO3ZhciBCPWUoXCI8ZGl2Lz5cIikuYXBwZW5kKEUuY2xvbmUoKSkuaHRtbCgpLFE9ZC5wcmVzZXJ2ZV9uYW1lc3x8ZC5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcj9FLmRhdGEoXCJpbmRleFwiKTpmLFI9ZC5wcmVzZXJ2ZV9uYW1lcz93KGQsRSk6USxBPWZ1bmN0aW9uKGUsdCxuLGksbyxhLHIpe3ZhciBkPW5ldyBSZWdFeHAobCh0Lm5hbWVfcHJlZml4K1wiW1wiK2ErXCJdXCIpLFwiZ1wiKSxjPXQubmFtZV9wcmVmaXgrXCJbXCIrcitcIl1cIjtyZXR1cm4gbj1uLnJlcGxhY2UoZCxjKSxkPW5ldyBSZWdFeHAobChlLmF0dHIoXCJpZFwiKStcIl9cIitpKSxcImdcIiksYz1lLmF0dHIoXCJpZFwiKStcIl9cIitvLG49bi5yZXBsYWNlKGQsYyl9KGksZCxCLFEsdixSLHEpO0M9ZShcIjxkaXYvPlwiKS5odG1sKEEpLmNvbnRlbnRzKCkuZGF0YShcImluZGV4XCIsdiksZC5mYWRlX2luJiZDLmhpZGUoKSxrLmJlZm9yZShDKS5maW5kKGQucHJlZml4K1wiLWFjdGlvbnNcIikucmVtb3ZlKCl9ZWxzZSBkLmZhZGVfaW4mJkMuaGlkZSgpLGsuYmVmb3JlKEMpO2M9aS5maW5kKGQuZWxlbWVudHNfc2VsZWN0b3IpO3ZhciBEPUMuZmluZChcIi5cIitkLnByZWZpeCtcIi1hZGQsIC5cIitkLnByZWZpeCtcIi1kdXBsaWNhdGVcIik7RC5sZW5ndGg+MCYmRC5hZGRDbGFzcyhkLnByZWZpeCtcIi1hY3Rpb25cIikuZGF0YShcImNvbGxlY3Rpb25cIixpLmF0dHIoXCJpZFwiKSksZC5hZGRfYXRfdGhlX2VuZHx8ZisxPT09dj91KGksZCwhMSk6Yz14KGksZCxjLEMsdixmKzEpLGgoaSxDLGQpLChfJiYhcihkLmFmdGVyX2R1cGxpY2F0ZShpLEMpKXx8IXIoZC5hZnRlcl9hZGQoaSxDKSkpJiYoLTEhPT1mJiYoYz1wKGksYyxkLGYrMSkpLEMucmVtb3ZlKCkpfWlmKHZvaWQgMCE9PUMmJmQuZmFkZV9pbilDLmZhZGVJbihcImZhc3RcIixmdW5jdGlvbigpe2QucG9zaXRpb25fZmllbGRfc2VsZWN0b3ImJmcoZCxjKX0pO2Vsc2UgaWYoZC5wb3NpdGlvbl9maWVsZF9zZWxlY3RvcilyZXR1cm4gZyhkLGMpO3JldHVybiBjfSx2PWZ1bmN0aW9uKHQsbixpLG8sYSl7aWYoaS5sZW5ndGg+bi5taW4mJnIobi5iZWZvcmVfcmVtb3ZlKHQsbykpKXt2YXIgbD1mdW5jdGlvbigpe3ZhciBsPW87bi5wcmVzZXJ2ZV9uYW1lc3x8KGw9KGk9cCh0LGksbixhKSkubGFzdCgpKTt2YXIgZD1sLmNsb25lKHt3aXRoRGF0YUFuZEV2ZW50czohMH0pLnNob3coKTsobC5yZW1vdmUoKSxyKG4uYWZ0ZXJfcmVtb3ZlKHQsZCkpKXx8KGUobi5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpLmZpbmQoXCI+IC5cIituLnByZWZpeCtcIi10bXBcIikuYmVmb3JlKGQpLGk9dC5maW5kKG4uZWxlbWVudHNfc2VsZWN0b3IpLGk9ZnVuY3Rpb24oZSx0LG4saSl7Zm9yKHZhciBvPXQubGVuZ3RoLTI7bz5pO28tLSl0PXMoZSx0LG8rMSxvKTtyZXR1cm4gZS5maW5kKG4uZWxlbWVudHNfc2VsZWN0b3IpfSh0LGksbixhLTEpKTtuLnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yJiZnKG4saSl9O24uZmFkZV9vdXQ/by5mYWRlT3V0KFwiZmFzdFwiLGZ1bmN0aW9uKCl7bCgpfSk6bCgpfXJldHVybiBpfSx4PWZ1bmN0aW9uKGUsdCxuLGksbyxhKXtyZXR1cm4gMT09PU1hdGguYWJzKGEtbyk/KG49cyhlLG4sbyxhKSxyKGEtbz4wP3QuYWZ0ZXJfdXAoZSxpKTp0LmFmdGVyX2Rvd24oZSxpKSl8fChuPXMoZSxuLGEsbykpKTpvPGE/KG49ZihlLG4sdCxvLGEpLHIoYS1vPjA/dC5hZnRlcl91cChlLGkpOnQuYWZ0ZXJfZG93bihlLGkpKXx8KG49XyhlLG4sdCxhLG8pKSk6KG49XyhlLG4sdCxvLGEpLHIoYS1vPjA/dC5hZnRlcl91cChlLGkpOnQuYWZ0ZXJfZG93bihlLGkpKXx8KG49ZihlLG4sdCxhLG8pKSksdShlLHQsITEpLHQucG9zaXRpb25fZmllbGRfc2VsZWN0b3I/Zyh0LG4pOm59LGc9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZShuKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9ZSh0aGlzKTthKGkuZmluZCh0LnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yKSxuLmluZGV4KGkpKX0pLG59LHc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5maW5kKCc6aW5wdXRbbmFtZV49XCInK2UubmFtZV9wcmVmaXgrJ1tcIl0nKS5hdHRyKFwibmFtZVwiKS5zbGljZShlLm5hbWVfcHJlZml4Lmxlbmd0aCsxKS5zcGxpdChcIl1cIiwxKVswXX0sYj1mdW5jdGlvbih0LG4pe3ZhciBpPTA7cmV0dXJuIG4uZWFjaChmdW5jdGlvbigpe3ZhciBuPXcodCxlKHRoaXMpKTsvXjB8WzEtOV1cXGQqJC8udGVzdChuKSYmbj49aSYmKGk9TnVtYmVyKG4pKzEpfSksaX0seT1mdW5jdGlvbih0LG4pe2UuZWFjaChbXCItYWN0aW9uXCIsXCItYWN0aW9uLWRpc2FibGVkXCIsXCItYWN0aW9uc1wiLFwiLWFkZFwiLFwiLWRvd25cIixcIi1kdXBsaWNhdGVcIixcIi1yZW1vdmVcIixcIi1yZXNjdWUtYWRkXCIsXCItdG1wXCIsXCItdXBcIl0sZnVuY3Rpb24oKXt2YXIgaT10aGlzO24uZWFjaChmdW5jdGlvbigpe3ZhciBuPWUodGhpcyk7bi5oYXNDbGFzcyh0LnVzZXJfcHJlZml4K2kpJiZuLmFkZENsYXNzKHQucHJlZml4K2kpLG4uZmluZChcIipcIikuZWFjaChmdW5jdGlvbigpe3ZhciBuPWUodGhpcyk7bi5oYXNDbGFzcyh0LnVzZXJfcHJlZml4K2kpJiZuLmFkZENsYXNzKHQucHJlZml4K2kpfSl9KX0pfSxqPWUodGhpcyk7cmV0dXJuIDA9PT1qLmxlbmd0aD8oY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gY29sbGVjdGlvbiBzZWxlY3RvciBkb2VzIG5vdCBleGlzdC5cIiksITEpOihqLmVhY2goZnVuY3Rpb24oKXt2YXIgbD1lLmV4dGVuZCghMCx7fSxuLHQpO2lmKDA9PT1lKGwuY29udGFpbmVyKS5sZW5ndGgpcmV0dXJuIGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IGEgY29udGFpbmVyIHNob3VsZCBleGlzdCB0byBoYW5kbGUgZXZlbnRzIChiYXNpY2FsbHksIGEgPGJvZHk+IHRhZykuXCIpLCExO3ZhciBkLGMsZj1lKHRoaXMpO2lmKHZvaWQgMCE9PWYuZGF0YShcImNvbGxlY3Rpb25cIikpe3ZhciBfPWUoXCIjXCIrZi5kYXRhKFwiY29sbGVjdGlvblwiKSk7aWYoMD09PV8ubGVuZ3RoKXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiBnaXZlbiBjb2xsZWN0aW9uIGlkIGRvZXMgbm90IGV4aXN0LlwiKSwhMH1lbHNlIF89ZjtpZihfPWUoXyksbC5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3I9bC5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IucmVwbGFjZShcIiVpZCVcIixcIiNcIitpKFwiXCIsXykpLCFsLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvciYmKGwuZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yPVwiI1wiK2koXCJcIixfKSwwPT09ZShsLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvcikubGVuZ3RoKSlyZXR1cm4gY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gZWxlbWVudHMgcGFyZW50IHNlbGVjdG9yIGRvZXMgbm90IHJldHVybiBhbnkgb2JqZWN0LlwiKSwhMDtpZihsLnVzZXJfcHJlZml4PWwucHJlZml4LGwucHJlZml4PV8uYXR0cihcImlkXCIpK1wiLVwiK2wudXNlcl9wcmVmaXgseShsLF8pLGwuYWxsb3dfYWRkfHwobC5hbGxvd19kdXBsaWNhdGU9ITEsbC5hZGRfYXRfdGhlX2VuZD0hMSksbC5pbml0X3dpdGhfbl9lbGVtZW50cz5sLm1heCYmKGwuaW5pdF93aXRoX25fZWxlbWVudHM9bC5tYXgpLGwubWluJiYoIWwuaW5pdF93aXRoX25fZWxlbWVudHN8fGwuaW5pdF93aXRoX25fZWxlbWVudHM8bC5taW4pJiYobC5pbml0X3dpdGhfbl9lbGVtZW50cz1sLm1pbiksIWwuYWN0aW9uX2NvbnRhaW5lcl90YWcpcmV0dXJuIGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IGFjdGlvbl9jb250YWluZXJfdGFnIG5lZWRzIHRvIGJlIHNldC5cIiksITA7aWYobC5iZWZvcmVfaW5pdChfKSxudWxsPT09Xy5kYXRhKFwicHJvdG90eXBlXCIpKXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiBnaXZlbiBjb2xsZWN0aW9uIGZpZWxkIGhhcyBubyBwcm90b3R5cGUsIGNoZWNrIHRoYXQgeW91ciBmaWVsZCBoYXMgdGhlIHByb3RvdHlwZSBvcHRpb24gc2V0IHRvIHRydWUuXCIpLCEwO2lmKHZvaWQgMCE9PV8uZGF0YShcInByb3RvdHlwZS1uYW1lXCIpJiYobC5wcm90b3R5cGVfbmFtZT1fLmRhdGEoXCJwcm90b3R5cGUtbmFtZVwiKSksdm9pZCAwIT09Xy5kYXRhKFwiYWxsb3ctYWRkXCIpJiYobC5hbGxvd19hZGQ9Xy5kYXRhKFwiYWxsb3ctYWRkXCIpLGwuYWxsb3dfZHVwbGljYXRlPSEhXy5kYXRhKFwiYWxsb3ctYWRkXCIpJiZsLmFsbG93X2R1cGxpY2F0ZSksdm9pZCAwIT09Xy5kYXRhKFwiYWxsb3ctcmVtb3ZlXCIpJiYobC5hbGxvd19yZW1vdmU9Xy5kYXRhKFwiYWxsb3ctcmVtb3ZlXCIpKSx2b2lkIDAhPT1fLmRhdGEoXCJuYW1lLXByZWZpeFwiKSYmKGwubmFtZV9wcmVmaXg9Xy5kYXRhKFwibmFtZS1wcmVmaXhcIikpLCFsLm5hbWVfcHJlZml4KXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiB0aGUgcHJlZml4IHVzZWQgaW4gZGVzY2VuZGFudCBmaWVsZCBuYW1lcyBpcyBtYW5kYXRvcnksIHlvdSBjYW4gc2V0IGl0IHVzaW5nIDIgd2F5czpcIiksY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogLSB1c2UgdGhlIGZvcm0gdGhlbWUgZ2l2ZW4gd2l0aCB0aGlzIHBsdWdpbiBzb3VyY2VcIiksY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogLSBzZXQgbmFtZV9wcmVmaXggb3B0aW9uIHRvICAne3sgZm9ybVZpZXcubXlDb2xsZWN0aW9uRmllbGQudmFycy5mdWxsX25hbWUgfX0nXCIpLCEwOyhsLnByZXNlcnZlX25hbWVzJiYobC5hbGxvd191cD0hMSxsLmFsbG93X2Rvd249ITEsbC5kcmFnX2Ryb3A9ITEsbC5hZGRfYXRfdGhlX2VuZD0hMCksdm9pZCAwIT09alF1ZXJ5LnVpJiZ2b2lkIDAhPT1qUXVlcnkudWkuc29ydGFibGUmJl8uZGF0YShcInNvcnRhYmxlXCIpJiZfLnNvcnRhYmxlKFwiZGlzYWJsZVwiKSxsLmRyYWdfZHJvcCYmbC5hbGxvd191cCYmbC5hbGxvd19kb3duKSYmKHZvaWQgMD09PWpRdWVyeS51aXx8dm9pZCAwPT09alF1ZXJ5LnVpLnNvcnRhYmxlP2wuZHJhZ19kcm9wPSExOl8uc29ydGFibGUoZS5leHRlbmQoITAse30se3N0YXJ0OmZ1bmN0aW9uKHQsbil7dmFyIGk9Xy5maW5kKGwuZWxlbWVudHNfc2VsZWN0b3IpLG89bi5pdGVtLGE9ZSh0aGlzKTtyKGwuZHJhZ19kcm9wX3N0YXJ0KHQsbixpLG8pKT8obi5wbGFjZWhvbGRlci5oZWlnaHQobi5pdGVtLmhlaWdodCgpKSxuLnBsYWNlaG9sZGVyLndpZHRoKG4uaXRlbS53aWR0aCgpKSxkPWkuaW5kZXgobykpOmEuc29ydGFibGUoXCJjYW5jZWxcIil9LHVwZGF0ZTpmdW5jdGlvbih0LG4pe3ZhciBpPV8uZmluZChsLmVsZW1lbnRzX3NlbGVjdG9yKSxvPW4uaXRlbTtlKHRoaXMpLnNvcnRhYmxlKFwiY2FuY2VsXCIpLCExIT09bC5kcmFnX2Ryb3BfdXBkYXRlKHQsbixpLG8pJiZyKGMtZD4wP2wuYmVmb3JlX3VwKF8sbyk6bC5iZWZvcmVfZG93bihfLG8pKSYmKGM9aS5pbmRleChvKSxpPV8uZmluZChsLmVsZW1lbnRzX3NlbGVjdG9yKSx4KF8sbCxpLG8sZCxjKSl9fSxsLmRyYWdfZHJvcF9vcHRpb25zKSkpO18uZGF0YShcImNvbGxlY3Rpb24tc2V0dGluZ3NcIixsKTt2YXIgcD1lKGwuY29udGFpbmVyKTtpZihwLm9mZihcImNsaWNrXCIsXCIuXCIrbC5wcmVmaXgrXCItYWN0aW9uXCIpLm9uKFwiY2xpY2tcIixcIi5cIitsLnByZWZpeCtcIi1hY3Rpb25cIixmdW5jdGlvbih0KXt2YXIgbixpLG89ZSh0aGlzKTtpZih2b2lkIDA9PT0oaT0obj1lKFwiI1wiK28uZGF0YShcImNvbGxlY3Rpb25cIikpKS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiKSkmJnZvaWQgMD09PShpPShuPWUoXCIjXCIrby5kYXRhKFwiY29sbGVjdGlvblwiKSkuZmluZChcIi5cIitvLmRhdGEoXCJjb2xsZWN0aW9uXCIpK1wiLWNvbGxlY3Rpb25cIikpLmRhdGEoXCJjb2xsZWN0aW9uLXNldHRpbmdzXCIpKSl0aHJvd1wiQ2FuJ3QgZmluZCBjb2xsZWN0aW9uOiBcIitvLmRhdGEoXCJjb2xsZWN0aW9uXCIpO3ZhciBhPW4uZmluZChpLmVsZW1lbnRzX3NlbGVjdG9yKSxsPW8uZGF0YShcImVsZW1lbnRcIik/ZShcIiNcIitvLmRhdGEoXCJlbGVtZW50XCIpKTp2b2lkIDAsZD1sJiZsLmxlbmd0aD9hLmluZGV4KGwpOi0xLGM9bnVsbCxmPW8uaXMoXCIuXCIraS5wcmVmaXgrXCItZHVwbGljYXRlXCIpOyhvLmlzKFwiLlwiK2kucHJlZml4K1wiLWFkZFwiKXx8by5pcyhcIi5cIitpLnByZWZpeCtcIi1yZXNjdWUtYWRkXCIpfHxmKSYmaS5hbGxvd19hZGQmJihjPVwiYWRkXCIsYT1tKHAsbyxuLGksYSxsLGQsZikpLG8uaXMoXCIuXCIraS5wcmVmaXgrXCItcmVtb3ZlXCIpJiZpLmFsbG93X3JlbW92ZSYmKGM9XCJyZW1vdmVcIixhPXYobixpLGEsbCxkKSksby5pcyhcIi5cIitpLnByZWZpeCtcIi11cFwiKSYmaS5hbGxvd191cCYmKGM9XCJ1cFwiLGE9ZnVuY3Rpb24oZSx0LG4saSxvKXtyZXR1cm4gMCE9PW8mJnIodC5iZWZvcmVfdXAoZSxpKSkmJihuPXMoZSxuLG8sby0xKSxyKHQuYWZ0ZXJfdXAoZSxpKSl8fChuPXMoZSxuLG8tMSxvKSkpLHQucG9zaXRpb25fZmllbGRfc2VsZWN0b3I/Zyh0LG4pOm59KG4saSxhLGwsZCkpLG8uaXMoXCIuXCIraS5wcmVmaXgrXCItZG93blwiKSYmaS5hbGxvd19kb3duJiYoYz1cImRvd25cIixhPWZ1bmN0aW9uKGUsdCxuLGksbyl7cmV0dXJuIG8hPT1uLmxlbmd0aC0xJiZyKHQuYmVmb3JlX2Rvd24oZSxpKSkmJihuPXMoZSxuLG8sbysxKSxyKHQuYWZ0ZXJfZG93bihlLG4pKXx8KG49cyhlLG4sbysxLG8pKSksdC5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvcj9nKHQsbik6bn0obixpLGEsbCxkKSksdShuLGksITEsYyksdC5wcmV2ZW50RGVmYXVsdCgpfSksdShfLGwsITApLGgoXyxudWxsLGwpLGwucG9zaXRpb25fZmllbGRfc2VsZWN0b3Ipe3ZhciB3PVtdLGI9Xy5maW5kKGwuZWxlbWVudHNfc2VsZWN0b3IpO2IuZWFjaChmdW5jdGlvbih0KXt2YXIgbj1lKHRoaXMpO3cucHVzaCh7cG9zaXRpb246cGFyc2VGbG9hdChvKG4uZmluZChsLnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yKSkpLGVsZW1lbnQ6bn0pfSk7dy5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUucG9zaXRpb248dC5wb3NpdGlvbj8tMTplLnBvc2l0aW9uPnQucG9zaXRpb24/MTowfSksZS5lYWNoKHcsZnVuY3Rpb24odCxuKXt2YXIgaT1bXTtlKGIpLmVhY2goZnVuY3Rpb24odCl7aS5wdXNoKGUodGhpcykuYXR0cihcImlkXCIpKX0pO3ZhciBvPW4uZWxlbWVudCxyPWUuaW5BcnJheShvLmF0dHIoXCJpZFwiKSxpKTt0IT09ciYmKGI9eChfLGwsYixvLHIsdCksYShvLmZpbmQobC5wb3NpdGlvbl9maWVsZF9zZWxlY3RvciksYi5pbmRleChvKSkpfSl9bC5hZnRlcl9pbml0KF8pfSksITApfX0oalF1ZXJ5KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUZsb2F0ID0gZ2xvYmFsLnBhcnNlRmxvYXQ7XG52YXIgRk9SQ0VEID0gMSAvICRwYXJzZUZsb2F0KHdoaXRlc3BhY2VzICsgJy0wJykgIT09IC1JbmZpbml0eTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHJpbmcpIHtcbiAgdmFyIHRyaW1tZWRTdHJpbmcgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgdmFyIHJlc3VsdCA9ICRwYXJzZUZsb2F0KHRyaW1tZWRTdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIHRyaW1tZWRTdHJpbmcuY2hhckF0KDApID09ICctJyA/IC0wIDogcmVzdWx0O1xufSA6ICRwYXJzZUZsb2F0O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgdGVzdCA9IFtdO1xudmFyIG5hdGl2ZVNvcnQgPSB0ZXN0LnNvcnQ7XG5cbi8vIElFOC1cbnZhciBGQUlMU19PTl9VTkRFRklORUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSk7XG4vLyBWOCBidWdcbnZhciBGQUlMU19PTl9OVUxMID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQobnVsbCk7XG59KTtcbi8vIE9sZCBXZWJLaXRcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnc29ydCcpO1xuXG52YXIgRk9SQ0VEID0gRkFJTFNfT05fVU5ERUZJTkVEIHx8ICFGQUlMU19PTl9OVUxMIHx8ICFTVFJJQ1RfTUVUSE9EO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvcnRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSlcbiAgICAgIDogbmF0aXZlU29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlRmxvYXQ6IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9