(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.stage_courrier"],{

/***/ "./assets/css/quill.css":
/*!******************************!*\
  !*** ./assets/css/quill.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/adm.stage_courrier.js":
/*!***********************************************!*\
  !*** ./assets/js/pages/adm.stage_courrier.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quill */ "./assets/js/quill.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage_courrier.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/09/2020 14:30




var ed_courrier, ed_ETAT_STAGE_AUTORISE, ed_ETAT_STAGE_DEPOSE, ed_ETAT_STAGE_VALIDE, ed_ETAT_STAGE_REFUS, ed_ETAT_STAGE_INCOMPLET, ed_ETAT_STAGE_CONVENTION_IMPRIME, ed_ETAT_STAGE_CONVENTION_ENVOYEE, ed_ETAT_STAGE_CONVENTION_RECUE;
var tabEd = {};

function loadQuill($id) {
  var options = {
    modules: {
      toolbar: {
        container: '#toolbar_' + $id,
        handlers: {
          'customsfields': function customsfields(value) {
            if (value) {
              var cursorPosition = this.quill.getSelection().index;
              this.quill.insertText(cursorPosition, value);
              this.quill.setSelection(cursorPosition + value.length);
            }
          }
        }
      }
    },
    placeholder: 'Composez le corps du message... Laisser vide pour utiliser le mail par défaut.',
    theme: 'snow'
  };
  return new _quill__WEBPACK_IMPORTED_MODULE_0__["default"]('#text_' + $id, options);
}

jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function () {
  ed_ETAT_STAGE_AUTORISE = loadQuill('ETAT_STAGE_AUTORISE');
  ed_ETAT_STAGE_DEPOSE = loadQuill('ETAT_STAGE_DEPOSE');
  ed_ETAT_STAGE_VALIDE = loadQuill('ETAT_STAGE_VALIDE');
  ed_ETAT_STAGE_REFUS = loadQuill('ETAT_STAGE_REFUS');
  ed_ETAT_STAGE_INCOMPLET = loadQuill('ETAT_STAGE_INCOMPLET');
  ed_ETAT_STAGE_CONVENTION_IMPRIME = loadQuill('ETAT_STAGE_CONVENTION_IMPRIME');
  ed_ETAT_STAGE_CONVENTION_ENVOYEE = loadQuill('ETAT_STAGE_CONVENTION_ENVOYEE');
  ed_ETAT_STAGE_CONVENTION_RECUE = loadQuill('ETAT_STAGE_CONVENTION_RECUE');
  ed_courrier = loadQuill('courrier');
  tabEd = {
    'ed_ETAT_STAGE_AUTORISE': ed_ETAT_STAGE_AUTORISE,
    'ed_ETAT_STAGE_DEPOSE': ed_ETAT_STAGE_DEPOSE,
    'ed_ETAT_STAGE_VALIDE': ed_ETAT_STAGE_VALIDE,
    'ed_ETAT_STAGE_REFUS': ed_ETAT_STAGE_REFUS,
    'ed_ETAT_STAGE_INCOMPLET': ed_ETAT_STAGE_INCOMPLET,
    'ed_ETAT_STAGE_CONVENTION_IMPRIME': ed_ETAT_STAGE_CONVENTION_IMPRIME,
    'ed_ETAT_STAGE_CONVENTION_ENVOYEE': ed_ETAT_STAGE_CONVENTION_ENVOYEE,
    'ed_ETAT_STAGE_CONVENTION_RECUE': ed_ETAT_STAGE_CONVENTION_RECUE,
    'ed_courrier': ed_courrier
  };
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.enregistreModeleMail', function () {
  var etat = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('type');
  var onglet = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('ed');
  jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
    url: Routing.generate('administration_stage_periode_courrier_sauvegarde_modele', {
      uuid: jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('periode'),
      mail: etat
    }),
    method: 'POST',
    data: {
      message: tabEd['ed_' + onglet].getText(),
      sujet: jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sujet_' + etat).val()
    },
    success: function success() {
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Modèle enregistré !', 'success');
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.resetDefaut', function (e) {
  e.preventDefault();
  var etat = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('type');
  var periode = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('periode');
  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
    title: 'Confirmer le retour au message par défaut ?',
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
      jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
        url: Routing.generate('administration_stage_periode_courrier_reset', {
          id: periode,
          etat: etat
        }),
        type: 'POST',
        success: function success() {
          tabEd['ed_' + etat].setText('');
          Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Suppression effectuée avec succès, retour au message par défaut', 'success');
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Message réinitialisé!',
            text: 'Le message par défaut sera maintenant utilisé.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
          Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Erreur lors de la tentative de suppression', 'danger');
        }
      });
    } else if ( // Read more about handling dismissals
    result.dismiss === 'cancel') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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

/***/ }),

/***/ "./assets/js/quill.js":
/*!****************************!*\
  !*** ./assets/js/quill.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_quill_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/quill.css */ "./assets/css/quill.css");
/* harmony import */ var _css_quill_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_quill_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/core */ "./node_modules/quill/core.js");
/* harmony import */ var quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/modules/toolbar */ "./node_modules/quill/modules/toolbar.js");
/* harmony import */ var quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/themes/snow */ "./node_modules/quill/themes/snow.js");
/* harmony import */ var quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/formats/bold */ "./node_modules/quill/formats/bold.js");
/* harmony import */ var quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/formats/italic */ "./node_modules/quill/formats/italic.js");
/* harmony import */ var quill_formats_underline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/formats/underline */ "./node_modules/quill/formats/underline.js");
/* harmony import */ var quill_formats_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quill/formats/header */ "./node_modules/quill/formats/header.js");
/* harmony import */ var quill_formats_align__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! quill/formats/align */ "./node_modules/quill/formats/align.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/quill.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/09/2020 13:25










quill_core__WEBPACK_IMPORTED_MODULE_1__["default"].register({
  'modules/toolbar': quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
  'themes/snow': quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__["default"],
  'formats/bold': quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__["default"],
  'formats/italic': quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__["default"],
  'formats/underline': quill_formats_underline__WEBPACK_IMPORTED_MODULE_6__["default"],
  'formats/header': quill_formats_header__WEBPACK_IMPORTED_MODULE_7__["default"],
  'formats/align': quill_formats_align__WEBPACK_IMPORTED_MODULE_8__["AlignStyle"]
});
/* harmony default export */ __webpack_exports__["default"] = (quill_core__WEBPACK_IMPORTED_MODULE_1__["default"]);
var options = {
  theme: 'snow',
  toolbar: 'full'
};
var toolbarFullOptions = [[{
  'header': [1, 2, 3, 4, 5, 6, false]
}, {
  'size': ['small', false, 'large', 'huge']
}], ['bold', 'italic', 'underline'], // toggled buttons
[{
  'color': []
}, {
  'background': []
}], // dropdown with defaults from theme
[{
  'header': 1
}, {
  'header': 2
}, 'blockquote', 'code-block'], [{
  'list': 'ordered'
}, {
  'list': 'bullet'
}, {
  'indent': '-1'
}, {
  'indent': '+1'
}], ['link'], ['clean'] // remove formatting button
];

if (options.toolbar !== undefined) {
  var toolbar = options.toolbar.toLowerCase();

  if (toolbar == 'full') {
    options.modules = {
      //syntax: 'true',
      toolbar: toolbarFullOptions
    };
  }
}

jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).ready(function () {
  initQuill();
});
jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).ajaxComplete(function () {
  initQuill();
});

function initQuill() {
  var obj = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-provide="quill"]');

  if (obj.length === 1) {
    new quill_core__WEBPACK_IMPORTED_MODULE_1__["default"](jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-provide="quill"]')[0], options);
  }
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

},[["./assets/js/pages/adm.stage_courrier.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7c3f1a6f","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~a14823c0","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~38bcb1f7","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~31cc1171","vendors~adm.stage_courrier~quill"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3F1aWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlX2NvdXJyaWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9xdWlsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyJlZF9jb3VycmllciIsImVkX0VUQVRfU1RBR0VfQVVUT1JJU0UiLCJlZF9FVEFUX1NUQUdFX0RFUE9TRSIsImVkX0VUQVRfU1RBR0VfVkFMSURFIiwiZWRfRVRBVF9TVEFHRV9SRUZVUyIsImVkX0VUQVRfU1RBR0VfSU5DT01QTEVUIiwiZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUiLCJlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSIsImVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSIsInRhYkVkIiwibG9hZFF1aWxsIiwiJGlkIiwib3B0aW9ucyIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiY29udGFpbmVyIiwiaGFuZGxlcnMiLCJ2YWx1ZSIsImN1cnNvclBvc2l0aW9uIiwicXVpbGwiLCJnZXRTZWxlY3Rpb24iLCJpbmRleCIsImluc2VydFRleHQiLCJzZXRTZWxlY3Rpb24iLCJsZW5ndGgiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwiUXVpbGwiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZXRhdCIsImRhdGEiLCJvbmdsZXQiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidXVpZCIsIm1haWwiLCJtZXRob2QiLCJtZXNzYWdlIiwiZ2V0VGV4dCIsInN1amV0IiwidmFsIiwic3VjY2VzcyIsImFkZENhbGxvdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwZXJpb2RlIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0aGVuIiwicmVzdWx0IiwiaWQiLCJ0eXBlIiwic2V0VGV4dCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJyZWdpc3RlciIsIlRvb2xiYXIiLCJTbm93IiwiQm9sZCIsIkl0YWxpYyIsIlVuZGVybGluZSIsIkhlYWRlciIsIkFsaWduU3R5bGUiLCJ0b29sYmFyRnVsbE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImluaXRRdWlsbCIsImFqYXhDb21wbGV0ZSIsIm9iaiIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsInBvcCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsb2NhdGlvbiIsImF0dHIiLCJtaXhpbiIsImNzcmYiLCJfdG9rZW4iLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJmaWVsZCIsIiRvYmoiLCIkaHRtbCIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsImVhY2gi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IGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5zdGFnZV9jb3Vycmllci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI3LzA5LzIwMjAgMTQ6MzBcblxuaW1wb3J0IFF1aWxsIGZyb20gJy4uL3F1aWxsJ1xuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCBlZF9jb3VycmllciwgZWRfRVRBVF9TVEFHRV9BVVRPUklTRSwgZWRfRVRBVF9TVEFHRV9ERVBPU0UsIGVkX0VUQVRfU1RBR0VfVkFMSURFLCBlZF9FVEFUX1NUQUdFX1JFRlVTLFxuICBlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCxcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUsIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFLCBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUVcblxubGV0IHRhYkVkID0ge31cblxuZnVuY3Rpb24gbG9hZFF1aWxsICgkaWQpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICB0b29sYmFyOiB7XG4gICAgICAgIGNvbnRhaW5lcjogJyN0b29sYmFyXycgKyAkaWQsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgJ2N1c3RvbXNmaWVsZHMnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMucXVpbGwuZ2V0U2VsZWN0aW9uKCkuaW5kZXhcbiAgICAgICAgICAgICAgdGhpcy5xdWlsbC5pbnNlcnRUZXh0KGN1cnNvclBvc2l0aW9uLCB2YWx1ZSlcbiAgICAgICAgICAgICAgdGhpcy5xdWlsbC5zZXRTZWxlY3Rpb24oY3Vyc29yUG9zaXRpb24gKyB2YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjogJ0NvbXBvc2V6IGxlIGNvcnBzIGR1IG1lc3NhZ2UuLi4gTGFpc3NlciB2aWRlIHBvdXIgdXRpbGlzZXIgbGUgbWFpbCBwYXIgZMOpZmF1dC4nLFxuICAgIHRoZW1lOiAnc25vdydcbiAgfVxuICByZXR1cm4gbmV3IFF1aWxsKCcjdGV4dF8nICsgJGlkLCBvcHRpb25zKVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGVkX0VUQVRfU1RBR0VfQVVUT1JJU0UgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQVVUT1JJU0UnKVxuICBlZF9FVEFUX1NUQUdFX0RFUE9TRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9ERVBPU0UnKVxuICBlZF9FVEFUX1NUQUdFX1ZBTElERSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9WQUxJREUnKVxuICBlZF9FVEFUX1NUQUdFX1JFRlVTID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX1JFRlVTJylcbiAgZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfSU5DT01QTEVUJylcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FJylcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFJylcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUnKVxuICBlZF9jb3VycmllciA9IGxvYWRRdWlsbCgnY291cnJpZXInKVxuXG4gIHRhYkVkID0ge1xuICAgICdlZF9FVEFUX1NUQUdFX0FVVE9SSVNFJzogZWRfRVRBVF9TVEFHRV9BVVRPUklTRSxcbiAgICAnZWRfRVRBVF9TVEFHRV9ERVBPU0UnOiBlZF9FVEFUX1NUQUdFX0RFUE9TRSxcbiAgICAnZWRfRVRBVF9TVEFHRV9WQUxJREUnOiBlZF9FVEFUX1NUQUdFX1ZBTElERSxcbiAgICAnZWRfRVRBVF9TVEFHRV9SRUZVUyc6IGVkX0VUQVRfU1RBR0VfUkVGVVMsXG4gICAgJ2VkX0VUQVRfU1RBR0VfSU5DT01QTEVUJzogZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQsXG4gICAgJ2VkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FJzogZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUsXG4gICAgJ2VkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFJzogZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUsXG4gICAgJ2VkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSc6IGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSxcbiAgICAnZWRfY291cnJpZXInOiBlZF9jb3VycmllclxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmVucmVnaXN0cmVNb2RlbGVNYWlsJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBldGF0ID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgY29uc3Qgb25nbGV0ID0gJCh0aGlzKS5kYXRhKCdlZCcpXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3N0YWdlX3BlcmlvZGVfY291cnJpZXJfc2F1dmVnYXJkZV9tb2RlbGUnLCB7XG4gICAgICB1dWlkOiAkKHRoaXMpLmRhdGEoJ3BlcmlvZGUnKSxcbiAgICAgIG1haWw6IGV0YXRcbiAgICB9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBtZXNzYWdlOiB0YWJFZFsnZWRfJyArIG9uZ2xldF0uZ2V0VGV4dCgpLFxuICAgICAgc3VqZXQ6ICQoJyNzdWpldF8nICsgZXRhdCkudmFsKClcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vZMOobGUgZW5yZWdpc3Ryw6kgIScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJlc2V0RGVmYXV0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGxldCBldGF0ID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgbGV0IHBlcmlvZGUgPSAkKHRoaXMpLmRhdGEoJ3BlcmlvZGUnKVxuXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGUgcmV0b3VyIGF1IG1lc3NhZ2UgcGFyIGTDqWZhdXQgPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9zdGFnZV9wZXJpb2RlX2NvdXJyaWVyX3Jlc2V0Jywge2lkOiBwZXJpb2RlLCBldGF0OiBldGF0fSksXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRhYkVkWydlZF8nICsgZXRhdF0uc2V0VGV4dCgnJylcbiAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocywgcmV0b3VyIGF1IG1lc3NhZ2UgcGFyIGTDqWZhdXQnLCAnc3VjY2VzcycpXG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnTWVzc2FnZSByw6lpbml0aWFsaXPDqSEnLFxuICAgICAgICAgICAgdGV4dDogJ0xlIG1lc3NhZ2UgcGFyIGTDqWZhdXQgc2VyYSBtYWludGVuYW50IHV0aWxpc8OpLicsXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3F1aWxsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDUvMDkvMjAyMCAxMzoyNVxuXG5pbXBvcnQgJy4uL2Nzcy9xdWlsbC5jc3MnXG5cbmltcG9ydCBRdWlsbCBmcm9tICdxdWlsbC9jb3JlJ1xuXG5pbXBvcnQgVG9vbGJhciBmcm9tICdxdWlsbC9tb2R1bGVzL3Rvb2xiYXInXG5pbXBvcnQgU25vdyBmcm9tICdxdWlsbC90aGVtZXMvc25vdydcblxuaW1wb3J0IEJvbGQgZnJvbSAncXVpbGwvZm9ybWF0cy9ib2xkJ1xuaW1wb3J0IEl0YWxpYyBmcm9tICdxdWlsbC9mb3JtYXRzL2l0YWxpYydcbmltcG9ydCBVbmRlcmxpbmUgZnJvbSAncXVpbGwvZm9ybWF0cy91bmRlcmxpbmUnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ3F1aWxsL2Zvcm1hdHMvaGVhZGVyJ1xuaW1wb3J0IHtBbGlnblN0eWxlfSBmcm9tICdxdWlsbC9mb3JtYXRzL2FsaWduJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5cblF1aWxsLnJlZ2lzdGVyKHtcbiAgJ21vZHVsZXMvdG9vbGJhcic6IFRvb2xiYXIsXG4gICd0aGVtZXMvc25vdyc6IFNub3csXG4gICdmb3JtYXRzL2JvbGQnOiBCb2xkLFxuICAnZm9ybWF0cy9pdGFsaWMnOiBJdGFsaWMsXG4gICdmb3JtYXRzL3VuZGVybGluZSc6IFVuZGVybGluZSxcbiAgJ2Zvcm1hdHMvaGVhZGVyJzogSGVhZGVyLFxuICAnZm9ybWF0cy9hbGlnbic6IEFsaWduU3R5bGVcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgUXVpbGxcblxubGV0IG9wdGlvbnMgPSB7XG4gIHRoZW1lOiAnc25vdycsXG4gIHRvb2xiYXI6ICdmdWxsJ1xufVxuXG5sZXQgdG9vbGJhckZ1bGxPcHRpb25zID0gW1xuICBbXG4gICAgeydoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdfSxcbiAgICB7J3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ119XG4gIF0sXG4gIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcbiAgW3snY29sb3InOiBbXX0sIHsnYmFja2dyb3VuZCc6IFtdfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuICBbeydoZWFkZXInOiAxfSwgeydoZWFkZXInOiAyfSwgJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxuICBbeydsaXN0JzogJ29yZGVyZWQnfSwgeydsaXN0JzogJ2J1bGxldCd9LCB7J2luZGVudCc6ICctMSd9LCB7J2luZGVudCc6ICcrMSd9XSxcbiAgWydsaW5rJ10sXG4gIFsnY2xlYW4nXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZvcm1hdHRpbmcgYnV0dG9uXG5dXG5cbmlmIChvcHRpb25zLnRvb2xiYXIgIT09IHVuZGVmaW5lZCkge1xuICB2YXIgdG9vbGJhciA9IG9wdGlvbnMudG9vbGJhci50b0xvd2VyQ2FzZSgpXG4gIGlmICh0b29sYmFyID09ICdmdWxsJykge1xuICAgIG9wdGlvbnMubW9kdWxlcyA9IHtcbiAgICAgIC8vc3ludGF4OiAndHJ1ZScsXG4gICAgICB0b29sYmFyOiB0b29sYmFyRnVsbE9wdGlvbnNcbiAgICB9XG4gIH1cbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBpbml0UXVpbGwoKVxufSlcblxuJChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uICgpIHtcbiAgaW5pdFF1aWxsKClcbn0pXG5cbmZ1bmN0aW9uIGluaXRRdWlsbCAoKSB7XG4gIGxldCBvYmogPSAkKCdbZGF0YS1wcm92aWRlPVwicXVpbGxcIl0nKVxuICBpZiAob2JqLmxlbmd0aCA9PT0gMSkge1xuICAgIG5ldyBRdWlsbCgkKCdbZGF0YS1wcm92aWRlPVwicXVpbGxcIl0nKVswXSwgb3B0aW9ucylcbiAgfVxufVxuXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMzAvMDcvMjAyMCAxMToxOFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xuXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3RvdG8nKVxuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcbiAgbGV0ICRodG1sID0gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIC8+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+PC9kaXY+J1xuICByZXR1cm4gJGh0bWxcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iXSwic291cmNlUm9vdCI6IiJ9