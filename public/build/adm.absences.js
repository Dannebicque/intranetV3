(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.absences"],{

/***/ "./assets/js/pages/adm.absences.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/adm.absences.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var _vendor_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendor/datatables */ "./assets/vendor/datatables/index.js");
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.absences.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/09/2020 17:33



$(document).on('change', '#justifier_etudiant', function () {
  var table = $('#tableJustifier').DataTable();
  table.clear(); //effacer le datatable

  table.destroy(); //supprimer le datatable

  $.ajax({
    url: Routing.generate('administration_absences_liste_absence_etudiant', {
      etudiant: $(this).val()
    }),
    success: function success(data) {
      $('#titre_justifie').html('Liste des absences de ' + $('#justifier_etudiant option:selected').text());
      var table = $('#tableJustifier').empty();
      table.append('<thead>\n' + '                <tr>\n' + '                    <th>Date</th>\n' + '                    <th>Heure</th>\n' + '                    <th>Matière</th>\n' + '                    <th>Justifier</th>\n' + '                    <th>Actions</th>\n' + '                </tr>\n' + '                </thead>' + '<tbody>');
      jQuery.each(data, function (index, absence) {
        var html = '<tr id="ligne_' + absence.id + '">\n' + '                        <td>' + absence.date + '</td>\n' + '                        <td>' + absence.heure + '</td>\n' + '                        <td>' + absence.matiere + '</td>\n' + '                        <td><input type="radio" value="1" data-absence="' + absence.id + '" name="radio_' + absence.id + '" class="justifieAbsence"';

        if (absence.justifie === true) {
          html = html + ' checked ';
        }

        html = html + '> Oui | <input type="radio" value="0" data-absence="' + absence.id + '" name="radio_' + absence.id + '" class="justifieAbsence"';

        if (absence.justifie === false) {
          html = html + ' checked ';
        }

        html = html + '> Non</td>\n' + '                        <td>' + // '<a href="' + Routing.generate('administration_absence_delete') + '" class="btn btn-danger supprimer"><i class="fas fa-trash"></i></a>' +
        '</td>\n' + '</tr>';
        table.append(html);
      });
      table.append('</tbody>');
      table.dataTable({
        'language': _lang_fr__WEBPACK_IMPORTED_MODULE_2__["dataTableLangueFr"]
      });
    }
  });
});
$(document).on('click', '.justifieAbsence', function () {
  $.ajax({
    type: 'GET',
    url: Routing.generate('administration_absences_justifie', {
      absence: $(this).data('absence'),
      etat: $(this).val()
    }),
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de l\'enregistrement.', 'danger');
    },
    success: function success(data) {
      if (data === true) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Absence justifiée avec succés !', 'success');
      } else {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Absence non justifiée avec succés !', 'warning');
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

/***/ })

},[["./assets/js/pages/adm.absences.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7c3f1a6f","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~a14823c0","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~38bcb1f7","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~31cc1171","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.etudiants~adm.personnels~datatable~sadm.personnels","absences~adm.absences~adm.etudiants~adm.personnels~datatable~sadm.personnels"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmFic2VuY2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwidGFibGUiLCJEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwiZXR1ZGlhbnQiLCJ2YWwiLCJzdWNjZXNzIiwiZGF0YSIsImh0bWwiLCJ0ZXh0IiwiZW1wdHkiLCJhcHBlbmQiLCJqUXVlcnkiLCJlYWNoIiwiaW5kZXgiLCJhYnNlbmNlIiwiaWQiLCJkYXRlIiwiaGV1cmUiLCJtYXRpZXJlIiwianVzdGlmaWUiLCJkYXRhVGFibGUiLCJkYXRhVGFibGVMYW5ndWVGciIsInR5cGUiLCJldGF0IiwiZXJyb3IiLCJhZGRDYWxsb3V0IiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwibGVuZ3RoIiwicG9wIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvY2F0aW9uIiwiYXR0ciIsIlN3YWwiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3NyZiIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJfdG9rZW4iLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJwcmVwZW5kIiwic2xpZGVEb3duIiwiZGVsYXkiLCJzbGlkZVVwIiwibXlFZGl0SW5pdGlhbENvbnRlbnQiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsImZpZWxkIiwibWV0aG9kIiwiJG9iaiIsIiRodG1sIiwidHJpbSIsImZuIiwiZGF0YUF0dHIiLCJuYW1lIiwiZGVmIiwiZ2V0QXR0cmlidXRlIiwiaGFzRGF0YUF0dHIiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJyZXBsYWNlIiwieCIsInRvVXBwZXJDYXNlIiwiZ2V0RGF0YU9wdGlvbnMiLCJlbCIsImNhc3RMaXN0Iiwib3B0aW9ucyIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIscUJBQXpCLEVBQWdELFlBQVk7QUFFMUQsTUFBSUMsS0FBSyxHQUFHSCxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkksU0FBckIsRUFBWjtBQUNBRCxPQUFLLENBQUNFLEtBQU4sR0FIMEQsQ0FHNUM7O0FBQ2RGLE9BQUssQ0FBQ0csT0FBTixHQUowRCxDQUkxQzs7QUFHaEJOLEdBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGdEQUFqQixFQUFtRTtBQUFDQyxjQUFRLEVBQUVYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVksR0FBUjtBQUFYLEtBQW5FLENBREE7QUFFTEMsV0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCZCxPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmUsSUFBckIsQ0FBMEIsMkJBQTJCZixDQUFD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V0FBTCxFQUFQO0FBQ0QsR0FGTSxDQUFQO0FBR0Q7O0FBRU0sU0FBU0MsY0FBVCxDQUF5QkMsRUFBekIsRUFBNkJDLFFBQTdCLEVBQXVDO0FBQzVDLE1BQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0E3RywrQ0FBQyxDQUFDb0IsSUFBRixDQUFPcEIsNkNBQUMsQ0FBQzJHLEVBQUQsQ0FBRCxDQUFNN0YsSUFBTixFQUFQLEVBQXFCLFVBQVVnRyxHQUFWLEVBQWU5QyxLQUFmLEVBQXNCO0FBRXpDOEMsT0FBRyxHQUFHUixZQUFZLENBQUNRLEdBQUQsQ0FBbEIsQ0FGeUMsQ0FJekM7O0FBQ0EsUUFBSUEsR0FBRyxJQUFJLFNBQVgsRUFBc0I7QUFDcEI7QUFDRDs7QUFFRCxRQUFJRixRQUFRLElBQUlHLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQUlqRixJQUFJLEdBQUc4RSxRQUFRLENBQUNFLEdBQUQsQ0FBbkI7O0FBQ0EsY0FBUWhGLElBQVI7QUFDRSxhQUFLLE1BQUw7QUFDRWtDLGVBQUssR0FBR2dELE9BQU8sQ0FBQ2hELEtBQUQsQ0FBZjtBQUNBOztBQUVGLGFBQUssS0FBTDtBQUNFQSxlQUFLLEdBQUdpRCxNQUFNLENBQUNqRCxLQUFELENBQWQ7QUFDQTs7QUFFRixhQUFLLE9BQUw7QUFDRUEsZUFBSyxHQUFHQSxLQUFLLENBQUMzQixLQUFOLENBQVksR0FBWixDQUFSO0FBQ0E7O0FBRUY7QUFiRjtBQWdCRDs7QUFFRHdFLFdBQU8sQ0FBQ0MsR0FBRCxDQUFQLEdBQWU5QyxLQUFmO0FBQ0QsR0E5QkQ7QUFnQ0EsU0FBTzZDLE9BQVA7QUFDRCxDIiwiZmlsZSI6ImFkbS5hYnNlbmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uYWJzZW5jZXMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNC8wOS8yMDIwIDE3OjMzXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9kYXRhdGFibGVzJ1xuaW1wb3J0IHtkYXRhVGFibGVMYW5ndWVGcn0gZnJvbSAnLi4vbGFuZy9mcidcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjanVzdGlmaWVyX2V0dWRpYW50JywgZnVuY3Rpb24gKCkge1xuXG4gIGxldCB0YWJsZSA9ICQoJyN0YWJsZUp1c3RpZmllcicpLkRhdGFUYWJsZSgpXG4gIHRhYmxlLmNsZWFyKCkgLy9lZmZhY2VyIGxlIGRhdGF0YWJsZVxuICB0YWJsZS5kZXN0cm95KCkgLy9zdXBwcmltZXIgbGUgZGF0YXRhYmxlXG5cblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fYWJzZW5jZXNfbGlzdGVfYWJzZW5jZV9ldHVkaWFudCcsIHtldHVkaWFudDogJCh0aGlzKS52YWwoKX0pLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAkKCcjdGl0cmVfanVzdGlmaWUnKS5odG1sKCdMaXN0ZSBkZXMgYWJzZW5jZXMgZGUgJyArICQoJyNqdXN0aWZpZXJfZXR1ZGlhbnQgb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpKVxuICAgICAgbGV0IHRhYmxlID0gJCgnI3RhYmxlSnVzdGlmaWVyJykuZW1wdHkoKVxuICAgICAgdGFibGUuYXBwZW5kKCc8dGhlYWQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPHRyPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0aD5IZXVyZTwvdGg+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0aD5NYXRpw6hyZTwvdGg+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0aD5KdXN0aWZpZXI8L3RoPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPC90cj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICA8L3RoZWFkPicgK1xuICAgICAgICAnPHRib2R5PicpXG5cbiAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgYWJzZW5jZSkge1xuICAgICAgICBsZXQgaHRtbCA9ICc8dHIgaWQ9XCJsaWduZV8nICsgYWJzZW5jZS5pZCArICdcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBhYnNlbmNlLmRhdGUgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBhYnNlbmNlLmhldXJlICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgYWJzZW5jZS5tYXRpZXJlICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIgZGF0YS1hYnNlbmNlPVwiJyArIGFic2VuY2UuaWQgKyAnXCIgbmFtZT1cInJhZGlvXycgKyBhYnNlbmNlLmlkICsgJ1wiIGNsYXNzPVwianVzdGlmaWVBYnNlbmNlXCInXG4gICAgICAgIGlmIChhYnNlbmNlLmp1c3RpZmllID09PSB0cnVlKSB7XG4gICAgICAgICAgaHRtbCA9IGh0bWwgKyAnIGNoZWNrZWQgJ1xuICAgICAgICB9XG4gICAgICAgIGh0bWwgPSBodG1sICsgJz4gT3VpIHwgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMFwiIGRhdGEtYWJzZW5jZT1cIicgKyBhYnNlbmNlLmlkICsgJ1wiIG5hbWU9XCJyYWRpb18nICsgYWJzZW5jZS5pZCArICdcIiBjbGFzcz1cImp1c3RpZmllQWJzZW5jZVwiJ1xuICAgICAgICBpZiAoYWJzZW5jZS5qdXN0aWZpZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBodG1sID0gaHRtbCArICcgY2hlY2tlZCAnXG4gICAgICAgIH1cbiAgICAgICAgaHRtbCA9IGh0bWwgKyAnPiBOb248L3RkPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JyArXG4gICAgICAgICAgLy8gJzxhIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fYWJzZW5jZV9kZWxldGUnKSArICdcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIHN1cHByaW1lclwiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPjwvYT4nICtcbiAgICAgICAgICAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnPC90cj4nXG4gICAgICAgIHRhYmxlLmFwcGVuZChodG1sKVxuICAgICAgfSlcbiAgICAgIHRhYmxlLmFwcGVuZCgnPC90Ym9keT4nKVxuICAgICAgdGFibGUuZGF0YVRhYmxlKHtcbiAgICAgICAgJ2xhbmd1YWdlJzogZGF0YVRhYmxlTGFuZ3VlRnJcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qdXN0aWZpZUFic2VuY2UnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9hYnNlbmNlc19qdXN0aWZpZScsIHthYnNlbmNlOiAkKHRoaXMpLmRhdGEoJ2Fic2VuY2UnKSwgZXRhdDogJCh0aGlzKS52YWwoKX0pLFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsXFwnZW5yZWdpc3RyZW1lbnQuJywgJ2RhbmdlcicpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnQWJzZW5jZSBqdXN0aWZpw6llIGF2ZWMgc3VjY8OpcyAhJywgJ3N1Y2Nlc3MnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnQWJzZW5jZSBub24ganVzdGlmacOpZSBhdmVjIHN1Y2PDqXMgIScsICd3YXJuaW5nJylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDMwLzA3LzIwMjAgMTE6MThcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcblxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCd0b3RvJylcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==