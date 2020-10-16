(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes"],{

/***/ "./assets/js/pages/notes.js":
/*!**********************************!*\
  !*** ./assets/js/pages/notes.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/notes.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 11:18

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
      console.log('success call');
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Les notes de <strong>ce groupe</strong> ont été enregistrées avec succés ! Vous pouvez les modifier !', 'success'); //feature: supprimer le "orange" sur les notes sauvegardées. Peut être récupérer en data les notes.
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Une erreur est survenue pendant l\'envoi... <br>Veuillez réessayer', 'danger'); //feature: être plus précis ?
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

},[["./assets/js/pages/notes.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIl0sIm5hbWVzIjpbIiQiLCJjbGljayIsImdyb3VwZSIsImF0dHIiLCJub3RlcyIsImVhY2giLCJoYXNDbGFzcyIsIiRpZCIsImRhdGEiLCJvYmoiLCJ2YWwiLCJwcm9wIiwicHVzaCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ1dWlkIiwidHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiYWRkQ2FsbG91dCIsImVycm9yIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJyZW1vdmVDbGFzcyIsInBhcnNlRmxvYXQiLCJhZGRDbGFzcyIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsImxlbmd0aCIsInBvcCIsImxvY2F0aW9uIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJwcmV2ZW50RGVmYXVsdCIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsIl90b2tlbiIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibWVzc2FnZSIsImxhYmVsIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIm1ldGhvZCIsIiRvYmoiLCIkaHRtbCIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJrZXkiLCJ1bmRlZmluZWQiLCJCb29sZWFuIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsS0FBakIsQ0FBdUIsWUFBWTtBQUNqQyxNQUFNQyxNQUFNLEdBQUdGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLElBQWIsQ0FBZjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUFDLGFBQVM7QUFBVixHQUFkO0FBQ0FKLEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCSyxJQUF6QixDQUE4QixZQUFZO0FBQ3hDLFFBQUlMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sUUFBUixDQUFpQkosTUFBakIsQ0FBSixFQUE4QjtBQUM5QjtBQUNFLFlBQU1LLEdBQUcsR0FBR1AsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsVUFBYixDQUFaO0FBQ0EsWUFBTUMsR0FBRyxHQUFHO0FBQ1YsZ0JBQU1GLEdBREk7QUFFVixrQkFB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QUFDN0Msa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsK0JBQStCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV4RTtBQUNBO0FBQ0EsR0FBRywrREFBK0Q7QUFDbEU7QUFDQSxDQUFDIiwiZmlsZSI6Im5vdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL25vdGVzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMzAvMDcvMjAyMCAxMToxOFxuXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoJy5zYXZlZ3JvdXBlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICBjb25zdCBncm91cGUgPSAkKHRoaXMpLmF0dHIoJ2lkJylcbiAgY29uc3Qgbm90ZXMgPSB7J25vdGVzJzogW119XG4gICQoJy5ub3RlZXR1ZGlhbnQ6aW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhncm91cGUpKSAvL3bDqXJpZmllciBxdWUgYydlc3QgbGUgZ3JvdXBlIGNvbmNlcm7DqVxuICAgIHtcbiAgICAgIGNvbnN0ICRpZCA9ICQodGhpcykuZGF0YSgnZXR1ZGlhbnQnKVxuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAnaWQnOiAkaWQsXG4gICAgICAgICdub3RlJzogJCh0aGlzKS52YWwoKSxcbiAgICAgICAgJ2Fic2VuY2UnOiAkKCcjYWJzXycgKyAkaWQpLnByb3AoJ2NoZWNrZWQnKSxcbiAgICAgICAgJ2NvbW1lbnRhaXJlJzogJCgnI2NvbV8nICsgJGlkKS52YWwoKVxuICAgICAgfVxuXG4gICAgICBub3Rlc1snbm90ZXMnXS5wdXNoKG9iailcbiAgICB9XG4gIH0pXG5cbiAgJC5hamF4KFxuICAgIHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX25vdGVfYWpheF9zYWlzaWUnLCB7dXVpZDogJCh0aGlzKS5kYXRhKCdldmFsdWF0aW9uJyl9KSxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbm90ZXM6IG5vdGVzXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MgY2FsbCcpXG4gICAgICAgIGFkZENhbGxvdXQoJ0xlcyBub3RlcyBkZSA8c3Ryb25nPmNlIGdyb3VwZTwvc3Ryb25nPiBvbnQgw6l0w6kgZW5yZWdpc3Ryw6llcyBhdmVjIHN1Y2PDqXMgISBWb3VzIHBvdXZleiBsZXMgbW9kaWZpZXIgIScsICdzdWNjZXNzJylcbiAgICAgICAgLy9mZWF0dXJlOiBzdXBwcmltZXIgbGUgXCJvcmFuZ2VcIiBzdXIgbGVzIG5vdGVzIHNhdXZlZ2FyZMOpZXMuIFBldXQgw6p0cmUgcsOpY3Vww6lyZXIgZW4gZGF0YSBsZXMgbm90ZXMuXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgcGVuZGFudCBsXFwnZW52b2kuLi4gPGJyPlZldWlsbGV6IHLDqWVzc2F5ZXInLCAnZGFuZ2VyJylcbiAgICAgICAgLy9mZWF0dXJlOiDDqnRyZSBwbHVzIHByw6ljaXMgP1xuICAgICAgfVxuICAgIH0pXG5cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcubm90ZWV0dWRpYW50JywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgdmFsID0gJCh0aGlzKS52YWwoKVxuICBpZiAodmFsID09PSAnLTAuMDEnKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG4gIH0gZWxzZSBpZiAocGFyc2VGbG9hdCh2YWwpID49IDAgJiYgcGFyc2VGbG9hdCh2YWwpIDw9IDIwKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG4gIH0gZWxzZSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG4gIH1cbn0pXG5cblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNi8xMC8yMDIwIDExOjUwXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlRmxvYXQgPSBnbG9iYWwucGFyc2VGbG9hdDtcbnZhciBGT1JDRUQgPSAxIC8gJHBhcnNlRmxvYXQod2hpdGVzcGFjZXMgKyAnLTAnKSAhPT0gLUluZmluaXR5O1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cmluZykge1xuICB2YXIgdHJpbW1lZFN0cmluZyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICB2YXIgcmVzdWx0ID0gJHBhcnNlRmxvYXQodHJpbW1lZFN0cmluZyk7XG4gIHJldHVybiByZXN1bHQgPT09IDAgJiYgdHJpbW1lZFN0cmluZy5jaGFyQXQoMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0Jyk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlRmxvYXQgIT0gcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VGbG9hdDogcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=