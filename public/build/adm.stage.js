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
// @lastUpdate 16/10/2020 14:54


var $stopCatchEnter = false;

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
  } else if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'textarea') {
    html = genereTextArea(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  } else {
    html = genereInput(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).replaceWith(html);
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').focus();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keyup', '#myedit-input', function (e) {
  if (e.keyCode === 13 && $stopCatchEnter === false) {
    updateData();
  } else if (e.keyCode === 27) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-valide', function (e) {
  $stopCatchEnter = false;
  e.preventDefault();
  updateData();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keypress', function (e) {
  if (EditOnLine === true && $stopCatchEnter === false && e.which === 13) {
    e.preventDefault();
    updateData();
  }

  if (EditOnLine === true && $stopCatchEnter === false && e.which === 27) {
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

function genereTextArea($obj) {
  $stopCatchEnter = true;
  return '<div id="myEdit-zone">\n' + '                      <textarea rows="5" class="form-control" id="myedit-input">' + $obj.html().trim() + '</textarea>\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>';
}

function genereInput($obj) {
  return '<div id="myEdit-zone" class="input-group">\n' + '                      <input type="text" class="form-control" id="myedit-input" value="' + $obj.html().trim() + '" >\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy92ZW5kb3IvanF1ZXJ5LmNvbGxlY3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtZmxvYXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwic3RhZ2VFdHVkaWFudCIsImRhdGEiLCJ0dXRldXIiLCJ2YWwiLCJzdWNjZXNzIiwiYWRkQ2FsbG91dCIsInJlYWR5Iiwic3RhZ2VQZXJpb2RlU291dGVuYW5jZXMiLCJsZW5ndGgiLCJjb2xsZWN0aW9uIiwidXBkYXRlRGF0ZVBpY2tlciIsInN0YWdlUGVyaW9kZUludGVycnVwdGlvbnMiLCJlYWNoIiwib3B0aW9ucyIsIm11bHRpZGF0ZVNlcGFyYXRvciIsImxhbmd1YWdlIiwiZGF5c09mV2Vla0hpZ2hsaWdodGVkIiwicHJvcCIsImlucHV0cyIsImZpbmQiLCJkYXRlcGlja2VyIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwicG9wIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvY2F0aW9uIiwiYXR0ciIsIlN3YWwiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3NyZiIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwidHlwZSIsIl90b2tlbiIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwibWV0aG9kIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiLCJ0IiwibiIsImNvbnRhaW5lciIsImFsbG93X3VwIiwidXAiLCJiZWZvcmVfdXAiLCJhZnRlcl91cCIsImFsbG93X2Rvd24iLCJkb3duIiwiYmVmb3JlX2Rvd24iLCJhZnRlcl9kb3duIiwiYWxsb3dfYWRkIiwiYWRkIiwiYmVmb3JlX2FkZCIsImFmdGVyX2FkZCIsImFsbG93X3JlbW92ZSIsImJlZm9yZV9yZW1vdmUiLCJhZnRlcl9yZW1vdmUiLCJhbGxvd19kdXBsaWNhdGUiLCJkdXBsaWNhdGUiLCJiZWZvcmVfZHVwbGljYXRlIiwiYWZ0ZXJfZHVwbGljYXRlIiwiYmVmb3JlX2luaXQiLCJhZnRlcl9pbml0IiwibWluIiwibWF4IiwiYWRkX2F0X3RoZV9lbmQiLCJwcmVmaXgiLCJwcm90b3R5cGVfbmFtZSIsIm5hbWVfcHJlZml4IiwiZWxlbWVudHNfc2VsZWN0b3IiLCJlbGVtZW50c19wYXJlbnRfc2VsZWN0b3IiLCJjaGlsZHJlbiIsImluaXRfd2l0aF9uX2VsZW1lbnRzIiwiaGlkZV91c2VsZXNzX2J1dHRvbnMiLCJkcmFnX2Ryb3AiLCJkcmFnX2Ryb3Bfb3B0aW9ucyIsInBsYWNlaG9sZGVyIiwiZHJhZ19kcm9wX3N0YXJ0IiwiZHJhZ19kcm9wX3VwZGF0ZSIsImN1c3RvbV9hZGRfbG9jYXRpb24iLCJhY3Rpb25fY29udGFpbmVyX3RhZyIsImZhZGVfaW4iLCJmYWRlX291dCIsInBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yIiwicHJlc2VydmVfbmFtZXMiLCJpIiwiTWF0aCIsInJhbmRvbSIsIkRhdGUiLCJnZXRUaW1lIiwic29ydCIsImpvaW4iLCJvIiwiaXMiLCJhIiwicmVtb3ZlQXR0ciIsInIiLCJsIiwiZCIsImF0dHJpYnV0ZXMiLCJlcSIsImMiLCJSZWdFeHAiLCJzIiwic2VsZWN0b3IiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnRBZnRlciIsImYiLCJfIiwicCIsInUiLCJhcHBlbmQiLCJmaXJzdCIsImxhc3QiLCJtIiwiYWRkQmFjayIsImZpbHRlciIsImVuYWJsZWQiLCJjb25kaXRpb24iLCJpbmRleCIsImFwcGVuZFRvIiwiY3NzIiwiaCIsInYiLCJmYWRlSW4iLCJqIiwicSIsImIiLCJDIiwieSIsImsiLCJFIiwiQiIsImNsb25lIiwiUSIsIlIiLCJ3IiwiQSIsImNvbnRlbnRzIiwiaGlkZSIsImJlZm9yZSIsIkQiLCJnIiwid2l0aERhdGFBbmRFdmVudHMiLCJzaG93IiwiZmFkZU91dCIsImFicyIsInNsaWNlIiwidGVzdCIsImhhc0NsYXNzIiwidXNlcl9wcmVmaXgiLCJleHRlbmQiLCJ1aSIsInNvcnRhYmxlIiwic3RhcnQiLCJpdGVtIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1cGRhdGUiLCJvZmYiLCJwdXNoIiwicG9zaXRpb24iLCJwYXJzZUZsb2F0IiwiZWxlbWVudCIsImluQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixlQUF6QixFQUEwQyxZQUFZO0FBQ3BERiwrQ0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsNkNBQWpCLEVBQWdFO0FBQ25FQyxtQkFBYSxFQUFFUCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsT0FBYixDQURvRDtBQUVuRUMsWUFBTSxFQUFFVCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxHQUFSO0FBRjJELEtBQWhFLENBREE7QUFLTEMsV0FBTyxFQUFFLG1CQUFZO0FBQ25CQyw4REFBVSxDQUFDLGdDQUFELEVBQW1DLFNBQW5DLENBQVY7QUFDRDtBQVBJLEdBQVA7QUFTRCxDQVZEO0FBWUFaLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZWSxLQUFaLENBQWtCLFlBQVk7QUFDNUIsTUFBSUMsdUJBQXVCLEdBQUdkLDZDQUFDLENBQUMsbUNBQUQsQ0FBL0I7O0FBQ0EsTUFBSWMsdUJBQXVCLENBQUNDLE1BQXhCLEdBQWlDLENBQXJDLEVBQXdDO0FBQ3RDRCwyQkFBdUIsQ0FBQ0UsVUFBeEI7QUFDQWhCLGlEQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QiwwREFBeEIsRUFBb0YsWUFBWTtBQUM5RmUsc0JBQWdCO0FBQ2pCLEtBRkQ7QUFHRDs7QUFDRCxNQUFJQyx5QkFB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QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLCtDQUErQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL0JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsK0JBQStCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV4RTtBQUNBO0FBQ0EsR0FBRywrREFBK0Q7QUFDbEU7QUFDQSxDQUFDIiwiZmlsZSI6ImFkbS5zdGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uc3RhZ2UuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMS8xMC8yMDIwIDA4OjA0XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9qcXVlcnkuY29sbGVjdGlvbi5taW4nXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZXR1dGV1cicsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3N0YWdlX2V0dWRpYW50X2NoYW5nZV90dXRldXInLCB7XG4gICAgICBzdGFnZUV0dWRpYW50OiAkKHRoaXMpLmRhdGEoJ3N0YWdlJyksXG4gICAgICB0dXRldXI6ICQodGhpcykudmFsKClcbiAgICB9KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdUdXRldXIgdW5pdmVyc2l0YWlyZSBtb2RpZmnDqSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgbGV0IHN0YWdlUGVyaW9kZVNvdXRlbmFuY2VzID0gJCgnLnNlbGVjdG9yLXN0YWdlUGVyaW9kZVNvdXRlbmFuY2VzJylcbiAgaWYgKHN0YWdlUGVyaW9kZVNvdXRlbmFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICBzdGFnZVBlcmlvZGVTb3V0ZW5hbmNlcy5jb2xsZWN0aW9uKClcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN0YWdlX3BlcmlvZGVfc3RhZ2VQZXJpb2RlU291dGVuYW5jZXMtY29sbGVjdGlvbi1hY3Rpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICB1cGRhdGVEYXRlUGlja2VyKClcbiAgICB9KVxuICB9XG4gIGxldCBzdGFnZVBlcmlvZGVJbnRlcnJ1cHRpb25zID0gJCgnLnNlbGVjdG9yLXN0YWdlUGVyaW9kZUludGVycnVwdGlvbnMnKVxuICBpZiAoc3RhZ2VQZXJpb2RlSW50ZXJydXB0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgc3RhZ2VQZXJpb2RlSW50ZXJydXB0aW9ucy5jb2xsZWN0aW9uKClcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN0YWdlX3BlcmlvZGVfc3RhZ2VQZXJpb2RlSW50ZXJydXB0aW9ucy1jb2xsZWN0aW9uLWFjdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVwZGF0ZURhdGVQaWNrZXIoKVxuICAgIH0pXG4gIH1cblxuXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRlUGlja2VyICgpIHtcbiAgJCgnW2RhdGEtcHJvdmlkZX49XCJkYXRlcGlja2VyXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBtdWx0aWRhdGVTZXBhcmF0b3I6ICcsICcsXG4gICAgICBsYW5ndWFnZTogJ2ZyJyxcbiAgICAgIGRheXNPZldlZWtIaWdobGlnaHRlZDogJzA2J1xuICAgIH1cblxuICAgIGlmICgkKHRoaXMpLnByb3AoJ3RhZ05hbWUnKSAhPSAnSU5QVVQnKSB7XG4gICAgICAvL3NpIGNlIG4nZXN0IHBhcyB1biBpbnB1dCA9PiBkb25jIHVuIGRhdGUgcmFuZ2VcbiAgICAgIG9wdGlvbnMuaW5wdXRzID0gWyQodGhpcykuZmluZCgnaW5wdXQ6Zmlyc3QnKSwgJCh0aGlzKS5maW5kKCdpbnB1dDpsYXN0JyldXG4gICAgfVxuICAgICQodGhpcykuZGF0ZXBpY2tlcihvcHRpb25zKVxuICB9KVxufVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE2LzEwLzIwMjAgMTQ6NTRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL3ZlbmRvci9qcXVlcnkuY29sbGVjdGlvbi5taW4uanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNy8wOC8yMDIwIDE0OjIwXG5cbiFmdW5jdGlvbihlKXtlLmZuLmNvbGxlY3Rpb249ZnVuY3Rpb24odCl7dmFyIG49e2NvbnRhaW5lcjpcImJvZHlcIixhbGxvd191cDohMCx1cDonPGEgaHJlZj1cIiNcIj4mI3gyNUIyOzwvYT4nLGJlZm9yZV91cDpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhZnRlcl91cDpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhbGxvd19kb3duOiEwLGRvd246JzxhIGhyZWY9XCIjXCI+JiN4MjVCQzs8L2E+JyxiZWZvcmVfZG93bjpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhZnRlcl9kb3duOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFsbG93X2FkZDohMCxhZGQ6JzxhIGhyZWY9XCIjXCI+WyArIF08L2E+JyxiZWZvcmVfYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGFmdGVyX2FkZDpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhbGxvd19yZW1vdmU6ITAscmVtb3ZlOic8YSBocmVmPVwiI1wiPlsgLSBdPC9hPicsYmVmb3JlX3JlbW92ZTpmdW5jdGlvbihlLHQpe3JldHVybiEwfSxhZnRlcl9yZW1vdmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sYWxsb3dfZHVwbGljYXRlOiExLGR1cGxpY2F0ZTonPGEgaHJlZj1cIiNcIj5bICMgXTwvYT4nLGJlZm9yZV9kdXBsaWNhdGU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sYWZ0ZXJfZHVwbGljYXRlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGJlZm9yZV9pbml0OmZ1bmN0aW9uKGUpe30sYWZ0ZXJfaW5pdDpmdW5jdGlvbihlKXt9LG1pbjowLG1heDoxMDAsYWRkX2F0X3RoZV9lbmQ6ITEscHJlZml4OlwiY29sbGVjdGlvblwiLHByb3RvdHlwZV9uYW1lOlwiX19uYW1lX19cIixuYW1lX3ByZWZpeDpudWxsLGVsZW1lbnRzX3NlbGVjdG9yOlwiPiBkaXYsID4gZmllbGRzZXRcIixlbGVtZW50c19wYXJlbnRfc2VsZWN0b3I6XCIlaWQlXCIsY2hpbGRyZW46bnVsbCxpbml0X3dpdGhfbl9lbGVtZW50czowLGhpZGVfdXNlbGVzc19idXR0b25zOiEwLGRyYWdfZHJvcDohMCxkcmFnX2Ryb3Bfb3B0aW9uczp7cGxhY2Vob2xkZXI6XCJ1aS1zdGF0ZS1oaWdobGlnaHRcIn0sZHJhZ19kcm9wX3N0YXJ0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuITB9LGRyYWdfZHJvcF91cGRhdGU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sY3VzdG9tX2FkZF9sb2NhdGlvbjohMSxhY3Rpb25fY29udGFpbmVyX3RhZzpcImRpdlwiLGZhZGVfaW46ITAsZmFkZV9vdXQ6ITAscG9zaXRpb25fZmllbGRfc2VsZWN0b3I6bnVsbCxwcmVzZXJ2ZV9uYW1lczohMX0saT1mdW5jdGlvbih0LG4pe2lmKCFuLmF0dHIoXCJpZFwiKSl7dmFyIGk7ZG97aT10K1wiX1wiKyhcIlwiKzFlMypNYXRoLnJhbmRvbSgpKihuZXcgRGF0ZSkuZ2V0VGltZSgpKS5yZXBsYWNlKFwiLlwiLFwiXCIpLnNwbGl0KFwiXCIpLnNvcnQoZnVuY3Rpb24oKXtyZXR1cm4uNS1NYXRoLnJhbmRvbSgpfSkuam9pbihcIlwiKX13aGlsZShlKFwiI1wiK2kpLmxlbmd0aD4wKTtuLmF0dHIoXCJpZFwiLGkpfXJldHVybiBuLmF0dHIoXCJpZFwiKX0sbz1mdW5jdGlvbih0KXt0cnl7dmFyIG49ZSh0KX1jYXRjaChlKXtyZXR1cm4gbnVsbH1yZXR1cm4gMD09PW4ubGVuZ3RoP251bGw6bi5pcygnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk/ITA9PT1uLnByb3AoXCJjaGVja2VkXCIpOm4uaXMoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpJiZ2b2lkIDAhPT1uLmF0dHIoXCJuYW1lXCIpP2UoJ2lucHV0W25hbWU9XCInK24uYXR0cihcIm5hbWVcIikrJ1wiXTpjaGVja2VkJykudmFsKCk6dm9pZCAwIT09bi5wcm9wKFwidmFsdWVcIik/bi52YWwoKTpuLmh0bWwoKX0sYT1mdW5jdGlvbih0LG4saSl7dHJ5e3ZhciBvPWUodCl9Y2F0Y2goZSl7cmV0dXJufTAhPT1vLmxlbmd0aCYmKG8uaXMoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpP24/by5hdHRyKFwiY2hlY2tlZFwiLCEwKTpvLnJlbW92ZUF0dHIoXCJjaGVja2VkXCIpOnZvaWQgMCE9PW8ucHJvcChcInZhbHVlXCIpP2k/by5hdHRyKFwidmFsdWVcIixuKTpvLnZhbChuKTpvLmh0bWwobikpfSxyPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lfHxlfSxsPWZ1bmN0aW9uKGUpe3JldHVybihlK1wiXCIpLnJlcGxhY2UoL1suPyorXiRbXFxdXFxcXCgpe318LV0vZyxcIlxcXFwkJlwiKX0sZD1mdW5jdGlvbih0LG4saSxvKXt2YXIgYT1mdW5jdGlvbih0KXt2YXIgbj1lKHQpO1wib2JqZWN0XCI9PXR5cGVvZiB0JiZcImF0dHJpYnV0ZXNcImluIHQmJmUuZWFjaCh0LmF0dHJpYnV0ZXMsZnVuY3Rpb24odCxhKXtcInN0cmluZ1wiPT09ZS50eXBlKGEudmFsdWUpJiZuLmF0dHIoYS5uYW1lLnJlcGxhY2UoaSxvKSxhLnZhbHVlLnJlcGxhY2UoaSxvKSl9KSxuLmxlbmd0aD4wJiZlLmVhY2gobi5kYXRhKCksZnVuY3Rpb24odCxhKXtcInN0cmluZ1wiPT09ZS50eXBlKGEpJiZuLmRhdGEodC5yZXBsYWNlKGksbyksYS5yZXBsYWNlKGksbykpfSl9LHI9dC5lcShuKTthKHJbMF0pLHIuZmluZChcIipcIikuZWFjaChmdW5jdGlvbigpe2EodGhpcyl9KX0sYz1mdW5jdGlvbih0LG4saSxvLGEscil7dmFyIGM9bmV3IFJlZ0V4cChsKGkubmFtZV9wcmVmaXgrXCJbXCIrYStcIl1cIiksXCJnXCIpLHM9aS5uYW1lX3ByZWZpeCtcIltcIityK1wiXVwiO2kuY2hpbGRyZW4mJmUuZWFjaChpLmNoaWxkcmVuLGZ1bmN0aW9uKGUsbil7dmFyIGk9dC5maW5kKG4uc2VsZWN0b3IpLmVxKG8pLGE9aS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiKTthJiYoYS5uYW1lX3ByZWZpeD1hLm5hbWVfcHJlZml4LnJlcGxhY2UoYyxzKSxpLmRhdGEoXCJjb2xsZWN0aW9uLXNldHRpbmdzXCIsYSkpfSksZChuLG8sYyxzKSxjPW5ldyBSZWdFeHAobCh0LmF0dHIoXCJpZFwiKStcIl9cIithKSxcImdcIikscz10LmF0dHIoXCJpZFwiKStcIl9cIityLGkuY2hpbGRyZW4mJmUuZWFjaChpLmNoaWxkcmVuLGZ1bmN0aW9uKGUsbil7dmFyIGk9dC5maW5kKG4uc2VsZWN0b3IpLmVxKG8pLGE9aS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiKTthJiYoYS5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3I9YS5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IucmVwbGFjZShjLHMpLGEuZWxlbWVudHNfc2VsZWN0b3I9YS5lbGVtZW50c19zZWxlY3Rvci5yZXBsYWNlKGMscyksYS5wcmVmaXg9YS5wcmVmaXgucmVwbGFjZShjLHMpLGkuZGF0YShcImNvbGxlY3Rpb24tc2V0dGluZ3NcIixhKSl9KSxkKG4sbyxjLHMpfSxzPWZ1bmN0aW9uKGUsdCxuLGkpe3ZhciBvPWUuZGF0YShcImNvbGxlY3Rpb24tc2V0dGluZ3NcIik7cmV0dXJuIG8ucG9zaXRpb25fZmllbGRfc2VsZWN0b3J8fG8ucHJlc2VydmVfbmFtZXN8fChjKGUsdCxvLG4sbixcIl9fc3dhcF9fXCIpLGMoZSx0LG8saSxpLG4pLGMoZSx0LG8sbixcIl9fc3dhcF9fXCIsaSkpLHQuZXEobikuaW5zZXJ0QmVmb3JlKHQuZXEoaSkpLGk+bj90LmVxKGkpLmluc2VydEJlZm9yZSh0LmVxKG4pKTp0LmVxKGkpLmluc2VydEFmdGVyKHQuZXEobikpLGUuZmluZChvLmVsZW1lbnRzX3NlbGVjdG9yKX0sZj1mdW5jdGlvbihlLHQsbixpLG8pe2Zvcih2YXIgYT1pKzE7YTw9bzthKyspdD1zKGUsdCxhLGEtMSk7cmV0dXJuIGUuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKX0sXz1mdW5jdGlvbihlLHQsbixpLG8pe2Zvcih2YXIgYT1pLTE7YT49bzthLS0pdD1zKGUsdCxhLGErMSk7cmV0dXJuIGUuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKX0scD1mdW5jdGlvbihlLHQsbixpKXtmb3IodmFyIG89aSsxO288dC5sZW5ndGg7bysrKXQ9cyhlLHQsby0xLG8pO3JldHVybiBlLmZpbmQobi5lbGVtZW50c19zZWxlY3Rvcil9LHU9ZnVuY3Rpb24odCxuLG8sYSl7dmFyIHI9ZShuLmVsZW1lbnRzX3BhcmVudF9zZWxlY3RvciksbD0wPT09ci5maW5kKFwiLlwiK24ucHJlZml4K1wiLXRtcFwiKS5sZW5ndGgsZD10LmZpbmQobi5lbGVtZW50c19zZWxlY3Rvcik7aWYobi5hbGxvd19hZGQmJmwmJihyLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCInK24ucHJlZml4KyctdG1wXCI+PC9zcGFuPicpLG4uYWRkJiZyLmFwcGVuZChlKG4uYWRkKS5hZGRDbGFzcyhuLnByZWZpeCtcIi1hY3Rpb24gXCIrbi5wcmVmaXgrXCItcmVzY3VlLWFkZFwiKS5kYXRhKFwiY29sbGVjdGlvblwiLHQuYXR0cihcImlkXCIpKSkpLG8pe3QuZGF0YShcImNvbGxlY3Rpb24tb2Zmc2V0XCIsZC5sZW5ndGgpO2Zvcih2YXIgYz1lKG4uY29udGFpbmVyKSxzPXQuZmluZChcIi5cIituLnByZWZpeCtcIi1hZGQsIC5cIituLnByZWZpeCtcIi1yZXNjdWUtYWRkLCAuXCIrbi5wcmVmaXgrXCItZHVwbGljYXRlXCIpLmZpcnN0KCksZj0wO2QubGVuZ3RoPG4uaW5pdF93aXRoX25fZWxlbWVudHM7KXtmKys7dmFyIF89ZC5sZW5ndGg+MD9kLmxhc3QoKTp2b2lkIDAscD1kLmxlbmd0aC0xO2lmKGQ9bShjLHMsdCxuLGQsXyxwLCExKSxmPm4uaW5pdF93aXRoX25fZWxlbWVudHMpe2NvbnNvbGUuZXJyb3IoXCJJbmZpbml0ZSBsb29wLCBlbGVtZW50IHNlbGVjdG9yIChcIituLmVsZW1lbnRzX3NlbGVjdG9yK1wiKSBub3QgZm91bmQgIVwiKTticmVha319dC5kYXRhKFwiY29sbGVjdGlvbi1vZmZzZXRcIixkLmxlbmd0aCl9aWYoZC5lYWNoKGZ1bmN0aW9uKHIpe3ZhciBsPWUodGhpcyk7byYmbC5kYXRhKFwiaW5kZXhcIixyKTt2YXIgYz1sLmZpbmQoXCIuXCIrbi5wcmVmaXgrXCItYWN0aW9uc1wiKS5hZGRCYWNrKCkuZmlsdGVyKFwiLlwiK24ucHJlZml4K1wiLWFjdGlvbnNcIik7MD09PWMubGVuZ3RoJiYoYz1lKFwiPFwiK24uYWN0aW9uX2NvbnRhaW5lcl90YWcrJyBjbGFzcz1cIicrbi5wcmVmaXgrJy1hY3Rpb25zXCI+PC8nK24uYWN0aW9uX2NvbnRhaW5lcl90YWcrXCI+XCIpLGwuYXBwZW5kKGMpKTt2YXIgcz0wO1wicmVtb3ZlXCI9PT1hJiZuLmZhZGVfb3V0JiYocz0xKTt2YXIgZj1be2VuYWJsZWQ6bi5hbGxvd19yZW1vdmUsc2VsZWN0b3I6bi5wcmVmaXgrXCItcmVtb3ZlXCIsaHRtbDpuLnJlbW92ZSxjb25kaXRpb246ZC5sZW5ndGgtcz5uLm1pbn0se2VuYWJsZWQ6bi5hbGxvd191cCxzZWxlY3RvcjpuLnByZWZpeCtcIi11cFwiLGh0bWw6bi51cCxjb25kaXRpb246ZC5sZW5ndGgtcz4xJiZkLmluZGV4KGwpLXM+MH0se2VuYWJsZWQ6bi5hbGxvd19kb3duLHNlbGVjdG9yOm4ucHJlZml4K1wiLWRvd25cIixodG1sOm4uZG93bixjb25kaXRpb246ZC5sZW5ndGgtcz4xJiZkLmluZGV4KGwpIT09ZC5sZW5ndGgtMX0se2VuYWJsZWQ6bi5hbGxvd19hZGQmJiFuLmFkZF9hdF90aGVfZW5kJiYhbi5jdXN0b21fYWRkX2xvY2F0aW9uLHNlbGVjdG9yOm4ucHJlZml4K1wiLWFkZFwiLGh0bWw6bi5hZGQsY29uZGl0aW9uOmQubGVuZ3RoLXM8bi5tYXh9LHtlbmFibGVkOm4uYWxsb3dfZHVwbGljYXRlLHNlbGVjdG9yOm4ucHJlZml4K1wiLWR1cGxpY2F0ZVwiLGh0bWw6bi5kdXBsaWNhdGUsY29uZGl0aW9uOmQubGVuZ3RoLXM8bi5tYXh9XTtlLmVhY2goZixmdW5jdGlvbihvLGEpe2lmKGEuZW5hYmxlZCl7dmFyIGQ9bC5maW5kKFwiLlwiK2Euc2VsZWN0b3IpOzA9PT1kLmxlbmd0aCYmYS5odG1sJiYoZD1lKGEuaHRtbCkuYXBwZW5kVG8oYykuYWRkQ2xhc3MoYS5zZWxlY3RvcikpLGEuY29uZGl0aW9uPyhkLnJlbW92ZUNsYXNzKG4ucHJlZml4K1wiLWFjdGlvbi1kaXNhYmxlZFwiKSxuLmhpZGVfdXNlbGVzc19idXR0b25zJiZkLmNzcyhcImRpc3BsYXlcIixcIlwiKSk6KGQuYWRkQ2xhc3Mobi5wcmVmaXgrXCItYWN0aW9uLWRpc2FibGVkXCIpLG4uaGlkZV91c2VsZXNzX2J1dHRvbnMmJmQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKSksZC5hZGRDbGFzcyhuLnByZWZpeCtcIi1hY3Rpb25cIikuZGF0YShcImNvbGxlY3Rpb25cIix0LmF0dHIoXCJpZFwiKSkuZGF0YShcImVsZW1lbnRcIixpKHQuYXR0cihcImlkXCIpK1wiX1wiK3IsbCkpfWVsc2UgbC5maW5kKFwiLlwiK2Euc2VsZWN0b3IpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIil9KX0pLG4uYWxsb3dfYWRkKXt2YXIgdT0wO1wicmVtb3ZlXCI9PT1hJiZuLmZhZGVfb3V0JiYodT0xKTt2YXIgaD10LmZpbmQoXCIuXCIrbi5wcmVmaXgrXCItcmVzY3VlLWFkZFwiKS5jc3MoXCJkaXNwbGF5XCIsXCJcIikucmVtb3ZlQ2xhc3Mobi5wcmVmaXgrXCItYWN0aW9uLWRpc2FibGVkXCIpLHY9dC5maW5kKFwiLlwiK24ucHJlZml4K1wiLWFkZFwiKTshbi5hZGRfYXRfdGhlX2VuZCYmdi5sZW5ndGg+dXx8bi5jdXN0b21fYWRkX2xvY2F0aW9uP2guY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTpcInJlbW92ZVwiPT09YSYmbi5mYWRlX291dCYmKGguY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKSxoLmZhZGVJbihcImZhc3RcIikpLGQubGVuZ3RoLXU+PW4ubWF4JiYoaC5hZGRDbGFzcyhuLnByZWZpeCtcIi1hY3Rpb24tZGlzYWJsZWRcIiksbi5oaWRlX3VzZWxlc3NfYnV0dG9ucyYmdC5maW5kKFwiLlwiK24ucHJlZml4K1wiLWFkZCwgLlwiK24ucHJlZml4K1wiLXJlc2N1ZS1hZGQsIC5cIituLnByZWZpeCtcIi1kdXBsaWNhdGVcIikuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKSl9fSxoPWZ1bmN0aW9uKHQsbixpKXtpLmNoaWxkcmVuJiZlLmVhY2goaS5jaGlsZHJlbixmdW5jdGlvbihlLGkpe2lmKCFpLnNlbGVjdG9yKXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiBnaXZlbiBjb2xsZWN0aW9uIFwiK3QuYXR0cihcImlkXCIpK1wiIGhhcyBjaGlsZHJlbiBjb2xsZWN0aW9ucywgYnV0IGNoaWxkcmVuJ3Mgcm9vdCBzZWxlY3RvciBpcyB1bmRlZmluZWQuXCIpLCEwO251bGwhPT1uP24uZmluZChpLnNlbGVjdG9yKS5jb2xsZWN0aW9uKGkpOnQuZmluZChpLnNlbGVjdG9yKS5jb2xsZWN0aW9uKGkpfSl9LG09ZnVuY3Rpb24odCxuLGksZCxjLHMsZixfKXtpZihjLmxlbmd0aDxkLm1heCYmKF8mJnIoZC5iZWZvcmVfZHVwbGljYXRlKGkscykpfHxyKGQuYmVmb3JlX2FkZChpLHMpKSkpe3ZhciBtPWkuZGF0YShcInByb3RvdHlwZVwiKSx2PWkuZGF0YShcImNvbGxlY3Rpb24tb2Zmc2V0XCIpO2kuZGF0YShcImNvbGxlY3Rpb24tb2Zmc2V0XCIsdisxKSwtMT09PWYmJihmPWMubGVuZ3RoLTEpO3ZhciBqPW5ldyBSZWdFeHAobChkLnByb3RvdHlwZV9uYW1lKSxcImdcIikscT12O2QucHJlc2VydmVfbmFtZXMmJih2b2lkIDA9PT0ocT1pLmRhdGEoXCJjb2xsZWN0aW9uLWZyZWUta2V5XCIpKSYmKHE9YihkLGMpKSxpLmRhdGEoXCJjb2xsZWN0aW9uLWZyZWUta2V5XCIscSsxKSk7dmFyIEM9ZShtLnJlcGxhY2UoaixxKSkuZGF0YShcImluZGV4XCIsdik7eShkLEMpO3ZhciBrPWUoZC5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpLmZpbmQoXCI+IC5cIitkLnByZWZpeCtcIi10bXBcIik7ZShDKS5maW5kKFwiW2lkXVwiKS5maXJzdCgpLmF0dHIoXCJpZFwiKTtpZihfKXt2YXIgRT1jLmVxKGYpOyFmdW5jdGlvbih0KXtlKHQpLmZpbmQoXCI6aW5wdXRcIikuZWFjaChmdW5jdGlvbihlLHQpe2EodCxvKHQpLCEwKX0pfShFKTt2YXIgQj1lKFwiPGRpdi8+XCIpLmFwcGVuZChFLmNsb25lKCkpLmh0bWwoKSxRPWQucHJlc2VydmVfbmFtZXN8fGQucG9zaXRpb25fZmllbGRfc2VsZWN0b3I/RS5kYXRhKFwiaW5kZXhcIik6ZixSPWQucHJlc2VydmVfbmFtZXM/dyhkLEUpOlEsQT1mdW5jdGlvbihlLHQsbixpLG8sYSxyKXt2YXIgZD1uZXcgUmVnRXhwKGwodC5uYW1lX3ByZWZpeCtcIltcIithK1wiXVwiKSxcImdcIiksYz10Lm5hbWVfcHJlZml4K1wiW1wiK3IrXCJdXCI7cmV0dXJuIG49bi5yZXBsYWNlKGQsYyksZD1uZXcgUmVnRXhwKGwoZS5hdHRyKFwiaWRcIikrXCJfXCIraSksXCJnXCIpLGM9ZS5hdHRyKFwiaWRcIikrXCJfXCIrbyxuPW4ucmVwbGFjZShkLGMpfShpLGQsQixRLHYsUixxKTtDPWUoXCI8ZGl2Lz5cIikuaHRtbChBKS5jb250ZW50cygpLmRhdGEoXCJpbmRleFwiLHYpLGQuZmFkZV9pbiYmQy5oaWRlKCksay5iZWZvcmUoQykuZmluZChkLnByZWZpeCtcIi1hY3Rpb25zXCIpLnJlbW92ZSgpfWVsc2UgZC5mYWRlX2luJiZDLmhpZGUoKSxrLmJlZm9yZShDKTtjPWkuZmluZChkLmVsZW1lbnRzX3NlbGVjdG9yKTt2YXIgRD1DLmZpbmQoXCIuXCIrZC5wcmVmaXgrXCItYWRkLCAuXCIrZC5wcmVmaXgrXCItZHVwbGljYXRlXCIpO0QubGVuZ3RoPjAmJkQuYWRkQ2xhc3MoZC5wcmVmaXgrXCItYWN0aW9uXCIpLmRhdGEoXCJjb2xsZWN0aW9uXCIsaS5hdHRyKFwiaWRcIikpLGQuYWRkX2F0X3RoZV9lbmR8fGYrMT09PXY/dShpLGQsITEpOmM9eChpLGQsYyxDLHYsZisxKSxoKGksQyxkKSwoXyYmIXIoZC5hZnRlcl9kdXBsaWNhdGUoaSxDKSl8fCFyKGQuYWZ0ZXJfYWRkKGksQykpKSYmKC0xIT09ZiYmKGM9cChpLGMsZCxmKzEpKSxDLnJlbW92ZSgpKX1pZih2b2lkIDAhPT1DJiZkLmZhZGVfaW4pQy5mYWRlSW4oXCJmYXN0XCIsZnVuY3Rpb24oKXtkLnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yJiZnKGQsYyl9KTtlbHNlIGlmKGQucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpcmV0dXJuIGcoZCxjKTtyZXR1cm4gY30sdj1mdW5jdGlvbih0LG4saSxvLGEpe2lmKGkubGVuZ3RoPm4ubWluJiZyKG4uYmVmb3JlX3JlbW92ZSh0LG8pKSl7dmFyIGw9ZnVuY3Rpb24oKXt2YXIgbD1vO24ucHJlc2VydmVfbmFtZXN8fChsPShpPXAodCxpLG4sYSkpLmxhc3QoKSk7dmFyIGQ9bC5jbG9uZSh7d2l0aERhdGFBbmRFdmVudHM6ITB9KS5zaG93KCk7KGwucmVtb3ZlKCkscihuLmFmdGVyX3JlbW92ZSh0LGQpKSl8fChlKG4uZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yKS5maW5kKFwiPiAuXCIrbi5wcmVmaXgrXCItdG1wXCIpLmJlZm9yZShkKSxpPXQuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKSxpPWZ1bmN0aW9uKGUsdCxuLGkpe2Zvcih2YXIgbz10Lmxlbmd0aC0yO28+aTtvLS0pdD1zKGUsdCxvKzEsbyk7cmV0dXJuIGUuZmluZChuLmVsZW1lbnRzX3NlbGVjdG9yKX0odCxpLG4sYS0xKSk7bi5wb3NpdGlvbl9maWVsZF9zZWxlY3RvciYmZyhuLGkpfTtuLmZhZGVfb3V0P28uZmFkZU91dChcImZhc3RcIixmdW5jdGlvbigpe2woKX0pOmwoKX1yZXR1cm4gaX0seD1mdW5jdGlvbihlLHQsbixpLG8sYSl7cmV0dXJuIDE9PT1NYXRoLmFicyhhLW8pPyhuPXMoZSxuLG8sYSkscihhLW8+MD90LmFmdGVyX3VwKGUsaSk6dC5hZnRlcl9kb3duKGUsaSkpfHwobj1zKGUsbixhLG8pKSk6bzxhPyhuPWYoZSxuLHQsbyxhKSxyKGEtbz4wP3QuYWZ0ZXJfdXAoZSxpKTp0LmFmdGVyX2Rvd24oZSxpKSl8fChuPV8oZSxuLHQsYSxvKSkpOihuPV8oZSxuLHQsbyxhKSxyKGEtbz4wP3QuYWZ0ZXJfdXAoZSxpKTp0LmFmdGVyX2Rvd24oZSxpKSl8fChuPWYoZSxuLHQsYSxvKSkpLHUoZSx0LCExKSx0LnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yP2codCxuKTpufSxnPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUobikuZWFjaChmdW5jdGlvbigpe3ZhciBpPWUodGhpcyk7YShpLmZpbmQodC5wb3NpdGlvbl9maWVsZF9zZWxlY3Rvciksbi5pbmRleChpKSl9KSxufSx3PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQuZmluZCgnOmlucHV0W25hbWVePVwiJytlLm5hbWVfcHJlZml4KydbXCJdJykuYXR0cihcIm5hbWVcIikuc2xpY2UoZS5uYW1lX3ByZWZpeC5sZW5ndGgrMSkuc3BsaXQoXCJdXCIsMSlbMF19LGI9ZnVuY3Rpb24odCxuKXt2YXIgaT0wO3JldHVybiBuLmVhY2goZnVuY3Rpb24oKXt2YXIgbj13KHQsZSh0aGlzKSk7L14wfFsxLTldXFxkKiQvLnRlc3QobikmJm4+PWkmJihpPU51bWJlcihuKSsxKX0pLGl9LHk9ZnVuY3Rpb24odCxuKXtlLmVhY2goW1wiLWFjdGlvblwiLFwiLWFjdGlvbi1kaXNhYmxlZFwiLFwiLWFjdGlvbnNcIixcIi1hZGRcIixcIi1kb3duXCIsXCItZHVwbGljYXRlXCIsXCItcmVtb3ZlXCIsXCItcmVzY3VlLWFkZFwiLFwiLXRtcFwiLFwiLXVwXCJdLGZ1bmN0aW9uKCl7dmFyIGk9dGhpcztuLmVhY2goZnVuY3Rpb24oKXt2YXIgbj1lKHRoaXMpO24uaGFzQ2xhc3ModC51c2VyX3ByZWZpeCtpKSYmbi5hZGRDbGFzcyh0LnByZWZpeCtpKSxuLmZpbmQoXCIqXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgbj1lKHRoaXMpO24uaGFzQ2xhc3ModC51c2VyX3ByZWZpeCtpKSYmbi5hZGRDbGFzcyh0LnByZWZpeCtpKX0pfSl9KX0saj1lKHRoaXMpO3JldHVybiAwPT09ai5sZW5ndGg/KGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IGdpdmVuIGNvbGxlY3Rpb24gc2VsZWN0b3IgZG9lcyBub3QgZXhpc3QuXCIpLCExKTooai5lYWNoKGZ1bmN0aW9uKCl7dmFyIGw9ZS5leHRlbmQoITAse30sbix0KTtpZigwPT09ZShsLmNvbnRhaW5lcikubGVuZ3RoKXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiBhIGNvbnRhaW5lciBzaG91bGQgZXhpc3QgdG8gaGFuZGxlIGV2ZW50cyAoYmFzaWNhbGx5LCBhIDxib2R5PiB0YWcpLlwiKSwhMTt2YXIgZCxjLGY9ZSh0aGlzKTtpZih2b2lkIDAhPT1mLmRhdGEoXCJjb2xsZWN0aW9uXCIpKXt2YXIgXz1lKFwiI1wiK2YuZGF0YShcImNvbGxlY3Rpb25cIikpO2lmKDA9PT1fLmxlbmd0aClyZXR1cm4gY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gY29sbGVjdGlvbiBpZCBkb2VzIG5vdCBleGlzdC5cIiksITB9ZWxzZSBfPWY7aWYoXz1lKF8pLGwuZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yPWwuZWxlbWVudHNfcGFyZW50X3NlbGVjdG9yLnJlcGxhY2UoXCIlaWQlXCIsXCIjXCIraShcIlwiLF8pKSwhbC5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3ImJihsLmVsZW1lbnRzX3BhcmVudF9zZWxlY3Rvcj1cIiNcIitpKFwiXCIsXyksMD09PWUobC5lbGVtZW50c19wYXJlbnRfc2VsZWN0b3IpLmxlbmd0aCkpcmV0dXJuIGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IGdpdmVuIGVsZW1lbnRzIHBhcmVudCBzZWxlY3RvciBkb2VzIG5vdCByZXR1cm4gYW55IG9iamVjdC5cIiksITA7aWYobC51c2VyX3ByZWZpeD1sLnByZWZpeCxsLnByZWZpeD1fLmF0dHIoXCJpZFwiKStcIi1cIitsLnVzZXJfcHJlZml4LHkobCxfKSxsLmFsbG93X2FkZHx8KGwuYWxsb3dfZHVwbGljYXRlPSExLGwuYWRkX2F0X3RoZV9lbmQ9ITEpLGwuaW5pdF93aXRoX25fZWxlbWVudHM+bC5tYXgmJihsLmluaXRfd2l0aF9uX2VsZW1lbnRzPWwubWF4KSxsLm1pbiYmKCFsLmluaXRfd2l0aF9uX2VsZW1lbnRzfHxsLmluaXRfd2l0aF9uX2VsZW1lbnRzPGwubWluKSYmKGwuaW5pdF93aXRoX25fZWxlbWVudHM9bC5taW4pLCFsLmFjdGlvbl9jb250YWluZXJfdGFnKXJldHVybiBjb25zb2xlLmxvZyhcImpxdWVyeS5jb2xsZWN0aW9uLmpzOiBhY3Rpb25fY29udGFpbmVyX3RhZyBuZWVkcyB0byBiZSBzZXQuXCIpLCEwO2lmKGwuYmVmb3JlX2luaXQoXyksbnVsbD09PV8uZGF0YShcInByb3RvdHlwZVwiKSlyZXR1cm4gY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogZ2l2ZW4gY29sbGVjdGlvbiBmaWVsZCBoYXMgbm8gcHJvdG90eXBlLCBjaGVjayB0aGF0IHlvdXIgZmllbGQgaGFzIHRoZSBwcm90b3R5cGUgb3B0aW9uIHNldCB0byB0cnVlLlwiKSwhMDtpZih2b2lkIDAhPT1fLmRhdGEoXCJwcm90b3R5cGUtbmFtZVwiKSYmKGwucHJvdG90eXBlX25hbWU9Xy5kYXRhKFwicHJvdG90eXBlLW5hbWVcIikpLHZvaWQgMCE9PV8uZGF0YShcImFsbG93LWFkZFwiKSYmKGwuYWxsb3dfYWRkPV8uZGF0YShcImFsbG93LWFkZFwiKSxsLmFsbG93X2R1cGxpY2F0ZT0hIV8uZGF0YShcImFsbG93LWFkZFwiKSYmbC5hbGxvd19kdXBsaWNhdGUpLHZvaWQgMCE9PV8uZGF0YShcImFsbG93LXJlbW92ZVwiKSYmKGwuYWxsb3dfcmVtb3ZlPV8uZGF0YShcImFsbG93LXJlbW92ZVwiKSksdm9pZCAwIT09Xy5kYXRhKFwibmFtZS1wcmVmaXhcIikmJihsLm5hbWVfcHJlZml4PV8uZGF0YShcIm5hbWUtcHJlZml4XCIpKSwhbC5uYW1lX3ByZWZpeClyZXR1cm4gY29uc29sZS5sb2coXCJqcXVlcnkuY29sbGVjdGlvbi5qczogdGhlIHByZWZpeCB1c2VkIGluIGRlc2NlbmRhbnQgZmllbGQgbmFtZXMgaXMgbWFuZGF0b3J5LCB5b3UgY2FuIHNldCBpdCB1c2luZyAyIHdheXM6XCIpLGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IC0gdXNlIHRoZSBmb3JtIHRoZW1lIGdpdmVuIHdpdGggdGhpcyBwbHVnaW4gc291cmNlXCIpLGNvbnNvbGUubG9nKFwianF1ZXJ5LmNvbGxlY3Rpb24uanM6IC0gc2V0IG5hbWVfcHJlZml4IG9wdGlvbiB0byAgJ3t7IGZvcm1WaWV3Lm15Q29sbGVjdGlvbkZpZWxkLnZhcnMuZnVsbF9uYW1lIH19J1wiKSwhMDsobC5wcmVzZXJ2ZV9uYW1lcyYmKGwuYWxsb3dfdXA9ITEsbC5hbGxvd19kb3duPSExLGwuZHJhZ19kcm9wPSExLGwuYWRkX2F0X3RoZV9lbmQ9ITApLHZvaWQgMCE9PWpRdWVyeS51aSYmdm9pZCAwIT09alF1ZXJ5LnVpLnNvcnRhYmxlJiZfLmRhdGEoXCJzb3J0YWJsZVwiKSYmXy5zb3J0YWJsZShcImRpc2FibGVcIiksbC5kcmFnX2Ryb3AmJmwuYWxsb3dfdXAmJmwuYWxsb3dfZG93bikmJih2b2lkIDA9PT1qUXVlcnkudWl8fHZvaWQgMD09PWpRdWVyeS51aS5zb3J0YWJsZT9sLmRyYWdfZHJvcD0hMTpfLnNvcnRhYmxlKGUuZXh0ZW5kKCEwLHt9LHtzdGFydDpmdW5jdGlvbih0LG4pe3ZhciBpPV8uZmluZChsLmVsZW1lbnRzX3NlbGVjdG9yKSxvPW4uaXRlbSxhPWUodGhpcyk7cihsLmRyYWdfZHJvcF9zdGFydCh0LG4saSxvKSk/KG4ucGxhY2Vob2xkZXIuaGVpZ2h0KG4uaXRlbS5oZWlnaHQoKSksbi5wbGFjZWhvbGRlci53aWR0aChuLml0ZW0ud2lkdGgoKSksZD1pLmluZGV4KG8pKTphLnNvcnRhYmxlKFwiY2FuY2VsXCIpfSx1cGRhdGU6ZnVuY3Rpb24odCxuKXt2YXIgaT1fLmZpbmQobC5lbGVtZW50c19zZWxlY3Rvciksbz1uLml0ZW07ZSh0aGlzKS5zb3J0YWJsZShcImNhbmNlbFwiKSwhMSE9PWwuZHJhZ19kcm9wX3VwZGF0ZSh0LG4saSxvKSYmcihjLWQ+MD9sLmJlZm9yZV91cChfLG8pOmwuYmVmb3JlX2Rvd24oXyxvKSkmJihjPWkuaW5kZXgobyksaT1fLmZpbmQobC5lbGVtZW50c19zZWxlY3RvcikseChfLGwsaSxvLGQsYykpfX0sbC5kcmFnX2Ryb3Bfb3B0aW9ucykpKTtfLmRhdGEoXCJjb2xsZWN0aW9uLXNldHRpbmdzXCIsbCk7dmFyIHA9ZShsLmNvbnRhaW5lcik7aWYocC5vZmYoXCJjbGlja1wiLFwiLlwiK2wucHJlZml4K1wiLWFjdGlvblwiKS5vbihcImNsaWNrXCIsXCIuXCIrbC5wcmVmaXgrXCItYWN0aW9uXCIsZnVuY3Rpb24odCl7dmFyIG4saSxvPWUodGhpcyk7aWYodm9pZCAwPT09KGk9KG49ZShcIiNcIitvLmRhdGEoXCJjb2xsZWN0aW9uXCIpKSkuZGF0YShcImNvbGxlY3Rpb24tc2V0dGluZ3NcIikpJiZ2b2lkIDA9PT0oaT0obj1lKFwiI1wiK28uZGF0YShcImNvbGxlY3Rpb25cIikpLmZpbmQoXCIuXCIrby5kYXRhKFwiY29sbGVjdGlvblwiKStcIi1jb2xsZWN0aW9uXCIpKS5kYXRhKFwiY29sbGVjdGlvbi1zZXR0aW5nc1wiKSkpdGhyb3dcIkNhbid0IGZpbmQgY29sbGVjdGlvbjogXCIrby5kYXRhKFwiY29sbGVjdGlvblwiKTt2YXIgYT1uLmZpbmQoaS5lbGVtZW50c19zZWxlY3RvciksbD1vLmRhdGEoXCJlbGVtZW50XCIpP2UoXCIjXCIrby5kYXRhKFwiZWxlbWVudFwiKSk6dm9pZCAwLGQ9bCYmbC5sZW5ndGg/YS5pbmRleChsKTotMSxjPW51bGwsZj1vLmlzKFwiLlwiK2kucHJlZml4K1wiLWR1cGxpY2F0ZVwiKTsoby5pcyhcIi5cIitpLnByZWZpeCtcIi1hZGRcIil8fG8uaXMoXCIuXCIraS5wcmVmaXgrXCItcmVzY3VlLWFkZFwiKXx8ZikmJmkuYWxsb3dfYWRkJiYoYz1cImFkZFwiLGE9bShwLG8sbixpLGEsbCxkLGYpKSxvLmlzKFwiLlwiK2kucHJlZml4K1wiLXJlbW92ZVwiKSYmaS5hbGxvd19yZW1vdmUmJihjPVwicmVtb3ZlXCIsYT12KG4saSxhLGwsZCkpLG8uaXMoXCIuXCIraS5wcmVmaXgrXCItdXBcIikmJmkuYWxsb3dfdXAmJihjPVwidXBcIixhPWZ1bmN0aW9uKGUsdCxuLGksbyl7cmV0dXJuIDAhPT1vJiZyKHQuYmVmb3JlX3VwKGUsaSkpJiYobj1zKGUsbixvLG8tMSkscih0LmFmdGVyX3VwKGUsaSkpfHwobj1zKGUsbixvLTEsbykpKSx0LnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yP2codCxuKTpufShuLGksYSxsLGQpKSxvLmlzKFwiLlwiK2kucHJlZml4K1wiLWRvd25cIikmJmkuYWxsb3dfZG93biYmKGM9XCJkb3duXCIsYT1mdW5jdGlvbihlLHQsbixpLG8pe3JldHVybiBvIT09bi5sZW5ndGgtMSYmcih0LmJlZm9yZV9kb3duKGUsaSkpJiYobj1zKGUsbixvLG8rMSkscih0LmFmdGVyX2Rvd24oZSxuKSl8fChuPXMoZSxuLG8rMSxvKSkpLHQucG9zaXRpb25fZmllbGRfc2VsZWN0b3I/Zyh0LG4pOm59KG4saSxhLGwsZCkpLHUobixpLCExLGMpLHQucHJldmVudERlZmF1bHQoKX0pLHUoXyxsLCEwKSxoKF8sbnVsbCxsKSxsLnBvc2l0aW9uX2ZpZWxkX3NlbGVjdG9yKXt2YXIgdz1bXSxiPV8uZmluZChsLmVsZW1lbnRzX3NlbGVjdG9yKTtiLmVhY2goZnVuY3Rpb24odCl7dmFyIG49ZSh0aGlzKTt3LnB1c2goe3Bvc2l0aW9uOnBhcnNlRmxvYXQobyhuLmZpbmQobC5wb3NpdGlvbl9maWVsZF9zZWxlY3RvcikpKSxlbGVtZW50Om59KX0pO3cuc29ydChmdW5jdGlvbihlLHQpe3JldHVybiBlLnBvc2l0aW9uPHQucG9zaXRpb24/LTE6ZS5wb3NpdGlvbj50LnBvc2l0aW9uPzE6MH0pLGUuZWFjaCh3LGZ1bmN0aW9uKHQsbil7dmFyIGk9W107ZShiKS5lYWNoKGZ1bmN0aW9uKHQpe2kucHVzaChlKHRoaXMpLmF0dHIoXCJpZFwiKSl9KTt2YXIgbz1uLmVsZW1lbnQscj1lLmluQXJyYXkoby5hdHRyKFwiaWRcIiksaSk7dCE9PXImJihiPXgoXyxsLGIsbyxyLHQpLGEoby5maW5kKGwucG9zaXRpb25fZmllbGRfc2VsZWN0b3IpLGIuaW5kZXgobykpKX0pfWwuYWZ0ZXJfaW5pdChfKX0pLCEwKX19KGpRdWVyeSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbC5wYXJzZUZsb2F0O1xudmFyIEZPUkNFRCA9IDEgLyAkcGFyc2VGbG9hdCh3aGl0ZXNwYWNlcyArICctMCcpICE9PSAtSW5maW5pdHk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyaW5nKSB7XG4gIHZhciB0cmltbWVkU3RyaW5nID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdCh0cmltbWVkU3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiB0cmltbWVkU3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiAkcGFyc2VGbG9hdDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIHRlc3QgPSBbXTtcbnZhciBuYXRpdmVTb3J0ID0gdGVzdC5zb3J0O1xuXG4vLyBJRTgtXG52YXIgRkFJTFNfT05fVU5ERUZJTkVEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pO1xuLy8gVjggYnVnXG52YXIgRkFJTFNfT05fTlVMTCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KG51bGwpO1xufSk7XG4vLyBPbGQgV2ViS2l0XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ3NvcnQnKTtcblxudmFyIEZPUkNFRCA9IEZBSUxTX09OX1VOREVGSU5FRCB8fCAhRkFJTFNfT05fTlVMTCB8fCAhU1RSSUNUX01FVEhPRDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb3J0XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbikge1xuICAgIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZFxuICAgICAgPyBuYXRpdmVTb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSwgYUZ1bmN0aW9uKGNvbXBhcmVmbikpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQnKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VGbG9hdCAhPSBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUZsb2F0OiBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==