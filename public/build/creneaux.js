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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY3JlbmVhdXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCIkYW5uZWUiLCJ2YWwiLCJhamF4IiwibWV0aG9kIiwiZGF0YSIsImFubmVlVW5pdmVyc2l0YWlyZSIsImpvdXIiLCJkZWJ1dCIsImZpbiIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJlbXB0eSIsImxvYWQiLCJhbm5lZV91bml2ZXJzaXRhaXJlIiwiYWRkQ2FsbG91dCIsImVycm9yIiwiJGNyIiwiaGFzQ2xhc3MiLCJ1cGRhdGVDcmVuZWF1IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImludGVyZGl0IiwiZXZpdGVyIiwiZGlzcG8iLCJoZXVyZSIsImRhdGFBdHRyIiwibmJfaW50ZXJkaXQiLCJwYXJzZUludCIsInRleHQiLCJuYl9ldml0ZXIiLCJuYl9kaXNwbyIsInVwZGF0ZURpc3BvbmliaWxpdGUiLCIkam91ciIsIiRoZXVyZSIsIiRldGF0IiwiZXRhdCIsIiR0eXBlIiwiJHNlbWFpbmUiLCJjcmVuZWF1IiwidHlwZSIsInNlbWFpbmUiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJsb2NhdGlvbiIsImF0dHIiLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIiRvYmoiLCIkaHRtbCIsInRyaW0iLCJqUXVlcnkiLCJmbiIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwiZWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixrQkFBeEIsRUFBNEMsWUFBVTtBQUNwRCxNQUFNQyxNQUFNLEdBQUdILENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDSSxHQUF0QyxFQUFmO0FBQ0FKLEdBQUMsQ0FBQ0ssSUFBRixDQUFPO0FBQ0xDLFVBQU0sRUFBQyxNQURGO0FB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QyxXQUFXLG1CQUFPLENBQUMsaUZBQTBCO0FBQzdDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNiRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLDZCQUE2QixtQkFBTyxDQUFDLDJGQUErQjs7QUFFcEU7QUFDQTtBQUNBLEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQyIsImZpbGUiOiJjcmVuZWF1eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9jcmVuZWF1eC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA2LzA5LzIwMjAgMTY6MTRcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNidG5fY3JlbmVhdV9hZGQnLCBmdW5jdGlvbigpe1xuICBjb25zdCAkYW5uZWUgPSAkKCcjY2hhbmdlX2FubmVlX3VuaXZlcnNpdGlhcmVfdGVtcCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgbWV0aG9kOidQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBhbm5lZVVuaXZlcnNpdGFpcmU6ICRhbm5lZSxcbiAgICAgIGpvdXI6JCgnI2NyZW5lYXVfam91cicpLnZhbCgpLFxuICAgICAgZGVidXQ6JCgnI2NyZW5lYXVfZGVidXQnKS52YWwoKSxcbiAgICAgIGZpbjokKCcjY3JlbmVhdV9maW4nKS52YWwoKVxuICAgIH0sXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9jcmVuZWF1X2NvdXJzX25ldycpLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNsaXN0ZV9jcmVuZWF1eCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9jcmVuZWF1X2NvdXJzX2xpc3RlJywge2FubmVlX3VuaXZlcnNpdGFpcmU6ICRhbm5lZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnQ3LDqW5lYXUgYWpvdXTDqSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbFxcJ2Fqb3V0IGR1IGNyw6luZWF1JywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5ibG9xdWVyY3JlbmVhdScsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0ICRjciA9ICQodGhpcylcbiAgaWYgKCRjci5oYXNDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJykpIHtcbiAgICB1cGRhdGVDcmVuZWF1KCdkaXNwbycsICRjci5kYXRhKCdjcmVuZWF1JyksICRjci5kYXRhKCdzZW1haW5lJykpXG4gICAgJGNyLnJlbW92ZUNsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKVxuICB9IGVsc2UgaWYoJGNyLmhhc0NsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpKSB7XG4gICAgJGNyLnJlbW92ZUNsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpXG4gICAgJGNyLmFkZENsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKVxuICAgIHVwZGF0ZUNyZW5lYXUoJ2F1JywgJGNyLmRhdGEoJ2NyZW5lYXUnKSwgJGNyLmRhdGEoJ3NlbWFpbmUnKSlcbiAgfSBlbHNlIHtcbiAgICAkY3IuYWRkQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JylcbiAgICB1cGRhdGVDcmVuZWF1KCd2YScsICRjci5kYXRhKCdjcmVuZWF1JyksICRjci5kYXRhKCdzZW1haW5lJykpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY3JlbmVhdScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaW50ZXJkaXQgPSAkKCcjbmJfaW50ZXJkaXQnKVxuICBjb25zdCBldml0ZXIgPSAkKCcjbmJfZXZpdGVyJylcbiAgY29uc3QgZGlzcG8gPSAkKCcjbmJfZGlzcG8nKVxuICBjb25zdCBoZXVyZSA9ICQodGhpcykuZGF0YSgnaGV1cmUnKVxuICBjb25zdCBqb3VyID0gJCh0aGlzKS5kYXRhQXR0cignam91cicpXG5cbiAgbGV0IG5iX2ludGVyZGl0ID0gcGFyc2VJbnQoaW50ZXJkaXQudGV4dCgpKVxuICBsZXQgbmJfZXZpdGVyID0gcGFyc2VJbnQoZXZpdGVyLnRleHQoKSlcbiAgbGV0IG5iX2Rpc3BvID0gcGFyc2VJbnQoZGlzcG8udGV4dCgpKVxuXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKVxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpXG4gICAgbmJfaW50ZXJkaXQtLVxuICAgIG5iX2V2aXRlcisrXG4gICAgdXBkYXRlRGlzcG9uaWJpbGl0ZShqb3VyLCBoZXVyZSwnRScpXG4gIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJykpIHtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKVxuICAgIG5iX2V2aXRlci0tXG4gICAgbmJfZGlzcG8rK1xuICAgIHVwZGF0ZURpc3BvbmliaWxpdGUoam91ciwgaGV1cmUsJ0QnKVxuICB9IGVsc2Uge1xuXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKVxuICAgIG5iX2ludGVyZGl0KytcbiAgICBuYl9kaXNwby0tXG4gICAgdXBkYXRlRGlzcG9uaWJpbGl0ZShqb3VyLCBoZXVyZSwnSScpXG4gIH1cblxuICBpbnRlcmRpdC50ZXh0KG5iX2ludGVyZGl0KVxuICBldml0ZXIudGV4dChuYl9ldml0ZXIpXG4gIGRpc3BvLnRleHQobmJfZGlzcG8pXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEaXNwb25pYmlsaXRlKCRqb3VyLCAkaGV1cmUsICRldGF0KXtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcGxpY2F0aW9uX3BlcnNvbm5lbF9kaXNwb25pYmlsaXRlX3VwZGF0ZScpLFxuICAgIGRhdGE6e1xuICAgICAgam91cjogJGpvdXIsXG4gICAgICBoZXVyZTogJGhldXJlLFxuICAgICAgZXRhdDogJGV0YXRcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNyZW5lYXUoJHR5cGUsICRjciwgJHNlbWFpbmUpe1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fY3JlbmVhdV9ibG9xdWVfbW9kaWZpZV9ldGF0JyksXG4gICAgZGF0YTp7XG4gICAgICBjcmVuZWF1OiAkY3IsXG4gICAgICB0eXBlOiAkdHlwZSxcbiAgICAgIHNlbWFpbmU6ICRzZW1haW5lXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMS8xMC8yMDIwIDA4OjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9