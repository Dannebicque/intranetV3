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

/***/ })

},[["./assets/js/pages/absences.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~datatable~sa~a52fa8c5","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~agenda~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels","absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWJzZW5jZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiXSwibmFtZXMiOlsiZGF0YVRhYmxlTGFuZ3VlRnIiLCJ0YWJzZW5jZXMiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwidHlwZWdyb3VwZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0ZSIsImhldXJlIiwidXBkYXRlQWZmaWNoYWdlIiwidmFsIiwiZXR1ZGlhbnRzIiwiJHNwbGl0IiwiYXR0ciIsInNwbGl0IiwiaGFzQ2xhc3MiLCJhamF4IiwidHlwZSIsInVybCIsIm1hdGllcmUiLCJldHVkaWFudCIsImRhdGFUeXBlIiwiYWN0aW9uIiwiZXJyb3IiLCJhZGRDYWxsb3V0Iiwic3VjY2VzcyIsIm1zZyIsInJlc3BvbnNlVGV4dCIsImRhdGFUYWJsZSIsIm5Sb3ciLCJhRGF0YSIsImlEaXNwbGF5SW5kZXgiLCJpRGlzcGxheUluZGV4RnVsbCIsImNzcyIsInQiLCJkZGF0ZSIsInRyaW0iLCJsZW5ndGgiLCJkIiwiaSIsIiRzdG9wQ2F0Y2hFbnRlciIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCIkZmlyc3RFbHQiLCJwb3AiLCJsb2NhdGlvbiIsIlN3YWwiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY3NyZiIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJ0cmFuc2xhdGUiLCJBcnJheSIsImh0bWwiLCJwcmVwZW5kIiwic2xpZGVEb3duIiwiZGVsYXkiLCJzbGlkZVVwIiwibXlFZGl0SW5pdGlhbENvbnRlbnQiLCJFZGl0T25MaW5lIiwiZ2VuZXJlVGV4dEFyZWEiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCJtZXRob2QiLCIkb2JqIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwiZWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHO0FBQy9CLGFBQVcsRUFEb0I7QUFFL0IsZ0JBQWMsaURBRmlCO0FBRy9CLFVBQVEsaUdBSHVCO0FBSS9CLGVBQWEsZ0ZBSmtCO0FBSy9CLGtCQUFnQiwwREFMZTtBQU0vQixpQkFBZSxFQU5nQjtBQU8vQixlQUFhLEdBUGtCO0FBUS9CLGdCQUFjLHdDQVJpQjtBQVMvQixvQkFBa0Isd0JBVGE7QUFVL0IsZ0JBQWMsd0JBVmlCO0FBVy9CLFlBQVUsbUJBWHFCO0FBWS9CLGlCQUFlLCtDQVpnQjtBQWEvQixjQUFZO0FBQ1Ys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QUFELENBQU0xRyxJQUFOLEVBQVAsRUFBcUIsVUFBVThHLEdBQVYsRUFBZWpELEtBQWYsRUFBc0I7QUFFekNpRCxPQUFHLEdBQUdULFlBQVksQ0FBQ1MsR0FBRCxDQUFsQixDQUZ5QyxDQUl6Qzs7QUFDQSxRQUFJQSxHQUFHLElBQUksU0FBWCxFQUFzQjtBQUNwQjtBQUNEOztBQUVELFFBQUlILFFBQVEsSUFBSUksU0FBaEIsRUFBMkI7QUFDekIsVUFBSWxHLElBQUksR0FBRzhGLFFBQVEsQ0FBQ0csR0FBRCxDQUFuQjs7QUFDQSxjQUFRakcsSUFBUjtBQUNFLGFBQUssTUFBTDtBQUNFZ0QsZUFBSyxHQUFHbUQsT0FBTyxDQUFDbkQsS0FBRCxDQUFmO0FBQ0E7O0FBRUYsYUFBSyxLQUFMO0FBQ0VBLGVBQUssR0FBR29ELE1BQU0sQ0FBQ3BELEtBQUQsQ0FBZDtBQUNBOztBQUVGLGFBQUssT0FBTDtBQUNFQSxlQUFLLEdBQUdBLEtBQUssQ0FBQ25ELEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDQTs7QUFFRjtBQWJGO0FBZ0JEOztBQUVEa0csV0FBTyxDQUFDRSxHQUFELENBQVAsR0FBZWpELEtBQWY7QUFDRCxHQTlCRDtBQWdDQSxTQUFPK0MsT0FBUDtBQUNELEMiLCJmaWxlIjoiYWJzZW5jZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvbGFuZy9mci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDIyLzA3LzIwMjAgMTU6MTBcblxuZXhwb3J0IGNvbnN0IGRhdGFUYWJsZUxhbmd1ZUZyID0ge1xuICAnZGVjaW1hbCc6ICcnLFxuICAnZW1wdHlUYWJsZSc6ICdBdWN1bmUgZG9ubiZlYWN1dGU7ZSBkaXNwb25pYmxlIGRhbnMgbGUgdGFibGVhdScsXG4gICdpbmZvJzogJ0FmZmljaGFnZSBkZSBsXFwnJmVhY3V0ZTtsJmVhY3V0ZTttZW50IF9TVEFSVF8gJmFncmF2ZTsgX0VORF8gc3VyIF9UT1RBTF8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cycsXG4gICdpbmZvRW1wdHknOiAnQWZmaWNoYWdlIGRlIGxcXCcmZWFjdXRlO2wmZWFjdXRlO21lbnQgMCAmYWdyYXZlOyAwIHN1ciAwICZlYWN1dGU7bCZlYWN1dGU7bWVudCcsXG4gICdpbmZvRmlsdGVyZWQnOiAnKGZpbHRyJmVhY3V0ZTsgZGUgX01BWF8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cyBhdSB0b3RhbCknLFxuICAnaW5mb1Bvc3RGaXgnOiAnJyxcbiAgJ3Rob3VzYW5kcyc6ICcsJyxcbiAgJ2xlbmd0aE1lbnUnOiAnQWZmaWNoZXIgX01FTlVfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMnLFxuICAnbG9hZGluZ1JlY29yZHMnOiAnQ2hhcmdlbWVudCBlbiBjb3Vycy4uLicsXG4gICdwcm9jZXNzaW5nJzogJ1RyYWl0ZW1lbnQgZW4gY291cnMuLi4nLFxuICAnc2VhcmNoJzogJ1JlY2hlcmNoZXImbmJzcDs6JyxcbiAgJ3plcm9SZWNvcmRzJzogJ0F1Y3VuICZlYWN1dGU7bCZlYWN1dGU7bWVudCAmYWdyYXZlOyBhZmZpY2hlcicsXG4gICdwYWdpbmF0ZSc6IHtcbiAgICAnZmlyc3QnOiAnUHJlbWllcicsXG4gICAgJ2xhc3QnOiAnRGVybmllcicsXG4gICAgJ25leHQnOiAnU3VpdmFudCcsXG4gICAgJ3ByZXZpb3VzJzogJ1ByJmVhY3V0ZTtjJmVhY3V0ZTtkZW50J1xuICB9LFxuICAnYXJpYSc6IHtcbiAgICAnc29ydEFzY2VuZGluZyc6ICc6IGFjdGl2ZXIgcG91ciB0cmllciBsYSBjb2xvbm5lIHBhciBvcmRyZSBjcm9pc3NhbnQnLFxuICAgICdzb3J0RGVzY2VuZGluZyc6ICc6IGFjdGl2ZXIgcG91ciB0cmllciBsYSBjb2xvbm5lIHBhciBvcmRyZSBkJmVhY3V0ZTtjcm9pc3NhbnQnXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hYnNlbmNlcy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE1LzA5LzIwMjAgMDY6MTdcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCAnLi4vLi4vdmVuZG9yL2RhdGF0YWJsZXMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQge2RhdGFUYWJsZUxhbmd1ZUZyfSBmcm9tICcuLi9sYW5nL2ZyJ1xuXG5sZXQgdGFic2VuY2VzID0gW11cblxuLy9TYWlzaWUgZGVzIGFic2VuY2VzXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFic0NoYW5nZVR5cGVHcm91cGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcuYWJzQ2hhbmdlVHlwZUdyb3VwZScpLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JylcbiAgJCgnI2xpc3RlRXR1ZGlhbnRzQWJzZW5jZXMnKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9hYnNlbmNlX2xpc3RlX2V0dWRpYW50Jywge3R5cGVncm91cGU6ICQodGhpcykuZGF0YSgndHlwZWdyb3VwZScpfSksIChmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ3RoZW4uLi4nKVxuICAgIGxldCBkYXRlID0gJCgnI2Fic2VuY2UtZGF0ZScpXG4gICAgbGV0IGhldXJlID0gJCgnI2Fic2VuY2UtaGV1cmUnKVxuICAgIHVwZGF0ZUFmZmljaGFnZShkYXRlLnZhbCgpLCBoZXVyZS52YWwoKSlcbiAgfSkpXG5cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2Fic2VuY2UtbWF0aWVyZScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGV0dWRpYW50cyA9ICQoJy5ldHVkaWFudCcpXG4gIGxldCBkYXRlID0gJCgnI2Fic2VuY2UtZGF0ZScpXG4gIGxldCBoZXVyZSA9ICQoJyNhYnNlbmNlLWhldXJlJylcbiAgZXR1ZGlhbnRzLnJlbW92ZUNsYXNzKCdhYnNlbnQnKVxuICB1cGRhdGVBZmZpY2hhZ2UoZGF0ZS52YWwoKSwgaGV1cmUudmFsKCkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNhYnNlbmNlLWRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBldHVkaWFudHMgPSAkKCcuZXR1ZGlhbnQnKVxuICBsZXQgZGF0ZSA9ICQoJyNhYnNlbmNlLWRhdGUnKVxuICBsZXQgaGV1cmUgPSAkKCcjYWJzZW5jZS1oZXVyZScpXG4gIGV0dWRpYW50cy5yZW1vdmVDbGFzcygnYWJzZW50JylcbiAgdXBkYXRlQWZmaWNoYWdlKGRhdGUudmFsKCksIGhldXJlLnZhbCgpKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjYWJzZW5jZS1oZXVyZScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXR1ZGlhbnRzID0gJCgnLmV0dWRpYW50JylcbiAgY29uc3QgZGF0ZSA9ICQoJyNhYnNlbmNlLWRhdGUnKVxuICBjb25zdCBoZXVyZSA9ICQoJyNhYnNlbmNlLWhldXJlJylcbiAgZXR1ZGlhbnRzLnJlbW92ZUNsYXNzKCdhYnNlbnQnKVxuICB1cGRhdGVBZmZpY2hhZ2UoZGF0ZS52YWwoKSwgaGV1cmUudmFsKCkpXG59KVxuXG4vL21hcnF1YWdlIGV0IGVucmVnaXN0cmVtZW50IGRlcyBhYnNlbnRzXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmV0dWRpYW50JywgZnVuY3Rpb24gKCkge1xuICBjb25zdCAkc3BsaXQgPSAkKHRoaXMpLmF0dHIoJ2lkJykuc3BsaXQoJ18nKVxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWJzZW50JykpIHtcblxuICAgIC8vc3VwcHJpbWVyIGFic2VuY2VcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhYnNlbnQnKVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX2Fic2VuY2Vfc2Fpc2llX2FqYXgnLCB7XG4gICAgICAgIG1hdGllcmU6ICQoJyNhYnNlbmNlLW1hdGllcmUnKS52YWwoKSxcbiAgICAgICAgZXR1ZGlhbnQ6ICRzcGxpdFsxXVxuICAgICAgfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBkYXRlOiAkKCcjYWJzZW5jZS1kYXRlJykudmFsKCksXG4gICAgICAgIGhldXJlOiAkKCcjYWJzZW5jZS1oZXVyZScpLnZhbCgpLFxuICAgICAgICBhY3Rpb246ICdzdXBwcidcbiAgICAgIH0sXG4gICAgICAvL2FmZmljaGFnZSBkZSBsJ2VycmV1ciBlbiBjYXMgZGUgcHJvYmzDqG1lXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24gZGUgbFxcJ2Fic2VuY2UgIScsICdkYW5nZXInKVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHRhYnNlbmNlcyA9IGRhdGFcbiAgICAgICAgYWRkQ2FsbG91dCgnTGEgc3VwcHJlc3Npb24gYSDDqXTDqSBlZmZlY3R1w6llIGF2ZWMgc3VjY8OpcyAhJywgJ3N1Y2Nlc3MnKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgLy9tYXJxdWVyIGNvbW1lIGFic2VudFxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2Fic2VudCcpXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX2Fic2VuY2Vfc2Fpc2llX2FqYXgnLCB7XG4gICAgICAgIG1hdGllcmU6ICQoJyNhYnNlbmNlLW1hdGllcmUnKS52YWwoKSxcbiAgICAgICAgZXR1ZGlhbnQ6ICRzcGxpdFsxXVxuICAgICAgfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBkYXRlOiAkKCcjYWJzZW5jZS1kYXRlJykudmFsKCksXG4gICAgICAgIGhldXJlOiAkKCcjYWJzZW5jZS1oZXVyZScpLnZhbCgpLFxuICAgICAgICBhY3Rpb246ICdzYWlzaWUnXG4gICAgICB9LFxuICAgICAgLy9hZmZpY2hhZ2UgZGUgbCdlcnJldXIgZW4gY2FzIGRlIHByb2Jsw6htZVxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgaWYgKG1zZy5yZXNwb25zZVRleHQgPT09ICdvdXQnKSB7XG4gICAgICAgICAgYWRkQ2FsbG91dCgnTGUgZMOpbGFpIHBvdXIgbFxcJ2VucmVnaXN0cmVtZW50IGVzdCBkw6lwYXNzw6kuIENvbnRhY3RleiBsZSByZXNwb25zYWJsZSBkZSBsYSBkZXBhcnRlbWVudCcsICdkYW5nZXInKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnJlZ2lzdHJlbWVudC4nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ0Fic2VuY2UgZW5yZWdpc3Ryw6llIGF2ZWMgc3VjY8OpcyAhJywgJ3N1Y2Nlc3MnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbiQoJyNsaXN0ZS1hYnNlbmNlcycpLmRhdGFUYWJsZSh7XG4gICdsYW5ndWFnZSc6IGRhdGFUYWJsZUxhbmd1ZUZyLFxuICAnZm5Sb3dDYWxsYmFjayc6IGZ1bmN0aW9uIChuUm93LCBhRGF0YSwgaURpc3BsYXlJbmRleCwgaURpc3BsYXlJbmRleEZ1bGwpIHtcblxuICAgIGlmIChhRGF0YVs1XSA9PT0gJ25vbicgfHwgYURhdGFbNV0gPT09ICdubycgfHwgYURhdGFbNV0gPT09ICdObycgfHwgYURhdGFbNV0gPT09ICdOb24nKSB7XG4gICAgICAkKCd0ZCcsIG5Sb3cpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZmNlM2UzJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgndGQnLCBuUm93KS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2UzZmNmMicpXG4gICAgfVxuICB9XG59KVxuXG5mdW5jdGlvbiB1cGRhdGVBZmZpY2hhZ2UgKGRhdGUsIGhldXJlKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfYWJzZW5jZV9nZXRfYWpheCcsIHttYXRpZXJlOiAkKCcjYWJzZW5jZS1tYXRpZXJlJykudmFsKCl9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zdCB0ID0gZGF0ZS5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZGF0ZSA9IHRbMl0udHJpbSgpICsgJy0nICsgdFsxXS50cmltKCkgKyAnLScgKyB0WzBdLnRyaW0oKVxuICAgICAgaWYgKGhldXJlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBoZXVyZSA9ICcwJyArIGhldXJlXG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGQgaW4gZGF0YSkge1xuICAgICAgICBpZiAoZCA9PSBkZGF0ZSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtkXVtoZXVyZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFbZF1baGV1cmVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICQoJyNldHVfJyArIGRhdGFbZF1baGV1cmVdW2ldKS5hZGRDbGFzcygnYWJzZW50JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE2LzEwLzIwMjAgMTQ6NTRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==