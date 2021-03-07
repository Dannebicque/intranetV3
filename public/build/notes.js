(self["webpackChunk"] = self["webpackChunk"] || []).push([["notes"],{

/***/ "./assets/js/pages/notes.js":
/*!**********************************!*\
  !*** ./assets/js/pages/notes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/notes.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 20/10/2020 18:42

$('.savegroupe').click(function () {
  var groupe = $(this).attr('id');
  var notes = {
    'notes': []
  };
  $('.noteetudiant:input').each(function () {
    if ($(this).hasClass(groupe)) //vérifier que c'est le groupe concerné
      {
        var $id = $(this).data('etudiant');
        var obj = {
          'id': $id,
          'note': $(this).val(),
          'absence': $('#abs_' + $id).prop('checked'),
          'commentaire': $('#com_' + $id).val()
        };
        notes['notes'].push(obj);
      }
  });
  $.ajax({
    url: Routing.generate('application_personnel_note_ajax_saisie', {
      uuid: $(this).data('evaluation')
    }),
    type: 'POST',
    data: {
      notes: notes
    },
    success: function success(data) {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Les notes de <strong>ce groupe</strong> ont été enregistrées avec succés ! Vous pouvez les modifier !', 'success'); //feature: supprimer le "orange" sur les notes sauvegardées. Peut être récupérer en data les notes.
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Une erreur est survenue pendant l\'envoi... <br>Veuillez réessayer', 'danger'); //feature: être plus précis ?
    }
  });
});
$(document).on('keyup', '.noteetudiant', function (e) {
  var val = $(this).val();

  if (val === '-0.01') {
    $(this).removeClass('is-invalid').removeClass('is-valid');
  } else if (parseFloat(val) >= 0 && parseFloat(val) <= 20) {
    $(this).removeClass('is-invalid').addClass('is-valid');
  } else {
    $(this).removeClass('is-valid').addClass('is-invalid');
  }
});

/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCallout": () => (/* binding */ addCallout),
/* harmony export */   "getDataOptions": () => (/* binding */ getDataOptions),
/* harmony export */   "invalidChamps": () => (/* binding */ invalidChamps),
/* harmony export */   "validChamps": () => (/* binding */ validChamps),
/* harmony export */   "completeChamps": () => (/* binding */ completeChamps)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/12/2020 22:04


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
sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().mixin({
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
  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
      jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
  jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
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
  jquery__WEBPACK_IMPORTED_MODULE_5___default().each(jquery__WEBPACK_IMPORTED_MODULE_5___default()(el).data(), function (key, value) {
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
function invalidChamps($obj) {
  $obj.removeClass('is-valid').addClass('is-invalid');
}
function validChamps($obj) {
  $obj.removeClass('is-invalid').addClass('is-valid');
}
function completeChamps($obj) {
  $obj.removeClass('is-invalid').removeClass('is-valid');
}

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ })

},
0,[["./assets/js/pages/notes.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-f30b81","vendors-node_modules_core-js_modules_es_number_constructor_js-node_modules_core-js_modules_es-13932d"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIl0sIm5hbWVzIjpbIiQiLCJjbGljayIsImdyb3VwZSIsImF0dHIiLCJub3RlcyIsImVhY2giLCJoYXNDbGFzcyIsIiRpZCIsImRhdGEiLCJvYmoiLCJ2YWwiLCJwcm9wIiwicHVzaCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ1dWlkIiwidHlwZSIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwiZXJyb3IiLCJkb2N1bWVudCIsIm9uIiwiZSIsInJlbW92ZUNsYXNzIiwicGFyc2VGbG9hdCIsImFkZENsYXNzIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwibGVuZ3RoIiwicG9wIiwibG9jYXRpb24iLCJTd2FsIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJwcmV2ZW50RGVmYXVsdCIsImNzcmYiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwibWV0aG9kIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJrZXkiLCJ1bmRlZmluZWQiLCJCb29sZWFuIiwiTnVtYmVyIiwiaW52YWxpZENoYW1wcyIsInZhbGlkQ2hhbXBzIiwiY29tcGxldGVDaGFtcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxLQUFqQixDQUF1QixZQUFZO0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsSUFBYixDQUFmO0FBQ0EsTUFBTUMsS0FBSyxHQUFHO0FBQUMsYUFBUztBQUFWLEdBQWQ7QUFDQUosR0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJLLElBQXpCLENBQThCLFlBQVk7QUFDeEMsUUFBSUwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxRQUFSLENBQWlCSixNQUFqQixDQUFKLEVBQThCO0FBQzlCO0FBQ0UsWUFBTUssR0FBRyxHQUFHUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxVQUFiLENBQVo7QUFDQSxZQUFNQyxHQUFHLEdBQUc7QUFDVixnQkFBTUYsR0FESTtBQUVWLGtCQUFRUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLEdBQVIsRUFGRTtBQUdWLHFCQUFXVixDQUFDLENBQUMsVUFBVU8sR0FBWCxDQUFELENBQWlCSSxJQUFqQixDQUFzQixTQUF0QixDQUhEO0FBSVYseUJBQWVYLENBQUMsQ0FBQyxVQUFVTyxHQUFYLENBQUQsQ0FBaUJHLEdBQWpCO0FBSkwsU0FBWjtBQU9BTixhQUFLLENBQUMsT0FBRCxDQUFMLENBQWVRLElBQWYsQ0FBb0JILEdBQXBCO0FBQ0Q7QUFDRixHQWJEO0FBZUFULEdBQUMsQ0FBQ2EsSUFBRixDQUNFO0FBQ0VDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHdDQUFqQixFQUEyRDtBQUFDQyxVQUFJLEVBQUVqQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxZQUFiO0FBQVAsS0FBM0QsQ0FEUDtBQUVFVSxRQUFJLEVBQUUsTUFGUjtBQUdFVixRQUFJLEVBQUU7QUFDSkosV0FBSyxFQUFFQTtBQURILEtBSFI7QUFNRWUsV0FBTyxFQUFFLGlCQUFVWCxJQUFWLEVBQWdCO0FBQ3ZCWSx1REFBVSxDQUFDLHVHQUFELEVBQTBHLFNBQTFHLENBQVYsQ0FEdUIsQ0FFdkI7QUFDRCxLQVRIO0FBVUVDLFNBQUssRUFBRSxpQkFBWTtBQUNqQkQsdURBQVUsQ0FBQyxvRUFBRCxFQUF1RSxRQUF2RSxDQUFWLENBRGlCLENBRWpCO0FBQ0Q7QUFiSCxHQURGO0FBaUJELENBbkNEO0FBcUNBcEIsQ0FBQyxDQUFDc0IsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGVBQXhCLEVBQXlDLFVBQVVDLENBQVYsRUFBYTtBQUNwRCxNQUFNZCxHQUFHLEdBQUdWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsR0FBUixFQUFaOztBQUNBLE1BQUlBLEdBQUcsS0FBSyxPQUFaLEVBQXFCO0FBQ25CVixLQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixXQUFSLENBQW9CLFlBQXBCLEVBQWtDQSxXQUFsQyxDQUE4QyxVQUE5QztBQUNELEdBRkQsTUFFTyxJQUFJQyxVQUFVLENBQUNoQixHQUFELENBQVYsSUFBbUIsQ0FBbkIsSUFBd0JnQixVQUFVLENBQUNoQixHQUFELENBQVYsSUFBbUIsRUFBL0MsRUFBbUQ7QUFDeERWLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLFdBQVIsQ0FBb0IsWUFBcEIsRUFBa0NFLFFBQWxDLENBQTJDLFVBQTNDO0FBQ0QsR0FGTSxNQUVBO0FBQ0wzQixLQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixXQUFSLENBQW9CLFVBQXBCLEVBQWdDRSxRQUFoQyxDQUF5QyxZQUF6QztBQUNEO0FBQ0YsQ0FURCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFJQyxlQUFlLEdBQUcsS0FBdEI7O0FBRUEsU0FBU0MsV0FBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsTUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxHQUFYLENBQWI7QUFDQSxNQUFJQyxTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsTUFBSUYsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLFdBQWhCLEVBQTZCO0FBQzNCLFFBQUlBLElBQUksQ0FBQ0csTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CRCxlQUFTLEdBQUcsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSUYsSUFBSSxDQUFDRSxTQUFELENBQUosS0FBb0Isc0JBQXhCLEVBQWdEO0FBQzlDQSxhQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUF4QjtBQUNEOztBQUVELE1BQUlGLElBQUksQ0FBQ0EsSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBZixDQUFKLEtBQTBCLEVBQTlCLEVBQWtDO0FBQ2hDSCxRQUFJLENBQUNJLEdBQUw7QUFDRDs7QUFFRG5DLCtDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCeUIsV0FBaEIsQ0FBNEIsUUFBNUI7QUFDQXpCLCtDQUFDLENBQUMsV0FBVytCLElBQUksQ0FBQ0UsU0FBRCxDQUFoQixDQUFELENBQThCTixRQUE5QixDQUF1QyxRQUF2QztBQUNELEMsQ0FFRDs7O0FBQ0FFLFdBQVcsQ0FBQzdCLDZDQUFDLENBQUNvQyxRQUFELENBQUQsQ0FBWWpDLElBQVosQ0FBaUIsVUFBakIsQ0FBRCxDQUFYO0FBRUFrQyx3REFBQSxDQUFXO0FBQ1RDLGFBQVcsRUFBRTtBQUNYQyxpQkFBYSxFQUFFLGlCQURKO0FBRVhDLGdCQUFZLEVBQUU7QUFGSCxHQURKO0FBS1RDLGdCQUFjLEVBQUU7QUFMUCxDQUFYLEUsQ0FPQTs7QUFDQXpDLDZDQUFDLENBQUNzQixRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBeEIsRUFBc0MsVUFBVUMsQ0FBVixFQUFhO0FBQ2pEQSxHQUFDLENBQUNrQixjQUFGO0FBQ0EsTUFBTTVCLEdBQUcsR0FBR2QsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLE1BQWIsQ0FBWjtBQUNBLE1BQU13QyxJQUFJLEdBQUczQyw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsTUFBYixDQUFiO0FBQ0E2Qix5REFBQSxDQUFVO0FBQ1JPLFNBQUssRUFBRSw0QkFEQztBQUVSQyxRQUFJLEVBQUUsMENBRkU7QUFHUkMsUUFBSSxFQUFFLFNBSEU7QUFJUkMsb0JBQWdCLEVBQUUsSUFKVjtBQUtSQyxzQkFBa0IsRUFBRSxTQUxaO0FBTVJDLHFCQUFpQixFQUFFLE1BTlg7QUFPUkMscUJBQWlCLEVBQUUsa0JBUFg7QUFRUkMsb0JBQWdCLEVBQUUsY0FSVjtBQVNSYixlQUFXLEVBQUU7QUFDWEMsbUJBQWEsRUFBRSxpQkFESjtBQUVYQyxrQkFBWSxFQUFFO0FBRkgsS0FUTDtBQWFSQyxrQkFBYyxFQUFFO0FBYlIsR0FBVixFQWNHVyxJQWRILENBY1EsVUFBVUMsTUFBVixFQUFrQjtBQUN4QixRQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEJ0RCx3REFBQSxDQUFPO0FBQ0xjLFdBQUcsRUFBRUEsR0FEQTtBQUVMSSxZQUFJLEVBQUUsUUFGRDtBQUdMVixZQUFJLEVBQUU7QUFDSitDLGdCQUFNLEVBQUVaO0FBREosU0FIRDtBQU1MeEIsZUFBTyxFQUFFLGlCQUFVcUMsRUFBVixFQUFjO0FBQ3JCLGNBQUlBLEVBQUUsQ0FBQ0MsY0FBSCxDQUFrQixVQUFsQixLQUFpQ0QsRUFBRSxDQUFDQyxjQUFILENBQWtCLEtBQWxCLENBQXJDLEVBQStEO0FBQzdEbkMsb0JBQVEsQ0FBQ2MsUUFBVCxDQUFrQnNCLElBQWxCLEdBQXlCRixFQUFFLENBQUMxQyxHQUE1QjtBQUNELFdBRkQsTUFFTztBQUNMO0FBQ0FkLHlEQUFDLENBQUMsWUFBWXdELEVBQWIsQ0FBRCxDQUFrQkcsT0FBbEIsQ0FBMEIsSUFBMUIsRUFBZ0NDLE1BQWhDO0FBQ0F4QyxzQkFBVSxDQUFDLG1DQUFELEVBQXNDLFNBQXRDLENBQVY7QUFDQWlCLG1FQUFBLENBQVU7QUFDUk8sbUJBQUssRUFBRSxXQURDO0FBRVJDLGtCQUFJLEVBQUUsbUNBRkU7QUFHUkMsa0JBQUksRUFBRSxTQUhFO0FBSVJJLCtCQUFpQixFQUFFLElBSlg7QUFLUloseUJBQVcsRUFBRTtBQUNYQyw2QkFBYSxFQUFFLGlCQURKO0FBRVhDLDRCQUFZLEVBQUU7QUFGSCxlQUxMO0FBU1JDLDRCQUFjLEVBQUU7QUFUUixhQUFWO0FBV0Q7QUFDRixTQXpCSTtBQTBCTHBCLGFBQUssRUFBRSxlQUFVd0MsR0FBVixFQUFlQyxXQUFmLEVBQTRCQyxXQUE1QixFQUF5QztBQUM5QzFCLGlFQUFBLENBQVU7QUFDUk8saUJBQUssRUFBRSxnQ0FEQztBQUVSQyxnQkFBSSxFQUFFLGtDQUZFO0FBR1JDLGdCQUFJLEVBQUUsT0FIRTtBQUlSSSw2QkFBaUIsRUFBRSxJQUpYO0FBS1JaLHVCQUFXLEVBQUU7QUFDWEMsMkJBQWEsRUFBRSxpQkFESjtBQUVYQywwQkFBWSxFQUFFO0FBRkgsYUFMTDtBQVNSQywwQkFBYyxFQUFFO0FBVFIsV0FBVjtBQVdBckIsb0JBQVUsQ0FBQyw0Q0FBRCxFQUErQyxRQUEvQyxDQUFWO0FBQ0Q7QUF2Q0ksT0FBUDtBQTBDRCxLQTNDRCxNQTJDTyxLQUNMO0FBQ0FpQyxVQUFNLENBQUNXLE9BQVAsS0FBbUIsUUFGZCxFQUdMO0FBQ0EzQiw2REFBQSxDQUFVO0FBQ1JPLGFBQUssRUFBRSxXQURDO0FBRVJDLFlBQUksRUFBRSw0QkFGRTtBQUdSQyxZQUFJLEVBQUUsT0FIRTtBQUlSSSx5QkFBaUIsRUFBRSxJQUpYO0FBS1JaLG1CQUFXLEVBQUU7QUFDWEMsdUJBQWEsRUFBRSxpQkFESjtBQUVYQyxzQkFBWSxFQUFFO0FBRkgsU0FMTDtBQVNSQyxzQkFBYyxFQUFFO0FBVFIsT0FBVjtBQVdEO0FBQ0YsR0ExRUQ7QUEyRUQsQ0EvRUQ7QUFpRk8sU0FBU3JCLFVBQVQsQ0FBcUI2QyxPQUFyQixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDMUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQSxNQUFJQyxTQUFTLEdBQUcsSUFBSUMsS0FBSixFQUFoQjtBQUNBRCxXQUFTLENBQUMsU0FBRCxDQUFULEdBQXVCLFFBQXZCO0FBQ0FBLFdBQVMsQ0FBQyxRQUFELENBQVQsR0FBc0IsUUFBdEI7QUFDQUEsV0FBUyxDQUFDLFNBQUQsQ0FBVCxHQUF1QixXQUF2QjtBQUVBLE1BQU1FLElBQUksR0FBRyxpQ0FBaUNMLEtBQWpDLEdBQXlDLG1CQUF6QyxHQUNYLHNHQURXLEdBRVgsZ0RBRlcsR0FHWCxpQ0FIVyxHQUlYLDBCQUpXLEdBSWtCRyxTQUFTLENBQUNILEtBQUQsQ0FKM0IsR0FJcUMsU0FKckMsR0FLWCx5QkFMVyxHQUtpQkQsT0FMakIsR0FLMkIsUUFMM0IsR0FNWCx3QkFORjtBQVFBakUsK0NBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J3RSxPQUFsQixDQUEwQkQsSUFBMUIsRUFBZ0NFLFNBQWhDLENBQTBDLE1BQTFDO0FBQ0F6RSwrQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjMEUsS0FBZCxDQUFvQixJQUFwQixFQUEwQkMsT0FBMUIsQ0FBa0MsTUFBbEM7QUFDRCxDLENBRUQ7O0FBQ0EsSUFBSUMsb0JBQW9CLEdBQUcsRUFBM0I7QUFDQSxJQUFJMUQsSUFBSSxHQUFHLE1BQVg7QUFDQSxJQUFJMkQsVUFBVSxHQUFHLEtBQWpCO0FBRUE3RSw2Q0FBQyxDQUFDc0IsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFNBQXhCLEVBQW1DLFVBQVVDLENBQVYsRUFBYTtBQUM5Q0EsR0FBQyxDQUFDa0IsY0FBRjtBQUNBa0Msc0JBQW9CLEdBQUc1RSw2Q0FBQyxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFJdUUsSUFBSSxHQUFHLEVBQVg7QUFDQU0sWUFBVSxHQUFHLElBQWI7O0FBQ0EsTUFBSSxPQUFRN0UsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLE1BQWIsQ0FBUixLQUFrQyxXQUF0QyxFQUFtRDtBQUNqRFUsUUFBSSxHQUFHbEIsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLE1BQWIsQ0FBUDtBQUNEOztBQUVELE1BQUlSLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxNQUFiLE1BQXlCLFFBQTdCLEVBQXVDLENBQ3JDO0FBQ0QsR0FGRCxNQUVPLElBQUlSLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxNQUFiLE1BQXlCLFVBQTdCLEVBQXlDO0FBQzlDK0QsUUFBSSxHQUFHTyxjQUFjLENBQUM5RSw2Q0FBQyxDQUFDLElBQUQsQ0FBRixDQUFyQjtBQUNELEdBRk0sTUFFQTtBQUNMdUUsUUFBSSxHQUFHUSxXQUFXLENBQUMvRSw2Q0FBQyxDQUFDLElBQUQsQ0FBRixDQUFsQjtBQUNEOztBQUNEQSwrQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0YsV0FBUixDQUFvQlQsSUFBcEI7QUFDQXZFLCtDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CaUYsS0FBbkI7QUFDRCxDQWxCRDtBQW9CQWpGLDZDQUFDLENBQUNzQixRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsZUFBeEIsRUFBeUMsVUFBVUMsQ0FBVixFQUFhO0FBQ3BELE1BQUlBLENBQUMsQ0FBQzBELE9BQUYsS0FBYyxFQUFkLElBQW9CdEQsZUFBZSxLQUFLLEtBQTVDLEVBQW1EO0FBQ2pEdUQsY0FBVTtBQUNYLEdBRkQsTUFFTyxJQUFJM0QsQ0FBQyxDQUFDMEQsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQzNCbEYsaURBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JnRixXQUFsQixDQUE4Qkosb0JBQTlCO0FBQ0Q7QUFDRixDQU5EO0FBUUE1RSw2Q0FBQyxDQUFDc0IsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGdCQUF4QixFQUEwQyxVQUFVQyxDQUFWLEVBQWE7QUFDckRJLGlCQUFlLEdBQUcsS0FBbEI7QUFDQUosR0FBQyxDQUFDa0IsY0FBRjtBQUNBeUMsWUFBVTtBQUNYLENBSkQ7QUFNQW5GLDZDQUFDLENBQUNzQixRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFVBQWYsRUFBMkIsVUFBVUMsQ0FBVixFQUFhO0FBQ3RDLE1BQUlxRCxVQUFVLEtBQUssSUFBZixJQUF1QmpELGVBQWUsS0FBSyxLQUEzQyxJQUFvREosQ0FBQyxDQUFDNEQsS0FBRixLQUFZLEVBQXBFLEVBQXdFO0FBQ3RFNUQsS0FBQyxDQUFDa0IsY0FBRjtBQUNBeUMsY0FBVTtBQUNYOztBQUVELE1BQUlOLFVBQVUsS0FBSyxJQUFmLElBQXVCakQsZUFBZSxLQUFLLEtBQTNDLElBQW9ESixDQUFDLENBQUM0RCxLQUFGLEtBQVksRUFBcEUsRUFBd0U7QUFDdEU1RCxLQUFDLENBQUNrQixjQUFGO0FBQ0ExQyxpREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmdGLFdBQWxCLENBQThCSixvQkFBOUI7QUFDRDtBQUNGLENBVkQ7QUFZQTVFLDZDQUFDLENBQUNzQixRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsZ0JBQXhCLEVBQTBDLFVBQVVDLENBQVYsRUFBYTtBQUNyREEsR0FBQyxDQUFDa0IsY0FBRjtBQUNBMUMsK0NBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JnRixXQUFsQixDQUE4Qkosb0JBQTlCO0FBQ0QsQ0FIRDs7QUFLQSxTQUFTTyxVQUFULEdBQXVCO0FBQ3JCLE1BQUl6RSxHQUFHLEdBQUdWLDZDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CVSxHQUFuQixFQUFWO0FBQ0FWLG9EQUFBLENBQU87QUFDTGMsT0FBRyxFQUFFOEQsb0JBQW9CLENBQUN6RSxJQUFyQixDQUEwQixNQUExQixDQURBO0FBRUxLLFFBQUksRUFBRTtBQUNKNkUsV0FBSyxFQUFFVCxvQkFBb0IsQ0FBQ3BFLElBQXJCLENBQTBCLE9BQTFCLENBREg7QUFFSjhDLFdBQUssRUFBRTVDLEdBRkg7QUFHSlEsVUFBSSxFQUFFQTtBQUhGLEtBRkQ7QUFPTG9FLFVBQU0sRUFBRSxNQVBIO0FBUUxuRSxXQUFPLEVBQUUsbUJBQVk7QUFDbkJ5RCwwQkFBb0IsQ0FBQ0wsSUFBckIsQ0FBMEI3RCxHQUExQjtBQUNBVixtREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmdGLFdBQWxCLENBQThCSixvQkFBOUI7QUFDQUMsZ0JBQVUsR0FBRyxLQUFiO0FBQ0Q7QUFaSSxHQUFQO0FBY0Q7O0FBRUQsU0FBU0MsY0FBVCxDQUF5QlMsSUFBekIsRUFBK0I7QUFDN0IzRCxpQkFBZSxHQUFHLElBQWxCO0FBQ0EsU0FBTyw2QkFDTCxrRkFESyxHQUNnRjJELElBQUksQ0FBQ2hCLElBQUwsR0FBWWlCLElBQVosRUFEaEYsR0FDcUcsZUFEckcsR0FFTCwyREFGSyxHQUdMLHFHQUhLLEdBSUwsMkhBSkssR0FLTCxpQ0FMSyxHQU1MLDRCQU5GO0FBT0Q7O0FBRUQsU0FBU1QsV0FBVCxDQUFzQlEsSUFBdEIsRUFBNEI7QUFFMUIsU0FBTyxpREFDTCx5RkFESyxHQUN1RkEsSUFBSSxDQUFDaEIsSUFBTCxHQUFZaUIsSUFBWixFQUR2RixHQUM0RyxPQUQ1RyxHQUVMLDJEQUZLLEdBR0wscUdBSEssR0FJTCwySEFKSyxHQUtMLGlDQUxLLEdBTUwsNEJBTkY7QUFPRDs7QUFFREMsTUFBTSxDQUFDQyxFQUFQLENBQVVDLFFBQVYsR0FBcUIsVUFBVUMsSUFBVixFQUFnQkMsR0FBaEIsRUFBcUI7QUFDeEMsU0FBTzdGLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXOEYsWUFBWCxDQUF3QixVQUFVRixJQUFsQyxLQUEyQ0MsR0FBbEQ7QUFDRCxDQUZEOztBQUlBSixNQUFNLENBQUNDLEVBQVAsQ0FBVUssV0FBVixHQUF3QixVQUFVSCxJQUFWLEVBQWdCO0FBQ3RDLFNBQU81Riw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBV2dHLFlBQVgsQ0FBd0IsVUFBVUosSUFBbEMsQ0FBUDtBQUNELENBRkQ7O0FBSUEsU0FBU0ssWUFBVCxDQUF1QkwsSUFBdkIsRUFBNkI7QUFDM0IsU0FBT0EsSUFBSSxDQUFDTSxPQUFMLENBQWEsV0FBYixFQUEwQixVQUFVQyxDQUFWLEVBQWE7QUFDNUMsV0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLQyxXQUFMLEVBQVA7QUFDRCxHQUZNLENBQVA7QUFHRDs7QUFFTSxTQUFTQyxjQUFULENBQXlCQyxFQUF6QixFQUE2QkMsUUFBN0IsRUFBdUM7QUFDNUMsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQXhHLG9EQUFBLENBQU9BLDZDQUFDLENBQUNzRyxFQUFELENBQUQsQ0FBTTlGLElBQU4sRUFBUCxFQUFxQixVQUFVaUcsR0FBVixFQUFlbkQsS0FBZixFQUFzQjtBQUV6Q21ELE9BQUcsR0FBR1IsWUFBWSxDQUFDUSxHQUFELENBQWxCLENBRnlDLENBSXpDOztBQUNBLFFBQUlBLEdBQUcsSUFBSSxTQUFYLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBRUQsUUFBSUYsUUFBUSxJQUFJRyxTQUFoQixFQUEyQjtBQUN6QixVQUFJeEYsSUFBSSxHQUFHcUYsUUFBUSxDQUFDRSxHQUFELENBQW5COztBQUNBLGNBQVF2RixJQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0VvQyxlQUFLLEdBQUdxRCxPQUFPLENBQUNyRCxLQUFELENBQWY7QUFDQTs7QUFFRixhQUFLLEtBQUw7QUFDRUEsZUFBSyxHQUFHc0QsTUFBTSxDQUFDdEQsS0FBRCxDQUFkO0FBQ0E7O0FBRUYsYUFBSyxPQUFMO0FBQ0VBLGVBQUssR0FBR0EsS0FBSyxDQUFDdEIsS0FBTixDQUFZLEdBQVosQ0FBUjtBQUNBOztBQUVGO0FBYkY7QUFnQkQ7O0FBRUR3RSxXQUFPLENBQUNDLEdBQUQsQ0FBUCxHQUFlbkQsS0FBZjtBQUNELEdBOUJEO0FBZ0NBLFNBQU9rRCxPQUFQO0FBQ0Q7QUFFTSxTQUFTSyxhQUFULENBQXdCdEIsSUFBeEIsRUFBOEI7QUFDbkNBLE1BQUksQ0FBQzlELFdBQUwsQ0FBaUIsVUFBakIsRUFBNkJFLFFBQTdCLENBQXNDLFlBQXRDO0FBQ0Q7QUFFTSxTQUFTbUYsV0FBVCxDQUFzQnZCLElBQXRCLEVBQTRCO0FBQ2pDQSxNQUFJLENBQUM5RCxXQUFMLENBQWlCLFlBQWpCLEVBQStCRSxRQUEvQixDQUF3QyxVQUF4QztBQUNEO0FBRU0sU0FBU29GLGNBQVQsQ0FBeUJ4QixJQUF6QixFQUErQjtBQUNwQ0EsTUFBSSxDQUFDOUQsV0FBTCxDQUFpQixZQUFqQixFQUErQkEsV0FBL0IsQ0FBMkMsVUFBM0M7QUFDRCxDOzs7Ozs7Ozs7O0FDNVNELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsV0FBVywyR0FBd0M7QUFDbkQsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDYkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQywrQkFBK0IsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRXhFO0FBQ0E7QUFDQSxHQUFHLCtEQUErRDtBQUNsRTtBQUNBLENBQUMiLCJmaWxlIjoibm90ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvbm90ZXMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyMC8xMC8yMDIwIDE4OjQyXG5cbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcblxuJCgnLnNhdmVncm91cGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdyb3VwZSA9ICQodGhpcykuYXR0cignaWQnKVxuICBjb25zdCBub3RlcyA9IHsnbm90ZXMnOiBbXX1cbiAgJCgnLm5vdGVldHVkaWFudDppbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKGdyb3VwZSkpIC8vdsOpcmlmaWVyIHF1ZSBjJ2VzdCBsZSBncm91cGUgY29uY2VybsOpXG4gICAge1xuICAgICAgY29uc3QgJGlkID0gJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICdpZCc6ICRpZCxcbiAgICAgICAgJ25vdGUnOiAkKHRoaXMpLnZhbCgpLFxuICAgICAgICAnYWJzZW5jZSc6ICQoJyNhYnNfJyArICRpZCkucHJvcCgnY2hlY2tlZCcpLFxuICAgICAgICAnY29tbWVudGFpcmUnOiAkKCcjY29tXycgKyAkaWQpLnZhbCgpXG4gICAgICB9XG5cbiAgICAgIG5vdGVzWydub3RlcyddLnB1c2gob2JqKVxuICAgIH1cbiAgfSlcblxuICAkLmFqYXgoXG4gICAge1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfbm90ZV9hamF4X3NhaXNpZScsIHt1dWlkOiAkKHRoaXMpLmRhdGEoJ2V2YWx1YXRpb24nKX0pLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBub3Rlczogbm90ZXNcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBhZGRDYWxsb3V0KCdMZXMgbm90ZXMgZGUgPHN0cm9uZz5jZSBncm91cGU8L3N0cm9uZz4gb250IMOpdMOpIGVucmVnaXN0csOpZXMgYXZlYyBzdWNjw6lzICEgVm91cyBwb3V2ZXogbGVzIG1vZGlmaWVyICEnLCAnc3VjY2VzcycpXG4gICAgICAgIC8vZmVhdHVyZTogc3VwcHJpbWVyIGxlIFwib3JhbmdlXCIgc3VyIGxlcyBub3RlcyBzYXV2ZWdhcmTDqWVzLiBQZXV0IMOqdHJlIHLDqWN1cMOpcmVyIGVuIGRhdGEgbGVzIG5vdGVzLlxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlIHBlbmRhbnQgbFxcJ2Vudm9pLi4uIDxicj5WZXVpbGxleiByw6llc3NheWVyJywgJ2RhbmdlcicpXG4gICAgICAgIC8vZmVhdHVyZTogw6p0cmUgcGx1cyBwcsOpY2lzID9cbiAgICAgIH1cbiAgICB9KVxuXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnLm5vdGVldHVkaWFudCcsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IHZhbCA9ICQodGhpcykudmFsKClcbiAgaWYgKHZhbCA9PT0gJy0wLjAxJykge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKVxuICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQodmFsKSA+PSAwICYmIHBhcnNlRmxvYXQodmFsKSA8PSAyMCkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxuICB9IGVsc2Uge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxuICB9XG59KVxuXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMTIvMjAyMCAyMjowNFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxubGV0ICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdC5yb3coXCIjbGlnbmVfXCIraWQpLnJlbW92ZSgpLmRyYXcoKTsgPTwgZGF0YXR0YWJsZSB0b2RvOiByZW1vdmUgbGlnbmUgc2kgZGF0YXRhYmxlID8/IHByb2Jsw6htZSBkYW5zIGFkbT5wZXJzb25uZWxcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICd0ZXh0YXJlYScpIHtcbiAgICBodG1sID0gZ2VuZXJlVGV4dEFyZWEoJCh0aGlzKSlcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVUZXh0QXJlYSAoJG9iaikge1xuICAkc3RvcENhdGNoRW50ZXIgPSB0cnVlXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCI+JyArICRvYmouaHRtbCgpLnRyaW0oKSArICc8L3RleHRhcmVhPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcblxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZUNoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJylcbn1cbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUZsb2F0ID0gZ2xvYmFsLnBhcnNlRmxvYXQ7XG52YXIgRk9SQ0VEID0gMSAvICRwYXJzZUZsb2F0KHdoaXRlc3BhY2VzICsgJy0wJykgIT09IC1JbmZpbml0eTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cmluZykge1xuICB2YXIgdHJpbW1lZFN0cmluZyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICB2YXIgcmVzdWx0ID0gJHBhcnNlRmxvYXQodHJpbW1lZFN0cmluZyk7XG4gIHJldHVybiByZXN1bHQgPT09IDAgJiYgdHJpbW1lZFN0cmluZy5jaGFyQXQoMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0Jyk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VGbG9hdCAhPSBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUZsb2F0OiBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==