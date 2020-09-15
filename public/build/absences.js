(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["absences"],{

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

},[["./assets/js/pages/absences.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~cf684355","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~865432e1","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~86470384","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~2e82efb8","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~6edbcb60","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.etudiants~adm.personnels~datatable~sadm.personnels","absences~adm.absences~adm.etudiants~adm.personnels~datatable~sadm.personnels"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWJzZW5jZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiXSwibmFtZXMiOlsidGFic2VuY2VzIiwiJCIsImRvY3VtZW50Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibG9hZCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInR5cGVncm91cGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRhdGUiLCJoZXVyZSIsInVwZGF0ZUFmZmljaGFnZSIsInZhbCIsImV0dWRpYW50cyIsIiRzcGxpdCIsImF0dHIiLCJzcGxpdCIsImhhc0NsYXNzIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJtYXRpZXJlIiwiZXR1ZGlhbnQiLCJkYXRhVHlwZSIsImFjdGlvbiIsImVycm9yIiwiYWRkQ2FsbG91dCIsInN1Y2Nlc3MiLCJtc2ciLCJyZXNwb25zZVRleHQiLCJkYXRhVGFibGUiLCJkYXRhVGFibGVMYW5ndWVGciIsIm5Sb3ciLCJhRGF0YSIsImlEaXNwbGF5SW5kZXgiLCJpRGlzcGxheUluZGV4RnVsbCIsImNzcyIsInQiLCJkZGF0ZSIsInRyaW0iLCJsZW5ndGgiLCJkIiwiaSIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCIkZmlyc3RFbHQiLCJwb3AiLCJsb2NhdGlvbiIsIlN3YWwiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY3NyZiIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJ0cmFuc2xhdGUiLCJBcnJheSIsImh0bWwiLCJwcmVwZW5kIiwic2xpZGVEb3duIiwiZGVsYXkiLCJzbGlkZVVwIiwibXlFZGl0SW5pdGlhbENvbnRlbnQiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsImZpZWxkIiwibWV0aG9kIiwiJG9iaiIsIiRodG1sIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwiZWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxTQUFTLEdBQUcsRUFBaEIsQyxDQUVBOztBQUNBQyw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isc0JBQXhCLEVBQWdELFVBQVVDLENBQVYsRUFBYTtBQUMzREEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FELEdBQUMsQ0FBQ0UsZUFBRjtBQUNBTCwrQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJNLFdBQTFCLENBQXNDLGFBQXRDO0FBQ0FOLCtDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFFBQVIsQ0FBaUIsYUFBakI7QUFDQVAsK0NBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCUSxJQUE3QixDQUFrQ0MsT0FB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NkI7QUFDM0IsU0FBT0EsSUFBSSxDQUFDTSxPQUFMLENBQWEsV0FBYixFQUEwQixVQUFVQyxDQUFWLEVBQWE7QUFDNUMsV0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLQyxXQUFMLEVBQVA7QUFDRCxHQUZNLENBQVA7QUFHRDs7QUFFTSxTQUFTQyxjQUFULENBQXlCQyxFQUF6QixFQUE2QkMsUUFBN0IsRUFBdUM7QUFDNUMsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQXRILCtDQUFDLENBQUN1SCxJQUFGLENBQU92SCw2Q0FBQyxDQUFDb0gsRUFBRCxDQUFELENBQU14RyxJQUFOLEVBQVAsRUFBcUIsVUFBVTRHLEdBQVYsRUFBZS9DLEtBQWYsRUFBc0I7QUFFekMrQyxPQUFHLEdBQUdULFlBQVksQ0FBQ1MsR0FBRCxDQUFsQixDQUZ5QyxDQUl6Qzs7QUFDQSxRQUFJQSxHQUFHLElBQUksU0FBWCxFQUFzQjtBQUNwQjtBQUNEOztBQUVELFFBQUlILFFBQVEsSUFBSUksU0FBaEIsRUFBMkI7QUFDekIsVUFBSWhHLElBQUksR0FBRzRGLFFBQVEsQ0FBQ0csR0FBRCxDQUFuQjs7QUFDQSxjQUFRL0YsSUFBUjtBQUNFLGFBQUssTUFBTDtBQUNFZ0QsZUFBSyxHQUFHaUQsT0FBTyxDQUFDakQsS0FBRCxDQUFmO0FBQ0E7O0FBRUYsYUFBSyxLQUFMO0FBQ0VBLGVBQUssR0FBR2tELE1BQU0sQ0FBQ2xELEtBQUQsQ0FBZDtBQUNBOztBQUVGLGFBQUssT0FBTDtBQUNFQSxlQUFLLEdBQUdBLEtBQUssQ0FBQ25ELEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDQTs7QUFFRjtBQWJGO0FBZ0JEOztBQUVEZ0csV0FBTyxDQUFDRSxHQUFELENBQVAsR0FBZS9DLEtBQWY7QUFDRCxHQTlCRDtBQWdDQSxTQUFPNkMsT0FBUDtBQUNELEMiLCJmaWxlIjoiYWJzZW5jZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWJzZW5jZXMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNS8wOS8yMDIwIDA2OjE3XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9kYXRhdGFibGVzJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IHtkYXRhVGFibGVMYW5ndWVGcn0gZnJvbSAnLi4vbGFuZy9mcidcblxubGV0IHRhYnNlbmNlcyA9IFtdXG5cbi8vU2Fpc2llIGRlcyBhYnNlbmNlc1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hYnNDaGFuZ2VUeXBlR3JvdXBlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCgnLmFic0NoYW5nZVR5cGVHcm91cGUnKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKVxuICAkKHRoaXMpLmFkZENsYXNzKCdidG4tcHJpbWFyeScpXG4gICQoJyNsaXN0ZUV0dWRpYW50c0Fic2VuY2VzJykubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhcGlfYWJzZW5jZV9saXN0ZV9ldHVkaWFudCcsIHt0eXBlZ3JvdXBlOiAkKHRoaXMpLmRhdGEoJ3R5cGVncm91cGUnKX0pLCAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCd0aGVuLi4uJylcbiAgICBsZXQgZGF0ZSA9ICQoJyNhYnNlbmNlLWRhdGUnKVxuICAgIGxldCBoZXVyZSA9ICQoJyNhYnNlbmNlLWhldXJlJylcbiAgICB1cGRhdGVBZmZpY2hhZ2UoZGF0ZS52YWwoKSwgaGV1cmUudmFsKCkpXG4gIH0pKVxuXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNhYnNlbmNlLW1hdGllcmUnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBldHVkaWFudHMgPSAkKCcuZXR1ZGlhbnQnKVxuICBsZXQgZGF0ZSA9ICQoJyNhYnNlbmNlLWRhdGUnKVxuICBsZXQgaGV1cmUgPSAkKCcjYWJzZW5jZS1oZXVyZScpXG4gIGV0dWRpYW50cy5yZW1vdmVDbGFzcygnYWJzZW50JylcbiAgdXBkYXRlQWZmaWNoYWdlKGRhdGUudmFsKCksIGhldXJlLnZhbCgpKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjYWJzZW5jZS1kYXRlJywgZnVuY3Rpb24gKCkge1xuICBsZXQgZXR1ZGlhbnRzID0gJCgnLmV0dWRpYW50JylcbiAgbGV0IGRhdGUgPSAkKCcjYWJzZW5jZS1kYXRlJylcbiAgbGV0IGhldXJlID0gJCgnI2Fic2VuY2UtaGV1cmUnKVxuICBldHVkaWFudHMucmVtb3ZlQ2xhc3MoJ2Fic2VudCcpXG4gIHVwZGF0ZUFmZmljaGFnZShkYXRlLnZhbCgpLCBoZXVyZS52YWwoKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2Fic2VuY2UtaGV1cmUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV0dWRpYW50cyA9ICQoJy5ldHVkaWFudCcpXG4gIGNvbnN0IGRhdGUgPSAkKCcjYWJzZW5jZS1kYXRlJylcbiAgY29uc3QgaGV1cmUgPSAkKCcjYWJzZW5jZS1oZXVyZScpXG4gIGV0dWRpYW50cy5yZW1vdmVDbGFzcygnYWJzZW50JylcbiAgdXBkYXRlQWZmaWNoYWdlKGRhdGUudmFsKCksIGhldXJlLnZhbCgpKVxufSlcblxuLy9tYXJxdWFnZSBldCBlbnJlZ2lzdHJlbWVudCBkZXMgYWJzZW50c1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5ldHVkaWFudCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgJHNwbGl0ID0gJCh0aGlzKS5hdHRyKCdpZCcpLnNwbGl0KCdfJylcbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Fic2VudCcpKSB7XG5cbiAgICAvL3N1cHByaW1lciBhYnNlbmNlXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWJzZW50JylcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcGxpY2F0aW9uX3BlcnNvbm5lbF9hYnNlbmNlX3NhaXNpZV9hamF4Jywge1xuICAgICAgICBtYXRpZXJlOiAkKCcjYWJzZW5jZS1tYXRpZXJlJykudmFsKCksXG4gICAgICAgIGV0dWRpYW50OiAkc3BsaXRbMV1cbiAgICAgIH0pLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGF0ZTogJCgnI2Fic2VuY2UtZGF0ZScpLnZhbCgpLFxuICAgICAgICBoZXVyZTogJCgnI2Fic2VuY2UtaGV1cmUnKS52YWwoKSxcbiAgICAgICAgYWN0aW9uOiAnc3VwcHInXG4gICAgICB9LFxuICAgICAgLy9hZmZpY2hhZ2UgZGUgbCdlcnJldXIgZW4gY2FzIGRlIHByb2Jsw6htZVxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uIGRlIGxcXCdhYnNlbmNlICEnLCAnZGFuZ2VyJylcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0YWJzZW5jZXMgPSBkYXRhXG4gICAgICAgIGFkZENhbGxvdXQoJ0xhIHN1cHByZXNzaW9uIGEgw6l0w6kgZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqXMgIScsICdzdWNjZXNzJylcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIC8vbWFycXVlciBjb21tZSBhYnNlbnRcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhYnNlbnQnKVxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcGxpY2F0aW9uX3BlcnNvbm5lbF9hYnNlbmNlX3NhaXNpZV9hamF4Jywge1xuICAgICAgICBtYXRpZXJlOiAkKCcjYWJzZW5jZS1tYXRpZXJlJykudmFsKCksXG4gICAgICAgIGV0dWRpYW50OiAkc3BsaXRbMV1cbiAgICAgIH0pLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGF0ZTogJCgnI2Fic2VuY2UtZGF0ZScpLnZhbCgpLFxuICAgICAgICBoZXVyZTogJCgnI2Fic2VuY2UtaGV1cmUnKS52YWwoKSxcbiAgICAgICAgYWN0aW9uOiAnc2Fpc2llJ1xuICAgICAgfSxcbiAgICAgIC8vYWZmaWNoYWdlIGRlIGwnZXJyZXVyIGVuIGNhcyBkZSBwcm9ibMOobWVcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIGlmIChtc2cucmVzcG9uc2VUZXh0ID09PSAnb3V0Jykge1xuICAgICAgICAgIGFkZENhbGxvdXQoJ0xlIGTDqWxhaSBwb3VyIGxcXCdlbnJlZ2lzdHJlbWVudCBlc3QgZMOpcGFzc8OpLiBDb250YWN0ZXogbGUgcmVzcG9uc2FibGUgZGUgbGEgZGVwYXJ0ZW1lbnQnLCAnZGFuZ2VyJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsXFwnZW5yZWdpc3RyZW1lbnQuJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBhZGRDYWxsb3V0KCdBYnNlbmNlIGVucmVnaXN0csOpZSBhdmVjIHN1Y2PDqXMgIScsICdzdWNjZXNzJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG4kKCcjbGlzdGUtYWJzZW5jZXMnKS5kYXRhVGFibGUoe1xuICAnbGFuZ3VhZ2UnOiBkYXRhVGFibGVMYW5ndWVGcixcbiAgJ2ZuUm93Q2FsbGJhY2snOiBmdW5jdGlvbiAoblJvdywgYURhdGEsIGlEaXNwbGF5SW5kZXgsIGlEaXNwbGF5SW5kZXhGdWxsKSB7XG5cbiAgICBpZiAoYURhdGFbNV0gPT09ICdub24nIHx8IGFEYXRhWzVdID09PSAnbm8nIHx8IGFEYXRhWzVdID09PSAnTm8nIHx8IGFEYXRhWzVdID09PSAnTm9uJykge1xuICAgICAgJCgndGQnLCBuUm93KS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZjZTNlMycpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ3RkJywgblJvdykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlM2ZjZjInKVxuICAgIH1cbiAgfVxufSlcblxuZnVuY3Rpb24gdXBkYXRlQWZmaWNoYWdlIChkYXRlLCBoZXVyZSkge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdHRVQnLFxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX2Fic2VuY2VfZ2V0X2FqYXgnLCB7bWF0aWVyZTogJCgnI2Fic2VuY2UtbWF0aWVyZScpLnZhbCgpfSksXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc3QgdCA9IGRhdGUuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZGRhdGUgPSB0WzJdLnRyaW0oKSArICctJyArIHRbMV0udHJpbSgpICsgJy0nICsgdFswXS50cmltKClcbiAgICAgIGlmIChoZXVyZS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgaGV1cmUgPSAnMCcgKyBoZXVyZVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBkIGluIGRhdGEpIHtcbiAgICAgICAgaWYgKGQgPT0gZGRhdGUpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbZF1baGV1cmVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhW2RdW2hldXJlXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAkKCcjZXR1XycgKyBkYXRhW2RdW2hldXJlXVtpXSkuYWRkQ2xhc3MoJ2Fic2VudCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAzMC8wNy8yMDIwIDExOjE4XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygndG90bycpXG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWxcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuICBsZXQgJGh0bWwgPSAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiIGlkPVwibXllZGl0LWlucHV0XCIgLz4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tc3VjY2VzcyBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj48L2Rpdj4nXG4gIHJldHVybiAkaHRtbFxufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=