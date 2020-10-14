(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["creneaux"],{

/***/ "./assets/js/pages/creneaux.js":
/*!*************************************!*\
  !*** ./assets/js/pages/creneaux.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/creneaux.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 16:14

$(document).on('click', '#btn_creneau_add', function () {
  var $annee = $('#change_annee_universitiare_temp').val();
  $.ajax({
    method: 'POST',
    data: {
      anneeUniversitaire: $annee,
      jour: $('#creneau_jour').val(),
      debut: $('#creneau_debut').val(),
      fin: $('#creneau_fin').val()
    },
    url: Routing.generate('administration_creneau_cours_new'),
    success: function success() {
      $('#liste_creneaux').empty().load(Routing.generate('administration_creneau_cours_liste', {
        annee_universitaire: $annee
      }));
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Créneau ajouté avec succès', 'success');
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Erreur lors de l\'ajout du créneau', 'danger');
    }
  });
});
$(document).on('click', '.bloquercreneau', function () {
  var $cr = $(this);

  if ($cr.hasClass('bloquercreneau_eviter')) {
    updateCreneau('dispo', $cr.data('creneau'), $cr.data('semaine'));
    $cr.removeClass('bloquercreneau_eviter');
  } else if ($cr.hasClass('bloquercreneau_interdit')) {
    $cr.removeClass('bloquercreneau_interdit');
    $cr.addClass('bloquercreneau_eviter');
    updateCreneau('au', $cr.data('creneau'), $cr.data('semaine'));
  } else {
    $cr.addClass('bloquercreneau_interdit');
    updateCreneau('va', $cr.data('creneau'), $cr.data('semaine'));
  }
});
$(document).on('click', '.creneau', function () {
  var interdit = $('#nb_interdit');
  var eviter = $('#nb_eviter');
  var dispo = $('#nb_dispo');
  var heure = $(this).data('heure');
  var jour = $(this).dataAttr('jour');
  var nb_interdit = parseInt(interdit.text());
  var nb_eviter = parseInt(eviter.text());
  var nb_dispo = parseInt(dispo.text());

  if ($(this).hasClass('bloquercreneau_interdit')) {
    $(this).removeClass('bloquercreneau_interdit');
    $(this).addClass('bloquercreneau_eviter');
    nb_interdit--;
    nb_eviter++;
    updateDisponibilite(jour, heure, 'E');
  } else if ($(this).hasClass('bloquercreneau_eviter')) {
    $(this).removeClass('bloquercreneau_eviter');
    nb_eviter--;
    nb_dispo++;
    updateDisponibilite(jour, heure, 'D');
  } else {
    $(this).addClass('bloquercreneau_interdit');
    nb_interdit++;
    nb_dispo--;
    updateDisponibilite(jour, heure, 'I');
  }

  interdit.text(nb_interdit);
  eviter.text(nb_eviter);
  dispo.text(nb_dispo);
});

function updateDisponibilite($jour, $heure, $etat) {
  $.ajax({
    url: Routing.generate('application_personnel_disponibilite_update'),
    data: {
      jour: $jour,
      heure: $heure,
      etat: $etat
    },
    method: 'POST'
  });
}

function updateCreneau($type, $cr, $semaine) {
  $.ajax({
    url: Routing.generate('administration_creneau_bloque_modifie_etat'),
    data: {
      creneau: $cr,
      type: $type,
      semaine: $semaine
    },
    method: 'POST'
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

},[["./assets/js/pages/creneaux.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY3JlbmVhdXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCIkYW5uZWUiLCJ2YWwiLCJhamF4IiwibWV0aG9kIiwiZGF0YSIsImFubmVlVW5pdmVyc2l0YWlyZSIsImpvdXIiLCJkZWJ1dCIsImZpbiIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJlbXB0eSIsImxvYWQiLCJhbm5lZV91bml2ZXJzaXRhaXJlIiwiYWRkQ2FsbG91dCIsImVycm9yIiwiJGNyIiwiaGFzQ2xhc3MiLCJ1cGRhdGVDcmVuZWF1IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImludGVyZGl0IiwiZXZpdGVyIiwiZGlzcG8iLCJoZXVyZSIsImRhdGFBdHRyIiwibmJfaW50ZXJkaXQiLCJwYXJzZUludCIsInRleHQiLCJuYl9ldml0ZXIiLCJuYl9kaXNwbyIsInVwZGF0ZURpc3BvbmliaWxpdGUiLCIkam91ciIsIiRoZXVyZSIsIiRldGF0IiwiZXRhdCIsIiR0eXBlIiwiJHNlbWFpbmUiLCJjcmVuZWF1IiwidHlwZSIsInNlbWFpbmUiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJsb2NhdGlvbiIsImF0dHIiLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIiRvYmoiLCIkaHRtbCIsInRyaW0iLCJqUXVlcnkiLCJmbiIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwiZWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixrQkFBeEIsRUFBNEMsWUFBVTtBQUNwRCxNQUFNQyxNQUFNLEdBQUdILENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDSSxHQUF0QyxFQUFmO0FBQ0FKLEdBQUMsQ0FBQ0ssSUFBRixDQUFPO0FBQ0xDLFVBQU0sRUFBQyxNQURGO0FB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VyxtQkFBTyxDQUFDLGlGQUEwQjtBQUM3QyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDYkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyw2QkFBNkIsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRXBFO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUMiLCJmaWxlIjoiY3JlbmVhdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvY3JlbmVhdXguanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNi8wOS8yMDIwIDE2OjE0XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYnRuX2NyZW5lYXVfYWRkJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgJGFubmVlID0gJCgnI2NoYW5nZV9hbm5lZV91bml2ZXJzaXRpYXJlX3RlbXAnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIG1ldGhvZDonUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgYW5uZWVVbml2ZXJzaXRhaXJlOiAkYW5uZWUsXG4gICAgICBqb3VyOiQoJyNjcmVuZWF1X2pvdXInKS52YWwoKSxcbiAgICAgIGRlYnV0OiQoJyNjcmVuZWF1X2RlYnV0JykudmFsKCksXG4gICAgICBmaW46JCgnI2NyZW5lYXVfZmluJykudmFsKClcbiAgICB9LFxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fY3JlbmVhdV9jb3Vyc19uZXcnKSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjbGlzdGVfY3JlbmVhdXgnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fY3JlbmVhdV9jb3Vyc19saXN0ZScsIHthbm5lZV91bml2ZXJzaXRhaXJlOiAkYW5uZWV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ0Nyw6luZWF1IGFqb3V0w6kgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxcXCdham91dCBkdSBjcsOpbmVhdScsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYmxvcXVlcmNyZW5lYXUnLCBmdW5jdGlvbigpe1xuICBjb25zdCAkY3IgPSAkKHRoaXMpXG4gIGlmICgkY3IuaGFzQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpKSB7XG4gICAgdXBkYXRlQ3JlbmVhdSgnZGlzcG8nLCAkY3IuZGF0YSgnY3JlbmVhdScpLCAkY3IuZGF0YSgnc2VtYWluZScpKVxuICAgICRjci5yZW1vdmVDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJylcbiAgfSBlbHNlIGlmKCRjci5oYXNDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKSkge1xuICAgICRjci5yZW1vdmVDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKVxuICAgICRjci5hZGRDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJylcbiAgICB1cGRhdGVDcmVuZWF1KCdhdScsICRjci5kYXRhKCdjcmVuZWF1JyksICRjci5kYXRhKCdzZW1haW5lJykpXG4gIH0gZWxzZSB7XG4gICAgJGNyLmFkZENsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpXG4gICAgdXBkYXRlQ3JlbmVhdSgndmEnLCAkY3IuZGF0YSgnY3JlbmVhdScpLCAkY3IuZGF0YSgnc2VtYWluZScpKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNyZW5lYXUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGludGVyZGl0ID0gJCgnI25iX2ludGVyZGl0JylcbiAgY29uc3QgZXZpdGVyID0gJCgnI25iX2V2aXRlcicpXG4gIGNvbnN0IGRpc3BvID0gJCgnI25iX2Rpc3BvJylcbiAgY29uc3QgaGV1cmUgPSAkKHRoaXMpLmRhdGEoJ2hldXJlJylcbiAgY29uc3Qgam91ciA9ICQodGhpcykuZGF0YUF0dHIoJ2pvdXInKVxuXG4gIGxldCBuYl9pbnRlcmRpdCA9IHBhcnNlSW50KGludGVyZGl0LnRleHQoKSlcbiAgbGV0IG5iX2V2aXRlciA9IHBhcnNlSW50KGV2aXRlci50ZXh0KCkpXG4gIGxldCBuYl9kaXNwbyA9IHBhcnNlSW50KGRpc3BvLnRleHQoKSlcblxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKSkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JylcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKVxuICAgIG5iX2ludGVyZGl0LS1cbiAgICBuYl9ldml0ZXIrK1xuICAgIHVwZGF0ZURpc3BvbmliaWxpdGUoam91ciwgaGV1cmUsJ0UnKVxuICB9IGVsc2UgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJylcbiAgICBuYl9ldml0ZXItLVxuICAgIG5iX2Rpc3BvKytcbiAgICB1cGRhdGVEaXNwb25pYmlsaXRlKGpvdXIsIGhldXJlLCdEJylcbiAgfSBlbHNlIHtcblxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JylcbiAgICBuYl9pbnRlcmRpdCsrXG4gICAgbmJfZGlzcG8tLVxuICAgIHVwZGF0ZURpc3BvbmliaWxpdGUoam91ciwgaGV1cmUsJ0knKVxuICB9XG5cbiAgaW50ZXJkaXQudGV4dChuYl9pbnRlcmRpdClcbiAgZXZpdGVyLnRleHQobmJfZXZpdGVyKVxuICBkaXNwby50ZXh0KG5iX2Rpc3BvKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGlzcG9uaWJpbGl0ZSgkam91ciwgJGhldXJlLCAkZXRhdCl7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfZGlzcG9uaWJpbGl0ZV91cGRhdGUnKSxcbiAgICBkYXRhOntcbiAgICAgIGpvdXI6ICRqb3VyLFxuICAgICAgaGV1cmU6ICRoZXVyZSxcbiAgICAgIGV0YXQ6ICRldGF0XG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDcmVuZWF1KCR0eXBlLCAkY3IsICRzZW1haW5lKXtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2NyZW5lYXVfYmxvcXVlX21vZGlmaWVfZXRhdCcpLFxuICAgIGRhdGE6e1xuICAgICAgY3JlbmVhdTogJGNyLFxuICAgICAgdHlwZTogJHR5cGUsXG4gICAgICBzZW1haW5lOiAkc2VtYWluZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTEvMTAvMjAyMCAwODowNFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZURhdGEoKVxuICB9XG5cbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuICBsZXQgJGh0bWwgPSAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiIGlkPVwibXllZGl0LWlucHV0XCIgLz4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tc3VjY2VzcyBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj48L2Rpdj4nXG4gIHJldHVybiAkaHRtbFxufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBoZXggPSAvXlsrLV0/MFtYeF0vO1xudmFyIEZPUkNFRCA9ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==