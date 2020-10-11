(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["absences"],{

/***/ "./assets/js/lang/fr.js":
/*!******************************!*\
  !*** ./assets/js/lang/fr.js ***!
  \******************************/
/*! exports provided: dataTableLangueFr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTableLangueFr", function() { return dataTableLangueFr; });
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/lang/fr.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/07/2020 15:10
var dataTableLangueFr = {
  'decimal': '',
  'emptyTable': 'Aucune donn&eacute;e disponible dans le tableau',
  'info': 'Affichage de l\'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments',
  'infoEmpty': 'Affichage de l\'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment',
  'infoFiltered': '(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)',
  'infoPostFix': '',
  'thousands': ',',
  'lengthMenu': 'Afficher _MENU_ &eacute;l&eacute;ments',
  'loadingRecords': 'Chargement en cours...',
  'processing': 'Traitement en cours...',
  'search': 'Rechercher&nbsp;:',
  'zeroRecords': 'Aucun &eacute;l&eacute;ment &agrave; afficher',
  'paginate': {
    'first': 'Premier',
    'last': 'Dernier',
    'next': 'Suivant',
    'previous': 'Pr&eacute;c&eacute;dent'
  },
  'aria': {
    'sortAscending': ': activer pour trier la colonne par ordre croissant',
    'sortDescending': ': activer pour trier la colonne par ordre d&eacute;croissant'
  }
};

/***/ }),

/***/ "./assets/js/pages/absences.js":
/*!*************************************!*\
  !*** ./assets/js/pages/absences.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var _vendor_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vendor/datatables */ "./assets/vendor/datatables/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");



// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/absences.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 15/09/2020 06:17




var tabsences = []; //Saisie des absences

jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.absChangeTypeGroupe', function (e) {
  e.preventDefault();
  e.stopPropagation();
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.absChangeTypeGroupe').removeClass('btn-primary');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).addClass('btn-primary');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', {
    typegroupe: jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('typegroupe')
  }), function () {
    console.log('then...');
    var date = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date');
    var heure = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure');
    updateAffichage(date.val(), heure.val());
  });
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('change', '#absence-matiere', function () {
  var etudiants = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.etudiant');
  var date = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date');
  var heure = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure');
  etudiants.removeClass('absent');
  updateAffichage(date.val(), heure.val());
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('change', '#absence-date', function () {
  var etudiants = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.etudiant');
  var date = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date');
  var heure = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure');
  etudiants.removeClass('absent');
  updateAffichage(date.val(), heure.val());
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('change', '#absence-heure', function () {
  var etudiants = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.etudiant');
  var date = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date');
  var heure = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure');
  etudiants.removeClass('absent');
  updateAffichage(date.val(), heure.val());
}); //marquage et enregistrement des absents

jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.etudiant', function () {
  var $split = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('id').split('_');

  if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).hasClass('absent')) {
    //supprimer absence
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).removeClass('absent');
    jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date').val(),
        heure: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure').val(),
        action: 'suppr'
      },
      //affichage de l'erreur en cas de problème
      error: function error() {
        Object(_util__WEBPACK_IMPORTED_MODULE_3__["addCallout"])('Erreur lors de la tentative de suppression de l\'absence !', 'danger');
      },
      success: function success(data) {
        tabsences = data;
        Object(_util__WEBPACK_IMPORTED_MODULE_3__["addCallout"])('La suppression a été effectuée avec succés !', 'success');
      }
    });
  } else {
    //marquer comme absent
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).addClass('absent');
    jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date').val(),
        heure: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure').val(),
        action: 'saisie'
      },
      //affichage de l'erreur en cas de problème
      error: function error(msg) {
        if (msg.responseText === 'out') {
          Object(_util__WEBPACK_IMPORTED_MODULE_3__["addCallout"])('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la departement', 'danger');
        } else {
          Object(_util__WEBPACK_IMPORTED_MODULE_3__["addCallout"])('Erreur lors de l\'enregistrement.', 'danger');
        }
      },
      success: function success(data) {
        Object(_util__WEBPACK_IMPORTED_MODULE_3__["addCallout"])('Absence enregistrée avec succés !', 'success');
      }
    });
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()('#liste-absences').dataTable({
  'language': _lang_fr__WEBPACK_IMPORTED_MODULE_6__["dataTableLangueFr"],
  'fnRowCallback': function fnRowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
    if (aData[5] === 'non' || aData[5] === 'no' || aData[5] === 'No' || aData[5] === 'Non') {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('td', nRow).css('background-color', '#fce3e3');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('td', nRow).css('background-color', '#e3fcf2');
    }
  }
});

function updateAffichage(date, heure) {
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax', {
      matiere: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-matiere').val()
    }),
    dataType: 'json',
    success: function success(data) {
      var t = date.split('/');
      var ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim();

      if (heure.length === 4) {
        heure = '0' + heure;
      }

      for (var d in data) {
        if (d == ddate) {
          if (typeof data[d][heure] !== 'undefined') {
            for (var i = 0; i < data[d][heure].length; i++) {
              jquery__WEBPACK_IMPORTED_MODULE_5___default()('#etu_' + data[d][heure][i]).addClass('absent');
            }
          }
        }
      }
    }
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

/***/ })

},[["./assets/js/pages/absences.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7c3f1a6f","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~a14823c0","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~38bcb1f7","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~31cc1171","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.etudiants~adm.personnels~datatable~sadm.personnels","absences~adm.absences~adm.etudiants~adm.personnels~datatable~sadm.personnels"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWJzZW5jZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiXSwibmFtZXMiOlsiZGF0YVRhYmxlTGFuZ3VlRnIiLCJ0YWJzZW5jZXMiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwidHlwZWdyb3VwZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0ZSIsImhldXJlIiwidXBkYXRlQWZmaWNoYWdlIiwidmFsIiwiZXR1ZGlhbnRzIiwiJHNwbGl0IiwiYXR0ciIsInNwbGl0IiwiaGFzQ2xhc3MiLCJhamF4IiwidHlwZSIsInVybCIsIm1hdGllcmUiLCJldHVkaWFudCIsImRhdGFUeXBlIiwiYWN0aW9uIiwiZXJyb3IiLCJhZGRDYWxsb3V0Iiwic3VjY2VzcyIsIm1zZyIsInJlc3BvbnNlVGV4dCIsImRhdGFUYWJsZSIsIm5Sb3ciLCJhRGF0YSIsImlEaXNwbGF5SW5kZXgiLCJpRGlzcGxheUluZGV4RnVsbCIsImNzcyIsInQiLCJkZGF0ZSIsInRyaW0iLCJsZW5ndGgiLCJkIiwiaSIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCIkZmlyc3RFbHQiLCJwb3AiLCJsb2NhdGlvbiIsIlN3YWwiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY3NyZiIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJ0cmFuc2xhdGUiLCJBcnJheSIsImh0bWwiLCJwcmVwZW5kIiwic2xpZGVEb3duIiwiZGVsYXkiLCJzbGlkZVVwIiwibXlFZGl0SW5pdGlhbENvbnRlbnQiLCJFZGl0T25MaW5lIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwibWV0aG9kIiwiJG9iaiIsIiRodG1sIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwiZWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHO0FBQy9CLGFBQVcsRUFEb0I7QUFFL0IsZ0JBQWMsaURBRmlCO0FBRy9CLFVBQVEsaUdBSHVCO0FBSS9CLGVBQWEsZ0ZBSmtCO0FBSy9CLGtCQUFnQiwwREFMZTtBQU0vQixpQkFBZSxFQU5nQjtBQU8vQixlQUFhLEdBUGtCO0FBUS9CLGdCQUFjLHdDQVJpQjtBQVMvQixvQkFBa0Isd0JBVGE7QUFVL0IsZ0JBQWMsd0JBVmlCO0FBVy9CLFlBQVUsbUJBWHFCO0FBWS9CLGlCQUFlLCtDQVpnQjtBQWEvQixjQUFZO0FBQ1YsYUFBUyxTQURDO0FBRVYsWUFBUSxTQUZFO0FBR1YsWUFBUSxTQUhFO0FBSVYsZ0JBQVk7QUFKRixHQWJtQjtBQW1CL0IsVUFBUTtBQUNOLHFCQUFpQixxREFEWDtBQUVOLHNCQUFrQjtBQUZaO0FBbkJ1QixDQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEIsQyxDQUVBOztBQUNBQyw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isc0JBQXhCLEVBQWdELFVBQVVDLENBQVYsRUFBYTtBQUMzREEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FELEdBQUMsQ0FBQ0UsZUFBRjtBQUNBTCwrQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJNLFdBQTFCLENBQXNDLGFBQXRDO0FBQ0FOLCtDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFFBQVIsQ0FBaUIsYUFBakI7QUFDQVAsK0NBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCUSxJQUE3QixDQUFrQ0MsT0FBTyxDQUFDQyxRQUFSLENBQWlCLDRCQUFqQixFQUErQztBQUFDQyxjQUFVLEVBQUVYLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFZLElBQVIsQ0FBYSxZQUFiO0FBQWIsR0FBL0MsQ0FBbEMsRUFBNkgsWUFBWTtBQUN2SUMsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLFFBQUlDLElBQUksR0FBR2YsNkNBQUMsQ0FBQyxlQUFELENBQVo7QUFDQSxRQUFJZ0IsS0FBSyxHQUFHaEIsNkNBQUMsQ0FBQyxnQkFBRCxDQUFiO0FBQ0FpQixtQkFBZSxDQUFDRixJQUFJLENBQUNHLEdBQUwsRUFBRCxFQUFhRixLQUFLLENBQUNFLEdBQU4sRUFBYixDQUFmO0FBQ0QsR0FMRDtBQU9ELENBWkQ7QUFjQWxCLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixrQkFBekIsRUFBNkMsWUFBWTtBQUN2RCxNQUFJaUIsU0FBUyxHQUFHbkIsNkNBQUMsQ0FBQyxXQUFELENBQWpCO0FBQ0EsTUFBSWUsSUFBSSxHQUFHZiw2Q0FBQyxDQUFDLGVBQUQsQ0FBWjtBQUNBLE1BQUlnQixLQUFLLEdBQUdoQiw2Q0FBQyxDQUFDLGdCQUFELENBQWI7QUFDQW1CLFdBQVMsQ0FBQ2IsV0FBVixDQUFzQixRQUF0QjtBQUNBVyxpQkFBZSxDQUFDRixJQUFJLENBQUNHLEdBQUwsRUFBRCxFQUFhRixLQUFLLENBQUNFLEdBQU4sRUFBYixDQUFmO0FBQ0QsQ0FORDtBQVFBbEIsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLGVBQXpCLEVBQTBDLFlBQVk7QUFDcEQsTUFBSWlCLFNBQVMsR0FBR25CLDZDQUFDLENBQUMsV0FBRCxDQUFqQjtBQUNBLE1BQUllLElBQUksR0FBR2YsNkNBQUMsQ0FBQyxlQUFELENBQVo7QUFDQSxNQUFJZ0IsS0FBSyxHQUFHaEIsNkNBQUMsQ0FBQyxnQkFBRCxDQUFiO0FBQ0FtQixXQUFTLENBQUNiLFdBQVYsQ0FBc0IsUUFBdEI7QUFDQVcsaUJBQWUsQ0FBQ0YsSUFBSSxDQUFDRyxHQUFMLEVBQUQsRUFBYUYsS0FBSyxDQUFDRSxHQUFOLEVBQWIsQ0FBZjtBQUNELENBTkQ7QUFRQWxCLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixnQkFBekIsRUFBMkMsWUFBWTtBQUNyRCxNQUFNaUIsU0FBUyxHQUFHbkIsNkNBQUMsQ0FBQyxXQUFELENBQW5CO0FBQ0EsTUFBTWUsSUFBSSxHQUFHZiw2Q0FBQyxDQUFDLGVBQUQsQ0FBZDtBQUNBLE1BQU1nQixLQUFLLEdBQUdoQiw2Q0FBQyxDQUFDLGdCQUFELENBQWY7QUFDQW1CLFdBQVMsQ0FBQ2IsV0FBVixDQUFzQixRQUF0QjtBQUNBVyxpQkFBZSxDQUFDRixJQUFJLENBQUNHLEdBQUwsRUFBRCxFQUFhRixLQUFLLENBQUNFLEdBQU4sRUFBYixDQUFmO0FBQ0QsQ0FORCxFLENBUUE7O0FBQ0FsQiw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsV0FBeEIsRUFBcUMsWUFBWTtBQUMvQyxNQUFNa0IsTUFBTSxHQUFHcEIsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLElBQVIsQ0FBYSxJQUFiLEVBQW1CQyxLQUFuQixDQUF5QixHQUF6QixDQUFmOztBQUNBLE1BQUl0Qiw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUIsUUFBUixDQUFpQixRQUFqQixDQUFKLEVBQWdDO0FBRTlCO0FBQ0F2QixpREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxXQUFSLENBQW9CLFFBQXBCO0FBRUFOLGlEQUFDLENBQUN3QixJQUFGLENBQU87QUFDTEMsVUFBSSxFQUFFLE1BREQ7QUFFTEMsU0FBRyxFQUFFakIsT0FBTyxDQUFDQyxRQUFSLENBQWlCLDJDQUFqQixFQUE4RDtBQUNqRWlCLGVBQU8sRUFBRTNCLDZDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmtCLEdBQXRCLEVBRHdEO0FBRWpFVSxnQkFBUSxFQUFFUixNQUFNLENBQUMsQ0FBRDtBQUZpRCxPQUE5RCxDQUZBO0FBTUxTLGNBQVEsRUFBRSxNQU5MO0FBT0xqQixVQUFJLEVBQUU7QUFDSkcsWUFBSSxFQUFFZiw2Q0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmtCLEdBQW5CLEVBREY7QUFFSkYsYUFBSyxFQUFFaEIsNkNBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9Ca0IsR0FBcEIsRUFGSDtBQUdKWSxjQUFNLEVBQUU7QUFISixPQVBEO0FBWUw7QUFDQUMsV0FBSyxFQUFFLGlCQUFZO0FBQ2pCQyxnRUFBVSxDQUFDLDREQUFELEVBQStELFFBQS9ELENBQVY7QUFDRCxPQWZJO0FBZ0JMQyxhQUFPLEVBQUUsaUJBQVVyQixJQUFWLEVBQWdCO0FBQ3ZCYixpQkFBUyxHQUFHYSxJQUFaO0FBQ0FvQixnRUFBVSxDQUFDLDhDQUFELEVBQWlELFNBQWpELENBQVY7QUFDRDtBQW5CSSxLQUFQO0FBcUJELEdBMUJELE1BMEJPO0FBQ0w7QUFDQWhDLGlEQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFFBQVIsQ0FBaUIsUUFBakI7QUFDQVAsaURBQUMsQ0FBQ3dCLElBQUYsQ0FBTztBQUNMQyxVQUFJLEVBQUUsTUFERDtBQUVMQyxTQUFHLEVBQUVqQixPQUFPLENBQUNDLFFBQVIsQ0FBaUIsMkNBQWpCLEVBQThEO0FBQ2pFaUIsZUFBTyxFQUFFM0IsNkNBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCa0IsR0FBdEIsRUFEd0Q7QUFFakVVLGdCQUFRLEVBQUVSLE1BQU0sQ0FBQyxDQUFEO0FBRmlELE9BQTlELENBRkE7QUFNTFMsY0FBUSxFQUFFLE1BTkw7QUFPTGpCLFVBQUksRUFBRTtBQUNKRyxZQUFJLEVBQUVmLDZDQUFDLENBQUMsZUFBRCxDQUFELENBQW1Ca0IsR0FBbkIsRUFERjtBQUVKRixhQUFLLEVBQUVoQiw2Q0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JrQixHQUFwQixFQUZIO0FBR0pZLGNBQU0sRUFBRTtBQUhKLE9BUEQ7QUFZTDtBQUNBQyxXQUFLLEVBQUUsZUFBVUcsR0FBVixFQUFlO0FBQ3BCLFlBQUlBLEdBQUcsQ0FBQ0MsWUFBSixLQUFxQixLQUF6QixFQUFnQztBQUM5Qkgsa0VBQVUsQ0FBQyx5RkFBRCxFQUE0RixRQUE1RixDQUFWO0FBQ0QsU0FGRCxNQUVPO0FBQ0xBLGtFQUFVLENBQUMsbUNBQUQsRUFBc0MsUUFBdEMsQ0FBVjtBQUNEO0FBQ0YsT0FuQkk7QUFvQkxDLGFBQU8sRUFBRSxpQkFBVXJCLElBQVYsRUFBZ0I7QUFDdkJvQixnRUFBVSxDQUFDLG1DQUFELEVBQXNDLFNBQXRDLENBQVY7QUFDRDtBQXRCSSxLQUFQO0FBd0JEO0FBQ0YsQ0F4REQ7QUEwREFoQyw2Q0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJvQyxTQUFyQixDQUErQjtBQUM3QixjQUFZdEMsMERBRGlCO0FBRTdCLG1CQUFpQix1QkFBVXVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCQyxhQUF2QixFQUFzQ0MsaUJBQXRDLEVBQXlEO0FBRXhFLFFBQUlGLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYSxLQUFiLElBQXNCQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWEsSUFBbkMsSUFBMkNBLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYSxJQUF4RCxJQUFnRUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhLEtBQWpGLEVBQXdGO0FBQ3RGdEMsbURBQUMsQ0FBQyxJQUFELEVBQU9xQyxJQUFQLENBQUQsQ0FBY0ksR0FBZCxDQUFrQixrQkFBbEIsRUFBc0MsU0FBdEM7QUFDRCxLQUZELE1BRU87QUFDTHpDLG1EQUFDLENBQUMsSUFBRCxFQUFPcUMsSUFBUCxDQUFELENBQWNJLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDLFNBQXRDO0FBQ0Q7QUFDRjtBQVQ0QixDQUEvQjs7QUFZQSxTQUFTeEIsZUFBVCxDQUEwQkYsSUFBMUIsRUFBZ0NDLEtBQWhDLEVBQXVDO0FBQ3JDaEIsK0NBQUMsQ0FBQ3dCLElBQUYsQ0FBTztBQUNMQyxRQUFJLEVBQUUsS0FERDtBQUVMQyxPQUFHLEVBQUVqQixPQUFPLENBQUNDLFFBQVIsQ0FBaUIsd0NBQWpCLEVBQTJEO0FBQUNpQixhQUFPLEVBQUUzQiw2Q0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JrQixHQUF0QjtBQUFWLEtBQTNELENBRkE7QUFHTFcsWUFBUSxFQUFFLE1BSEw7QUFJTEksV0FBTyxFQUFFLGlCQUFVckIsSUFBVixFQUFnQjtBQUN2QixVQUFNOEIsQ0FBQyxHQUFHM0IsSUFBSSxDQUFDTyxLQUFMLENBQVcsR0FBWCxDQUFWO0FBQ0EsVUFBTXFCLEtBQUssR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLRSxJQUFMLEtBQWMsR0FBZCxHQUFvQkYsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLRSxJQUFMLEVBQXBCLEdBQWtDLEdBQWxDLEdBQXdDRixDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtFLElBQUwsRUFBdEQ7O0FBQ0EsVUFBSTVCLEtBQUssQ0FBQzZCLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEI3QixhQUFLLEdBQUcsTUFBTUEsS0FBZDtBQUNEOztBQUVELFdBQUssSUFBSThCLENBQVQsSUFBY2xDLElBQWQsRUFBb0I7QUFDbEIsWUFBSWtDLENBQUMsSUFBSUgsS0FBVCxFQUFnQjtBQUNkLGNBQUksT0FBTy9CLElBQUksQ0FBQ2tDLENBQUQsQ0FBSixDQUFROUIsS0FBUixDQUFQLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3pDLGlCQUFLLElBQUkrQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbkMsSUFBSSxDQUFDa0MsQ0FBRCxDQUFKLENBQVE5QixLQUFSLEVBQWU2QixNQUFuQyxFQUEyQ0UsQ0FBQyxFQUE1QyxFQUFnRDtBQUM5Qy9DLDJEQUFDLENBQUMsVUFBVVksSUFBSSxDQUFDa0MsQ0FBRCxDQUFKLENBQVE5QixLQUFSLEVBQWUrQixDQUFmLENBQVgsQ0FBRCxDQUErQnhDLFFBQS9CLENBQXdDLFFBQXhDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRjtBQXBCSSxHQUFQO0FBc0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU3lDLFdBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDM0IsS0FBTCxDQUFXLEdBQVgsQ0FBYjtBQUNBLE1BQUk2QixTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsTUFBSUQsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLFdBQWhCLEVBQTZCO0FBQzNCLFFBQUlBLElBQUksQ0FBQ0wsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CTSxlQUFTLEdBQUcsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSUQsSUFBSSxDQUFDQyxTQUFELENBQUosS0FBb0Isc0JBQXhCLEVBQWdEO0FBQzlDQSxhQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUF4QjtBQUNEOztBQUVELE1BQUlELElBQUksQ0FBQ0EsSUFBSSxDQUFDTCxNQUFMLEdBQWMsQ0FBZixDQUFKLEtBQTBCLEVBQTlCLEVBQWtDO0FBQ2hDSyxRQUFJLENBQUNFLEdBQUw7QUFDRDs7QUFFRHBELCtDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCTSxXQUFoQixDQUE0QixRQUE1QjtBQUNBTiwrQ0FBQyxDQUFDLFdBQVdrRCxJQUFJLENBQUNDLFNBQUQsQ0FBaEIsQ0FBRCxDQUE4QjVDLFFBQTlCLENBQXVDLFFBQXZDO0FBQ0QsQyxDQUVEOzs7QUFDQXlDLFdBQVcsQ0FBQ2hELDZDQUFDLENBQUNxRCxRQUFELENBQUQsQ0FBWWhDLElBQVosQ0FBaUIsVUFBakIsQ0FBRCxDQUFYO0FBRUFpQyxrREFBSSxDQUFDQyxLQUFMLENBQVc7QUFDVEMsYUFBVyxFQUFFO0FBQ1hDLGlCQUFhLEVBQUUsaUJBREo7QUFFWEMsZ0JBQVksRUFBRTtBQUZILEdBREo7QUFLVEMsZ0JBQWMsRUFBRTtBQUxQLENBQVgsRSxDQU9BOztBQUNBM0QsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQXhCLEVBQXNDLFVBQVVDLENBQVYsRUFBYTtBQUNqREEsR0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTXNCLEdBQUcsR0FBRzFCLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQixJQUFSLENBQWEsTUFBYixDQUFaO0FBQ0EsTUFBTXVDLElBQUksR0FBRzVELDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFZLElBQVIsQ0FBYSxNQUFiLENBQWI7QUFDQTBDLG9EQUFJLENBQUNPLElBQUwsQ0FBVTtBQUNSQyxTQUFLLEVBQUUsNEJBREM7QUFFUkMsUUFBSSxFQUFFLDBDQUZFO0FBR1JDLFFBQUksRUFBRSxTQUhFO0FBSVJDLG9CQUFnQixFQUFFLElBSlY7QUFLUkMsc0JBQWtCLEVBQUUsU0FMWjtBQU1SQyxxQkFBaUIsRUFBRSxNQU5YO0FBT1JDLHFCQUFpQixFQUFFLGtCQVBYO0FBUVJDLG9CQUFnQixFQUFFLGNBUlY7QUFTUmIsZUFBVyxFQUFFO0FBQ1hDLG1CQUFhLEVBQUUsaUJBREo7QUFFWEMsa0JBQVksRUFBRTtBQUZILEtBVEw7QUFhUkMsa0JBQWMsRUFBRTtBQWJSLEdBQVYsRUFjR1csSUFkSCxDQWNRLFVBQVVDLE1BQVYsRUFBa0I7QUFDeEIsUUFBSUEsTUFBTSxDQUFDQyxLQUFYLEVBQWtCO0FBQ2hCeEUsbURBQUMsQ0FBQ3dCLElBQUYsQ0FBTztBQUNMRSxXQUFHLEVBQUVBLEdBREE7QUFFTEQsWUFBSSxFQUFFLFFBRkQ7QUFHTGIsWUFBSSxFQUFFO0FBQ0o2RCxnQkFBTSxFQUFFYjtBQURKLFNBSEQ7QUFNTDNCLGVBQU8sRUFBRSxpQkFBVXlDLEVBQVYsRUFBYztBQUNyQixjQUFJQSxFQUFFLENBQUNDLGNBQUgsQ0FBa0IsVUFBbEIsS0FBaUNELEVBQUUsQ0FBQ0MsY0FBSCxDQUFrQixLQUFsQixDQUFyQyxFQUErRDtBQUM3RDFFLG9CQUFRLENBQUNvRCxRQUFULENBQWtCdUIsSUFBbEIsR0FBeUJGLEVBQUUsQ0FBQ2hELEdBQTVCO0FBQ0QsV0FGRCxNQUVPO0FBQ0wxQix5REFBQyxDQUFDLFlBQVkwRSxFQUFiLENBQUQsQ0FBa0JHLE9BQWxCLENBQTBCLElBQTFCLEVBQWdDQyxNQUFoQztBQUNBOUMsc0JBQVUsQ0FBQyxtQ0FBRCxFQUFzQyxTQUF0QyxDQUFWO0FBQ0FzQiw4REFBSSxDQUFDTyxJQUFMLENBQVU7QUFDUkMsbUJBQUssRUFBRSxXQURDO0FBRVJDLGtCQUFJLEVBQUUsbUNBRkU7QUFHUkMsa0JBQUksRUFBRSxTQUhFO0FBSVJJLCtCQUFpQixFQUFFLElBSlg7QUFLUloseUJBQVcsRUFBRTtBQUNYQyw2QkFBYSxFQUFFLGlCQURKO0FBRVhDLDRCQUFZLEVBQUU7QUFGSCxlQUxMO0FBU1JDLDRCQUFjLEVBQUU7QUFUUixhQUFWO0FBV0Q7QUFDRixTQXhCSTtBQXlCTDVCLGFBQUssRUFBRSxlQUFVZ0QsR0FBVixFQUFlQyxXQUFmLEVBQTRCQyxXQUE1QixFQUF5QztBQUM5QzNCLDREQUFJLENBQUNPLElBQUwsQ0FBVTtBQUNSQyxpQkFBSyxFQUFFLGdDQURDO0FBRVJDLGdCQUFJLEVBQUUsa0NBRkU7QUFHUkMsZ0JBQUksRUFBRSxPQUhFO0FBSVJJLDZCQUFpQixFQUFFLElBSlg7QUFLUlosdUJBQVcsRUFBRTtBQUNYQywyQkFBYSxFQUFFLGlCQURKO0FBRVhDLDBCQUFZLEVBQUU7QUFGSCxhQUxMO0FBU1JDLDBCQUFjLEVBQUU7QUFUUixXQUFWO0FBV0EzQixvQkFBVSxDQUFDLDRDQUFELEVBQStDLFFBQS9DLENBQVY7QUFDRDtBQXRDSSxPQUFQO0FBeUNELEtBMUNELE1BMENPLEtBQ0w7QUFDQXVDLFVBQU0sQ0FBQ1csT0FBUCxLQUFtQixRQUZkLEVBR0w7QUFDQTVCLHdEQUFJLENBQUNPLElBQUwsQ0FBVTtBQUNSQyxhQUFLLEVBQUUsV0FEQztBQUVSQyxZQUFJLEVBQUUsNEJBRkU7QUFHUkMsWUFBSSxFQUFFLE9BSEU7QUFJUkkseUJBQWlCLEVBQUUsSUFKWDtBQUtSWixtQkFBVyxFQUFFO0FBQ1hDLHVCQUFhLEVBQUUsaUJBREo7QUFFWEMsc0JBQVksRUFBRTtBQUZILFNBTEw7QUFTUkMsc0JBQWMsRUFBRTtBQVRSLE9BQVY7QUFXRDtBQUNGLEdBekVEO0FBMEVELENBOUVEO0FBZ0ZPLFNBQVMzQixVQUFULENBQXFCbUQsT0FBckIsRUFBOEJDLEtBQTlCLEVBQXFDO0FBQzFDdkUsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLE1BQUl1RSxTQUFTLEdBQUcsSUFBSUMsS0FBSixFQUFoQjtBQUNBRCxXQUFTLENBQUMsU0FBRCxDQUFULEdBQXVCLFFBQXZCO0FBQ0FBLFdBQVMsQ0FBQyxRQUFELENBQVQsR0FBc0IsUUFBdEI7QUFDQUEsV0FBUyxDQUFDLFNBQUQsQ0FBVCxHQUF1QixXQUF2QjtBQUVBLE1BQU1FLElBQUksR0FBRyxpQ0FBaUNILEtBQWpDLEdBQXlDLG1CQUF6QyxHQUNYLHNHQURXLEdBRVgsZ0RBRlcsR0FHWCxpQ0FIVyxHQUlYLDBCQUpXLEdBSWtCQyxTQUFTLENBQUNELEtBQUQsQ0FKM0IsR0FJcUMsU0FKckMsR0FLWCx5QkFMVyxHQUtpQkQsT0FMakIsR0FLMkIsUUFMM0IsR0FNWCx3QkFORjtBQVFBbkYsK0NBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J3RixPQUFsQixDQUEwQkQsSUFBMUIsRUFBZ0NFLFNBQWhDLENBQTBDLE1BQTFDO0FBQ0F6RiwrQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjMEYsS0FBZCxDQUFvQixJQUFwQixFQUEwQkMsT0FBMUIsQ0FBa0MsTUFBbEM7QUFDRCxDLENBRUQ7O0FBQ0EsSUFBSUMsb0JBQW9CLEdBQUcsRUFBM0I7QUFDQSxJQUFJbkUsSUFBSSxHQUFHLE1BQVg7QUFDQSxJQUFJb0UsVUFBVSxHQUFHLEtBQWpCO0FBRUE3Riw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsU0FBeEIsRUFBbUMsVUFBVUMsQ0FBVixFQUFhO0FBQzlDQSxHQUFDLENBQUNDLGNBQUY7QUFDQXdGLHNCQUFvQixHQUFHNUYsNkNBQUMsQ0FBQyxJQUFELENBQXhCO0FBQ0EsTUFBSXVGLElBQUksR0FBRyxFQUFYO0FBQ0FNLFlBQVUsR0FBRyxJQUFiOztBQUNBLE1BQUksT0FBUTdGLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFZLElBQVIsQ0FBYSxNQUFiLENBQVIsS0FBa0MsV0FBdEMsRUFBbUQ7QUFDakRhLFFBQUksR0FBR3pCLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFZLElBQVIsQ0FBYSxNQUFiLENBQVA7QUFDRDs7QUFFRCxNQUFJWiw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRWSxJQUFSLENBQWEsTUFBYixNQUF5QixRQUE3QixFQUF1QyxDQUNyQztBQUNELEdBRkQsTUFFTztBQUNMMkUsUUFBSSxHQUFHTyxXQUFXLENBQUM5Riw2Q0FBQyxDQUFDLElBQUQsQ0FBRixDQUFsQjtBQUNEOztBQUNEQSwrQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0YsV0FBUixDQUFvQlIsSUFBcEI7QUFDQXZGLCtDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CZ0csS0FBbkI7QUFDRCxDQWhCRDtBQWtCQWhHLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixlQUF4QixFQUF5QyxVQUFVQyxDQUFWLEVBQWE7QUFDcEQsTUFBSUEsQ0FBQyxDQUFDOEYsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCQyxjQUFVO0FBQ1gsR0FGRCxNQUVPLElBQUkvRixDQUFDLENBQUM4RixPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDM0JqRyxpREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQitGLFdBQWxCLENBQThCSCxvQkFBOUI7QUFDRDtBQUNGLENBTkQ7QUFRQTVGLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixnQkFBeEIsRUFBMEMsVUFBVUMsQ0FBVixFQUFhO0FBQ3JEQSxHQUFDLENBQUNDLGNBQUY7QUFDQThGLFlBQVU7QUFDWCxDQUhEO0FBS0FsRyw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFVBQWYsRUFBMkIsVUFBVUMsQ0FBVixFQUFhO0FBQ3RDLE1BQUkwRixVQUFVLEtBQUssSUFBZixJQUF1QjFGLENBQUMsQ0FBQ2dHLEtBQUYsS0FBWSxFQUF2QyxFQUEyQztBQUN6Q2hHLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBOEYsY0FBVTtBQUNYOztBQUVELE1BQUlMLFVBQVUsS0FBSyxJQUFmLElBQXVCMUYsQ0FBQyxDQUFDZ0csS0FBRixLQUFZLEVBQXZDLEVBQTJDO0FBQ3pDaEcsS0FBQyxDQUFDQyxjQUFGO0FBQ0FKLGlEQUFDLENBQUMsY0FBRCxDQUFELENBQWtCK0YsV0FBbEIsQ0FBOEJILG9CQUE5QjtBQUNEO0FBQ0YsQ0FWRDtBQVlBNUYsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGdCQUF4QixFQUEwQyxVQUFVQyxDQUFWLEVBQWE7QUFDckRBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBSiwrQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQitGLFdBQWxCLENBQThCSCxvQkFBOUI7QUFDRCxDQUhEOztBQUtBLFNBQVNNLFVBQVQsR0FBdUI7QUFDckIsTUFBSWhGLEdBQUcsR0FBR2xCLDZDQUFDLENBQUMsZUFBRCxDQUFELENBQW1Ca0IsR0FBbkIsRUFBVjtBQUNBbEIsK0NBQUMsQ0FBQ3dCLElBQUYsQ0FBTztBQUNMRSxPQUFHLEVBQUVrRSxvQkFBb0IsQ0FBQ3ZFLElBQXJCLENBQTBCLE1BQTFCLENBREE7QUFFTFQsUUFBSSxFQUFFO0FBQ0p3RixXQUFLLEVBQUVSLG9CQUFvQixDQUFDaEYsSUFBckIsQ0FBMEIsT0FBMUIsQ0FESDtBQUVKNEQsV0FBSyxFQUFFdEQsR0FGSDtBQUdKTyxVQUFJLEVBQUVBO0FBSEYsS0FGRDtBQU9MNEUsVUFBTSxFQUFFLE1BUEg7QUFRTHBFLFdBQU8sRUFBRSxtQkFBWTtBQUNuQjJELDBCQUFvQixDQUFDTCxJQUFyQixDQUEwQnJFLEdBQTFCO0FBQ0FsQixtREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQitGLFdBQWxCLENBQThCSCxvQkFBOUI7QUFDQUMsZ0JBQVUsR0FBRyxLQUFiO0FBQ0Q7QUFaSSxHQUFQO0FBY0Q7O0FBRUQsU0FBU0MsV0FBVCxDQUFzQlEsSUFBdEIsRUFBNEI7QUFDMUIsTUFBSUMsS0FBSyxHQUFHLHFEQUFxREQsSUFBSSxDQUFDZixJQUFMLEdBQVkzQyxJQUFaLEVBQXJELEdBQTBFLHdCQUF0RjtBQUNBMkQsT0FBSyxHQUFHQSxLQUFLLEdBQUcsd0hBQWhCO0FBQ0FBLE9BQUssR0FBR0EsS0FBSyxHQUFHLDZIQUFoQjtBQUNBLFNBQU9BLEtBQVA7QUFDRDs7QUFFREMsTUFBTSxDQUFDQyxFQUFQLENBQVVDLFFBQVYsR0FBcUIsVUFBVUMsSUFBVixFQUFnQkMsR0FBaEIsRUFBcUI7QUFDeEMsU0FBTzVHLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXNkcsWUFBWCxDQUF3QixVQUFVRixJQUFsQyxLQUEyQ0MsR0FBbEQ7QUFDRCxDQUZEOztBQUlBSixNQUFNLENBQUNDLEVBQVAsQ0FBVUssV0FBVixHQUF3QixVQUFVSCxJQUFWLEVBQWdCO0FBQ3RDLFNBQU8zRyw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBVytHLFlBQVgsQ0FBd0IsVUFBVUosSUFBbEMsQ0FBUDtBQUNELENBRkQ7O0FBSUEsU0FBU0ssWUFBVCxDQUF1QkwsSUFBdkIsRUFBNkI7QUFDM0IsU0FBT0EsSUFBSSxDQUFDTSxPQUFMLENBQWEsV0FBYixFQUEwQixVQUFVQyxDQUFWLEVBQWE7QUFDNUMsV0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLQyxXQUFMLEVBQVA7QUFDRCxHQUZNLENBQVA7QUFHRDs7QUFFTSxTQUFTQyxjQUFULENBQXlCQyxFQUF6QixFQUE2QkMsUUFBN0IsRUFBdUM7QUFDNUMsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQXZILCtDQUFDLENBQUN3SCxJQUFGLENBQU94SCw2Q0FBQyxDQUFDcUgsRUFBRCxDQUFELENBQU16RyxJQUFOLEVBQVAsRUFBcUIsVUFBVTZHLEdBQVYsRUFBZWpELEtBQWYsRUFBc0I7QUFFekNpRCxPQUFHLEdBQUdULFlBQVksQ0FBQ1MsR0FBRCxDQUFsQixDQUZ5QyxDQUl6Qzs7QUFDQSxRQUFJQSxHQUFHLElBQUksU0FBWCxFQUFzQjtBQUNwQjtBQUNEOztBQUVELFFBQUlILFFBQVEsSUFBSUksU0FBaEIsRUFBMkI7QUFDekIsVUFBSWpHLElBQUksR0FBRzZGLFFBQVEsQ0FBQ0csR0FBRCxDQUFuQjs7QUFDQSxjQUFRaEcsSUFBUjtBQUNFLGFBQUssTUFBTDtBQUNFK0MsZUFBSyxHQUFHbUQsT0FBTyxDQUFDbkQsS0FBRCxDQUFmO0FBQ0E7O0FBRUYsYUFBSyxLQUFMO0FBQ0VBLGVBQUssR0FBR29ELE1BQU0sQ0FBQ3BELEtBQUQsQ0FBZDtBQUNBOztBQUVGLGFBQUssT0FBTDtBQUNFQSxlQUFLLEdBQUdBLEtBQUssQ0FBQ2xELEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDQTs7QUFFRjtBQWJGO0FBZ0JEOztBQUVEaUcsV0FBTyxDQUFDRSxHQUFELENBQVAsR0FBZWpELEtBQWY7QUFDRCxHQTlCRDtBQWdDQSxTQUFPK0MsT0FBUDtBQUNELEMiLCJmaWxlIjoiYWJzZW5jZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvbGFuZy9mci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDIyLzA3LzIwMjAgMTU6MTBcblxuZXhwb3J0IGNvbnN0IGRhdGFUYWJsZUxhbmd1ZUZyID0ge1xuICAnZGVjaW1hbCc6ICcnLFxuICAnZW1wdHlUYWJsZSc6ICdBdWN1bmUgZG9ubiZlYWN1dGU7ZSBkaXNwb25pYmxlIGRhbnMgbGUgdGFibGVhdScsXG4gICdpbmZvJzogJ0FmZmljaGFnZSBkZSBsXFwnJmVhY3V0ZTtsJmVhY3V0ZTttZW50IF9TVEFSVF8gJmFncmF2ZTsgX0VORF8gc3VyIF9UT1RBTF8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cycsXG4gICdpbmZvRW1wdHknOiAnQWZmaWNoYWdlIGRlIGxcXCcmZWFjdXRlO2wmZWFjdXRlO21lbnQgMCAmYWdyYXZlOyAwIHN1ciAwICZlYWN1dGU7bCZlYWN1dGU7bWVudCcsXG4gICdpbmZvRmlsdGVyZWQnOiAnKGZpbHRyJmVhY3V0ZTsgZGUgX01BWF8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cyBhdSB0b3RhbCknLFxuICAnaW5mb1Bvc3RGaXgnOiAnJyxcbiAgJ3Rob3VzYW5kcyc6ICcsJyxcbiAgJ2xlbmd0aE1lbnUnOiAnQWZmaWNoZXIgX01FTlVfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMnLFxuICAnbG9hZGluZ1JlY29yZHMnOiAnQ2hhcmdlbWVudCBlbiBjb3Vycy4uLicsXG4gICdwcm9jZXNzaW5nJzogJ1RyYWl0ZW1lbnQgZW4gY291cnMuLi4nLFxuICAnc2VhcmNoJzogJ1JlY2hlcmNoZXImbmJzcDs6JyxcbiAgJ3plcm9SZWNvcmRzJzogJ0F1Y3VuICZlYWN1dGU7bCZlYWN1dGU7bWVudCAmYWdyYXZlOyBhZmZpY2hlcicsXG4gICdwYWdpbmF0ZSc6IHtcbiAgICAnZmlyc3QnOiAnUHJlbWllcicsXG4gICAgJ2xhc3QnOiAnRGVybmllcicsXG4gICAgJ25leHQnOiAnU3VpdmFudCcsXG4gICAgJ3ByZXZpb3VzJzogJ1ByJmVhY3V0ZTtjJmVhY3V0ZTtkZW50J1xuICB9LFxuICAnYXJpYSc6IHtcbiAgICAnc29ydEFzY2VuZGluZyc6ICc6IGFjdGl2ZXIgcG91ciB0cmllciBsYSBjb2xvbm5lIHBhciBvcmRyZSBjcm9pc3NhbnQnLFxuICAgICdzb3J0RGVzY2VuZGluZyc6ICc6IGFjdGl2ZXIgcG91ciB0cmllciBsYSBjb2xvbm5lIHBhciBvcmRyZSBkJmVhY3V0ZTtjcm9pc3NhbnQnXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hYnNlbmNlcy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE1LzA5LzIwMjAgMDY6MTdcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCAnLi4vLi4vdmVuZG9yL2RhdGF0YWJsZXMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQge2RhdGFUYWJsZUxhbmd1ZUZyfSBmcm9tICcuLi9sYW5nL2ZyJ1xuXG5sZXQgdGFic2VuY2VzID0gW11cblxuLy9TYWlzaWUgZGVzIGFic2VuY2VzXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFic0NoYW5nZVR5cGVHcm91cGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcuYWJzQ2hhbmdlVHlwZUdyb3VwZScpLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JylcbiAgJCgnI2xpc3RlRXR1ZGlhbnRzQWJzZW5jZXMnKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9hYnNlbmNlX2xpc3RlX2V0dWRpYW50Jywge3R5cGVncm91cGU6ICQodGhpcykuZGF0YSgndHlwZWdyb3VwZScpfSksIChmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ3RoZW4uLi4nKVxuICAgIGxldCBkYXRlID0gJCgnI2Fic2VuY2UtZGF0ZScpXG4gICAgbGV0IGhldXJlID0gJCgnI2Fic2VuY2UtaGV1cmUnKVxuICAgIHVwZGF0ZUFmZmljaGFnZShkYXRlLnZhbCgpLCBoZXVyZS52YWwoKSlcbiAgfSkpXG5cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2Fic2VuY2UtbWF0aWVyZScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGV0dWRpYW50cyA9ICQoJy5ldHVkaWFudCcpXG4gIGxldCBkYXRlID0gJCgnI2Fic2VuY2UtZGF0ZScpXG4gIGxldCBoZXVyZSA9ICQoJyNhYnNlbmNlLWhldXJlJylcbiAgZXR1ZGlhbnRzLnJlbW92ZUNsYXNzKCdhYnNlbnQnKVxuICB1cGRhdGVBZmZpY2hhZ2UoZGF0ZS52YWwoKSwgaGV1cmUudmFsKCkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNhYnNlbmNlLWRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBldHVkaWFudHMgPSAkKCcuZXR1ZGlhbnQnKVxuICBsZXQgZGF0ZSA9ICQoJyNhYnNlbmNlLWRhdGUnKVxuICBsZXQgaGV1cmUgPSAkKCcjYWJzZW5jZS1oZXVyZScpXG4gIGV0dWRpYW50cy5yZW1vdmVDbGFzcygnYWJzZW50JylcbiAgdXBkYXRlQWZmaWNoYWdlKGRhdGUudmFsKCksIGhldXJlLnZhbCgpKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjYWJzZW5jZS1oZXVyZScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXR1ZGlhbnRzID0gJCgnLmV0dWRpYW50JylcbiAgY29uc3QgZGF0ZSA9ICQoJyNhYnNlbmNlLWRhdGUnKVxuICBjb25zdCBoZXVyZSA9ICQoJyNhYnNlbmNlLWhldXJlJylcbiAgZXR1ZGlhbnRzLnJlbW92ZUNsYXNzKCdhYnNlbnQnKVxuICB1cGRhdGVBZmZpY2hhZ2UoZGF0ZS52YWwoKSwgaGV1cmUudmFsKCkpXG59KVxuXG4vL21hcnF1YWdlIGV0IGVucmVnaXN0cmVtZW50IGRlcyBhYnNlbnRzXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmV0dWRpYW50JywgZnVuY3Rpb24gKCkge1xuICBjb25zdCAkc3BsaXQgPSAkKHRoaXMpLmF0dHIoJ2lkJykuc3BsaXQoJ18nKVxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWJzZW50JykpIHtcblxuICAgIC8vc3VwcHJpbWVyIGFic2VuY2VcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhYnNlbnQnKVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX2Fic2VuY2Vfc2Fpc2llX2FqYXgnLCB7XG4gICAgICAgIG1hdGllcmU6ICQoJyNhYnNlbmNlLW1hdGllcmUnKS52YWwoKSxcbiAgICAgICAgZXR1ZGlhbnQ6ICRzcGxpdFsxXVxuICAgICAgfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBkYXRlOiAkKCcjYWJzZW5jZS1kYXRlJykudmFsKCksXG4gICAgICAgIGhldXJlOiAkKCcjYWJzZW5jZS1oZXVyZScpLnZhbCgpLFxuICAgICAgICBhY3Rpb246ICdzdXBwcidcbiAgICAgIH0sXG4gICAgICAvL2FmZmljaGFnZSBkZSBsJ2VycmV1ciBlbiBjYXMgZGUgcHJvYmzDqG1lXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24gZGUgbFxcJ2Fic2VuY2UgIScsICdkYW5nZXInKVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHRhYnNlbmNlcyA9IGRhdGFcbiAgICAgICAgYWRkQ2FsbG91dCgnTGEgc3VwcHJlc3Npb24gYSDDqXTDqSBlZmZlY3R1w6llIGF2ZWMgc3VjY8OpcyAhJywgJ3N1Y2Nlc3MnKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgLy9tYXJxdWVyIGNvbW1lIGFic2VudFxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2Fic2VudCcpXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX2Fic2VuY2Vfc2Fpc2llX2FqYXgnLCB7XG4gICAgICAgIG1hdGllcmU6ICQoJyNhYnNlbmNlLW1hdGllcmUnKS52YWwoKSxcbiAgICAgICAgZXR1ZGlhbnQ6ICRzcGxpdFsxXVxuICAgICAgfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBkYXRlOiAkKCcjYWJzZW5jZS1kYXRlJykudmFsKCksXG4gICAgICAgIGhldXJlOiAkKCcjYWJzZW5jZS1oZXVyZScpLnZhbCgpLFxuICAgICAgICBhY3Rpb246ICdzYWlzaWUnXG4gICAgICB9LFxuICAgICAgLy9hZmZpY2hhZ2UgZGUgbCdlcnJldXIgZW4gY2FzIGRlIHByb2Jsw6htZVxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgaWYgKG1zZy5yZXNwb25zZVRleHQgPT09ICdvdXQnKSB7XG4gICAgICAgICAgYWRkQ2FsbG91dCgnTGUgZMOpbGFpIHBvdXIgbFxcJ2VucmVnaXN0cmVtZW50IGVzdCBkw6lwYXNzw6kuIENvbnRhY3RleiBsZSByZXNwb25zYWJsZSBkZSBsYSBkZXBhcnRlbWVudCcsICdkYW5nZXInKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnJlZ2lzdHJlbWVudC4nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ0Fic2VuY2UgZW5yZWdpc3Ryw6llIGF2ZWMgc3VjY8OpcyAhJywgJ3N1Y2Nlc3MnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbiQoJyNsaXN0ZS1hYnNlbmNlcycpLmRhdGFUYWJsZSh7XG4gICdsYW5ndWFnZSc6IGRhdGFUYWJsZUxhbmd1ZUZyLFxuICAnZm5Sb3dDYWxsYmFjayc6IGZ1bmN0aW9uIChuUm93LCBhRGF0YSwgaURpc3BsYXlJbmRleCwgaURpc3BsYXlJbmRleEZ1bGwpIHtcblxuICAgIGlmIChhRGF0YVs1XSA9PT0gJ25vbicgfHwgYURhdGFbNV0gPT09ICdubycgfHwgYURhdGFbNV0gPT09ICdObycgfHwgYURhdGFbNV0gPT09ICdOb24nKSB7XG4gICAgICAkKCd0ZCcsIG5Sb3cpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZmNlM2UzJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgndGQnLCBuUm93KS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2UzZmNmMicpXG4gICAgfVxuICB9XG59KVxuXG5mdW5jdGlvbiB1cGRhdGVBZmZpY2hhZ2UgKGRhdGUsIGhldXJlKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfYWJzZW5jZV9nZXRfYWpheCcsIHttYXRpZXJlOiAkKCcjYWJzZW5jZS1tYXRpZXJlJykudmFsKCl9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zdCB0ID0gZGF0ZS5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZGF0ZSA9IHRbMl0udHJpbSgpICsgJy0nICsgdFsxXS50cmltKCkgKyAnLScgKyB0WzBdLnRyaW0oKVxuICAgICAgaWYgKGhldXJlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBoZXVyZSA9ICcwJyArIGhldXJlXG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGQgaW4gZGF0YSkge1xuICAgICAgICBpZiAoZCA9PSBkZGF0ZSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtkXVtoZXVyZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFbZF1baGV1cmVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICQoJyNldHVfJyArIGRhdGFbZF1baGV1cmVdW2ldKS5hZGRDbGFzcygnYWJzZW50JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDExLzEwLzIwMjAgMDg6MDRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcbiAgbGV0ICRodG1sID0gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIC8+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+PC9kaXY+J1xuICByZXR1cm4gJGh0bWxcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iXSwic291cmNlUm9vdCI6IiJ9